---
source: local
title: "Trucos Lua: botones radiales de trampas con scripts de ejemplo (TeleportRadial) (2026-10-22)"
generado: 2026-10-22
---

# Trucos Lua: botones radiales de trampas (TeleportRadial como receta)

Receta completa para convertir **cualquier comando de truco del juego** en un boton del menu
radial del Zoi, con su script Lua de ejemplo. Caso real construido y empaquetado el 2026-10-22:
mod **TeleportRadial_FB58C4E4** — botones "salto directo a casa" y "salto al parque central".
La filosofia es la de siempre: **clonar la fila vanilla del boton parecido y reemplazar el
comportamiento**.

## Los tres ingredientes

1. **InteractionBag_patch.json** — el boton (fila clonada de `Self_GoHome` vanilla).
2. **Interaction_patch.json** — la interaccion jugable (sin bloqueos de movimiento).
3. **ObjectSelectionSet_patch.json** — registro en `SelfCharacter` (lista vanilla completa + los tuyos).
4. **lua/B2/Main.lua** — listener `interaction.started` que ejecuta el truco real por CLI.

## Paso 1: clonar el boton vanilla (por que SIEMPRE clonar)

La fila vanilla `Self_GoHome` se consulta EN VIVO (no de memoria) para copiar iconos, categoria
visible y campos exactos:

```
python tools/mcp_client.py modkit modkit_get_row '{"table": "InteractionBag", "id": "Self_GoHome"}'
```

La fila clonada se modifica SOLO en: `Id` (el tuyo), `Comment`, `InteractionRewards: []`,
condiciones de visibilidad y la `InteractionSequence` (una sola entrada que apunta a tu
propia interaccion). El resto — iconos (`Action_Home01`, `PanelIconId Action_Home02`),
`PostureGroupId: AllGroup`, `AgingConditionFlags: 508`... — se copia tal cual. Truquess
aprendidos del mod de peinados:

- **`DisplayCategoryTextId` debe ser uno EXISTENTE del juego** o el boton desaparece del menu
  circular. Para trucos de movilidad, la categoria del propio GoHome vanilla funciona.
- **`DisplayTextId`**: reutiliza el TextId vanilla del boton parecido. Para saltos directos,
  el del `Self_GoHome_Sprint` ("corriendo") transmite la idea. Sin tabla String propia no hay
  textos custom (pendiente de pulido).

## Paso 2: la interaccion jugable

Fila `Interaction` clonada del patron verificado del mod de peinados: `NoneTargetPlayable: true`,
`bCheckCanMoveToSlot: false`, `ActionIdList: []`, `PostureId: []` — sin animacion ni desplazamiento:
el click dispara el evento y el Lua hace el trabajo en el mismo instante.

## Paso 3: registrar en SelfCharacter (OJO con la lista)

`ObjectSelectionSet[ID=SelfCharacter]` con `Method: Override` **sustituye la lista entera**:
hay que incluir la lista vanilla COMPLETA (505 interacciones en la build 20261019) + los botones
nuevos. La lista se re-saca en vivo:

```
python tools/mcp_client.py modkit modkit_get_row '{"table": "ObjectSelectionSet", "id": "SelfCharacter"}'
```

NO copies la lista de un mod viejo: cada parche del juego anade interacciones vanilla y una
lista desactualizada las esconderia.

## Paso 4: el script Lua (el truco real)

`workspace/lua/B2/Main.lua` del proyecto — listener del evento `interaction.started` que
distribuye al comando CLI correspondiente:

