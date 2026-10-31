---
source: local
url: https://dev.epicgames.com/documentation/metahuman/metahuman-creator-export-tool-in-unreal-engine + sondeos en disco/ModKit 2026-10-13
title: "Puente Zoi→DNA→Blender: exportar el MetaHuman conformado del ModKit como .dna e importarlo con Character DNA en Blender"
generado: 2026-10-13
---

# Zoi → DNA → Blender: el puente directo entre el ModKit y los addons Polyhammer

Hipotesis planteada por el tester (2026-10-13): *"se puede exportar el
MetaHuman, hacer el paso a paso (conform para inZOI), guardarlo y usarlo en
el ModKit; se puede sacar el DNA y en Blender convertir un inZOI completo a
DNA"*. Investigacion del mismo dia. Etiquetas: [VERIFIED] (ejecutado con
salida literal), [DOC] (documentado con fuente), [INFERRED], [UNKNOWN].

**Veredicto corto: SI, con matices.** El ModKit trae el pipeline de export
DCC de MetaHuman (head.dna + body.dna + texturas en ZIP) dentro de sus
propios binarios [VERIFIED-en-disco], y el addon Character DNA importa ese
.dna en Blender [DOC]. El matiz: lo que llega a Blender no es "un Zoi
extraido del juego", es el MetaHuman creado en el editor del ModKit
CONFORMADO a las mallas plantilla de inZOI (9 face types + body male/female)
— que es exactamente lo que el flujo CAZ FACE oficial usa. Y el camino de
vuelta al juego NO es importando .dna: es el Assemble → SkeletalMesh →
proyecto de mod documentado.

## 1. La cadena, tramo a tramo

| # | Tramo | Estado | Evidencia |
|---|---|---|---|
| 1 | Crear MetaHuman en el ModKit (right-click → **MetaHuman → MetaHuman Character**) | [DOC] | wiki CAZ Head 01overview (carpeta media "Meta56" = flujo del build actual) |
| 2 | Conform: **Body primero** (Conform → From Template con `Characters/AvatarParts/Body/{Male,Female}/Mesh/ModKit`), luego Head (9 face types de inZOI) | [DOC] | wiki CAZ Head 01overview pasos 3-6: "The Body must be conformed before the Head" |
| 3 | Sculpt/Transform de la cara + Download 4K textures + Create Joints Only Rig | [DOC] | wiki pasos 7-9 |
| 4 | **Assemble** → Face Skeletal Mesh → mover al proyecto de mod CAZ FACE → register en campo Mesh | [DOC] | wiki pasos 10-15 (flujo oficial de vuelta al juego) |
| 5 | **DCC Export** del MetaHuman → ZIP con head.dna + body.dna + .png + .json | **[VERIFIED 2026-10-14]** tester lo ejecuto desde el editor del ModKit (`dna_modkit.zip`, manifest `exportEngineVersion: "5.6.1-0+UE5"`) | ver seccion 2 |
| 6 | Arrastrar `head.dna` (y body) a Blender → Character DNA lo evalua con OpenRigLogic 1:1 con UE | **[VERIFIED 2026-10-14 via MCP]** `{'FINISHED'}`, head_rig 875 huesos + face board 435 + mallas LOD0; RigLogic fluyendo (pose Anger → FACIAL_C_Jaw ≠ 0, epoch 6→7) | ver seccion 2.1 |
| 7 | Character Control Rig → Generate Metarig (Rigify o **Auto-Rig Pro 3.78.34+**) → Generate Control Rig → animar (Mixamo/mocap/keyframes) | [DOC] | docs.polyhammer.com/character-control-rig-addon |
| 8 | Export FBX UE-conventions (Z-up, 100x, root `root`) o export .dna editado | [DOC] | Control Rig Export Animation + Character DNA Output |
| 9 | Vuelta a inZOI: NO por .dna — por el flujo oficial (Assemble→SKM→proyecto mod) o (animaciones) ver pipeline-animaciones-blender-inzoi.md | [INFERRED] | el ModKit consume SkeletalMeshes/FBX; no hay importer de .dna |

## 2. Evidencia del DCC Export dentro del ModKit [VERIFIED-en-disco]

El ModKit (`D:\inZOIModKit`, UE 5.6.1) incluye la suite MetaHuman completa
(misma version de engine que exige el ecosistema):

- `Engine/Plugins/MetaHuman/`: MetaHumanCharacter, MetaHumanAnimator,
  MetaHumanCalibrationProcessing, MetaHumanCoreTechLib, MetaHumanLiveLink,
  MetaHumanSDK
