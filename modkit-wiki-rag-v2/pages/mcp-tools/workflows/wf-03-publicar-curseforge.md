---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_validate_workspace, modkit_save, modkit_package, modkit_open_cf_upload, modkit_cf_status, modkit_cf_get_mod_description, modkit_cf_logout, modkit_cf_send_code, modkit_cf_verify_code, modkit_cf_list_my_mods, modkit_cf_get_categories, modkit_cf_create_mod, modkit_cf_update_uplugin, modkit_cf_publish, modkit_cf_upload_mod_file, modkit_cf_get_mod_info]
wiki_refs: [pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-03: Empaquetar y publicar un mod en CurseForge (con verificacion)

**Objetivo:** llevar un mod terminado del editor del ModKit a su pagina publica en CurseForge, verificando cada resultado intermedio.
**EN:** publish a finished mod from the ModKit editor to its CurseForge page (login with email one-time code, thumbnail, changelog), verifying each step.
**Nivel:** intermedio
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_validate_workspace` (inzoi-modkit) — el mod debe estar listo: sin campos requeridos vacios ni problemas de formato. Si falla: usar `modkit_inspect_workspace` para ver los campos concretos.
2. `modkit_save` (inzoi-modkit) — guarda el estado final antes de empaquetar.
3. `modkit_package` (inzoi-modkit) — empaqueta localmente. Asincrono: devuelve 'packaging_started' inmediatamente. Resultado esperado: notificacion de empaquetado completado en el editor. Si no llega: no continuar; el volcado indica que la finalizacion se observa en el area de notificaciones.
4. `modkit_cf_status` (inzoi-modkit) — estado de cfcore y autenticacion. Resultado esperado: { authenticated: true }. Si authenticated=false, pasos 5-6; si ya esta autenticado, saltar al 7.
5. `modkit_cf_send_code` (inzoi-modkit) — envia el OTP de 6 digitos al correo de CurseForge. Resultado esperado: status 'code_sent'; el usuario lee el codigo en su buzon.
6. `modkit_cf_verify_code` (inzoi-modkit) — verifica el OTP; cfcore guarda el JWT (persiste entre reinicios del editor). Si falla: 'GenerateAuthToken failed' (codigo incorrecto/caducado/email distinto) — repetir desde el paso 5.
7. `modkit_cf_list_my_mods` (inzoi-modkit) — verificacion: el mod NO debe existir ya. Resultado esperado: lista sin el nombre del mod. Si ya existe: usar ese mod_id en lugar de crear.
8. `modkit_cf_get_categories` (inzoi-modkit) — categorias validas para primary_category_id / game_category_ids.
9. `modkit_cf_create_mod` (inzoi-modkit) — registra el mod. Resultado esperado: informacion del mod, especialmente su id.
10. `modkit_cf_update_uplugin` (inzoi-modkit) — escribe CfUgcId y URL de marketplace en el .uplugin para que las subidas se asocien al mismo mod.
11. Publicacion:
    a. Ruta automatica: `modkit_cf_publish` — encadena modkit_package - zip - modkit_cf_upload_mod_file en una llamada.
    b. Ruta manual: `modkit_cf_upload_mod_file` con el zip ya construido, o `modkit_open_cf_upload` para completar la subida desde la ventana del editor.
11b. (Opcional) Ficha publica: `modkit_cf_get_mod_description` para leer el cuerpo actual y `modkit_cf_update_mod` para actualizarlo (recuerda: thumbnail_path obligatorio en cada llamada).
12. `modkit_cf_get_mod_info` (inzoi-modkit) — VERIFICACION final: status y main_file_id del mod actualizados tras la subida. Resultado esperado: main_file_id apunta al archivo nuevo. Si no cambia: la subida no se asocio al mod correcto (revisar CfUgcId del .uplugin).

**Advertencias:**
- `modkit_cf_update_mod`: thumbnail_path es obligatorio en cada llamada (limitacion cfcore documentada; sin la parte 'file' del multipart, CurseForge devuelve 500).
- Retornos 'unspecified' en el volcado para las herramientas de empaquetado; los resultados citados son los documentados en las descripciones.

**Herramientas:** modkit_validate_workspace, modkit_save, modkit_package, modkit_open_cf_upload, modkit_cf_status, modkit_cf_get_mod_description, modkit_cf_logout, modkit_cf_send_code, modkit_cf_verify_code, modkit_cf_list_my_mods, modkit_cf_get_categories, modkit_cf_create_mod, modkit_cf_update_uplugin, modkit_cf_publish, modkit_cf_upload_mod_file, modkit_cf_get_mod_info (inzoi-modkit)

Al cerrar la sesion de CurseForge cuando termine: `modkit_cf_logout` (seguro incluso sin sesion).

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md
## English version (EN)

**Goal:** take a finished mod from the ModKit editor to its public CurseForge page, verifying every intermediate result.

**Level:** intermediate. **Route:** modkit-offline.

**Steps:**

1. `modkit_validate_workspace` (inzoi-modkit) — the mod must be ready: no empty required fields, no format problems. If it fails: use `modkit_inspect_workspace` to see the concrete fields.
2. `modkit_save` (inzoi-modkit) — save the final state before packaging.
3. `modkit_package` (inzoi-modkit) — package locally. Async: returns 'packaging_started' immediately. Expected: a packaging-completed notification in the editor. If it never arrives: do not continue; the dump says completion is observed in the notification area.
4. `modkit_cf_status` (inzoi-modkit) — cfcore and authentication state. Expected: { authenticated: true }. If authenticated=false, steps 5-6; if already authenticated, jump to 7.
5. `modkit_cf_send_code` (inzoi-modkit) — sends the 6-digit OTP to the CurseForge email. Expected: status 'code_sent'; the user reads the code in their inbox.
6. `modkit_cf_verify_code` (inzoi-modkit) — verifies the OTP; cfcore stores the JWT (persists across editor restarts). If it fails: 'GenerateAuthToken failed' (wrong/expired code or a different email) — repeat from step 5.
7. `modkit_cf_list_my_mods` (inzoi-modkit) — verification: the mod must NOT already exist. Expected: a list without the mod's name. If it already exists: use that mod_id instead of creating.
8. `modkit_cf_get_categories` (inzoi-modkit) — valid categories for primary_category_id / game_category_ids.
9. `modkit_cf_create_mod` (inzoi-modkit) — register the mod. Expected: mod information, especially its id.
10. `modkit_cf_update_uplugin` (inzoi-modkit) — writes CfUgcId and marketplace URL into the .uplugin so uploads attach to the same mod.
11. Publishing:
    a. Automatic route: `modkit_cf_publish` — chains modkit_package - zip - modkit_cf_upload_mod_file in one call.
    b. Manual route: `modkit_cf_upload_mod_file` with the zip already built, or `modkit_open_cf_upload` to finish the upload from the editor window.
11b. (Optional) Public page: `modkit_cf_get_mod_description` to read the current body and `modkit_cf_update_mod` to update it (remember: thumbnail_path is mandatory on every call).
12. `modkit_cf_get_mod_info` (inzoi-modkit) — FINAL CHECK: the mod's status and main_file_id updated after the upload. Expected: main_file_id pointing at the new file. If it does not change: the upload did not attach to the right mod (check the .uplugin's CfUgcId).

**Warnings:**
- `modkit_cf_update_mod`: thumbnail_path is mandatory on every call (documented cfcore limitation; without the multipart 'file' part, CurseForge returns 500).
- Returns are 'unspecified' in the dump for the packaging tools; the cited results are those documented in the descriptions.

When done, close the CurseForge session: `modkit_cf_logout` (safe even with no session).
