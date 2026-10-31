# UPDATE-RUNBOOK — Actualizar el corpus tras un parche del juego/ModKit

Audiencia: yo mismo, el día del parche. `MAINTENANCE.md` describe el sistema; esto describe el día de parche. Los prompts del apéndice se pegan tal cual.

Estado de referencia contra el que leer este runbook (último sellado 2026-10-31, actualización MCP del ModKit; la build del juego no se revalidó):

| Métrica | Valor |
|---|---|
| Juego | inZOI, UE 5.6.1 Shipping; última build verificada: `20261019.16318.W` ([v0.11.1], 2026-10-21). Sin verificación de una build nueva en este ciclo. |
| MCP | inzoi-modkit 129 tools (captura 2026-10-31); inzoi-game 414 y blender 9 según capturas anteriores. El endpoint separado del juego no estuvo disponible para revalidar. |
| Catálogos ModKit | 406 comandos Lua · 406 de UI Mod (observación actual del ModKit) |
| Corpus | 290.976 fragmentos; mcp-tools: 145 fichas + 22 intenciones CLI + 21 workflows + 427 pares QA |
| Índice | e5-small 384 d; serve en GPU (RTX 5080); search con caché numpy de embeddings (~10-19 s/consulta tras carga inicial) |

Si esta tabla ya no cuadra, actualizarla en MAINTENANCE.md antes de usar el runbook. La actualización del 2026-10-31 cubrió solo el ModKit: no retirar información general del juego por no haber podido consultar su MCP.

---

## FASE 0 — Preparación (ANTES de actualizar el juego)

1. **Baseline limpia obligatoria.** Sin "antes" limpio no hay diff que valga:
   ```
   PYTHONUTF8=1 python tools/evaluate_rag.py; echo "exit=$?"     # debe ser 0
   mkdir -p state/regression-log
   PYTHONUTF8=1 python tools/evaluate_rag.py | tee state/regression-log/<fecha>-pre-parche.txt
   PYTHONUTF8=1 python -m unittest discover -s tests             # 12/12
   ```
   Si el gate no está en verde: NO mezclar el parche con una regresión preexistente. Arreglar primero.
2. **Snapshot del estado actual:** hashes de `pages/mcp-tools/` (el script de hashes de la FASE 6 sirve tal cual) → `state/regression-log/<fecha>-hashes.json`.
3. **Backup:** `state/vector-index/vector_index_e5-small-backup.sqlite` ES la línea base de comparación — cubre. No tocarlo. Refrescarlo solo al final (FASE 4), cuando el nuevo índice sea la nueva línea base.
4. **Anotar versiones actuales** — serán el "antes" de todos los diffs:
   - Juego: `python tools/mcp_client.py game system_get_info '{}'`
   - Dump de fichas: `grep -h "dump_version" pages/mcp-tools/fichas/*.md | sort -u`
   - Tabla de versiones de MAINTENANCE.md (copiar tal cual en el log del día).

## FASE 0.5 — PRIMERA LECTURA OBLIGADA (antes del diff del MCP): fuentes oficiales del foro y la web

Con el parche del 15/10 se publican el **patch note [v0.11] en playinzoi.com/en/news** y el
**October Known Issues / [v0.11] Bug Fix List en el foro (Notice)**. Leerlos ANTES de tocar el
corpus o re- exportar el MCP:

1. `PYTHONUTF8=1 python tools/patchnotes_capture.py` — recaptura patch notes (idempotente:
   salta los posts ya capturados; trae el v0.11 nuevo). Salida:
   state/forum-raw/official/patch-notes.jsonl + modkit-changes.jsonl.
2. `PYTHONUTF8=1 python tools/forum_official.py capture` — recaptura Bug Fix Lists y Known
   Issues (incluye October Known Issues cuando se publique).
