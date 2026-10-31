---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
tools: [curseforge_upload_mod_file, curseforge_logout, curseforge_verify_code, curseforge_send_code, curseforge_auth_status]
wiki_refs: [pages/wiki/cli/curseforge/curseforge-auth-status.md, pages/wiki/cli/curseforge/curseforge-logout.md, pages/wiki/cli/curseforge/curseforge-send-code.md, pages/wiki/cli/curseforge/curseforge-upload-mod-file.md, pages/wiki/cli/curseforge/curseforge-verify-code.md]
---

## Publicacion en CurseForge

5 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** publishing to CurseForge: CLI commands for the game's sharing/UGC flow.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| curseforge_upload_mod_file | `curseforge.upload_mod_file(plugin_dir, changelog, Thumbnail, class_id, category_id, class_name, category_name)` | Sube una carpeta de mod a CurseForge leyendo el .uplugin. | [CLI: curseforge.upload_mod_file] Upload a mod folder to CurseForge. Reads the .uplugin to find CfUgcId; if absent, this command first creates the mod entry on CurseForge (requires --thumbnail, --class_id, --category_id), updates the .uplugin with the returned id/url, then proceeds. The plugin folder is zipped via cfcore Compression and uploaded chunked. All progress is reported via toasts. | no publicitado — completar tras prueba en vivo | activo |
| curseforge_logout | `curseforge.logout()` | Cierra la sesion de CurseForge invalidando el token de cfcore. | [CLI: curseforge.logout] Log out from CurseForge by invalidating the current cfcore auth token. Mainly used to reset state before running login-flow tests. Async; result via toast. | no publicitado — completar tras prueba en vivo | activo |
| curseforge_verify_code | `curseforge.verify_code(email, code)` | Verifica el codigo de 6 digitos recibido por correo y obtiene el token. | [CLI: curseforge.verify_code] Verify the 6-digit security code received by email and obtain an auth token. Async; the result is reported via toast. cfcore persists the token internally on success. | no publicitado — completar tras prueba en vivo | consultivo |
| curseforge_send_code | `curseforge.send_code(email)` | Envia un codigo de acceso de 6 digitos al correo indicado (login sin contrasena). | [CLI: curseforge.send_code] Send a 6-digit passwordless login code to the given email. Async; the result (success or error description) is reported via a system toast. | no publicitado — completar tras prueba en vivo | activo |
| curseforge_auth_status | `curseforge.auth_status()` | Devuelve si la sesion cfcore tiene un token de CurseForge valido. | [CLI: curseforge.auth_status] Return whether the current cfcore session holds a valid CurseForge auth token. Synchronous; no toast. | wiki: Returns a JSON object with the following fields: | consultivo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/curseforge/curseforge-auth-status.md](pages/wiki/cli/curseforge/curseforge-auth-status.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-auth-status
- [pages/wiki/cli/curseforge/curseforge-logout.md](pages/wiki/cli/curseforge/curseforge-logout.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-logout
- [pages/wiki/cli/curseforge/curseforge-send-code.md](pages/wiki/cli/curseforge/curseforge-send-code.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-send-code
- [pages/wiki/cli/curseforge/curseforge-upload-mod-file.md](pages/wiki/cli/curseforge/curseforge-upload-mod-file.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-upload-mod-file
- [pages/wiki/cli/curseforge/curseforge-verify-code.md](pages/wiki/cli/curseforge/curseforge-verify-code.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/curseforge/curseforge-verify-code
