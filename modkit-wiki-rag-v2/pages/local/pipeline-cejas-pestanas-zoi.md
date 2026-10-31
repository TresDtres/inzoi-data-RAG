---
source: local
title: "Pipeline verificado: cejas y pestañas en un ZOI custom (MetaHuman → Blender → ModKit)"
generado: 2026-10-11
---

# Pipeline verificado: cejas y pestañas en un ZOI custom

Manual paso a paso para que un ZOI custom (cara MetaHuman) aparezca en juego con cejas y
pestañas. Verificado en vivo el 2026-10-11 contra: Sample_BigMan (9 JsonPatch + mallas +
materiales del sample oficial), un proyecto de prueba completo creado y empaquetado por MCP
(Test_ZoiFull_D2684106), las carpetas de grooms del ModKit, los FBX de MetaHuman del usuario
(D:/eyelashes) y el servidor MCP del editor (localhost:11213).

## El modelo en una frase

Un ZOI no es un modelo único: se compone en runtime desde tablas. Cejas y pestañas tienen
TRES capas independientes, y el fallo "no aparecen" casi siempre es de una de las tres:

1. **Geometría**: NUNCA está en el ModKit como malla. Las pestañas vienen dentro del FBX de
   cara exportado del Assembly de MetaHuman (personaje creado como FULL); las cejas hay que
   exportarlas aparte (groom LOD0) y unirlas a la cara en Blender.
2. **Material (look/estilo)**: instancias de material (`MaterialInstanceConstant`) con
   parent `MI_Eyebrow_Base` / `MI_Eyelash_Base` (bajo `/Game/Characters/Materials/
   MasterInstances/Hair/`) + una textura **DIRO** por estilo (+ Flow propio en cejas).
3. **Cableado de datos**: `AppearanceFacePreset.FaceHairs` apunta a IDs vanilla
   (p. ej. `Male_Eyebrows_001`, `Male_Eyelashes_003`); es el fallback si no hay nada propio.

Cadena de datos de un ZOI completo (un mod de ZOI completo genera 9 JsonPatch):

```
AppearancePreset (ZOI) ── HeadId/BodyShapeId/hairId/outfitPreset...
├─ AppearanceHead.Mesh = malla de cara (SKM_*_New_FaceMesh, slots: Head, Eyebrows, Eyelashes,
│  Eyeball, EyeAO, EyeTear, Teeth, Transparent)
├─ AppearanceFacePreset: BaseHeadId + FaceHairs[{Eyebrow,Eyelash}] + Makeup + Hair + Iris
├─ AppearanceBodyShape: OverrideBodyMesh + bUseMeshMerge=true (cuerpo completo)
├─ AppearanceHair + AppearanceHairMesh (MeshId ↔ GroupId)
├─ AppearanceSkinType: HeadOverrideMaterial / BodyOverrideMaterial
└─ Garment* + Garment*Mesh por prenda
```

BigMan (sample oficial) usa exactamente esta estructura: cara con cejas/pestañas horneadas
(slots `MI_BigMan_Eyebrows`/`MI_BigMan_Eyelashes`, huesos `FACIAL_L/R_Eyelashes*`), cuerpo
unido (`bUseMeshMerge:true`), y FacePreset con FaceHairs vanilla.

## RUTA A — Instancia de material (recomendada: no tocas geometría)

### A0. Requisitos
- inZOI ModKit instalado (editor UE5 con plugin BlueModKit), MetaHuman 5.6 disponible.
- Plugin DCC de inZOI para Blender (Resources del ModKit).
- Para custom MIs: tu textura DIRO (y Flow si es ceja) ver el formato más abajo.

### A1. MetaHuman Editor — crear el personaje FULL
1. Crear carpeta de trabajo en el Content Browser (apunta la ruta, la usarás en Assembly).
2. Click derecho → **MetaHuman → MetaHuman Character**.
3. **Body conform ANTES que Head** (invertir el orden da problemas):
   - Body → Conform → From Template → Mesh del género:
     `Characters/AvatarParts/Body/Male/Mesh/ModKit` (o `.../Female/...`).
   - Import con Body Fit Options por defecto (`Fit from Mesh and Skeleton`).
4. Head → Conform → From Template → uno de los 9 tipos de cara:
   `/All/Game/Characters/AvatarParts/Heads/Male/Male_Head_ModKit/Mesh` (o Female).
   Import Template Options: **Alignment Options = None**, **Adapt Neck = desmarcado** → Conform.
