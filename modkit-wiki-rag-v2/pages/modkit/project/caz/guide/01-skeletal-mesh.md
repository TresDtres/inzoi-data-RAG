---
document_id: "038eec2ec4f366462e9e53c69f5139f3b83c1776bb34a3946112a79546a5d218"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/guide/01-skeletal-mesh"
title: "01. Skeletal Mesh"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Guide"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "62b4dfef1da39e662b17d63170c5e4b53aae3fa9d2dfe13ebf99fad3f2a2ba42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/guide/01-skeletal-mesh"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/MU_3zZxIvCU/maxresdefault.jpg)# 25Sofa Mod Tutorial](https://www.youtube.com/watch?v=MU_3zZxIvCU&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

**Purpose**

After modeling the outfit, export the mesh in FBX format and import it into Modkit for in-game use.

---

**Requirements**

- Finalized outfit FBX file
- Rigged to the template avatar (bone weighting)
- UV Channel 1 (for texture), UV Channel 2 (for masking)
- Bone structure must match the inZOI template skeleton

---

**FBX Export Settings Guide**

| ItemSetting / DescriptionScale1 unit = 1 cmAnimation❌ Disabled (Outfits don’t require animation)Bone InfoKeep as is without modificationUV SettingsMust include both UV Channel 1 and 2 |
| --- |
| Scale1 unit = 1 cmAnimation❌ Disabled (Outfits don’t require animation)Bone InfoKeep as is without modificationUV SettingsMust include both UV Channel 1 and 2 |
| Animation❌ Disabled (Outfits don’t require animation)Bone InfoKeep as is without modificationUV SettingsMust include both UV Channel 1 and 2 |
| Bone InfoKeep as is without modificationUV SettingsMust include both UV Channel 1 and 2 |
| UV SettingsMust include both UV Channel 1 and 2 |

Even if UV2 is created, it can be excluded if the export option is not enabled.

---

**How to Import into Modkit**

1. Launch Modkit
2. Click the `Import Skeletal Mesh` button
3. Select your prepared FBX file
4. Review Import Settings
    - Skeleton: Select inZOI template skeleton
    - Animation: Uncheck
    - Material: Auto-created if needed, but manual assignment is recommended later
5. Click `Import` → Mesh is loaded

---

**Post-Import Checklist**

| ItemWhat to CheckSkeletonMatches the template skeletonMesh PositionOrigin alignment is correctUV Channel 1Properly mapped for texturesUV Channel 2Proper masking area setup for outfit maskingMaterial SlotsCan be empty (set up later) |
| --- |
| SkeletonMatches the template skeletonMesh PositionOrigin alignment is correctUV Channel 1Properly mapped for texturesUV Channel 2Proper masking area setup for outfit maskingMaterial SlotsCan be empty (set up later) |
| Mesh PositionOrigin alignment is correctUV Channel 1Properly mapped for texturesUV Channel 2Proper masking area setup for outfit maskingMaterial SlotsCan be empty (set up later) |
| UV Channel 1Properly mapped for texturesUV Channel 2Proper masking area setup for outfit maskingMaterial SlotsCan be empty (set up later) |
| UV Channel 2Proper masking area setup for outfit maskingMaterial SlotsCan be empty (set up later) |
| Material SlotsCan be empty (set up later) |

---

**Common Mistakes & Fixes**

| SituationCauseSolutionUV2 missing after importUVs not included during exportRecheck export settingsSkeleton mismatch warningBone names were changedReuse the template skeletonOutfit appears misalignedScale or position issueAdjust in modeling software |
| --- |
| UV2 missing after importUVs not included during exportRecheck export settingsSkeleton mismatch warningBone names were changedReuse the template skeletonOutfit appears misalignedScale or position issueAdjust in modeling software |
| Skeleton mismatch warningBone names were changedReuse the template skeletonOutfit appears misalignedScale or position issueAdjust in modeling software |
| Outfit appears misalignedScale or position issueAdjust in modeling software |

---

**Chapter Summary**

| ChecklistDoneIs UV Channel 2 included?✅Does the skeleton match the template?✅Is the scale set to 1cm per unit?✅Animation excluded, texture to be set later✅ |
| --- |
| Is UV Channel 2 included?✅Does the skeleton match the template?✅Is the scale set to 1cm per unit?✅Animation excluded, texture to be set later✅ |
| Does the skeleton match the template?✅Is the scale set to 1cm per unit?✅Animation excluded, texture to be set later✅ |
| Is the scale set to 1cm per unit?✅Animation excluded, texture to be set later✅ |
| Animation excluded, texture to be set later✅ |
