"""FASE B — Listas oficiales del foro (Notice) + cruce con bugs pendientes.

Captura los temas 'Bug Fix List [vX.Y.Z]' y '<Month> Known Issues' de la categoria
Notice (via search.json, 1 req/s), parsea el primer post (listas editadas con <li>)
y produce:
  state/forum-raw/official/bug-fix-lists.jsonl  — version -> fixes[]
  state/forum-raw/official/known-issues.jsonl    — mes -> issues[] + updated
  state/forum-raw/official/cross.jsonl           — cruce con clase (c) del analisis

Cruce (heuristico, marcado 'revisar'): token-overlap entre titulo/sintoma del bug
pendiente y cada fix / known issue. Clases:
  'arreglado-oficialmente (vX)' | 'bug-conocido-vigente' | 'sin-match-oficial'

Uso: python tools/forum_official.py capture | cross | all
"""
from __future__ import annotations

import argparse
import html as html_mod
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "state" / "forum-raw"
OFF = RAW / "official"
ANA = RAW / "analysis"
BASE = "https://forum.playinzoi.com"
UA = "modkit-data-rag/1.0"

BFL_QUERY = '"Bug Fix List"'
KI_QUERY = '"Known Issues"'

_STOP = set("the a an of to in on for and or is are was were be been with without "
            "not no it its this that these those when where what which who how why "
            "can cannot could would should may might will won t s don doesn isn aren "
            "issue issues bug bugs fix fixed fixing problem problems after before "
            "el la los las de del un una y o en con no si que se".split())


def _get(url: str) -> dict | None:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
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


def li_items(cooked: str) -> list[str]:
    items = []
    for m in re.finditer(r"<li[^>]*>(.*?)</li>", cooked, re.S):
        text = re.sub(r"<[^>]+>", " ", m.group(1))
        text = html_mod.unescape(re.sub(r"\s+", " ", text)).strip()
        if text:
            items.append(text)
    return items


def capture() -> None:
    OFF.mkdir(parents=True, exist_ok=True)
    bfl, ki = [], []

    res = _get(f"{BASE}/search.json?q={urllib.parse.quote(BFL_QUERY)}")
    time.sleep(1.0)
    for t in (res or {}).get("topics") or []:
        if not re.search(r"\[v\d+\.\d+\.\d+\]\s*Bug Fix List", t.get("title") or ""):
            continue
        detail = _get(f"{BASE}/t/{t['id']}.json")
        time.sleep(1.0)
        if not detail:
            continue
        ver = re.search(r"\[(v[\d.]+)\]", t["title"]).group(1)
        first = detail["post_stream"]["posts"][0]
        fixes = li_items(first.get("cooked", ""))
        bfl.append({
            "version": ver, "topic_id": t["id"],
            "title": t["title"], "url": f"{BASE}/t/{t.get('slug', 'topic')}/{t['id']}",
            "created_at": t.get("created_at"), "fixes": fixes,
        })
        print(f"BFL {ver}: {len(fixes)} fixes")
    with (OFF / "bug-fix-lists.jsonl").open("w", encoding="utf-8") as fh:
        for r in bfl:
            fh.write(json.dumps(r, ensure_ascii=False) + "\n")

    res = _get(f"{BASE}/search.json?q={urllib.parse.quote(KI_QUERY + ' #notice')}")
    time.sleep(1.0)
    for t in (res or {}).get("topics") or []:
        title = t.get("title") or ""
        if "Known Issues" not in title or t.get("category_id") != 5:
            continue
        detail = _get(f"{BASE}/t/{t['id']}.json")
        time.sleep(1.0)
        if not detail:
            continue
        m_upd = re.search(r"Updated\s+(\d{1,2}/\d{1,2})", title)
        first = detail["post_stream"]["posts"][0]
        issues = li_items(first.get("cooked", ""))
        ki.append({
            "month": re.sub(r"\s*Known Issues.*", "", title).strip(),
            "updated_in_title": m_upd.group(1) if m_upd else None,
            "topic_id": t["id"], "title": title,
            "url": f"{BASE}/t/{t.get('slug', 'topic')}/{t['id']}",
            "created_at": t.get("created_at"),
            "post_updated_at": first.get("updated_at"),
            "issues": issues,
        })
        print(f"KI {re.sub(r' Known Issues.*', '', title)}: {len(issues)} issues")
    with (OFF / "known-issues.jsonl").open("w", encoding="utf-8") as fh:
        for r in ki:
            fh.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"oficial: {len(bfl)} bug-fix-lists, {len(ki)} known-issues")


def _tokens(text: str) -> set[str]:
    words = re.findall(r"[a-z0-9]+", (text or "").lower())
    return {w for w in words if len(w) > 2 and w not in _STOP}