5. Editar la cara (Transform/Sculpt; Topology=Skin para modo piel).
6. IMPORTANTE: lo que elijas en las pestañas **Materials** y **Hair & Clothing** del
   MetaHuman Editor NO se refleja en el mod. Seleccionar ahí Eyebrows/Eyelashes solo sirve
   para que el Assembly genere los grooms para exportar (siguiente paso).
7. **Download Texture Source** (4K para cara) → **Create Joints Only Rig**.
8. Assembly → Targets → Root Directory (recomendado: la misma carpeta del paso 1) → **Assemble**.

### A2. Extraer los grooms y la cara
El Assembly genera, entre otros:
- `.../Face/SKM_XXXXX_FaceMesh` (la malla de cara; **las pestañas van DENTRO de este FBX**
  si el personaje se creó como FULL — verificar que el export traiga material "Eyelashes").
- `.../Grooms/` con los grooms de cejas/barba/bigote.
- Export FBX (Export Helper del Content Browser):
  - **Cejas/Barba/Bigote: solo LOD0.**
  - Cara aparte.
- Si aparece error de Quixel/Epic: click derecho → Context Menu → Add Quixel Content → Sign In.

### A3. Blender — unir cejas a la cara (plugin DCC de inZOI)
1. Blender con el plugin inZOI instalado → pestaña **Face** → **Import Face** → Don't Save → género.
2. Abrir la malla de cara y la de cejas exportadas.
3. Botones EN ORDEN:
   1. **Attach to Face** (une cejas/barba a la cara, auto-rigging).
   2. **Material Cleanup** (renombra los slots de material para que el juego aplique los suyos —
      si falta este paso, el Material Replacement no aplica y las pestañas quedan invisibles).
   3. **Apply Neckline Skin Weights** — SOLO si moddeas la cara sola. Si es un set
      cara+cuerpo, NO pulsarlo (conforma el cuello al cuerpo por defecto y choca con tu cuerpo).
   4. **Export Asset** (exporta los FBX; que no pase nada visible en viewport es normal).
4. Resultado: `SKM_XXXXX_New_FaceMesh` con las cejas horneadas (y pestañas si venían en la cara).

### A4. ModKit — Import Helper
1. Abrir el **Import Helper** del ModKit.
2. **Source Face Mesh**: el `SKM_XXXXX_FaceMesh` ORIGINAL (debe seguir en su ruta original
   `/Game/...` — transfiere los datos MetaHuman a la nueva malla).
3. **Browse...** → seleccionar el `SKM_XXXXX_New_FaceMesh` de Blender → **Import FBX**
   (se mueve automáticamente a la ruta correcta).
4. Indicador de éxito: el material **Eyelashes se aplica automáticamente**. Si no aparece,
   el FBX no traía la sección de pestañas (volver a A2: el personaje debe ser FULL).

### A5. Proyecto CAZ
1. **CREATE A ZOI → FACE** → elegir cara base del género → **Create new mod project**.
   El Duplicate hereda `AppearanceFacePreset` con las `FaceHairs` vanilla cableadas (M_Head02
   → Male_Eyebrows_001 + Male_Eyelashes_003). Eso está bien: es el fallback.
2. Mover la malla importada al proyecto; en el wizard, **Face → Mesh** → asignar → **Yes**
   (corre Joint Matching + LOD Cleanup 0-4 + Material Replacement).
   - Nanite OFF en la malla. LODs: inZOI usa 0-4 (MetaHuman trae 0-7; el cleanup lo recorta).
3. Si es set **Face & Body**: Assign Skeleton `SK_Base` a la malla de cuerpo; en el wizard
   asignar PRIMERO cara y DESPUÉS cuerpo; esto genera además `AppearanceBodyShape`
   (`OverrideBodyMesh` + `bUseMeshMerge=true`) y `AppearancePreset`.
4. Género en Face Properties, thumbnails, y resto de workspaces (Hair/Skin/Bottom...) si el
   ZOI es completo. El `AppearancePreset` es el pegamento: referencia HeadId/BodyShapeId/
   hairId/outfitPreset de los demás ítems.

### A6. Customizar el look con instancias de material (el paso que nadie documenta)
El estilo (curvatura, grosor, densidad, peinado) NO está en la malla: está en la DIRO que
usa la instancia. Cambiar el look = cambiar texturas, cero riesgo de geometría.

