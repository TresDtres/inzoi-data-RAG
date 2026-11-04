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

## GizmoPhoto (retirado: no usar como receta probada)

Corrección 2026-11-01: se informó que GizmoPhoto nunca funcionó. Se retiran la afirmación
anterior de que estaba probado en juego, sus resultados de verificación y los pasos como
instrucciones funcionales. No presentarlo como ejemplo validado ni incluirlo en el curso; hace
falta una nueva prueba reproducible antes de restaurar una guía sobre este experimento.

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
- Contradicciones conocidas entre la documentacion de Lua y el comportamiento observado estan documentadas en [local/contradicciones-docs-lua-2026-10-17](local/contradicciones-docs-lua-2026-10-17.md) (leer antes de pelearse con algo que "deberia funcionar").

## Inversión de Posesión Dinámica (`runtime_host_swapping`) y Selección Multi-Miembro Familiar (`household.get_members`)

Cuando diseñamos mods sociales en el **Dominio 2 (`zoi_target_social`)** —por ejemplo, gastar una broma a varios miembros de la familia o forzar que otro Zoi sea el emisor de una interacción de `TalkSelection` sin tener que cambiar manualmente de personaje—, el motor de inZOI expone contratos específicos en B1 y B2:

### 1. Contratos reales del motor (corrección sobre `player.possess_zoi`)

En el binario de inZOI **no existe** el identificador `player.possess_zoi`. Los comandos verificados del catálogo CLI/Lua son:

| Comando / API | Ámbito | Parámetros | Función exacta en el motor |
|---|---|---|---|
| `entity.get_possessed` | `B2Authority` | *(ninguno)* | Devuelve `{ entity_id: <int> }` del Zoi actualmente poseído (host activo). |
| `entity.possess` | `B2Authority` | `entity_id=<entityId>` | Cambia autoritativamente el personaje controlado en la simulación B2. |
| `character.possess` | `B1Standalone` | `character_id=<entityId> [household_id=<entityId>]` | Cambia el avatar activo, cámara y HUD en cliente B1 (cambio instantáneo si pertenece al mismo hogar). |
| `household.get_members` | `B2Authority` | `[household_id=<entityId>]` | Devuelve `{ household_id, name, members: [{ entity_id, first_name, last_name, age_group, gender, relationship_label, spouse_id }] }` con todos los integrantes de la familia. |
| `interaction.execute` | `B2Authority` | `entity_id=<emisor> target_entity_id=<receptor> interaction_bag_id=<bagId> insert_front=true` | Encola y dispara una interacción indicando explícitamente quién es el emisor (`entity_id`) y quién el receptor (`target_entity_id`). |

### 2. Tres modos operativos en el Blueprint Contextual (`zoi_target_social`)

1. **Selección Multi-Miembro Familiar sin perder el Host (`enable_multi_family_targets`)**:
   - Permite elegir el alcance: **Solo miembros marcados** (`selected_members`, ej. `"20524,20525,20526"`), **Toda la familia** (`all_household`, consultando `household.get_members`) o **Objetivo único** (`single_target`).
   - Itera sobre cada `member_id` seleccionado ejecutando en lote bromas (`Int_Humor_Joke_01` / `Self_Karma_SendPrank`), muestras de afecto (`Co_Family_Spouse_A03`) o invocación grupal (`movement.summon`) sin que el jugador tenga que cambiar manualmente de Zoi.
2. **Inversión Emisor↔Receptor en B2 sin mover cámara (`invert_b2_no_cam_loss`)**:
   - Invierte los parámetros en B2 (`entity_id=<target_host_id> target_entity_id=<original_host_id>`) para que el familiar o pareja seleccionado sea quien tome la iniciativa y ejecute la interacción hacia el Zoi principal mientras tu cámara permanece fija en tu Zoi.
