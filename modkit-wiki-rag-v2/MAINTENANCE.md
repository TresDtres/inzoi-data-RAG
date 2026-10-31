# MAINTENANCE — ciclo de mantenimiento, gotchas y versiones

Proyecto: RAG de documentación del inZOI ModKit (corpus de páginas + índice vectorial híbrido + evaluación).
Último sellado: 2026-10-31 (actualización del MCP del ModKit y reindexación GPU). La última verificación de build del juego sigue siendo la del 2026-10-21; esta actualización no declara un parche nuevo del juego.

## Versiones actuales (2026-10-31)

| Componente | Valor |
|---|---|
| Modelo de embedding activo | `intfloat/multilingual-e5-small` (384 d), prefijos `passage:`/`query:` |
| Índice activo | `state/vector-index/vector_index.sqlite` — 290.976 chunks; reconstruido incrementalmente el 2026-10-31 con 44 fragmentos re-embebidos y 290.932 reutilizados |
| bge-m3 (`BAAI/bge-m3`, 1024 d) | EVALUADO Y RECHAZADO (trampas 7/10 vs 10/10, tanda 1 5/17 vs 8/17). Índice eliminado en la limpieza FASE 6; regenerable en ~17 min de GPU reconstruyendo con DEFAULT_MODEL=bge-m3 |
| Imagen Docker | `pytorch/pytorch:2.7.1-cuda12.8-cudnn9-runtime` — Python 3.11.13, torch 2.7.1+cu128 (RTX 5080, sm_120) |
| GPU | NVIDIA RTX 5080 16 GB; build y serve fuerzan `--device cuda` (sin fallback a CPU) |
| Host Python | 3.12 (tests, evaluación); container Python 3.11 (build/serve) |
| Juego (referencia) | inZOI, UE 5.6.1 Shipping; build `20261019.16318.W` ([v0.11.1]), verificada el 2026-10-21. No se verificó una build nueva del juego en este ciclo. |
| MCP ModKit | 129 herramientas (captura 2026-10-31); 4 añadidas, 0 retiradas y 2 con contrato cambiado. Catálogos actuales observados: 406 comandos Lua y 406 de UI Mod. |
| Otros MCP | `inzoi-game` 414 y `blender` 9 según las capturas anteriores; el endpoint separado del juego no estuvo disponible para revalidar el 2026-10-31. |

## Pipeline (orden de las capas)

```
fuentes:  state/mcp-tools/*.json (volcados MCP) + generators/{autoria,glosas,workflows,qa}/
   |
   v  generators/gen_fase2.py (145 fichas) · gen_fase3.py (22 intenciones CLI)
   |  gen_fase4.py (21 workflows) · gen_fase5.py (427 pares QA)
   v
generado: pages/mcp-tools/ + state/mcp-tools/qa-pairs.jsonl
   |
   v  docker compose run vector-search build (GPU, incremental)
   v
indice:   state/vector-index/vector_index.sqlite (chunks + FTS léxico)
   |
   v  docker compose up -d vector-search (serve, puerto 8088, queries en GPU)
   v
regresion: python tools/evaluate_rag.py (un solo comando, 2 tandas + gate)
```

**Regla de oro:** los cambios de contenido de mcp-tools se hacen SIEMPRE en `generators/` (autoria, glosas, workflows, qa, o los literales OBSERVED_RET/INTENT_NOTA de gen_fase3.py), nunca en `pages/mcp-tools/` — es una capa generada. La regeneración está sellada (idempotente, verificada por hash en FASE 6): cualquier diff tras regenerar es una edición huérfana.

## Ciclo de mantenimiento (nueva versión del juego / ModKit / wiki)

1. Re-exportar volcados MCP a `state/mcp-tools/` (`tools/export_mcp_tools.py`).
2. Clasificar comandos nuevos/eliminados en `state/mcp-tools/clasificacion.json`; actualizar las glosas en `generators/glosas/` y `generators/autoria/`.
3. Regenerar la capa mcp-tools:
   ```
   PYTHONUTF8=1 python generators/gen_fase2.py
   PYTHONUTF8=1 python generators/gen_fase3.py
   PYTHONUTF8=1 python generators/gen_fase4.py
   PYTHONUTF8=1 python generators/gen_fase5.py
   ```
4. Rebuild del índice (incremental; solo re-embedea chunks cambiados):
   ```
   MSYS_NO_PATHCONV=1 docker compose stop vector-search
   MSYS_NO_PATHCONV=1 docker compose run --rm --no-deps vector-search build \
       --root /corpus --index /index/vector_index.sqlite --device cuda --threads 8 --batch-size 64
   MSYS_NO_PATHCONV=1 docker compose up -d vector-search
   ```
   Full desde cero en GPU: ~17 min (32.5k chunks, ~1.720 chunks/min de embedding). En CPU: ~4,6 h — no recomendado.
5. Regresión completa (un solo comando):
   ```
   PYTHONUTF8=1 python tools/evaluate_rag.py
   ```
   Ejecuta TANDA 1 (24 casos, hit@5/recall, informativa — comparar con la corrida anterior) y TANDA 2 (10 trampas top-3 + 15 nuevos top-5). Baseline actual (15/10): tanda 1 7/17 (41,2% hit@5; recall 9/59 = 15,3%), trampas 10/10, nuevos 13/15 (87%), ayudas 23/23.
   **Gate de salida:** exit 0 solo si 0 violaciones de política Y trampas 10/10 Y nuevos >=80%. Exit 1 = regresión.
