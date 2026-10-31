# Script (Lua)

Desde v0.11, inZOI monta **mods de Lua en vivo**: escribes scripts, los aplicas a tus mods desde el editor de scripts Lua del ModKit y el juego los ejecuta (B1 cliente / B2 servidor) con **hot-reload sin reiniciar**.

## Que se puede construir

- Comportamiento: callbacks de eventos del juego, logica de negocio, automatizaciones.
- Mods de datos + script: tu DataAsset expone datos, tu Lua reacciona a ellos.
- Herramientas de autor en vivo con el MCP: puedes pedirle a un LLM que escriba el Lua y ejecutarlo contra la partida en marcha.

## Anatomia de un mod Lua

```
MiModLua/
  lua/            <- scripts montados por luamod.mount
  Mods/...        <- resto del proyecto (datos, assets)
```

Los comandos CLI de la categoria `luamod`:

| Comando | Que hace |
|---|---|
| `luamod.mount` | Monta los scripts `lua/` de un mod (carga en B1 inmediata, B2 via packet) |
| `luamod.reload` | Hot-reload de TODOS los mods Lua montados, sin reiniciar |
| `luamod.remount` | Unmount + mount de un mod concreto (usar tras editar scripts) |
| `luamod.unmount` | Desmonta los scripts de un mod |

## Ejemplo real (verificado en juego, 2026-10-15)

Un callback montado en `B2/Zoi/CallbackProbe.lua` para `ResidenceFamily` ejecuta y loguea en Output al dispararse el evento. Validado con BlueLuaKit (0 errores/avisos), preview montado y desmontado. Nota honesta: `HasSigLua:false` en el dump NO predijo que funcionara; la validacion real es ejecutarlo.

```lua
-- B2/Zoi/CallbackProbe.lua  (estructura del patron)
return function(context)
    -- context trae el estado del evento (ResidenceFamily)
    print("[MiMod] callback disparado")
end
```

## La API completa esta en esta biblia

- **wiki/luaapi**: 6.158 paginas de referencia (B1, B2 y common), navegable arriba en esta misma seccion.
- Catalogo consultable en vivo: `modkit_list_lua_api_catalog` y `modkit_list_lua_recipes` (recetas listas).
- Guia de flujo completo: WF-04 (mod de Lua EN VIVO con el juego en marcha).

## Ejemplos de mods reales que funcionan (código explicado)

La referencia completa, con el **código fuente real leído del disco**, está en
[Ejemplos de mods Lua reales: PregnancySurprise y FlyingZoi](local/ejemplo-mod-lua-pregnancysurprise.md).
Resume:

- **Qué hace el código Lua en el juego**: bindings de `lua_manifest.json` (env B1/B2, tipos Zoi/Household/Component/Manager, callbacks `on_begin/on_tick/on_end`, hooks `Override_*`), y las APIs globales (`inzoi.cli.execute`, `inzoi.event.on`, `inzoi.getB2Manager`, enums).
- **Recetas integradas** (`modkit_list_lua_recipes`): Emotion Logger (reactivo), Stat Tracker (tick con throttle), Weather Notifier (Manager).
- **PregnancySurprise** (mod real): elegibilidad de embarazo por matrimonio. Llama al motor con el comando CLI `pregnancy_and_birth.get_baby_with`, con la tecnica de cambio de genero temporal + `pcall` + restauracion; y `BirthSexSurprise` hookea `Override_ChildBirth` del componente Bio para invertir el sexo del bebe.
- **PELIGRO documentado**: tras el parto la pareja puede volver a quedar embarazada si el mod sigue activo — el motor re-evalua condiciones (`scanHousehold` en `on_begin`/`on_member_enter`) y el guard `attempted` vive solo en memoria (se resetea en cada montaje). Sin UI, lo mas logico es desactivar el mod manualmente antes del nacimiento; el doc detalla 6 variantes de control (solo-al-casarse, una-vez-pareja persistente, fertilidad configurable, cooldown, toggle con UI mod, alcance limitado).
- **FlyingZoi** (mod real): vuelo por tick (`on_tick` + `SetLocationOnlySimul`), hook `Override_Ascend`, poses con `pose.set_bone` y avisos con `toast.show`.
- **Botones en el menu radial del Zoi** (patron nativo): el evento `inzoi.event.on("interaction.started")` entrega `interaction_bag_id` + `entity_id`; combinado con JsonPatch de InteractionBag/Interaction/ObjectSelectionSet permite anadir botones propios al menu circular del Zoi que ejecutan CLI — caso real completo en [Anadir opciones al menu radial del Zoi](local/ejemplo-uimod-menu-zoi.md).
- **Monitorizar el motor** (grabadora de vuelo): `tools/engine_monitor.py` sondea solo-lectura (stats, emociones, ambicion, esperanzas, relaciones, UI) y escribe un JSONL con los cambios que el juego hace POR SI SOLO — materia prima del director de guiones; con sondas Lua por eventos (`zoi.married`, `interaction.started`) para los disparos exactos — ver [Monitorizar el motor](local/monitorizando-el-motor.md).
- Carpeta de ejemplos del ModKit (`inZOIModKit/Mods/`): Samples por departamento, mods de Build/CAZ/hair/face, sondeos Lua y mas — catalogados en el mismo documento.

