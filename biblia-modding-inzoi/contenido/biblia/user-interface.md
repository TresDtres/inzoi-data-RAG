# User Interface

Un UI mod es una **mini-app web** (HTML + CSS + JavaScript) que el ModKit carga sobre inZOI. Es exactamente una pagina web salvo que su "navegador" es el juego en marcha y puede hablar con el a traves del SDK `inzoi`.

## Que se puede construir

- Paneles pequenos y concretos que leen o cambian estado del juego.
- Ejemplos reales que vienen en `inZOIModKit/Mods`:
  - **Clock Widget**: reloj transparente en pantalla (`always_on`, DOM puro).
  - **Mood Panel**: botones que cambian el humor del Zoi (`inzoi.cli.execute('zoi.setMood', { mood })`).
  - **Event Toast**: aviso cuando el juego dispara un evento (`game_event`).
  - **Tools Demo**: panel de desarrollo que demuestra todas las superficies del SDK.

## Las tres piezas nuevas (si sabes web, ya sabes el 90%)

1. **El manifiesto** (JSON pequeno): cuando aparece tu panel y como se comporta (tamano, transparencia, input).
2. **El trigger**: la condicion que lo despierta: `always_on`, un keybind (`key "M" + modifiers ["Ctrl"]`), un comando de chat (`mood_panel.toggle`), o un `game_event`.
3. **El SDK `inzoi`**: objeto global en tus scripts para ejecutar comandos y leer estado.

```js
// app.js - patron minimo de un panel que toca el juego
document.getElementById('btn').addEventListener('click', () => {
  inzoi.cli.execute('zoi.setMood', { mood: 'happy' });
});
```

## Flujo (WF-05: mod UI en vivo)

1. Crea el proyecto User Interface; el workspace trae `manifest.json`, `index.html`, `app.js`, estilos.
2. Define el trigger en el manifiesto.
3. Itera en vivo: el juego recarga el panel con `uimod.remount`/reload; los archivos del UI se pueden escribir desde fuera con `uimod_write_file` (MCP).
4. Verifica con la UI del juego: `ui.find` / `ui.get_tree` permiten inspeccionar widgets en marcha.

## Reglas practicas

- **Paneles pequenos y enfocados**: el SDK es para leer/cambiar estado, no para apps gigantes.
- El manifiesto manda: un trigger mal formado = panel que nunca aparece (y no hay error visible; verifica con `uimod.list`).
- v0.11 permite activar/desactivar UI mods desde la interfaz dedicada del juego y poner nombres custom a los mods instalados.

## Manipular el Zoi desde los menus del juego y anadir opciones (patron "boton de peinados")

Guia completa con codigo real en
[Anadir opciones al menu radial del Zoi](local/ejemplo-uimod-menu-zoi.md). Tres vias:

1. **Radial nativo (JsonPatch + Lua) — LA VIA BUENA**: SI se puede inyectar en el menu circular del Zoi. Caso real (script_test_31B97F40, fuente leido del disco): filas `Append` a `InteractionBag` con `GroupId: "Group_HairCut"` y el truco de reutilizar el `DisplayCategoryTextId` del outfit Everyday (evita que el boton desaparezca), `Interaction` con `NoneTargetPlayable: true`/`bCheckCanMoveToSlot: false` (cambio instantaneo), registro en `ObjectSelectionSet` de `SelfCharacter`, y un listener Lua de `interaction.started` que ejecuta `appearance.hair action=change ID=<malla>`. Con empaquetado UAT (JsonPatch cocinados, Lua protegido/compilado) y activacion via modstate.json.
2. **Overlay UI mod**: panel propio con keybind que consulta el Zoi actual (`inzoi.data.query("zoi","getCurrent")`) y ejecuta CLI (`appearance.hair action=change`) — para opciones que no encajan como interaccion.
3. **MCP `ui_*`**: `ui_list_windows`/`ui_get_tree`/`ui_find`/`ui_click` para inspeccionar y pulsar los menus nativos programaticamente (bots, QA, asistentes; no distribuible).

Con reglas y peligros: versionado de los JsonPatch (BaseVersion fijada; tras parches, WF-20), el truco del TextId de categoria, y el ejemplo completo del mini-mod overlay.

## Docs relacionadas

`modkit/project/uimod/01-overview..04-scripting` (guia oficial completa), WF-05, fichas `uimod_*`, intencion CLI `mods-de-ui`.
