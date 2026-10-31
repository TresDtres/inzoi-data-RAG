---
document_id: "4c98bd4cc435b41b75b2348e442ed9bc88767a4431ef6dd4bf52f7d6384ae1a6"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/02-import"
title: "02.Import"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:36+00:00"
content_sha256: "c741be0bdcc66d26d725c982f1469e37fb30f0fe1a1b07f0e7dacaf4bba2da65"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/hair/02-import"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, you'll **Import the hair FBX file** created in your modeling tool into ModKit and convert it to a Skeletal Mesh (SKM). This is a key step to ensure that the hair aligns accurately with the human skeleton in your game. Preparation FBX file with hair mesh ( `SKM_` prefix recommended) UV Channel 1 (for texturing) / UV Channel 2 (for customization, optional) Bone Weighting Completion Status Scalp mesh included if required

---

**FBX Export Settings Guide**

| ItemSettings / DescriptionScale1 unit = 1 cmAnimationDisabled (hair does not need to be animated)Bone InformationMaintain existing skeleton structureUV settingsUV Channel 1 - for textures UV Channel 2 - for customization (optional)Example file name`SKM_Female_Hair_L_007.fbx` |
| --- |
| Scale1 unit = 1 cmAnimationDisabled (hair does not need to be animated)Bone InformationMaintain existing skeleton structureUV settingsUV Channel 1 - for textures UV Channel 2 - for customization (optional)Example file name`SKM_Female_Hair_L_007.fbx` |
| AnimationDisabled (hair does not need to be animated)Bone InformationMaintain existing skeleton structureUV settingsUV Channel 1 - for textures UV Channel 2 - for customization (optional)Example file name`SKM_Female_Hair_L_007.fbx` |
| Bone InformationMaintain existing skeleton structureUV settingsUV Channel 1 - for textures UV Channel 2 - for customization (optional)Example file name`SKM_Female_Hair_L_007.fbx` |
| UV settingsUV Channel 1 - for textures UV Channel 2 - for customization (optional)Example file name`SKM_Female_Hair_L_007.fbx` |
| Example file name`SKM_Female_Hair_L_007.fbx` |

---

**How to import from ModKit**

1. Running ModKit
2. Click the **Import Skeletal Mesh** button
3. Select the prepared hair FBX file ( `SKM_` prefix recommended)
4. Click the **Import** button → Mesh loading is complete

---

**Things to check after importing**

| ItemThings to checkMesh locationCheck if the origin is correctUV Channel 1Check if the UVs for the texture are correctUV Channel 2 (Optional)Make sure the customization area is included Two-tone, haircut, Highlight Color (optional)Material slot (Minimum 1 / Maximum 3 required)1. HairCard material 2. Scalp material (optional) 3. LOD material (optional) |
| --- |
| Mesh locationCheck if the origin is correctUV Channel 1Check if the UVs for the texture are correctUV Channel 2 (Optional)Make sure the customization area is included Two-tone, haircut, Highlight Color (optional)Material slot (Minimum 1 / Maximum 3 required)1. HairCard material 2. Scalp material (optional) 3. LOD material (optional) |
| UV Channel 1Check if the UVs for the texture are correctUV Channel 2 (Optional)Make sure the customization area is included Two-tone, haircut, Highlight Color (optional)Material slot (Minimum 1 / Maximum 3 required)1. HairCard material 2. Scalp material (optional) 3. LOD material (optional) |
| UV Channel 2 (Optional)Make sure the customization area is included Two-tone, haircut, Highlight Color (optional)Material slot (Minimum 1 / Maximum 3 required)1. HairCard material 2. Scalp material (optional) 3. LOD material (optional) |
| Material slot (Minimum 1 / Maximum 3 required)1. HairCard material 2. Scalp material (optional) 3. LOD material (optional) |

---

**Mistake-avoidance tips**

| situationcauseHow to solveThis structure mismatch warningDifferent names or hierarchical structuresRebinding with an artificial skeletonMesh position is misalignedScale/pivot setting issueAfter checking the origin (0,0,0) and 1:1 scale in the 3D tool, export again. |
| --- |
| This structure mismatch warningDifferent names or hierarchical structuresRebinding with an artificial skeletonMesh position is misalignedScale/pivot setting issueAfter checking the origin (0,0,0) and 1:1 scale in the 3D tool, export again. |
| Mesh position is misalignedScale/pivot setting issueAfter checking the origin (0,0,0) and 1:1 scale in the 3D tool, export again. |

---

**Summary of this section**

| ChecklistWhether completedMake sure UV1 and UV2 are included in FBX✅Skeleton structure matching✅Export with scale unit 1cm✅After importing, the material instance connection is complete.✅ |
| --- |
| Make sure UV1 and UV2 are included in FBX✅Skeleton structure matching✅Export with scale unit 1cm✅After importing, the material instance connection is complete.✅ |
| Skeleton structure matching✅Export with scale unit 1cm✅After importing, the material instance connection is complete.✅ |
| Export with scale unit 1cm✅After importing, the material instance connection is complete.✅ |
| After importing, the material instance connection is complete.✅ |