## GizmoPhoto: girar el Zoi en Photo Mode

Receta propia, probada en el juego el 2026-10-24. Añade al UIMod `gizmophoto_mod` cuatro ángulos para fotografiar un Zoi posado: frontal (0°), costado (90°), espalda (180°) y costado (-90°/270°). No usa PhotoModeUnlocked como dependencia; ese mod sirvió para descubrir el modelo de personaje que renderiza Photo Mode.

### Por qué `SetRotationOnlySimul` no se veía

Al aplicar una pose, Photo Mode oculta el actor normal y enseña una copia de estudio (`BP_B1StudioCharacter_C`). Cambiar la rotación del actor de simulación no cambia necesariamente la malla que aparece en la foto. La solución trabaja en B1 sobre la malla (`actor.Mesh`) del actor visible: el Zoi normal si está visible, o la copia de estudio si el original está oculto.

### Flujo del mod

1. **Panel UIMod**: los botones 0/90/180/-90 escriben una orden breve en `uimod.cfg_save`, por ejemplo `timestamp_nonce|entity_id|set:90`. El panel no intenta llamar al botón nativo de selfie o cámara de juego: esos botones cambian la vista de cámara, no el giro del personaje.
2. **Binding B1 obligatorio**: `lua/lua_manifest.json` tiene que enlazar el script con los Zois. Tener `lua/B1/Main.lua` en disco no basta: durante el primer intento el manifiesto tenía `B1: []`, así que el código que debía leer las órdenes nunca corría.

```json
{
  "bindings": {
    "B1": [{ "type": "Zoi", "key": "*", "script": "B1.Main" }],
    "B2": [{ "type": "Zoi", "key": "*", "script": "B2.PhotoRotation" }]
  }
}
```

3. **Detectar Photo Mode**: B1 consulta `GetCurrentCameraModeType()` y solo modifica la escena mientras el modo es `PhotoMode`.
4. **Resolver el actor visible**: busca el actor por `entity_id`. Si el actor está oculto, recorre los `B1Character` y busca una copia visible de clase `StudioCharacter` en la misma posición (tolerancia de 5 cm).
5. **Guardar la base y aplicar el ángulo**: captura la transformación original de la malla y suma el ángulo al yaw base; reaplica la rotación cada tick para que la pose no la revierta.
6. **Restaurar**: al salir de Photo Mode devuelve `RelativeLocation`, `RelativeRotation` y escala originales. B2 solo devuelve la confirmación a la interfaz; no debe llamar a `SetRotationOnlySimul`.

El núcleo de la rotación es:

```lua
local desired = UE.FRotator(base_rotation.Pitch,
    wrap180(base_rotation.Yaw + angle), base_rotation.Roll)
mesh:K2_SetWorldLocationAndRotation(base_location, desired, false, nil, true)
```

`base_location` y `base_rotation` se copian antes de editar la malla. Al cerrar Photo Mode se restaura la transformación relativa original; no se guarda ningún cambio en la partida ni se gira el actor de simulación.

