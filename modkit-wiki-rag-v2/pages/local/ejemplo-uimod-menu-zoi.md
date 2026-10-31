---
source: local
title: "Anadir opciones al menu radial del Zoi: patron nativo (JsonPatch + Lua), overlay UI y MCP (2026-10-21)"
generado: 2026-10-21
---

# Anadir opciones al menu radial del Zoi y manipular la UI del juego

Tres vias para actuar sobre el Zoi desde los menus que salen al hacer clic sobre el, de
la mas integrada a la mas externa:

| Via | Que consigues | Distribuible como mod |
|---|---|---|
| **1. Radial nativo (JsonPatch + Lua)** | Botones nuevos DENTRO del menu circular del Zoi, identicos a los del juego | Si — es un mod normal |
| **2. Overlay UI mod** | Panel propio (mini-app web) con botones custom | Si — UI mod |
| **3. MCP `ui_*`** | Inspeccionar y pulsar la UI del juego programaticamente | No — para bots/asistentes/QA |

La via 1 es la que replica lo que hizo Krafton con su boton de peinados: **si se puede
inyectar en el menu radial**, clonando filas de las tablas de interaccion del juego
(copiar-y-reemplazar) y enganchando la ejecucion con Lua.

## Via 1 (LA BUENA): radial nativo con JsonPatch + Lua

Caso real documentado (fuente leido del disco): mod **script_test_31B97F40** — "Cambio de
Peinado en Zoi (Radial Menu)". Anade un submenu de peinados al clic sobre el propio Zoi,
con comportamiento identico a "Cambiarse de ropa" (Change_OutfitCategory).

### Arquitectura

```
script_test_31B97F40/
├── Content/JsonPatch/
│   ├── InteractionBag_patch.json       <- 5 filas de InteractionBag (los botones del submenu)
│   ├── Interaction_patch.json          <- 5 interacciones jugables (sin bloqueo de movimiento)
│   ├── ObjectSelectionSet_patch.json   <- registra los 5 IDs en SelfCharacter
│   └── (Object/ObjectBP/StateVariation patches auxiliares del mod)
├── workspace/lua/B2/Main.lua            <- listener interaction.started -> appearance.hair
└── script_test_31B97F40.uplugin
```

### Paso 1: InteractionBag_patch.json (el boton)

Cada boton es una fila `Append` a la tabla `InteractionBag`. Valores clave LEIDOS DEL PATCH REAL:

```json
{ "Struct": "InteractionBag", "BaseVersion": "20250527.3800.W.MODKIT.STG", "SaveVersion": "...",
  "PatchList": [ { "Method": "Append", "Query": "InteractionBag", "Value": {
    "ID": "Self_Hair_Short",
    "GroupId": "Group_HairCut",
    "PostureGroupId": "AllGroup",
    "InteractionSequence": [ { "InteractionInfos": [
        { "InteractionId": "Self_Hair_Short", "Label": "B" } ] } ],
    "DisplayInfo": {
      "DisplayCategoryTextId": "InteractionBag_DisplayInfo_Self_OutfitCategory_Everyday_DisplayCategoryTextId",
      "DisplayTextId": "InteractionBag_DisplayInfo_HHB_SalonChair_HairCut_Short_DisplayTextId",
      "PanelIconId": "Action_AppearanceEdit02"
    }
} } ] }
```

- **`GroupId: "Group_HairCut"`**: el boton aparece en el mismo grupo de menu que
  Change_OutfitCategory — mima su comportamiento.
- **`DisplayCategoryTextId` reutiliza el de la categoria Everyday del outfit**: TRUCO CRITICO —
  usar una categoria de texto ya existente evita que el boton desaparezca del menu circular.
- **`DisplayTextId`** reutiliza el texto del SalonChair (silla de peluqueria) del corte deseado;
  `PanelIconId: Action_AppearanceEdit02` el icono de edicion de apariencia.
- **`PostureGroupId: "AllGroup"`**: disponible de pie Y sentado.

### Paso 2: Interaction_patch.json (la interaccion jugable)

Cinco filas `Append` a `Interaction`, una por boton. Valores clave que evitan bloqueos:

- `NoneTargetPlayable: true` — interaccion auto-dirigida (el Zoi es su propio objetivo).
- `bCheckCanMoveToSlot: false` — no exige moverse a un slot.
- `ActionIdList: []` y `PostureId: []` — sin acciones/posturas obligatorias: el cambio es instantaneo.

### Paso 3: ObjectSelectionSet_patch.json (registrar en el Zoi)

`Override` de la fila `SelfCharacter`: dentro de `SelectionSets`, añade los 5 IDs a
`InteractionBagList` (`Self_Hair_Short`, `Self_Hair_Medium`, `Self_Hair_Long`,
`Self_Hair_Ponytail`, `Self_Hair_Random`) para que el juego los ofrezca al clicar el Zoi.

### Paso 4: Lua B2/Main.lua (la ejecucion)

Fuente real del mod (workspace/lua/B2/Main.lua): un listener del evento `interaction.started`
que filtra por `interaction_bag_id` y llama a la CLI de apariencia:

