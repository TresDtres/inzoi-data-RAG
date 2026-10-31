---
source: local
title: "QA feedback for the development team: undocumented behaviors and gaps (live verification, 2026-10-09)"
generado: 2026-10-09
---

# QA Report - Undocumented Behaviors and Gaps

Beta-tester feedback from live verification against a running inZOI instance. The game CLI and the official ModKit
wiki are the documented baseline; every item below was executed live. Payloads, returns and error messages are
literal. Spanish version of this report: [informe-devs.md](informe-devs.md).

## Context

- Game: inZOI live instance, UE 5.6.1 Shipping build, test save ("test agenda", Gangnam_Map, autosave slot
  20260827-123845_AutoSave_3).
- Cheats: enabled through Psycat's Advice (Enable Cheats) unless stated otherwise.
- Access: the game CLI is exposed as 405 MCP tools on the inzoi-game MCP server; the ModKit editor through the
  inzoi-modkit MCP server.
- Method: every step was executed against the live game and recorded; we did not modify any pre-existing game
  data, and all test artifacts were removed afterwards.

## Functional gap (highest severity)

**FG-1. No getter for the household money balance.** We searched every readable surface; no command returns the
household balance, with cheats OFF and with cheats ON.

- Repro / evidence, cheats OFF (baseline session) and cheats ON (same save, identical results):
  - `data_table_get {"Alias": "Household", "Row": "16972"}` -> `Unknown DataTable alias: 'Household'`
  - Same with lowercase `household`. With an empty alias -> `'alias' parameter is required`.
  - `data_list_tables {}` -> 389 DataTables; none holds a balance. `Currency` and `CurrencyExchange` only define
    currency types (`Zen`, `CatShopPoint`, `Mew`, `Nyang`, `Ong`, `ResortCoin`); row `Zen` is nameTextId, icon
    and color data.
  - `household_list {}` -> household_id, name, member_count, residence; no money field.
  - `stat_get_all {}` -> needs only; there is no money stat.
  - `currency_add_money {"Amount": 50000}` -> `ok: true`, empty return, no readback of the new balance.
- Lateral finding while probing: the unknown-tool error reports `The CLI registry is ready (408 commands
  registered, 405 exposed as MCP tools)`.
- Partial mitigation we identified: the balance IS readable programmatically from the HUD through
  `ui_find {"Window": "Hud", "Role": "text"}` (the numeric widget), and `currency_add_money` is verified
  working (49 673 -> 99 673 -> 149 673; HUD updated in under 4 seconds). See A-5 for a silent drop observed with
  this same command.
- Expected: a getter command, or a readback in the write command. Observed: neither, on any surface.

## Section A - Likely bugs

**A-1. `game_continue` loads the most recent MANUAL save, not the autosave.**
- Repro: from lobby, with a manual save (01:45) older than an autosave (02:03), run `game_continue {}`.
- Return: `{"accepted": true, "folder": "20260817-105104", "file": "20260817-105104", "slot": "tresdtres_li"}` -
  the manual save wins; the possessed Zoi changed to the one saved in that slot.
- Expected (documented): "Loads the most recently saved (by saved_time) non-broken save. AutoSave slots included."
- Observed: the manual save is loaded and the autosave is ignored.

**A-2. `game_cancel_flow` does not roll the game back.**
- Repro: `game_new_game {}` -> `{"accepted": true, "step": "click_new_game", "map_id": "Gangnam_Map"}`, then
  immediately `game_cancel_flow {}`.
- Return literal: `New game flow cancelled. The game is NOT rolled back - it is left wherever the flow stopped.
  Use game.goto_lobby to reset, or game.new_game force=true...` plus `{"cancelled": true, "step": "cancelled"}`;
  resulting phase: `character_customize`.
- Expected: the game returns to its previous state. Observed: the game stays mid-flow (the return text states
  this, so it may be intended behavior - flagged for confirmation).

**A-3. SmartBuild shapes do not survive a lobby-to-load cycle without saving.**
- Repro: `smartbuild_shape {"action": "spawn", ...}` -> `1 shape(s) tracked`; then `game_goto_lobby {}` ->
  `game_load {"Folder": "20260827-123845", "File": "20260827-123845_AutoSave_3"}` with no save in between;
  `smartbuild_shape {"action": "list"}` -> `0 shape(s) tracked`.
- Expected: shapes persist for the session, or a documented warning. Observed: silent disappearance.

**A-4. `modkit_delete_project` leaves residue on disk.**
- Repro: create a test project, then run `modkit_delete_project {"plugin": "MCPVerifyTest_B157D908"}` ->
  `Success`.