### Verificación en vivo

| Caso | Resultado observado |
|---|---|
| Zoi sin pose, `get` | La malla visible se detecta como `BP_B1Character_C`. |
| Pose «Mano en la cara», `set:90` | La malla visible se detecta como `BP_B1StudioCharacter_C`; el giro cambia el perfil en la captura. |
| `set:0`, `set:90`, `set:180`, `set:-90` | Las cuatro órdenes devuelven `applied` sobre la copia de estudio. |
| Salir de Photo Mode | B1 informa `restored`; el juego vuelve a `QuarterView`. |

### Depuración

- Si la orden queda escrita en `photo_rotation/request` pero no pasa nada, comprueba que `lua_manifest.json` tenga la binding B1 `Zoi/*` y ejecuta `luamod.remount` después de editar.
- `photo_rotation/result` indica si se aplicó (`applied`), si faltó la copia (`photo_stand_in_missing`) o si se restauró al salir.
- Si solo funciona sin pose, la búsqueda está devolviendo el actor original: verifica el nombre de clase `StudioCharacter`, que el actor original esté oculto y que la copia esté a menos de 5 cm.
- Si el Zoi queda girado al salir, falta restaurar la transformación relativa de la malla; no lo corrijas con otro `SetRotationOnlySimul`.

Archivos del ejemplo propio: `ui/ZoiRotation/app.js` (presets y puente), `lua/B1/Main.lua` (detección, giro y restauración), `lua/B2/PhotoRotation.lua` (confirmación) y `lua/lua_manifest.json` (bindings).

## Trucos Lua: cualquier cheat como boton radial (receta con scripts de ejemplo)

La receta completa, reutilizable para **cualquier comando de truco** del juego, esta en
[Trucos Lua: botones radiales de trampas](local/trucos-lua-botones-radiales.md) (tambien en la
barra de navegacion como "Trucos Lua"). Resume: clonar la fila vanilla del boton parecido (`modkit_get_row`),
los tres JsonPatch (bag/interaccion/registro con la lista vanilla COMPLETA), el listener Lua
`interaction.started` con un `elseif` por truco, y el pipeline de construccion por consola
(create project -> write script -> validar BlueLuaKit -> package -> instalar). Incluye banco de
comandos verificados para botones (go_home, teleport a `Gangnam_Public_*`, reset_zoi, clima,
necesidades, apariencia...).

## Los dos mods reales verificados (2026-10-22, build 20261019)

Ambos construidos con la receta y verificados EN VIVO contra el juego (no solo empaquetados):
ejecutando cada bag con `interaction.execute` desde el MCP y comprobando el efecto real del cheat.

| Mod | Botones | Cheat que dispara cada boton |
|---|---|---|
| **TeleportRadial_FB58C4E4** | "Ir a casa (salto)" y "Ir al parque central" | `movement.go_home` (teleporte directo, sin caminar) y `movement.teleport destination=Gangnam_Public_CentralPark` |
| **Peinado en Zoi** (script_test_31B97F40) | 5 botones: corto, media melena, largo, coleta, aleatorio | `appearance.hair action=change ID=<malla del pool>` (mallas verificadas en la tabla `AppearanceHairMesh`) y `appearance.hair action=change` (aleatorio) |