6. Tests de unidad: `PYTHONUTF8=1 python -m unittest discover -s tests` (12/12).

## Gotchas conocidos

1. **Git Bash manguea rutas de contenedor**: TODO `docker compose run` lleva `MSYS_NO_PATHCONV=1` (si no, `/corpus` → `C:/Program Files/Git/corpus`).
2. **Imagen vieja**: tras cualquier cambio de código (`tools/vector_search.py`, Dockerfile) hay que hacer `docker compose up -d --build vector-search` — sin `--build` el serve corre la imagen anterior.
3. **Lock de volumen**: parar el servicio ANTES de `docker compose run ... build` (si no: "unable to open database file").
4. **Modelo y vocabulario se re-embedean juntos**: stopwords/term-groups se canonicalizan en el FTS al indexar. Cambiar vocabulario exige rebuild completo, en una sola ventana de mantenimiento.
5. **Trampa de reuso incremental**: el build reutiliza chunks si `(chunk_id, text_sha256, model_id, source)` no cambia. El sha es del texto SIN prefijo: cambiar `_model_prefixes()` manteniendo el mismo `model_id` NO re-embedea. Para forzar: borrar el índice o cambiar el `model_id`.
6. **Python 3.11 en el contenedor** (imagen CUDA): prohibidos f-strings con backslash en expresiones (pre-3.12). El Dockerfile además verifica `cu128` en `torch.__version__` tras el pip install (falla el build si pip degrada torch a una build sin kernels Blackwell).
7. **Cambio de modelo de embedding**: procedimiento con backup — (a) backup del índice actual con nombre explícito, (b) rebuild completo, (c) las tres tandas, (d) aceptar solo si trampas 10/10 Y mejora global. Referencia: experimento bge-m3 del 2026-10-09 (rechazado; diff por caso en el scratchpad de la sesión).
8. **Restauración de la línea base e5**: `cp state/vector-index/vector_index_e5-small-backup.sqlite state/vector-index/vector_index.sqlite` (+ borrar `-wal`/`-shm` huérfanos del índice anterior) y comprobar `DEFAULT_MODEL = "intfloat/multilingual-e5-small"` en `tools/vector_search.py`.
9. **Comandos de cheat del juego devuelven vacío sin readback** (`currency.add_*`, `stat.*`): ok ≠ aplicado (caída silenciosa observada, V18). Verificar efectos con el oráculo HUD: `ui_find {"Window": "Hud", "Role": "text"}` → widget numérico del saldo.
10. **Sesión MCP del juego caduca** si se reinicia el servidor: borrar el session-id guardado y re-inicializar (HTTP 404 en tools/call).
11. **Fusion de fuentes por rango normalizado por fuente** (0.6 léxico + 0.4 semántico): mcp-tools no inunda resultados; si cambian los pesos, mostrar diagnóstico antes (regla del proyecto).

## Backups y líneas base

| Archivo | Qué es |
|---|---|
| `state/vector-index/vector_index.sqlite` | Índice ACTIVO (e5-small). No tocar sin backup. |
| `state/vector-index/vector_index_pre-luaapi-2026-10-21.sqlite` | Snapshot consistente anterior a la incorporación de wiki/luaapi del 21/10 (e5-small, 34.948 chunks). |
| `state/vector-index/vector_index_pre-refresh-2026-10-15.sqlite` | Snapshot consistente anterior a la actualización MCP/RAG del 2026-10-15 (e5-small, 34.714 chunks). |
| `state/vector-index/vector_index_e5-small-backup.sqlite` | Línea base canónica e5-small (32.479 chunks, pre-bge-m3, con mcp-tools integrado). Restaurable directamente. |
| ~~`vector_index_bge-m3-gpu.sqlite`~~ | Artefacto del experimento bge-m3: ELIMINADO en la limpieza FASE 6 (confirmado). Regenerable con DEFAULT_MODEL=bge-m3 + rebuild GPU (~17 min). |
| ~~`state/mcp-tools/backup-2026-10-09-pre-reexport`~~ | Fichas pre-re-exportación: ELIMINADO en la limpieza FASE 6 (confirmado). Superseded: regeneración desde `generators/` idempotente y verificada. |

## Cambios de corpus

### 2026-10-31 — MCP del ModKit actualizado; índice reconstruido en GPU

- El volcado del MCP del ModKit pasó de 125 a 129 herramientas: se añadieron `modkit_get_lua_api_doc`, `modkit_lookup_lua_api`, `modkit_search_lua_api` y `modkit_search_lua_api_docs`; no se retiró ninguna. Cambió la descripción de `modkit_list_lua_api_catalog`; `modkit_set_vehicle_owned_object` cambió descripción y esquema/parámetros. Diff: `state/mcp-tools/diff-2026-10-31.json`.
- Los recursos MCP permanecieron en 112, sin cambios. La regla de `seat_objects` ahora especifica que solo admite una silla etiquetada para el asiento Driver/Passenger correspondiente y que no puede vaciarse. Las fichas Lua indican qué herramientas sirven para descubrir tipos C++, consultar documentación y confirmar si una llamada es invocable desde Lua.
- Regeneración de la capa ModKit: 145 fichas, 21 workflows y 427 pares QA. El catálogo consultado desde el ModKit informa 406 comandos Lua y 406 de UI Mod. La lista general del juego no se actualizó: su endpoint MCP separado no respondió y no se usó esa ausencia para retirar conocimiento general.
- Índice e5-small: 290.932→290.976 fragmentos; se re-embebieron 44 y se reutilizaron 290.932 en la RTX 5080 (CUDA 12.8). Respaldo anterior: `state/vector-index/vector_index_pre-modkit-2026-10-31.sqlite`.
- Servicio local comprobado en `http://127.0.0.1:8088/health`: `ok=true`, modelo `intfloat/multilingual-e5-small`, 290.976 fragmentos.
- Evaluación RAG (2026-10-31): gate MCP cumplido — trampas 10/10, casos nuevos 12/15 (80%, umbral mínimo) y ayudas 23/23. La batería general obtuvo 6/17 casos con evidencia (35,3%), recall de archivos esperados 8/59 (13,6%) y 0 violaciones de política; coincide con la última medición disponible del 2026-10-21.

