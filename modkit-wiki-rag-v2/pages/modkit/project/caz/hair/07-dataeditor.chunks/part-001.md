---
document_id: "4d2155efc728a81dbf858dfc079f64f490156d895692d68d225aba1633966d1d"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/07-dataeditor"
title: "07.DataEditor"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:37+00:00"
content_sha256: "34c4e5c2ecc15aa69fce3edafee8d051be1b005eee22f5df19f8c8e773d87838"
chunk: 1
chunk_count: 3
page_type: "article"
route: "modkit/project/caz/hair/07-dataeditor"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, we'll use ModKit's **Data Editor** to edit the hair's detailed data in more detail, and configure the hair in the customization menu to accurately display the intended information. This procedure is **an additional setting step** after basic hair creation, and it involves linking materials, meshes, and customization options (two-tone, Highlight Color, cut, etc.) to the data structure.

---

**Composition Summary**

| data tableroleAppearanceHairMesh.jsonRegister information about the actual hair resources (FBX, material, skeleton, hat correspondence, etc.)AppearanceHair.jsonRegistering hair items displayed in the customizing UI (thumbnail, PartsId, subcategory, etc.)AppearanceParts.jsonPartsId Define a set of customizing features that are activated according to (two-tone, cut, Highlight Color, etc.) |
| --- |
| AppearanceHairMesh.jsonRegister information about the actual hair resources (FBX, material, skeleton, hat correspondence, etc.)AppearanceHair.jsonRegistering hair items displayed in the customizing UI (thumbnail, PartsId, subcategory, etc.)AppearanceParts.jsonPartsId Define a set of customizing features that are activated according to (two-tone, cut, Highlight Color, etc.) |
| AppearanceHair.jsonRegistering hair items displayed in the customizing UI (thumbnail, PartsId, subcategory, etc.)AppearanceParts.jsonPartsId Define a set of customizing features that are activated according to (two-tone, cut, Highlight Color, etc.) |
| AppearanceParts.jsonPartsId Define a set of customizing features that are activated according to (two-tone, cut, Highlight Color, etc.) |

---

**Step-by-step detailed editing process**

**1. AppearanceHairMesh.j**

1. Running **the Open Data Editor**
2. `AppearanceHairMesh.json` Select tab
3. Check the hair ID you are currently working on
4. Check and correct the following items:

| itemexplanationIdHair Unique ID (Gender + Style combination)ThumbnailPreset icon imageMeshImported Skeletal Mesh ( `SKM_AssetName` )MaterialsConnected Material Instance ( `MI_AssetName` )GroupIdBundle ID of hair presets of the same seriesHatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| --- |
| IdHair Unique ID (Gender + Style combination)ThumbnailPreset icon imageMeshImported Skeletal Mesh ( `SKM_AssetName` )MaterialsConnected Material Instance ( `MI_AssetName` )GroupIdBundle ID of hair presets of the same seriesHatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| ThumbnailPreset icon imageMeshImported Skeletal Mesh ( `SKM_AssetName` )MaterialsConnected Material Instance ( `MI_AssetName` )GroupIdBundle ID of hair presets of the same seriesHatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| MeshImported Skeletal Mesh ( `SKM_AssetName` )MaterialsConnected Material Instance ( `MI_AssetName` )GroupIdBundle ID of hair presets of the same seriesHatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| MaterialsConnected Material Instance ( `MI_AssetName` )GroupIdBundle ID of hair presets of the same seriesHatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| GroupIdBundle ID of hair presets of the same seriesHatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| HatTypeMeshReplacement mesh settings for each hat typebEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| bEnableHairCutHeightWhether the cut function is activated when wearing a hoodMatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |
| MatchingGenderId / MatchingBodyAgeIdMatching Hair ID by Gender/Age Group |

⚙️ This table manages the actual resource structure. If the input is incorrect, the customization items will be displayed, but the mesh will not load.

---

**List of hat types used in inZOI**

| HatType ID | Reference image | Details |
| --- | --- | --- |
| **Default** | ![Default Hat](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_15.png) | Basically, the hat type can be applied as Default. Additional Beanie/Fedora types may be required depending on your hairstyle. example Regular hat - version with ponytail Beanie - Ponytail Removed Version |
| **Beanie** | ![Beanie](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_16.png) |  |
| **Fedora** | ![Fedora](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_17.png) |  |
| **Durag** | ![Durag](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_18.png) | When wearing a durag type hat, it is recommended to change the hair to a bald type. `SKM_Male_Hair_Bald_001` |
| **Helmet** | ![Helmet](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_19.png) | When wearing a helmet type hat, it is recommended to replace the hair with a bald type. `SKM_Male_Hair1Bald_001` |

---

| HairMesh | Hat version HairMesh |
| --- | --- |
| ![Full HairMesh](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_20.png) | ![Hat Version HairMesh](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_21.png) |

---

**2. Register AppearanceHair.json**

1. `AppearanceHair.json` Select tab
2. Add items for UI display
3. Enter the following fields

| itemexplanationIdHair Unique ID (Gender + Style combination) ID identical to the Group ID specified in AppearanceHairMeshThumbnailPreset GGenderType / BodyAgeTypeApplicable gender and age groupSubCategoriesHair (Male/Female) Short Hair (Male/Female) Medium Hair (Male/Female) Long Hair (Male/Female) PonytailPartsIdSelect a custom feature set ( `Hair_00` , `Hair_01` etc)VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |
| --- |
| IdHair Unique ID (Gender + Style combination) ID identical to the Group ID specified in AppearanceHairMeshThumbnailPreset GGenderType / BodyAgeTypeApplicable gender and age groupSubCategoriesHair (Male/Female) Short Hair (Male/Female) Medium Hair (Male/Female) Long Hair (Male/Female) PonytailPartsIdSelect a custom feature set ( `Hair_00` , `Hair_01` etc)VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |
| ThumbnailPreset GGenderType / BodyAgeTypeApplicable gender and age groupSubCategoriesHair (Male/Female) Short Hair (Male/Female) Medium Hair (Male/Female) Long Hair (Male/Female) PonytailPartsIdSelect a custom feature set ( `Hair_00` , `Hair_01` etc)VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |
| GenderType / BodyAgeTypeApplicable gender and age groupSubCategoriesHair (Male/Female) Short Hair (Male/Female) Medium Hair (Male/Female) Long Hair (Male/Female) PonytailPartsIdSelect a custom feature set ( `Hair_00` , `Hair_01` etc)VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |
| SubCategoriesHair (Male/Female) Short Hair (Male/Female) Medium Hair (Male/Female) Long Hair (Male/Female) PonytailPartsIdSelect a custom feature set ( `Hair_00` , `Hair_01` etc)VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |
| PartsIdSelect a custom feature set ( `Hair_00` , `Hair_01` etc)VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |
| VariantsHair Unique ID When grouping color variations into a set, enter the variation ID in Variants. |

💡 `PartsId` The UV2 feature set is automatically determined based on `Hair_00`: Single color hair `Hair_None`: Hair with no function (e.g. bald type)

---

**3. Register AppearanceParts.json (Optional/Advanced Settings)**
