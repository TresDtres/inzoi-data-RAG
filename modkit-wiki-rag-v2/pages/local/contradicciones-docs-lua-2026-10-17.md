---
source: local
title: "Contradicciones documentadas: API Lua modding (ModKit build 16078)"
generado: 2026-10-17
---

# Contradicciones documentadas: API Lua modding (ModKit build 16078)

Auditoría cruzada de las capas de documentación del ModKit que describen el mismo workspace Lua de mods,
realizada el 2026-10-17 contra el build 16078, con el **MCP del ModKit consultado en vivo**
(`http://localhost:11213/mcp`, editor en ejecución).

## VEREDICTOS RUNTIME (probes en juego, 2026-10-17, build 16078, Gangnam_Map)

Tres probes ejecutados en vivo vía `modkit_start_lua_preview` (mod `LuaCallbackProbe_404BB4FA`,
binding B2 Zoi/ResidenceFamily, partida recargada para forzar el escaneo de bindings):

| Contradicción | Veredicto | Evidencia literal del Output |
|---|---|---|
| **C1: firma de `inzoi.event.off`** | **Gana el AGENTS.md / `lua-api-core.txt`**: `off(event_id, handle)`. El doc del MCP (`ws_lua_script.md:249`) está EQUIVOCADO | `off(event,handle) ok=true err=nil` / `off(event,cb) ok=false err=inzoi.event.off expects (eventId:string, handle:integer)` — el propio runtime dicta la firma con un error tipado |
| **C2: firma de `Override_<Func>` per-entity** | **Ganan `lua-patterns.txt` / `lua-quickstart.txt`**: convención `(self, owner, args...)` con self (instancia per-binding) como primer parámetro. El AGENTS.md ("no leading self"; "primer parámetro es el target enlazado") está EQUIVOCADO para overrides per-entity | `[OV] Override_AddUsingCarriableObject invoked: nargs=3 first=OTHER(table[0])` — 3 args = (self, owner, InEntityId) exactamente como el ejemplo de lua-quickstart; el primer parámetro es una tabla (la instancia self per-binding, igual que la que recibe `on_begin`: `self=table[0]`), NO el módulo M (rawequal falso, M tendría 12+ campos) ni el owner (que es `userdata:FB2Character`) |
| **C3: callbacks de ciclo de vida** | **Gana el doc del MCP (`ws_lua_script.md`)**: `on_emotion_changed` EXISTE y dispara; el catálogo vivo (6 callbacks) está INCOMPLETO | `[CB] on_emotion_changed FIRED nargs=4` — decenas de veces, con cambios de emoción naturales de los Zois |
| Ids de evento (contradicción menor no catalogada) | **Gana el `events_catalog.json` del MCP**; los ids del `lua-api-core.txt` (`b2.*`) son inválidos en el runtime actual | `on(need.state_changed) -> number:237` (válido, dispara con payload table[4]) / `on(b2.heartbeat) -> nil:nil` (inválido) |
| Bonus: "handle; 0 on failure" (AGENTS.md) | **Equivocado**: la suscripción fallida devuelve `nil`, no 0 | `on(b2.heartbeat) -> nil:nil` |
| Bonus: "Main.lua callbacks do NOT receive self or owner args" (`lua-quickstart.txt`) | **Equivocado para on_tick**: recibe 2 args (tabla y dt) | `[MAIN] on_tick FIRST CALL: nargs=2 [table=table:..., number=0.034]` |
| Bonus: firma de `on_tick` de bindings | Confirmada la del AGENTS.md: `on_tick(self, owner, dt)` | `[PROBE] on_tick first: a1=table[0] a2=userdata:FB2Character a3=number:0.0166` |

**Hallazgo runtime adicional (no era contradicción documental):** churn masivo de bindings durante el
juego normal — cientos de ciclos `on_end`/`on_begin` con distintos `FB2Character`, y cada `on_begin`
re-suscribe eventos sin que ningún cleanup libere: los handles subieron de 237 a 390+ sin liberar, y tras
el `off()` de una instancia las suscripciones filtradas de otras instancias seguían disparando
(`[P1] FIRE need.state_changed` tras `VERDICT-DATA`). Cualquier mod que suscriba en `on_begin` sin
hacer `off` en `on_end` filtra suscripciones a este ritmo.

## Ronda 2 (misma sesion, probes ampliados)

