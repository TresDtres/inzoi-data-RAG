---
source: local
title: "Animar cabello largo en inZOI: física, colisiones y sistema de melena con ramas"
generado: 2026-10-12
---

# Animar cabello largo en inZOI (física del pelo decodificada)

Investigación cerrada el 2026-10-12 contra el build juego `20260915.15331.W-325961`
/ ModKit UE 5.6.1, con veredictos EN JUEGO. Etiquetas: [VERIFIED] (salida real
pegada/ejecutada), [DOC] (documentación oficial), [INFERRED] (deducción),
[UNKNOWN] (pendiente). Proyecto de referencia: `W_Hair_L_001_pony_9CC414B0`
(coleta duplicada de W_Hair_L_001).

## 1. Cómo funciona la física del pelo (sistema decodificado)

Un pelo inZOI tiene TRES capas de física, ninguna cableada por tabla de
apariencia [VERIFIED: `AppearanceHairMesh` solo tiene Mesh/OverrideMaterials/
HatTypeMesh/HeadTextures/bEnableHairCutHeight/matching — fila completa leída]:

```
CARDS (mechones)   → Chaos Cloth EMBEBIDO en el propio SKM:
                     [VERIFIED strings] MeshClothingAssets (SKM_*_Clothing_LOD0/LOD1),
                     ChaosClothConfig, ClothPhysicalMeshData, ClothVertBoneData,
                     ClothTetherData, SelfCollisionIndices/VertexSet (auto-colisión),
                     AnimDriveStiffness, Damping, /Script/ChaosCloth
CADENAS (coleta)   → PhysicsAsset POR-PEINADO: tabla HairRigidBody (48 filas)
                     → MeshRigidBodyInfo{Mesh, OverridePhysicsAsset: SKM_<pelo>_Physics}
                     [VERIFIED fila PA_F_Hair_L_001 literal en vivo]
PARED ANTI-CLIP    → PA compartido PA_Female_Hair/PA_Male_Hair:
                     cuerpos head_sphere, neck_01/02(+esferas), spine_01..05(+cápsula)
                     [VERIFIED strings] — el pelo choca contra cabeza/cuello/TORSO
```

