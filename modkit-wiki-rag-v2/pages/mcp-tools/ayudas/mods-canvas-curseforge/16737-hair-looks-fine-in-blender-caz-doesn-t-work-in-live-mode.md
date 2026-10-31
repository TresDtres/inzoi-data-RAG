---
source: mcp-tools
categoria: ayuda
familia: mods-canvas-curseforge
clase: aceptado
verified: pendiente
source_url: https://forum.playinzoi.com/t/topic/16737
idioma: en
foro_capturado: 2026-10-09
---

# Hair looks fine in Blender/CAZ-Doesn’t work in Live Mode

**Sintoma:** I create hair mods. My hair mods worked fine until recent update. But now when I create them, they do not work in live mode. They look fine in Blender and CAZ and even pose correctly in CAZ but they do not work correctly in live mode. In live mode, the hair slides back and forth over the Zoi’s head. I’ve tried normalizing weights, binding only to the head vertex and numerous other fixes but the issue persists. 2026-09-06_22_31_40-inZOI 1470×1215 506 KB

**Causa:** Blender weights, vertex groups, or FBX export settings, so I tested multiple approaches there without success

**Solucion:** I have solved the issue and wanted to share my findings here (edited with AI for clarity): I wanted to share a possible bug I found in the current inZOI Modkit hair import process. Custom skeletal hairs were importing successfully, but in-game they would wobble or shift instead of staying firmly attached to the head. I originally thought the issue was caused by Blender weights, vertex groups, or FBX export settings, so I tested multiple approaches there without success. After reviewing the Modkit output log and the ImportHairSkeletalMesh.py script, the issue appears to be connected to the automatic LOD bone-removal process. The script calls: apply_skm_minus_da_remove_bones_from_lod_settings( mesh, LOD_SETTINGS_ASSET_PATH ) This calculates per-LOD bones_to_remove . In my log, one hair showed very large bone removals, for example: LOD1: SKM=347, DA=149, DA_in_SKM=20, REMOVE=316 LOD3: SKM=347, DA=3, DA_in_SKM=3, REMOVE=333 The protected-bone list includes the spine, neck, pelvis, and clavicle bones, but head is not included. As a test, I backed up the original script and disabled only the apply_skm_minus_da_remove_bones_from_lod_settings() call. I then restarted the Modkit and importe

**EN:** Hair looks fine in Blender/CAZ-Doesn’t work in Live Mode

**Fuente:** https://forum.playinzoi.com/t/topic/16737 (aceptado, views 177, creado 2026-09-09)
