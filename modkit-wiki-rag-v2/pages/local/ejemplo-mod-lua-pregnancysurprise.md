---
source: local
title: "Ejemplos de mods Lua reales: PregnancySurprise y FlyingZoi (2026-10-21)"
generado: 2026-10-21
---

# Ejemplos de mods Lua reales: PregnancySurprise y FlyingZoi

Fuente: código fuente REAL leído de `inZOIModKit/Mods/` en disco (build 20261011.16078.W.MODKIT.EGS,
paquete del 2026-10-19). Sirve como referencia de "cómo se hace" para la capa de scripts.

## Qué hace el código Lua en el juego

El motor monta los scripts de un mod según los **bindings** de `lua_manifest.json`. Cada binding declara:

- **env**: `B2` (simulación, autoridad) o `B1` (cliente, presentación; sin acceso a datos de simulación, habla con B2 vía `inzoi.message`).
- **type**: a qué entidad se engancha: `Zoi`, `Household`, `Component` (con `key` = nombre del componente, p.ej. `Bio`), `Manager`.
- **key**: `*` = todas las entidades de ese tipo (o un id/nombre concreto).
- **script**: ruta del módulo Lua (p.ej. `Household.PregnancyAutomation` = `lua/B2/Household/PregnancyAutomation.lua`).

El módulo devuelve una tabla `M` con callbacks del ciclo de vida:

| Callback | Cuándo corre |
|---|---|
| `M.on_begin(self, owner)` | Al montarse el binding (creación del hogar/Zoi/componente) |
| `M.on_tick(self, owner, dt)` | Cada frame de simulación (para trabajo periódico, throttle manual) |
| `M.on_member_enter(self, owner)` | Al entrar un miembro (bindings Household) |
| `M.on_end(self, owner)` | Al desmontarse (limpiar listeners) |
| `M.Override_<Funcion>(owner)` | Reemplaza una función del componente (hook de motor) |

APIs globales del SDK: `inzoi.cli.execute(comando)` (llama a comandos CLI del juego),
`inzoi.event.on/off(nombre, handler)` (eventos como `zoi.married`),
`inzoi.getB2Manager("FB2EntityManager")` (managers de simulación),
`inzoi.EB1GenderType` / `inzoi.EB2ComponentType` (enums).

## Recetas integradas (`modkit_list_lua_recipes`)

Puntos de partida oficiales (devueltos por el ModKit en vivo, include_body=true):

1. **Emotion Logger (Zoi)** — B2/Zoi/`*`/`Zoi.EmotionLogger`: loguea cada cambio de emoción. Primer script reactivo.
2. **Stat Tracker (throttled tick)** — B2/Zoi/`*`/`Zoi.StatTracker`: corre una vez por segundo en vez de cada frame. Plantilla de trabajo periódico.
3. **Weather Notifier (Manager)** — B2/Manager/Weather/`Manager.WeatherNotify`: detecta cambios de clima vía el manager. Ejemplo de binding Manager.

## Mod real 1: PregnancySurprise ("sorpresa de embarazo")

Descripción del manifiesto: "mod Lua invisible para elegibilidad de embarazo basada en matrimonio
y un cambio inesperado de sexo del recién nacido". Estructura:

```
PregnancySurprise_B04A3C2E/
├── PregnancySurprise_B04A3C2E.uplugin
├── lua/
│   ├── lua_manifest.json          <- bindings
│   ├── B1/Main.lua                <- stub de presentación
│   ├── B2/Main.lua                <- stub de simulación
│   ├── B2/Household/PregnancyAutomation.lua
│   └── B2/Components/BirthSexSurprise.lua
```

`lua_manifest.json` (los dos bindings del mod):

```json
{ "bindings": { "B2": [
    { "type": "Household", "key": "*", "script": "Household.PregnancyAutomation" },
    { "type": "Component", "key": "Bio", "script": "Components.BirthSexSurprise" }
] } }
```

### Cómo funciona PregnancyAutomation.lua

1. `on_begin(household)`: registra el evento `zoi.married` (`inzoi.event.on`) y hace un
   `scanHousehold` inicial del hogar.
2. `scanHousehold`: recorre `household:GetHouseholdMembers()`; para cada miembro con cónyuge
   (`bio:GetSpouseCharacter()`) llama a `startPregnancy`.
3. `startPregnancy` (las condiciones, en orden):
   - ids distintos y ambos son miembros del hogar (`household:IsHouseholdMember`).
   - no reintentar la misma pareja (tabla `self.attempted[pairKey]`).
   - ambos tienen componente `Bio` (`character:GetComponent(inzoi.EB2ComponentType.Bio)`).
   - **matrimonio mutuo**: `firstBio:GetSpouseCharacter():GetEntityId() == secondId` y viceversa.
   - **nadie embarazado** (`bio:IsPregnant(false)`); si ya lo está, marca la pareja como intentada y sale.
4. Elige madre/padre por género (`GetGenderType`); si la pareja no es mujer+varón, decide por id menor.
5. **La llamada al motor**: comando CLI
   `pregnancy_and_birth.get_baby_with entity_id=<madre> partner_id=<padre>` ejecutado con
   `inzoi.cli.execute`. Detalle técnico importante: la CLI solo acepta el embarazo si los géneros
   son mujer+varón, así que el script **cambia los géneros temporalmente** (`SetGenderType`),
   ejecuta el comando dentro de un `pcall` y **restaura los géneros originales** después.
   Si algo falla, des-marca la pareja (`self.attempted[key] = nil`) para reintentar.
