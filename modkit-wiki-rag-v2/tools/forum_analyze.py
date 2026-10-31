"""FASE A — Analisis del dataset del foro (state/forum-raw/).

Produce state/forum-raw/analysis/cases.jsonl con un registro por tema detallado:
  id, url, categoria, titulo (original + EN), fechas, views, clase, sintoma (OP),
  solucion (post aceptado), evidencia de auto-resolucion, menciones de version,
  idioma del OP.

Clases:
  accepted       — has_accepted_answer y post aceptado localizado.
  accepted_chunk — aceptado pero el post esta fuera del primer chunk (flag).
  auto-resuelto  — sin aceptar; el hilo contiene marcadores de resolucion.
  sin-resolucion — sin aceptar y sin marcadores.
  (la separacion (a) 'evidente' vs (c) 'sin solucion' se decide en revision,
   con este analisis como base: campo derivable_hint para candidatos a (a)).

Uso: python tools/forum_analyze.py
"""
from __future__ import annotations

import html as html_mod
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "state" / "forum-raw"
ANA = RAW / "analysis"
UA = "modkit-data-rag/1.0"

RESOLVED_MARKERS = re.compile(
    r"(\bi (fixed|solved|managed|figured)\b|\bi was able to\b|\bfigured it out\b"
    r"|\bproblem solved\b|\bissue (is )?(resolved|solved|fixed)\b|\bworking (now|again)\b"
    r"|\bworks (now|fine|again|perfectly)\b|\bthat worked\b|\bturns out\b"
    r"|\bthank(s| you)[^.\n]{0,50}(worked|fixed|solved|working|solution)\b"
    r"|\bfix(ed) (it|the issue|by)\b|\bsolucionado\b|\bresuelto\b|\barreglado\b"
    r"|\bme funciono\b|\bgelost\b|\bresolu\b)",
    re.I,
)
DERIVABLE_HINTS = [
    r"enable cheats?", r"psycat", r"save file", r"where.{1,20}sav(e|es)", r"mods folder",
    r"install (the )?mod", r"how (do|to) (i )?(install|enable|get)", r"change language",
    r"graphics settings", r"camera (angle|controls|settings)", r"cheat code",
]
VERSION_RE = re.compile(
    r"(build|patch|version|update|v(?:er)?)\D{0,12}(\d+\.\d+(?:\.\d+)?)|"
    r"(\d+\.\d+(?:\.\d+)?)(?=\W)", re.I,
)


def cooked_to_text(cooked: str, limit: int = 3000) -> str:
    text = re.sub(r"<br\s*/?>", "\n", cooked)
    text = re.sub(r"</p>", "\n\n", text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html_mod.unescape(text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()[:limit]


def version_mentions(text: str) -> list[str]:
    found = []
    for m in VERSION_RE.finditer(text):
        ctx = text[max(0, m.start() - 40): m.end() + 40]
        if re.search(r"build|patch|version|update", ctx, re.I):
            ver = m.group(2) or m.group(3)
            if ver and ver not in found:
                found.append(ver)
    return found[:5]


def fetch_post(post_id: int) -> dict | None:
    req = urllib.request.Request(
        f"https://forum.playinzoi.com/posts/{post_id}.json",
        headers={"User-Agent": UA, "Accept": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            time.sleep(1.0)
            return json.loads(resp.read().decode("utf-8"))
    except Exception as err:  # noqa: BLE001
        print(f"  post {post_id}: {err}", file=sys.stderr)
        return None


def analyze_topic(rec: dict) -> dict:
    tpath = RAW / "topics" / f"{rec['id']}.json"
    data = json.loads(tpath.read_text(encoding="utf-8"))
    posts = data.get("post_stream", {}).get("posts", [])
    stream_len = len(data.get("post_stream", {}).get("stream", []))
    op = posts[0] if posts else None
    accepted = next((p for p in posts if p.get("accepted_answer")), None)

    case = {
        "id": rec["id"],
        "url": rec["url"],
        "category": rec["category_slug"],
        "title": rec.get("title", ""),
        "title_en": rec.get("fancy_title", ""),
        "created_at": rec.get("created_at"),
        "views": rec.get("views", 0),
        "posts_count": rec.get("posts_count", 0),
        "stream_len": stream_len,
        "has_accepted_answer": bool(rec.get("has_accepted_answer")),
        "class": None,
        "op_language": op.get("language") if op else None,
        "symptom": cooked_to_text(op.get("cooked", "")) if op else "",
        "solution": "",
        "solution_post_number": None,
        "resolution_evidence": [],
        "versions": [],
    }
    case["versions"] = version_mentions(case["symptom"])

    if accepted:
        case["class"] = "accepted"
        case["solution"] = cooked_to_text(accepted.get("cooked", ""))
        case["solution_post_number"] = accepted.get("post_number")
        case["versions"] += version_mentions(case["solution"])
    elif rec.get("has_accepted_answer"):
        case["class"] = "accepted-chunk-pending"
        # el post aceptado esta fuera del chunk cargado: intentar fetch por stream
        stream = data.get("post_stream", {}).get("stream", [])
        extra_ids = [pid for pid in stream[20:]][:10]
        for pid in extra_ids:
            p = fetch_post(pid)
            if p and p.get("accepted_answer"):
                case["class"] = "accepted"
                case["solution"] = cooked_to_text(p.get("cooked", ""))
                case["solution_post_number"] = p.get("post_number")
                case["versions"] += version_mentions(case["solution"])
                break
    else:
        evidence = []
        op_user = op.get("username") if op else None
        for p in posts[1:]:
            body = cooked_to_text(p.get("cooked", ""), limit=600)
            if RESOLVED_MARKERS.search(body):
                evidence.append({
                    "post_number": p.get("post_number"),
                    "by_op": p.get("username") == op_user,
                    "excerpt": body[:300],
                })
        case["resolution_evidence"] = evidence[:3]
        case["class"] = "auto-resuelto" if any(e["by_op"] for e in evidence) else (
            "pistas-no-OP" if evidence else "sin-resolucion"
        )
        for e in evidence:
            case["versions"] += version_mentions(e["excerpt"])
        hints = [h for h in DERIVABLE_HINTS if re.search(h, case["symptom"], re.I)]
        case["derivable_hint"] = hints[:3]

    case["versions"] = sorted(set(case["versions"]))[:5]
    return case


def main() -> int:
    ANA.mkdir(parents=True, exist_ok=True)
    index_path = RAW / "index.jsonl"
    if not index_path.exists():
        print("falta index.jsonl; ejecuta forum_capture.py index primero")
        return 1
    cases = []
    for line in index_path.read_text(encoding="utf-8").splitlines():
        rec = json.loads(line)
        if not rec.get("detail_captured"):
            continue
        try:
            cases.append(analyze_topic(rec))
        except Exception as err:  # noqa: BLE001
            print(f"topic {rec['id']}: ERROR {err}", file=sys.stderr)
    out = ANA / "cases.jsonl"
    with out.open("w", encoding="utf-8") as fh:
        for c in cases:
            fh.write(json.dumps(c, ensure_ascii=False) + "\n")
    from collections import Counter
    counts = Counter(c["class"] for c in cases)
    print(f"cases.jsonl: {len(cases)} temas analizados")
    for k, v in counts.most_common():
        print(f"  {k}: {v}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
