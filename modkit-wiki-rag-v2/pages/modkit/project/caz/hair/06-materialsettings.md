---
document_id: "c5f1bced409f3f01975d2d718b4c4d0d4efe7102e4a1eb859fb67892e4f6b508"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/hair/06-materialsettings"
title: "06.MaterialSettings"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Hair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:37+00:00"
content_sha256: "81bee20244ce0902e48fb618ecfe9699e9f643fa94ea06baaa5486e92030f14a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/hair/06-materialsettings"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/6o68Sd52Aa0/maxresdefault.jpg)# 11Hair Modify Part 1](https://www.youtube.com/watch?v=6o68Sd52Aa0&t=386s)[![](https://i.ytimg.com/vi/dapicr9qq28/maxresdefault.jpg)# 12Hair Modify Part 2](https://www.youtube.com/watch?v=dapicr9qq28&t=11s)[![](https://i.ytimg.com/vi/WSGN4uPeeK0/maxresdefault.jpg)# 21Earring Mod Tutorial](https://www.youtube.com/watch?v=WSGN4uPeeK0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose In this step, you'll understand the structure of the material instance used by Artificial Hair, the function of each parameter, and recommended settings. These parameters directly impact customization and rendering quality, including **hair color**, **shine**, and **length**.

---

**Composition Summary**

| ItemexplanationMaster MaterialHair / Scalp both use the same master materialSlot configurationSlot 0: HairCard Slot 1: Scalp Slot 2: HairCard_LODApplication mapDIRO Map (TGA, sRGB OFF) Flow Map (PNG, sRGB OFF)Use of UVUV1 reference mapping (UV2 is for custom data)LOD parametersAdjustable rendering quality per LOD (optional) |
| --- |
| Master MaterialHair / Scalp both use the same master materialSlot configurationSlot 0: HairCard Slot 1: Scalp Slot 2: HairCard_LODApplication mapDIRO Map (TGA, sRGB OFF) Flow Map (PNG, sRGB OFF)Use of UVUV1 reference mapping (UV2 is for custom data)LOD parametersAdjustable rendering quality per LOD (optional) |
| Slot configurationSlot 0: HairCard Slot 1: Scalp Slot 2: HairCard_LODApplication mapDIRO Map (TGA, sRGB OFF) Flow Map (PNG, sRGB OFF)Use of UVUV1 reference mapping (UV2 is for custom data)LOD parametersAdjustable rendering quality per LOD (optional) |
| Application mapDIRO Map (TGA, sRGB OFF) Flow Map (PNG, sRGB OFF)Use of UVUV1 reference mapping (UV2 is for custom data)LOD parametersAdjustable rendering quality per LOD (optional) |
| Use of UVUV1 reference mapping (UV2 is for custom data)LOD parametersAdjustable rendering quality per LOD (optional) |
| LOD parametersAdjustable rendering quality per LOD (optional) |

---

**Parameter group structure**

