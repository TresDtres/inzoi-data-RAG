# TODO — inZOI ModKit RAG: continuidad

Actualizado: 2026-11-03 (cierre de sesión Conversión de Época Joseon/Hanok + Publicación GitHub Pages + Auditoría 10.880 páginas; ver `../todo.md` para el plan detallado de la próxima sesión).

## Próxima Sesión — Investigación de Opciones Lua + Lluvia de Ideas por Departamento del ModKit

- **Objetivo**: recorrer los **12 departamentos del ModKit** (`CAZ`, `Build`, `Vehicle`, `Animation`, `Data Asset`, `Object Sound`, `Camera Filter`, `Content Template`, `Translation`, `Script`, `User Interface`, `Blank`), realizar una **lluvia de ideas por cada opción** y clasificar con pruebas reales **cuáles son aplicables a Lua (B1/B2/CoHTML)** y **cuáles requieren DataAsset/JsonPatch/Editor**.
- Ver matriz completa de los 12 departamentos en [`../todo.md`](../todo.md).

## Sesión 2026-11-03 — Conversión de Época (`SejongEraMod`), Subsistemas del Mapa y GitHub Pages

- **Dominio 2 (`zoi_target_social`)**: documentados e integrados `runtime_host_swapping` (`b1_possess_switch` + `b2_impersonate_emit`) y `household_target_scope` (`household.get_members`) en `maquina-estados.js` y `script.md`.
- **UI 43" Ultrawide**: layout adaptativo hasta `2400px` en `maquina-estados.css` y `estilo.css`.
- **Conversión Total de Época (`SejongEraMod_UCA1OQ`)**: verificados en vivo los 7 subsistemas del mapa (`UB1WorldManager`, `FB2CityEditManager`, `FB2CityGraphManager`, `FB2Site:ApplySitePreset`, `UB1EnvManager`, `FB2LevelStreamingManager`, `DA_WorldMapConfig`), solares Hanok, vestimenta tradicional y purga de vehículos/electrodomésticos.
- **GitHub Pages y Auditoría Web**: desplegado en `https://tresdtres.github.io/inzoi-data-RAG/maquina-estados.html` con **0 enlaces rotos y 0 dobles barras** en las 10.880 páginas (`5/5` tests Python, `16/16` tests Node).

## Sesión 2026-11-02 — inZOI Lua Flow (B1 ↔ B2, Árboles Contextuales y UI Paso a Paso)

- **Constructor de Árbol de Acciones Contextuales (`CONTEXT_ACTION_TREES`)**: 6 dominios interactivos (Embarazo, Vestimenta, Vehículos, Muebles, Clima/Tiempo, Ciclo Vital) con reglas del motor, bypasses y compilación B1+B2 (`0 errors, 0 warnings` en BlueLuaKit).
- **Deshacer/Rehacer y Borrado**: `createEmptyGraph` + `createGraphHistory` (`Ctrl+Z`, `Ctrl+Y`, `🗑️ Vaciar grafo`, `✂️ Borrar cables`, `🔄 Grafo inicial`, botón `✕` y `Supr` por nodo).
- **Reorganización de UI por flujo de trabajo**: Paso 1 (Blueprint) → Paso 2 (Grafo + Propiedades/Simulador juntos en 2 columnas) → Paso 3 (Exportación con código plegable) → Fondo (Ejemplos y Catálogo plegables).
- **Tests**: Node `14/14 PASS`, Python `4/4 PASS`.
- **Pendiente tras prueba de usuario**: recoger feedback sobre el comportamiento del flujo de trabajo en `http://127.0.0.1:8090/maquina-estados.html?v=2` y ajustar ergonomía según uso real.

## Estado de continuidad (verificado al cierre anterior 2026-10-22)

- Workspace: `modkit-wiki-rag-v2`. Serve vector-search en Docker (GPU RTX 5080), e5-small 384d,
  búsqueda híbrida. **Índice: 290.963 chunks** (wiki/luaapi integrada; +5 docs locales del día).
- Gates en verde al cierre: evaluate exit 0 · trampas 10/10 · nuevos 12/15 (80%) · ayudas 23/23 ·
  política 0 · tests 12/12 (`state/regression-log/2026-10-22-post-trucos.txt`).
- Biblia del Modding (`../biblia-modding-inzoi`): 10.860+ docs renderizados, 12 departamentos,
  buscador local + semántico, nav con "Trucos Lua". Servir: `python -m http.server 8090 --directory sitio`.
- Juego: build `20261019.16318.W` ([v0.11.1]). MCP inzoi-game 414 tools / inzoi-modkit 125 (sin
  session-id: el mcp_client ya lo tolera). CLI 410 registrados / 407 expuestos.

## Ejecutado el 2026-10-21/22 (resumen; detalle en MAINTENANCE)

- **Día de parche v0.11.1 completo**: re-export MCP (0 cambios), FASE 0.5 (patch notes 70, BFL
  v0.11.0, October KI; re-cruce 2340→2338; forum-bugs-pendientes.md actualizado), wiki +6.289
  páginas (luaapi 6.158), índice 34.948→290.963, fix del serve (DEFAULT_SEARCH_SOURCES con local
  rompía el gate) + optimización search (caché numpy: 41-99 s → 10-19 s), gotcha documentado del
  cross.jsonl que pierde anotaciones expertas.
- **Biblia del Modding creada** (sitio estático, 12 departamentos del ModKit, contenido curado ES +
  navegador de corpus + buscador con semántica del RAG; CORS añadido al serve).
