from __future__ import annotations

import argparse
import json
import os
import queue
import subprocess
import sys
import threading
import urllib.error
import urllib.request
from collections import deque
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable


TARGET_SERVERS = ("inzoi-game", "inzoi-modkit", "blender")
PROTOCOL_VERSION = "2024-11-05"
REQUEST_TIMEOUT_SECONDS = 45


class MCPError(RuntimeError):
    pass


def default_config_path() -> Path:
    appdata = os.environ.get("APPDATA")
    if appdata:
        return Path(appdata) / "Code" / "User" / "mcp.json"
    return Path.home() / "AppData" / "Roaming" / "Code" / "User" / "mcp.json"


def read_server_config(path: Path, selected_names: set[str]) -> dict[str, dict[str, Any]]:
    try:
        config = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise MCPError(f"Cannot read MCP config {path}: {exc}") from exc

    servers = config.get("servers", config.get("mcpServers"))
    if not isinstance(servers, dict):
        raise MCPError(f"{path} must contain a 'servers' or 'mcpServers' object")

    return {
        name: definition
        for name, definition in servers.items()
        if name in selected_names and isinstance(definition, dict)
    }


def read_http_message(response: Any) -> dict[str, Any]:
    body = response.read().decode("utf-8")
    if not body:
        return {}
    if "text/event-stream" in response.headers.get("Content-Type", ""):
        data = "\n".join(
            line[5:].lstrip()
            for line in body.splitlines()
            if line.startswith("data:")
        )
        body = data
    try:
        return json.loads(body)
    except json.JSONDecodeError as exc:
        raise MCPError(f"Server returned invalid JSON-RPC data: {body[:300]}") from exc


class HttpMCPClient:
    def __init__(self, url: str) -> None:
        self.url = url
        self.session_id: str | None = None
        self.protocol_version = PROTOCOL_VERSION
        self.request_id = 0

    def _post(self, message: dict[str, Any], expect_response: bool = True) -> dict[str, Any]:
        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream",
        }
        if self.session_id:
            headers["Mcp-Session-Id"] = self.session_id
        if message.get("method") != "initialize":
            headers["MCP-Protocol-Version"] = self.protocol_version

        request = urllib.request.Request(
            self.url,
            data=json.dumps(message).encode("utf-8"),
            headers=headers,
            method="POST",
        )
        try:
            with urllib.request.urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
                self.session_id = response.headers.get("Mcp-Session-Id", self.session_id)
                parsed = read_http_message(response)
        except (urllib.error.URLError, TimeoutError) as exc:
            raise MCPError(f"HTTP MCP request to {self.url} failed: {exc}") from exc
        if expect_response:
            return parsed
        return {}

    def _request(self, method: str, params: dict[str, Any]) -> dict[str, Any]:
        self.request_id += 1
        result = self._post(
            {"jsonrpc": "2.0", "id": self.request_id, "method": method, "params": params}
        )
        return validate_rpc_result(result)

    def list_tools(
        self,
    ) -> tuple[str, dict[str, Any], list[dict[str, Any]], dict[str, Any], dict[str, Any]]:
        initialized = self._request(
            "initialize",
            {
                "protocolVersion": PROTOCOL_VERSION,
                "capabilities": {},
                "clientInfo": {"name": "mcp-tool-schema-exporter", "version": "1.0"},
            },
        )
        self.protocol_version = initialized.get("protocolVersion", PROTOCOL_VERSION)
        self._post(
            {"jsonrpc": "2.0", "method": "notifications/initialized"},
            expect_response=False,
        )
        capabilities = initialized.get("capabilities", {})
        tools = list_collection(self._request, "tools/list", "tools")
        resources = optional_collection(
            self._request, capabilities, "resources", "resources/list", "resources"
        )
        prompts = optional_collection(
            self._request, capabilities, "prompts", "prompts/list", "prompts"
        )
        return self.protocol_version, capabilities, tools, resources, prompts

