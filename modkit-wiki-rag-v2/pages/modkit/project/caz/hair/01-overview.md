---
document_id: "6b776f33bf87f725f6ea964973773fc521ba72864ef83d75341cd8e2f3ff89d6"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/01-overview"
title: "01.Overview"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:36+00:00"
content_sha256: "d710d3a2635ea84e10663b95225a6794591136c559484b043a96a2b7e5213abd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/hair/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, you'll learn the basic screen structure of the inZOI Hair Modkit editor and the role of each area. The goal is to familiarize yourself with the central panel used when importing hair and registering materials, properties, and data. Preparation ModKit executable environment Hair FBX file ( `SKM_` prefix recommended) Basic Material Instance `MI_Hair` Data table for customization (optional)

---

**Basic screen configuration guide**

**1. Mesh**

This is where you can import or re-import hair models (FBX). After importing, they will be automatically converted to Skeletal Mesh ( `SKM_` ) assets.

---

**2. Optional Customization** This is the area where you register your thumbnail image. The thumbnail will appear as a preview icon on the customization screen.

---

**3. Hair Properties** This is the core area where you set the main attributes of the hair. You can define gender, age, hat type, cut adjustments when wearing hoods and more.

**Item-by-item description:**

- **Gender Type**: Set applicable gender (Male / Female)
- **Body Age Type**: Select from Adult / Youth / Baby
- **Group Id**: Same series hair bundle ID (representative ID including color variations)
- **Hat Type Mesh**: Specifies the hair mesh that will be replaced when wearing a hat (e.g. `SKM_Female_Hair_L_001_Hat`)
- **Enable Hair Cut Height**: Activates the automatic hair length cut function when wearing a hood.
- **Matching Gender Id**: Links to different gender versions of hair
- **Matching Body Age Id**: Matches hair with other age versions

Important These items directly affect the hair's behavior when customizing, so you must check the settings for each field carefully.

---

**4. Materials** This area specifies the material instances for the hair. By default, it uses the naming structure of `MI_AssetName`, and both Hair and Scalp share the same master material.

---

**5. Tools** A tool for managing data tables and registering resources.

- **Open Data Editor**: `AppearanceHairMesh`, `AppearanceHair`, `AppearancePartsEdit` data directly
- **Open Resource Import Tool**: Provides the ability to manage and re-import resource paths.

---

**Instructions for use**

1. Import the FBX file using the **Mesh ▸ Import** button
2. Skeleton designation → `SKM_AssetName`
3. Material InstanceMaterial Connection → `MI_AssetName`
4. Import thumbnail image ( 256×256 `PNG` recommended )
5. Enter **Hair Properties** (Gender, Age, Hat Type Mesh, etc.)
6. Click **Open Data Editor** → Check automatic data registration and edit details (optional)

---

**Things to check**

| itemThings to checkWhether to create a skeletal mesh after importing FBXSKM_ Is the prefix naming setting set?Show thumbnailsWhether the preview image is displayed normallyMaterial slotMI_AssetName material instance partHair PropertiesWhether Gender/BodyAgeType, etc. are saved normally |
| --- |
| Whether to create a skeletal mesh after importing FBXSKM_ Is the prefix naming setting set?Show thumbnailsWhether the preview image is displayed normallyMaterial slotMI_AssetName material instance partHair PropertiesWhether Gender/BodyAgeType, etc. are saved normally |
| Show thumbnailsWhether the preview image is displayed normallyMaterial slotMI_AssetName material instance partHair PropertiesWhether Gender/BodyAgeType, etc. are saved normally |
| Material slotMI_AssetName material instance partHair PropertiesWhether Gender/BodyAgeType, etc. are saved normally |
| Hair PropertiesWhether Gender/BodyAgeType, etc. are saved normally |

---

**Mistake-avoidance tips**

| situationcauseHow to solveItems not appearing in the list after importImport a simple static mesh without rigging information.fbx verification with bone informationHair overlaps when wearing a hatHatType Mesh UnspecifiedSpecify an alternative hair for the HatType entryNo change in length when wearing the hoodDisable Enable Hair Cut HeightCheck in Hair Properties and save |
| --- |
| Items not appearing in the list after importImport a simple static mesh without rigging information.fbx verification with bone informationHair overlaps when wearing a hatHatType Mesh UnspecifiedSpecify an alternative hair for the HatType entryNo change in length when wearing the hoodDisable Enable Hair Cut HeightCheck in Hair Properties and save |
| Hair overlaps when wearing a hatHatType Mesh UnspecifiedSpecify an alternative hair for the HatType entryNo change in length when wearing the hoodDisable Enable Hair Cut HeightCheck in Hair Properties and save |
| No change in length when wearing the hoodDisable Enable Hair Cut HeightCheck in Hair Properties and save |

---

**Summary of this section**

| ChecklistWhether completedMesh import and skeleton assignment complete✅Materials connection complete✅Thumbnail registration complete✅Hair Properties input completed✅ |
| --- |
| Mesh import and skeleton assignment complete✅Materials connection complete✅Thumbnail registration complete✅Hair Properties input completed✅ |
| Materials connection complete✅Thumbnail registration complete✅Hair Properties input completed✅ |
| Thumbnail registration complete✅Hair Properties input completed✅ |
| Hair Properties input completed✅ |