- [VERIFIED] Esqueleto `Face_Archetype_Skeleton`: acumula **cadenas por-peinado**
  (`hair_L_001_root→01..06`, multirrama `hair_B_01_l/r..05_l/r`, genéricas
  `hair_root`, `hair_M_01..05`). UE añade huesos que faltan al cargar una malla
  ("Al esqueleto le faltan huesos que SkeletalMesh X necesita. Se añadirán ahora.
  ¡Guarde el esqueleto!" — literal del log; flujo aditivo y normal).
- [INFERRED fuerte] El driver de las cadenas = el PhysicsAsset por-peinado
  (cuerpos+constraints por hueso). Prueba: sin el override cableado no hay física.
- [VERIFIED] Los SKM_*_Physics viven game-side (no en el content del ModKit).

## 2. Receta PROBADA EN JUEGO: heredar la física en un pelo custom

[VERIFIED-visual tester 2026-10-12: coleta duplicada se mueve al correr/girar
y NO atraviesa el cuerpo (en reposo cuelga a ~5 cm de la espalda).]

```
1. CREATE A ZOI → HAIR → Duplicate del pelo base (W_Hair_L_001) CON copy_assets
   → hereda TODO el cloth embebido [VERIFIED: la copia conserva
   SKM_*_Clothing_LOD0/LOD1, Chaos configs, PhysicsAsset refs]
2. El wizard genera SOLO 2 parches (AppearanceHair + AppearanceHairMesh)
   → NO cablea HairRigidBody [VERIFIED]. Cablearlo por MCP:
     modkit_create_row {table:"HairRigidBody", id:"PA_<nombre>"}
     modkit_set_data  {field:"MeshRigidBodyInfo", value:{
       Mesh: "/<tu_plugin>/.../SKM_....SKM_...",
       OverridePhysicsAsset: "/Game/.../SKM_<pelo_base>_Physics.SKM_<pelo_base>_Physics"}}
3. Thumbnails (Icon vanilla del pelo base sirve) → modkit_save
4. modkit_package → zip + AUTO-DESPLIEGE en Dokumente/inZOI/Mods/<plugin>/
   → lanzar juego y probar: correr, girar, saltar
```

Requisitos del FBX si se sustituye la malla [DOC hair/02-import + VERIFIED]:
"Bone Weighting Completion Status" (skinneado al esqueleto del juego — un FBX
de groom cards SIN pesos revienta el import: "Error al fusionar SkeletalMesh
'SKM_Female_Head_002'" en cascada), "Maintain existing skeleton structure",
1u=1cm, Animation Disabled, UV1 texturas + UV2 customización.

## 3. Sistema de melena con ramas (5-8 según volumen)

Precedente vanilla [VERIFIED]: el esqueleto ya contiene cadenas MULTIRRAMA
(`hair_B_01_l/r .. hair_B_05_l/r` — dos ramas paralelas de 5 segmentos). La
cadena más larga vista: `hair_L_001_01..06` (6 segmentos).

Diseño:

```
RIG (Blender)                          FÍSICA (PA custom en ModKit)
hair_melena_root (hijo de head)        Por CADA rama: cuerpos por segmento
 ├─ rama_01 → seg 01..0N               + constraint padre→hijo (swing LIMITADO)
 ├─ ... (5 u 8 ramas según volumen)    + primer constraint anclado a head
 └─ rama_0M → seg 01..0N               + cuerpos de colisión head/neck/spine
                                          (patrón PA_Female_Hair = anti-clipping)
```

Mecanismos anti-clipping (de barato a caro): (1) limits de swing en los
constraints — la rama no puede plegarse hacia el cuerpo; (2) cuerpos
head/neck/spine cinemáticos con respuesta de colisión; (3) cloth layer
heredado para cards.

### Protocolo U-HAIR (3 fases, cada una aísla una variable)

- **F1 — Control (riesgo cero)**: melena skinned SOLO a la cadena vanilla
  `hair_L_001_root→01..06` → import → package → juego. Demuestra que la
  geometría es libre mientras huesos+PA sean los del libro base.
- **F2 — Discriminador**: F1 + cadenas EXTRA (p. ej. `hair_L_001_07..09` o
  ramas laterales) sin PA nuevo. Si las extra ANIMAN → driver procedural por
  nombre (los huesos repartidos salen gratis). Si ESTÁTICAS → PA-driven
  confirmado → F3 obligatoria.
- **F3 — Objetivo**: ramas completas + PhysicsAsset PROPIO (Physics Asset
  Editor del ModKit, autoría UI — el MCP no crea PAs) con template por rama +
  cuerpos de colisión → fila HairRigidBody apuntando al PA custom → package.

## 4. Veredictos de colisión

- [VERIFIED-visual tester] Pelo↔CUERPO resuelto por el sistema: la coleta
  vanilla no atraviesa espalda/hombros ni en reposo ni corriendo.
- [UNKNOWN] Pelo↔PRENDA voluminosa (cloth-cloth): sin veredicto — test con
  abrigo el 15-oct.

## 5. Trampas de editor documentadas (leer antes de tocar esqueletos)

| Diálogo | Respuesta | Motivo |
|---|---|---|
| "FALLO AL FUSIONAR HUESOS: ¿Regenerar el Esqueleto a partir de esta malla?" | **NO SIEMPRE** | Reescribe el esqueleto COMPARTIDO (invalida anims) — clase de corrupción grave |
| "¿Fusionar TODAS las SkeletalMeshes usando este esqueleto?" | **NO** | Merge masivo contra todo el contenido vanilla: 66+ diálogos de error, uno por malla, editor+MCP congelados |
| "Error al fusionar SkeletalMesh 'X'" (cola) | OK (o matar editor) | Son fallos; no escriben mientras nadie guarde |
| "…faltan huesos… Se añadirán ahora. ¡Guarde el esqueleto!" | Flujo aditivo NORMAL | UE acumula cadenas por-peinado; guardar es correcto |

Regla de oro: jamás regenerar ni fusionar huesos sobre esqueletos compartidos
del juego. Y: import de pelo SIEMPRE con FBX skinneado al esqueleto del juego.

## 6. Pendientes juego (MCP 11212, parche 15-oct)

- [ ] F2/F3 del U-HAIR (veredictos de ramas extra y PA custom)
- [ ] Colisión melena↔abrigo voluminoso
- [ ] `appearance.hair {action:'change', id:'<id del mod>'}` — equipar custom por CLI
- [ ] `motion.get_info` durante animación (correr/girar)
- [ ] ¿El runtime del juego añade huesos de mallas custom con cadenas propias?
- [ ] Limpiar mods de test de Dokumente/inZOI/Mods (Test_FaceParts, Test_ZoiFull, SkillProbe)

## Fuentes
- Proyecto W_Hair_L_001_pony_9CC414B0 (probado en juego) · tabla HairRigidBody
  (fila PA_F_Hair_L_001 en vivo) · SKM vanilla (strings) · PA_Female_Hair
  (strings) · esqueleto Face_Archetype (cadenas) · log UnrealEditor.log
  (diálogos literales) · wiki project/caz/hair (7 págs, sin física [DOC])