class StdioMCPClient:
    def __init__(self, command: list[str], cwd: str | None = None) -> None:
        self.command = command
        self.cwd = cwd
        self.process: subprocess.Popen[str] | None = None
        self.responses: queue.Queue[dict[str, Any] | str | None] = queue.Queue()
        self.stderr_tail: deque[str] = deque(maxlen=20)
        self.request_id = 0
        self.protocol_version = PROTOCOL_VERSION

    def _read_stdout(self) -> None:
        assert self.process and self.process.stdout
        for line in self.process.stdout:
            try:
                message = json.loads(line)
            except json.JSONDecodeError:
                self.responses.put(f"Non-JSON stdout from server: {line.rstrip()}")
                continue
            self.responses.put(message)
        self.responses.put(None)

    def _read_stderr(self) -> None:
        assert self.process and self.process.stderr
        for line in self.process.stderr:
            self.stderr_tail.append(line.rstrip())

    def _send(self, message: dict[str, Any], expect_response: bool = True) -> dict[str, Any]:
        assert self.process and self.process.stdin
        self.process.stdin.write(json.dumps(message, separators=(",", ":")) + "\n")
        self.process.stdin.flush()
        if not expect_response:
            return {}

        request_id = message["id"]
        while True:
            try:
                response = self.responses.get(timeout=REQUEST_TIMEOUT_SECONDS)
            except queue.Empty as exc:
                raise MCPError(f"Timed out waiting for response from: {' '.join(self.command)}") from exc
            if response is None:
                details = "\n".join(self.stderr_tail)
                raise MCPError(f"MCP server exited before responding. {details}".strip())
            if isinstance(response, str):
                continue
            if response.get("id") == request_id:
                return validate_rpc_result(response)

    def _request(self, method: str, params: dict[str, Any]) -> dict[str, Any]:
        self.request_id += 1
        return self._send(
            {"jsonrpc": "2.0", "id": self.request_id, "method": method, "params": params}
        )

    def list_tools(
        self,
    ) -> tuple[str, dict[str, Any], list[dict[str, Any]], dict[str, Any], dict[str, Any]]:
        try:
            self.process = subprocess.Popen(
                self.command,
                cwd=self.cwd,
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                encoding="utf-8",
                errors="replace",
                bufsize=1,
            )
        except OSError as exc:
            raise MCPError(f"Could not start MCP server {self.command[0]!r}: {exc}") from exc

        threading.Thread(target=self._read_stdout, daemon=True).start()
        threading.Thread(target=self._read_stderr, daemon=True).start()
        try:
            initialized = self._request(
                "initialize",
                {
                    "protocolVersion": PROTOCOL_VERSION,
                    "capabilities": {},
                    "clientInfo": {"name": "mcp-tool-schema-exporter", "version": "1.0"},
                },
            )
            self.protocol_version = initialized.get("protocolVersion", PROTOCOL_VERSION)
            capabilities = initialized.get("capabilities", {})
            self._send(
                {"jsonrpc": "2.0", "method": "notifications/initialized"},
                expect_response=False,
            )
            tools = list_collection(self._request, "tools/list", "tools")
            resources = optional_collection(
                self._request, capabilities, "resources", "resources/list", "resources"
            )
            prompts = optional_collection(
                self._request, capabilities, "prompts", "prompts/list", "prompts"
            )
            return self.protocol_version, capabilities, tools, resources, prompts
        finally:
            self._stop()

    def _stop(self) -> None:
        if not self.process:
            return
        if self.process.poll() is None:
            self.process.terminate()
            try:
                self.process.wait(timeout=3)
            except subprocess.TimeoutExpired:
                self.process.kill()
                self.process.wait()


def validate_rpc_result(message: dict[str, Any]) -> dict[str, Any]:
    if "error" in message:
        error = message["error"]
        raise MCPError(f"JSON-RPC error {error.get('code')}: {error.get('message')}")
    result = message.get("result")
    if not isinstance(result, dict):
        raise MCPError("JSON-RPC response does not contain a result object")
    return result


def list_collection(
    request: Callable[[str, dict[str, Any]], dict[str, Any]],
    method: str,
    key: str,
) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    cursor: str | None = None
    while True:
        result = request(method, {"cursor": cursor} if cursor else {})
        batch = result.get(key, [])
        if not isinstance(batch, list):
            raise MCPError(f"{method} response has no {key} array")
        items.extend(batch)
        cursor = result.get("nextCursor")
        if not cursor:
            return items


def optional_collection(
    request: Callable[[str, dict[str, Any]], dict[str, Any]],
    capabilities: dict[str, Any],
    capability: str,
    method: str,
    key: str,
) -> dict[str, Any]:
    if capability not in capabilities:
        return {"status": "not_advertised", "items": []}
    try:
        return {"status": "ok", "items": list_collection(request, method, key)}
    except MCPError as exc:
        return {"status": "error", "error": str(exc), "items": []}


