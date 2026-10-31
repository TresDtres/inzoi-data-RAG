---
document_id: "18d9a5fa53028fa7a560582f6cd61225de8a453a723a7cafd28a5b7a0eb051f7"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/04-uvcustomization"
title: "04.UVCustomization"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:36+00:00"
content_sha256: "1fa7dbd8757c7686783d619a0e078aee84279063cc281906f3d2cbbdd21eddc6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/hair/04-uvcustomization"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, you will learn how the **UV2 channel structure** and **customization functions** operate in inZOI hair. The UV2 channel is a core data channel that controls **hair tint color**, **length adjustment**, and **highlight color**, but it is **not required for every hairstyle**. Even without UV2, basic hair meshes can still be registered normally as single-color hairstyles.

---

**Composition Summary**

| divisionexplanationUV1Basic UVs for texture mapping. Two DIRO/Flow textures are used.UV2Data UV for customization features. Used only for Hair card meshes, not required for Scalp.useControl two-tone color, hair length adjustment, and Highlight color based on U/V area information of UV2.Terms of UseThe feature is automatically activated based on the PartsId setting ( `AppearanceParts.Json` ) |
| --- |
| UV1Basic UVs for texture mapping. Two DIRO/Flow textures are used.UV2Data UV for customization features. Used only for Hair card meshes, not required for Scalp.useControl two-tone color, hair length adjustment, and Highlight color based on U/V area information of UV2.Terms of UseThe feature is automatically activated based on the PartsId setting ( `AppearanceParts.Json` ) |
| UV2Data UV for customization features. Used only for Hair card meshes, not required for Scalp.useControl two-tone color, hair length adjustment, and Highlight color based on U/V area information of UV2.Terms of UseThe feature is automatically activated based on the PartsId setting ( `AppearanceParts.Json` ) |
| useControl two-tone color, hair length adjustment, and Highlight color based on U/V area information of UV2.Terms of UseThe feature is automatically activated based on the PartsId setting ( `AppearanceParts.Json` ) |
| Terms of UseThe feature is automatically activated based on the PartsId setting ( `AppearanceParts.Json` ) |

---

**UV2 channel structure**

| directionroleexplanationV directionColor interpolation criteria in the direction from Root to TipAs you move from root to tip, apply a gradient from RootColor to TipColor.U directionSeparation of data areas by functionTwo-tone / cut / Highlight 1, 2, 3 / reserve areas arranged in order |
| --- |
| V directionColor interpolation criteria in the direction from Root to TipAs you move from root to tip, apply a gradient from RootColor to TipColor.U directionSeparation of data areas by functionTwo-tone / cut / Highlight 1, 2, 3 / reserve areas arranged in order |
| U directionSeparation of data areas by functionTwo-tone / cut / Highlight 1, 2, 3 / reserve areas arranged in order |

> The UV2 channel should only be present in the hair card mesh, and not in the Scalp mesh.

**UV2 Channel Area Guide**

![UV Channel Area](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_07.jpg)

- This is an area for customizing color and length, and is not included in Scalp.

---

**Hair that requires UV2 channel / Hair that does not require UV2 channel**

| divisionWhether to use UV2Support featuresPartsIdexplanationBasic hair (single color)❌Single color onlyHair_00The simplest form of hair. Does not support two-tone, Highlight Color, or cut features.Customizing Hair (Extension)✅Two-tone / Highlight Color / Hair cutting functionPlease refer to the PartsId tableActivate each function using the area information of the UV2 channel. |
| --- |
| Basic hair (single color)❌Single color onlyHair_00The simplest form of hair. Does not support two-tone, Highlight Color, or cut features.Customizing Hair (Extension)✅Two-tone / Highlight Color / Hair cutting functionPlease refer to the PartsId tableActivate each function using the area information of the UV2 channel. |
| Customizing Hair (Extension)✅Two-tone / Highlight Color / Hair cutting functionPlease refer to the PartsId tableActivate each function using the area information of the UV2 channel. |

---

**UV2 area by function**

