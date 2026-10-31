---
source: local
url: ModKit interno (Data/Tools/mcp/modkit/workspace_docs/ws_uimod.md + inzoi-sdk.js + Sample_UIMod) + sondeo MCP 2026-10-14
title: "Qué hace el UIMod del ModKit: web apps (HTML/JS) sobre el juego vía Coherent, SDK inzoi, triggers, preview y MCP"
generado: 2026-10-14
---

# UIMod: qué es y qué hace el flujo de modding de UI del ModKit

Investigación 2026-10-14 sobre fuentes internas del propio ModKit (docs
MCP oficiales `ws_uimod.md`, SDK `inzoi-sdk.js`, plantillas y el proyecto
`Sample_UIMod` en vivo). Etiquetas: [DOC-internal] (doc oficial interna del
ModKit), [VERIFIED] (probado/sacado en vivo en esta sesión), [INFERRED],
[UNKNOWN].

## 1. Qué ES un UIMod

Un UIMod es una **pequeña aplicación web (HTML + CSS + JS) que corre
ENCIMA de inZOI**, montada sobre el navegador embebido del juego
(**Coherent GT / Cohtml** — el mismo sistema de UI de UE). No es DataTable,
no es UObject: es **100% basado en ficheros** bajo `ui/` del plugin.

```
{Plugin}/ui/
 ├── uimod_apps.json          # lista ordenada de apps (default/enabled)
 ├── clock_widget/            # UNA app = UN panel
 │   ├── uimod_manifest.json  # display + input_policy + triggers
 │   ├── index.html           # shell (title-bar + #content); carga 4 scripts en orden
 │   ├── window.js            # gestor de ventanas del scaffold (define el global `wf`)
 │   └── app.js               # la lógica (usa `wf` / SDK inzoi)
 └── ...
```

- Un mod = un workspace UIMod (**singleton** por proyecto) con N apps
  [DOC-internal]. `modkit_add_workspace` con workspace existente devuelve
  `reused: true` (no error).
- `window.js` da el chrome de ventana (arrastrar, redimensionar, clicks
  fiables, persistencia de estado) — coincide con el `uimod_scaffold` del
  lado del juego [DOC-internal].
- Orden de scripts en index.html: **coherent.js → inzoi-sdk.js → window.js
  → app.js** (coincide con la fila del checklist v1) [DOC-internal].

## 2. El SDK de JS (`inzoi-sdk.js`, 314 líneas, servido como `coui://UIModSDK/inzoi-sdk.js`)

Wrapper Promise sobre `engine.call`/`engine.on` de Coherent GT. Superficie
pública [VERIFIED lectura del SDK]:

| API | Qué hace |
|---|---|
| `inzoi.cli.execute(command, params)` → Promise | **Ejecuta comandos CLI del juego** (los ~405 del catálogo: mover tiempo, teleports, mood, escanear entidades...). Forma: `('zoi.setMood', { mood: 'happy' })` |
| `inzoi.cli.list(category)` / `inzoi.cli.help(command)` | Descubrir comandos desde la propia app |
| `inzoi.data.query(domain, method, params)` | Consultas de datos (promesas con timeout 10 s) |
| `inzoi.data.subscribe(domain, params, cb)` / `onPush(domain, cb)` | Suscripciones push de datos del juego |
| `inzoi.event.fire(name, params)` | Eventos (incluye `ui.set_keyboard_focus` para inputs) |
| `inzoi.trigger.onActivated(cb)` | Callback de triggers del manifest (`t.type`, `t.key`, `t.command`, `t.event`...) |
| `inzoi.view.show/hide/resize/reload/hover/setContentRect` | Control de la propia ventana del mod; `setContentRect` para el routing del wheel/click (hit-test síncrono; `hover` es fallback) |
| `inzoi.debug.echo/log`, `inzoi.config.setTimeout`, `inzoi.types` | Debug, timeout, constantes de enums C++ |

**Potencia real**: el CLI del juego expone control de nivel cheat (tiempo,
teleports, escaneos, estados). Un UIMod = **interfaz gráfica arbitraria
sobre ese control** — limitada a lo que el catálogo CLI permita.

## 3. Manifest (schema oficial, validado por `modkit_write_uimod_manifest`)

```json
{
  "name": "Clock Widget",
  "entry": "index.html",
  "display": { "width": 1920, "height": 1080, "transparent": true,
               "input_policy": "passthrough" },
  "triggers": [ { "type": "always_on" } ]
}
```