```lua
-- B2 Main (global simulation script)
-- TeleportRadial: botones radiales de salto directo (casa / parque central)

local M = {}
local handle = nil

function M.on_begin()
    print("[TeleportRadial] B2 Main activo - escuchando interaction.started")
    handle = inzoi.event.on("interaction.started", function(data)
        if not data then return end
        local bag = tostring(data.interaction_bag_id)
        local eid = data.entity_id or data.target_entity_id
        local target = ""
        if eid and eid ~= -1 and eid ~= 0 then
            target = " entity_id=" .. tostring(eid)
        end
        if bag == "Self_TeleportHome" then
            local cmd = "movement.go_home" .. target
            print("[TeleportRadial] Salto directo a casa: " .. cmd)
            inzoi.cli.execute(cmd)
        elseif bag == "Self_TeleportPark" then
            local cmd = "movement.teleport destination=Gangnam_Public_CentralPark" .. target
            print("[TeleportRadial] Salto al Parque central: " .. cmd)
            inzoi.cli.execute(cmd)
        end
    end)
end

function M.on_end()
    if handle and inzoi.event and inzoi.event.off then
        pcall(inzoi.event.off, "interaction.started", handle)
        handle = nil
    end
end

return M
```

**Para anadir otro truco**: nueva fila en los tres JsonPatch con su `Id` + un `elseif bag == ...`
nuevo en el Lua. El comando CLI puede ser CUALQUIER truco UserCheat del juego (apariencia,
clima, dinero, necesidades...): la receta es identica.

## Paso 5: pipeline de construccion (ModKit MCP, todo por consola)

```
# 1. crear proyecto (NO repetir: crea duplicados)
python tools/mcp_client.py modkit modkit_create_project '{"name": "TeleportRadial", "author": "...", "desc": "..."}'
#    -> devuelve plugin_name (p.ej. TeleportRadial_FB58C4E4)

# 2. escribir el Lua (relativo a workspace/lua/)
python tools/mcp_client.py modkit modkit_write_lua_script '{"plugin": "...", "path": "B2/Main.lua", "content": "..."}'

# 3. JsonPatches: ficheros .json en <proyecto>/Content/JsonPatch/ (escritura directa de disco;
#    el empaquetador los cocina como non_ufs/JsonPatch/*.json)

# 4. validar (BlueLuaKit: sintaxis + API + llamadas C++)
python tools/mcp_client.py modkit modkit_validate_lua_script '{"plugin": "..."}'
#    -> {"ok": true, "errors": 0, "warnings": 0, "diagnostics": []}

# 5. empaquetar (asincrono; termina en las notificaciones del editor)
python tools/mcp_client.py modkit modkit_package '{"plugin": "..."}'
#    -> genera <proyecto>/DataStage/<plugin>/ (version cocinada) + <plugin>.zip

# 6. instalar: copiar DataStage/<plugin>/* a Documents/inZOI/Mods/<plugin>/
#    (el juego lo valida y registra en modstate.json al arrancar)
```

## Comandos de truco verificados para los botones (banco de candidatos)

| Truco | Comando | Verificado |
|---|---|---|
| Salto a casa | `movement.go_home [entity_id=N]` | [VERIFIED] teleporte directo al hogar |
| Salto a sitio publico | `movement.teleport destination=Gangnam_Public_CentralPark` | [VERIFIED] patron de sitios publicos `Gangnam_Public_*` |
| Salto junto a alguien | `movement.teleport_to entity_id=N` | [VERIFIED] aterriza junto al objetivo |
| Rescate de atasco | `movement.reset_zoi [teleport=false]` | [VERIFIED] desbloquea sin mover |
| Desactivar/Habilitar trampas | `gameplay.set_autosave`, `needs.set_full`, `life_and_death.immortal` | usados por el mod de pruebas script_test |
| Clima | `environment.control_weather` / `environment.override_weather` | catalogo CLI (cheats) |
| Apariencia | `appearance.hair action=change [ID=malla]` | [VERIFIED] en el mod de peinados |

## Estructura instalada final (lo que el juego carga)

```
Documents/inZOI/Mods/TeleportRadial_FB58C4E4/
├── non_ufs/JsonPatch/InteractionBag_patch.json      <- 2 botones (clones de Self_GoHome)
├── non_ufs/JsonPatch/Interaction_patch.json         <- 2 interacciones jugables
├── non_ufs/JsonPatch/ObjectSelectionSet_patch.json  <- 505 vanilla + 2
├── lua/B2/Main.lua                                  <- compilado (IZUI, Protected)
├── mod_manifest.json + mod_assethash.json + .uplugin
```

## GOTCHAS verificados en depuracion (2026-10-22, el mod no mostraba botones)

