---
source: local
title: "Pipeline uñas custom en inZOI: SkinnedAccessory, mod de datos puros vs malla propia (Blender → pesos → ModKit)"
generado: 2026-10-12
---

# Uñas custom en inZOI (SkinnedAccessory decodificado)

Investigación cerrada el 2026-10-12 contra el build juego `20260915.15331.W-325961`
/ ModKit UE 5.6.1, con veredicto EN JUEGO. Etiquetas: [VERIFIED] (salida real
pegada/ejecutada), [DOC] (documentación oficial), [INFERRED] (deducción),
[UNKNOWN] (pendiente). Proyecto de referencia: `skinnedaccesory_nails_3383A5C5`
(Duplicate de W_Nail001 → ítem `W_Nail001_38b471`).

## 1. La regla general: cuándo hace falta 3D y cuándo no

Un accesorio de personaje (CAZ) admite DOS rutas según el origen de la
geometría. Decidir mal cuál se usa es la causa típica de mods que "no hacen
nada":

```
RUTA A — DATOS PUROS (sin DCC)        RUTA B — 3D CREADA POR EL USUARIO
El ítem usa la malla VANILLA del juego  La geometría es nueva: Blender, Maya,
Duplicate copy_assets=false             u otro DCC → modelar → unir → PESAR
→ la fila apunta a la SKM del juego      → export FBX 1u=1cm → import_mesh
→ zip de KB SIN Paks                    → la SKM viaja en el zip (Paks)
→ la deformación ES la vanilla:         → los PESOS viajan dentro del FBX y
  los pesos ya los hizo el juego        el ModKit NO los genera: se validan
                                         al importar contra SK_Base
```

- [VERIFIED-visual tester 2026-10-12] Ruta A probada en juego: el ítem de
  uñas duplicado "quedó en su sitio" — se mueve con cada dedo porque la malla
  ES la vanilla con sus pesos originales.
- [VERIFIED] Consecuencia práctica: si el zip sale en KB y sin carpeta
  `Paks`, el mod no lleva geometría; todo lo "3D" lo pone el juego. Un mod así
  solo puede recolorar/re-registrar/re-etiquetar, no cambiar la forma.
- La Ruta B es obligatoria en cuanto el usuario quiere SU geometría: el 3D
  creado por el usuario pasa por Blender, Maya, etc., se pesa contra el
  esqueleto del juego y se lleva al ModKit con `import_mesh`.

## 2. Sistema de uñas (mapeado en vivo)

- [VERIFIED] Categoría **SkinnedAccessory**: 166 libros en el libro CAZ, 72
  de uñas (`W_Nail...`, `M_Nail005..009`).
- [VERIFIED] Fila tipo: `AccessoryType:"Nail"`, `SubCategories` (p. ej.
  `"RoundNail"`), `PartsId:"Garment_11"`, `NumColorChannels:1`.
- [VERIFIED en disco] Malla vanilla:
  `Content/Characters/Costumes/Female/Acc/Nail/Nail001/Mesh/SKM_F_Costume_Acc_Nail001.uasset`
  (545 KB) — esqueleto **SK_Base**, UN solo slot de material
  (`MI_F_Costume_Acc_Nail001_001`), cadenas de dedos completas:
  `index/middle/ring/pinky/thumb` `_01..03` `_l/_r` + `hand_l/r` + metacarpianos.

## 3. Receta RUTA A — mod de datos puros (PROBADA EN JUEGO)

```
1. CREATE A ZOI → accesorio → Duplicate de W_Nail001 con copy_assets=false
   (la fila nueva apunta a la SKM vanilla del juego)
2. get_row de la fila vanilla → icono (Icon_Nail_001_001)
   → set_data Thumbnail (Icon + Icon128) ×2
3. modkit_save → modkit_package (~30 s)
   → zip 2,7 KB, SIN Paks (solo referencia assets vanilla)
   → AUTO-DESPLIEGUE a Dokumente/inZOI/Mods/<plugin>/
4. Lanzar juego, equipar el ítem → veredicto
```

[VERIFIED-visual tester 2026-10-12: "quedaron en su sitio" — colocado y
deformándose correctamente, porque es geometría y pesos vanilla.]