### 2026-10-21 — Hotfix v0.11.1 + wiki Lua API (luaapi); sellado en verde

- Juego: build `20261019.16318.W` ([v0.11.1] hotfix 20/10; literal del registro: "The CLI registry is ready (410 commands registered, 407 exposed as MCP tools)" — sin movimiento). Re-export MCP: **0 cambios** (inzoi-game 414, inzoi-modkit 125 idénticos en nombre/descripción/schema). Export anterior archivado en `state/mcp-tools/archive/export-20261015-104826/`; diff en `state/mcp-tools/diff-2026-10-21.json`. Sin regeneración de la capa mcp-tools (FASE 2 no aplica: nada afectado).
- FASE 0.5 — fuentes oficiales: patch notes 68→70 (nuevos [v0.11.0] 15/10 — ModKit Lua/filter mods/MCP, ya reflejado en el refresh del 15/10 — y [v0.11.1] 20/10 con 4 fixes, ninguno del ModKit; uno de sync de mods al instalar/borrar fuera del navegador de CurseForge). BFL nuevo: [v0.11.0] con 17 fixes (2 del Mod Kit Editor: atajo de la página Docs, enlaces de guías). October KI: 72 issues.
- Re-cruce (2623 pendientes): 2 pasan a bug-conocido por el KI October ("[In-Game MOD] UI MODs may not be displayed when starting a new game"): [11859] y [12197]. Sin reconocimiento oficial: 2340→2338. `pages/local/forum-bugs-pendientes.md` actualizado (8 clases, 2623 entradas).
- **Gotcha nuevo (perdida y restauración de anotaciones):** `tools/forum_official.py cross` REGENERA cross.jsonl desde `analysis/cases.jsonl` y descarta campos externos — las clases expertas (no-es-bug) y `relacionado-viaje` del 09/10 se perdieron al re-cruzar. Restaurado `expert_class` para las 2623 entradas desde forum-bugs-pendientes.md; `relacionado-viaje` re-derivado heurísticamente como `relacionado_viaje_heuristico` (95 ids, más ancho que los 44 curados originales — la lista exacta es irrecuperable). Pendiente: que cross() preserve/case campos de anotación o que vivan en un archivo aparte.
- Wiki snapshot `20261021T083530Z`: 3.686→9.957 documentos. **+6.289 añadidas** (wiki/luaapi 6.158 — API Lua de v0.11; wiki/cli 115; structguide 15; script-condition 1), 411 modificadas, **18 retiradas** (páginas CLI de `memory.*`, `uimod3d.*`, `visual-active-view` — comandos que nunca estuvieron en el catálogo MCP; sin impacto en la capa generada), 0 errores. Límite de seguridad del sitemap del capturador 4.000→12.000.
- **Fix del serve (gate roto antes de tocar nada):** `DEFAULT_SEARCH_SOURCES` incluía `local` (cambio sin documentar del 15/10) — violaba la política del evaluate (fuentes oficiales) y `pages/local/plan-tiro-arco.md` inundaba TODOS los resultados. Restaurado a las 4 oficiales; `local` sigue indexado y accesible con `--source local` explícito. Baseline pre-parche (mismo índice del 15/10): exit 0, trampas 10/10, nuevos 13/15, ayudas 23/23, tanda 1 7/17 — `state/regression-log/2026-10-21-pre-parche.txt`.
- **Optimización de search():** el escaneo SQLite fila-a-fila (texto+embedding BLOB por chunk) pasaba de ~5 s (35k chunks) a 41-99 s con 291k. Sustituido por caché numpy de la matriz de embeddings en `VectorSearch` (matmul vectorizado, mismo ranking y desempates: argsort estable sobre orden de inserción). Primera consulta ~2 min (carga de caché ~450 MB), siguientes ~10-19 s.
- Índice e5-small: 34.948→**290.910 chunks** (wiki 284.681; local 1.567 tras sumar páginas nuevas del 15/10). Rebuild incremental sobre el índice del 15/10; backup previo: `state/vector-index/vector_index_pre-luaapi-2026-10-21.sqlite`.
- Regresión: **exit 0** — trampas 10/10, nuevos 12/15 (80%, en el objetivo), ayudas 23/23, 0 violaciones de política; tanda 1 informativa 6/17 (35,3%, recall 8/59 = 13,6%) vs 7/17 pre: 1 caso menos por competencia legítima de luaapi. Tests 12/12 y `test_vector_search.py` 7/7. Log: `state/regression-log/2026-10-21-post-parche.txt`.
- Sin re-verificación en vivo de V1–V18 este día: los 4 fixes del [v0.11.1] no tocan ninguno de los comportamientos verificados (autonomía dormido, textura cargo box, UI Mode en New Game, sync de mods CurseForge). El gate de trampas ejercita recuperación, no comportamiento.
- Informe-devs v2 (FASE 0.5b): shortlist generado en `state/forum-raw/analysis/shortlist-informe-devs-v2-2026-10-21.jsonl` (top 20 de los 2338 sin reconocimiento, priorizados por dominio mods/CurseForge + multi-versión + views). Alimenta `pages/local/informe-devs.md` (ES) y `-en.md` (EN) cuando se redacten.
- Tablas de referencia de MAINTENANCE.md y UPDATE-RUNBOOK.md actualizadas al sellado 15/10 antes de esta corrida (estaban ancladas al 09/10).
- Serve: anadido `Access-Control-Allow-Origin: *` al handler HTTP (`_send`) para que navegadores (la Biblia del Modding en `../biblia-modding-inzoi`) consulten /search directamente. Imagen reconstruida.
- Corpus local: alta de `pages/local/ejemplo-mod-lua-pregnancysurprise.md` — ejemplos REALES de mods Lua leidos de `D:\inZOIModKit\inZOIModKit\Mods\` (PregnancySurprise con walkthrough del codigo y el peligro de re-embarazo tras el parto; FlyingZoi; 3 recetas integradas de `modkit_list_lua_recipes` con fuente). Rebuild incremental: 290.910→290.924 chunks (+14, solo el doc nuevo). Gate verde tras el cambio: exit 0, trampas 10/10, nuevos 12/15, ayudas 23/23, tests 12/12 (log: `state/regression-log/2026-10-21-post-ejemplos.txt`). Nota: la capa local no entra en la busqueda por defecto (politica oficial-only); recuperable con `source=local` (verificado top-1 0.998 para "PregnancyAutomation embarazo sorpresa").
- Tool: `tools/mcp_client.py` ahora tolera servidores MCP SIN session-id (el inzoi-modkit de la build actual no emite `Mcp-Session-Id`); antes fallaba con "No session id" en cualquier tools/call a modkit.
- Corpus local (tarde): alta de `pages/local/ejemplo-uimod-menu-zoi.md` — tres vias para actuar sobre el Zoi desde los menus del juego, con el patron nativo documentado con fuente REAL leido de `D:\inZOIModKit\inZOIModKit\Mods\script_test_31B97F40` (JsonPatch de InteractionBag/Interaction/ObjectSelectionSet + listener Lua `interaction.started` -> `appearance.hair action=change ID=...`; truquess verificados: `GroupId: "Group_HairCut"`, `DisplayCategoryTextId` reutilizado del outfit Everyday para que el boton no desaparezca, `NoneTargetPlayable`/`bCheckCanMoveToSlot: false`). Conocimiento aportado por el experto; corrige la idea previa de que "no se puede inyectar en el radial".
- Regresion intermedia diagnosticada y corregida en FUENTE (regla del runbook): la trampa WF-12 ("cancelar la creacion automatica de partida nueva a medias") cayo a rank 4 desplazada por `wiki/luaapi/b1/enums/eb1freelanceordersummarycreatefailreason.md` (competencia lexica legitima de luaapi, margen 0.003). Correccion: hook de sintoma ES+EN anadido a `generators/workflows/wf-12-guardado-experimental.md` (punto `game_cancel_flow`); regeneracion gen_fase4/gen_fase5 idempotente; rebuild incremental; trampa recuperada en **rank=1**. Gate final: exit 0, trampas 10/10, nuevos 12/15, ayudas 23/23, tests 12/12 (log: `state/regression-log/2026-10-21-post-uimenu.txt`). Indice: 290.938 chunks.
- Biblia del Modding (`../biblia-modding-inzoi`): secciones User Interface y Script actualizadas con las tres vias y el patron radial; docs nuevos enlazados y regenerados.
- Tool NUEVO — `tools/engine_monitor.py` (grabadora de vuelo del motor): sondeo solo-lectura por MCP (estado/entorno/UI globales + stat/emocion/ambicion/esperanzas/carrera/relaciones por miembro del hogar), diff granular por muestras (listas por clave identificadora), salida JSONL en `state/engine-monitor/`. Hallazgos de la sesion en vivo: motor de emociones con transiciones espontaneas, deriva continua de relaciones por centesimas con saltos en umbrales, toasts de UI, latencia fija de ~2.1 s por tools/call al juego y soporte de llamadas concurrentes (pool de hilos: muestra de 3 Zois en ~3 s). Corregido ademas `mcp_client.py`: la validacion de sesion (tools/list previo, +2 s por llamada) ahora es diferida (re-init solo en 404).
- Corpus local: alta de `pages/local/monitorizando-el-motor.md` — enfoques de monitorizacion (sondeo externo vs sondas Lua por eventos; nombres de evento confirmados: `zoi.married`, `interaction.started`, emociones, clima), hallazgos medidos y como alimenta al "director de guiones" (enlaza `ideas-juego-inzoi/ideas-y-plan.md`). Rebuild incremental 290.938->290.948 (+10). Gate verde: exit 0, trampas 10/10, nuevos 12/15, ayudas 23/23, tests 12/12 (log: `state/regression-log/2026-10-21-post-monitor.txt`).
- Sesion larga de grabacion (2 h): `state/engine-monitor/sesion-larga-20261021.jsonl` — 3.809 lineas, 0 huecos, 114 transiciones de emocion, 25 rotaciones de esperanzas (generador de historias del motor: resfriado, intoxicacion, estacion, rasgos), DramaPopup/ChoiceCardPopup capturados, movilidad autonoma del hogar. Hallazgos anadidos al doc del corpus; rebuild+gate en verde (`2026-10-21-post-sesionlarga.txt`).
- Informe de analisis (nuevo tool): `tools/analizar_engine_monitor.py` produce el informe completo del motor desde cualquier JSONL del monitor; primer informe en `docs/analisis-monitor/sesion-larga-20261021-informe.md` (emociones: cadencia 0,6-0,9 trans/h juego, vida media 35-121 min juego; relaciones: deriva ±0,01/tick con decaimiento dominante (-0,01: 11.841 vs +0,01: 1.895), 184 saltos de interaccion 0,07-7,90; esperanzas: vida media 29 min reales, rotacion sin FIFO; dramas: 19-60 s de vida en pantalla).
- EXPERIMENTO 2 (escritura controlada, `tools/experimento2_umbrales.py` + informe `docs/analisis-monitor/experimento2-umbrales-relaciones.md`): umbrales de nivel de relaciones VERIFICADOS con precision decimal — L1 en v>30,00, L2 en v>60,00, L3 en v>90,00, L-1/L-2/L-3 simetricos en negativo (<-30/-60/-90), rango [-100,+100] con clamp a ambos extremos, sin histéresis ni snap (el nivel es funcion pura del valor y recalcula al instante). Hallazgo clave: NO hay tope del motor en 60,00 — el "freno" de la sesion larga es del crecimiento autonomo (empuja hasta el borde), no del valor. Sin colaterales (emociones/esperanzas en cadencia basal durante 216 escrituras). Sujeto restaurado y verificado (14,17).
- MOD NUEVO construido y empaquetado por el pipeline MCP completo (2026-10-22): **TeleportRadial_FB58C4E4** — botones radiales "salto directo a casa" (`movement.go_home`) y "salto al parque central" (`movement.teleport destination=Gangnam_Public_CentralPark`). Fuentes clonadas EN VIVO (`modkit_get_row` de `Self_GoHome` y del `SelfCharacter` actual con sus 505 interacciones vanilla intactas); Lua B2/Main con listener `interaction.started` (BlueLuaKit 0/0); empaquetado con `modkit_package` e instalado en `Documents/inZOI/Mods`. Textos de botones reutilizando TextIds vanilla (GoHome_Sprint y Park_Fountain) — tabla String propia queda como pulido pendiente. Descubrimientos verificables: patron de sitios publicos `Gangnam_Public_*` (CentralPark y CentralParkFountain), y el rescate de atascos `movement.reset_zoi` verificado en vivo.
- Corpus local: alta de `pages/local/trucos-lua-botones-radiales.md` — receta "cualquier cheat como boton radial" con los scripts de ejemplo completos (Lua + JsonPatch + pipeline por consola) y banco de comandos verificados para botones. Biblia: enlace fijo "Trucos Lua" en la barra de navegacion de todas las paginas; doc mapeado en la seccion Script. Rebuild+gate verde (`2026-10-22-post-trucos.txt`); recuperacion top-1 (0,999) para "boton radial con truco lua" con source=local.

### 2026-10-15 — Refresh tras la actualización ModKit/MCP

- Snapshot incremental Wiki `20261015T083548Z`: 3.686 páginas activas; 0 añadidas, modificadas o retiradas; 0 errores.
- MCP: ModKit 121→125 herramientas (4 nuevas: `modkit_discard`, `modkit_set_vehicle_owned_object`, `modkit_set_vehicle_seat_anim`, `modkit_set_vehicle_slot_data`); juego 412→414 (nuevas: `building_unlock_gizmo_axis`, `uimod_disable`). Sin retiradas. Cambiaron descripciones y esquemas de herramientas existentes.
- Catálogo de juego: 410 comandos registrados, 407 expuestos por MCP y clasificados como CLI; 7 herramientas quedan sin clasificar.
- Regeneración: 141 fichas, 407 comandos CLI, 21 workflows y 419 pares QA; todos los asserts pasaron.
- Índice e5-small: 34.714→34.893 chunks; 516 embebidos y 34.377 reutilizados. Backup previo: `state/vector-index/vector_index_pre-refresh-2026-10-15.sqlite`.
- Validación: `test_vector_search.py` 7/7; evaluación RAG exit 0, trampas 10/10, nuevos 13/15 (87%), ayudas 23/23, 0 violaciones de política. La batería general obtuvo hit@5 7/17 (41,2%) y recall de archivos 9/59 (15,3%); esos casos siguen requiriendo mejora, no son una regresión cuantificada porque no se midieron contra el índice anterior.
- Lua en vivo: callback `B2/Zoi/CallbackProbe.lua` (`ResidenceFamily`) ejecutado y confirmado por el usuario en **Output**; validación BlueLuaKit 0 errores/avisos, preview montado y desmontado. `HasSigLua:false` no predijo este resultado. Pendiente al próximo inicio: repetir en proceso nuevo; el preview temporal no prueba persistencia de un mod empaquetado. Evidencia y alcance: `pages/local/verificacion-lua-2026-10-15.md`.

### 2026-10-09 — WF-19: diagnostico de prendas CAZ

- Alta de `generators/workflows/wf-19-depurar-prenda-caz.md` (workflow intermedio, fuente `mcp-tools`): invariantes de prendas CAZ verificados contra filas vanilla en vivo el mismo dia (build W.MODKIT_EGS 20260914.15275): enlace de Ids `GarmentTop.Id` = `Variants[0]` = `GarmentTopMesh.Id` = `GroupId`; regiones de mascara sin `None` (`DrawingRegions`/`CoveringRegions`/`BodyRegions`, `PantsWaist`, `LayerPriority` top 80 / bottom 50); `OverrideMaterial` vacio a proposito en CAZ (materiales por slot); campos no documentados por la wiki (`Comment`, `IsLockedItem`, `PartsId`, `HairCutHeight`, `bDeformingGloves`); enums validos (`Child` no existe). Origen: caso real de un top custom que el juego solo permitia combinar con faldas.
- Asserts actualizados: gen_fase4 (19 workflows), gen_fase5 (378 pares QA). QA anadidas en `generators/qa/workflows.json` (4 preguntas de sintoma, ES) + linea de sintomas EN en el propio workflow para retrieval cross-lingual.
- Rebuild incremental: 32.512 -> 32.543 chunks (9+1 embebidos). Regresion verde: exit 0, trampas 10/10, nuevos 13/15 (87%), tests 12/12. Verificado: la duda de sintoma (ES y EN) devuelve WF-19 en top-1.

### 2026-10-09 — Hooks EN de retrieval en los 19 workflows

- Motivo (medido): la wiki y los docs oficiales ya estan en ingles (30k chunks), pero el conocimiento generado (fichas/workflows) solo existia en espanol. Consultas EN coloquiales/sintoma fallaban ("my mod doesn't load" no devolvia WF-07; top-1 irrelevante). Las consultas con identificadores literales (nombre de tool/comando) si cruzaban.
- Cambio: una linea "**EN:** ..." con la formulacion del sintoma/tarea en ingles, insertada tras el Objetivo de cada workflow fuente (`generators/workflows/wf-01..19`). Es un hook de retrieval, NO una traduccion del contenido: el texto verificado sigue siendo el espanol.
- Rebuild incremental: 20 chunks re-embedeados. Regresion verde: exit 0, trampas 10/10, nuevos 13/15, tests 12/12.
- Verificado EN: "my mod doesn't load" -> WF-07 top-1 (antes ausente); "furniture from Blender" -> WF-01 top-1; "publish to CurseForge" -> WF-03 en top-3 (docs oficiales EN legtimamente por delante); "language workspace translations" -> WF-10 top-1.
- Protocolo multilingue del cliente (asistentes): contestar SIEMPRE en el idioma del usuario; si la recuperacion parece debil con una consulta no espanola, reformular la consulta en espanol y reintentar; los hooks EN solo cubren sintomas, no todo el vocabulario.

### 2026-10-09 — Internacionalizacion: workflows bilingues + hooks EN en intenciones CLI

- Los 19 workflows llevan ahora una seccion "**English version (EN)**" completa (traduccion fiel del cuerpo: objetivo, pasos, advertencias) anadida a las fuentes en `generators/workflows/`. Diseno elegido a proposito: docs bilingues IN-PLACE (un solo doc_id por tema) en vez de paginas EN clonadas — las consultas ES siguen dando con los chunks ES (trampas intactas, sin competencia entre versiones) y las EN con los chunks EN. Frases verificadas, literales y nombres de campo sin traducir.
- Las 22 intenciones CLI (generadas por gen_fase3.py) llevan una linea "**EN:**" (dict INTENT_EN) con la formulacion inglesa de la intencion; especifica solo donde hay verificacion (dinero sin getter, game_continue manual, needs via stat_get_all, smartbuild sin persistencia), generica-fiel al titulo en el resto.
- Corpus: 32.544 -> 32.622 chunks. Regresion verde tras cada rebuild: exit 0, trampas 10/10, nuevos 13/15, tests 12/12.
- Medido EN: consultas sintoma clavan top-1 ("my mod doesn't load", prenda no combinable, mueble desde Blender, errores Lua). Consultas EN de comportamiento transversal (p.ej. "does game_continue load the autosave?") quedan en rank 7-8 detras de paginas wiki lexicalmente parecidas pero QUE NO RESPONDEN la pregunta (gameplay.set_autosave no documenta game.continue): recuperable con top_k>=10 o reformulando en ES (rank 1). Protocolo documentado en la guia: en temas de comportamiento, ejecutar tambien la formulacion espanola.
- Pendiente (fase 3 posible): las 137 fichas siguen solo ES; su titulo es el nombre de la tool (matchea consultas con identificadores), y las descripciones cortas las traduce el asistente al responder. Traducirlas solo si se quiere lectura directa EN sin asistente.

### 2026-10-09 — FASE B: capa de ayudas del foro + fuentes oficiales canonicas

- **Capa de ayudas**: 702 fichas en pages/mcp-tools/ayudas/ (source: mcp-tools, buscable) generadas por `generators/gen_fase6.py` desde el foro (707 casos de calidad: 573 aceptados + 134 en-hilo; clase (c) excluida por regla). Familias: otros 291, mods 114, gameplay 110, negocio 49, guardados 43, instalacion 38, build 30, graficos 27. verified: pendiente en todas; 159 verificables priorizadas. NO indexadas todavia (pendiente de revision del informe + QA pairs).
- **Fuentes oficiales**: patch notes de playinzoi.com via API FOC Krafton (tools/patchnotes_capture.py; 68 notas v0.1.1-v0.10.4, 647 fixes, URL canonica) + Bug Fix Lists del foro (189) + Known Issues mensuales ago-2025..sep-2026 (943). modkit-changes.jsonl (43 menciones al ModKit en patch notes) como material para mcp-tools.
- **Cruce clase (c)** (tools/forum_official.py cross, contencion de tokens, matches 'heuristico, revisar'): de 2623 pendientes -> 140 arreglado-oficialmente, 29 conocido (2 vigentes), **2454 sin reconocimiento oficial**. pages/local/forum-bugs-pendientes.md reescrito con las tres clases.
- **Cobertura**: 715/716 preguntas de ficha son conocimiento NUEVO para el corpus (dominio foro ~ disjunto del dominio modding). state/forum-raw/analysis/cobertura.jsonl.
- Runbook: FASE 0.5 anadida — leer patch note v0.11 + October KI y re-cruzar ANTES del diff MCP el dia del parche.
- Informes: state/forum-raw/informe-fase-a.md y informe-fase-b.md.

### 2026-10-09 — Capa de ayudas del foro: APROBADA, indexada y en verde

- Subfamilias de otros/ (metadatos, sin tocar contenido): 11 subfamilias, residuo otros-residual 28/287 = 10% (objetivo <15% cumplido). Filtro anti-charla anadido: 5 hilos de conversacion excluidos (703 -> 697 fichas).
- Muestreo 3+3 con criterios: hallazgos = titulos declarativos (no pregunta), causa extraida con fragmentos truncados/basura, y post aceptado que era el grito de exito del OP (la solucion real estaba en el post padre). Corregido globalmente: causa honesta ("desconocida" si no hay causa solida), boilerplate del staff fuera de causa/solucion, extraccion de la solucion real desde topics/*.json cuando el aceptado es del OP con marcador de exito, y overrides curados de titulo-pregunta para las 6 muestreadas (TITLE_OVERRIDES en gen_fase6). Los titulos-declarativos del resto quedan como sintoma literal del usuario (transformacion masiva rechazada: generaria preguntas artificiales); proximo paso en el pulido manual.
- QA de ayudas: 23 pares (generators/qa/ayudas.json, 8 verificables), gen_fase5 extendido: 401 pares totales.
- Bateria: grupo "ayudas" (23 casos, top_k 5) en rag_battery_mcp.json + gate >=80% en evaluate_rag.py.
- Baseline respaldada: vector_index_pre-ayudas-2026-10-09.sqlite ANTES del rebuild.
- Rebuild: 32.622 -> 34.134 chunks (+1.512). Regresion VERDE a la primera: exit 0, trampas 10/10, nuevos 13/15 (87%), ayudas 23/23 (100%), policy 0, tests 12/12.
- TANDA 1 (informativa): 8/17 -> 7/17 casos con evidencia; unico degradado = caso 10 (animacion interrumpible): una ficha de interacciones del foro desplazo un archivo esperado del top-5. Juzgado aceptable (competencia legitima de la capa nueva).
- Tips & Guides: SIGUE CONGELADO hasta post-parche del 15/10.

### 2026-10-09 — Reclasificacion experta de la lista de bugs (criterio de modder)

- Conocimiento experto aportado por el usuario: los fallos Mac/Apple (graficos/memoria) son LIMITACIONES de plataforma y los 'mods rotos tras actualizar' son ROMPIMIENTO POR MIGRACION de version/motor (ejemplo canonico: [2026] Failed to Apply Mods; el salto UE 5.5.4->5.6.1 rompio muchos mods que no pasaron el bake de CurseForge y hubo que recrearlos). Ninguno es bug del juego.
- Reclass en cross.jsonl + forum-bugs-pendientes.md (ahora 5 clases): no-es-bug limitacion-plataforma-mac 27, no-es-bug mods-rotos-por-migracion 15 (curado a mano sobre 26 candidatos heuristicos, 11 descartados como gameplay/hardware).
- Bugs reales sin reconocimiento oficial: 2454 -> 2412. Las dos clases no-es-bug quedan FUERA del informe-devs v2 y del shortlist de la FASE 0.5b.
- Pendiente propuesto: WF-20 "mi mod dejo de funcionar tras actualizar el juego" con el conocimiento de migracion (re-bake/re-export vs recrear; el caso UE 5.5.4->5.6.1 como referencia verificada).

### 2026-10-09 — Conocimiento experto con embargo: viaje entre mundos/ciudades en v0.11

- Aportado por el usuario (modder): el parche del 15/10 [v0.11] incluye el viaje entre
  mundos/ciudades en avion (antes no era posible saltar). Feature SECRETA hasta el 15/10 —
  NO indexar ni generar contenido del corpus sobre ella hasta su publicacion.
- Preparado para el dia del parche: 44 pendientes de la lista de bugs marcados
  relacionado-viaje=true en state/forum-raw/official/cross.jsonl (viajes, mudanzas,
  trips: 'Unable to embark on City Trips', 'Game Crashes When Traveling to Another City',
  'Cannot Travel to Cahaya', etc.). El re-cruce de la FASE 0.5 debe pasarles el filtro
  primero: los que el patch note declare arreglados por la feature pasan a arreglado.
- Nota de embargo anadida al runbook (FASE 0.5).

### 2026-10-09 — WF-20: mod roto tras actualizar (migracion) — indexado y en verde

- generators/workflows/wf-20-mod-roto-tras-actualizacion.md: diagnostico de rompimiento por migracion (no es bug), Fix Up Mod Project del editor (Utility -> Fix Up Mod Project, verificado en pantalla 2026-10-09 con captura del usuario: fix-ups automaticos de referencias Material/MPC), re-empaquetado/re-publicacion, y recreacion tras saltos de motor (caso UE 5.5.4 -> 5.6.1: muchos mods no pasaron el bake de CF y hubo que recrearlos). Seccion EN completa. QA: 4 preguntas.
- Asserts gen_fase4/gen_fase5 19->20; pares QA 401->405. Rebuild: 34.134 -> 34.126 chunks (reordena). Regresion verde: exit 0, trampas 10/10, nuevos 87%, ayudas 23/23, tests 12/12.
- Verificado: la duda del sintoma devuelve WF-20 en top-1 (ES y EN, incluida 'what does fix up mod project do' -> top-1 con el doc oficial Fix Up de respaldo).

### 2026-10-09 — Tercera clase experta: compatibilidad del update con hardware

- Aportado por el usuario: cuando una actualizacion no es compatible con la memoria/graficos/CPU, aparecen congelaciones, crashes y caida de rendimiento TRAS el parche — le pasa incluso a maquinas potentes (ejemplo canonico: [1372] Game Freezing Bug). No es bug de gameplay: se resuelve con hotfix/drivers/ajustes.
- Marcados 44 pendientes como 'no-es-bug: compatibilidad-hardware-tras-update' (43 heuristicos HW+update con exclusiones curadas + el ejemplo [1372] explicito). Bugs reales sin reconocimiento: 2412 -> 2368.
- forum-bugs-pendientes.md ahora con 6 clases; las tres no-es-bug fuera del informe-devs v2.

### 2026-10-09 — Cuarta y quinta clases expertas: arranque y plataforma del foro

- Regla del experto: cualquier 'no me arranca' suele ser incompatibilidad (Apple o Windows) y el 90% es culpa de la grafica o memoria/CPU — no bug de gameplay. Marcados 12 como 'no-es-bug: fallo-arranque-compatibilidad-hardware' (curados de 20 heuristicos; incluye 'ModKit crashes with GPU Crashed/D3D Device Removed', que es el EDITOR arrancando con fallo de GPU).
- Fallos de la plataforma del FORO (posts, perfil, composer, trust level; ej. [1687] 'Users unable to create bug report posts'): 16 marcados 'no-es-bug: plataforma-foro'. Excluidos boletines Kjun Discord y un crash real del juego con titulo-URL.
- Bugs reales sin reconocimiento: 2368 -> 2340. Registro con 8 clases.

### 2026-10-09 — Mecanismo concreto del fallo de arranque: DirectX 12.1/12.2

- Aportado por el usuario: si la GPU no soporta DirectX 12.1/12.2, el juego NO INICIA (nivel de DX inferior = no arranca). Es LA comprobacion concreta detras de la regla '90% del no-me-arranca es grafica/memoria/CPU'. Anadida a la cabecera de forum-bugs-pendientes.md (clase 4).
- Este conocimiento + las reglas de update-hardware y Mac forman el arbol de triaje pendiente de convertir en workflow de diagnostico (propuesta: post-verificaciones del 15/10).

### 2026-10-09 — WF-21: triaje "el juego no me arranca" (compatibilidad, no bug)

- generators/workflows/wf-21-juego-no-arranca-triaje.md: arbol de triaje barato-primero con las reglas expertas verificadas el mismo dia: requisitos minimos oficiales en la web para AMBOS OS; GPU sin DirectX 12.1/12.2 = el juego NO inicia; GPU buena + RAM insuficiente = el juego SE CIERRA; un fix mal realizado puede dejar una GPU fuera hasta el proximo fix (los devs deciden descartarla/instruirla); Mac = limitacion de plataforma; mods tras parche -> WF-20; solo si todo esta descartado -> bug candidato. Seccion EN completa. QA: 4 preguntas.
- Asserts gen_fase4/gen_fase5 20->21; pares 405->409. Regresion verde: exit 0, trampas 10/10, nuevos 87%, ayudas 23/23, tests 12/12.
- Con WF-20 + WF-21, el triaje completo de post-actualizacion (mods y juego) vive en el corpus y es recuperable por sintoma.

### 2026-10-09 — Proceso de triaje manual incremental (acordado con el experto)

- El usuario hara triaje a su ritmo sobre los 2340 pendientes: lee la pregunta, responde la que sabe, la que no se queda pendiente — y el 15/10, tras [v0.11] + October KI, muchas se responderan solas (re-cruce FASE 0.5). SIN PRISA: mientras el juego este en acceso anticipado, 'pendiente sin respuesta' es un estado terminal valido, no un defecto del proceso.
- Herramienta: pages/local/triaje-manual.md — top 50 por traccion con campos respuesta/estado (respondida-experto | pendiente | auto-resuelta-15/10 | sin-respuesta). Las respuestas del experto se convertiran en fichas verificadas de la capa ayudas (via gen_fase6 + TITLE_OVERRIDES o ficha nueva).

## Documentos de referencia

- Verificación en vivo (payloads y literales V1–V18): `pages/local/verificaciones-2026-10-09.md`
- Informe de hallazgos para devs: `pages/local/informe-devs.md` (ES) · `pages/local/informe-devs-en.md` (EN, con anexos de 104 comandos sin wiki y 104 EXPERIMENTAL)
- Procedimiento de parche día-D: `UPDATE-RUNBOOK.md` (FASE 0–4 + prompts listos)
- Pares QA con trampas: `state/mcp-tools/qa-pairs.jsonl` (419) · batería tanda 1: `tests/fixtures/rag_battery.json` (24) · tanda 2: `tests/fixtures/rag_battery_mcp.json` (25)
