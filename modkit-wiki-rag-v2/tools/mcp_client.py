"""Minimal MCP client for the inzoi-game / inzoi-modkit HTTP servers (port 11212/11213).

Usage:
    python tools/mcp_client.py game stat_get_all '{}'
    python tools/mcp_client.py game cli_help '{"command": "zz.noexiste"}'
    python tools/mcp_client.py modkit modkit_list_projects '{}'

Session ids are cached under state/mcp-sessions/<server>.txt and re-initialized
automatically when the server rejects them (HTTP 404 after a game restart).
Stdlib only; print output is the tool's literal text response.
"""
from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
URLS = {"game": "http://localhost:11212/mcp", "modkit": "http://localhost:11213/mcp"}
SESSIONS = ROOT / "state" / "mcp-sessions"


def _post(url: str, payload: dict, headers: dict | None = None, timeout: int = 120):
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    base = {"Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json, text/event-stream"}
    if headers:
        base.update(headers)
    request = urllib.request.Request(url, data=data, headers=base, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = response.read().decode("utf-8", errors="replace")
        if "text/event-stream" in response.headers.get("Content-Type", ""):
            body = "\n".join(line[5:].lstrip() for line in body.splitlines() if line.startswith("data:"))
        return dict(response.headers), json.loads(body) if body.strip() else {}


def _session(server: str) -> str | None:
    """Devuelve el session-id cacheado sin validarlo (validacion diferida en call())."""
    SESSIONS.mkdir(parents=True, exist_ok=True)
    cache = SESSIONS / f"{server}.txt"
    sid = cache.read_text(encoding="utf-8").strip() if cache.exists() else None
    if sid:
        return sid
    return _inicializar(server)


def _inicializar(server: str) -> str | None:
    headers, resp = _post(URLS[server],
                    {"jsonrpc": "2.0", "id": 1, "method": "initialize",
                     "params": {"protocolVersion": "2025-03-26", "capabilities": {},
                                "clientInfo": {"name": "runbook", "version": "1.0"}}})
    sid = resp.get("result", {}).get("sessionId") or headers.get("Mcp-Session-Id") or headers.get("mcp-session-id")
    if not sid:
        # servidor sin sesion (p.ej. inzoi-modkit): no se requiere Mcp-Session-Id
        return None
    _post(URLS[server], {"jsonrpc": "2.0", "method": "notifications/initialized"}, {"Mcp-Session-Id": sid})
    SESSIONS.mkdir(parents=True, exist_ok=True)
    (SESSIONS / f"{server}.txt").write_text(sid, encoding="utf-8")
    return sid


def call(server: str, tool: str, args: dict) -> dict:
    """Returns {"ok": bool, "is_error": bool, "text": str} with the literal tool response."""
    if server not in URLS:
        raise ValueError(f"Unknown server {server!r}; expected one of {sorted(URLS)}")
    sid = _session(server)
    headers = {"Mcp-Session-Id": sid} if sid else {}
    try:
        _, resp = _post(URLS[server],
                        {"jsonrpc": "2.0", "id": 2, "method": "tools/call",
                         "params": {"name": tool, "arguments": args}},
                        headers)
    except urllib.error.HTTPError as error:
        if error.code == 404 and sid:
            # sesion caducada (reinicio del servidor): re-inicializar y reintentar una vez
            (SESSIONS / f"{server}.txt").unlink(missing_ok=True)
            sid = _inicializar(server)
            headers = {"Mcp-Session-Id": sid} if sid else {}
            _, resp = _post(URLS[server],
                            {"jsonrpc": "2.0", "id": 3, "method": "tools/call",
                             "params": {"name": tool, "arguments": args}},
                            headers)
    if "error" in resp:
        return {"ok": False, "is_error": True, "text": json.dumps(resp["error"], ensure_ascii=False)}
    result = resp.get("result", {})
    texts = [c.get("text", "") for c in result.get("content", []) if c.get("type") == "text"]
    return {"ok": not result.get("isError"),
            "is_error": bool(result.get("isError")),
            "text": texts[0] if texts else json.dumps(result, ensure_ascii=False)}


def main(argv: list[str]) -> int:
    if len(argv) < 2 or argv[0] not in URLS:
        print(__doc__)
        return 2
    args = json.loads(argv[2]) if len(argv) > 2 else {}
    if not isinstance(args, dict):
        print("error: arguments must be a JSON object", file=sys.stderr)
        return 2
    try:
        result = call(argv[0], argv[1], args)
    except (OSError, RuntimeError, json.JSONDecodeError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 2
    print(result["text"])
    return 0 if result["ok"] else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