## 4. Receta RUTA B — malla propia (Blender → pesos → ModKit)

Modelar las 10 uñas como piezas independientes (una por dedo, mano izquierda
y derecha), luego:

1. **Unir sin conectar**: `Ctrl+J` las 10 piezas en UN solo objeto → 10
   islas de geometría dentro de la misma malla. No deben estar conectadas:
   cada uña pertenece a su dedo.
2. **Por qué una sola malla** [VERIFIED sistema]: una prenda = una malla;
   `import_mesh` espera una SKM por accesorio. Diez mallas serían diez
   accesorios con diez registros. El skinning es POR VÉRTICE, no por objeto:
   una malla con 10 grupos de pesos distintos es válida y el motor deforma
   cada isla con su hueso.
3. **Pesos**: cada isla al 100% a la falange DISTAL `_03` de su dedo —
   `index_03_l`, `middle_03_l`, `ring_03_l`, `pinky_03_l`, `thumb_03_l` +
   sus `_r` (20 huesos en total). NO al `_01` (nudillo): la uña crece en la
   falange distal y debe seguir solo su punta. [INFERRED-receta: cadenas de
   dedos verificadas en la SKM vanilla; asignación validada por anatomía,
   veredicto de juego pendiente — U-NAILS]
4. **Material único** con el patrón `Costumes/Female/Acc/Nail` (padre del IM
   vanilla): todo el conjunto comparte material y el tinte `Garment_11`
   (PartsId) se aplica uniforme a las 10 uñas. Con mallas separadas habría
   que replicar el material y el tinte podría no aplicarse uniforme.
5. **UV2/DrawingRegions**: NO aplica a uñas — solo collar/pulsera lo usan
   [DOC]. Basta UV1 de textura.
6. **Export FBX 1u=1cm** → `import_mesh` en el workspace → responder los
   diálogos de esqueleto según la tabla del doc de pelo
   (`animar-cabello-largo.md` §5): "¿Regenerar esqueleto?"=NO SIEMPRE,
   "¿Fusionar TODAS las SKM?"=NO (cascada 66+ errores), "missing bones added
   now"=aditivo normal.
7. Sustituir `Mesh` del ítem → `assign_material` si el MI es propio →
   `modkit_save` → `modkit_package` → prueba en juego.

## 5. Trampas documentadas

| Trampa | Detalle |
|---|---|
| `validate_workspace` NO soportado en SkinnedAccessory | [VERIFIED] mismo error literal que BUILD: `no IWorkspaceAutomation` — no es bloqueante, ignorar |
| import/package congelan editor+MCP | Disparar y sondear disco; no relanzar la llamada |
| Diálogos de esqueleto al importar SKM | Ver tabla completa en `animar-cabello-largo.md` §5 — jamás regenerar/fusionar huesos sobre esqueletos compartidos |
| Zip de KB sin Paks | No es un fallo: es la firma del mod de datos puros (Ruta A) |

## 6. Pendientes juego (MCP 11212, parche 15-oct)

- [ ] **U-NAILS**: cerrar la Ruta B con la malla del usuario — sustituir
  `Mesh` en `skinnedaccesory_nails_3383A5C5`, package, veredicto visual
  (equivalente CAZ del U4 botellero).
- [ ] Tinte `Garment_11` sobre MI custom en juego (¿uniforme en las 10 uñas?).
- [ ] Deforme de uñas custom en gestos de mano (agarre, teléfono, posed).
- [ ] Confirmar pesos exactos de la SKM vanilla si se quiere clonar el
  skinning al detalle (leer `ClothVertBoneData`/pesos del .uasset).

## Fuentes
- Proyecto `skinnedaccesory_nails_3383A5C5` (ítem `W_Nail001_38b471`,
  probado en juego) · `modkit_list_books`/`get_row` SkinnedAccessory en vivo
  (166 libros / 72 uñas, AccessoryType:"Nail", Garment_11) ·
  `SKM_F_Costume_Acc_Nail001.uasset` en disco (545 KB, SK_Base, cadenas de
  dedos) · veredicto visual tester 2026-10-12 · `animar-cabello-largo.md`
  (diálogos de esqueleto) · wiki caz (sin pipeline de uñas [DOC-gap]).