```lua
function M.on_begin()
    handle = inzoi.event.on("interaction.started", function(data)
        if not data then return end
        local bag = tostring(data.interaction_bag_id)
        local eid = data.entity_id or data.target_entity_id
        local target = ""
        if eid and eid ~= -1 and eid ~= 0 then
            target = " entity_id=" .. tostring(eid)
        end
        -- mapea bag -> categoria (Short/Medium/Long/Ponytail/Random)...
        if category == "Random" then
            inzoi.cli.execute("appearance.hair action=change" .. target)
        else
            local pool = pools[category]
            local hair_id = pool[math.random(1, #pool)]
            inzoi.cli.execute("appearance.hair action=change ID=" .. hair_id .. target)
        end
    end)
end

function M.on_end()
    inzoi.event.off("interaction.started", handle)
end
```

- `appearance.hair action=change` = peinado aleatorio; `action=change ID=<malla>` = uno concreto
  (los pools del mod usan mallas reales del catalogo: `W_Hair_S_002`, `W_Hair_M_012`,
  `W_Hair_L_002`, `W_Hair_B_007`...).
- El cambio es instantaneo, sin abrir ventanas: la interaccion no tiene accion asociada
  (ActionIdList vacio) y el Lua hace el trabajo.
- El mod real anade aparte una utilidad de pruebas en `on_tick` (cada 3 s, con `pcall`):
  `household.get_members` -> `stat.get_all` por miembro -> si alguna necesidad <= 20%,
  `needs.set_full` + `life_and_death.immortal Enable=true`. Es un extra del mod de test,
  NO parte del patron radial.

### Empaquetado y activacion (del mod real)

- Empaquetado via UAT: `modkit_package`. Se cocinan `non_ufs/JsonPatch/*.json` y `lua/B2/Main.lua`.
- El uplugin declara `Protected: ["/lua"]` — el Lua empaquetado va **compilado** (binario `IZUI`),
  no fuente legible.
- Instalado en `C:\Users\andre\Documents\inZOI\Mods\script_test_31B97F40`; el estado de activacion
  vive en `Documents\inZOI\Mods\.modding\modstate.json` (`"bEnable": true`).

### Reglas y peligros de la via radial

- **Versionado**: los JsonPatch llevan `BaseVersion`/`SaveVersion` fijadas; tras un parche del
  juego las filas de InteractionBag pueden cambiar de forma — revisar el patch (mismas reglas de
  migracion que WF-20: Fix Up Mod Project o re-capturar la fila vanilla).
- El truco `DisplayCategoryTextId` existe porque el menu circular filtra botones con categorias
  que no reconoce: reutiliza SIEMPRE un TextId existente del juego.
- Los 5 botones comparten `RepeatCount: 1`, `AgingConditionFlags: 508` y demas campos copiados
  de la fila vanilla de Change_OutfitCategory — copia la fila completa, no inventes campos.
- Para probar en vivo: `luamod_mount`/`remount` del mod y clicar el Zoi; los `print("[ChangeHair]...")`
  del script dejan rastro en Output para depurar que interaccion se disparo.

## Via 2: overlay UI mod (panel propio)

Sin tocar las tablas del juego: un panel web overlay con keybind/comando de chat que actua
sobre el Zoi actual. Piezas del SDK (`modkit/project/uimod/04-scripting`): manifest con
triggers, `inzoi.data.query("zoi","getCurrent")` (Zoi actual), `inzoi.data.subscribe`
(estado en vivo), `inzoi.cli.execute("appearance.hair", { action: "change" })`, y cargar
`cohtml.js` ANTES de `inzoi-sdk.js` o el panel no recibe clics.

```json
{ "name": "PeinadoRapido", "entry": "index.html",
  "display": { "transparent": true, "input_policy": "overlay" },
  "triggers": [ { "type": "keybind", "key": "M" } ] }
```

```js
document.getElementById("peinado").addEventListener("click", function () {
    inzoi.cli.execute("appearance.hair", { action: "change" });
});
```

Cuando elegir la via 2: opciones que no encajan como interaccion (paneles con sliders,
listas con preview, chat propio) o prototipos rapidos; a cambio de no aparecer en el
menu radial del juego.

## Via 3: MCP ui_* (inspeccion y clic de la UI nativa)

Seis tools experimentales (`fichas ui_*.md`): `ui_list_windows` (pila de ventanas WBP con
ui_type, capa, z_order y nº de nodos interactivos), `ui_get_tree`, `ui_get_node`, `ui_find`
(buscar por Window/Role/texto), `ui_click` (clic programatico) y `ui_scroll`. Evidencia real
en partida: `ui_list_windows` devolvio `WBP_HudWindow_C_*` (Hud, 87 nodos interactivos),
`WBP_ToastMessage_Region_C_*` (Popup), `WBP_InteractionMarkerCanvas_C_*` y un bloque
`blocking` que indica si hay UI modal bloqueando input. Al abrir el menu del Zoi, su ventana
aparece ahi: con el nombre se inspecciona su arbol y se pulsan sus botones.

Uso tipico: automatizacion, QA de mods y asistentes por voz/LLM (el comando CLI
`appearance.hair` se expone como tool `appearance_hair`). No es distribuible: los WBP se
renombran entre parches y los scripts que clican botones nativos son fragiles.