3. **Inversión de Posesión Dinámica Completa con Restauración en `interaction.finished` (`full_possess_and_restore`)**:
   - Para interacciones de `TalkSelection` que exigen que el emisor sea el Zoi poseído activo (`inzoi.entity.is_possessed(actor) == true`):
     1. Guarda el `original_host_id` del Zoi principal (`entity.get_possessed`).
     2. Fuerza temporalmente el cambio de posesión al emisor (`entity.possess entity_id=<target_host_id>` en B2 y `character.possess character_id=<target_host_id>` en B1).
     3. Dispara la interacción (`interaction.execute entity_id=<target_host_id> target_entity_id=<original_host_id> interaction_bag_id=<bag_id> insert_front=true`).
     4. Suscribe un listener temporal a `inzoi.event.on("interaction.finished", ...)` que restaura automáticamente el foco al Zoi original (`entity.possess entity_id=<original_host_id>`) al concluir la acción.

## Conversión Total de Época y Subsistemas Ocultos del Mapa (`SejongEraMod` · Era Joseon / Hanok)

Pruebas en vivo confirmadas sobre `Gangnam_Map` demuestran hasta dónde puede llegar un mod de conversión histórica/temática sin rehacer el mapa desde cero, combinando subsistemas ocultos de `B1`/`B2`, `data.patch` y `FB2SiteManager`:

### 1. Los 7 Subsistemas de Edición del Mapa en `B1` y `B2`

| Subsistema | Entorno | Obtención en Lua | Funciones / Propiedades Clave Verificadas |
|---|---|---|---|
| **`UB1WorldManager`** | `B1` (Cliente visual) | `inzoi.getManager('UB1WorldManager')` | `SetStreetallFloorMaterial(0..3)`, `SetCityFloorMaterial(0..3)`, `SetThemeFloorMaterial(0..3)`, `SetWeatheringValue(1.0)`, `ChangeStreetTree(0..5)`, `SetBannerImage(0)`, `SetBillboardMovie(0)` |
| **`FB2CityEditManager`** | `B2` (Autoridad) | `inzoi.getB2Manager('FB2CityEditManager')` | `SetStabilitySelection("CitySpawnVehicle", 0.0)`, `AddWorldModifierValue("MaxSpawnRate_Vehicle", -100.0)`, `SetStabilitySelection("CityWeathering", 1.0)`, `UpdateSpawnDecorationWhole()` |
| **`FB2CityGraphManager`** | `B2` (Tráfico y vías) | `inzoi.getB2Manager('FB2CityGraphManager')` | `SetRoadState(roadIdx, inzoi.EB1CityGraphLaneState.HardClosed)` (cierra carriles al tráfico rodado) |
| **`FB2SiteManager` + `FB2Site`** | `B2` (Solares) | `inzoi.getB2Manager('FB2SiteManager')` | `siteMgr:FindSiteBySiteId(siteId)`, `site:ApplySitePreset(presetId)`, `site.bTakeOffShoes = true`, `site.AppliedPresetId` |
| **`FB2EntityManager`** | `B2` (Entidades) | `inzoi.getB2Manager('FB2EntityManager')` | `GetAllEntities(inzoi.EB2EntityType.Vehicle)`, `GetAllEntities(inzoi.EB2EntityType.GameObject)`, `DestroyObject(entity, inzoi.EB2EntityDestroyReason.Script)` |
| **`DA_WorldMapConfig`** | `DataAsset` | `/Game/Blueprints/UI/WorldMap/Edit/DA_WorldMapConfig` | `BannerDataMap`, `BillboardDataMap`, `EnvFeatureConfigDataMap`, `SkyVisibilityConfigDataMap`, `StreetLightConfigDataMap`, `WeatherConfigDataMap` |
| **`CityEditStabilitySelection`** | `DataTable` | `data.patch` / `data.table.get` | Define el rango `[0.0 .. 1.0]` de `CityWeathering`, `CitySpawnVehicle`, `CityBillboard`, `CityStreetLight` |

### 2. Convertir Casas Adyacentes en Casas Hanok (`BuildPreset` + `ApplySitePreset`)

