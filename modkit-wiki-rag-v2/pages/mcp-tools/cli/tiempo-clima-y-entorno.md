---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
tools: [environment_get_time, environment_override_weather, environment_apocalypse, environment_reset_karma, disaster_list, weather_list, environment_control_disaster, environment_control_weather, environment_set_season_length, environment_change_season, environment_set_time, environment_time_skip, environment_resume, environment_pause, environment_time_speed, environment_get_simulation, environment_get_state]
wiki_refs: [pages/wiki/cli/disaster/disaster-list.md, pages/wiki/cli/environment/environment-apocalypse.md, pages/wiki/cli/environment/environment-change-season.md, pages/wiki/cli/environment/environment-control-disaster.md, pages/wiki/cli/environment/environment-control-weather.md, pages/wiki/cli/environment/environment-get-simulation.md, pages/wiki/cli/environment/environment-get-state.md, pages/wiki/cli/environment/environment-get-time.md, pages/wiki/cli/environment/environment-pause.md, pages/wiki/cli/environment/environment-reset-karma.md, pages/wiki/cli/environment/environment-resume.md, pages/wiki/cli/environment/environment-set-season-length.md, pages/wiki/cli/environment/environment-set-time.md, pages/wiki/cli/environment/environment-time-skip.md, pages/wiki/cli/environment/environment-time-speed.md, pages/wiki/cli/weather/weather-list.md]
---

## Tiempo, clima y entorno

17 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** weather and environment: make it rain or set any weather (weather.list ids, environment.control_weather/override_weather), read current weather, time of day and season.

