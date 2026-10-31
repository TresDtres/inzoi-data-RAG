---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
tools: [uimod_disable, uimod_enable, uimod_list_disabled, uimod_focus, uimod_set_app, uimod_apps, uimod_remount, uimod_unmount, uimod_mount, uimod_unmount_all, uimod_list, uimod_cfg_load, uimod_cfg_save]
wiki_refs: [pages/wiki/cli/uimod/uimod-apps.md, pages/wiki/cli/uimod/uimod-cfg-load.md, pages/wiki/cli/uimod/uimod-cfg-save.md, pages/wiki/cli/uimod/uimod-enable.md, pages/wiki/cli/uimod/uimod-focus.md, pages/wiki/cli/uimod/uimod-list-disabled.md, pages/wiki/cli/uimod/uimod-list.md, pages/wiki/cli/uimod/uimod-mount.md, pages/wiki/cli/uimod/uimod-remount.md, pages/wiki/cli/uimod/uimod-set-app.md, pages/wiki/cli/uimod/uimod-unmount-all.md, pages/wiki/cli/uimod/uimod-unmount.md]
---

## Mods de UI en vivo

13 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** live UI mods: hot-reload a mounted UI mod after editing its files (uimod.remount), list mounted mods (uimod.list).

Nota: tras editar los archivos de un mod de UI montado, uimod.remount lo recarga en caliente (desmonta y vuelve a montar); uimod.list muestra los mods montados.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| uimod_disable | `uimod.disable(Keyword)` | Desmonta un mod UI habilitado encontrado por nombre o nombre visible y persiste bEnable=false. | [CLI: uimod.disable] Finds an enabled UI-only mod by keyword (name or friendly name), unmounts it if mounted, and sets bEnable=false in mod runtime state for persistence. | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | activo |
| uimod_enable | `uimod.enable(Keyword)` | Encuentra un mod UI deshabilitado por palabra clave y lo monta en runtime; persiste bEnable=true. | [CLI: uimod.enable] Finds a disabled UI-only mod by keyword (name or friendly name) and mounts it at runtime. Also sets bEnable=true in mod runtime state for persistence. Use uimod.list_disabled to see available mods. | no publicitado — completar tras prueba en vivo | activo |
| uimod_list_disabled | `uimod.list_disabled()` | Lista los mods UI instalados deshabilitados (bEnable=false). | [CLI: uimod.list_disabled] Lists installed mods that are disabled (bEnable=false) and contain only UI content (no PAK/assets). These can be enabled at runtime via uimod.enable. | wiki: Returns a JSON array; each element is an object with the following fields: | consultivo |
| uimod_focus | `uimod.focus(mod_id)` | Trae la vista de un mod UI al frente del Z-Order para que renderice encima. | [CLI: uimod.focus] Brings a UI mod view to the Z-Order front so it renders above other mod views. | no publicitado — completar tras prueba en vivo | activo |
| uimod_set_app | `uimod.set_app(mod_id, app, Enabled)` | Activa o desactiva una app concreta de un mod multi-app; guarda en uimod_apps.json. | [CLI: uimod.set_app] Enable or disable a specific app in a multi-app mod. Saves to uimod_apps.json and reloads if mounted. | no publicitado — completar tras prueba en vivo | activo |
| uimod_apps | `uimod.apps(mod_id)` | Muestra todas las apps de un mod multi-app con su estado enabled/mounted. | [CLI: uimod.apps] Shows all apps in a multi-app mod with enabled/mounted status. | wiki: Returns a JSON array; each element is an object with the following fields: | consultivo |
| uimod_remount | `uimod.remount(mod_id)` | Desmonta y vuelve a montar un mod UI; usar tras editar sus archivos. | [CLI: uimod.remount] Unmount then re-mount a UI mod from the user mods directory. Use after editing mod files to apply changes. | no publicitado — completar tras prueba en vivo | activo |
| uimod_unmount | `uimod.unmount(mod_id)` | Desmonta un mod UI actualmente montado por mod_id. | [CLI: uimod.unmount] Unmount a currently mounted UI mod by mod_id. | no publicitado — completar tras prueba en vivo | activo |
| uimod_mount | `uimod.mount(mod_id)` | Monta un mod UI desde Documents/inZOI/Mods/{mod_id} (o Mods/InGame/{mod_id}). | [CLI: uimod.mount] Mount a UI mod from the user mods directory ({mod_id} or InGame/{mod_id}). | no publicitado — completar tras prueba en vivo | activo |
| uimod_unmount_all | `uimod.unmount_all()` | Desmonta todos los mods UI montados. | [CLI: uimod.unmount_all] Unmounts every currently mounted UI mod. | no publicitado — completar tras prueba en vivo | activo |
| uimod_list | `uimod.list()` | Devuelve un array JSON de todos los mods UI montados con agrupacion por padre. | [CLI: uimod.list] Returns a JSON array of all currently mounted UI mods with parent grouping. | wiki: Returns a JSON array; each element is an object with the following fields: | consultivo |
| uimod_cfg_load | `uimod.cfg_load(mod_id, Section, Key)` | Carga un valor (o toda una seccion) del directorio cfg del mod. | [CLI: uimod.cfg_load] Loads a value (or all keys in a section) from the mod's cfg directory. | no publicitado — completar tras prueba en vivo | activo |
| uimod_cfg_save | `uimod.cfg_save(mod_id, Section, Key, Value)` | Guarda un valor en un archivo del directorio cfg del mod. | [CLI: uimod.cfg_save] Saves a value to a file under the mod's cfg directory. | no publicitado — completar tras prueba en vivo | activo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/uimod/uimod-apps.md](pages/wiki/cli/uimod/uimod-apps.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps
- [pages/wiki/cli/uimod/uimod-cfg-load.md](pages/wiki/cli/uimod/uimod-cfg-load.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load
- [pages/wiki/cli/uimod/uimod-cfg-save.md](pages/wiki/cli/uimod/uimod-cfg-save.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save
- [pages/wiki/cli/uimod/uimod-enable.md](pages/wiki/cli/uimod/uimod-enable.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable
- [pages/wiki/cli/uimod/uimod-focus.md](pages/wiki/cli/uimod/uimod-focus.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus
- [pages/wiki/cli/uimod/uimod-list-disabled.md](pages/wiki/cli/uimod/uimod-list-disabled.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled
- [pages/wiki/cli/uimod/uimod-list.md](pages/wiki/cli/uimod/uimod-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list
- [pages/wiki/cli/uimod/uimod-mount.md](pages/wiki/cli/uimod/uimod-mount.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount
- [pages/wiki/cli/uimod/uimod-remount.md](pages/wiki/cli/uimod/uimod-remount.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount
- [pages/wiki/cli/uimod/uimod-set-app.md](pages/wiki/cli/uimod/uimod-set-app.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app
- [pages/wiki/cli/uimod/uimod-unmount-all.md](pages/wiki/cli/uimod/uimod-unmount-all.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all
- [pages/wiki/cli/uimod/uimod-unmount.md](pages/wiki/cli/uimod/uimod-unmount.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount
