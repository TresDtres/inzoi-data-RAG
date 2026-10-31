"""FASE A — Captura del foro inZOI (Discourse) para el RAG de ayudas.

Fuentes: https://forum.playinzoi.com (Discourse, API JSON publica).
Reglas: rate-limit ~1 req/s, User-Agent identificativo, guarda la URL fuente de
cada tema para citado, reanudable (salta lo ya descargado).

Salidas en state/forum-raw/:
  categories.json            — volcado de /categories.json
  lists_raw/<slug>-pNN.json  — paginas crudas de /c/<slug>/<id>.json?page=N
  lists/<slug>.jsonl        — un registro JSON por tema (metadatos, dedupe por id)
  topics/<id>.json          — detalle crudo de /t/<id>.json
  index.jsonl               — indice combinado de todos los temas capturados
  progress.json             — estado del capturador

Criterios de detalle (Fase A):
  - aceptados con views > 50: SIEMPRE detalle (sintoma + solucion).
  - no aceptados de technical-help / q-a: detalle (para clasificar a/b/c).
  - no aceptados de bug-reports: detalle solo si views > 50 (baja traccion se
    cuenta aparte en el informe; documentado como decision de muestreo).

Uso:
  python tools/forum_capture.py lists     # fase 1: listas de temas
  python tools/forum_capture.py details   # fase 2: detalles segun criterios
  python tools/forum_capture.py index     # fase 3: reconstruir index.jsonl
"""
from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "state" / "forum-raw"
BASE = "https://forum.playinzoi.com"
UA = "modkit-data-rag/1.0 (local RAG capture; respects ToS; ~1 req/s)"
RATE_LIMIT_S = 1.0
PAGE_SIZE = 30
VIEWS_MIN_ACCEPTED = 50
VIEWS_MIN_BUGREPORT_DETAIL = 50
HELP_CATEGORIES = {"technical-help", "q-a"}

CATEGORIES = {
    "technical-help": 6,
    "q-a": 10,
    "bug-reports": 7,
}


def _get(url: str, retries: int = 2) -> bytes | None:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read()
        except (urllib.error.URLError, TimeoutError) as err:
            if attempt == retries:
                print(f"FAIL {url}: {err}", file=sys.stderr)
                return None
            time.sleep(3.0)
    return None


def _sleep():
    time.sleep(RATE_LIMIT_S)


def stage_lists() -> None:
    (OUT / "lists_raw").mkdir(parents=True, exist_ok=True)
    (OUT / "lists").mkdir(parents=True, exist_ok=True)

    cat_bytes = _get(f"{BASE}/categories.json")
    if cat_bytes:
        (OUT / "categories.json").write_bytes(cat_bytes)
        print("categories.json guardado")
    _sleep()

    for slug, cat_id in CATEGORIES.items():
        seen: dict[int, dict] = {}
        index_path = OUT / "lists" / f"{slug}.jsonl"
        if index_path.exists():
            for line in index_path.read_text(encoding="utf-8").splitlines():
                if line.strip():
                    rec = json.loads(line)
                    rec["_written"] = True
                    seen[rec["id"]] = rec
            print(f"{slug}: {len(seen)} temas ya indexados (reanudando)")
        page = 1
        empty_streak = 0
        while True:
            raw_path = OUT / "lists_raw" / f"{slug}-p{page:03d}.json"
            if raw_path.exists():
                data = json.loads(raw_path.read_text(encoding="utf-8"))
            else:
                blob = _get(f"{BASE}/c/{slug}/{cat_id}.json?page={page}")
                _sleep()
                if blob is None:
                    empty_streak += 1
                    if empty_streak >= 3:
                        break
                    page += 1
                    continue
                raw_path.write_bytes(blob)
                data = json.loads(blob)
            topics = data.get("topic_list", {}).get("topics", [])
            if not topics:
                break
            new = 0
            for t in topics:
                rec = {
                    "id": t["id"],
                    "title": t.get("title", ""),
                    "fancy_title": t.get("fancy_title", ""),
                    "slug": t.get("slug", ""),
                    "category_id": t.get("category_id"),
                    "category_slug": slug,
                    "tags": [tag["name"] if isinstance(tag, dict) else tag
                             for tag in (t.get("tags") or [])],
                    "posts_count": t.get("posts_count", 0),
                    "reply_count": t.get("reply_count", 0),
                    "views": t.get("views", 0),
                    "like_count": t.get("like_count", 0),
                    "op_like_count": t.get("op_like_count", 0),
                    "has_accepted_answer": bool(t.get("has_accepted_answer")),
                    "created_at": t.get("created_at"),
                    "last_posted_at": t.get("last_posted_at"),
                    "closed": bool(t.get("closed")),
                    "pinned": bool(t.get("pinned")),
                    "url": f"{BASE}/t/{t.get('slug', 'topic')}/{t['id']}",
                }
                if t["id"] not in seen:
                    seen[t["id"]] = rec
                    new += 1
            with index_path.open("a", encoding="utf-8") as fh:
                for rec in seen.values():
                    if rec.get("_written"):
                        continue
                    fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
                    rec["_written"] = True
            print(f"{slug} p{page}: {len(topics)} temas (+{new} nuevos), total {len(seen)}")
            page += 1
        print(f"{slug}: {len(seen)} temas totales")