1. Localizar en el Content Browser las instancias del ModKit:
   - Cejas: `/Game/Characters/AvatarParts/Groom/MetaHumansMod/Eyebrows/Materials/`
     (18 estilos: L_Scraggly, L_Shaded, M_Dense, M_Fine, M_FlatThick, M_Full, M_Messy,
     M_Natural, M_Shaded, M_SlightArch, M_Slit, M_Swept, M_Thick, M_Thin, M_Unruly,
     M_Wide, S_FlatThin, S_Shaded).
   - Pestañas: `.../Groom/MetaHumansMod/Eyelashes/Materials/`
     (6: L_Curl, L_SlightCurl, L_ThickCurl, S_Fine, S_Sparse, S_Thin).
2. Click derecho en la del estilo base → **Create Instance** (o duplicar) → guardar en
   `Materials/` de tu proyecto → nombrarla (`MI_MiZoi_Eyebrows`).
   Anatomía (verificada en MI_Eyebrows_M_Natural / MI_Eyelashes_L_SlightCurl):
   - Parent: `MI_Eyebrow_Base` (cejas) o `MI_Eyelash_Base` (pestañas), ambos bajo
     `/Game/Characters/Materials/MasterInstances/Hair/`.
   - Textura DIRO del estilo. En cejas además **Flow Map propio por estilo**; en pestañas
     se usa el Flow compartido `HairCard_Sample_Flow`. Auxiliares: `HairCard_Sample_Noise_GRY`
     (+ `Good64x64TilingNoiseHighFreq` en cejas).
3. Cambiar en tu instancia el **DIRO Map** (y **Flow Map** en cejas) por tus texturas.
4. Importar tus texturas con: **TGA RGBA, sRGB OFF, compresión Masks** (vía MCP:
   `modkit_import_texture` preset `ColorMask`). Formato DIRO (mismo sistema que hair cards):
   - R = Depth (profundidad/sombreado del card)
   - G = ID (identificación para highlights; también canas en pelo)
   - B = Root (raíz y gradiente)
   - A = Opacity (cutout/transparencia)
   - Gradientes suaves en Depth y Root: los contrastes fuertes marcan bordes.
5. Asignar tu instancia al slot de la malla: abrir el SKM de cara → Asset Details →
   **Material Slots** → el elemento "Eyebrows" (o "Eyelashes") → asignar tu MI.
   ORDEN IMPORTANTE: el Material Replacement corre al registrar la malla (A5); asigna tus
   MIs DESPUÉS de registrar. BigMan hace exactamente esto: `MI_BigMan_Eyebrows` y
   `MI_BigMan_Eyelashes` (parent MI_Eyebrow_Base/MI_Eyelash_Base) horneadas en los slots
   de `SKM_BigMan_New_FaceMesh`, apuntando a las DIRO vanilla.

### A7. Empaquetar y probar
1. Packaging (2-3 min según peso; si la llamada MCP se corta es normal: sondear la carpeta
   del proyecto hasta que aparezca el .zip con `non_ufs/JsonPatch/*.json` + `Content/Paks/`).
2. Instalar el zip en el juego y verificar en CAZ/juego (checklist abajo).

## RUTA B — Edición de malla (pestañas más largas, con riesgo)

Igual que la Ruta A hasta A3, pero en Blender se EDITA la geometría de pestañas/cejas antes
del Material Cleanup: alargar cards, cambiar curvatura, densidad.

Riesgos verificados/estructurales:
- Los weight paints de los huesos `FACIAL_L/R_Eyelashes*` (el juego anima las pestañas con
  esos huesos); un repintado torpe rompe el movimiento.
- LOD: los grooms se exportan solo LOD0; el cleanup 0-4 del registro deriva los demás —
  geometría muy fina puede quedar ruidosa en LODs altos.
- El canal A (Opacity) del DIRO debe casar con la nueva geometría o aparecen agujeros.
- Skin weights del cuello si se toca la zona (usar Apply Neckline solo en cara sola).

## Anexo MCP — equivalentes por paso (localhost:11213)

