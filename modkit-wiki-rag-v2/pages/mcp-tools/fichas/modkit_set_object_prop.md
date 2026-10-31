---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_object_prop]
wiki_refs: []
---

## modkit_set_object_prop

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija un par clave/valor de ObjectMetaData en el ACTOR de un workspace BUILD (no en un componente); es la unica via para llegar a los numeros que gobiernan un objeto ensamblado (escaleras: StepUnitRise, StepUnitGoing, LandingDepth; pilares: PillarObjectType, tiling), que reconstruyen todas sus partes a partir de ellos.

**Descripción actual del MCP:** Set an actor-level ObjectMetaData key on a BUILD workspace (not a component). The only route to stairs/pillar assembly parameters (StepUnitRise, LandingDepth, PillarObjectType, ...) and IsCameraCollision. Allowed keys depend on the actor class; others are silently dropped (see modkit://workspace-docs/component_rules). Use modkit_set_component_prop for component properties (meshes, lights, area box).

**Cuándo usarla:** Para configurar escaleras, pilares u otros objetos ensamblados.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `key` (string, obligatorio) — Actor property key, PascalCase (e.g. StepUnitRise)
- `value` (string, opcional) — Unreal property text: number, True/False, or enum name. Empty removes the key.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** `modkit_set_component_prop`