El juego incluye presets arquitectónicos completos de época en la tabla `BuildPreset`:
- `Gangnam_Residence_Free01_06`: **Gran mansión hanok** (`/Game/Data/SiteArea/Preset/Gangnam_Residence_Free01_06.Gangnam_Residence_Free01_06`)
- `Gangnam_Residence_Free01_07`: **Casa hanok Sodam** (`/Game/Data/SiteArea/Preset/Gangnam_Residence_Free01_07.Gangnam_Residence_Free01_07`)
- `Gangnam_Residence_Free03_10`: **Gran mansión hanok** (`/Game/Data/SiteArea/Preset/Gangnam_Residence_Free03_10.Gangnam_Residence_Free03_10`)
- `Gangnam_Residence_Free03_11`: **Casa hanok de Sodam** (`/Game/Data/SiteArea/Preset/Gangnam_Residence_Free03_11.Gangnam_Residence_Free03_11`)
- `Gangnam_Residence_Free07_05` y `Gangnam_Residence_Free08_05`: **Viviendas de época**

Para transformar todos los solares residenciales adyacentes (`Gangnam_Residence_Free01..08`):
1. Desbloquear la edición global de solares con `building.edit_all_site enable=true`.
2. Redirigir los `presetAsset` de los solares modernos (`Free02_01`, `Free04_01`, `Free05_01`, `Free06_01`) hacia los paquetes Hanok mediante `data.patch`.
3. En `lua/B2/Main.lua`, localizar cada solar con `siteMgr:FindSiteBySiteId(siteId)`, activar `site.bTakeOffShoes = true` y ejecutar `site:ApplySitePreset(presetId)`.

### 3. Purga de Vehículos (`FB2Vehicle`) y Electrodomésticos Modernos (`FB2GameObject`)

- **Por qué no basta con `vehicle.destroy_all`**: el comando CLI solo destruye el vehículo asociado al conductor activo y falla con `Failed to find current vehicle` en coches estacionados o tráfico IA. En `B2`, iterar `entityMgr:GetAllEntities(inzoi.EB2EntityType.Vehicle)` y llamar a `entityMgr:DestroyObject(v, inzoi.EB2EntityDestroyReason.Script)` elimina el **100% de vehículos** del mapa.
- **Purga quirúrgica de objetos eléctricos/modernos**: cada `FB2GameObject` expone la propiedad `obj.ObjectTableId` (`[Lua: string]`). Filtrar prefijos modernos (`^Fridge`, `^KitchenRange`, `^Microwave`, `^TVTable`, `^TV0`, `^Monitor`, `^Computer`, `^Lighting02_v20`) y destruirlos con `DestroyObject` limpia los interiores Hanok conservando las tinajas tradicionales (`JAR01`, `JAR01_v01`, `JAR01_v02`).
- **Vestimenta Hanbok Global**: en `B1`, aplicar `character.change_clothes` sobre todos los Zois cargados (`AppearanceSet_Style_Preset_F_10014` para mujeres, `AppearanceSet_Style_Preset_M_10011` / `10012` con sombrero tradicional *Gat* para hombres, y `DF_0005` / `DM_0005` para niños) completa la ambientación de la era Sejong.

## Arquitectura de Autonomía, Trucos y Bloqueo de Agenda (`FB2AutonomyComponent` + `FB2TimelineComponent`)

Cuando un Zoi cancela un plan familiar, baja del coche o toma el autobús por su cuenta, no se debe a un único interruptor, sino a **6 capas concurrentes** en `B2`. Para lograr **Obediencia Total** (como en el mod `FamiliaUnida` y en los nodos `zoi_self_menu` / `zoi_target_social` del Blueprint Contextual), hay que neutralizar las capas en orden de prioridad:

### 1. Las 6 Capas de Decisión que Interrumpen al Jugador