3. `PYTHONUTF8=1 python tools/forum_official.py cross` — re-cruza los 2623 pendientes contra
   AMBAS fuentes. Comparar contra pages/local/forum-bugs-pendientes.md: los bugs 'sin
   reconocimiento oficial' que aparezcan en el Bug Fix List [v0.11] pasan a arreglado (revisar
   el match heuristico); los que sigan sin match tras 2+ versiones y tengan workaround
   imprescindible: candidatos a ficha 'bug conocido' (ver regla en forum-bugs-pendientes.md).
4. Los cambios al ModKit citados en el patch note (modkit-changes.jsonl) alimentan la capa
   mcp-tools: contrastar con el diff del volcado MCP (FASE 1) — si el patch note anuncia
   herramientas/ editor nuevas que el volcado no refleja, es sintoma de export incompleto.

Despues de esto, seguir con la FASE 1 normal.

NOTA DE EMBARGO (conocimiento experto, CONFIDENCIAL hasta el 15/10): el parche [v0.11]
incluye viaje entre mundos/ciudades (se toma el avion; antes no era posible saltar de un
mundo/ciudad a otro). El feature es SECRETO hasta el dia 15. Tras aplicar el parche:
(1) re-cruzar los pendientes marcados relacionado-viaje=true en cross.jsonl (44 temas:
viajes, mudanzas de ciudad, trips) contra el patch note y el comportamiento real — muchos
pueden quedar arreglados o absorbidos por la feature; (2) valorar ficha/workflow de la
capa ayudas sobre el viaje una vez publico.

FASE 0.5b (informe-devs v2): tras re-cruzar, preparar SHORTLIST de 10-20 bugs para el
informe-devs v2 priorizando: (a) los 'sin reconocimiento oficial' de mayor traccion
(views) que sigan sin match tras el [v0.11], (b) los reportados en 2+ versiones sin fix,
(c) los que afecten a mods/canvas/curseforge (dominio del ModKit). Fuente:
state/forum-raw/official/cross.jsonl filtrando official='sin-match-oficial',
orden por views; el archivo generado alimenta pages/local/informe-devs.md (ES) y
informe-devs-en.md (EN). Tips & Guides sigue congelado hasta tener el changelog v0.11 real.



## FASE 1 — Captura del nuevo estado (tras instalar la beta)

0. **Regla inquebrantable:** nunca sobrescribir la exportación anterior sin archivarla:
   ```
   mkdir -p state/mcp-tools/archive/export-<fecha-vieja>
   cp state/mcp-tools/{inzoi-game,inzoi-modkit,blender,clasificacion}.json state/mcp-tools/archive/export-<fecha-vieja>/
   ```
1. Con juego y ModKit arrancados y conectados: `python tools/export_mcp_tools.py`.
2. **Diff programático** contra `state/mcp-tools/archive/export-<fecha-vieja>/`: por cada servidor, herramientas **NUEVAS / ELIMINADAS / CAMBIADAS** (nombre, descripción, schema de parámetros, access, experimental). Guardar el informe del diff (JSON + tabla legible).
3. **Primer check del catálogo CLI** (juego en marcha) — llamar a una herramienta MCP INEXISTENTE (no `cli_help` con comando bogus: esa vía solo devuelve `Unknown command: <nombre>`):
   ```
   python tools/mcp_client.py game zz_noexiste '{}'
   ```
   El error lista el literal `The CLI registry is ready (N commands registered, M exposed as MCP tools)`. **Si M≠405, hay movimiento en el catálogo** — correlar con el diff del volcado. El exit code es 1 (isError), útil para scripting.
4. **Wiki/documentación:** si cambió, `python tools/capture_snapshot.py` (incremental). El informe del snapshot dice qué páginas cambiaron; las páginas de wiki CLI afectan a los `wiki_refs` y a la columna "Que devuelve" de gen_fase3.py.

Entregable: diff categorizado + versiones nuevas + lista de páginas wiki cambiadas + literal del catálogo.

## FASE 2 — Regeneración (según las categorías del diff)