def _topic_needs_detail(rec: dict) -> bool:
    if rec["has_accepted_answer"] and rec["views"] > VIEWS_MIN_ACCEPTED:
        return True
    if not rec["has_accepted_answer"]:
        if rec["category_slug"] in HELP_CATEGORIES:
            return True
        if rec["category_slug"] == "bug-reports" and rec["views"] > VIEWS_MIN_BUGREPORT_DETAIL:
            return True
    return False


def stage_details() -> None:
    (OUT / "topics").mkdir(parents=True, exist_ok=True)
    wanted: list[dict] = []
    for slug in CATEGORIES:
        p = OUT / "lists" / f"{slug}.jsonl"
        if not p.exists():
            print(f"AVISO: falta {p}; ejecuta 'lists' primero")
            continue
        for line in p.read_text(encoding="utf-8").splitlines():
            if line.strip():
                rec = json.loads(line)
                if _topic_needs_detail(rec):
                    wanted.append(rec)
    done = 0
    skipped = 0
    for i, rec in enumerate(wanted, 1):
        tpath = OUT / "topics" / f"{rec['id']}.json"
        if tpath.exists():
            skipped += 1
            continue
        blob = _get(f"{BASE}/t/{rec['id']}.json")
        _sleep()
        if blob:
            tpath.write_bytes(blob)
            done += 1
        if i % 50 == 0:
            print(f"detalles: {i}/{len(wanted)} (nuevos {done}, ya {skipped})")
    print(f"detalles completos: {len(wanted)} objetivo, {done} nuevos, {skipped} ya existentes")


def stage_index() -> None:
    all_recs: dict[int, dict] = {}
    for slug in CATEGORIES:
        p = OUT / "lists" / f"{slug}.jsonl"
        if not p.exists():
            continue
        for line in p.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            rec = json.loads(line)
            rec.pop("_written", None)
            tpath = OUT / "topics" / f"{rec['id']}.json"
            rec["detail_captured"] = tpath.exists()
            all_recs[rec["id"]] = rec
    with (OUT / "index.jsonl").open("w", encoding="utf-8") as fh:
        for tid in sorted(all_recs):
            fh.write(json.dumps(all_recs[tid], ensure_ascii=False) + "\n")
    print(f"index.jsonl: {len(all_recs)} temas")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("stage", choices=("lists", "details", "index", "all"))
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    if args.stage in ("lists", "all"):
        stage_lists()
    if args.stage in ("details", "all"):
        stage_details()
    if args.stage in ("index", "all"):
        stage_index()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