| Paso manual | Herramienta MCP |
|---|---|
| Crear proyecto | `modkit_create_project {name}` (guarda el `plugin_name` CON hash: las rutas internas lo llevan) |
| Workspaces | `modkit_add_workspace {plugin, book_class:"CAZ", book:"M_Head02", category:"Face", mode:"Duplicate", copy_assets:false}` |
| Importar malla | `modkit_import_mesh {plugin, file, item, mesh_type:"Skeletal"}` — usar el `imported_path` devuelto, NUNCA teclear ruta |
| Importar textura DIRO | `modkit_import_texture {plugin, file, preset:"ColorMask"}` |
| Cablear campos | `modkit_set_data {plugin, item, data:"AppearanceHead", field:"Mesh", value:"/<plugin_hash>/..."}` |
| Fila BodyShape/Preset | `modkit_create_row {plugin, table:"AppearanceBodyShape", id:<item>, source:"M_Average01"}` (da un error de readback "plugin not currently open" aunque el parche SÍ se materializa; verificar en disco `Content/JsonPatch/`) |
| Guardar / validar | `modkit_save`, `modkit_validate_workspace` |
| Empaquetar | `modkit_package` → sondear `Mods/<plugin>/` hasta el .zip; NO relanzar mientras ("Failed to start packaging") |

## Trampas verificadas (causas de "no aparecen")

1. **MI sin geometría**: una instancia de material no renderiza nada si la malla de cara no
   tiene la sección "Eyebrows"/"Eyelashes". La geometría viene del export FULL de MetaHuman
   (pestañas) o del Attach to Face (cejas). Es la razón por la que "copiar la instancia" no
   funciona a nadie: falta la geometría.
2. **Slots sin Material Cleanup**: el Material Replacement del juego solo aplica si los slots
   se llaman como espera; sin cleanup, pestañas invisibles sin ningún error.
