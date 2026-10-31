---
source: local
title: "Monitorizar el motor: grabadora de vuelo del comportamiento autonomo (2026-10-21)"
generado: 2026-10-21
---

# Monitorizar el motor: grabadora de vuelo del comportamiento autonomo

Objetivo: **documentar que hace el juego por su cuenta** mientras la partida avanza sin
intervencion del jugador (con las necesidades cubiertas por cheats, el motor sigue
decidiendo: emociones, relaciones, esperanzas, ambiciones, UI). Ese registro es la materia
prima del **director de guiones** (ver `ideas-juego-inzoi/ideas-y-plan.md` y el
manual directo): primero observar, luego modelar, y solo entonces manipular.

## Enfoque 1 (ya operativo): grabadora de vuelo por sondeo — `tools/engine_monitor.py`

Sondea SOLO comandos de lectura via MCP, calcula el diff entre muestras y escribe un
registro de eventos JSONL con que cambio, cuando y en quien:

```
python tools/engine_monitor.py --interval 5 --duration 120
# salida: state/engine-monitor/<ts>.jsonl (un evento por linea)
```

### Sondas (todas de lectura)

| Ambito | Sondas |
|---|---|
| Global | `game.get_state`, `environment.get_state`, `ui.list_windows` |
| Por miembro del hogar | `stat.get_all`, `emotion.get_current`, `ambition.get`, `hope.list`, `career.get_work_status`, `relationships.list` (hogar via `household.get_members`) |

### Formato de evento

```json
{ "ts": "2026-10-21T16:55:19Z", "entity": "Michael.27978", "probe": "emotion_get_current",
  "changes": { "emotion_type": ["Funny", "Touched"] } }
```

Las listas de dicts se difieren por su clave identificadora (`[target_id=18586].stats.Friendship.value`),
asi el evento dice QUE elemento cambio, no la lista entera. La primera muestra se guarda
completa como estado inicial de la sesion.

### Hallazgos reales de la sesion de prueba (hogar de 3 Zois, 120 s, intervalo 5 s)

- **Motor de emociones**: transiciones espontaneas registradas (`Funny -> Touched`,
  `Funny -> Calm`) — el motor cambia emociones sin interaccion del jugador.
- **Deriva continua de relaciones**: el motor ajusta valores por centesimas en cada tick
  de simulacion (`Family -19.73 -> -19.72` creciendo, decaimientos de `-0.01` generalizados)
  y da SALTOOS al resolver interacciones autonomas (`Friendship 59.76 -> 60.00`, justo el
  umbral de nivel).
- **UI propia del motor**: ventanas toast aparecen/desaparecen (`WBP_ToastMessage_C_*`);
  `ui_list_windows` las captura como eventos.
- **Reloj de juego**: `environment.get_state` avanza ~3 min de juego por muestra de 5 s reales.
- Con necesidades cubiertas por cheats, `stat.get_all` apenas genera eventos: el motor
  deja de "pensar" en necesidades y el resto de sistemas (emocion, relaciones) sigue vivo.

### Latencia y paralelismo (medido en vivo)

- Cada `tools/call` al inzoi-game cuesta **~2.1 s fijos** (puenteo al hilo del juego), sea
  cual sea el comando.
- El servidor MCP **atiende llamadas concurrentes**: 12+ sondas en paralelo completan en
  el mismo ~2 s. El monitor usa un pool de hilos: una muestra completa de 3 Zois tarda ~3 s.
- OJO con el cliente: `tools/mcp_client.py` validaba la sesion con un `tools/list` previo
  en CADA llamada (otros 2 s); ya corregido (validacion diferida, re-init solo en 404).

### Hallazgos reales de la sesion larga (2 h, intervalo 10 s, hogar de 3 Zois, 0 huecos)

Registro: `state/engine-monitor/sesion-larga-20261021.jsonl` (3.809 lineas, 3.087 eventos
utiles, 11 snapshots de estado completo). Lo que el motor hizo SOLO en 2 horas:

- **Emociones: 114 transiciones de tipo** (lina 50, lara 33, Michael 31): Touched→Calm→
  Convinced→Uncomfortable→Curious→Excited... el motor emocional no para.