| Trampa | Veredicto | Evidencia literal |
|---|---|---|
| Super-call `owner:<Func>()` desde dentro de un override | **El consejo de los docs es CORRECTO**: llama al C++ original sin recursion | `[SUP] super-call ok=true err=nil` sin re-entrada del mismo par (owner, entity_id) |
| Argumentos `FB1EntityId` en overrides | Llegan como **userdata** (id envuelto), no como numero — pasarlos intactos al super-call | `[OV] AddUsingCarriableObject nargs=3 a1=table[0] a2=userdata:FB2Character a3=userdata:26112` |
| `on_possessed` / `on_unpossessed` | **Existen y disparan** con firma `(self, owner)` — pero SOLO por el camino de posesion de avatar (`character_possess` / UI); `entity_possess` (control de entidad de bajo nivel) NO los dispara | `[CB2] on_unpossessed FIRED nargs=2 a1=table[0] a2=userdata:FB2Character` y `[CB2] on_possessed FIRED nargs=2 ...` |
| Binding Household | Funciona: `Household:*` engancho ~80 hogares con `on_begin(self, household)` | `[HCB] on_begin ... household=userdata:FB2Household` x80 |
| Amplitud de keys | `Zoi:ResidenceFamily` engancho ~74 Zois; las keys son de escala de vecindario, no de un hogar | Inundacion de `[R2] on_begin` x74 en la carga |
| dt del primer tick tras carga | El primer `on_tick` tras cargar reporta como dt la duracion entera de la carga (178.26 s, identico en dos cargas); en sesion activa son valores normales (0.03-0.05) | `[MAIN] on_tick FIRST CALL: nargs=2 [table, number=178.26374816895]` |

**Cuarta superficie (navegador API del editor, pestana Events):** la mas rica de las cuatro
(descripciones, payload, snippet por evento, boton "Insert into script") y coincide con
`events_catalog.json` en el conjunto de eventos — pero sus tres minas quedaron CONFIRMADAS en runtime
(ronda 3, build 16078):
(1) `zoi` NO existe: `rawget(_G,"zoi") -> type=nil` en B1 y B2 (boot y bindings), y el propio
validador del kit marca el acceso directo como `luacheck-113: accessing undefined variable 'zoi'`
(11 errores) — el boton "Insert into script" inserta codigo roto;
(2) el evento fantasma `emotion.on` no existe: `on('emotion.on') -> nil`;
(3) el id aplanado falla: `on('needstate_changed') -> nil` mientras el punteado funciona
(`need.state_changed` OK en ronda 1; `character.overlap_begin` devolvio handle 398 en B1).
Regla: usar el navegador para descripciones y payload, pero tomar ids e identificadores de
`events_catalog.json` o de la tabla verificada — nunca de su arbol ni de sus snippets.

**Cierre de C3:** `on_emotion_changed` y `on_possessed`/`on_unpossessed` disparan; el catalogo vivo del MCP (6 callbacks) quedo incompleto por partida doble y el `ws_lua_script.md` (11 callbacks) resulta correcto en este punto.
**Sigue pendiente:** `on_member_enter`/`on_member_leave` (sin cambios de membresia durante la ventana) y overrides en modulos estaticos/chunk.

Objetivo: documentar por qué una IA "no encuentra el camino" al trabajar con Lua en el ModKit.
Conclusión anticipada (verificada): ninguna capa tenía adjudicada la verdad — **cada documento tenía
una parte de razón y al menos una parte equivocada**: el AGENTS.md acierta en `off()` y `on_tick` pero
miente en los overrides per-entity; el doc del MCP miente en `off()` pero acierta en los callbacks extra;
el `lua-api-core.txt` acierta en `off()` pero sus ids de evento no existen.

## Mapa de fuentes auditadas (todas dentro del ModKit)

| Fuente | Ruta | Audiencia |
|---|---|---|
| AGENTS.md (3 copias idénticas) | `inZOIModKit/Content/Data/CLI/templates_lua/lua/_AGENTS.md` (template) + copia en `workspace/lua/AGENTS.md` de cada mod creado | Agente que edita archivos directamente |
| Doc MCP Lua | `inZOIModKit/Data/Tools/mcp/modkit/workspace_docs/ws_lua_script.md` (427 líneas, servido como `modkit://workspace-docs/ws_lua_script`) | AI conectada al MCP del ModKit |
| SYSTEM_PROMPT MCP | `inZOIModKit/Data/Tools/mcp/modkit/SYSTEM_PROMPT.md` (752 líneas, entregado como `instructions` al conectar) | AI conectada al MCP del ModKit |
| Referencia CLI | `inZOIModKit/Content/Data/CLI/lua-api-core.txt`, `lua-patterns.txt`, `lua-quickstart.txt` | AI conectada al MCP del juego (en ejecución) |
| Scaffolds oficiales | `inZOIModKit/Content/Data/CLI/templates_lua/bindings/{Static,Entity,Component,Manager}.lua` | Generador de código del propio ModKit |
| Guía del editor | `inZOIModKit/Data/Guide/ScriptMod.md` (376 líneas, pestaña Guide del editor de Script) | Humano en el editor |