6. `on_member_enter`: re-escanea el hogar cuando entra alguien. `on_end`: apaga el listener.

### BirthSexSurprise.lua (la segunda sorpresa)

Binding `Component/Bio` con un hook de motor: `M.Override_ChildBirth(owner)` sustituye el parto
del componente Bio. Lee el sexo esperado (`GetBabySpawnDataGenderType`), invierte el género en
`owner.CachedBabySpawnData.Gender`, llama al `ChildBirth()` real (pcall) y restaura el dato —
el bebé nace con el sexo contrario al previsto.

### PELIGRO documentado: re-embarazo automático tras el parto

Comportamiento reportado por el experto y explicado por el código: **después del parto la pareja
puede volver a quedar embarazada automáticamente si el mod no se desactiva antes**, porque:

- El motor **sigue comprobando si se cumplen las condiciones** en cada oportunidad de re-evaluar
  del binding: `scanHousehold` corre en `on_begin` y en `on_member_enter`, y el evento `zoi.married`
  sigue activo.
- El guard `self.attempted` solo vive **en memoria de la instancia del script**: se reinicia en cada
  `on_begin` (recarga del hogar, remontado del mod, nueva partida) y no hay persistencia de
  "esta pareja ya tuvo su sorpresa".
- La condición `IsPregnant` solo excluye a parejas YA embarazadas: tras el parto la condición vuelve
  a dar cierto.

**Sin UI no hay interruptor**: la opción más lógica es **desactivar el mod manualmente antes de que
nazca el bebé** (menú Mods del juego, o `luamod.unmount` por consola/MCP con el juego en marcha).

### Opciones para controlar la funcionalidad (variantes del mod)

1. **Solo al casarse** (mínimo): quitar `scanHousehold` de `on_begin`/`on_member_enter` y dejar
   únicamente el evento `zoi.married` — cada pareja solo recibe la sorpresa en su boda.
2. **Una vez por pareja, permanente**: persistir `attempted` (archivo en el workspace del mod o
   DataAsset de configuración leído/escrito desde el script) para que el reset de `on_begin` no
   "olvide" las parejas ya atendidas.
3. **Fertilidad configurable**: añadir probabilidad (`math.random() < tasa`) y exponer la tasa en
   un archivo de settings del mod, para juegos de Legacy variados.
4. **Cooldown tras el parto**: guardar el momento del parto (`CachedBabySpawnData` / evento de
   nacimiento) y no reintentar hasta N días de juego.
5. **Interruptor con UI**: añadir un mini UI mod con un toggle (`uimod`, menú o keybind) que
   escriba un flag que el script B2 lee antes de cada intento; `inzoi.message` comunica UI (B1)
   con el script (B2). Más trabajo, pero elimina el peligro del punto anterior.
6. **Alcance limitado**: cambiar `key: "*"` por un hogar/entidad concreta para probar en un
   hogar de prueba sin afectar a toda la ciudad.

## Mod real 2: FlyingZoi ("Zoi volador")

Binding `B2/Zoi/*` → `Zoi.FlyZoi`. Patrón de mod de gameplay con tick:

- `M.Override_Ascend(owner)`: hook sobre la acción de ascenso del Zoi: alterna el vuelo
  (activa/desactiva `state.active`, `RequestSnapToGround()` al aterrizar).
- `M.on_tick(owner, dt)`: mientras vuela, mueve al Zoi con `SetLocationOnlySimul` usando el
  `InputVector` del componente de movimiento (`FLIGHT_SPEED`, ascenso gradual hasta `FLIGHT_HEIGHT`).
- Comandos CLI de apoyo: `pose.set_bone ... mode=additive` (pose de superman al despegar),
  `pose.clear` al aterrizar y `toast.show` para avisar en pantalla ("VUELO ON/OFF").
- Lecciones del código: throttle del tick (`math.min(dt, MAX_TICK_STEP)`), estado por entidad
  (`flight[entity_id]`), limpieza en `on_end`, y que `GetEntityId()` puede devolver una tabla
  (hay que extraer `.Value`).

## Otros ejemplos instalados en la misma carpeta (sin Lua, otras secciones)

`Sample_Build`, `Sample_CAZ`, `Sample_DataMod`, `Sample_UIMod` (plantillas oficiales por
departamento), `Test_Sofa`/`Test_Pot`/`Test_D_Sink` (Build), `M_Necklace004_test` y
`skinnedaccesory_nails` (accesorios CAZ), `W_Hair_L_001_pony` (pelo), `Face_W_Head02`
y `face_W_Head04_a` (caras), `UAnim01` y `test_animacion` (Animation), `uimod_andreu` (UI),
`LuaCallbackProbe` y `SkillProbe` (sondeos Lua de verificación), `evento_anim_1` (eventos),
`script_test` (script vacío), `MCPVerifyTest` (verificación MCP).

## Cómo probar estos mods en vivo

```
python tools/mcp_client.py game luamod_mount '{"mod_id": "PregnancySurprise_B04A3C2E"}'
python tools/mcp_client.py game luamod_reload '{}'
python tools/mcp_client.py game luamod_unmount '{"mod_id": "PregnancySurprise_B04A3C2E"}'
```

Y para escribir/validar scripts sin salir del juego: `modkit_write_file`,
`modkit_list_lua_api_catalog` (catálogo de la API del runtime) y las fichas MCP del dominio
authoring-lua.
