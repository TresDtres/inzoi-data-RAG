---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [generate_3d]
wiki_refs: []
---

## generate_3d

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Genera un modelo 3D texturizado nuevo a partir de un prompt de texto o una imagen y lo importa. Un objeto por llamada; llega con escala y orientacion arbitrarias.

**Descripción actual del MCP:** Make one new textured 3D model from a text prompt or an image, and import it. One object per call: not a whole scene, the ground, or parts to assemble. It arrives at arbitrary scale and facing. Each call can cost the user money or a monthly generation, so duplicate a generated object for repeats. Waits up to wait_seconds (at most 45), then imports. Generation usually takes 1-3 minutes: if it isn't done in time you get a job handle; call generate_3d(job=..., name=...) again to keep waiting. Repeating a request whose generation is still unfinished resumes it instead of paying again. Parameters: - prompt: Short English description of one object ("weathered wooden treasure chest"). - image: Instead of a prompt: an absolute image file path or an http(s) URL. Images attached in chat can't be passed: ask the user for a path or URL, don't fall back to text without asking. - name: Object name in the scene. Defaults to one made from the prompt. - provider: auto (default), tripo, hunyuan3d or hyper3d. Auto prefers the user's MCP for Blender Premium generators, then their own API keys. - quality: "standard" or "high" (Premium). Omit for the user's default; "high" only when the user asks for more detail. - bbox_condition: hyper3d only: [length, width, height] proportions. - job: A handle from an earlier call, to resume waiting for it. - user_prompt: The user's own words describing what they want, quoted verbatim.

**Cuándo usarla:** Cuando el usuario pide crear un objeto desde cero.

**Requisitos:** Puede costar dinero o una generacion mensual (documentado en el volcado); espera hasta wait_seconds (maximo 45) y si no termina devuelve un job para seguir esperando con otra llamada.

**Parámetros clave:**
- `prompt` (unspecified, opcional)
- `image` (unspecified, opcional)
- `name` (unspecified, opcional)
- `provider` (string, opcional)
- `quality` (unspecified, opcional)
- `bbox_condition` (unspecified, opcional)
- `job` (unspecified, opcional)
- `wait_seconds` (integer, opcional)
- `user_prompt` (string, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** ninguna mencionada en el volcado
