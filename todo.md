# TODO — inZOI Lua Flow (Game Flow System B1 ↔ B2) y Biblia del Modding

Actualizado: 2026-11-03

## Plan para la Próxima Sesión — Investigación de Opciones Lua + Lluvia de Ideas por Opción del ModKit

Objetivo: recorrer **cada una de las 12 opciones/departamentos del ModKit (`MY MOD PROJECTS`)**, hacer una **lluvia de ideas de mods/mecánicas** para cada opción y clasificar con pruebas reales **cuáles son aplicables a Lua (`B1` / `B2` / `CoHTML` / `Cheat Bridge`)** y **cuáles no lo son (requieren DataAsset / JsonPatch / Blueprint / FBX / Wwise)**.

| # | Opción del ModKit | Lluvia de ideas / Qué investigar en Lua | Clasificación a verificar (`✅ Lua` / `🔶 Híbrido` / `❌ Sin Lua`) |
|---|---|---|---|
| 1 | **CAZ (`crea-zoi`)** | `AppearanceScriptBridge`, `appearance.*`, `SelectParts`, trajes dinámicos por época/clima/evento, morphs en vivo | Qué cambia en caliente desde Lua B2 vs qué exige `CAZMesh` / DataAsset |
| 2 | **Build (`build`)** | `FB2Site:ApplySitePreset`, `FB2GameObject`, `DestroyObject`, `build.*`, `smartbuild.*`, estados de muebles (`Broken`, `Dirty`, luces) | Qué objetos/solares se mutan desde Lua vs qué requiere `JsonPatch` |
| 3 | **Vehicle (`vehicle`)** | `FB2Vehicle`, `SpawnVehicle`, `DestroyVehicle`, `GetDriver`, bloqueo de tráfico, conducción y teletransporte | Límites de control de vehículos desde Lua B2 vs asset de vehículo |
| 4 | **Animation (`animation`)** | `animation.*`, `facial.*`, `pose.*`, disparo de montajes/gestos e interacciones desde Lua | Qué animaciones/expresiones se disparan desde Lua vs retargeting FBX |
| 5 | **Data Asset (`data-asset`)** | Lectura de tablas/filas desde Lua (`ObjectTableId`, `DataTable`), combinación `JsonPatch` + hooks Lua | Qué tablas son solo estáticas al arranque vs consultables/mutables en vivo |
| 6 | **Object Sound (`object-sound`)** | `audio.*`, eventos sonoros ligados a interacciones u objetos, silencio/reemplazo ambiental | Qué sonidos se disparan/mutean desde Lua vs bancos Wwise |
| 7 | **Camera Filter (`camera-filter`)** | `camera.*` (`fov`, `dof`, `filter`, `lut`, cinemáticas reactivas en B1) | Qué efectos visuales de cámara son controlables por evento Lua B1 |
| 8 | **Content Template (`content-template`)** | Plantillas combinadas (evento/carrera/solar + script Lua) | Cómo acoplar `lua_manifest.json` a plantillas híbridas |
| 9 | **Translation (`translation`)** | `gameplay.set_language`, `TextId` dinámicos, localización en UIMods CoHTML y notificaciones (`toast.show`) | Qué textos admiten inyección dinámica vs tabla `String` |
| 10 | **Script (`script`)** | Explorar el resto de los `UB1*` / `FB2*` en `luaapi` (6.158 páginas), timers, eventos ocultos, persistencia y hooks | Mapa completo de APIs Lua verificadas vs stubs no expuestos |
| 11 | **User Interface (`user-interface`)** | Puente bidireccional CoHTML (`inzoi-sdk.js` ↔ `on_lua_message` B1 ↔ `send_packet` B2), HUD reactivo, menús radiales | Qué widgets del juego se pueden leer/alterar vs ventanas UIMod propias |
| 12 | **Blank (`blank`)** | Mods híbridos multipropósito (conversión total, modos de juego, reglas globales, director de historias) | Arquitectura recomendada para combinar DataPatch + UIMod + Lua B1/B2 |

---

## Completado en la sesión 2026-11-03

- **Dominio 2 (`zoi_target_social`) — Inversión de Posesión Dinámica y Multi-Target Familiar**:
  - Verificados e integrados en `maquina-estados.js` y `contenido/biblia/script.md`: `runtime_host_swapping` (`b1_possess_switch` en B1 + `b2_impersonate_emit` en B2 con restauración en `interaction.finished`) y `household_target_scope` (`household.get_members` + filtro `marked_members` / `all_non_host`).
- **UI Ultrawide / 43" (4K)**:
  - Ajustados `maquina-estados.css` y `estilo.css` (`max-width: min(2400px, 96vw)`, columna derecha `minmax(460px, 600px)`, `overflow-wrap: anywhere` y scroll interno).
- **Investigación y Mod en Vivo de Conversión Total de Época (`SejongEraMod_UCA1OQ`)**:
  - Descubiertos y verificados los **7 subsistemas ocultos del mapa**: `UB1WorldManager`, `FB2CityEditManager`, `FB2CityGraphManager`, `FB2SiteManager`/`FB2Site:ApplySitePreset`, `UB1EnvManager`, `FB2LevelStreamingManager` y `DA_WorldMapConfig`.
  - Aplicados en vivo Hanoks tradicionales (`Gangnam_Residence_Free01_07`, `Free07_05`, `Free08_05` + `bTakeOffShoes = true`), vestimenta tradicional (`Outfit_Hanbok_*`), bloqueo de tráfico y purga de vehículos (`FB2Vehicle:DestroyVehicle`) y electrodomésticos modernos (`FB2GameObject.ObjectTableId` + `DestroyObject`: 265 → 253 objetos en el solar activo).
  - Añadido el grupo `"3. Conversión de Época y Subsistemas del Mapa (Hanok / Joseon / Sin Tráfico)"` en `maquina-estados.js` (dominio `weather_time`) y documentado en `contenido/biblia/script.md`.