1. **Solo lo afectado.** Los generadores son todo-o-nada con asserts y tardan segundos; el coste real es el TEXTO nuevo: escribir entradas SOLO para herramientas nuevas/cambiadas en `generators/glosas/` y `generators/autoria/`, con el estilo de las existentes. No retocar lo que no cambió.
2. Run: `gen_fase2.py` → `gen_fase3.py` → `gen_fase4.py` → `gen_fase5.py`. **Los asserts son el gate**: los conteos (137/22/18/374) deben actualizar solos a los números nuevos; si un assert revienta, el diff de FASE 1 estaba mal categorizado, no es un bug del generador.
3. **Workflows que tocan herramientas eliminadas:** `grep -rl "<nombre_herramienta>" generators/workflows/` → cada workflow afectado se marca y se decide: ¿redirigir a la alternativa, o deprecar? No dejar workflows apuntando a herramientas inexistentes.
4. **Reclasificación** de lo que no encaje: propuesta de subdominio (como `proyecto/datos/traducciones`), actualizar `clasificacion.json` y el mapeo de intenciones de `gen_fase3.py`.
5. **Verificar que V1–V18 siguen siendo verdad.** Las verificaciones son contra una versión; tras un parche, cualquier comportamiento verificado puede haber cambiado. NO re-verificar todo — priorizar:
   - (a) lo que el changelog del parche dice que toca;
   - (b) los ítems de `pages/local/informe-devs.md` — si el parche corrige un bug reportado, re-verificar ese y celebrar (bajarlo del informe);
   - (c) las **10 trampas del QA** — sus RESPUESTAS deben seguir siendo verdad: re-ejecutar en juego (partida de prueba, cheats activados) los comportamientos que citan (`game_continue`, `game_cancel_flow`, persistencia SmartBuild, residuos de `modkit_delete_project`, negocio por consola, getter de dinero, auto-generación de PO, diagnósticos Lua en disco, `create_row`).
   Todo con `tools/mcp_client.py`, literales al log. Lo re-verificado se añade como entrada nueva a `pages/local/verificaciones-<fecha>.md`.

## FASE 3 — Rebuild y regresión

```
MSYS_NO_PATHCONV=1 docker compose stop vector-search
MSYS_NO_PATHCONV=1 docker compose run --rm --no-deps vector-search build \
    --root /corpus --index /index/vector_index.sqlite --device cuda --threads 8 --batch-size 64
MSYS_NO_PATHCONV=1 docker compose up -d vector-search      # con --build si se tocó código
PYTHONUTF8=1 python tools/evaluate_rag.py; echo "exit=$?"
```

- Full desde cero: ~17 min GPU. **Incremental reusa embeddings**: solo re-embedea los chunks con texto cambiado — no re-embeddear todo si el diff es pequeño.
- **Gate: exit 0 obligatorio** (0 violaciones de política + trampas 10/10 en top-3 + nuevos ≥80% en top-5).
- Si trampas fallan: el comportamiento verificado CAMBIÓ (o la retrieval degradó). Orden de depuración: ¿el par apunta al documento correcto? → ¿el chunk contiene la frase clave? → ¿el chunking partió la frase? → ¿compite un documento de wiki con vocabulario similar? Se corrige la FUENTE o el chunking tras diagnóstico — **nunca parchear la evaluación a lo bruto**. Si es un cambio de comportamiento real: re-verificar en juego (vuelta a FASE 2.5), actualizar fuentes, rebuild.
- Comparar la TANDA 1 contra `state/regression-log/<fecha>-pre-parche.txt`: las pérdidas de evidencia esperada se juzgan caso a caso (mejora vs degradación), igual que cuando entró mcp-tools.

## FASE 4 — Documentar el cambio