Nota: para hacer que llueva u otro clima concreto, weather.list lista los ids de clima disponibles y environment.control_weather / environment.override_weather los aplican; environment.get_state devuelve el clima actual.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| environment_get_time | `environment.get_time()` | Devuelve la hora actual del juego (hora, minuto, dia). | [CLI: environment.get_time] Returns the current in-game time (hour, minute, day). Runs locally on B1. | wiki: Returns a JSON object with the following fields: | consultivo |
| environment_override_weather | `environment.override_weather(Weather, Step)` | Sobrescribe temporalmente el clima actual por id y paso. | [CLI: environment.override_weather] Temporarily overrides current weather by id and step. | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | activo |
| environment_apocalypse | `environment.apocalypse()` | Ejecuta la trampa mundial del apocalipsis. | [CLI: environment.apocalypse] Runs the apocalypse world cheat. | no publicitado — completar tras prueba en vivo | activo |
| environment_reset_karma | `environment.reset_karma()` | Resetea el karma del contexto de trampas actual. | [CLI: environment.reset_karma] Resets karma for the current cheat context. | no publicitado — completar tras prueba en vivo | activo |
| disaster_list | `disaster.list()` | Devuelve todos los ids de desastres disponibles con nombres localizados. | [CLI: disaster.list] Returns all available disaster IDs with localized names. | wiki: Returns a JSON object with the following fields: | consultivo |
| weather_list | `weather.list()` | Devuelve todos los ids de clima normal disponibles con nombres localizados. | [CLI: weather.list] Returns all available normal weather IDs with localized names. | wiki: Returns a JSON object with the following fields: | consultivo |
| environment_control_disaster | `environment.control_disaster(disaster)` | Dispara o controla un desastre por id. | [CLI: environment.control_disaster] Triggers or controls a disaster by id. | no publicitado — completar tras prueba en vivo | activo |
| environment_control_weather | `environment.control_weather(Weather, Step)` | Avanza o ajusta el clima por tipo y paso. | [CLI: environment.control_weather] Advances or adjusts weather by type and step. | no publicitado — completar tras prueba en vivo | activo |
| environment_set_season_length | `environment.set_season_length(Length)` | Fija cuantos dias dura cada estacion. | [CLI: environment.set_season_length] Sets how many days each season lasts. Allowed values: 7, 14, 21, 28. | no publicitado — completar tras prueba en vivo | activo |
| environment_change_season | `environment.change_season(Season)` | Cambia el mundo a la estacion indicada. | [CLI: environment.change_season] Switches the world to the named season. | no publicitado — completar tras prueba en vivo | activo |
| environment_set_time | `environment.set_time(Day, Hour, Minute, allow_rewind)` | Salta a una hora concreta del juego; con solo hora/minuto avanza ese dia. | [CLI: environment.set_time] Jumps to a specific in-game time. With only hour/minute it moves to the next occurrence (forward). With 'day' it jumps to that absolute in-game day index (see environment.get_state). | no publicitado — completar tras prueba en vivo | activo |
| environment_time_skip | `environment.time_skip(Days, Hours, Minutes)` | Salta el tiempo de juego hacia adelante por dias/horas/minutos. | [CLI: environment.time_skip] Skips game time forward by the given days/hours/minutes. | no publicitado — completar tras prueba en vivo | activo |
| environment_resume | `environment.resume()` | Reanuda la simulacion (comodin de environment.pause). | [CLI: environment.resume] Resumes the game simulation. Convenience for environment.pause enable=false. | no publicitado — completar tras prueba en vivo | activo |
| environment_pause | `environment.pause(Enable)` | Pausa (sin argumento) o reanuda la simulacion conservando la velocidad. | [CLI: environment.pause] Pauses (no argument) or resumes the game simulation while preserving current time speed. Use enable=false to resume. | no publicitado — completar tras prueba en vivo | activo |
| environment_time_speed | `environment.time_speed(Speed)` | Fija el multiplicador global de velocidad del tiempo. | [CLI: environment.time_speed] Sets the global time speed multiplier. | no publicitado — completar tras prueba en vivo | activo |
| environment_get_simulation | `environment.get_simulation()` | Devuelve el estado de simulacion de tiempo: velocidad, pausa, reloj. | [CLI: environment.get_simulation] Returns time simulation state: speed, pause status, real-seconds-per-game-minute ratio. | wiki: Returns a JSON object with the following fields: | consultivo |
| environment_get_state | `environment.get_state()` | Devuelve el estado del entorno: hora, dia de la semana y clima. | [CLI: environment.get_state] Returns current in-game environment state: time, day of week, season, weather, temperature, disaster, calendar event. | wiki: Returns a JSON object with the following fields: | consultivo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/disaster/disaster-list.md](pages/wiki/cli/disaster/disaster-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/disaster/disaster-list
- [pages/wiki/cli/environment/environment-apocalypse.md](pages/wiki/cli/environment/environment-apocalypse.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-apocalypse
- [pages/wiki/cli/environment/environment-change-season.md](pages/wiki/cli/environment/environment-change-season.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-change-season
- [pages/wiki/cli/environment/environment-control-disaster.md](pages/wiki/cli/environment/environment-control-disaster.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-disaster
- [pages/wiki/cli/environment/environment-control-weather.md](pages/wiki/cli/environment/environment-control-weather.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-weather
- [pages/wiki/cli/environment/environment-get-simulation.md](pages/wiki/cli/environment/environment-get-simulation.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-simulation
- [pages/wiki/cli/environment/environment-get-state.md](pages/wiki/cli/environment/environment-get-state.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-state
- [pages/wiki/cli/environment/environment-get-time.md](pages/wiki/cli/environment/environment-get-time.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-time
- [pages/wiki/cli/environment/environment-pause.md](pages/wiki/cli/environment/environment-pause.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-pause
- [pages/wiki/cli/environment/environment-reset-karma.md](pages/wiki/cli/environment/environment-reset-karma.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-reset-karma
- [pages/wiki/cli/environment/environment-resume.md](pages/wiki/cli/environment/environment-resume.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-resume
- [pages/wiki/cli/environment/environment-set-season-length.md](pages/wiki/cli/environment/environment-set-season-length.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-season-length
- [pages/wiki/cli/environment/environment-set-time.md](pages/wiki/cli/environment/environment-set-time.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-time
- [pages/wiki/cli/environment/environment-time-skip.md](pages/wiki/cli/environment/environment-time-skip.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-time-skip
- [pages/wiki/cli/environment/environment-time-speed.md](pages/wiki/cli/environment/environment-time-speed.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-time-speed
- [pages/wiki/cli/weather/weather-list.md](pages/wiki/cli/weather/weather-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/weather/weather-list
