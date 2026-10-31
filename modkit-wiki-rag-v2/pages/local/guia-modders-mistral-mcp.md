---
source: local
title: "Guia para modders: inZOI ModKit x Mistral-vibe (MCP) — adaptada al sistema completo"
generado: 2026-10-09
---

# inZOI ModKit × Mistral-vibe (MCP) — Guía para modders

*Cómo trabajar con un asistente de IA conectado a la pila completa de inZOI: editor ModKit, juego en vivo, Blender y base de conocimiento RAG. Escrita a partir de uso real; nombres de campos y comportamientos verificados contra el ModKit y el juego en vivo (01-07-2026, auditado de nuevo el 2026-10-09 con el corpus sellado V1–V18). Los números citados valen para la versión citada — tras cada parche, re-verificar.*

---

## 1. Qué es esto realmente

La pila de modding de inZOI son **tres servidores MCP más una base de conocimiento**, y Mistral-vibe (o cualquier cliente compatible) puede manejar los cuatro:

| Capa | Dónde | Qué permite | Verificado |
|---|---|---|---|
| **Editor ModKit** | `localhost:11213` — **121 herramientas** | Proyectos, workspaces (CAZ, BUILD, DataAsset, UIMod, idiomas, animación), ~389 DataTables, DataAssets, importar FBX/TGA, materiales, empaquetar, publicar en CurseForge | Dump 2026-10-09 |
| **Juego en vivo** | `localhost:11212` — **412 herramientas = 405 comandos CLI** | Estado del juego, guardados, necesidades, dinero, clima, cámara, teleports, negocios, diagnóstico de mods montados | V1–V18 |
| **Blender** | servidor MCP de Blender — **9 herramientas** | Ejecutar código bpy en tu escena: exportar FBX/GLB, limpiar mallas, preparar assets sin salir del chat | V1, V2 |
| **RAG del corpus** | `http://127.0.0.1:8088/search` | Consulta sobre la documentación + el conocimiento verificado: 137 fichas de herramienta, 22 intenciones CLI, 18 workflows, wiki oficial, informe de hallazgos | FASE 1–6 |

Para que cada capa funcione, su proceso debe estar abierto: el **editor ModKit** para la 11213, el **juego con su servidor MCP** para la 11212, **Blender** para la de Blender. El RAG es un servicio local (vector-search) y está disponible siempre que el contenedor esté levantado.

La diferencia clave con un asistente "de memoria": las preguntas sobre **comportamiento del juego** no se responden desde el recuerdo del modelo, sino contra la base de conocimiento verificado (que incluye las trampas anti-alucinación) y, cuando hace falta, contra el juego en vivo. "¿Puedo crear un negocio por consola?" tiene una respuesta medida y documentada: no — y el asistente la sabe porque está en el corpus, no porque lo intuya.

---

### Uso multilingue (importante para usuarios no hispanohablantes)

El corpus es mayoritariamente ingles (wiki oficial y docs del ModKit) con el conocimiento generado (fichas, workflows, intenciones CLI) en espanol. Los 19 workflows son bilingues (seccion "English version (EN)" completa en el mismo documento) y las 22 intenciones CLI llevan una linea "**EN:**"; las 137 fichas siguen en espanol (su titulo es el nombre de la tool, que matchea cualquier idioma). Regla para el asistente: responde SIEMPRE en el idioma del usuario (el JSON de datos y los nombres de campo nunca se traducen), y si una consulta en otro idioma devuelve resultados flojos, reformula la consulta en espanol y reintenta antes de concluir que algo no existe.

## 2. La regla de oro: tú eres el artista, Mistral-vibe es el operario

Mistral-vibe es buenísimo con la *fontanería*: encontrar la tabla correcta, el campo correcto, el orden correcto de operaciones, y escribir valores sin erratas. **No** sustituye tu trabajo creativo.

### Lo que Mistral-vibe HACE por ti