- Canvas lógico SIEMPRE tratado como 1920×1080 (escalar el CSS).
- `input_policy`: **overlay** (captura clicks, el juego sigue; para
  paneles con botones), **modal** (captura + pausa el juego detrás;
  diálogos full-screen), **passthrough** (NO captura clicks; solo HUDs
  pasivos/decorativos).
- **Triggers** (cuándo despierta el panel; varios por manifest):
  `always_on` · `keybind` (`key` = UNA tecla, `modifiers` ["Ctrl"...]
  case-sensitive, NUNCA "Ctrl+M" en key) · `command` (comando de chat)
  · `game_mode` (`mode` singular, string O array; `"modes"` es IGNORADO
  → UI invisible — trampa confirmada por doc interna y checklist v1) ·
  `interaction_menu` (label_key) · `game_event` · `ui_event` ·
  `ui_injection` (avanzado, no usar sin contrato del slot).
- Valores `game_mode`: `gameplay` (alias de TopView+ShoulderView+Vehicle),
  `TopView`, `ShoulderView`, `Vehicle`, `Photo`, `FreeCamera`, `Build`,
  `CharacterCustomize`, `Map`, `None`.
- Si el manifest se escribe a mano con `write_uimod_file`, CADA trigger
  necesita `id` único (el parser del juego los rechaza sin id);
  `write_uimod_manifest` los genera al guardar.
- Validación MCP: shapes inválidas → `code: "INVALID_MANIFEST"` con error
  tipo-path (`triggers[0].key is required when type=="keybind"`).

## 4. Flujo end-to-end (MCP) —[DOC-internal], pasos 1-6 verificados en la guía interna

```
1. add_workspace(book_class="UIMod", book="UIMod", mode="Duplicate")
2. modkit_create_uimod_app(plugin, app_name)   → scaffolding de 4 ficheros + entrada en uimod_apps.json
                                               (plantillas: hud_passthrough / modal_dialog / panel_keybind)
3. modkit_write_uimod_manifest(...)            → schema validado
4. modkit_write_uimod_file(app, path, content) → .html/.css/.js/.json/.txt/.md/.svg (NO binarios vía MCP)
5. ANTES de escribir inzoi.cli.execute: confirmar comando en el catálogo
   (modkit_list_uimod_cli_commands / get_uimod_cli_command — cli_catalog.json es la ÚNICA fuente de verdad;
   cualquier id fuera falla en runtime con "unknown command")
6. modkit_save   ← LA AUTORÍA TERMINA AQUÍ
7. (CONFIRMAR antes) modkit_start_uimod_preview → publica EN VIVO al juego
```

**Preview**: `start_uimod_preview` copia `ui/` a
`<ModKit>/Saved/UIModStaging/{plugin}/ui/`, lo enlaza como
`Documents/inZOI/Mods/ModKitPreview/{plugin}/ui/` (junction) y pide al
juego el remount vía JSON-RPC `uimod.remount` a `127.0.0.1:11212`. Es
**temporal**: se limpia al cerrar el workspace; NO toca `Mods/InGame/`
ni los mods instalados. Si el juego no corre, el disco queda listo y el
juego lo recoge al arrancar [DOC-internal + checklist v1].

## 5. `Sample_UIMod` — qué trae de fábrica [VERIFIED en disco + MCP]

Una app "Sample" (manifest: 560×720, `input_policy: overlay`, trigger
`game_mode: ["gameplay"]`) que es un **dashboard completo con 9 módulos**
(cada uno un patrón de uso del SDK):

| Módulo | Hace |
|---|---|
| Population | Conteos de Zois vivos por tipo de spawner |
| Genealogy | **Exportar el árbol familiar como GEDCOM** |
| Time | Velocidad del tiempo (slider 0-5x), pausa/resume (`environment.time_speed/pause/resume`) |
| Mood | Buffs/emociones |
| Aspirations | Esperanzas y ambiciones |
| Marriage | Casar/comprometer/divorciar por CLI |
| Sites | Lista de sitios cargados + **teleport** |
| Scan | Escanear personajes/objetos cercanos |
| Reset Zoi | Recuperar un Zoi atascado/buggeado |

Patrones de código útiles en el sample: focus gate de teclado para inputs
(`ui.set_keyboard_focus`), reporte de ContentRect para el routing del
wheel, wrapper `cli()` con logging.

## 6. Tools MCP relevantes