def cross() -> None:
    """Cruce clase (c) vs fuentes oficiales (contencion de tokens, conservador).

    Fuentes 'arreglado': bug-fix-lists.jsonl (foro) + patch-notes.jsonl (web oficial).
    Fuente 'conocido': known-issues.jsonl (vigente = ultimo mes capturado).
    Todas las matches llevan marca 'heuristico, revisar'.
    """
    bfl = [json.loads(l) for l in (OFF / "bug-fix-lists.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()]
    pns = [json.loads(l) for l in (OFF / "patch-notes.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()]
    ki = sorted([json.loads(l) for l in (OFF / "known-issues.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()],
                key=lambda k: k["created_at"] or "")
    ki_latest = ki[-1]["month"] if ki else None
    cases = [json.loads(l) for l in (ANA / "cases.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()]
    pend = [c for c in cases if c.get("final") == "c-sin-solucion"]
    print(f"cruce: {len(pend)} pendientes vs {sum(len(b['fixes']) for b in bfl)} fixes foro + "
          f"{sum(len(p['fixed']) for p in pns)} fixes web + {sum(len(k['issues']) for k in ki)} known issues")

    _STOP = set("the a an of to in on for and or is are was were be been with without not no it its this that these those when where what which who how why can cannot could would should may might will won issue issues bug bugs fix fixed fixing problem problems after before game inzoi zoi zois windows steam pc version build update el la los las de del un una y o en con no si que se gpu ram cpu nvidia amd intel".split())
    TEMPLATE = re.compile(r"^\s*(game version\s*:?.*|platform\s*:?.*|mods?\s*:.*|hardware specifications.*|operating system.*|cpu\s*:.*|gpu\s*:.*|ram\s*:.*|os\s*:.*|storage.*)$", re.I)
    WORKAROUND = re.compile(r"^(move|delete|set|check|try|update|remove|verify|restart|launch|clear|reinstall|enable|disable|go to|open|close|use)", re.I)

    def tokens(text):
        return {w for w in re.findall(r"[a-z0-9]+", (text or "").lower()) if len(w) > 2 and w not in _STOP}

    def bug_tokens(c):
        sym = [l for l in (c.get("symptom") or "").splitlines() if l and not TEMPLATE.match(l.strip())]
        return tokens((c["title_en"] or c["title"]) + " " + " ".join(sym)[:400])

    fix_pool = [(b["version"], f, tokens(f)) for b in bfl for f in b["fixes"] if len(tokens(f)) >= 3]
    for pn in pns:
        ver = pn.get("version") or f"post {pn['postId']}"
        fix_pool += [(ver, f, tokens(f)) for f in pn.get("fixed", []) if len(tokens(f)) >= 3]
    ki_pool = [(k["month"], f, tokens(f)) for k in ki for f in k["issues"]
               if len(tokens(f)) >= 3 and not WORKAROUND.match(f)]

    def best_match(pool, t):
        best = None
        for ver, text, tp in pool:
            if not tp:
                continue
            inter = len(t & tp)
            if inter < 4:
                continue
            cont = inter / min(len(t), len(tp))
            if cont >= 0.45:
                s = inter * 2 + cont
                if best is None or s > best[0]:
                    best = (s, ver, text)
        return best

    out = []
    for c in pend:
        t = bug_tokens(c)
        bf, bk = best_match(fix_pool, t), best_match(ki_pool, t)
        if bf:
            official, match_text, mv = f"arreglado-oficialmente ({bf[1]})", bf[2], bf[1]
        elif bk:
            official = "bug-conocido (vigente)" if bk[1] == ki_latest else f"bug-conocido (KI {bk[1]}, historico)"
            match_text, mv = bk[2], bk[1]
        else:
            official, match_text, mv = "sin-match-oficial", None, None
        out.append({"id": c["id"], "url": c["url"], "title": c["title_en"] or c["title"],
                    "created_at": c.get("created_at"), "versions": c.get("versions"),
                    "category": c["category"], "views": c.get("views"), "official": official,
                    "match": "heuristico, revisar" if match_text else None,
                    "match_text": match_text, "match_version": mv})

    with (OFF / "cross.jsonl").open("w", encoding="utf-8") as fh:
        for r in out:
            fh.write(json.dumps(r, ensure_ascii=False) + chr(10))
    from collections import Counter
    counts = Counter(r["official"].split(" (")[0] if r["official"].startswith("arreglado") else r["official"] for r in out)
    print("cruce:", dict(counts))
    print("conocidos vigentes (KI " + str(ki_latest) + "):", sum(1 for r in out if "vigente)" in r["official"]))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("stage", choices=("capture", "cross", "all"))
    args = parser.parse_args()
    if args.stage in ("capture", "all"):
        capture()
    if args.stage in ("cross", "all"):
        cross()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