def tool_to_json(tool: dict[str, Any]) -> dict[str, Any]:
    input_schema = tool.get("inputSchema") or {"type": "object", "properties": {}}
    properties = input_schema.get("properties", {})
    required_names = set(input_schema.get("required", []))
    parameters = []
    if isinstance(properties, dict):
        for name, schema in properties.items():
            schema = schema if isinstance(schema, dict) else {}
            parameter = {
                "name": name,
                "type": schema.get("type", "unspecified"),
                "required": name in required_names,
                "description": schema.get("description"),
                "schema": schema,
            }
            parameters.append(parameter)

    output_schema = tool.get("outputSchema")
    return {
        "name": tool.get("name"),
        "description": tool.get("description", ""),
        "parameters": parameters,
        "input_schema": input_schema,
        "return_type": output_schema.get("type", "schema") if output_schema else "unspecified",
        "return_schema": output_schema,
    }


def connect_and_list(
    name: str, definition: dict[str, Any]
) -> tuple[str, list[dict[str, Any]], dict[str, Any], dict[str, Any]]:
    transport = definition.get("type")
    if transport == "http":
        url = definition.get("url")
        if not isinstance(url, str):
            raise MCPError(f"HTTP server {name!r} has no URL")
        client = HttpMCPClient(url)
        protocol, _, tools, resources, prompts = client.list_tools()
        return protocol, tools, resources, prompts
    if transport == "stdio":
        command = definition.get("command")
        args = definition.get("args", [])
        if not isinstance(command, str) or not isinstance(args, list):
            raise MCPError(f"stdio server {name!r} needs a command and argument list")
        cwd = definition.get("cwd")
        client = StdioMCPClient([command, *map(str, args)], cwd=cwd)
        protocol, _, tools, resources, prompts = client.list_tools()
        return protocol, tools, resources, prompts
    raise MCPError(f"Unsupported transport {transport!r} for server {name!r}")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Export MCP tool metadata using initialize and tools/list only."
    )
    parser.add_argument(
        "--config",
        type=Path,
        default=default_config_path(),
        help="MCP JSON config (defaults to the VS Code user mcp.json).",
    )
    parser.add_argument(
        "--server",
        action="append",
        dest="servers",
        help="Server name to export; may be repeated. Defaults to inZOI game, ModKit, and Blender.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("state/mcp-tools"),
        help="Directory for one JSON file per server (default: ./state/mcp-tools).",
    )
    args = parser.parse_args()
    selected_names = set(args.servers or TARGET_SERVERS)

    try:
        definitions = read_server_config(args.config, selected_names)
    except MCPError as exc:
        print(str(exc), file=sys.stderr)
        return 2

    catalogs: dict[str, dict[str, Any]] = {}
    for name in sorted(selected_names):
        if name not in definitions:
            catalogs[name] = {"status": "not_configured", "tools": []}
            continue
        definition = definitions[name]
        try:
            protocol, tools, resources, prompts = connect_and_list(name, definition)
            catalogs[name] = {
                "status": "ok",
                "transport": definition.get("type"),
                "protocol_version": protocol,
                "tool_count": len(tools),
                "tools": [tool_to_json(tool) for tool in tools],
                "resources": resources,
                "prompts": prompts,
            }
        except MCPError as exc:
            catalogs[name] = {
                "status": "error",
                "transport": definition.get("type"),
                "error": str(exc),
                "tools": [],
            }

    try:
        args.output_dir.mkdir(parents=True, exist_ok=True)
        for name, server in catalogs.items():
            catalog = {
                "metadata_source": (
                    "MCP initialize, tools/list, resources/list, and prompts/list; "
                    "no tools/call requests are made"
                ),
                "captured_at": datetime.now(timezone.utc).isoformat(),
                "server": name,
                **server,
            }
            output_path = args.output_dir / f"{name}.json"
            output_path.write_text(
                json.dumps(catalog, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
    except OSError as exc:
        print(f"Could not write server JSON files in {args.output_dir}: {exc}", file=sys.stderr)
        return 2

    for name, server in catalogs.items():
        print(f"{name}: {server['status']} ({server.get('tool_count', 0)} tools)")
        print(f"JSON: {(args.output_dir / f'{name}.json').resolve()}")
    return 1 if any(server["status"] == "error" for server in catalogs.values()) else 0


if __name__ == "__main__":
    raise SystemExit(main())