Verificado: los 3 AGENTS.md son byte a byte idénticos (`diff` → sin diferencias, 4706 bytes cada uno).
El de la plantilla se llama `_AGENTS.md` (guión bajo para que la carpeta template no sea tratada como mod).

## Validez frente al fix del ModKit (comprobado 2026-10-17)

El ModKit recibió un fix con posterioridad al build 16078 (15 oct 08:26). Verificación de
timestamps: **ninguno de los documentos auditados fue modificado por ese fix**, por lo que todas
las contradicciones de este informe siguen vigentes en el build actual:

| Archivo auditado | Última modificación |
|---|---|
| `lua-api-core.txt`, `lua-patterns.txt`, `lua-quickstart.txt` | 2026-10-06 18:13 |
| `templates_lua/lua/_AGENTS.md` (template) y `templates_lua/bindings/Static.lua` | 2026-10-06 18:13 |
| `Data/Guide/ScriptMod.md` | 2026-10-06 18:14 |
| `ws_lua_script.md`, `SYSTEM_PROMPT.md`, `README.md` (paquete MCP) | 2026-10-15 08:27 |
| `Build.txt` (16078) | 2026-10-15 08:26 |

Único cambio tras el mediodía del 15-10 fuera de `Mods/`, `Saved/`, `Binaries/` e `Intermediate/`:
logs de build y `Config/DefaultEditor.ini`. Sin cambios en documentación.

## Impacto: por qué esto es grave para el usuario nuevo con IA

Las contradicciones no son un defecto cosmético de documentación. Para un usuario sin experiencia
que trabaja con IA a través del MCP, el impacto se agrava por dos razones estructurales:

**1. Los fallos son invisibles para el validador.** `modkit_validate_lua_script` devuelve
`ok: true, errors: 0` (verificado en vivo con `LuaCallbackProbe_404BB4FA`) porque las tres
variantes contradictorias son Lua sintácticamente válido. El usuario recibe confirmación de que
"todo está bien" y el fallo aparece después, en runtime, sin mensaje interpretable. El único error
que el análisis estático sí caza (`io.open`) es el del sandbox — justamente el único tema que solo
está documentado en los AGENTS.md, invisible por la vía MCP.

**2. La cadena de autoridad está invertida.** El documento con la firma dudosa (`off(event, callback)`)
es el que el MCP **sirve activamente** (`modkit://workspace-docs/ws_lua_script`). La IA lo cita con
confianza como fuente oficial. La experiencia del usuario nuevo no es "la IA se equivocó": es
"la IA citó la documentación oficial y el mod no funciona". Eso no genera desilusión con la IA:
genera desconfianza en el ecosistema de modding, y el usuario no puede distinguir bug de
documentación de error propio.

Caminos de fallo concretos para un primerizo:

| El novato (o su IA) sigue... | Resultado observable |
|---|---|
| `off(event, callback)` del doc del MCP | El unsubscribe falla en silencio; los handlers se duplican o el evento sigue disparando, sin diagnóstico |
| Override con `self` (ejemplos CLI) o sin él (AGENTS.md) | Argumentos desplazados; super-call sobre el objeto equivocado → crash o nada, según qué doc leyó la IA |
| `on_possessed`/`on_member_enter` (doc: 11 callbacks) | El runtime nunca dispara el callback; la AI concluye que el binding type está mal y hace thrash entre tipos |
| Catálogo vivo (6 callbacks) | La AI "corrige" al doc y descarta callbacks que sí funcionan |
| Sandbox por la vía MCP (sin documentar) | Errores de análisis estático que nadie sabe de dónde vienen |

Coste real de cada contradicción: dirimirla requiere auditar el MCP en vivo, comparar documentos y
lanzar probes en juego — un trabajo que el kit le traslada completo a cada usuario nuevo.