| Área | Ejemplos |
|---|---|
| Descubrimiento | "¿Qué tabla controla X?", "¿Qué campos tiene una media?" — contra el corpus verificado y contra los datos **en vivo**, no de memoria |
| Montaje de workspace | Proyecto → item base → Override/Duplicate → workspace, en el orden correcto |
| Edición de datos | Precios, tags, valores de buffs, colores; escrituras acompañantes en tablas emparejadas |
| Cableado de assets | Importar FBX/TGA, crear material, asignar slots, compilar-antes-de-propiedades |
| Flujo completo | Guardar, validar, empaquetar, publicar en CurseForge (login por código de email) — todo por chat |
| **Juego por consola** | Necesidades (`stat_get_all`, `stat_set_all`, `stat_freeze`), dinero (`currency_add_money` + verificación), guardados (`game_list_saves`, `game_load` por slot), clima, cámara, teleports, diagnóstico |
| **Blender desde el chat** | "Exporta la selección a FBX a esta ruta" — sin abrir menús |

### Lo que Mistral-vibe NO hace — esto es trabajo TUYO

- **Modelado, rigging, UVs, weight painting.** Importa tu FBX; no arregla una malla sin riggear al esqueleto plantilla, sin UV2 (máscara) o con escala incorrecta (1 unidad = 1 cm).
- **Texturas y arte.** Conecta el TGA al slot; no pinta tu estampado. Medias: TGA 1024×1024 RGBA-32, sRGB **desactivado** (R/G = normal, B = máscara fresnel, A = alpha).
- **Thumbnails.** Para CurseForge aportas **tú** una imagen cuadrada ≥400×400. No se inventa una.
- **Juzgar en el juego.** Puede ejecutar y verificar por consola, pero el juicio estético ("¿me gusta cómo queda?") es tuyo.
- **El gusto.** "Hazlo bonito" no es instrucción. "Sube el roughness a 0.9 para que quede mate" sí.
- **Leer `.uasset` del disco** — la inspección pasa por las herramientas del ModKit.

---

## 3. Cómo pedir — anatomía del prompt

### Para modding (editor ModKit)

Un buen prompt responde a cuatro preguntas. Si te las saltas, el asistente tiene que parar y preguntar (tiene prohibido inventarse nombres, items base o modos):

1. **¿Qué proyecto?** (existente, o "crea uno nuevo llamado X")
2. **¿Qué item base?** (item concreto, o al menos la categoría)
3. **¿Override o Duplicate?** — Override reemplaza el vanilla mientras tu mod cargue; Duplicate añade un item nuevo y deja el original intacto ← lo que quieres el 95% de las veces
4. **¿Qué cambia exactamente?** (rutas de textura, valores, campos si los conoces)

**Prompt flojo:** "hazme un mod de medias" → 5 rondas de preguntas.
**Prompt fuerte:**
> Crea un proyecto nuevo llamado `FishnetPack`. Duplica la media base `W_Stocking_L009` en un workspace `fishnet_black`. Textura en `D:\mods\textures\fishnet_black.tga`, roughness 0.85, color 1A1A1A. Female, Adult. Verifica la fila con `get_row` antes y después de escribir, y guarda.

### Para el juego (consola en vivo)