Codigo fuente de ambos en `D:\inZOIModKit\inZOIModKit\Mods\` (workspace + JsonPatch +
`workspace/lua/B2/Main.lua` con el listener). Instalados en `Documents/inZOI/Mods/`.

## Como crear tu propio boton (paso a paso)

1. **Elige el cheat**: cualquiera de los 407 CLI expuestos (`cli_list`). Ejemplo: `environment.control_weather`.
2. **Clona la fila vanilla del boton parecido**: `modkit_get_row {table: InteractionBag, id: Self_GoHome}` y copiala a tu `Content/JsonPatch/InteractionBag_patch.json` cambiando SOLO `ID`, `Comment`, `InteractionRewards: []`, condiciones y la `InteractionSequence` (que apunta a TU interaccion).
3. **Crea la interaccion jugable**: fila `Append` en `Interaction_patch.json` con `NoneTargetPlayable: true`, `bCheckCanMoveToSlot: false`, `ActionIdList: []`, `PostureId: []` — el click es instantaneo, sin desplazamiento ni animacion.
4. **Registra el boton en el menu**: `ObjectSelectionSet_patch.json` con `Method: Override`, `Query: ObjectSelectionSet[ID=SelfCharacter]` y la lista vanilla COMPLETA (re-sacada en vivo, 511 en la build 20261019) + tus IDs delante.
5. **El Lua**: en `workspace/lua/B2/Main.lua`, listener de `interaction.started` con un `elseif` por boton que ejecute el cheat con `inzoi.cli.execute`. Stub `B1/Main.lua` + `lua_manifest.json` (`{"bindings": {}}`) obligatorios.
6. **Construye**: validar BlueLuaKit -> `modkit_package` -> copiar DataStage (o descomprimir el zip) a `Documents/inZOI/Mods/<plugin>/` -> reiniciar el juego.

## Personalizar el boton

- **Texto**: `DisplayInfo.DisplayTextId` — reutiliza un TextId vanilla existente (el del boton parecido, o el de la silla de peluqueria para cortes: `InteractionBag_DisplayInfo_HHB_SalonChair_HairCut_Short_DisplayTextId`). Textos propios: tabla String del proyecto desde el editor (pendiente de receta propia).
- **Icono**: `DisplayInfo.PanelIconId` (ej. `Action_Home02`, `Action_AppearanceEdit02`) e `Icon` (ruta de textura vanilla).
- **Categoria del menu**: `GroupId` — DEBE existir en la tabla `InteractionBagGroup` (ej. `Group_HairCut`, `Change_OutfitCategory`; `None` para el grupo por defecto junto al de casa). `DisplayCategoryTextId` tambien debe ser un TextId existente o el boton desaparece del menu.
- **El cheat y sus parametros**: un `elseif` nuevo en el Lua. OJO con el casing de parametros: en vivo, `appearance.hair` usa `ID` (mayusculas) — la wiki que dice `id` esta desactualizada; verifica con `cli_help` antes de escribir.
- **Postura**: `PostureGroupId: AllGroup` = disponible de pie Y sentado.
- **Mallas de pelo validas**: tabla `AppearanceHairMesh` (prefijos `W_Hair_` mujer / `M_Hair_` hombre, sufijos `S_` corto, `M_` medio, `L_` largo, `B_`...); los pools del mod de peinados salen de ahi.

## Gotchas verificados (por que un boton "no funciona")

1. Casing del JsonPatch: el dump de `get_row` trae `Id`/`GroupID`; el formato exige `ID`/`GroupId` (y `ID` tambien dentro de `InteractionSequence`). Sin renombrar, la fila NO se aplica y no hay error.
2. Cada entrada del `PatchList` necesita `"Enabled": true`.
3. `lua/lua_manifest.json` es obligatorio para que el loader monte los .lua.
4. **Dos mods no pueden hacer Override de la misma fila `SelfCharacter`**: solo se aplica UNO (sintoma: el bag existe en `interaction.search` y su cheat funciona por `interaction.execute`, pero el boton no aparece en el radial). Fix: una sola lista fusionada replicada IDENTICA en el OSS de cada mod.
5. Diagnostico en vivo sin abrir el menu: `interaction.search` (bag cargado), `interaction.execute` (cadena completa bag -> evento -> Lua -> cheat), `data_table_get Alias=ObjectSelectionSet Row=SelfCharacter` (lista del menu viva).

## Reglas practicas

- **B1 vs B2**: B1 es cliente, B2 servidor (autoridad). Un script B2 afecta a la simulacion; uno B1 solo al cliente. Elige el lado por el efecto que buscas.
- El hot-reload (`luamod.reload`) hace el ciclo de edicion barato: edita, recarga, prueba.
- Contradicciones conocidas entre la documentacion de Lua y el comportamiento observado estan documentadas en `local/contradicciones-docs-lua` (leer antes de pelearse con algo que "deberia funcionar").

