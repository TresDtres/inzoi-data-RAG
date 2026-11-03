# La Biblia del Modding inZOI

Sitio estatico que organiza toda la documentacion del inZOI ModKit por los departamentos de
**MY MOD PROJECTS** (Create A Zoi, Build, Vehicle, Animation, Data Asset, Object Sound, Camera
Filters, Content Template, Translation, Script/Lua, User Interface, Blank), con contenido curado
en espanol, ejemplos de codigo, reglas que deben cumplir los assets, y un navegador con los
9.957 documentos oficiales del corpus (wiki, CLI, Lua API, struct guide, how-to, fichas MCP,
workflows y ayudas del foro).

## Consultarla online (GitHub Pages) o en local

Enlaces directos públicos para compartir:
- **Lua Flow — Editor visual B1/B2 y Blueprints:** <https://tresdtres.github.io/inzoi-data-RAG/maquina-estados.html>
- **Aprende creando (Misiones Lua):** <https://tresdtres.github.io/inzoi-data-RAG/aprende.html>
- **Portada de La Biblia del Modding inZOI:** <https://tresdtres.github.io/inzoi-data-RAG/>

Las páginas HTML principales (`sitio/maquina-estados.html`, `sitio/aprende.html`, `sitio/index.html` y `sitio/seccion/*.html`) están incluidas directamente en `biblia-modding-inzoi/sitio/`. Para regenerar el sitio completo en local (incluyendo los ~10.000 documentos del corpus en `sitio/docs/`):

```
python herramientas/generar.py
python -m http.server 8090 --directory sitio
```

y abrir <http://localhost:8090>.

Tambien funciona abriendo `sitio/index.html` directamente desde el explorador
(`file://`): los enlaces son relativos y el indice de busqueda local se carga como
script; solo la busqueda semantica puede quedarse sin resultados segun el navegador
(las paginas `file://` tienen origen nulo).

## Aprende creando

La portada enlaza a un recorrido gamificado de Lua, disponible en español e inglés. Incluye
misiones con preguntas breves, estado de evidencia y rutas hacia CAZ/ropa, animación, UI, datos,
guiones y Build. El idioma y el progreso se guardan en `localStorage`; no requiere cuenta ni
conexión al juego. Si el navegador bloquea `localStorage` en `file://`, el progreso dura solo
mientras la página siga abierta. Los capítulos enlazados de la Biblia siguen disponibles en español.

El contenido del recorrido está en `contenido/aprendizaje.json`; su interfaz y estilos fuente,
en `herramientas/aprende.js` y `herramientas/aprende.css`. No editar `sitio/aprende.html` ni sus
assets generados. Para validar el contenido y el generador:

```powershell
python -m unittest discover -s tests -v
node --test .\tests\maquina-estados.test.js
```

## Lua Flow

`maquina-estados.html` es un editor visual experimental de máquinas de estados Lua B1/B2:
los nodos Estado representan estados persistentes y las aristas conectan eventos, condiciones y
acciones CLI con el siguiente estado o un final. Exporta el módulo y `lua_manifest.json`. El
grafo se puede simular localmente y las trazas `[LuaFlow][id]` del log resaltan nodos; no hay
conexión de depuración en directo con el juego. Los IDs de evento, comandos y argumentos deben
confirmarse en el catálogo del ModKit. Cada acción exige declarar el alcance B1/B2 del comando;
el editor bloquea exportar si no coincide con el entorno seleccionado. Valida el Lua exportado
con BlueLuaKit antes de probarlo en una partida: las pruebas locales no sustituyen esa
validación ni prueban el runtime del juego.

Los fuentes son `herramientas/maquina-estados.js` y `herramientas/maquina-estados.css`; el
generador los copia a `sitio/assets/` y crea `sitio/maquina-estados.html`.

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

## Crear una edición en otro idioma

Los capítulos Markdown incluidos están en español. El generador produce una sola edición por vez y no traduce automáticamente. Para crear una Biblia en tu idioma sin perder la versión original:

1. Crea un fork o una rama separada para tu idioma.
2. Traduce los capítulos de `contenido/biblia/`, incluido `principios.md`.
3. En `contenido/secciones.json`, traduce `nombre`, `resumen` y, si corresponde, `inicial`. Conserva `id` y `docs`: el generador los usa para localizar el capítulo y enlazar los documentos técnicos.
4. Traduce los textos de interfaz de `herramientas/generar.py` —navegación, botones de búsqueda, títulos, migas de pan y pie de página— y cambia `lang="es"` por la etiqueta adecuada, por ejemplo `en` o `fr-FR`.
5. Mantén exactos los nombres de herramientas, identificadores de API/SDK, comandos, campos, rutas, código y URL de las fuentes. Traduce las explicaciones y conserva las citas.
6. Desde esta carpeta, regenera y revisa el sitio local:

   ```powershell
   python herramientas/generar.py
   python -m http.server 8090 --directory sitio
   ```

   Abre <http://localhost:8090> y comprueba los 12 departamentos, sus enlaces y los textos de interfaz. `sitio/` es una salida generada y no se versiona.

Los capítulos traducidos se verán en sus páginas, pero el buscador integrado se construye a partir del corpus RAG y no los incorpora automáticamente. Si quieres que también aparezcan en las búsquedas, pide a un asistente de IA que amplíe el índice local del generador para incluir esos capítulos sin cambiar las rutas ni las fuentes originales. Un asistente también puede ayudarte a traducir y revisar la Biblia capítulo por capítulo; contrasta siempre los nombres técnicos y el comportamiento con las fuentes enlazadas.

## Estructura

```
biblia-modding-inzoi/
├── herramientas/
│   ├── generar.py            # generador (solo stdlib)
│   ├── aprende.js            # interfaz y progreso local del recorrido
│   ├── aprende.css           # estilos del recorrido
│   ├── maquina-estados.js    # editor visual/compilador experimental Lua Flow
│   └── maquina-estados.css   # estilos del editor
├── contenido/
│   ├── secciones.json       # 12 departamentos + mapeo a docs del corpus
│   ├── aprendizaje.json     # misiones y rutas de exploracion ES/EN
│   └── biblia/*.md          # contenido curado (ES) + principios
├── tests/                    # pruebas del contenido/generador
└── sitio/                    # salida generada localmente (no editar ni versionar)
    ├── index.html           # portada con los departamentos
    ├── aprende.html         # recorrido de aprendizaje ES/EN
    ├── principios.html      # la filosofia copiar-y-reemplazar
    ├── seccion/*.html       # una pagina por departamento
    ├── docs/*.html          # navegador: todo el corpus renderizado
    └── busqueda.json        # indice de busqueda local
```

## Filosofia

La biblia entera se apoya en una idea: **copiar lo que ya existe en el juego y reemplazarlo por
lo nuestro**. Cada departamento explica que se construye, que reglas deben cumplirse para que
el juego lo acepte, y como iterar en vivo (Lua/UI mods, MCP, SmartBuild).
