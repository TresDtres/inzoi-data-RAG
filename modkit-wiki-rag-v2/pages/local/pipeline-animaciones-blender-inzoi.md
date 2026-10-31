---
source: local
url: https://docs.polyhammer.com/ + mod-docs.playinzoi.com + sondeos MCP 2026-10-13
title: "Pipeline de animaciones Blender/inZOI: addons Polyhammer (DNA, Control Rig, Assembly), Auto-Rig Pro, Mixamo y el ModKit — contraste y pasos"
generado: 2026-10-13
---

# Animaciones para inZOI desde Blender: addons Polyhammer, Auto-Rig Pro, Mixamo y el ModKit

Sintesis del sondeo del 2026-10-13 contra el build juego `20260915.15331.W-325961`
/ ModKit UE 5.6.1 (121 tools MCP) + documentacion Polyhammer/ARP/Mixamo/Blender.
Etiquetas: [VERIFIED] (ejecutado hoy con salida real), [DOC] (documentado, con
fuente), [INFERRED], [UNKNOWN].

## 0. Mapa del stack (que es cada cosa y quien habla con quien)

```
Blender 5.2.1 LTS [VERIFIED via Blender MCP]
 ├─ Character DNA (Pro)     : importa .dna MetaHuman; OpenRigLogic evalua cara/cuerpo 1:1 con UE
 ├─ Character Control Rig   : control rig Rigify|ARP sobre el .dna; import/export animaciones
 ├─ Character Assembly      : MetaHuman COMPLETO (ropa, grooms, materiales) via Interchange (UE 5.8+)
 ├─ Auto-Rig Pro 3.78.63    : rigging propio + Remap (retarget Mixamo/Rokoko/Xsens...) + export game engines
 └─ Rigify                  : presente pero NO habilitado [VERIFIED]
ModKit inZOI (UE 5.6.1)
 ├─ MetaHuman Editor integrado (CAZ Head/Body, conform From Template) [DOC wiki Meta56]
 ├─ MCP: 121 tools; NINGUNA importa animaciones [VERIFIED tools/list 2026-10-13]
 └─ Animation modding = DATOS: filas de tablas que apuntan a assets AnimMontage/AnimSequence
```

Los tres addons Polyhammer SI tienen puente con el ecosistema inZOI, y es
directo: el propio ModKit trae el pipeline **DCC Export** de MetaHuman
(`EMetaHumanDefaultPipelineType::DCC` + "zip archive with the assets
packaged for DCC tools", strings literales de
`UnrealEditor-MetaHumanCharacterEditor.dll` [VERIFIED-en-disco 2026-10-13]),
que exporta **head.dna + body.dna + texturas** de un MetaHuman creado y
CONFORMADO a las plantillas inZOI en el propio editor del ModKit (el mismo
paso a paso del flujo CAZ FACE). Ese .dna lo importa el addon Character DNA
en Blender → Control Rig → animacion → y la vuelta al juego es por el flujo
oficial (Assemble → SkeletalMesh → proyecto mod), nunca importando .dna.
Detalle completo y protocolo de cierre (U-DNA):
pages/local/pipeline-zoi-a-dna-blender.md. Lo que NO existe: extraer el Zoi
vivo de una partida (save) como DNA [INFERRED: no hay exporter de instancia
de juego], y el plugin Interchange de Polyhammer (UE 5.8+) no corre en el
ModKit (5.6.1).

## 1. Como el juego consume animaciones (lado inZOI) [VERIFIED 2026-10-13]

Tablas de animacion del ModKit (salida literal de `modkit_list_tables`):

`AnimCharacter_Active, AnimCharacter_AddOnAnim, AnimCharacter_Deprecated,
AnimCharacter_Interaction, AnimCharacter_Interaction_System,
AnimCharacter_Locomotion, AnimCharacter_Posture, AnimCharacter_SubAction,
AnimCharacter_System, AnimCharacter_Talk, AnimCharacter_Vehicle, HandAnim,
AddOnAnimProfile, AnimAttachMesh, AnimGameObject_Interaction, DreamAnim,
OneTimePostureAnim, VoicePreviewAnimation`

Estructura de una fila (`AnimCharacter_Interaction` fila `Sample`, salida
literal de `modkit_get_row_batch`):
- `PlayingComponentName: "Root"` (o Head/Hair), `StartAnimSection: "Default"`,
  `StopOtherComponentOnFinish`
