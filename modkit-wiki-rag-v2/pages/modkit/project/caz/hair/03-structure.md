---
document_id: "b4788057d0ec93cd6de055b50a8baf354a23383b83290b3f24b278be00469cf4"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/03-structure"
title: "03.Structure"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:36+00:00"
content_sha256: "ce9bd220fe459a6700f97a627df75646c94984866b9c2ab6967f50cc1986cf5c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/hair/03-structure"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, you will learn about the **mesh composition** and **LOD (Level of Detail)** structure of inZOI hair. The hair is not a single mesh — it is divided into **HairCards** and a **Scalp**, each using its own material slot. It also includes multiple **LODs** for performance optimization.

---

**Composition Summary**

| componentexplanationHair MeshThe main **HairCard** mesh. Includes a UV2 channel for customization, enabling tint, highlight, and hair length adjustment features.Scalp MeshA supporting mesh that maintains scalp detail. Uses the same skeleton as the HairCard mesh, but does **not** require a UV2 channel.Material SlotsSeparate material slots are used for HairCard and Scalp. Slot 0: `MI_AssetName`Slot 1: `MI_AssetName_Scalp`Slot 2: `MI_AssetName_LOD`LOD structureCreate **LOD0**, **LOD2**, and **LOD4**. LOD1 = LOD0 LOD3 = LOD2 As such, LOD1 and LOD3 share the same meshes as LOD0 and LOD2, respectively. |
| --- |
| Hair MeshThe main **HairCard** mesh. Includes a UV2 channel for customization, enabling tint, highlight, and hair length adjustment features.Scalp MeshA supporting mesh that maintains scalp detail. Uses the same skeleton as the HairCard mesh, but does **not** require a UV2 channel.Material SlotsSeparate material slots are used for HairCard and Scalp. Slot 0: `MI_AssetName`Slot 1: `MI_AssetName_Scalp`Slot 2: `MI_AssetName_LOD`LOD structureCreate **LOD0**, **LOD2**, and **LOD4**. LOD1 = LOD0 LOD3 = LOD2 As such, LOD1 and LOD3 share the same meshes as LOD0 and LOD2, respectively. |
| Scalp MeshA supporting mesh that maintains scalp detail. Uses the same skeleton as the HairCard mesh, but does **not** require a UV2 channel.Material SlotsSeparate material slots are used for HairCard and Scalp. Slot 0: `MI_AssetName`Slot 1: `MI_AssetName_Scalp`Slot 2: `MI_AssetName_LOD`LOD structureCreate **LOD0**, **LOD2**, and **LOD4**. LOD1 = LOD0 LOD3 = LOD2 As such, LOD1 and LOD3 share the same meshes as LOD0 and LOD2, respectively. |
| Material SlotsSeparate material slots are used for HairCard and Scalp. Slot 0: `MI_AssetName`Slot 1: `MI_AssetName_Scalp`Slot 2: `MI_AssetName_LOD`LOD structureCreate **LOD0**, **LOD2**, and **LOD4**. LOD1 = LOD0 LOD3 = LOD2 As such, LOD1 and LOD3 share the same meshes as LOD0 and LOD2, respectively. |
| LOD structureCreate **LOD0**, **LOD2**, and **LOD4**. LOD1 = LOD0 LOD3 = LOD2 As such, LOD1 and LOD3 share the same meshes as LOD0 and LOD2, respectively. |

---

**LOD Step-by-Step Explanation**

| LOD stepscompositionuseLOD0Includes both Hair and Scalp meshes; highest quality version.Used for customization view and close-up displayLOD2Includes Hair and Scalp, but with one-third of the HairCard density.Used for general gameplay camera distance.LOD4Hair only; simplified low-poly mesh (Scalp not included)Used for distant rendering and performance mode. |
| --- |
| LOD0Includes both Hair and Scalp meshes; highest quality version.Used for customization view and close-up displayLOD2Includes Hair and Scalp, but with one-third of the HairCard density.Used for general gameplay camera distance.LOD4Hair only; simplified low-poly mesh (Scalp not included)Used for distant rendering and performance mode. |
| LOD2Includes Hair and Scalp, but with one-third of the HairCard density.Used for general gameplay camera distance.LOD4Hair only; simplified low-poly mesh (Scalp not included)Used for distant rendering and performance mode. |
| LOD4Hair only; simplified low-poly mesh (Scalp not included)Used for distant rendering and performance mode. |

---