1. **MAINTENANCE.md**: sección nueva "Parche <fecha>": versiones nuevas (juego, ModKit, dump), nº de herramientas/comandos antes→después, qué cambió en el corpus (fichas nuevas/regeneradas/retiradas, workflows marcados/deprecados, reclasificaciones), resultado de la regresión.
2. **informe-devs.md / informe-devs-en.md**: si el parche confirma o corrige lo reportado, mover el ítem (corregido → bajar/quitar; empeorado → subir severidad). El informe EN se actualiza en paralelo (mismas secciones A/B/C).
3. **Regla de honestidad del corpus:** las frases "verificado en vivo" solo valen con la versión del dump citada. Cada doc mcp-tools lleva `dump_version` en frontmatter (comprobar cobertura: `grep -l "dump_version" pages/mcp-tools/**/*.md | wc -l`); los docs re-verificados con la versión nueva actualizan su `dump_version` y ganan entrada en `verificaciones-<fecha>.md`. Así se sabe QUÉ re-verificar tras cada parche sin leerse todo.
4. **Refrescar la línea base:** copiar el índice recién validado a `vector_index_e5-small-backup.sqlite` (o a un nombre con fecha) y actualizar la tabla de backups de MAINTENANCE.md.

## Tonterías a evitar (léase en voz alta el día del parche)

- No regenerar/re-embeddear el corpus completo si el diff es pequeño (el incremental reusa embeddings).
- No borrar exports antiguos NUNCA (regla de archivo de FASE 1.0).
- No confiar en `Success`/`ok` de herramientas del juego sin verificación posterior: retorno vacío sin readback, caída silenciosa observada (V18), residuos de `modkit_delete_project` (V15).
- No parchear `pages/mcp-tools/` a mano: las fuentes viven en `generators/`.
- No saltarse la FASE 0: parcheo + regresión preexistente = diff ilegible.

---

## APÉNDICE — Prompts listos para pegar

### Prompt FASE 1-RB — Captura del nuevo estado

````
FASE 1-RB: captura del nuevo estado tras el parche.

PREVIO: juego y ModKit actualizados y ARRANCADOS. Exportación anterior archivada en
state/mcp-tools/archive/export-<fecha-vieja>/ (si no existe, HAZLO antes de nada: copiar
inzoi-game.json, inzoi-modkit.json, blender.json y clasificacion.json).

EJECUTA:
1. python tools/export_mcp_tools.py  → re-exporta a state/mcp-tools/
2. Diff programático contra el archivo: por servidor (inzoi-game, inzoi-modkit, blender),
   herramientas NUEVAS / ELIMINADAS / CAMBIADAS comparando nombre, description,
   schema de parámetros, access y flag experimental. Informe JSON + tabla legible.
3. Catálogo CLI en vivo: python tools/mcp_client.py game zz_noexiste '{}'
   → extraer el literal "The CLI registry is ready (N commands registered, M exposed as
   MCP tools)" y comparar M con 405. (Ojo: pasar un comando inexistente a cli_help NO
   sirve — esa vía no imprime el literal del registro.)
4. Si la wiki oficial cambió: python tools/capture_snapshot.py (incremental) y guardar su informe.

ENTREGA: informe del diff por servidor; M vs 405; versiones nuevas
(python tools/mcp_client.py game system_get_info '{}'); lista de páginas wiki cambiadas.

REGLAS: todo check programático (nada de "parece que"); no sobrescribir ningún archivo
sin archivar antes el anterior; literales exactos en el informe.
````

### Prompt FASE 2-RB — Regeneración según diff

````
FASE 2-RB: regeneración según las categorías del diff (entrada: informe de FASE 1-RB).

FUENTES: informe del diff + generators/ + state/mcp-tools/.

EJECUTA:
1. Entradas nuevas/cambiadas SOLO para lo que aparece en el diff:
   generators/glosas/ (intenciones CLI) y generators/autoria/ (fichas), estilo de las existentes.
2. python generators/gen_fase2.py && python generators/gen_fase3.py &&
   python generators/gen_fase4.py && python generators/gen_fase5.py
   — los asserts de conteo son el gate; si revientan, el diff estaba mal categorizado.
