# La Biblia del Modding inZOI

Sitio estatico que organiza toda la documentacion del inZOI ModKit por los departamentos de
**MY MOD PROJECTS** (Create A Zoi, Build, Vehicle, Animation, Data Asset, Object Sound, Camera
Filters, Content Template, Translation, Script/Lua, User Interface, Blank), con contenido curado
en espanol, ejemplos de codigo, reglas que deben cumplir los assets, y un navegador con los
9.957 documentos oficiales del corpus (wiki, CLI, Lua API, struct guide, how-to, fichas MCP,
workflows y ayudas del foro).

## Consultarla

En una copia recién clonada, genera el sitio. La carpeta `sitio/` contiene la salida HTML y no se versiona porque replica el corpus del RAG.

Recomendado (habilita la busqueda semantica contra el RAG):

```
python herramientas/generar.py
python -m http.server 8090 --directory sitio
```

y abrir <http://localhost:8090>.

Tambien funciona abriendo `sitio/index.html` directamente desde el explorador
(`file://`): los enlaces son relativos y el indice de busqueda local se carga como
script; solo la busqueda semantica puede quedarse sin resultados segun el navegador
(las paginas `file://` tienen origen nulo).

## Buscador

- **Local**: los 10.856 titulos del corpus en `assets/busqueda-datos.js` (carga como
  script, sin fetch).
- **Semantica**: si el serve del RAG esta levantado (`vector-search, puerto 8088), el buscador anade los 10
  mejores resultados del indice vectorial (290.910 chunks). El serve envia
  `Access-Control-Allow-Origin: *` para permitir consultas desde el navegador.

## Actualizarla

El sitio se regenera desde el corpus del RAG (`../modkit-wiki-rag-v2/pages`). Tras cada snapshot
de la wiki (`tools/capture_snapshot.py`) o cambio en `contenido/`:

```
python herramientas/generar.py
```

- El contenido curado vive en `contenido/biblia/*.md` (espanol, editable directamente).
- El mapeo de departamentos a documentos vive en `contenido/secciones.json`.
- El buscador usa `sitio/busqueda.json` (local) y, si el serve del RAG esta levantado
  (`docker compose up -d vector-search` en el proyecto RAG, puerto 8088), anade resultados
  semanticos del indice vectorial.

## Estructura

```
biblia-modding-inzoi/
├── herramientas/generar.py   # generador (solo stdlib)
├── contenido/
│   ├── secciones.json       # 12 departamentos + mapeo a docs del corpus
│   └── biblia/*.md          # contenido curado (ES) + principios
└── sitio/                   # salida generada localmente (no editar ni versionar)
    ├── index.html           # portada con los departamentos
    ├── principios.html      # la filosofia copiar-y-reemplazar
    ├── seccion/*.html       # una pagina por departamento
    ├── docs/*.html          # navegador: todo el corpus renderizado
    └── busqueda.json        # indice de busqueda local
```

## Filosofia

La biblia entera se apoya en una idea: **copiar lo que ya existe en el juego y reemplazarlo por
lo nuestro**. Cada departamento explica que se construye, que reglas deben cumplirse para que
el juego lo acepte, y como iterar en vivo (Lua/UI mods, MCP, SmartBuild).
