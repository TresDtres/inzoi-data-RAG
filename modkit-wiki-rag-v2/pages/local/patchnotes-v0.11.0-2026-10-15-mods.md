---
source: local
url: https://playinzoi.com/es-es/news/11172
title: "Patch notes v0.11.0 (2026-10-15): mods Lua+MCP en juego, mods de filtro, build juego 20261013.16166.W — extracto modding VERBATIM + cruce con revalidación"
generado: 2026-10-15
---

# inZOI v0.11.0 — notas del parche (15-oct-2026) — sección Mods + datos de build

Fuente oficial: https://playinzoi.com/es-es/news/11172 . Extracto VERBATIM de las
partes relevantes para modding/revalidación + cruce con lo verificado en este build.

## Versiones de compilación [VERBATIM]

- Windows PC Steam: **20261013.16166.W** ← build NUEVO del juego (antes: `20260915.15331.W-325961`)
- Mac Steam: 20261013.16167.M
- Mac App Store: 5.4.83 (0.296.129) / 20261013.16168.M

## [ModKit] — VERBATIM

- Se ha añadido compatibilidad con mods de script (Lua). Los scripts de Lua que escribas
  pueden aplicarse a mods con el editor de mods de script en Lua del ModKit.
- Se ha añadido compatibilidad con **mods de filtro**. Se pueden crear filtros gráficos
  personalizados para que aparezcan como opción en el juego. ← TIPO DE MOD NUEVO
- Se han añadido activos de muestra para 6 expositores comerciales, 2 vehículos y 1 flotador de piscina.
- Se ha añadido el tocado de mago.
- Se han mejorado la jerarquía de piezas del asistente de vehículos y la experiencia de
  usuario de selección y edición. También se han mejorado los tiempos de respuesta al
  cambiar la configuración y las velocidades de procesamiento de las importaciones de mallas.
- Se ha añadido el asistente de UI/UX paso a paso, actualmente disponible para vehículos,
  a la categoría de construcción.
- Al importar la malla esquelética de un personaje, se crean automáticamente cuatro
  niveles de LOD ajustados al cuerpo.
- Al importar una malla personalizada de cuerpo o cabeza, se detecta el uso de Nanite
  y se informa al usuario de los riesgos de errores de renderizado al utilizar
  materiales transparentes.
- Se ha añadido un menú de accesos directos para abrir rápidamente los navegadores de
  contenido del 1 al 4 junto al botón de inicio superior.
- Se ha añadido la opción "No volver a mostrar" a la ventana emergente de información
  sobre el uso compartido que aparece al empaquetar mods.

## [En el juego] — VERBATIM

- **El modding de scripts en Lua puede realizarse con la ayuda de un LLM mediante el MCP
  del juego.** Para más información sobre cómo usar el MCP en inZOI, consulta el vídeo
  guía del MCP.
- Se han añadido nuevos comandos de la CLI para **ajustar el número máximo de coches y
  Zois**. Ejecutables escribiendo el comando o pidiéndolo al LLM por lenguaje natural
  vía MCP.
- Puede asignar nombres personalizados a los mods instalados desde el menú [Mods] de la
  Sala de espera principal.
- Puedes activar o desactivar los mods de la IU superpuesta mediante la interfaz dedicada.
- Se han modificado las opciones para activar y desactivar mods, configurar el orden de
  carga y otras herramientas de gestión de mods para reducir el riesgo de corrupción
  de archivos.

## Otros relevantes para modding

- Modo Construcción: 106 objetos de interacción, 7 de Construcción, **124 FX en categoría
  WIP** (truco `ShowUserDevCategory`), 2 texturas de baldosa.
- Truco `EnableFreeEditMode (True/False)`: posicionamiento y escalado libres de objetos.
- Autocompletado de trucos.
- Crear un Zoi: 5 peinados, bigotes/barbas, maquillaje nuevo (3 modelos, 1 colorete,
  1 sombra de ojos, 1 delineado) — relevante para el sistema de slots de maquillaje.

## Cruce con lo verificado en la revalidación (2026-10-15)

- El **ModKit 16078** ya instalado esta mañana ES el ModKit de este parche: encaja con
  "compatibilidad con mods de script (Lua)" (AGENTS.md + ws_lua_script v2 + 125 tools),
  con las 4 tools nuevas (`modkit_discard` + 3 `set_vehicle_*` ← "asistente de vehículos
  mejorado" + jerarquía de piezas) y con los assets de muestra (6 expositores, 2 vehículos,
  1 flotador).
- "MCP del juego" con Lua → el servidor 11212 del JUEGO recibirá tools de authoring/montaje
  Lua (`luamod_*`: scaffold/mount/write_file/read_file — fichas ya en `pages/mcp-tools/fichas/`
  desde el crawl del 8-oct) + comandos CLI nuevos (max coches/Zois). El conteo v1 (300 tools)
  del servidor del juego CAMBIARÁ en la re-ficha.
- "Mods de filtro" = tipo de mod NUEVO (¿nuevo book_class? a sondear en el ModKit/ juego parcheado).
- Nuevo flujo esperado: LLM → MCP juego (luamod_*) → mod Lua en vivo SIN ModKit — camino
  alternativo al editor, ya documentado en workflows del RAG (WF-04).
