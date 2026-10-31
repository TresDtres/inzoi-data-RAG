---
document_id: "229690a53260ec9d41ad9dd3755a66826cedd5c2ceb91a5835e1c3c6de926358"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/05-texturesetup"
title: "05.TextureSetup"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:37+00:00"
content_sha256: "33611b013dc94e0118f8203a3d581c51ebb49eda05e7637191b6dc9485cb61b7"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/caz/hair/05-texturesetup"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, you'll understand the texture structure of synthetic hair and the role of each map. Hair's shine, directionality, and transparency are all expressed through two textures: a **DIRO map** and a **Flow map**. These maps are applied to the Hair/Scalp slots using the same master material.

---

**Texture Composition Summary**

| divisionExample file nameFormatsRGBexplanationDIRO map`HairCard##_DIR0.tga`TGAOFFCore texture with Depth/ID/Root/Opacity packed into RGBA channelsFlow map`HairCard##_Flow.png`PNGOFFUsed for anisotropic expression by controlling hair direction |
| --- |
| DIRO map`HairCard##_DIR0.tga`TGAOFFCore texture with Depth/ID/Root/Opacity packed into RGBA channelsFlow map`HairCard##_Flow.png`PNGOFFUsed for anisotropic expression by controlling hair direction |
| Flow map`HairCard##_Flow.png`PNGOFFUsed for anisotropic expression by controlling hair direction |

---

**DIRO Map (Depth / ID / Root / Opacity)**

File rules: `.tga` , `sRGB OFF` , `RGBA 4-channel use`

| channelnameroleRDepthHair card depth and shading information expressionGIDIdentification channel for highlight distinction Also used to express aged gray hairBRootHair root color and gradient starting point dataAOpacityHair Card Cutout (Transparency) Information |
| --- |
| RDepthHair card depth and shading information expressionGIDIdentification channel for highlight distinction Also used to express aged gray hairBRootHair root color and gradient starting point dataAOpacityHair Card Cutout (Transparency) Information |
| GIDIdentification channel for highlight distinction Also used to express aged gray hairBRootHair root color and gradient starting point dataAOpacityHair Card Cutout (Transparency) Information |
| BRootHair root color and gradient starting point dataAOpacityHair Card Cutout (Transparency) Information |
| AOpacityHair Card Cutout (Transparency) Information |

Tip: The quality of the DIRO map determines the overall texture of the hair. If the color contrast between textures is too strong, the edges can become noticeable, so it is recommended to use a smooth gradient for the Depth and Root values.

**DIRO Map Example**

![DIRO Map Example](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_08.png)

| R Channel - Depth | G Channel - ID | B Channel - Root | A Channel - Opacity |
| --- | --- | --- | --- |
| ![R Channel - Depth](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_09.png) | ![G Channel - ID](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_10.png) | ![B Channel - Root](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_11.png) | ![A Channel - Opacity](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_12.png) |

---

**Flow Map (Directional Map)**

File rules: `.png` , `sRGB OFF`

| roleexplanationDirectionBy controlling the light reflection direction of the hair card, highlights similar to the actual flow of light are expressed.Anisotropy effectDefines the direction in which the gloss increases along the flow direction.Applicable locationBoth Hair and Scalp are mapped based on the same UV1. |
| --- |
| DirectionBy controlling the light reflection direction of the hair card, highlights similar to the actual flow of light are expressed.Anisotropy effectDefines the direction in which the gloss increases along the flow direction.Applicable locationBoth Hair and Scalp are mapped based on the same UV1. |
| Anisotropy effectDefines the direction in which the gloss increases along the flow direction.Applicable locationBoth Hair and Scalp are mapped based on the same UV1. |
| Applicable locationBoth Hair and Scalp are mapped based on the same UV1. |

💡 Flow maps primarily represent the "texture" of hair cards.

**Flow Map Example**

![Flow Map Example](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_13.png)

---

**Material Instance Configuration**

