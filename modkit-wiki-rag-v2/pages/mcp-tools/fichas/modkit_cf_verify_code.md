---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_verify_code]
wiki_refs: []
---

## modkit_cf_verify_code

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Verifica el codigo OTP de 6 digitos recibido por correo y emite un JWT que cfcore guarda internamente (persiste entre reinicios del editor). Paso 2 del flujo de autenticacion.

**Descripción actual del MCP:** Auth step 2: verify the OTP from modkit_cf_send_code. On success the token persists across editor restarts and auth-gated tools work. On 'GenerateAuthToken failed' (wrong/expired code, email mismatch), tell the user the hint and restart from modkit_cf_send_code.

**Cuándo usarla:** Tras pedir el codigo con modkit_cf_send_code y cuando el usuario facilita los 6 digitos.

**Requisitos:** Haber llamado antes a modkit_cf_send_code con el mismo email.

**Parámetros clave:**
- `email` (string, obligatorio) — Same email as modkit_cf_send_code.
- `code` (['integer', 'string'], obligatorio) — 6-digit code the user received by email.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Con codigo incorrecto, caducado o email distinto devuelve 'GenerateAuthToken failed' (documentado en el volcado).

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_send_code`
