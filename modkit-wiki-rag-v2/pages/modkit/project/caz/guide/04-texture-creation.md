---
document_id: "d1e1cfefdc219bedf4af265ea1925ab429d33ef7275ce5d9dee3929ba79cc2d9"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/guide/04-texture-creation"
title: "04. Texture Creation"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Guide"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "29453e46ac4b2ebd92e203c8471a53ed15acaeab3bfdfdd016eecf4714f54d5c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/guide/04-texture-creation"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/MU_3zZxIvCU/maxresdefault.jpg)# 25Sofa Mod Tutorial](https://www.youtube.com/watch?v=MU_3zZxIvCU&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

**- Purpose**

To apply color customization and material effects to outfits, you must understand the required texture types, channel structure, naming conventions, and how to link them properly.

---

**- inZOI's Texture System Overview**

inZOI Modkit uses Unreal Engine’s material system, but introduces a **customized texture setup** for supporting **color customization**.

Each texture serves the following purposes:

---

**- Texture Type Summary**

| Texture TypeDescriptionExample FilenameBase Color MapBase color + grayscale mask in alpha channelTop001_D.tgaRGB Mask MapDefines color-customizable regions (R/G/B)Top001_M.pngARM Map (General)Combined AO + Roughness + Metallic mapTop001_ARM.pngARMO Map (Special)ARM + Opacity Mask in AlphaTop001_ARMO.tgaNormal MapNormal map for surface detailTop001_N.png |
| --- |
| Base Color MapBase color + grayscale mask in alpha channelTop001_D.tgaRGB Mask MapDefines color-customizable regions (R/G/B)Top001_M.pngARM Map (General)Combined AO + Roughness + Metallic mapTop001_ARM.pngARMO Map (Special)ARM + Opacity Mask in AlphaTop001_ARMO.tgaNormal MapNormal map for surface detailTop001_N.png |
| RGB Mask MapDefines color-customizable regions (R/G/B)Top001_M.pngARM Map (General)Combined AO + Roughness + Metallic mapTop001_ARM.pngARMO Map (Special)ARM + Opacity Mask in AlphaTop001_ARMO.tgaNormal MapNormal map for surface detailTop001_N.png |
| ARM Map (General)Combined AO + Roughness + Metallic mapTop001_ARM.pngARMO Map (Special)ARM + Opacity Mask in AlphaTop001_ARMO.tgaNormal MapNormal map for surface detailTop001_N.png |
| ARMO Map (Special)ARM + Opacity Mask in AlphaTop001_ARMO.tgaNormal MapNormal map for surface detailTop001_N.png |
| Normal MapNormal map for surface detailTop001_N.png |

---

**Base Color Map (_D)**

**- Purpose**

- Represents the base color of the outfit
- Alpha channel contains a **grayscale mask** to control **blending strength** of the custom color

**- Why Alpha Channel Matters**

- The brightness of the alpha channel determines how strongly the custom color applies.

| Custom Color IntensityOutput Behavior0Shows base color only1Blends custom color based on alpha brightness |
| --- |
| 0Shows base color only1Blends custom color based on alpha brightness |
| 1Blends custom color based on alpha brightness |

- Brighter → more custom color
- Darker → more original texture
- Format: TGA
- sRGB: ON

---

**RGB Mask Map (_M)**

**- Purpose**

Defines which areas of the outfit are color-customizable via RGB channels.

| ChannelPurposeRMain ColorGSub ColorBAccent / Point ColorBlackNot customizable |
| --- |
| RMain ColorGSub ColorBAccent / Point ColorBlackNot customizable |
| GSub ColorBAccent / Point ColorBlackNot customizable |
| BAccent / Point ColorBlackNot customizable |
| BlackNot customizable |

- Player-selected colors are applied to matching mask channels at runtime.
- Format: PNG
- sRGB: OFF

---

**ARM Map (_ARM) – General Use**

**- Purpose**

A physically-based shading map that defines ambient occlusion, roughness, and metallic values.

| ChannelUseRAmbient Occlusion (AO)GRoughnessBMetallicANot used |
| --- |
| RAmbient Occlusion (AO)GRoughnessBMetallicANot used |
| GRoughnessBMetallicANot used |
| BMetallicANot used |
| ANot used |

- Controls material properties using a single texture.
- Format: PNG
- sRGB: OFF

---

**ARMO Map (_ARMO) – Special Use (Lace, Sheer, Holes)**

**- Purpose**

Like ARM but with **Opacity Mask** in the alpha channel for transparency control.

| Alpha ValueMeaning1.0Fully opaque0.0Fully transparent |
| --- |
| 1.0Fully opaque0.0Fully transparent |
| 0.0Fully transparent |

- Used for lace, sheer fabrics, or mesh holes
- Format: TGA
- sRGB: OFF

---

**Normal Map (_N)**

**- Purpose**

- Adds surface details such as seams, folds, or paneling
- Not related to color
- Format: PNG
- Recommended: Same resolution as other textures
- sRGB: OFF

---

**Texture Naming Convention Summary**

| TextureExample FilenameBase ColorTop001_D.tgaRGB MaskTop001_M.pngARM MapTop001_ARM.pngARMO MapTop001_ARMO.tgaNormal MapTop001_N.png |
| --- |
| Base ColorTop001_D.tgaRGB MaskTop001_M.pngARM MapTop001_ARM.pngARMO MapTop001_ARMO.tgaNormal MapTop001_N.png |
| RGB MaskTop001_M.pngARM MapTop001_ARM.pngARMO MapTop001_ARMO.tgaNormal MapTop001_N.png |
| ARM MapTop001_ARM.pngARMO MapTop001_ARMO.tgaNormal MapTop001_N.png |
| ARMO MapTop001_ARMO.tgaNormal MapTop001_N.png |
| Normal MapTop001_N.png |

---

**Practical Usage Flow**

1. `Top001_D.tga` → Base color with grayscale mask in alpha
2. `Top001_M.png` → Defines RGB color zones
3. `Top001_ARM.png` or `Top001_ARMO.tga` → Controls shading & opacity
4. `Top001_N.png` → Adds surface detail
5. Connect each texture to appropriate slots in Modkit *(Insert screenshot: material parameter slot example)*

---

**Texture Preparation Checklist**

| TaskDoneGrayscale mask in alpha of Base Color?✅RGB Mask channels correctly separated?✅ARM/ARMO channels configured properly?✅Consistent texture resolution?✅PNG or TGA format used?✅ |
| --- |
| Grayscale mask in alpha of Base Color?✅RGB Mask channels correctly separated?✅ARM/ARMO channels configured properly?✅Consistent texture resolution?✅PNG or TGA format used?✅ |
| RGB Mask channels correctly separated?✅ARM/ARMO channels configured properly?✅Consistent texture resolution?✅PNG or TGA format used?✅ |
| ARM/ARMO channels configured properly?✅Consistent texture resolution?✅PNG or TGA format used?✅ |
| Consistent texture resolution?✅PNG or TGA format used?✅ |
| PNG or TGA format used?✅ |

---

**Tips: Recommended Tools for Texture Creation**

- **Photoshop**: Direct control of masks and alpha channels
- **Substance Painter**: Efficient AO/Roughness/Metallic bake & export
- **Krita (Free)**: Supports PNG with alpha channel saving