- **Esperanzas: 25 eventos de seleccion/rotacion autonoma**, y revelan el GENERADOR DE
  HISTORIAS del motor: `Hope_Cold_TakeMed` (a Michael le dio un resfriado),
  `Hope_FoodPoisoning_Treat` (lara se intoxico), `Hope_Season_ChangeWarmClothes` (cambio
  de estacion), `Trait_Active_DrinkProtein` y `Trait_Activist_Speech` (por RASGO del
  caracter), `Hope_Parent_MimicCharacter`, `Hope_Child_Kiss` (roles familiares),
  `Hope_SpendMoney`, `Hope_Publishing_Royalty`, `Ambition_PropertyLottery` (empatada con
  la ambicion "Property" activa del Zoi).
- **UI narrativa del motor**: `game.get_state` capturo `DramaPopup` (18:06 y 19:32 — el
  motor DISPARA DRAMAS solo) y `ChoiceCardPopup` (18:14 — tarjetas de eleccion), ademas
  de flujos de coop/handover (`CoopSelect`, `SelectHandOver`) y loading.
- **Movilidad autonoma**: los Zois se movieron solos entre localizaciones del parque
  central (jardin, fuente, instalaciones deportivas) y Junghwa Parkville.
- Con necesidades cubiertas por cheats: 331 eventos de stats (movimientos menores), el
  resto de sistemas corrio con normalidad.

Lectura para el director: el motor YA escribe guion (dramas, elecciones, esperanzas por
condicion/estacion/rasgo); el director puede leer esas mismas senales (`hope.list`,
`game.get_state.blocking.pause_reasons`, emociones) y decidir con que criterios intervenir
(`ambition.play`, `hope.select`) o dejar correr.

## Enfoque 2 (para el director en vivo): sondas Lua por eventos

Dentro de un mod, `inzoi.event.on(nombre, handler)` recibe los eventos del motor en el
momento en que ocurren (sin latencia de sondeo). Nombres confirmados con codigo real:

| Evento | Evidencia |
|---|---|
| `zoi.married` | payload con `entity_id`/`partner_entity_id` (mod PregnancySurprise) |
| `interaction.started` | payload con `interaction_bag_id`/`entity_id` (mod de menu radial) |
| cambios de emocion | receta integrada "Emotion Logger" (binding Zoi) |
| clima | receta integrada "Weather Notifier" (binding Manager) |

El catalogo (`modkit_list_lua_api_catalog`) expone el namespace `inzoi.*` (`cli.execute`,
`entity.*`, `event.on/off`, `message.send*`, `getB2Manager`, `getB2Subsystem`) y los 6
callbacks de ciclo de vida (`on_begin`, `on_tick`, `on_end`, `on_lua_message`, `on_savegame`,
`on_loadgame`), pero NO cataloga los nombres de evento: se descubren empiricamente
(escuchar y registrar, como hace LuaCallbackProbe).

### Patron recomendado para el director: grabadora Lua

Un script B2 (binding Zoi o Manager) que escuche los eventos conocidos y LOGUEE payload
completo a un archivo del workspace (via `modkit_write_file` o persistencia propia),
corriendo junto al sondeo externo: el externo documenta el estado periodico; el Lua
documenta los disparos exactos. Cruzar ambos registros = guion exacto de lo que el motor
hizo y por que.

## Como alimenta esto al director de guiones

1. **Fase de observacion** (este documento): grabar sesiones largas (60+ min) con el
   monitor y clasificar eventos: que dispara cambios de emocion, como decaen/crecen las
   relaciones, cuando el motor genera esperanzas, que abre ventanas.
2. **Fase de modelado**: reglas del director (`ideas-y-plan.md`, Fase 2): reglas
   declarativas sobre el estado observado (ambicion activa, esperanzas, carrera, relaciones).
3. **Fase de accion**: las acciones reversibles del director (`ambition.play guard=true`,
   `hope.select`, ajustes de relaciones) ya estan mapeadas en el plan de ideas; las
   permanentes requieren confirmacion (regla de diseno del plan).
4. El JSONL es analizable offline (pandas/jq) para extraer los umbrales reales del motor
   (p.ej. cada cuanto salta de nivel una relacion, cadencia de emociones por rasgo).

## Reglas

- El monitor NO escribe estado: solo lectura. Los cambios permanentes del futuro director
  requieren confirmacion (regla del plan de ideas).
- Cada llamada MCP tarda ~2 s: para el director EN VIVO preferir eventos Lua; el sondeo
  queda para observacion offline y diagnostico.
- Las sesiones de grabacion viven en `state/engine-monitor/` (no indexar en el corpus:
  datos de partida, no documentacion).