## C1. Firma de `inzoi.event.off` — contradicción directa

| Documento | Firma que declara |
|---|---|
| AGENTS.md (x3) | `inzoi.event.off(event_id, handle)` — handle entero devuelto por `on` |
| `lua-api-core.txt:17` | `inzoi.event.off(eventId, handle)` — con ejemplo: `inzoi.event.off('b2.heartbeat', handle)` |
| **`ws_lua_script.md:249` (doc del MCP)** | **`off(event, callback)`** — firma distinta |

Evidencia en vivo (2026-10-17):
- El servidor MCP sirve el doc con la firma `off(event, callback)` vía `resources/read modkit://workspace-docs/ws_lua_script`.
- `modkit_list_lua_api_catalog(category="inzoi")` devuelve **solo nombres** (`event: [off, on]`), sin firmas ni parámetros → la AI que usa el MCP **no tiene dónde verificar** cuál firma es la real; le toca creer el doc dudoso.

Estado: **sin dirimir** (falta probe en juego). La mayoría de evidencia (2 de 3 documentos, con ejemplo
explícito en `lua-api-core.txt`) apunta a `off(event_id, handle)`; el doc del MCP parece el desactualizado.

## C2. Firma de los overrides `M.Override_<Func>` — contradicción directa

| Documento | Firma que declara |
|---|---|
| AGENTS.md (x3) | "There is **no leading `self`**". Estático: primer parámetro = primer argumento C++. Per-entity: primer parámetro = target enlazado (`owner`/`comp`/`manager`) |
| Scaffold oficial `templates_lua/bindings/Static.lua` | Coincide con el AGENTS.md: `M.Override_SomeNativeFunc(...)` **sin** `self` |
| **`lua-patterns.txt:85` y `lua-quickstart.txt:91`** | Ejemplos **CON** `self`: `M.Override_OnUseBegin(self, fridge, user_character)` / `M.Override_AddUsingCarriableObject(self, character, entity_id)` |
| `ws_lua_script.md` (doc MCP) | **No documenta overrides en absoluto** (0 menciones; confirmado en el doc servido en vivo) |

Estado: **sin dirimir**. Los ejemplos oficiales del CLI y el AGENTS.md no pueden tener razón los dos.
Hace falta probe en juego con ambas firmas.

## C3. Lista de callbacks de ciclo de vida — contradicción interna del propio MCP

| Fuente viva del MCP | Callbacks que declara |
|---|---|
| `modkit_list_lua_api_catalog(category="lifecycle")` (en vivo, 2026-10-17) | **6**: `on_begin, on_tick, on_end, on_lua_message, on_savegame, on_loadgame` |
| `ws_lua_script.md` (tabla "Lifecycle callbacks") | **11**: los 6 anteriores + `on_possessed`, `on_unpossessed`, `on_emotion_changed`, `on_member_enter`, `on_member_leave`, con reglas de "tipo exclusivo" |
| Receta oficial del MCP "Emotion Logger" (`modkit_list_lua_recipes`, en vivo) | Usa **`on_emotion_changed`**, que no está en el catálogo |

Tres historias distintas del mismo MCP. El catálogo vivo, el doc y las recetas no están sincronizados entre sí.

## C4. `getB2Manager` / `getB2Subsystem` — hueco en los AGENTS.md

- Presentes en el catálogo vivo del MCP (`modkit_list_lua_api_catalog(category="inzoi")` → `getB2Manager`, `getB2Subsystem`) y documentados en `ws_lua_script.md`.
- **Ausentes** de los AGENTS.md. Una AI que solo edita archivos nunca sabrá que existen.
- `ws_lua_script.md` recomienda los helpers `getB2*` en lugar del `inzoi.<Type>.Get()` reflejado
  (misma instancia, pero analyzer-unfriendly según el propio doc).

## C5. Sandbox de Lua — invisible por la vía MCP

- La lista de bloqueados (`io`, `debug`, `File`, `dofile`, `loadfile`, `loadstring`, require de
  `http`/`socket`/`ssl`, `os` parcial con whitelist `time/clock/date/difftime`) **solo existe en los AGENTS.md**.
- El doc servido por el MCP en vivo tiene 1 mención de "sandbox" en prosa y **ninguna regla**.
- `lua-api-core.txt` / `lua-patterns.txt`: tampoco la detallan.

Evidencia de campo (verificación 2026-10-15): el primer probe intentó `io.open` y falló el análisis
estático, consistente con el AGENTS.md. El sandbox está real, pero solo está documentado en una capa.