| slotInstance nameUsage mapexplanation**Slot 0: HairCard**`MI_Hair`DIRO + FlowFor main hair card expression**Slot 1: Scalp**`MI_Hair_Scalp`DIRO + FlowFor scalp mesh (using the same master)**Slot 2: HairCard_LOD**`MI_Hair_LOD`DIRO + FlowApply the same material as Slot0 If you need to be able to adjust the hair lengthA version of Slot0's material with the alpha value removed When hair length adjustment is not necessary |
| --- |
| **Slot 0: HairCard**`MI_Hair`DIRO + FlowFor main hair card expression**Slot 1: Scalp**`MI_Hair_Scalp`DIRO + FlowFor scalp mesh (using the same master)**Slot 2: HairCard_LOD**`MI_Hair_LOD`DIRO + FlowApply the same material as Slot0 If you need to be able to adjust the hair lengthA version of Slot0's material with the alpha value removed When hair length adjustment is not necessary |
| **Slot 1: Scalp**`MI_Hair_Scalp`DIRO + FlowFor scalp mesh (using the same master)**Slot 2: HairCard_LOD**`MI_Hair_LOD`DIRO + FlowApply the same material as Slot0 If you need to be able to adjust the hair lengthA version of Slot0's material with the alpha value removed When hair length adjustment is not necessary |
| **Slot 2: HairCard_LOD**`MI_Hair_LOD`DIRO + FlowApply the same material as Slot0 If you need to be able to adjust the hair lengthA version of Slot0's material with the alpha value removed When hair length adjustment is not necessary |

- If hair length adjustment is not necessary, change the LOD Overwrite value to 1 when connecting the LOD version of the material for LOD2~4 as shown below.

![LOD Overwrite](https://mod-docs.playinzoi.com/media/Project/Caz/Hair/Hair_14.png)

**Representative parameter examples:**

- **Tipcolor** — Basic dye color
- **2ndColor** — Two-tone color
- **Highlight Color1~3** — Highlight Color
- **Specular, Roughness** — light reflection/texture control

---

**Things to check**

| itemThings to checkDo both DIRO and Flow maps exist?Make sure the two textures are set up with the correct structure.Are the TGA/PNG format and sRGB settings correct?Check format and detail optionsDoes the RGBA channel contain the correct information?Check the appropriate information values for R/G/B/A channelsDoes the same master material apply to Hair/Scalp?Check the master material (Parents) of hairDoes the customizing UI respond normally when parameter values are changed?Verify that it is working as intended |
| --- |
| Do both DIRO and Flow maps exist?Make sure the two textures are set up with the correct structure.Are the TGA/PNG format and sRGB settings correct?Check format and detail optionsDoes the RGBA channel contain the correct information?Check the appropriate information values for R/G/B/A channelsDoes the same master material apply to Hair/Scalp?Check the master material (Parents) of hairDoes the customizing UI respond normally when parameter values are changed?Verify that it is working as intended |
| Are the TGA/PNG format and sRGB settings correct?Check format and detail optionsDoes the RGBA channel contain the correct information?Check the appropriate information values for R/G/B/A channelsDoes the same master material apply to Hair/Scalp?Check the master material (Parents) of hairDoes the customizing UI respond normally when parameter values are changed?Verify that it is working as intended |
| Does the RGBA channel contain the correct information?Check the appropriate information values for R/G/B/A channelsDoes the same master material apply to Hair/Scalp?Check the master material (Parents) of hairDoes the customizing UI respond normally when parameter values are changed?Verify that it is working as intended |
| Does the same master material apply to Hair/Scalp?Check the master material (Parents) of hairDoes the customizing UI respond normally when parameter values are changed?Verify that it is working as intended |
| Does the customizing UI respond normally when parameter values are changed?Verify that it is working as intended |

---

**Mistake-avoidance tips**

| situationcauseHow to solveHair texture output is awkwardDIRO structural issuesCheck if the appropriate texture is applied to each channel Check if sRGB is off Check if the hair strands in the Opacity Map are too thick or too thin |
| --- |
| Hair texture output is awkwardDIRO structural issuesCheck if the appropriate texture is applied to each channel Check if sRGB is off Check if the hair strands in the Opacity Map are too thick or too thin |

---

**Summary of this section**