1. **¿Qué consultas o cambias?** (necesidades, dinero, guardados, clima...)
2. **¿Sobre quién?** (Zoi poseído por defecto, o `entity_id` concreto)
3. **¿Con cheats?** — los comandos de acceso UserCheat/ScriptCheat requieren cheats activados (Psycat's Advice → Enable Cheats)
4. **¿En qué partida?** — usa siempre una partida de prueba

**Prompt fuerte:**
> Con el juego abierto y cheats activados: pon las necesidades del Zoi poseído al máximo, congela el decay, y verifica con `stat_get_all` que `no_decay` es true. No toques la partida real.

### Las tres reglas de verificación (aprendidas a golpes)

- **Verifica antes de escribir:** *"comprueba los campos reales con `get_row` primero"*. La documentación contiene errores reales (§6) y cambia entre versiones.
- **Relee después de escribir:** *"enséñame la fila parcheada para confirmar."*
- **Verifica aplicado tras comandos sin readback:** los comandos de cheat del juego devuelven **vacío** aunque funcionen — y se ha observado una caída silenciosa (ok sin efecto). Tras mover dinero o fijar stats: *"verifica leyendo el estado"* (para dinero: el widget del HUD, `ui_find` con `Window: Hud`).

---

## 4. Prompts de ejemplo

### 🟢 Principiante

**Recolorear una prenda (sin 3D):**
> En `MiPrimerMod`, duplica la media `W_Stocking_L001` como `media_roja`. Mantén la textura vanilla, `StockingColor` en `8B0000` y `StockingCoreBrightness` en 3. Verifica la fila y guarda.

**Ajuste puro de datos:**
> Haz Override de la fila `Object` de `Fridge01` y cambia solo `Price` a 99. Enséñame antes y después.

**Exploración:**
> Lista las categorías CAZ y 10 items base de `Shoes`.
> ¿Qué campos tiene la tabla `Buff`? Enséñame una fila vanilla como ejemplo.

**Juego básico:**
> ¿Qué guardados tengo y cuáles son autosave? Lista los slots con `game_list_saves`.
> Pon las necesidades del poseído al 100% y congela el decay. Verifica con `stat_get_all`.

### 🟡 Intermedio

**Prenda custom completa:**
> Proyecto `StreetWear`, duplica `M_Costume_Outer_Buy_001` como `bomber_v1`. Importa `D:\work\bomber.fbx` como skeletal mesh (riggeada al esqueleto plantilla, con LODs). Crea el material, conecta `bomber_BC.tga`, `bomber_N.tga`, `bomber_ARM.tga`, y dime qué pasos quedan para mí en el panel del editor.

**Parche de traducción:**
> Añade un workspace de Idioma a `StreetWear` para español. Busca las entradas que contengan "bomber" y tradúcelas. Los strings fuente están en coreano — busca primero, no vuelques el PO entero.

**Mod de Lua (montaje en vivo, verificado):**
> Crea un mod de Lua `MiPrimerLua` con `luamod_scaffold` (script `Saludo`, type Zoi, entorno B2), móntalo con `luamod_mount`, recárgalo con `luamod_reload` y enséñame el manifiesto. Después desmóntalo.

**Mod de UI en caliente (verificado):**
> Con el juego abierto: monta mi mod de UI, edita un archivo con `uimod_write_file`, y haz `uimod_remount` para recargarlo sin reiniciar. Enséñame la lista de mods montados.

**Dinero con verificación (verificado):**
> Con cheats activados: añade 50.000 al hogar con `currency_add_money` y verifica que aplicó leyendo el widget del saldo del HUD con `ui_find` (Window Hud, rol text). El retorno del comando es vacío — no sirve como confirmación.

### 🔴 Avanzado

**App UIMod:**
> Crea una app UIMod `zoi_journal` en `MisHerramientas`: panel de diario (HTML/CSS/JS). Carga `coui://inzoi/cohtml.js` y el SDK en el orden correcto. Antes de cablear `inzoi.cli.execute`, verifica los IDs de comando contra `modkit_list_uimod_cli_commands`. No hagas preview sin mi OK.

**Parche de diálogos (talk):**
> Con `modkit_build_talk_patch`, añade 3 temas de conversación amistosos sobre pesca: tone Positive, `relation_score` "Friendship +5", edad orador y oyente como condición. Enséñame las filas generadas antes de aplicar. Recuerda que cada llamada minta identificadores con timestamp — no la repitas o duplicas filas.

**Cirugía de datos en lote:**
> En `ModoDuro`, sube `Price` un 50% en todas las filas de `Object_Food` con tag `Snack`. Usa `set_data_batch`, enséñame los IDs afectados y espera mi OK.

**Sesión de prueba con guardados (verificado):**
> Lista los slots, carga el slot explícito `20260827-123845_AutoSave_3` con `game_load` (NO uses `game_continue`: carga el guardado manual más reciente e ignora el autosave), y tras probar restaura el mismo slot. Verifica el estado con `game_get_state`.

**Publicar en CurseForge:**
> Publica `FishnetPack`. Thumbnail: `D:\mods\promo\fishnet_square.png` (1024×1024). Changelog: "Lanzamiento inicial — 4 variantes". Guíame por las categorías paso a paso.

---

## 5. Qué esperar durante una sesión (el ritmo)

1. **Preguntas aclaratorias** (proyecto, item base, modo). Responde una vez, con precisión.
2. **Primero lo estructural, luego compilar.** Compilar **resetea las propiedades**: malla, material o datos puestos antes de un compile se pierden. El asistente secuencia esto solo; si intercalas peticiones, espera que te avise.
3. **Después las propiedades** — mallas, datos, materiales, texturas.
4. **Guardar** (`modkit_save`) — pídelo explícito si tienes dudas.
5. **Validar/empaquetar** — ojo: `modkit_validate_workspace` NO detecta todo. Si tu mod "no hace nada en el juego", la causa habitual es un campo **Must-Set** vacío. Pide: *"inspecciona el workspace y comprueba los must-set contra la fila en vivo."*
6. **Probar en el juego** — y aquí el juego en vivo ayuda:
   - Los mods Lua/UI se montan y recargan en caliente (`luamod_mount`, `uimod_remount`) — sin reiniciar.
   - Para ciclos de guardado: `game_goto_lobby` → `game_load` del slot explícito. No guardes esperando que `game_continue` recoja el autosave — no lo hace.
   - Si cancelas un flujo a medias (`game_cancel_flow`), el juego NO vuelve atrás: queda donde estaba. Recuperación: `game_goto_lobby` + cargar slot.
   - **Errores de mods Lua sin abrir el editor**: el juego escribe `Saved/BlueLuaKit/<mod>/lua_diagnostics.json` — Saved/Logs está vacío en build Shipping.
7. **Limpieza**: al borrar un proyecto con `modkit_delete_project`, **quedan residuos en disco** (patches, POs, Meta/). Pide verificación de que la carpeta desapareció o límpiala a mano.

**Aviso sobre borrados:** varios proyectos/workspaces se borran **de uno en uno, en secuencia** — en paralelo pueden corromper estado o tirar la conexión. `Sample_Build` y `Sample_CAZ` están protegidos por el servidor.

---

## 6. Confía, pero verifica — la documentación contiene errores reales

El ModKit sirve su propia documentación a la IA (docs de workspaces, esquemas de datatables; además expone **61 recursos auto-generados**: reglas de texturas y materiales, docs de datatables, esquemas de data-assets). **La mayoría es buena, parte está mal**, y un asistente ingenuo escribirá campos que no existen. Ejemplos auditados (01-07-2026, build de entonces — re-auditar tras cada parche):

| La documentación dice | El juego en vivo dice |
|---|---|
| Las medias tienen `Roughness`, `Opacity`, `TuningColor` | Campos reales: `StockingTexture`, `StockingRoughness`, `StockingFresnel`, `StockingCoreBrightness`, `StockingColor` |
| `BodyAgeType`: "Adult/Child" | El enum es `Invalid / Default / Adult / Youth / Baby` — `Child` no existe |
| Material types CAZ: "Default, Prop, Glass, Layer" | Las prendas CAZ en vivo ofrecen **un** tipo: `Standard` |
| Material types BUILD: 8 listados | En vivo: 6 (`Default, Prop, Glass, GlassThin, Foliage, Clock`) |
| — | `StockingColor` es un **string hex** de 6 dígitos, no un objeto RGB |

Y el mismo fenómeno existe en la documentación del **CLI del juego** (hallazgos verificados 2026-10-09):

| La documentación dice | El juego en vivo dice |
|---|---|
| `game_continue`: "Loads the most recently saved... AutoSave slots included" | Carga el guardado **manual** más reciente e ignora el autosave |
| Existe getter del dinero del hogar | No existe en ninguna superficie (cheats on y off, 389 DataTables, stats, retorno vacío); el saldo solo es legible por el widget del HUD |
| Los PO se generan manualmente al crear workspace de idioma | Se auto-generan al crear el workspace |

**Cómo se opera con esto hoy:** el corpus mantiene un **informe de hallazgos** con severidades (gap de funcionalidad / comportamiento distinto / condicional / superficie no reflejada), en español e inglés, con repro steps y literales; y las preguntas trampa del corpus comprueban que la búsqueda devuelve la respuesta REAL y no la documentada. La lección para tus prompts no cambia: cuando importen nombres de campos o valores de enums, añade *"verifica contra la tabla en vivo con `get_row` / `modkit_list_material_types` antes de escribir"*. Los material types **dependen del workspace y cambian entre versiones** — no te fíes de ninguna lista de tutorial, incluida esta.

Y si el asistente dice que algo es *imposible* tras mirar una sola fuente, insiste: una respuesta seria contrasta la documentación, la wiki **y** el editor/juego en vivo. Algunas tablas existen pero no tienen vía de creación en el build actual (p. ej., filas de `GarmentGloves`/`GarmentHat`/`GarmentScarf` sin categoría CAZ) — "imposible hoy" y "imposible" son respuestas distintas.

---

## 7. Tarjeta de referencia rápida

```text
ANTES DE PEDIR              TEN PREPARADO
────────────────────────────────────────────────────────
Prenda nueva                FBX riggeado al esqueleto plantilla,
                            UV1 (textura) + UV2 (máscara), 1u=1cm,
                            texturas BC/N/ARM
Media (stocking)            TGA 1024×1024 RGBA32, sRGB off
                            (R/G normal, B fresnel, A alpha)
Mueble                      FBX + texturas, o reusar mallas vanilla
Mod de datos                Qué comportamiento, en qué dirección,
                            números aproximados
Sesión de juego             Partida de prueba, cheats activados
                            (Psycat's Advice), slot de guardado explícito
Publicar                    Thumbnail cuadrado ≥400×400,
                            texto de changelog, email de CF
────────────────────────────────────────────────────────
FRASES MÁGICAS
"Duplicate, no Override"                 → vanilla intacto
"Verifica con get_row antes de escribir" → esquiva errores de docs
"Enséñame la fila parcheada"             → confirma la escritura
"Verifica aplicado releyendo estado"     → el retorno vacío no es
                                           confirmación
"Carga por slot explícito"              → game_continue ignora autosaves
"Borra de uno en uno"                    → borrados paralelos = peligro
"No hagas preview/publiques sin mi OK"   → tú mantienes el control
"Paso a paso, pregúntame entre medias"   → modo principiante
```

---

## 8. Preguntas frecuentes

**P: ¿Mistral-vibe necesita el juego abierto?**
Para el editor ModKit, no — necesita el **editor** abierto (aloja el servidor 11213). Para comandos del juego en vivo, sí — el juego con su servidor MCP (11212). El RAG funciona con el servicio local levantado.

**P: ¿Puede leer el saldo del hogar?**
No hay getter CLI del dinero — verificado con cheats activados y desactivados. El asistente puede **añadir** dinero con cheats, y verificar que aplicó leyendo el widget del HUD (`ui_find`). Para leer el saldo exacto en un flujo, esa es la vía.

**P: ¿Puede convertir un `.uasset` a FBX?**
No leyendo el archivo. La exportación depende de lo que exponga el ModKit/editor de UE. Para crear assets NUEVOS, Blender va mejor: Mistral-vibe maneja Blender por MCP y exporta el FBX/GLB desde tu escena.

**P: Mi mod empaqueta bien pero no hace nada en el juego.**
90% de las veces: un campo Must-Set vacío — el empaquetado NO los valida. Pide un `get_row` de tu item y compáralo con una fila vanilla que funcione. Si es un mod Lua, mira `lua_diagnostics.json` en disco — Saved/Logs está vacío.

**P: Los comandos de consola responden vacío. ¿Fallaron?**
No necesariamente — muchos comandos de cheat devuelven vacío aunque funcionen. Pero se ha visto una ejecución aceptada sin efecto. La regla: tras escribir (dinero, stats), verificar releyendo el estado (`stat_get_all`, widget del HUD). "Ok" no es evidencia.

**P: Mistral-vibe no para de hacerme preguntas en vez de ejecutar.**
Es a propósito. Tiene prohibido inventarse nombres, elegir items base o decidir Override vs Duplicate. Responde a las preguntas del §3 en tu primer mensaje.

**P: ¿Puede publicar por mí?**
Sí, el flujo completo de CurseForge funciona vía MCP (login con email + código de un solo uso). El thumbnail y el changelog son tuyos — no se los inventa.

**P: ¿Es seguro dejarle editar mi proyecto?**
Los Duplicate son seguros por naturaleza. Los Override tocan comportamiento vanilla (solo mientras el mod cargue). Los borrados son la única operación destructiva — siempre de uno en uno y con confirmación; y recuerda que `modkit_delete_project` deja residuos en disco que conviene revisar.

**P: El juego se actualizó y mis números no cuadran.**
Krafton parchea en silencio: los comportamientos verificados citan la versión contra la que se verificaron. Tras un parche, re-verifica lo que uses (campos, enums, retornos) contra el vivo antes de escribir nada crítico.