## C6. Desincronizaciones menores (mismo patrón)

| Dónde | Diferencia |
|---|---|
| `README.md` del MCP (`Data/Tools/mcp/modkit/`) | Anuncia **69 herramientas**; `tools/list` en vivo devuelve **125** (21 de Lua) |
| `ws_lua_script.md` vs AGENTS.md — chunk scripts | El doc del MCP los declara en `chunkScripts` del manifest (bookkeeping); el AGENTS.md dice "no manifest entry needed". Compatible pero confuso para una AI que lee ambos |
| Flujo de trabajo — doble contrato | AGENTS.md asume edición directa de archivos ("end files with return M"); el doc del MCP obliga al flujo `modkit_*` (`modkit_create_lua_script` → `modkit_write_lua_script` → `modkit_validate_lua_script` → `modkit_save`, preview solo con confirmación). Una AI con ambos contextos recibe dos contratos de edición competentes para los mismos `.lua` |
| Flujo de verificación | `ws_lua_script.md` manda validar con `modkit_validate_lua_script`; el AGENTS.md ni menciona validación ni el editor. Quien solo lee el AGENTS.md nunca sabe que existe el validador BlueLuaKit |

## Evidencia en vivo (MCP del ModKit, 2026-10-17)

- Editor corriendo, MCP HTTP en `127.0.0.1:11213` respondiendo JSON-RPC (`initialize`, `tools/list`, `tools/call`, `resources/list`, `resources/read`).
- `instructions` al conectar: 35 KB (el SYSTEM_PROMPT), con reglas para Script (Lua): no inventar CLI ids, validar con `modkit_validate_lua_script`, no auto-preview, leer `ws_lua_script`.
- `modkit_list_lua_scripts(LuaCallbackProbe_404BB4FA)` → 3 scripts (`B1/Main.lua`, `B2/Main.lua`, `B2/Zoi/CallbackProbe.lua`).
- `modkit_validate_lua_script(LuaCallbackProbe_404BB4FA)` → `ok: true, errors: 0, warnings: 0`.
- Recetas en vivo: 3 (Emotion Logger, Stat Tracker, Weather Notifier); ninguna usa overrides, `event.on/off` ni `cli.execute`.
- Recursos servidos: 112 (`workspace-docs`, `datatable-docs`).

## Qué falta verificar (probes propuestos)

1. **`event.off`**: suscribir en `Main.lua` con `event.on`, llamar `off(event_id, handle)` y `off(event, cb)` por separado, observar en Output cuál anula la suscripción.
2. **Overrides**: script estático (chunk) con `M.Override_X(...)` y con `M.Override_X(self, ...)`, y per-entity con ambas variantes, observando qué firma recibe el módulo y qué firma recibe el target.
3. **Callbacks extra**: bindings Zoi/Household que prueben `on_possessed`/`on_emotion_changed`/`on_member_enter` para dirimir si el catálogo (6) o el doc (11) tiene razón.

## Acciones recomendadas tras dirimir

1. Corregir el perdedor de C1: casi seguro `ws_lua_script.md:249` → `off(event_id, handle)`.
2. Alinear C2 en ambos sentidos (AGENTS.md o `lua-patterns.txt`/`lua-quickstart.txt`, quien pierda) y añadir la sección de overrides a `ws_lua_script.md`.
3. Sincronizar el catálogo de lifecycle del MCP con su doc y sus recetas (C3).
4. Añadir `getB2Manager`/`getB2Subsystem` a los AGENTS.md (C4) y el sandbox a `ws_lua_script.md` (C5).
5. Corregir el conteo de herramientas del README del MCP (C6).
6. Regenerar las copias de AGENTS.md de los mods existentes desde el template tras cada cambio (regla: no editar copias a mano; el template es la fuente de verdad).
7. Añadir regla de despacho al AGENTS.md: "si las herramientas MCP del ModKit están disponibles, usa el flujo `modkit_*`; este archivo aplica a la edición directa de archivos".

## Antecedentes de verificación runtime

- 2026-10-15: binding B2 Zoi key=ResidenceFamily del proyecto `LuaCallbackProbe_404BB4FA` verificó `on_begin` y `on_tick` con salida visible en la pestaña Output del editor. No cubre `event.off` ni overrides.
- 2026-10-09: montaje/reload/desmontaje de un mod Lua verificado vía MCP, sin señal observable de callback.