1. **[VERIFIED] El casing de los campos del JsonPatch distingue mayusculas** y NO es el mismo
   que devuelve `modkit_get_row`: el dump en vivo trae `Id`/`GroupID`, pero el formato del
   JsonPatch (verificado contra el mod de peinados funcional) exige **`ID`/`GroupId`**. Con
   `Id` la fila NO se aplica y el boton no aparece — sin ningun error visible. Al clonar filas
   vanilla para un patch, renombrar SIEMPRE `Id`->`ID` y `GroupID`->`GroupId` antes de empaquetar.
2. **[VERIFIED] `lua/lua_manifest.json` es necesario** para que el loader monte los scripts:
   un mod sin manifiesto empaqueta los .lua pero no los ejecuta. Con solo `B2/Main.lua` convencional
   (sin bindings) el manifiesto es `{"bindings": {}}` (como el mod de peinados). Anadir tambien el
   stub `B1/Main.lua`.
3. **[VERIFIED] Cada entrada del `PatchList` necesita `"Enabled": true`**: sin el campo,
   la entrada NO se aplica (asi fallo la segunda version: Enabled presente en Interaction y
   ObjectSelectionSet pero no en InteractionBag — los botones seguian sin aparecer).
   Mismo problema con el `ID` del elemento de `InteractionSequence` (anidado): el dump vanilla
   trae `Id` tambien dentro de la secuencia; el formato exige `ID` en TODOS los niveles.
   Lista completa de renombres al clonar de get_row: fila `Id`->`ID`, `GroupID`->`GroupId`,
   secuencia `Id`->`ID`, y anadir `Enabled: true` a cada entrada.
4. Diagnostico del "no se ve nada": modstate puede registrar el mod como valido
   (`ValidationError` vacio) aunque los JsonPatches no hayan aplicado — la validacion del
   cargador NO detecta filas con campos sin mapear. La comprobacion real es un diff RECURSIVO
   de claves del patch contra un mod FUNCIONAL, no contra el dump de get_row.
5. **[VERIFIED 2026-10-22] DOS mods con botones radiales NO pueden hacer Override de la misma
   fila `ObjectSelectionSet[ID=SelfCharacter]`**: solo se aplica UNO (gano el del mod de
   peinados; los botones `Self_Teleport*` de TeleportRadial existian en la tabla InteractionBag
   en vivo y su cheat funcionaba por `interaction.execute`, pero NO aparecian en el menu porque
   su Override perdio el conflicto). Sintoma: `interaction.search` encuentra el bag, el Lua
   dispara el cheat al ejecutarlo por MCP... y en el radial no hay boton. Fix: UNA sola lista
   fusionada (vanilla viva + todos los custom) replicada IDENTICA en el OSS de cada mod, de
   modo que gane el Override que gane el menu quede bien. Verificado en vivo via
   `data.table_get Alias=ObjectSelectionSet Row=SelfCharacter` (antes: 516 sin teleport;
   despues del fix: 518 con los 7 custom).
6. **[VERIFIED 2026-10-22] Diagnostico en vivo de la cadena boton->cheat sin abrir el menu**:
   `interaction.search <Keyword>` (esta cargado el bag?), `interaction.execute
   interaction_bag_id=<id> [target_entity_id=<zoi>]` (dispara la cadena completa: bag ->
   evento `interaction.started` -> Lua -> cheat CLI), y `data.table_get` para leer la fila
   SelfCharacter viva. El parametro del CLI `appearance.hair` en vivo es `ID` (mayusculas);
   la pagina wiki que dice `id` esta desactualizada.

## Ver tambien

- [Anadir opciones al menu radial del Zoi](ejemplo-uimod-menu-zoi.md) — el patron completo
  con el caso de peinados (primer ejemplo verificado).
- [Ejemplos de mods Lua reales](ejemplo-mod-lua-pregnancysurprise.md) — PregnancySurprise y
  FlyingZoi (bindings Zoi/Household/Component).
- [Monitorizar el motor](monitorizando-el-motor.md) — grabadora de vuelo para descubrir que
  mas merece un boton.
