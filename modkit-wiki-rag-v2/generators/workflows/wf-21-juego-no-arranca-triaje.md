---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: []
wiki_refs: []
dump_version: inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31) | triaje verificado por modder 2026-10-09 (DX 12.1/12.2, RAM, fix mal realizado) | requisitos minimos oficiales: web playinzoi.com (ambos OS)
generado: 2026-10-31
---

# WF-21: "El juego no me arranca" — triaje de compatibilidad (no es bug)

**Objetivo:** triar el sintoma 'el juego no arranca / se cierra / va fatal' en el orden mas barato primero, distinguiendo la incompatibilidad de hardware/plataforma (que NO es bug del juego) del bug real, antes de reportar nada al foro.
**EN:** the game won't start / crashes / runs terribly — compatibility triage before blaming the game: DirectX 12.1/12.2 GPU support, minimum requirements (official site, Windows and Mac), RAM limits, a bad hotfix knocking a GPU model out until the next fix.
**Nivel:** principiante
**Ruta:** diagnostico

**Regla maestra (verificada por modder, 2026-10-09):** el 90% de los 'no me arranca' es culpa de la grafica o la memoria/CPU — incompatibilidad, no bug de gameplay. Triaje de lo mas barato a lo mas caro:

**Pasos:**

1. **Requisitos minimos oficiales:** la web oficial de inZOI publica los requisitos minimos para AMBOS sistemas operativos (Windows y Mac). Comparar la maquina contra ellos ANTES de cualquier otra cosa. Nota: los devs pueden cambiar los requisitos en silencio tras un parche — re-comprobar si el fallo aparece justo despues de actualizar.
2. **GPU y DirectX 12.1/12.2 (verificado 2026-10-09):** si la grafica NO soporta DirectX 12.1/12.2 (nivel inferior), el juego NO INICIA — directamente no arranca. No es bug: es requisito de la GPU. Comprobar el soporte de la tarjeta (ficha del fabricante / dxdiag en Windows).
3. **RAM insuficiente (verificado 2026-10-09):** hay gente con buena grafica pero memoria que no alcanza — el juego SE LES CIERRA. GPU potente no compensa una RAM por debajo del requisito: no es bug, es requisito.
4. **Tras un fix/hotfix (verificado 2026-10-09):** un fix mal realizado puede dejar una GRAFICA fuera de juego hasta el proximo fix — los devs decidiran si la descartan o la incluyen. Sintoma tipico: el juego arrancaba bien y, justo tras un hotfix, una GPU concreta deja de poder jugar. Accion: verificar si el modelo aparece en los Known Issues oficiales del mes (state/forum-raw/official/known-issues.jsonl) y esperar al siguiente fix; no hay solucion local.
5. **Mac/Apple:** limitaciones de plataforma (graficos, memoria) documentadas como clase 'no-es-bug' en pages/local/forum-bugs-pendientes.md — no bug del juego.
6. **Actualizacion + rendimiento/caidas:** congelaciones, crashes y caida de rendimiento aparecidos tras un parche (incluso en maquinas potentes) son compatibilidad del update con el hardware — esperar hotfix, actualizar drivers, ajustar graficos. Ejemplo canonico del registro: [1372] Game Freezing Bug.
7. **Si lo que se rompio es un MOD tras el parche:** eso es migracion — WF-20 (Fix Up Mod Project / re-bake / recrear tras salto de motor).
8. **Solo si TODO el triaje anterior esta descartado:** es un bug candidato. Reportarlo con la plantilla del foro (Game Version, Platform, Mods, Hardware) y quedara en el registro de pendientes para el cruce contra las fuentes oficiales.

**Advertencias:**
- Este triaje es conocimiento de modder verificado el 2026-10-09 (DX 12.1/12.2, RAM, fix mal realizado); los requisitos minimos exactos y las GPU afectadas por cada fix cambian con cada parche — comprobar contra la web oficial y los Known Issues vigentes, no contra este texto.
- Los pasos 1-7 no son bugs del juego: reportarlos al foro como bugs genera ruido en el registro (las clases no-es-bug de forum-bugs-pendientes.md existen para documentarlo).

**Herramientas:** ninguna (triaje previo a arrancar el juego; cuando el juego YA arranca, el diagnostico por CLI va en WF-06/WF-07)

**Categorias CLI tocadas:** ninguna

**Wiki:** ninguna (requisitos minimos: web oficial de inZOI, ambos OS)

## English version (EN)

**Goal:** triage "the game won't start / crashes / runs terribly" cheapest-first, telling hardware/platform incompatibility (NOT a game bug) apart from a real bug, before reporting anything.

**Master rule (verified by a modder, 2026-10-09):** 90% of "it won't start" is the graphics card or memory/CPU — incompatibility, not a gameplay bug.

**Steps:**

1. **Official minimum requirements:** the official inZOI site publishes minimum requirements for BOTH operating systems (Windows and Mac). Compare the machine against them BEFORE anything else. Devs can change requirements silently after a patch — re-check if the failure appears right after updating.
2. **GPU and DirectX 12.1/12.2 (verified 2026-10-09):** if the graphics card does NOT support DirectX 12.1/12.2 (lower level), the game does NOT launch — period. Not a bug: a GPU requirement. Check the card's support (manufacturer spec / dxdiag on Windows).
3. **Insufficient RAM (verified 2026-10-09):** people with a good GPU but memory that falls short get the game CLOSING on them. A powerful GPU does not compensate RAM below the requirement: not a bug, a requirement.
4. **After a fix/hotfix (verified 2026-10-09):** a badly-made fix can leave a GPU model out of the game until the next fix — the devs will decide whether to drop or include the card. Typical symptom: the game ran fine and, right after a hotfix, one specific GPU can no longer play. Action: check whether the model appears in the official Known Issues of the month (state/forum-raw/official/known-issues.jsonl) and wait for the next fix; no local solution.
5. **Mac/Apple:** platform limitations (graphics, memory) documented as a 'not-a-bug' class in pages/local/forum-bugs-pendientes.md — not a game bug.
6. **Update + performance/crashes:** freezes, crashes and performance drops appearing after a patch (even on powerful machines) are update-vs-hardware compatibility — wait for the hotfix, update drivers, adjust graphics. Canonical registry example: [1372] Game Freezing Bug.
7. **If a MOD broke after the patch:** that is migration — WF-20 (Fix Up Mod Project / re-bake / recreate after an engine jump).
8. **Only if ALL of the above is ruled out:** it is a bug candidate. Report it with the forum template (Game Version, Platform, Mods, Hardware) and it will land in the pending registry for the official cross-check.
