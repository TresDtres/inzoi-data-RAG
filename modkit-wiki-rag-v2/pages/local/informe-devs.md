---
source: local
title: "Informe para devs: comportamientos no documentados y gaps (verificacion en vivo 2026-10-09)"
generado: 2026-10-09
---

# Informe para devs — comportamientos no documentados y gaps

Hallazgos de la verificación en vivo (ver [verificaciones-2026-10-09.md](verificaciones-2026-10-09.md) para payloads, retornos y errores literales), ordenados por severidad. Todos fueron verificados contra el juego real; el volcado MCP y la wiki oficial son la línea base documentada.

Severidades:
- **gap de funcionalidad** — algo que un usuario o un agente MCP necesitaría y no existe en ninguna superficie del juego.
- **comportamiento distinto al documentado** — el volcado o la wiki oficial declara una cosa y el juego hace otra.
- **comportamiento condicional sin documentar** — el comportamiento depende de un estado no documentado (p. ej. cheats activados); no es bug.
- **superficie no reflejada** — funcionalidad existente en vivo que el volcado MCP no documenta.

## Gap de funcionalidad

1. **Getter del dinero del hogar.** No existe ruta de lectura del saldo del hogar en ninguna superficie: sin cheats (V7) ni con cheats activados (V17, Psycat's Advice → Enable Cheats): `data.table_get` responde `Unknown DataTable alias: 'Household'` en ambas condiciones; las 389 DataTables no contienen tabla de balance (Currency/CurrencyExchange son solo tipos de moneda: Zen, CatShopPoint, Mew, Nyang, Ong, ResortCoin); `household.list` no expone dinero; `stat.get_all` no incluye stat de dinero; `currency.add_money` (que los cheats sí desbloquean) responde con retorno vacío, sin readback. Mitigacion parcial (V18): el saldo SI es legible por programa desde la UI — el widget numerico del HUD responde a `ui_find {"Window": "Hud", "Role": "text"}` — y `currency.add_money` esta verificado como funcional (49.673 -> 99.673 -> 149.673, HUD actualizado en <4 s). Sigue sin haber getter CLI ni retorno con readback, y se observo una caida silenciosa (ok con retorno vacio pero sin efecto), asi que cualquier aplicacion critica de dinero debe verificarse releyendo el widget del HUD.

## Comportamiento distinto al documentado

2. **`game_continue` carga el manual más reciente, no el autosave** (V11) — contradice la descripción del volcado ("AutoSave slots included").
3. **`game_cancel_flow` no hace rollback** (V12) — deja la partida a mitad del flujo; el propio retorno lo advierte y recomienda `game.goto_lobby`.
4. **Shapes de SmartBuild no sobreviven a un ciclo lobby→load sin guardado** (V13) — desaparecen de la lista de shapes rastreadas.
5. **`modkit_delete_project` deja residuos en disco** (~7 MB: patches, POs, Meta/, .uplugin; V15) — requiere limpieza manual.

## Comportamiento condicional sin documentar

6. **`currency.add_money` / `add_meow_coin` / `add_resort_coin` son UserCheat** (V17) — con cheats activados se ejecutan con éxito y retorno vacío; sin cheats activados se espera rechazo por nivel de acceso (no verificado en vivo; el acceso UserCheat lo declara `cli_help`). V18: currency.add_money verificado FUNCIONAL con oráculo HUD (suma exacta y persistente, HUD actualizado en <4 s), con una caída silenciosa observada en la misma sesión: una ejecución aceptada (ok, retorno vacío) no aplicó. El retorno vacío no distingue éxito de drop.
7. **`household_biz_*` requiere un negocio existente** (V16, reconfirmado con cheats en V17) — sin negocio: `Could not resolve household_biz_id (not specified, and possessed character neither manages nor is located at a business)`; la creación solo es posible por el flujo normal del juego.
8. **El catálogo CLI no cambia con cheats** (V17) — 405 comandos con cheats on y off; los cheats relajan el nivel de acceso, no añaden comandos. Literal de registro: "408 commands registered, 405 exposed as MCP tools" (3 comandos registrados no expuestos).

## Superficie no reflejada en el volcado

9. **`stat_get_all` devuelve las necesidades con nombres localizados** (V6, reconfirmado en V17) — el volcado no documenta getter de necesidades.
10. **POs auto-generados al crear el workspace Language** (V9) — el paso manual de generación inicial no existe.
11. **61 recursos MCP auto-generados** en inzoi-modkit (V10) — 19 workspace-docs, 29 datatable-docs, 17 data-asset-schemas; superficie documental completa no reflejada en las fichas.
12. **Diagnósticos en disco, no logs de texto** (V8) — Saved/Logs vacío en build Shipping; el diagnóstico real está en `Saved/Diagnostics/UnofficialModEnvironment.json` y `Saved/BlueLuaKit/<mod>/lua_diagnostics.json`.
13. **Archivos extra en mods Lua** (V14) — `lua/.luarc.json` y `lua/AGENTS.md` generados por el scaffold sin documentar.
14. **`smartbuild_import_and_place_mesh` es asíncrono sin estado consultable** (V13) — responde `import_started` y no hay comando para consultar el estado final.
