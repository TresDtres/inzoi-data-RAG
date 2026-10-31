# Principios del modding en inZOI

Esta biblia se apoya en una sola idea, y conviene tenerla clara antes de abrir el ModKit:

## 1. Copia lo que ya existe y reemplazalo por lo tuyo

El 90% de los mods de inZOI no se crean desde cero: **se clona un asset o una fila de datos vanilla, y se cambian sus referencias por las nuestras**. El juego ya sabe cargar esa estructura; tu mod solo introduce una variante.

- Un mueble nuevo = un objeto vanilla similar (misma categoria, mismo tipo de interaccion) con tu mesh, tus texturas y tu ID.
- Una prenda nueva = una fila `GarmentTop` vanilla con tus mallas y tu `GroupId` (ver las invariantes en el departamento de CAZ).
- Un dato nuevo (precio, stat, receta) = una fila de la tabla original exportada, modificada y devuelta como override.

El ModKit y el MCP estan pensados para esto: `modkit_list_*`, la captura de assets (WF-14) y el editor de DataAsset te dan el material vanilla que luego sobrescribes.

## 2. El proyecto manda

Todo vive dentro de un **proyecto** en MY MOD PROJECTS. Cada proyecto genera su carpeta bajo `Plugins/`, con sus assets, datos y scripts. Un mod publicado = un proyecto empaquetado (build) y subido a CurseForge o instalado en local.

## 3. El juego esta en acceso anticipado

Krafton parchea en silencio: campos, enums y retornos cambian sin aviso. Dos consecuencias practicas:

- Tras cada parche del juego, revisa lo que citabas (campos, enums, retornos). Los "mods rotos tras actualizar" casi nunca son bugs del juego sino rompimiento por migracion de version/motor (ver WF-20: Fix Up Mod Project, re-bake o recrear).
- Verifica en vivo antes de dar nada por hecho: un retorno `ok` vacio del juego NO es confirmacion de que se aplico.

## 4. Lua y scripts: el juego como plataforma

Desde v0.11 el ModKit monta scripts Lua sobre el juego en marcha (B1 cliente / B2 servidor), con hot-reload (`luamod.reload`) y catalogo de API consultable (`modkit_list_lua_api_catalog`). Los UI mods son mini-apps web con un SDK (`inzoi.cli.execute`, `inzoi.data.query`). La regla de oro es la misma: mira lo que el juego ya hace (lista de comandos CLI, catalogo de API, assets vanilla) y reaprovechalo.

## 5. Donde esta la ayuda

- **Navegador de documentacion** de esta biblia: 9.957 documentos oficiales (wiki, CLI, Lua API, struct guide, how-to).
- **Fichas de herramientas MCP**: cada herramienta del inZOI ModKit MCP con payload y respuesta literal.
- **Workflows** (WF-01..WF-21): recetas completas de tareas reales, verificadas en juego.
- **Ayudas del foro**: 697 fichas de problemas reales con solucion, en el mismo buscador.