3. grep -rl "<herramienta_eliminada>" generators/workflows/ por cada eliminada:
   cada workflow afectado → decidir redirigir a alternativa o deprecar, y anotar la decisión.
4. Herramientas que no encajan en intenciones existentes: proponer subdominio nuevo
   (como proyecto/datos/traducciones), actualizar clasificacion.json y gen_fase3.py.
5. Re-verificar en juego (partida de prueba, cheats activados), PRIORIZADO:
   (a) lo que el changelog toca; (b) los ítems del informe-devs (bugs reportados:
   game_continue/cancel_flow/SmartBuild/delete_project/negocio por consola/getter dinero);
   (c) las 10 trampas del QA de state/mcp-tools/qa-pairs.jsonl (categoria trampa):
   re-ejecutar su comportamiento con tools/mcp_client.py y registrar literales.

ENTREGA: docs regenerados (verificado por regeneración idempotente); lista de workflows
tocados con decisión; verificaciones nuevas en pages/local/verificaciones-<fecha>.md;
trampas re-verificadas OK/no-OK con payload y retorno literal.

REGLAS: no tocar lo que no cambió; cada re-verificación actualiza el dump_version del doc
afectado; sin ejecución en la versión nueva no se escribe "verificado en vivo".
````

### Prompt FASE 3-RB — Rebuild y regresión

````
FASE 3-RB: rebuild del índice y regresión con gate.

EJECUTA:
1. MSYS_NO_PATHCONV=1 docker compose stop vector-search
2. MSYS_NO_PATHCONV=1 docker compose run --rm --no-deps vector-search build
   --root /corpus --index /index/vector_index.sqlite --device cuda --threads 8 --batch-size 64
3. MSYS_NO_PATHCONV=1 docker compose up -d vector-search   (--build si se tocó código)
4. PYTHONUTF8=1 python tools/evaluate_rag.py | tee state/regression-log/<fecha>-post-parche.txt

CRITERIO: exit 0 OBLIGATORIO (0 violaciones de política + trampas 10/10 top-3 +
nuevos >=80% top-5). Comparar tanda 1 y top-1 de trampas contra
state/regression-log/<fecha>-pre-parche.txt y reportar cada diff con score.

REGLAS: incremental (no re-embeddear lo que no cambió); si una trampa falla, diagnóstico
en orden (par correcto → frase clave en chunk → chunking → doc de wiki que compite) y se
corrigen fuentes o chunking tras mostrar el diagnóstico, NUNCA la evaluación; si el
comportamiento verificado cambió de verdad, vuelta a FASE 2-RB punto 5 antes de continuar.
````

### Prompt FASE 4-RB — Documentar el cambio

````
FASE 4-RB: documentar el parche y sellar.

ENTREGA:
1. MAINTENANCE.md — sección "Parche <fecha>": versiones nuevas (juego, ModKit, dump),
   herramientas/comandos antes→después, cambios en el corpus (fichas nuevas/regeneradas/
   retiradas, workflows marcados, reclasificaciones), resultado de la regresión.
2. informe-devs.md e informe-devs-en.md: mover los ítems que el parche corrige
   (bajar/quitar) o agrava (subir severidad); misma estructura en ambos idiomas.
3. Refrescar dump_version de los docs re-verificados:
   grep -l "dump_version: <version_vieja>" pages/mcp-tools/ -r → actualizar y documentar
   la entrada de verificación correspondiente.
4. Nueva línea base: cp state/vector-index/vector_index.sqlite
   state/vector-index/vector_index_e5-small-backup.sqlite (o nombre con fecha) y
   actualizar la tabla de backups de MAINTENANCE.md.
5. Verificación de sellado: regenerar (gen_fase2-5) y confirmar cero diffs por hash;
   suite 12/12; evaluate_rag.py exit 0.

REGLAS: honestidad del corpus (nada de "verificado en vivo" sin run en la versión citada);
no borrar exports antiguos; no dejar logs del día fuera del repo
(state/regression-log/ es su sitio).
````