- Observed: the project folder remains on disk (~7 MB: autosave patches, generated PO files, Meta/, .uplugin).
  Manual deletion was required.
- Expected: the project folder is removed by the delete operation.

**A-5. `currency_add_money` accepts a call silently without applying it.**
- Repro: with Enable Cheats active, two identical runs of `currency_add_money {"Amount": 50000}` in the same
  session, balance read through the HUD widget before and after each run.
- Observed: first run -> `ok: true`, empty return, balance unchanged (49 673); second run, minutes later,
  identical payload -> balance 49 673 -> 99 673, persistent. We could not determine what differed between the
  two calls.
- Expected: deterministic effect, or an error when the command is not applied. Observed: the empty return cannot
  distinguish success from a silent drop.
- Related: `cli_help {"command": "currency.add_money"}` reports `Access: UserCheat, Scope: B2Authority`, aliases
  `AddMoney`, `economy.add_money`; `currency.add_meow_coin` and `currency.add_resort_coin` follow the same
  pattern. With Enable Cheats the commands execute; the requirement is not documented.

## Section B - Documentation gaps

**B-1. `household_biz_*` commands require an existing business.** Without one, every command in the family
returns `Could not resolve household_biz_id (not specified, and possessed character neither manages nor is
located at a business)` - verified with cheats OFF and ON. Business creation is not possible via CLI; templates
available in HouseholdBizTemplate: Bakery_Default, Cafe_Default, FitnessCenter_Default, PCCafe_Default,
Restaurant_Default, PremiumRestaurant_Default, Club_Default, Lounge_Default, FlowerShop_Default,
HairSalon_Default, ClothStore_Default, Accommodation_Default. Also: `data_list_rows` requires `Alias` (`Missing
required parameter 'Alias'. Usage: data.list_rows <Alias:string> <Row:string>`).

**B-2. The CLI catalog does not change with cheats.** `cli_list {}` returns 405 commands with cheats on and
off; cheats relax the access level, they do not add commands. Registry literal: `408 commands registered, 405
exposed as MCP tools`.

**B-3. `stat_get_all` returns the needs with localized names.** Return includes
`{"_type": "FB2StatComponent", "stats": {...}, "no_decay": false, "stat_names": {"Hunger": "Hambre", ...}}`;
the `no_decay` flag also exposes the `stat.freeze` state. The dump documents no needs getter.

**B-4. PO files are auto-generated when a Language workspace is created.** After `modkit_add_workspace` with
`book_class: Language`, `modkit_list_translation_files` already returns the master and working PO files; the
manual initial-generation step does not exist. The response includes an undocumented `target_enabled_in_game`
field.

**B-5. 61 auto-generated MCP resources on the ModKit server.** 19 `modkit://workspace-docs/*` (including
texture_rules and material_rules), 29 `modkit://datatable-docs/*`, 17 `modkit://data-asset-schemas/*`. This is a
complete documentation surface not announced anywhere.

**B-6. Diagnostics are written to disk files, not text logs.** In the Shipping build `Saved/Logs` is empty (no
BlueClient.log); the working diagnostics are `Saved/Diagnostics/UnofficialModEnvironment.json` (mods-environment
check written by the game) and `Saved/BlueLuaKit/<mod>/lua_diagnostics.json` plus `lua_layout.json` per Lua mod.

**B-7. Lua mods include undocumented extra files.** `luamod_scaffold` generates `lua/.luarc.json` and
`lua/AGENTS.md` in addition to the documented manifest and scripts.

## Section C - Design questions

**C-1. `smartbuild_import_and_place_mesh` is asynchronous with no queryable final state.** A .glb import
returns `import_started`; no CLI command reports whether the import finished. Question: should an import-status
command exist? Related question from FG-1/A-5: should currency commands return the new balance so that write
operations are verifiable without reading the HUD?

## Annex 1 - 104 CLI commands with no wiki page

These commands exist in the live CLI registry but have no dedicated page in the official wiki; the tool dump is
their only documentation. Names below are the MCP tool names (CLI ids with dots replaced by underscores).