- **ModKit (11213)**: `list/create/rename/delete_uimod_app`,
  `set_default_uimod_app`, `set_uimod_app_enabled`,
  `list/read/write/delete_uimod_file`, `read/write_uimod_manifest`,
  `validate_uimod`, `list_uimod_cli_categories/commands`,
  `get_uimod_cli_command`, `start/end_uimod_preview`,
  `refresh_uimod_workspace`. Escrituras devuelven
  `workspace_panel_refreshed` + `refreshed_panels` (app_file_tree,
  inline_file_editor, preview_surface, manifest_panel,
  trigger_simulator); el JSConsole NO se refresca (es historial del
  usuario) [DOC-internal, pendiente verificación en vivo].
- **Juego (11212)**: `uimod_apps`, `uimod_list`, `uimod_mount`,
  `uimod_remount`, `uimod_unmount`, `uimod_unmount_all`, `uimod_enable`,
  `uimod_set_app`, `uimod_focus`, `uimod_scaffold` (genera el scaffold
  lado juego), `uimod_write_file`, `uimod_read_file`, `uimod_cfg_load/save`
  [VERIFIED tools/list 412 tools].

## 7. Trampas y límites (recopiladas)

1. `modkit_set_data` NO aplica a UIMod (es DataTable-only). Tampoco
   `inspect/validate_workspace` (no IWorkspaceAutomation) → usar
   `list_uimod_apps` + `read_uimod_manifest`.
2. `modes` en game_mode = ignorado (usar `mode`). Keybind: `key` = UNA
   tecla; modifiers exactos; un keybind sin modifiers NO dispara con
   Ctrl/Shift/Alt presionado.
3. El catálogo CLI lo regenera el BUILD del juego (read-only para MCP);
   re-chequear ids antes de cada `cli.execute`.
4. Confirmar antes de preview: el mount recarga la sesión viva del juego
   (puede interrumpir una prueba en curso) aunque sea temporal.
5. El mount usa el NOMBRE del plugin (basename del .uplugin); renombrar
   invalida copias montadas.
6. UTF-8 sin BOM en todo fichero escrito.
7. Binarios (.png/.woff2) no editables por MCP: el usuario los coloca a mano.
8. [UNKNOWN — fila checklist v1, re-test pendiente]: ¿el juego solo dibuja
   UIMods cuya raíz existía al arrancar? (hallazgo externo).
9. [UNKNOWN]: login CurseForge por OTP + flujo `cf_publish` para
   publicar (tools presentes, sin probar).

## 8. Conexión con la línea de animaciones

Un UIMod es la tercera vía de disparo de una animación propia: un panel
con un botón que llame `inzoi.cli.execute('motion.play', { anim_id:
'UAnim_Stairs' })` (motion.play está en el catálogo CLI del juego). Las
otras dos: fila Action/Interaction/InteractionBag (menú nativo) o
motion.play directo por MCP. También existe el trigger
`interaction_menu` para inyectar entradas en el menú nativo.

## 9. CASO REAL verificado: dance_panel (UAnim01) — F2 → Bailar [VERIFIED 2026-10-14]

El panel de baile del proyecto `UAnim01_8EADDAC1` cierra el circuito completo de
UIMod + animación propia:

- **Manifest**: 420x320 transparent, `input_policy: overlay`, trigger `keybind F2`
- **app.js**: botones Bailar/Parar → `inzoi.cli.execute('motion.play', {anim_id:'UAnim_Dance'})` / `motion.stop` (acceso `UserCheat` — cheats activados requeridos)
- **Carga**: el `ui/` del mod INSTALADO monta en boot (sin preview) — salida
  literal `uimod.list`: `1 mod(s) mounted: UAnim01_8EADDAC1/dance_panel, has_view: true`
- **Flujo verificado**: F2 abre el panel → Bailar → el Zoi se coloca 1,5 s
  (sección Default del montage AM_Dance), baila el Northern Soul en bucle
  (Loop) a velocidad real, y al Parar sale con 1,5 s (End)
- **Límite observado** [DOC-visual tester]: la animación por `motion.play` va en
  `DefaultGroup` y se LAYERA sobre lo que el Zoi haga (sentado comiendo: solo
  mueve la cintura — el PostureGroup posee las piernas; con objeto en mano:
  baila manteniendo el objeto). El PlayAnim de un Action también es un play
  crudo. La integración completa (interrumpir tarea + cambio de postura)
  requiere el camino de interacción del juego + registro en SelectionSets
  [UNKNOWN — molde `Sample_DataMod`: ObjectSelectionSet/TalkSelection].