- **Docs del corpus con conocimiento experto verificado contra el disco**: ejemplo-mod-lua
  (PregnancySurprise + FlyingZoi, código real), ejemplo-uimod-menu-zoi (patrón radial JsonPatch+Lua
  con script_test real), monitorizando-el-motor, trucos-lua-botones-radiales (receta completa).
- **Monitor del motor** (`tools/engine_monitor.py`): grabadora de vuelo solo-lectura con diff
  granular; sesión larga de 2 h (3.809 líneas, 0 huecos) + análisis (`tools/analizar_engine_monitor.py`,
  informe en docs/analisis-monitor/): 114 transiciones de emoción, deriva de relaciones ±0,01/tick,
  esperanzas por condición/estación/rasgo, DramaPopup/ChoiceCard capturados.
- **EXPERIMENTO 2** (`tools/experimento2_umbrales.py` + informe): umbrales de nivel de relaciones
  VERIFICADOS con precisión decimal: L1 >30,00 · L2 >60,00 · L3 >90,00 · L−1/L−2/L−3 simétricos ·
  rango [−100,+100] con clamp · sin histéresis · el "freno en 60" es del crecimiento autónomo, no
  del valor. Sujeto restaurado (14,17).
- **MOD NUEVO TeleportRadial_FB58C4E4**: botones radiales "salto directo a casa" y "salto al
  parque central". Construido por el pipeline MCP completo (clon en vivo de Self_GoHome y del
  SelfCharacter actual con 505 vanilla intactas; BlueLuaKit 0/0; empaquetado e instalado en
  Documents/inZOI/Mods). Extra verificado en vivo: `movement.reset_zoi` (rescate de atasco) y el
  patrón de sitios públicos `Gangnam_Public_*`.
- **Fixes de herramientas**: mcp_client (servidores sin sesión + validación diferida, 4x más
  rápido), capture_snapshot (límite sitemap 4.000→12.000), engine_monitor (paralelismo con pool:
  los 2,1 s fijos por llamada se solapan).

## SIGUIENTES PASOS (próxima sesión)

1. **Probar TeleportRadial en juego (v2, corregido 2026-10-22)**: la primera version no
   mostraba botones por DOS bugs encontrados al depurar: (a) casing del JsonPatch — get_row
   devuelve `Id`/`GroupID` pero el formato exige `ID`/`GroupId` (las filas no se aplicaban sin
   error); (b) faltaba `lua/lua_manifest.json` (los .lua empaquetados no se montan sin manifiesto).
   v3 (mismo dia): fallaba TAMBIEN por falta de `"Enabled": true` en las entradas del
   InteractionBag y por `Id` (en vez de `ID`) dentro de `InteractionSequence` — sin Enabled la
   entrada no se aplica aunque el casing sea correcto. Diff recursivo contra el mod funcional
   ahora da cero diferencias en las tres tablas; re-empaquetado y reinstalado (verificado en
   Documents). FALTA: reiniciar el juego y verificar los 2 botones junto al de casa. Gotchas
   completos (renombres + Enabled) en pages/local/trucos-lua-botones-radiales.md; pendiente el
   rebuild del indice RAG para ese doc (proxima ventana de mantenimiento).
2. **Textos propios para los botones** (pulido): tabla String del proyecto desde el editor para
   "Ir a casa (salto)" / "Ir al parque" en vez de los TextIds vanilla prestados.
3. **REA hipótesis prioritarias** (del análisis del monitor):
   - Motor de esperanzas: ¿cola con prioridad por condición? (cheats de enfermedad + observar
     orden de desplazamiento y expire_ticks).
   - DramaPopup: disparadores (sesión con sonda Lua de interaction.started + ui_get_tree del popup).
   - Saltos de interacción que cruzan bordes de nivel de relación (el "freno" en 60/90).
4. **Sonda Lua embebida**: script que loguee `interaction.started` (y más eventos descubiertos)
   a archivo, para cruzar con el monitor externo.
5. Tras el próximo parche del juego: re-ejecutar la lista vanilla de SelfCharacter si se añaden
   interacciones (el Override del TeleportRadial la congela; regla documentada en trucos-lua).
6. **Informe-devs v2**: redactar ES/EN desde el shortlist ya generado
   (state/forum-raw/analysis/shortlist-informe-devs-v2-2026-10-21.jsonl).
7. Tips & Guides (descongelar tras v0.11): capturar y filtrar guías desactualizadas.

## Pendientes sin prisa (válidos durante el EA)

- `causa` vacía/"desconocida" en ~540 fichas de ayudas; títulos-declarativos con overrides curados.
- Cruce "arreglado": precisión muestral ~50% — revisar match_text antes de dar por arreglado.
- cross.jsonl: hacer que `forum_official.py cross` preserve anotaciones expertas (hoy se
  restauran a mano desde forum-bugs-pendientes.md; los 44 `relacionado-viaje` curados se perdieron
  — quedó `relacionado_viaje_heuristico`).
- Las tablas mangled del scraper de wiki en la biblia (renderizan tal cual; arreglar aguas arriba
  si molesta).
- Tabla String de textos propios de botones (depende del paso 2).

## Reglas vigentes (recordatorio)

- Verificar contra vivo antes de escribir crítico; retorno vacío ≠ aplicado (V18).
- Tras cada parche: releer lo citado (campos, enums, retornos) — Krafton parchea en silencio.
- Contesta siempre en el idioma del usuario; si la recuperación falla con consulta no española,
  reformular en español.
- Cambios de corpus: backup antes, gate exit 0 después, log en state/regression-log/, sellar en
  MAINTENANCE.md.
