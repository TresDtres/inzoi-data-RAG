---
document_id: "a77562a50fa0fb03e147c7b52b64e918e875f65e82c66efe6eba38fe107c8c6a"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/guide/06-final-application"
title: "06. Final Application"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Guide"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:36+00:00"
content_sha256: "7207092c0ca5ca67c39e434339f4fb7b1bfe4bbab2d9901b1897ab47cedcec19"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/guide/06-final-application"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/MU_3zZxIvCU/maxresdefault.jpg)# 25Sofa Mod Tutorial](https://www.youtube.com/watch?v=MU_3zZxIvCU&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

**Purpose**

Learn how to apply your completed clothing Mod from Modkit to in-game character customization and perform functional testing.

---

**Overall Workflow Summary**

| StepDescription1. Prepare FilesMesh (FBX), textures2. Modkit SetupImport mesh/textures, connect materials, set up Optional Customization3. SaveSave Modkit project4. Apply to GameMod Packaging Process5. TestEquip clothing, test color customization, check masking |
| --- |
| 1. Prepare FilesMesh (FBX), textures2. Modkit SetupImport mesh/textures, connect materials, set up Optional Customization3. SaveSave Modkit project4. Apply to GameMod Packaging Process5. TestEquip clothing, test color customization, check masking |
| 2. Modkit SetupImport mesh/textures, connect materials, set up Optional Customization3. SaveSave Modkit project4. Apply to GameMod Packaging Process5. TestEquip clothing, test color customization, check masking |
| 3. SaveSave Modkit project4. Apply to GameMod Packaging Process5. TestEquip clothing, test color customization, check masking |
| 4. Apply to GameMod Packaging Process5. TestEquip clothing, test color customization, check masking |
| 5. TestEquip clothing, test color customization, check masking |

---

**1. Complete Modkit Setup**

**- Import Mesh/Textures**

- Use `Import Skeletal Mesh` or `Import Deformed Mesh` to bring in FBX files
- Use `Import Texture` for D, M, ARM/ARMO, and N texture maps

**- Connect Materials**

- Create a Material Instance
- Assign textures to Base Color, RGB Mask, ARM/ARMO, and Normal slots
- Test `Custom Color Intensity` parameter to confirm color blending

**- Configure Optional Customization**

- Use the Modkit Wizard to create a new configuration
- Ensure mesh and JSON match correctly

---

**2. Testing Checklist**

| Test ItemHow to ConfirmClothing fits correctlyOutfit displays without broken or distorted meshColor customization worksIn-game color UI updates the outfit as expectedMasking is correctNo clipping or mesh overlap with other outfitsDeformed mesh is usedOutfit switches to reduced mesh when paired with outerwear |
| --- |
| Clothing fits correctlyOutfit displays without broken or distorted meshColor customization worksIn-game color UI updates the outfit as expectedMasking is correctNo clipping or mesh overlap with other outfitsDeformed mesh is usedOutfit switches to reduced mesh when paired with outerwear |
| Color customization worksIn-game color UI updates the outfit as expectedMasking is correctNo clipping or mesh overlap with other outfitsDeformed mesh is usedOutfit switches to reduced mesh when paired with outerwear |
| Masking is correctNo clipping or mesh overlap with other outfitsDeformed mesh is usedOutfit switches to reduced mesh when paired with outerwear |
| Deformed mesh is usedOutfit switches to reduced mesh when paired with outerwear |

---

**Common Issues & Fixes**

| IssueCauseSolutionMesh breaks when wornSkeleton mismatchCheck and match exported skeletonColor doesn’t changeIncorrect RGB MaskRecheck and fix textureBody clipping appearsMissing Body Regions IDAdd the necessary region ID |
| --- |
| Mesh breaks when wornSkeleton mismatchCheck and match exported skeletonColor doesn’t changeIncorrect RGB MaskRecheck and fix textureBody clipping appearsMissing Body Regions IDAdd the necessary region ID |
| Color doesn’t changeIncorrect RGB MaskRecheck and fix textureBody clipping appearsMissing Body Regions IDAdd the necessary region ID |
| Body clipping appearsMissing Body Regions IDAdd the necessary region ID |

---

**Advanced Testing Tips**

- Combine with various outerwear to verify deformed mesh switching
- Test in special animations (e.g., sitting, running) to ensure no clipping or deformation
