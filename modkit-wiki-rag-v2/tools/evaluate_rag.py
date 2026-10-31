from __future__ import annotations

import argparse
import json
import sys
import urllib.error
import urllib.request
from collections import Counter
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
BATTERY_PATH = ROOT / "tests" / "fixtures" / "rag_battery.json"
MCP_BATTERY_PATH = ROOT / "tests" / "fixtures" / "rag_battery_mcp.json"
DEFAULT_URL = "http://127.0.0.1:8088"
OFFICIAL_SOURCES = ["modkit", "resources", "wiki", "mcp-tools"]


def _search(url: str, query: str, top_k: int) -> dict[str, Any]:
    payload = json.dumps({"query": query, "top_k": top_k}, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        url.rstrip("/") + "/search",
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=90) as response:
            result = json.loads(response.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, UnicodeDecodeError, json.JSONDecodeError) as error:
        raise RuntimeError(f"Search request failed for query {query!r}: {error}") from error
    if not isinstance(result, dict) or not isinstance(result.get("results"), list):
        raise RuntimeError(f"Search service returned an invalid result for query {query!r}")
    return result


def evaluate(url: str, top_k: int) -> int:
    battery = json.loads(BATTERY_PATH.read_text(encoding="utf-8"))
    if battery.get("version") != 1 or len(battery.get("cases", [])) != 24:
        raise RuntimeError(f"Invalid 24-test battery: {BATTERY_PATH}")

    cases_with_gold = 0
    cases_with_hit = 0
    expected_files = 0
    matched_files = 0
    policy_violations = 0
    source_counts: Counter[str] = Counter()

    for case in battery["cases"]:
        result = _search(url, case["query"], top_k)
        results = result["results"]
        source_filter = result.get("source_filter", {})
        if source_filter != {"mode": "official_default", "sources": OFFICIAL_SOURCES}:
            policy_violations += 1
            print(f"{case['id']} {case['title']}: POLICY FAIL source_filter={source_filter}")
        if any(hit.get("source") == "local" for hit in results):
            policy_violations += 1
            print(f"{case['id']} {case['title']}: POLICY FAIL local result returned")

        source_counts.update(str(hit.get("source", "unknown")) for hit in results)
        gold = set(case.get("expected_files", []))
        found = gold & {str(hit.get("file", "")) for hit in results}
        if gold:
            cases_with_gold += 1
            expected_files += len(gold)
            matched_files += len(found)
            if found:
                cases_with_hit += 1
            state = "HIT" if found == gold else "PARTIAL" if found else "MISS"
        elif case["expectation"] == "not_found":
            state = "ABSENCE-CHECK"
        else:
            state = "MANUAL-CHECK"

        titles = "; ".join(
            f"{hit.get('source')}:{hit.get('title')} ({hit.get('file')})"
            for hit in results[:3]
        )
        print(f"{case['id']} {state} {case['title']}: {titles}")

    case_recall = cases_with_hit / cases_with_gold if cases_with_gold else 0.0
    file_recall = matched_files / expected_files if expected_files else 0.0
    print(
        f"\n24 tests; evidence hit@{top_k}: {cases_with_hit}/{cases_with_gold} cases "
        f"({case_recall:.1%}); expected-file recall: {matched_files}/{expected_files} "
        f"({file_recall:.1%}); result sources: {dict(source_counts)}; "
        f"policy violations: {policy_violations}."
    )
    if policy_violations:
        return 1
    return 0


def evaluate_mcp(url: str) -> tuple[int, int, int, int]:
    battery = json.loads(MCP_BATTERY_PATH.read_text(encoding="utf-8"))
    cases = battery.get("cases", [])
    trampas = [c for c in cases if c.get("group") == "trampas"]
    nuevos = [c for c in cases if c.get("group") == "nuevos"]
    ayudas = [c for c in cases if c.get("group") == "ayudas"]
    if len(trampas) != 10 or len(nuevos) != 15:
        raise RuntimeError(f"Invalid MCP battery: expected 10 trampas + 15 nuevos, got {len(trampas)}+{len(nuevos)}")
    if len(ayudas) < 20:
        raise RuntimeError(f"Invalid MCP battery: expected >=20 ayudas, got {len(ayudas)}")
    totals = {}
    for name, group_cases in (("TRAMPAS", trampas), ("NUEVOS", nuevos), ("AYUDAS", ayudas)):
        ok = 0
        print(f"=== {name} ===")
        for case in group_cases:
            results = _search(url, case["query"], case["top_k"])["results"]
            expected = case["expected_file"]
            rank = next((i for i, hit in enumerate(results, 1) if str(hit.get("file", "")) == expected), None)
            passed = rank is not None and rank <= case["top_k"]
            if passed:
                ok += 1
            print(f"{'OK ' if passed else 'FAIL'} rank={rank} | {case['query'][:60]}")
            if not passed:
                top1 = str(results[0].get("file", "-")).split("/")[-1] if results else "-"
                print(f"      esperado: {expected}")
                print(f"      top-1:   {top1}")
        print(f"{name}: {ok}/{len(group_cases)}")
        print()
        totals[name] = ok
    return totals["TRAMPAS"], totals["NUEVOS"], totals.get("AYUDAS", 0), len(trampas), len(nuevos), len(ayudas)


def main() -> int:
    parser = argparse.ArgumentParser(description="Evaluate the inZOI ModKit RAG: 24-case battery + MCP traps and new cases")
    parser.add_argument("--url", default=DEFAULT_URL, help="Base URL of the local vector-search service")
    parser.add_argument("--top-k", type=int, default=None, help="Override the battery's top-k")
    parser.add_argument("--suite", choices=("all", "battery", "mcp"), default="all",
                        help="Which suite to run (default: all)")
    args = parser.parse_args()
    battery = json.loads(BATTERY_PATH.read_text(encoding="utf-8"))
    top_k = args.top_k if args.top_k is not None else battery["top_k"]
    if isinstance(top_k, bool) or not isinstance(top_k, int) or not 1 <= top_k <= 20:
        parser.error("--top-k must be an integer between 1 and 20")
    exit_code = 0
    try:
        if args.suite in ("battery", "all"):
            print("=== TANDA 1: bateria de 24 casos ===")
            exit_code = evaluate(args.url, top_k)
        if args.suite in ("mcp", "all"):
            print("=== TANDA 2: trampas y casos nuevos mcp-tools ===")
            traps_ok, new_ok, ayuda_ok, traps_total, new_total, ayuda_total = evaluate_mcp(args.url)
            new_pct = new_ok / new_total if new_total else 0.0
            ayuda_pct = ayuda_ok / ayuda_total if ayuda_total else 0.0
            print(f"RESUMEN: trampas {traps_ok}/{traps_total} (objetivo 10/10 en top-3) | "
                  f"nuevos {new_ok}/{new_total} ({new_pct:.0%}, objetivo >=80%) | "
                  f"ayudas {ayuda_ok}/{ayuda_total} ({ayuda_pct:.0%}, objetivo >=80%)")
            if traps_ok < traps_total or new_pct < 0.8 or ayuda_pct < 0.8:
                exit_code = max(exit_code, 1)
    except (OSError, RuntimeError, json.JSONDecodeError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 2
    return exit_code


if __name__ == "__main__":
    raise SystemExit(main())