3. **Rutas de asset no validadas**: `set_data` acepta cualquier string con `success:true`.
   Los assets del mod van en `/<PluginName_CON_hash>/...` (copiar el `imported_path`
   literal); lo vanilla en `/Game/...`. Una ruta mal escrita = fallo silencioso ("el ítem se
   muestra pero no carga la malla").
4. **FaceHairs sin cablear**: si el FacePreset no trae `FaceHairs`, no hay fallback vanilla.
   El Duplicate actual los hereda; un mod hecho a mano puede no tenerlos.
5. **MatchingGenderId / MatchingBodyAgeId sin equivalente**: al cambiar edad o género, la
   parte se pierde.
6. **Makeup presets (v0.5.0+)**: incluyen lentes, pestañas y cejas — aplicar uno SOBRESCRIBE
   lo que haya (comportamiento previsto del juego, no bug del mod).
7. **Bug del juego 12621** (v20260502.12303): "Eyebrows/Eyelashes not showing up on custom
   metahuman face sculpt created with Modkit" — reportado en el foro oficial; parte del
   problema es del juego, no del pipeline.
8. **Doble dibujo posible**: BigMan lleva cejas horneadas Y FaceHairs vanilla cableados.
   Si en juego se vieran duplicadas (horneada + groom vanilla encima), probar vaciando el
   `FaceHairId` correspondiente del FacePreset o cambiando el ID; verificar en juego.

## Checklist de verificación en juego

- [ ] La cara aparece (AppearanceHead.Mesh correcto).
- [ ] Pestañas visibles al acercar la cámara (sección Eyelashes + material del juego).
- [ ] Cejas visibles y en su sitio (Attach to Face + slot).
- [ ] Al cambiar de edad/género en CAZ no desaparecen (Matching*).
- [ ] Al aplicar un makeup preset, aceptar que sobrescribe (v0.5.0+).
- [ ] LOD: cejas/pestañas siguen presentes a distancia media.
- [ ] Los 9 JsonPatch del proyecto existen y sus rutas usan el hash del plugin.

## Fuentes verificadas
- Sample_BigMan: `D:/inZOIModKit/inZOIModKit/Mods/Sample_BigMan/Content/` (mallas, materiales
  MI_BigMan_Eyebrows/Eyelashes, 9 JsonPatch).
- Grooms del ModKit: `/Game/Characters/AvatarParts/Groom/MetaHumansMod/{Eyebrows,Eyelashes}/`
  (18 MI + 18 DIRO/Flow en cejas; 6 MI + 6 DIRO en pestañas; cero mallas).
- Docs oficiales volcadas: `modkit/how-to/caz/{head, facialhair, head-body}/01overview` y
  `project/caz/hair/05-texturesetup` (canales DIRO).
- Proyecto de prueba completo creado/empaquetado por MCP: `Test_ZoiFull_D2684106` (4
  workspaces, 9 parches, zip 66MB).
- Recurso `modkit://workspace-docs/texture_rules` (presets de importación; DIRO → ColorMask).

## Hallazgos validados en juego (2026-10-11, proyecto Face_W_Head02_A01220E8)

### Pestañas invisibles: causa raíz y fix SIN Blender (validado en juego)

Causa raíz probada: al registrar una malla MetaHuman sin pasar por el Material Cleanup
del plugin Blender, el Material Replacement no reconoce el slot
`eyelashes_HiLOD_shader_shader` y le asigna `MI_Char_Transparent` (material transparente
generico). La geometria de pestañas ESTA en la malla, pero invisible.

Fix via MCP (verificado: pestañas visibles en juego tras empaquetar y montar):

1. `modkit_list_meshes {plugin, item}` → localizar el slot con nombre `eyelashes`
   (slot_name `eyelashes_HiLOD_shader_shader`; su material sera MI_Char_Transparent).
2. `modkit_assign_material {plugin, item, component:"Mesh", slot:<n>, material:...}`
   con una MI del modkit:
   `/Game/Characters/AvatarParts/Groom/MetaHumansMod/Eyelashes/Materials/MI_Eyelashes_{L_Curl,L_SlightCurl,L_ThickCurl,S_Fine,S_Sparse,S_Thin}`
3. `modkit_save` y empaquetar. Cambiar estilo = reasignar otro slot/MI; look propio =
   MI con parent `MI_Eyelash_Base` + DIRO custom.

Con el flujo Blender completo (Material Cleanup), los slots se renombran a nombres inZOI
y el Material Replacement mapea las pestañas solo — el fix manual solo hace falta en la
ruta sin Blender.

### Cejas en ZOI custom: el fallback vanilla NO funciona (validado en juego)

Prueba en juego: FaceHairs=`Female_Eyebrows_001` correctamente cableado + mod montado →
SIN cejas. Los grooms vanilla NO se dibujan sobre escultos MetaHuman custom (confirma el
bug del foro 12621). Conclusion definitiva: **en un ZOI custom las cejas hay que
hornearlas en la malla de cara** (export groom LOD0 → Blender Attach to Face +
Material Cleanup → Import Helper → `*_New_FaceMesh` → re-registrar). No existe ruta sin
Blender para las cejas; para las pestañas si (fix de slot anterior).

### Firma de una malla ya pasada por Blender (detector rapido)

- `*_New_FaceMesh` en el nombre + slots Eyebrows/Eyelashes con materiales aplicados =
  paso por el workflow. Asi es `SKM_BigMan_New_FaceMesh`: el sample oficial es la foto
  del RESULTADO del flujo, no un atajo sin Blender.
- Nombre crudo del Assembly + slot eyelashes con MI_Char_Transparent = no paso por
  Blender → aplicar el fix de pestañas o rehacer el flujo.

### Proyecto roto: carpeta Meta/ perdida (causa y reparacion verificada)

Causa: copiar/mover la carpeta del proyecto mientras el ModKit la tiene en uso (Meta se
escribe al guardar/cerrar) → la copia queda sin `Meta/` → el editor LISTA el proyecto
pero no lo ABRE (`list_workspaces`: "project not found").

Reparacion verificada: recrear `Meta/` con 3 archivos JSON (modelos en
`Sample_BigMan/Meta/`): `mod_manifest.json`, `<NombreProyecto>.mod` (con ModWorkspaces:
Id/BookId/Class/Categories/DisplayName), `<ItemId>.workspace` (mesh, genderType,
bodyMesh, matchingGenderId, matchingBodyAgeId, thumbnails). Tras recrearlos el proyecto
abre, valida y guarda con normalidad.

### Empaquetado: hacerlo por MCP (evita dialogos bloqueantes)

El empaquetado por la UI tiene confirmaciones modales que DEJAN EL PROCESO PARADO hasta
clicarlas (si no estas delante, se queda congelado). Por MCP: `modkit_package` corre sin
dialogos y el zip aparece en `Mods/<plugin>/` a los 2-4 min. Patron disparar-y-sondear:
lanzar, sondear la carpeta (Saved/Cooked crece), NO relanzar mientras cocina ("Failed to
start packaging").
