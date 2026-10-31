---
source: local
url: https://www.mixamo.com/ (servicio Adobe) + practicas de la comunidad
title: "Exportar animaciones de Mixamo hacia Blender (y de ahi a inZOI): opciones de export, retargeting y receta"
generado: 2026-10-13
---

# Mixamo → Blender → inZOI: exportar animaciones y retargetearlas

Investigacion 2026-10-13. Etiquetas: [DOC] (documentado, con fuente),
[INFERRED] (deduccion), [UNKNOWN] (pendiente de prueba en vivo).

**Respuesta corta a "¿es posible exportar animaciones de Mixamo?": SI.**
Mixamo (Adobe) descarga clips como FBX con o sin malla, y Blender 5.x los
importa nativamente (cada "take" llega como Action). El trabajo real esta en
el RETARGETING: pasar del esqueleto de Mixamo (`mixamorig:Hips`...) al
esqueleto de destino (el rig del Zoi en el caso de inZOI). Eso lo resuelven
los addons (Auto-Rig Pro Remap, Character Control Rig de Polyhammer) o
constraints manuales, porque Blender NO tiene retargeting nativo.

## 1. Que es Mixamo

Biblioteca gratuita de Adobe: auto-rigging de personajes subidos + cientos de
clips de mocap listos para descargar. Subes un modelo (FBX/OBJ como minimo
[DOC guias 2026]), lo auto-riggea, y aplicas cualquier animacion del catalogo
al personaje. Las licencias de los modelos/clips son responsabilidad del
usuario (mismo aviso que hace la wiki de inZOI con Megascans).

## 2. Opciones del dialogo de descarga [DOC]

| Opcion | Valores | Que significa |
|---|---|---|
| **Format** | FBX Binary (tambien "FBX for Unity") | Formato del archivo; FBX Binary es el generico que leen Blender/Unity/UE |
| **Pose** | T-Pose / animacion activa | Descargar el personaje en T-pose o con el clip aplicado |
| **Skin** | **With Skin / Without Skin** | With Skin = malla+rig+animacion en un archivo. Without Skin = solo armature+animacion (lo ideal para retarget) |
| **Frames Per Second** | 24 / 30 / 60 | Frecuencia de muestreo del clip |
| **Keyframe Reduction** | on/off | Reducir claves (menos peso, posible perdida) |

Patron recomendado por la comunidad [DOC]:
- Descargar el personaje UNA VEZ **With Skin** (verificar pesos/textura).
- Descargar todas las animaciones **Without Skin** a **30 fps** (archivos
  pequenos, solo rig+action).
- Marcar la Action con "Fake User" en Blender para que no se pierda al guardar.

## 3. Importar en Blender 5.x [DOC manual]

- El importador FBX **nativo** trae cada "take" como una **Action** separada
  (con slots por objeto). El addon FBX **Legacy** es el que exporta.
- Al importar Mixamo Without Skin llega un armature `mixamorig` con la
  animacion; el clip queda ligado al armature.
- El addon Legacy tiene "Automatic Bone Orientation" y "Force Connect
  Children" que ALTERAN el esqueleto [DOC manual + issues]: si luego vas a
  retarget/exportar, no los actives a ciegas.

## 4. Retarget hacia el rig de destino (el paso que si cuesta)

Blender no trae retargeting nativo entre armatures con distinto rest pose.
Caminos documentados, de mejor a peor para este stack:

| Camino | Como | Fuente |
|---|---|---|
| **Character Control Rig (Polyhammer)** | Panel Animation → Body FK Animation → Import: elige un FBX/NPZ y **detecta automaticamente el esqueleto Mixamo** y lo retargetea a los controles FK del rig MetaHuman. Plantillas: MetaHuman, UE5 Manny/Quinn, UE4, **Mixamo**, Reallusion CC/AccuRig, Rokoko, Xsens, SOMA | [DOC] docs.polyhammer.com/character-control-rig-addon/import-animation |
| **Auto-Rig Pro Remap** | Preset fuente "Mixamo" + target el rig ARP/custom; "Replace Namespace" resuelve prefijos (`mixamorig:Hips` → `xxx:Hips`). Requiere zero-out Location/Rotation del armature | [DOC] lucky3d.fr/auto-rig-pro/doc/remap_doc.html |
| Addons comunitarios | Retarget (fork de Expy Kit, Blender 5+), Mwni blender-animation-retargeting, Rokoko Studio Live | [DOC] repos publicos |
| Manual | Copy Location/Rotation constraints hueso a hueso + NLA; viable pero lento | [DOC] comunidad |

Para **inZOI** el destino correcto es el rig del Zoi original (SK_Base del
juego), no un rig Mixamo: pesa y exporta contra el esqueleto del juego (ver
pages/local/pipeline-animaciones-blender-inzoi.md, paso 1).

## 5. Receta resumida Mixamo → Zoi (inZOI) [INFERRED salvo donde marque]

> **[VERIFIED 2026-10-14]** pasos 1-4 ejecutados de extremo a extremo con el
> MetaHuman conformado del ModKit (`dna_modkit.zip`): clip Mixamo
> `Ascending Stairs.fbx` → `character_control_rig.import_fk_animation` →
> salida literal `Imported FK animation 'NewMetaHumanCharacter_Ascending
> Stairs' onto 'NewMetaHumanCharacter'` (deteccion AUTOMATICA del esqueleto
> Mixamo, sin mapeo manual) → la Action CONDUCE el rig (pose-digest
> 223.901/226.717/196.138 en f0/f15/f30). Detalle:
> pipeline-zoi-a-dna-blender.md tramo 7.

1. Descargar el clip de Mixamo **Without Skin, 30 fps, FBX** [DOC].
2. Importar en Blender (5.2) → Action sobre armature `mixamorig`.
3. Retarget al rig del Zoi: con ARP Remap (preset Mixamo → target Zoi,
   mapeando huesos a hueso donde falte) o constraints manuales. Si el
   personaje destino es un MetaHuman .dna, usar el import del Character
   Control Rig que lo hace en un click [DOC].
4. Ajustar manos/dedos/raiz a mano (el mocap generico no encaja con
   interacciones de objeto: sockets, grips).
5. Exportar FBX (armature + animacion, escala 1u=1cm).
6. Llevarlo al juego: ver la pagina del pipeline de animaciones
   (pages/local/pipeline-animaciones-blender-inzoi.md) — el tramo
   ModKit→juego de animaciones propias sigue siendo [UNKNOWN] (sin flujo
   documentado ni tool MCP de import de animaciones a 2026-10-13).

## 6. Trampas

- **With Skin por defecto**: el dialogo de Mixamo descarga With Skin por
  defecto; para solo-animacion cambia a Without Skin o arrastraras la malla
  del personaje de Mixamo en cada clip [DOC].
- **Root motion**: clips con desplazamiento real vs "In Place" (checkbox de
  Mixamo) — para retarget limpio conviene In Place cuando este disponible y
  mover la raiz aparte [DOC comunidad].
- **FPS**: exportar a 30 fps y re-timar en Blender (Match Frame Rate del
  Control Rig hace esto por defecto [DOC]).
- Mixamo solo guarda el ULTIMO personaje usado y descarta el historial al
  reemplazarlo: descargar y guardar todo local [DOC Adobe docs, citado por
  guias 2026].
