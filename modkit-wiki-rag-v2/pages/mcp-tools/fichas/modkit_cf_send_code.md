---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_send_code]
wiki_refs: []
---

## modkit_cf_send_code

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Envia un codigo OTP de 6 digitos al correo de la cuenta de CurseForge. Paso 1 del flujo de autenticacion.

**Descripción actual del MCP:** Auth step 1: CurseForge emails a 6-digit OTP to the account (status 'code_sent'). Then ask the user for the code and call modkit_cf_verify_code. Do not repeat for the same email; a new call may invalidate the previous code. No auth needed.

**Cuándo usarla:** Cuando el usuario quiere vincular su cuenta de CurseForge desde el editor.

**Requisitos:** Haber comprobado con modkit_cf_status que no hay sesion activa.

**Parámetros clave:**
- `email` (string, obligatorio) — CurseForge account email. Ask the user; never guess.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_verify_code`