| Capa | Componente / Tabla `B2` | Prioridad / Efecto | Cómo neutralizarla desde CLI / Lua |
|---|---|---|---|
| **1. Libre Albedrío Casual** | `FB2AutonomyComponent` (`bAutonomyEnable`) | `Autonomy (2)`: busca objetos cercanos cada `10s` (`AutonomyTickInterval`) | `autonomy.set_enable entity_id=<id> Enable=false` o `settings.set Option=SimulationAutonomy Value=0` |
| **2. Emergencia de Necesidades** | `FB2StateComponent` / `Need` | `NeedEmergency (3)`: **ignora** `bAutonomyEnable=false` si Hambre, Vejiga o Energía caen al mínimo | `needs.set_full entity_id=<id>` + `needs.freeze_all entity_id=<id> Enable=true` (o global `needs.freeze_all_system Enable=true`) |
| **3. Agenda Horaria (`Timeline`)** | `FB2TimelineComponent` (`DayOfWeekMap`) | `Schedule (4)`: **ignora** `bAutonomyEnable=false` al cambiar la hora y encola `Schedule_GotoSite` (autobús/trabajo) | Diagnosticar con `schedule.diagnose entity_id=<id>` y cortar con `movement.reset_zoi entity_id=<id> Teleport=false` + `interaction.clear_queue entity_id=<id> cancel_current=true` |
| **4. Acción en Solitario Activa** | `FB2InteractionComponent` (`QueueIntents`) | Si el Zoi ejecuta una interacción con `bNonCancelable=true`, las nuevas órdenes en cola rebotan | `movement.reset_zoi entity_id=<id> Teleport=false` + `zoi.freeze entity_id=<id>` (limpia el estado físico sin teletransportar al spawn) |
| **5. Enrutamiento Grupal / Autobús** | `FB2ZoiGroup` (`zoi_group.move_to`) | `zoi_group.move_to` fuerza navegación peatonal/transporte público y **baja a la familia del coche** | Disolver el grupo antes de subir al coche (`zoi_group.disband`), asignar asientos (`EnterVehicle_Driver`, `EnterVehicle_Passenger0..2`) y usar `MoveWithVehicle` |
| **6. Teletransporte de Vehículo** | `VehicleQuickTravel` + `InteractionBag` | Por defecto el coche salta con pantalla de carga o el conductor cancela el paseo a mitad de ruta | `settings.set Option=VehicleQuickTravel Value=0` + `data.patch Query=InteractionBag[Id=MoveWithVehicle].bNonCancelable Method=Override Value=true` |

### 2. Secuencia Canónica de Obediencia Total y Paseo en Coche (`FamiliaUnida`)

```lua
-- 1. Sellar autonomía, necesidades, acciones en solitario y agenda en cada miembro
local family_ids = { "20522", "20523", "20524", "20525" }
for _, id in ipairs(family_ids) do
    inzoi.cli.execute("movement.reset_zoi entity_id=" .. id .. " Teleport=false")
    inzoi.cli.execute("interaction.clear_queue entity_id=" .. id .. " cancel_current=true")
    inzoi.cli.execute("zoi.freeze entity_id=" .. id)
    inzoi.cli.execute("autonomy.set_enable entity_id=" .. id .. " Enable=false")
    inzoi.cli.execute("needs.set_full entity_id=" .. id)
    inzoi.cli.execute("needs.freeze_all entity_id=" .. id .. " Enable=true")
    inzoi.cli.execute("schedule.diagnose entity_id=" .. id)
end

-- 2. Blindar conducción suave por calzada (sin salto ni cancelación)
inzoi.cli.execute("settings.set Option=VehicleQuickTravel Value=0")
inzoi.cli.execute("data.patch Query=InteractionBag[Id=MoveWithVehicle].bNonCancelable Method=Override Value=true")
inzoi.cli.execute("data.patch Query=InteractionBag[Id=EnterVehicle_Driver].bNonCancelable Method=Override Value=true")

-- 3. Embarcar por asiento en el SUV familiar (5658) e iniciar paseo hacia el solar destino (72)
inzoi.cli.execute("interaction.execute entity_id=20522 target_entity_id=5658 interaction_bag_id=EnterVehicle_Driver insert_front=true")
inzoi.cli.execute("interaction.execute entity_id=20523 target_entity_id=5658 interaction_bag_id=EnterVehicle_Passenger0 insert_front=true")
inzoi.cli.execute("interaction.execute entity_id=20524 target_entity_id=5658 interaction_bag_id=EnterVehicle_Passenger1 insert_front=true")
inzoi.cli.execute("interaction.execute entity_id=20525 target_entity_id=5658 interaction_bag_id=EnterVehicle_Passenger2 insert_front=true")
inzoi.cli.execute("interaction.execute entity_id=20522 target_entity_id=72 interaction_bag_id=MoveWithVehicle insert_front=true")
```



