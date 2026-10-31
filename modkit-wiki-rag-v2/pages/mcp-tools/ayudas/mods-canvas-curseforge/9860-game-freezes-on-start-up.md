---
source: mcp-tools
categoria: ayuda
familia: mods-canvas-curseforge
clase: aceptado
verified: pendiente
source_url: https://forum.playinzoi.com/t/topic/9860
idioma: en
foro_capturado: 2026-10-09
---

# Game freezes on start up

**Sintoma:** NO mods i removed them When I try to boot the game, the intro plays, and then it just freezes. If I try to skip the intro, it freezes. I have tried all the other fixes, did a clean install, clean installed my drivers, deleted the mods, everything. I’m really stuck on what’s wrong. The game was running fine until this latest update

**Causa:** desconocida

**Solucion:**

1. It has to be done in this order Step 1 — Full settings reset Even if you reinstalled, these files stay behind
2. Press Windows + R Copy code: %localappdata% Delete the entire inZOI folder Then also check: Documents Delete any inZOI folder there too
3. Step 2 — Force safe graphics mode on launch In Steam → Properties → Launch Options: Paste: -windowed -noborder This prevents the freeze when it switches resolution after the intro
4. Step 3 — Disable Steam overlay Steam: Settings In-Game Untick Enable the Steam Overlay Step 4 — Try one clean launch Restart PC → Launch game once → wait a full minute after the intro (even if it looks frozen)
5. Step 5 — If it STILL freezes This next one fixes a lot of Unreal Engine games: Go to: Copy code %localappdata%\inZOI\Saved\ Delete: Config Crashes Logs ShaderCache (if present)Crashes Logs ShaderCache (if present)

**EN:** Game freezes on start up

**Fuente:** https://forum.playinzoi.com/t/topic/9860 (aceptado, views 568, creado 2026-02-06)