| groupKey Parametersexplanation**0_Map**`DIRO Map` , `Flow Map`DIRO/Flow texturing and quality control**1_BaseColor**`TipColor` , `2ndColor` , `Highlight Color1~3`Control hair color, two-tone/Highlight color, and gradient range**2_Spec/Rough/Opacity/Depth**`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth**3_Variation**`Hair Cut` , `Hair Cut Max` , `Hair Cut Blend` , `Hair Cut Hood Height` , `Hair Cut Hood Blend`Custom length adjustment ( `Hair Cut` ) and hood response ( `Hood Height` ) control**4_LOD**`LOD Overwrite`Rendering compensation values per LOD (optional) |
| --- |
| **0_Map**`DIRO Map` , `Flow Map`DIRO/Flow texturing and quality control**1_BaseColor**`TipColor` , `2ndColor` , `Highlight Color1~3`Control hair color, two-tone/Highlight color, and gradient range**2_Spec/Rough/Opacity/Depth**`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth**3_Variation**`Hair Cut` , `Hair Cut Max` , `Hair Cut Blend` , `Hair Cut Hood Height` , `Hair Cut Hood Blend`Custom length adjustment ( `Hair Cut` ) and hood response ( `Hood Height` ) control**4_LOD**`LOD Overwrite`Rendering compensation values per LOD (optional) |
| **1_BaseColor**`TipColor` , `2ndColor` , `Highlight Color1~3`Control hair color, two-tone/Highlight color, and gradient range**2_Spec/Rough/Opacity/Depth**`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth**3_Variation**`Hair Cut` , `Hair Cut Max` , `Hair Cut Blend` , `Hair Cut Hood Height` , `Hair Cut Hood Blend`Custom length adjustment ( `Hair Cut` ) and hood response ( `Hood Height` ) control**4_LOD**`LOD Overwrite`Rendering compensation values per LOD (optional) |
| **2_Spec/Rough/Opacity/Depth**`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth**3_Variation**`Hair Cut` , `Hair Cut Max` , `Hair Cut Blend` , `Hair Cut Hood Height` , `Hair Cut Hood Blend`Custom length adjustment ( `Hair Cut` ) and hood response ( `Hood Height` ) control**4_LOD**`LOD Overwrite`Rendering compensation values per LOD (optional) |
| **3_Variation**`Hair Cut` , `Hair Cut Max` , `Hair Cut Blend` , `Hair Cut Hood Height` , `Hair Cut Hood Blend`Custom length adjustment ( `Hair Cut` ) and hood response ( `Hood Height` ) control**4_LOD**`LOD Overwrite`Rendering compensation values per LOD (optional) |
| **4_LOD**`LOD Overwrite`Rendering compensation values per LOD (optional) |

---

**Material Instance for Scalp**

| Parametersexplanation`DIRO Map` , `Flow Map`Use a map of the same format as HairCard`TipColor`Scalp color parameters`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth |
| --- |
| `DIRO Map` , `Flow Map`Use a map of the same format as HairCard`TipColor`Scalp color parameters`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth |
| `TipColor`Scalp color parameters`Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth |
| `Specular` , `Roughness` , `Opacity_Threshold` , `Dither` , `PixelDepthOffset` , `Scatter`Compensation for specular reflections, surface roughness, transparency, and depth |

⚙️ Scalp does not use UV2, so two-tone, Highlight Color, and cut parameters do not apply.

---

**Things to check**

| itemThings to checkWhether DIRO/Flow map is connectedCheck that the two textures are connected according to the specifications.sRGB settings (both maps OFF)Check the detailed options of each textureWhether to use the same master for both Hair and ScalpChecking the Parent of a Material InstanceCheck the custom UI response when changing the TipColor parameter.Check if the basic dye color reacts |
| --- |
| Whether DIRO/Flow map is connectedCheck that the two textures are connected according to the specifications.sRGB settings (both maps OFF)Check the detailed options of each textureWhether to use the same master for both Hair and ScalpChecking the Parent of a Material InstanceCheck the custom UI response when changing the TipColor parameter.Check if the basic dye color reacts |
| sRGB settings (both maps OFF)Check the detailed options of each textureWhether to use the same master for both Hair and ScalpChecking the Parent of a Material InstanceCheck the custom UI response when changing the TipColor parameter.Check if the basic dye color reacts |
| Whether to use the same master for both Hair and ScalpChecking the Parent of a Material InstanceCheck the custom UI response when changing the TipColor parameter.Check if the basic dye color reacts |
| Check the custom UI response when changing the TipColor parameter.Check if the basic dye color reacts |

---

**Mistake-avoidance tips**

| situationcauseHow to solveHair color and length adjustments are not reflectedMissing PartsId or UV2Select appropriate PartsId, check UV2Card borders are prominent`Opacity_Threshold` excessAdjust to a value between 0 and 1 |
| --- |
| Hair color and length adjustments are not reflectedMissing PartsId or UV2Select appropriate PartsId, check UV2Card borders are prominent`Opacity_Threshold` excessAdjust to a value between 0 and 1 |
| Card borders are prominent`Opacity_Threshold` excessAdjust to a value between 0 and 1 |

---

**Summary of this section**

| ChecklistWhether completedCheck DIRO/Flow map connection✅Setting the appropriate Specular/Roughness values✅ |
| --- |
| Check DIRO/Flow map connection✅Setting the appropriate Specular/Roughness values✅ |
| Setting the appropriate Specular/Roughness values✅ |