- `Engine/Plugins/Animation/DNACalib/` (Binaries Win64 presentes) — la
  libreria de manipulacion de DNA de Epic
- Strings literales extraidas de
  `Engine/Plugins/MetaHuman/MetaHumanCharacter/Binaries/Win64/UnrealEditor-MetaHumanCharacterEditor.dll`:
  - `DCC Export`
  - `EMetaHumanDefaultPipelineType::DCC`
  - `FMetaHumanExportDCCManifest` (struct de manifiesto del export)
  - "generated zip archive with the assets packaged for DCC tools"
- `MetaHumanAnimator/.../UnrealEditor-MetaHumanIdentityEditor.dll`:
  `ExportDNADataToFiles` (export de DNA del Identity/frame)
- Iconos de UI: `IdentityExportDNA_16.svg`,
  `IdentityToolbarExportDNA_20.svg` (Content/Icons de MetaHumanAnimator)

Y [DOC Epic] el comportamiento de ese pipeline en UE 5.6
(dev.epicgames.com, "MetaHuman Creator Export Tool in Unreal Engine"):
> "The DCC Export option exports head DNA, body DNA, and texture files as a
> zip archive containing .dna, .png, and .json files, for use in a DCC
> application such as Maya or Houdini."

[DOC Epic "Saving and Exporting Data" + "DNA, Rig Definition and Rig
Operation"]: el DNA codifica geometria de cabeza Y cuerpo, esqueleto en pose
neutral por LOD y skin weights por LOD; el body DNA del DCC Export sirve
para ensamblar en Maya (Character Assembler) — la funcion que en Blender
cubre el addon Character DNA (+ Assembly para grooms/ropa).

Pendiente de cierre [UNKNOWN-UI]: abrir el editor del ModKit, seleccionar un
MetaHuman Character conformado y confirmar que el boton/menu **DCC Export**
esta expuesto y genera el ZIP (los binarios existen; la UI del ModKit podria
recortarla). Prueba minima de 10 minutos que cierra el tramo 5.

## 2.1 CIERRE U-DNA tramos 5-6 (2026-10-14) — CERRADOS [VERIFIED]

El tester ejecuto el DCC Export desde el editor del ModKit el 2026-10-14
(`D:\BigMan\dna_modkit.zip`, 313 MB). Contenido literal del ZIP (74
archivos): `head.dna` (11.274.513 B), `body.dna` (4.522.888 B),
`ExportManifest.json` (literal: `{"metaHumanName": "NewMetaHumanCharacter",
"exportPluginVersion": "1.0.0", "exportEngineVersion": "5.6.1-0+UE5",
"exportedAt": "2026.10.14-00.20.16"}` — **exportado desde el propio
ModKit UE 5.6.1**), `Maps/` (Head/Body/Chest/Teeth/Eyes/Eyelashes + wrinkle
maps animados CM1-3/WM1-3), `SourceAssets/` (masks de wrinkle maps, shaders
.fx, irradiance), `NewMetaHumanCharacter.png`.

Import en Blender via MCP (socket 9876, operador `character_dna_pro.import_dna`
con `filepath=head.dna`; la escena debe estar a escala 1.0). Salida literal:

```
Info: Imported "body.dna" successfully!
Info: Imported "head.dna" successfully!
IMPORT_RESULT: {'FINISHED'}
```

Objetos resultantes (18 en escena): `NewMetaHumanCharacter_head_rig`
(ARMATURE, 875 huesos), `_body_rig` (342 huesos), `_face_gui` (435 huesos =
face board), mallas LOD0 (head 24.049 verts, body, teeth, saliva, eyeLeft/
Right, eyeshell, eyelashes, eyeEdge, cartilage) y los carriers
`_head_native`/`_body_native`/`_switches_native` (EMPTIES con custom props:
`outputs[]` — las salidas de RigLogic —, `epoch`, `raw`, `gui`, ...).

**RigLogic evaluando [VERIFIED]:** aplicada la pose de libreria
`Anger-03_Anger/pose.json` (recurso del addon, 163/166 controles) sobre los
huesos `CTRL_*` del face_gui (canal LOCATION) → `FACIAL_C_Jaw` del head_rig
pasa de [0,0,0] a **[4.9e-05, -0.003096, 0.002073]** y `epoch` 6→7. Los
7560 drivers del head_rig leen `head_native["outputs"][N] + 0 * epoch`
(literal de un driver: `EXPR: output + 0 * epoch`, target dpath
`["outputs"][6966]`). La malla evaluada responde (head 24.049 verts).

Escena guardada: `D:\BigMan\dna_modkit\NewMetaHumanCharacter.blend`
(8,3 MB; face board en pose neutra).

### Trampas halladas al pilotar por MCP

1. **La evaluacion corre por TIMERS de Blender, no por handlers**: cambiar
   el pose de un control y llamar `force_evaluate()` DENTRO de la misma
   llamada MCP puede colgar la llamada >5 min (tormenta de re-evaluacion de
   7560 drivers). Patron seguro: aplicar pose → cerrar la llamada → esperar
   2-4 s → leer en llamada separada (`epoch`, huesos, malla evaluada).
2. **Un solo control movido puede no propagar** en la primera lectura; la
   via programatica fiable es el `pose.json` de la libreria del addon
   (`resources/poses/face/...`) aplicado a los `CTRL_*` (location-driven) —
   es exactamente lo que hace el panel UI del addon.
3. La opcion `import_shape_keys` del import va OFF por defecto; RigLogic
   genera las shape keys en caliente via drivers/outputs — no hace falta
   para animar/bakear (el bake las escribe a keyframes).
4. El enum de la pose library llega VACIO por MCP hasta que la UI del panel
   se ha dibujado una vez (previews collection sin root inicializado) —
   usar los pose.json directamente.

### Tramo 7 — CERRADO [VERIFIED 2026-10-14, via MCP]

1. **Generate Metarig** (framework Auto-Rig Pro, ejecutado por el tester en
   UI): `NewMetaHumanCharacter_metarig` ARMATURE de 427 huesos, snapped al
   esqueleto del DNA [VERIFIED readback].
2. **Generate Control Rig** (`character_control_rig.generate_control_rig`
   via MCP): salida literal del builder ARP — "Aligning arm bones...",
   "Align fingers... .l/.r", "Aligning facial...", "Info: Rig Done",
   **"Info: Built control rig for 'NewMetaHumanCharacter' with 84
   constraints."** + `{'FINISHED'}`. Resultado:
   `NewMetaHumanCharacter_control_rig` (ARMATURE, 421 huesos), constrrenado
   al `body_rig` del DNA; el metarig se consume (desaparece) [VERIFIED].
3. **Import Mixamo** (`character_control_rig.import_fk_animation` con
   `filepath="Ascending Stairs.fbx"`, clip Mixamo genuine — esqueleto
   `mixamorig:Hips` verificado en el binario): salida literal **"Info:
   Imported FK animation 'NewMetaHumanCharacter_Ascending Stairs' onto
   'NewMetaHumanCharacter'."** + `{'FINISHED'}` → Action
   `NewMetaHumanCharacter_Ascending Stairs` (frames 0-33). Deteccion de
   esqueleto Mixamo AUTOMATICA (sin mapeo manual) [VERIFIED].
4. **La anim conduce el rig [VERIFIED]:** pose-digest del control rig
   f0/f15/f30 = 223.901 / 226.717 / 196.138 (se mueve);
   `c_spine_01.x` delta f0→f15 = 0.2938. Escena guardada en
   `D:\BigMan\dna_modkit\NewMetaHumanCharacter.blend` con la Action ligada
   al control rig.

**Cadena U-DIna COMPLETA y VERIFICADA:** ModKit (conform plantillas inZOI)
→ DCC Export (.dna) → Blender Character DNA (RigLogic evaluando) →
Control Rig ARP (84 constraints) → Mixamo auto-retargeteado → Action.

### Tramo 8 — CERRADO COMPLETO, veredicto EN JUEGO [VERIFIED-visual tester 2026-10-14]

**U-ANIM-1 + U-ANIM-2 cerrados.** Receta final verificada (proyecto de referencia
`UAnim01_8EADDAC1`, fila `UAnim_Stairs`, montage `AM_AscendingStairs`, veredicto
visual: "sube y regresa" — el Zoi ejecuta el clip de Mixamo en el juego):

```
1. Blender: export_body_animation -> FBX solo-animacion (esqueleto MetaHuman
   del DNA, convenciones UE). Salida literal: 'Exported body animation
   to ...NewMetaHumanCharacter_body.fbx' {'FINISHED'}
2. ModKit: Content Browser -> Import contra SK_Base
   (/Game/Characters/Skeletons/SK_Base) -> AnimSequence
   (+ Create AnimMontage opcional). Salidas: 'Imported...', assets en
   Content/ del plugin; mod_assethash declara sus clases.
3. FILA MONTAGE (Append) — EL ESLABON CRITICO, sin ella el juego responde
   "no valid montage for this character":
   Struct "Montage", PatchList Append, Value:
     Id = "AM_AscendingStairs"  (= basename del campo Animation de la fila
          AnimCharacter — NAME-MATCHING CONFIRMADO: el juego resuelve el
          montage por basename(Animation) == Montage.Id)
     GroupName "DefaultGroup", TotalPlayLength (segundos), BlendIn/Out 0.25,
     Sections: [{Name:"Default", NextSectionName:"None", Time:0, IsLoop:false}]
     AnimTracks: [{SlotName:"DefaultSlot", AnimSegments:[{AnimReferenceName:
       "/<plugin>/<secuencia>.<secuencia>", bEnableRootMotion:false,
       bForceRootLock:false}]}]
4. Fila AnimCharacter_Interaction (Append, esto SI funciona por MCP):
   CharacterAnimConfigList -> AnimInfoList[0].Animation =
   "/<plugin>/<montage>.<montage>" (RUTA SIMPLE, sin prefijo de clase) +
   Gender/AnimGrowthStep "Default", AnimPostureId ["Stand"],
   StartAnimSection "Default" (debe existir en las Sections de la fila Montage)
5. (Opcional, para menu de interaccion) Action_Interaction
   {Command:"PlayAnim", S1:"<fila anim>"} + Interaction + InteractionBag
   (molde vanilla Self_Squat_NonAuto: visible, sin condiciones)
6. Package CON EL JUEGO CERRADO -> auto-despliegue -> REINICIAR el juego
   (JsonPatch de mods NO aplica en caliente) -> motion.play anim_id=<fila>
   Salida literal: Playing 'UAnim_Stairs' (length=1.10s, section=Default) ->
   a los 3 s: Idle (no motion playing). VEREDICTO VISUAL: "sube y regresa".
```

**Como meter la fila Montage (sus canales normales estan MUERTOS):**
- MCP `create_row`/`set_data` = NOOP SILENCIOSO (success:true, nada persiste;
  coherente con su marca ModHidden) [VERIFIED]
- Data Editor UI: no crea filas Montage [VERIFIED-tester]
- Edicion pre-package: el empaquetador la PISA (regenera los parches desde su
  estado) [VERIFIED]
- **VIA A (adopcion oficial)**: escribir `Content/JsonPatch/Montage_patch.json`
  a mano en el PROYECTO -> el editor detecta el fichero externo y pide
  confirmacion -> CONFIRMAR -> la fila entra en el estado del editor -> los
  packages siguientes la llevan NATIVA (verificado: deploy 11:21 con la fila
  dentro del ZIP sin tocar nada mas) [VERIFIED]
- **VIA B (deploy directo)**: escribir el parche en
  `Dokumente/inZOI/Mods/<plugin>/non_ufs/JsonPatch/` DESPUES de empaquetar
  (sin checksums sobre JsonPatch: mod_assethash solo cubre materiales y clases
  de assets) [VERIFIED]

**Trampas del tramo runtime [VERIFIED]:**
1. "no valid montage for this character" = falta la fila Montage (la ruta del
   asset y el contexto del personaje ya estaban bien cuando aparecia)
2. Package con el juego corriendo -> `The process cannot access the file
   '...ucas' because it is being used by another process` -> BUILD FAILED +
   despliegue a medias (.pak nuevo, .ucas/.utoc viejos) -> re-empaquetar con
   el juego cerrado para uniformar el trio
3. JsonPatch de mods no aplica en caliente: siempre reiniciar el juego
4. El StartAnimSection de la fila AnimCharacter debe existir en las Sections
   de la fila Montage (Default/Loop/End)
5. El Zoi en otra postura (sentado) puede enmascarar la anim (fila
   AnimPostureId ["Stand"]): lanzar con el Zoi de pie/idle
6. Errores LogJson "Array used as String" (~2.730/burst, 111.955 acumulados)
   al guardar parches de AnimCharacter_Interaction = quirk preexistente del
   re-parse de la tabla vanilla por el editor; el parche se guarda bien

## 3. Matiz importante: que es exactamente "el DNA del Zoi"

- Lo que se exporta es el **MetaHuman del editor del ModKit conformado a las
  plantillas de inZOI** (mismas mallas base que usa el flujo CAZ FACE
  oficial). NO es una extraccion del Zoi vivo del save del juego con todas
  sus customizaciones acumuladas [INFERRED: no existe exporter de
  "instancia de Zoi en partida"].
- Para head: el conform usa los 9 face types de inZOI → el DNA resultante
  evalua la cara con RigLogic igual que en UE/inZOI [DOC: misma tecnica que
  el juego, misma topologia MetaHuman].
- Para body: el DNA del body lleva esqueleto + skin weights del body
  conformado (inZOI body template). PERO el esqueleto de animacion del JUEGO
  para Zois sigue siendo SK_Base del juego; el body DNA es material de
  autoria, no un sustituto del esqueleto contra el que se pesa para
  `modkit_import_mesh` [INFERRED fuerte — los pesos para el mod van contra
  SK_Base, ver pipeline-unas-zoi.md].
- MetaHuman-DNA-Calibration (el repo de Epic usado por el flujo legacy
  inZOI/Maya) **NO soporta personajes creados en UE 5.6** [DOC GitHub]: los
  5.6 van por DCC Export + "MetaHuman for Maya" (Fab) — o, en Blender,
  Character DNA/Assembly de Polyhammer.

## 4. Protocolo de cierre (U-DNA, propuesta)

1. ModKit: crear MetaHuman Character en un proyecto sandbox; Body Conform
   From Template (Female) + Head Conform From Template; sin sculpt.
2. Buscar el DCC Export (menu del asset/Character panel). Si aparece →
   export ZIP a carpeta de trabajo. Pegar salida literal (archivos
   contenidos).
3. Si NO aparece: comprobar si el pipeline DCC es alcanzable via Python
   (`unreal` API del MetaHumanCharacter) — registro de log.
4. Blender 5.2.1: arrastrar `head.dna` → Character DNA importa; pegar
   consola. Abrir pestaña Character DNA, verificar rig instance + face
   board (controles amarillos mueven la cara).
5. Control Rig: Generate Metarig (framework Auto-Rig Pro 3.78.63 ya
   instalado; Rigify habria que habilitarlo) → Generate Control Rig →
   importar un clip Mixamo (Without Skin) → verificar retarget automatico.
6. Resultado esperado: un personaje inZOI-conformado animandose en Blender
   con evaluacion RigLogic → captura/veredicto tester.

Riesgos conocidos: UI recortada por inZOI (paso 2 falla → tramo via Python o
via proyecto UE 5.6 vanilla con los mismos assets si fueran exportables);
conform del head con Alignment `None`/Adapt Neck unchecked (wiki) — replicar
esas opciones exactas; texturas 4K solo tras "Download Texture Source" [DOC
wiki paso 8].

## 5. Relacion con el resto del paquete

- `polyhammer-character-dna-addon.md` — que hace el addon con el .dna
- `polyhammer-character-control-rig-addon.md` — rig y animacion encima
- `polyhammer-character-assembly-addon.md` — la alternativa UE 5.8+
  (Interchange) que NO corre en el ModKit (5.6.1); el DCC Export nativo es
  la via que SI corre dentro del ModKit
- `pipeline-animaciones-blender-inzoi.md` — mapa general de animaciones

### Extension U-DANCE (baile largo con Loop) — trampas nuevas [VERIFIED 2026-10-14]

1. **FPS del FBX**: exportar SIEMPRE a 30fps estandar (eFrames30). Un clip de
   60fps exportado con escena a 60fps produce un FBX con CustomFrameRate que UE
   ignora → secuencia 2x larga → el montage la comprime → baile acelerado.
   Fix: re-escalar las claves a 0.5x (API slotted de Actions en Blender 5.x:
   `for layer in act.layers: for strip in layer.strips: for cb in strip.channelbags:
   for fc in cb.fcurves`) y exportar con escena a 30fps.
2. **Colocación/salida**: extender la secuencia con la primera/última pose
   sostenida (fcurves hold fuera del rango de claves). `scene.frame_start` NO
   admite negativos → desplazar las claves +N y exportar 0..(N+dance+M).
   Secciones del montage alineadas EXACTAMENTE a los bounds:
   Default@0 (colocación) → Loop@N (baile, IsLoop) → End@N+dance (salida).
3. **Reimport in-situ**: reimportar un FBX sobre una secuencia existente
   ACTUALIZA el contenido pero CONSERVA el nombre del asset → la fila Montage
   debe apuntar al NOMBRE DEL ASSET, no al nombre del FBX.
4. **Capas de animación**: el montage propio va en DefaultGroup y se layera;
   con el Zoi sentado solo se añade encima (cintura). Para posesión completa
   del cuerpo: disparar por interacción del juego (posture transition) o
   aceptar el layering.