- **Publicación Web en GitHub Pages y Auditoría Completa de Enlaces**:
  - Activado GitHub Pages con `.github/workflows/pages.yml`:
    - Portada: `https://tresdtres.github.io/inzoi-data-RAG/`
    - Lua Flow: `https://tresdtres.github.io/inzoi-data-RAG/maquina-estados.html`
    - Aprende creando: `https://tresdtres.github.io/inzoi-data-RAG/aprende.html`
  - Auditadas las **10.880 páginas HTML** generadas y corregido `generar.py`: **0 enlaces internos rotos** y **0 dobles barras (`//`)** (`5/5` tests Python, `16/16` tests Node).

---

## Estado anterior (sesión 2026-11-02)

- **Editor `inZOI Lua Flow` (`biblia-modding-inzoi/herramientas/maquina-estados.js` + `.css`)**:
  - **Flujo reorganizado en 4 pasos lógicos (incluyendo UIMod Studio)**:
    1. **Paso 1 — Constructor Blueprint (`CONTEXT_ACTION_TREES`)**: selección de categoría (Embarazo, Vestimenta, Vehículos, Muebles, Clima y Tiempo, Ciclo Vital), reglas del motor, bypasses C++/CLI y árbol de opciones con dependencias (`dependsOn`).
    2. **Paso 2 — Lienzo del Grafo + Panel Lateral (2 columnas)**: barra de herramientas pegada al lienzo con creación de nodos, **`↩ Deshacer (Ctrl+Z)`**, **`↪ Rehacer (Ctrl+Y)`**, **`🗑️ Vaciar grafo`**, **`✂️ Borrar cables`**, **`🔄 Grafo inicial`**, borrado de nodos (`✕` / `Supr`) y panel de **Propiedades del Nodo, Simulador y Validación** junto al grafo.
    3. **Paso 3 — Diseñador y Visualizador de Ventana Interactiva (`UIMod` Studio, igual al de inZOI ModKit)**: lienzo en vivo `1920×1080` con configuración de tamaño (`width` × `height`), posición, tema/colores, tecla de apertura (`trigger`), `input_policy` (`overlay` / `modal` / `passthrough`) y botones interactivos generados desde el grafo (haz clic sobre cada botón en la vista previa para probar la llamada `inzoi.cli.execute` / `lua.send_message` antes de enviarlo al juego).
    4. **Paso 4 — Exportación**: descarga del Mod Completo (**5 archivos UIMod** `uimod_manifest.json`, `index.html` con orden CoHTML estricto, `styles.css`, `window.js`, `app.js` + **3 archivos Lua B1/B2** `FlowBridgeClient.lua`, `FlowBridgeServer.lua`, `lua_manifest.json`).
    5. **Al fondo**: los 4 ejemplos de dominio, los 4 casos progresivos B1 ↔ B2 y el catálogo forense de 33 operaciones plegados para no sobrecargar la vista principal.
- **Pruebas automatizadas y validación ModKit**:
  - `node --test .\biblia-modding-inzoi\tests\maquina-estados.test.js` → **15/15 PASS**
  - `python -m unittest discover -s .\biblia-modding-inzoi\tests` → **4/4 PASS**
  - `modkit_validate_lua_script` sobre `script_test_31B97F40` (`B1/Zoi/FlowBridgeClient.lua` y `B2/Zoi/FlowBridgeServer.lua`) → **ok: true, 0 errors, 0 warnings**
- **Servidor local de previsualización (`127.0.0.1:8090`)**:
  - Sincronizados `biblia-modding-inzoi/sitio/assets/` y la copia activa de previsualización en `http://127.0.0.1:8090/maquina-estados.html?v=2`.

## Siguientes pasos (para revisar tras probar el flujo de trabajo)

1. **Feedback de usabilidad del flujo Paso 1 → Paso 2 → Paso 3**:
   - Revisar qué ajustes de ergonomía, orden de controles o conexión de nodos surgen al construir grafos desde cero o desde el asistente Blueprint.
2. **Edición de opciones del árbol desde el propio grafo**:
   - Permitir añadir/quitar nodos individuales de sub-opciones del árbol sin regenerar el grafo completo cuando el usuario ya haya hecho ediciones manuales en el lienzo.
3. **Persistencia de múltiples proyectos en navegador**:
   - Añadir selector rápido de "Mis grafos guardados" (`localStorage` con nombre) además de `Guardar proyecto JSON` / `Importar JSON`.
4. **Verificación runtime pendiente de operaciones `ACK_ONLY` / `EXPERIMENTAL`** (ver `RUNTIME_VERIFICATION_BACKLOG.md`):
   - `pregnancy_accelerate_delivery`: probar `ScheduleEndTime` con offset relativo o `inzoi.timer` en partida activa.
   - `appearance.equip_accessory` / `outfit.change_preset`: probar con IDs de assets reales del catálogo CAZ.
   - `furniture.place_object`: confirmar spawn físico o necesidad de `FTransform` explícito en `B2`.
   - `weather.force_snow_accumulation` y `season.change`: verificar transición con reloj de simulación corriendo.