|  | HairCard + Scalp | Example image for Scalp mesh check |
| --- | --- | --- |
| **LOD0 example** | ![LOD0 Example](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_01.png) | ![LOD0 Scalp Check](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_02.png) |
| Number of triangles - approximately 40,000 |
| **LOD2 example** | ![LOD2 Example](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_03.png) | ![LOD2 Scalp Check](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_04.png) |
| Number of triangles - approximately 15,000 |
| **LOD4 example** | ![LOD4 Example](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_05.png) |  |
| Number of triangles - approximately 170 |

---

- The number of triangles may vary depending on the hairstyle.
- Scalp is not included in LOD4

💡 ModKit Standard: LOD creation is **optional**. You can build with just LOD0, and creating LOD2 and LOD4 will improve performance.

---

**Mesh naming conventions**

| itemruleexampleFinal Skeletal Mesh`SKM_[Gender]_Hair_[StyleID]``SKM_Female_Hair_L_007`Hair mesh (by LOD)`[Gender]_Hair_[StyleID]_LOD#``Female_Hair_L_007_LOD0``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_LOD2``Female_Hair_L_007_Scalp_LOD2``Female_Hair_L_007_LOD4`Scalp mesh (by LOD)`[Gender]_Hair_[StyleID]_Scalp_LOD#``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_Scalp_LOD2` |
| --- |
| Final Skeletal Mesh`SKM_[Gender]_Hair_[StyleID]``SKM_Female_Hair_L_007`Hair mesh (by LOD)`[Gender]_Hair_[StyleID]_LOD#``Female_Hair_L_007_LOD0``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_LOD2``Female_Hair_L_007_Scalp_LOD2``Female_Hair_L_007_LOD4`Scalp mesh (by LOD)`[Gender]_Hair_[StyleID]_Scalp_LOD#``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_Scalp_LOD2` |
| Hair mesh (by LOD)`[Gender]_Hair_[StyleID]_LOD#``Female_Hair_L_007_LOD0``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_LOD2``Female_Hair_L_007_Scalp_LOD2``Female_Hair_L_007_LOD4`Scalp mesh (by LOD)`[Gender]_Hair_[StyleID]_Scalp_LOD#``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_Scalp_LOD2` |
| Scalp mesh (by LOD)`[Gender]_Hair_[StyleID]_Scalp_LOD#``Female_Hair_L_007_Scalp_LOD0``Female_Hair_L_007_Scalp_LOD2` |

---

**Things to check**

| itemThings to checkAre HairCard and Scalp bound to the same Skeleton?Check that HairCard and Scalp use separate material slots.Does the Scalp mesh exclude the UV2 channel?If the Scalp mesh contains a UV2 channel, remove it.Is the Scalp mesh excluded from LOD4?LOD4 should be created as a simplified single mesh without Scalp. |
| --- |
| Are HairCard and Scalp bound to the same Skeleton?Check that HairCard and Scalp use separate material slots.Does the Scalp mesh exclude the UV2 channel?If the Scalp mesh contains a UV2 channel, remove it.Is the Scalp mesh excluded from LOD4?LOD4 should be created as a simplified single mesh without Scalp. |
| Does the Scalp mesh exclude the UV2 channel?If the Scalp mesh contains a UV2 channel, remove it.Is the Scalp mesh excluded from LOD4?LOD4 should be created as a simplified single mesh without Scalp. |
| Is the Scalp mesh excluded from LOD4?LOD4 should be created as a simplified single mesh without Scalp. |

---

**Mistake-avoidance tips**

| situationcauseHow to solveUV2 channel exists on Scalp meshUnnecessary UV data includedVerify and remove UV2 before exportScalp visible in LOD2Scalp mesh still includedUse the same Scalp mesh as LOD0 for LOD2 |
| --- |
| UV2 channel exists on Scalp meshUnnecessary UV data includedVerify and remove UV2 before exportScalp visible in LOD2Scalp mesh still includedUse the same Scalp mesh as LOD0 for LOD2 |
| Scalp visible in LOD2Scalp mesh still includedUse the same Scalp mesh as LOD0 for LOD2 |

---

**Summary of this section**

| ChecklistWhether completedUnderstanding Hair + Scalp Composition✅Understanding the LOD0 / LOD2 / LOD4 structure✅Check Material Slot Separation✅UV2 exists only in the Hair mesh✅ |
| --- |
| Understanding Hair + Scalp Composition✅Understanding the LOD0 / LOD2 / LOD4 structure✅Check Material Slot Separation✅UV2 exists only in the Hair mesh✅ |
| Understanding the LOD0 / LOD2 / LOD4 structure✅Check Material Slot Separation✅UV2 exists only in the Hair mesh✅ |
| Check Material Slot Separation✅UV2 exists only in the Hair mesh✅ |
| UV2 exists only in the Hair mesh✅ |