appearance_set_aptitudes, asset_get, asset_preview, asset_search, build_enter_mode, build_exit_mode,
build_get_mode_state, build_get_site_info, building_change_floor_view, building_construct_room, building_construct_wall, building_copy_object,
building_destroy_all_objects, building_get_history, building_move_object, building_place_object, building_put_in_inventory, building_redo,
building_reset_site_to_default, building_reset_site_to_last_saved, building_set_floor_view, building_set_light_cast_shadow, building_set_storey_wall_height, building_undo,
camera_get_view, crime_get_status, environment_override_weather, game_cancel_flow, game_continue, game_exit_map_view,
game_get_state, game_goto_lobby, game_list_move_in_sites, game_list_saves, game_load, game_move_in,
game_new_game, growth_unlock_toddler_walk, household_biz_can_start_day_business, household_biz_create_accommodation_booking, household_biz_depart_employee, household_biz_extend_accommodation_booking,
household_biz_find_assigned_table_for_eater, household_biz_finish_accommodation_booking, household_biz_fire_employee, household_biz_get_all_restaurant_tables, household_biz_get_customer_activities, household_biz_get_customer_diagnostics,
household_biz_get_customer_party, household_biz_get_customers, household_biz_get_employee_activities, household_biz_get_info, household_biz_get_max_table_capacity, household_biz_get_order_tickets,
household_biz_get_purchase_desire, household_biz_get_remain_time, household_biz_get_restaurant_cleanup_queue, household_biz_get_restaurant_dish_batches, household_biz_get_restaurant_task_status, household_biz_get_table_capacity,
household_biz_get_tip_amount, household_biz_hire_employee, household_biz_is_operating, household_biz_list_employees, household_biz_set_business_template, household_biz_set_customer_activities,
household_biz_set_employee_activities, household_biz_set_entrance_fee_type, household_biz_set_level, household_biz_set_price_policy_type, household_biz_set_purchase_payment_method, household_biz_set_work_days,
household_biz_set_work_time, household_biz_settle_tips, household_biz_should_end_day_business, household_biz_spawn_random_employee, interaction_set_reward, luamod_mount,
luamod_remount, luamod_unmount, photoframe_create_in_bag, pose_clear, pose_get, pose_list_bones,
pose_set_bone, screenshot_capture, screenshot_get_last, smartzoi_consume_no_action_result, smartzoi_enqueue_composite_coop_result, smartzoi_request_query_slm,
system_get_info, system_get_paths, ui_click, ui_click_popup_button, ui_close_cat_talk, ui_close_coach_mark,
ui_dismiss, ui_find, ui_get_blocking, ui_get_node, ui_get_tree, ui_list_windows,
ui_scroll, visual_active_mode

## Annex 2 - 104 commands marked EXPERIMENTAL in the live catalog

`cli_list` marks 104 commands as `experimental: true` (52 of them with a wiki page, 52 without). Names below are
the CLI ids as reported by the catalog.

appearance.beard, appearance.eyebrow, appearance.glasses, appearance.gloves, appearance.hair, appearance.hat,
appearance.jacket, appearance.mustache, appearance.scan_garments, appearance.scar, appearance.scarf, appearance.set_body_mass,
appearance.set_body_shape, appearance.set_face_shape, appearance.set_garment_color, appearance.set_garment_texture, appearance.set_muscle, appearance.set_skin_color,
appearance.shoes, appearance.socks, asset.get, asset.preview, asset.search, autonomy.diagnose_interaction,
build.enter_mode, build.exit_mode, build.get_customize_info, build.get_mode_state, build.get_site_info, build.remove_object,
build.reset_material, build.scan_floors, build.scan_objects, build.scan_walls, build.set_color, build.set_floor_color,
build.set_floor_material, build.set_material, build.set_object_material, build.set_wall_color, build.set_wall_material, building.change_floor_view,
building.construct_room, building.construct_wall, building.copy_object, building.destroy_all_objects, building.get_history, building.move_object,
building.place_object, building.put_in_inventory, building.redo, building.reset_site_to_default, building.reset_site_to_last_saved, building.set_floor_view,
building.set_light_cast_shadow, building.set_storey_wall_height, building.undo, camera.get_view, game.cancel_flow, game.continue,
game.exit_map_view, game.get_state, game.goto_lobby, game.list_move_in_sites, game.list_saves, game.load,
game.move_in, game.new_game, graphics.set_cvar, pose.clear, pose.get, pose.list_bones,
pose.set_bone, schedule.diagnose, screenshot.capture, screenshot.get_last, smartbuild.import_and_place_mesh, smartbuild.pick_surface_at_screen,
smartbuild.preview_clear, smartbuild.preview_commit, smartbuild.preview_floor, smartbuild.preview_object, smartbuild.preview_room_walls, smartbuild.preview_wall,
smartbuild.set_floor_texture, smartbuild.set_object_texture, smartbuild.set_wall_texture, smartbuild.shape, system.get_paths, ui.click,
ui.click_popup_button, ui.close_cat_talk, ui.close_coach_mark, ui.dismiss, ui.find, ui.get_blocking,
ui.get_node, ui.get_tree, ui.list_windows, ui.scroll, view.clear_filter, view.get_filter,
view.list_filters, view.set_filter