- `CharacterAnimConfigList[]` → por posture (`AnimPostureId:["Stand"]`,
  `AnimBodyParts/AnimGrabParts/AnimSlotDirection`) y dentro
  `AnimInfoList[]` por Gender/GrowthStep con:
  **`Animation: "/Script/Engine.AnimMontage'/Game/Characters/Anims/Interaction/Female/Sit_Chair_Root_Loop_Interaction_Montage...'"**
  + TotalPlayLength/LoopPlayLength/RateScale/RandomLoopAnims

Categorias documentadas [DOC wiki how-to/animation/characteranimation]:
- **Interaction** = Animation Montages (dialogo, gestos, acciones con objeto)
- **Locomotion** = Animation Sequences (idle/walk/run + Idle Random Anims con
  Chance to Play)
- **Stat Locomotion** = sequences por estado (Sleepwalking, drunk...) con
  swim/face anims
- Vehiculos: curvas por pieza (Delta Location/Rotation, Duration, Smooth) +
  `AnimCharacter_*` Ids por asiento [DOC wiki project/vehicle/04-animation]
- Facial: tabla `FacialExpression` [DOC wiki]; unica data-asset de animacion:
  `DA_StaticMeshAnim` (objetos) [VERIFIED modkit_list_data_asset_types]

**Consecuencia practica:** un mod de animacion es, por defecto, un mod de
DATOS — reasignar que asset juega una interaccion/locomocion (patron Override
de fila conservando Id vanilla, o `modkit_create_row` para fila nueva). La
v1 ya observo el caso real: redirigir animaciones vanilla via Override de
`AnimCharacter_Interaction`. El MCP no necesita importar animaciones para
ESTE nivel.

## 2. Crear la animacion en Blender (los caminos)

| Origen | Herramienta | Resultado | Estado |
|---|---|---|---|
| Keyframes manuales | rig del Zoi original en Blender (el tester tiene Zois exportados) | Action Blender | [DOC] practica del tester |
| **Mixamo** | FBX Without Skin → retarget (Control Rig import: detecta Mixamo automatico; ARP Remap: preset Mixamo) | Action sobre el rig destino | [DOC] ver mixamo-animaciones-blender.md |
| Mocap (Rokoko/Xsens) | mismo import del Control Rig o Remap | Action | [DOC] |
| MetaHuman Animator | face board + body: export desde UE Level Sequence, import 1-click | face board/body anims | [DOC] docs.polyhammer |
| Live Link | fuente de actuacion; retarget posterior al rig Zoi | [DOC] hipotesis de plan-tiro-arco, sin flujo completo confirmado | [UNKNOWN] |

Reglas del lado Blender [VERIFIED/DOC heredados]:
- Trabajar a escala de escena 1; el exporter del Control Rig aplica la
  conversion UE (Z-up, 100x, root `root`) el mismo [DOC FAQ Control Rig].
- Export del Control Rig: bake de transforms VISUALES (lo que ves es lo que
  sale), Bake Step 1-2, rango = frames Start/End de la escena [DOC].
- Para FBX generico: armature + action activa, 1u=1cm (preset documentado del
  ModKit), sin regenerar/fusionar huesos de esqueletos compartidos del juego
  [VERIFIED regla de animar-cabello-largo.md].

## 3. Meter una animacion NUEVA en el juego (el tramo abierto)

Lo documentado/cerrado:
1. [VERIFIED] `modkit_import_mesh` acepta `mesh_type: Static|Skeletal` —
   mallas skinneadas al esqueleto del juego SI entran al mod.
2. [VERIFIED] las filas `AnimCharacter_*` referencian assets por ruta
   (`/Script/Engine.AnimMontage'/Game/...'`) — un override puede apuntar a
   cualquier ruta de asset.
3. [DOC] el ModKit es un editor UE 5.6.1 completo (Content Browser, import
   FBX en CAZ/Build documentado para MESHES).

**CERRADO — veredicto EN JUEGO [VERIFIED-visual tester 2026-10-14]: "sube y
regresa"** — el Zoi ejecuta el clip de Mixamo (`motion.play UAnim_Stairs` →
`Playing 'UAnim_Stairs' (length=1.10s)`). Receta literal COMPLETA (incluido el
eslabon critico — la fila de la tabla `Montage` con name-matching — y las 6
trampas del tramo runtime) en `pipeline-zoi-a-dna-blender.md` tramo 8. Proyecto
de referencia: `UAnim01_8EADDAC1` (fila `UAnim_Stairs`, montage
`AM_AscendingStairs`). El molde de menu (Action/Interaction/InteractionBag)
esta mintado en el mismo proyecto; su veredicto visual queda como pendiente
menor.
- [UNKNOWN] si el juego acepta anims sobre esqueleto con proporciones
  distintas (el FAQ del Control Rig recomienda esqueleto de igual
  proporcion + Retargetor de UE si no) [DOC aplicable a inZOI tambien].

Protocolo minimo del experimento (cuando se quiera cerrar):
A. Importar al ModKit un FBX con solo animacion sobre SK_Base exportado.
B. Crear AnimMontage en el Content del plugin (Default/Loop/End secciones).
C. `modkit_create_row` en `AnimCharacter_Interaction` (o Override de fila
   vanilla) apuntando `Animation` al montage propio.
D. `modkit_package` → revisar Paks del ZIP → probar en juego con
   `motion.play anim_id=...` (CLI del juego, disponible via MCP 11212 desde
   el 15-oct).

## 4. Contraste de los 3 addons Polyhammer con el ModKit

| Tema | Polyhammer (Blender) | inZOI ModKit | Enlace |
|---|---|---|---|
| Personaje | .dna MetaHuman del usuario (OpenRigLogic) | Zoi basado en MetaHuman; MetaHuman Editor integrado para CAZ | **DCC Export del propio ModKit** → head.dna/body.dna → Character DNA en Blender [VERIFIED-en-disco + protocolo U-DNA en pipeline-zoi-a-dna-blender.md] |
| Rig/animar | Control Rig (Rigify/ARP) + face board | no hay rigging UI; animaciones = datos | — |
| Export anim | FBX convenciones UE 1-click | sin flujo documentado de import de anims | ver protocolo seccion 3 |
| Pelo | Assembly: XPBD + Geometry Nodes + bake por personaje | juego: PhysicsAsset por peinado (HairRigidBody) | tecnica distinta; la del juego manda |
| Interchange | plugin UE **5.8+** | ModKit UE **5.6.1** | Interchange NO instalable en el ModKit [INFERRED por version] |
| Materiales | Texture Logic (wrinkle maps por DNA) | materiales por capas R/G/BG + Mask (recolor) | incompatibles; el juego usa su pipeline |

## 5. Auto-Rig Pro en conjunto [VERIFICADO instalado 3.78.63 + ARP Tools 3.78.51]

- **Como framework del Control Rig addon**: soportado (>=3.78.34); el
  addon genera el control rig con huesos ARP y OpenRigLogic evalua el DNA.
  Alternativa Rigify (habria que habilitarla primero [VERIFIED: hoy OFF]).
- **Por si solo para MetaHuman**: el FAQ del Control Rig desaconseja el
  Quick Rig de ARP para MetaHuman (construye RBF/twist/swing a su manera, no
  coincide con UE) [DOC].
- **Para retarget Mixamo→Zoi**: Remap con preset Mixamo + Replace Namespace
  (`mixamorig:Hips` → `hips`/equivalente del Zoi) [DOC].
- **Para riggear un Zoi custom**: ARP puede riggear la malla exportada del
  juego, pero el resultado debe EXPORTARSE contra el esqueleto original del
  juego (pesos contra SK_Base), no contra el rig ARP [INFERRED fuerte].

## 6. Consultas rapidas (respuestas directas para el RAG)

- **¿Puedo usar los 3 addons Polyhammer con el ModKit de inZOI?** SI, via
  DCC Export: crear/conformar el MetaHuman en el editor del ModKit (paso a
  paso oficial del CAZ FACE), exportarlo como .dna (pipeline presente en los
  binarios del ModKit) e importarlo en Blender con Character DNA →
  Control Rig (ARP/Rigify) → animar. Vuelta al juego por el flujo oficial
  (Assemble→SkelMesh), no por .dna. Restricciones: Interchange exige UE
  5.8+ (no corre en el ModKit) y no se puede extraer un Zoi vivo del save
  — el DNA es del MetaHuman conformado a plantillas inZOI. Detalle en
  pipeline-zoi-a-dna-blender.md.
- **¿Como se crea una animacion para inZOI?** VERIFICADO EXTREMO A EXTREMO
  (2026-10-14, veredicto visual "sube y regresa"): Blender (keyframes, Mixamo,
  mocap) → FBX UE-conv → ModKit import contra SK_Base → **fila Montage**
  (name-matching) + fila `AnimCharacter_Interaction` → package (juego
  cerrado) → reinicio → motion.play. Mod de datos puro (reasignar anims
  vanilla) sigue siendo la via corta. Receta: pipeline-zoi-a-dna-blender.md
  tramo 8.
- **¿Como uso Blender en el flujo?** Escena escala 1, skinning contra el
  esqueleto del juego (1u=1cm, jamas regenerar huesos), export FBX
  armature+action; para MetaHuman propio: .dna con Character DNA, animar con
  Control Rig (ARP o Rigify), export UE-conventions.
- **¿Mixamo?** Si: FBX Without Skin 30fps → retarget (Control Rig detecta
  Mixamo automatico sobre rigs MetaHuman; ARP Remap para el rig del Zoi).
- **¿AutoRig Pro junto con los Polyhammer?** Si: es uno de los dos
  frameworks oficiales del Control Rig (3.78.34+; instalado 3.78.63).

## 7. Paginas hermanas (este paquete)

- `pipeline-zoi-a-dna-blender.md` — puente Zoi→DNA→Blender (DCC Export del ModKit + Character DNA)
- `polyhammer-character-dna-addon.md` — docs completas del addon DNA
- `polyhammer-character-control-rig-addon.md` — docs completas del Control Rig
- `polyhammer-character-assembly-addon.md` — docs completas Assembly + Interchange + portal
- `polyhammer-autorig-pro-docs.md` — docs oficiales ARP (Remap, GE Export, rigging)
- `mixamo-animaciones-blender.md` — Mixamo: export/retarget/receta
- `blender-fbx-import-export-manual.md` — manual Blender 5.2 FBX
- fuentes crudas adicionales en `D:\modkit-data-rag\raw-polyhammer\`
  (clones de poly-hammer-docs, character-dna-addon, BlenderTools
  send2ue/ue2rigify; extracciones HTML→MD)

Pendientes: experimento de la seccion 3 (A–D) el 15-oct con el MCP del
juego activo; veredicto visual de retarget Mixamo→Zoi (U-ANIM).