| functionexplanationUV2 data areaTwoTone (two-tone color)Color gradient between RootColor and TipColorRefer to the UV2 channel area guide imageCut (hair length adjustment)Ability for users to adjust hair length with a slider in the customization menuHighlight Color 1~3Highlight color assignment (areas 1-3)ReserveFor future expansion |
| --- |
| TwoTone (two-tone color)Color gradient between RootColor and TipColorRefer to the UV2 channel area guide imageCut (hair length adjustment)Ability for users to adjust hair length with a slider in the customization menuHighlight Color 1~3Highlight color assignment (areas 1-3)ReserveFor future expansion |
| Cut (hair length adjustment)Ability for users to adjust hair length with a slider in the customization menuHighlight Color 1~3Highlight color assignment (areas 1-3)ReserveFor future expansion |
| Highlight Color 1~3Highlight color assignment (areas 1-3)ReserveFor future expansion |
| ReserveFor future expansion |

Caution: `Cut` in UV2 is a "function to adjust the length in customizing." The "Hair is automatically cut when wearing a hood" feature `Enable Hair Cut Height` is enabled by a setting in Hair Properties.

---

**Things to check**

| itemThings to checkDoes the Hair card mesh have a UV2 channel?Delete UV2 channel if two-tone, Highlight Color, or length adjustment is not necessary.Scalp mesh doesn't have UV2Scalp mesh does not always require UV2 channelAre the PartsIds assigned to the appropriate function (Hair_00 / Hair_01, etc.)?Apply the appropriate ID by referring to the PartsID table. * Editable in AppearanceHair.json in Data EditorAre the UV2 areas positioned correctly and without overlapping?Refer to the UV2 channel area guide image |
| --- |
| Does the Hair card mesh have a UV2 channel?Delete UV2 channel if two-tone, Highlight Color, or length adjustment is not necessary.Scalp mesh doesn't have UV2Scalp mesh does not always require UV2 channelAre the PartsIds assigned to the appropriate function (Hair_00 / Hair_01, etc.)?Apply the appropriate ID by referring to the PartsID table. * Editable in AppearanceHair.json in Data EditorAre the UV2 areas positioned correctly and without overlapping?Refer to the UV2 channel area guide image |
| Scalp mesh doesn't have UV2Scalp mesh does not always require UV2 channelAre the PartsIds assigned to the appropriate function (Hair_00 / Hair_01, etc.)?Apply the appropriate ID by referring to the PartsID table. * Editable in AppearanceHair.json in Data EditorAre the UV2 areas positioned correctly and without overlapping?Refer to the UV2 channel area guide image |
| Are the PartsIds assigned to the appropriate function (Hair_00 / Hair_01, etc.)?Apply the appropriate ID by referring to the PartsID table. * Editable in AppearanceHair.json in Data EditorAre the UV2 areas positioned correctly and without overlapping?Refer to the UV2 channel area guide image |
| Are the UV2 areas positioned correctly and without overlapping?Refer to the UV2 channel area guide image |

---

**Mistake-avoidance tips**

| situation | cause | How to solve |
| --- | --- | --- |
| Two-tone color is not applied | UV2 is missing or PartsId not specified | Check for the presence of UV2 |
| Hair length adjustment function not working | Check PartsId |
| Only some of the Highlight colors are displayed | Check the area within UV2 |

---

**Summary of this section**

| ChecklistWhether completedUnderstanding UV1/UV2 Roles✅Scalp does not include UV2✅Basic hair (Hair_00) can be registered without UV2✅Familiarize yourself with the two-tone/Highlight Color/cut function activation conditions✅Check UV2 coordinates and direction✅ |
| --- |
| Understanding UV1/UV2 Roles✅Scalp does not include UV2✅Basic hair (Hair_00) can be registered without UV2✅Familiarize yourself with the two-tone/Highlight Color/cut function activation conditions✅Check UV2 coordinates and direction✅ |
| Scalp does not include UV2✅Basic hair (Hair_00) can be registered without UV2✅Familiarize yourself with the two-tone/Highlight Color/cut function activation conditions✅Check UV2 coordinates and direction✅ |
| Basic hair (Hair_00) can be registered without UV2✅Familiarize yourself with the two-tone/Highlight Color/cut function activation conditions✅Check UV2 coordinates and direction✅ |
| Familiarize yourself with the two-tone/Highlight Color/cut function activation conditions✅Check UV2 coordinates and direction✅ |
| Check UV2 coordinates and direction✅ |
