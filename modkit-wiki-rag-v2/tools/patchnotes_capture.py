"""FASE B — Captura de patch notes oficiales de playinzoi.com (API FOC Krafton).

Lista:    GET https://api-foc.krafton.com/content/post/news?lang=en&page=N
Detalle:  GET https://api-foc.krafton.com/content/post/news/<postId>?lang=en
Headers:  Content-Type, service-lang, service-namespace (inZOI_Official-24ea), service-game (inzoi)

Salidas:
  state/forum-raw/official/patch-notes.jsonl    — version/fecha/titulo/fixed[]/team_comments[]/url canonica
  state/forum-raw/official/modkit-changes.jsonl — menciones al ModKit/editor/UE en patch notes

URL canonica de citado: https://playinzoi.com/en/news/<postId>
Rate-limit 1 req/s. Reanudable (salta detalles ya capturados en raw/).
"""
from __future__ import annotations

import argparse
import html as html_mod
import json
import re
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OFF = ROOT / "state" / "forum-raw" / "official"
RAW = OFF / "patch-notes-raw"
API = "https://api-foc.krafton.com"
HEADERS = {
    "Content-Type": "application/json",
    "User-Agent": "modkit-data-rag/1.0",
    "service-lang": "en",
    "service-namespace": "inZOI_Official-24ea",
    "service-game": "inzoi",
}
CANONICAL = "https://playinzoi.com/en/news/{}"


def get(url: str) -> dict | None:
    req = urllib.request.Request(url, headers=HEADERS)
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except Exception as err:  # noqa: BLE001
            if attempt == 2:
                print(f"FAIL {url}: {err}")
                return None
            time.sleep(2.0)
    return None


def html_to_text(html: str) -> str:
    text = re.sub(r"<br\s*/?>", "\n", html)
    text = re.sub(r"</(p|li|h\d|div)>", "\n", text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html_mod.unescape(text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def blocks(html: str) -> list[str]:
    """Divide el HTML en bloques <li> y <p> con su texto."""
    out = []
    for m in re.finditer(r"<(li|p)[^>]*>(.*?)</\1>", html, re.S):
        t = html_to_text(m.group(2))
        if t:
            out.append(t)
    return out


def main() -> int:
    OFF.mkdir(parents=True, exist_ok=True)
    RAW.mkdir(parents=True, exist_ok=True)

    patch_posts = []
    page = 1
    while True:
        data = get(f"{API}/content/post/news?lang=en&page={page}")
        time.sleep(1.0)
        if not data:
            break
        posts = (data.get("_embedded") or {}).get("post") or []
        if not posts:
            break
        for p in posts:
            if p.get("category") == "patch_note":
                patch_posts.append({
                    "postId": p["postId"], "title": p.get("title", ""),
                    "createdAt": p.get("createdAt"), "category": p.get("category"),
                })
        total_pages = (data.get("page") or {}).get("totalPages", 1)
        print(f"page {page}/{total_pages}: +{sum(1 for x in posts if x.get('category')=='patch_note')} patch_notes")
        if page >= total_pages:
            break
        page += 1

    print(f"total patch_note posts: {len(patch_posts)}")
    records, modkit_recs = [], []
    for i, p in enumerate(patch_posts, 1):
        pid = p["postId"]
        detail_path = RAW / f"{pid}.json"
        if detail_path.exists():
            detail = json.loads(detail_path.read_text(encoding="utf-8"))
        else:
            detail = get(f"{API}/content/post/news/{pid}?lang=en")
            time.sleep(1.0)
            if detail:
                detail_path.write_text(json.dumps(detail, ensure_ascii=False), encoding="utf-8")
        if not detail:
            continue
        post = detail.get("post") or {}
        content_html = ""
        for c in post.get("contents") or []:
            content_html += c.get("content") or ""
        text = html_to_text(content_html)
        fixed = [b for b in blocks(content_html) if re.search(r"fixed an issue|has been fixed", b, re.I)]
        team = []
        for m in re.finditer(r"Team'?s Comment(?:s)?[^\n]{0,80}", text, re.I):
            start = m.end()
            team.append(text[start:start + 800].strip())
        mk = re.findall(r"[^\n]{0,120}(?:Mod\s?Kit|ModKit|Unreal Engine|UE 5\.\d|Editor)[^\n]{0,160}", text, re.I)
        ver = re.search(r"\[(v[\d.]+)\]", p["title"] or "")
        records.append({
            "postId": pid,
            "version": ver.group(1) if ver else None,
            "title": p["title"],
            "date": post.get("displayStartTime") or p.get("createdAt"),
            "url": CANONICAL.format(pid),
            "fixed": fixed,
            "team_comments": team,
            "modkit_mentions": [re.sub(r"\s+", " ", x).strip() for x in mk][:8],
        })
        for mention in mk[:8]:
            modkit_recs.append({
                "postId": pid, "version": ver.group(1) if ver else None,
                "date": post.get("displayStartTime") or p.get("createdAt"),
                "url": CANONICAL.format(pid),
                "mention": re.sub(r"\s+", " ", mention).strip(),
            })
        if i % 10 == 0:
            print(f"detalles: {i}/{len(patch_posts)}")

    with (OFF / "patch-notes.jsonl").open("w", encoding="utf-8") as fh:
        for r in records:
            fh.write(json.dumps(r, ensure_ascii=False) + "\n")
    with (OFF / "modkit-changes.jsonl").open("w", encoding="utf-8") as fh:
        for r in modkit_recs:
            fh.write(json.dumps(r, ensure_ascii=False) + "\n")
    n_fixed = sum(len(r["fixed"]) for r in records)
    print(f"patch-notes.jsonl: {len(records)} notas, {n_fixed} 'Fixed an issue where' totales")
    print(f"modkit-changes.jsonl: {len(modkit_recs)} menciones al ModKit/editor/UE")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
