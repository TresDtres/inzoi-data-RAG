---
document_id: "605585923c2d4b4cec15fdf51ae62b52c8e3a61593ebe2d3d3b4113d040585a6"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/stocking/01-overview"
title: "01. Overview"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Stocking"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:38+00:00"
content_sha256: "a3cd8e52c2d455b794bddfe5e4e2fbd94acbb1a9a0df6c1b95d8e4b1b5f4daf8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/stocking/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/sqYJBjFOZiE/maxresdefault.jpg)# 24Cabinet Mod Tutorial](https://www.youtube.com/watch?v=sqYJBjFOZiE&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

inZOI stockings are rendered by compositing a stocking texture within the character’s Body Material. This system does not use a separate mesh; instead, it relies on a Skin Shader–based layered structure, allowing the stocking to be naturally applied on top of the skin.

This approach enables the stocking to react seamlessly to skin tone changes and lighting conditions, and supports a wide range of styles including sheer transparency, opaque coverage, and patterned designs.

---

**1.1 Core Structure of the Stocking System**

Stocking rendering is composed of the following elements.

1. Stocking Texture (RGBA)

- A single TGA texture (1024×1024) is used and contains Normal, Fresnel, and Alpha information within its channels.
- Color information is not stored in the texture; it is defined in the Modkit options instead.
- The Body Material samples this texture and blends it onto the skin.

1. Stocking Material Logic The visual characteristics of the stocking are expressed through specific texture channels.

- R/G Channels (Normal) → Represent the fine fabric surface texture.
- B Channel (Fresnel Mask) → Enhances the bright rim effect along the outer contour of the legs.
- A Channel (Alpha) → Defines where the stocking is applied and controls its opacity.

Additionally, Modkit parameters such as Color, Roughness, Fresnel, and Core Brightness work together to produce various stocking styles and tones.

1. Integration with the Skin Shader

- The stocking is processed as a layer within the Body Material.
- When the character’s skin tone changes, the stocking reacts naturally along with it.
- Lighting, shadowing, and highlights are calculated consistently with the skin’s shading model.

---

**1.2 Advantages of the Stocking System**

| FeatureDescription**Skin-based compositing**The stocking appears as a thin, natural layer applied directly on top of the skin.**Flexible color control**Colors can be adjusted in real time via Modkit.**Various style expressions**Supports sheer, opaque, patterned, lace, and thigh-high styles. |
| --- |
| **Skin-based compositing**The stocking appears as a thin, natural layer applied directly on top of the skin.**Flexible color control**Colors can be adjusted in real time via Modkit.**Various style expressions**Supports sheer, opaque, patterned, lace, and thigh-high styles. |
| **Flexible color control**Colors can be adjusted in real time via Modkit.**Various style expressions**Supports sheer, opaque, patterned, lace, and thigh-high styles. |
| **Various style expressions**Supports sheer, opaque, patterned, lace, and thigh-high styles. |

---

**1.3 Modkit Workflow Overview**

1. Create a stocking texture (1024×1024, TGA, RGBA)
    - R/G Channels: Normal
    - B Channel: Fresnel Mask
    - A Channel: Alpha Mask
2. Import the texture into the **Stocking Texture** slot in the Modkit.
3. Assign a Thumbnail image.
4. Adjust Optional Customization settings:
    - Stocking Color
    - Stocking Roughness
    - Stocking Fresnel
    - Stocking Core Brightness
5. Set the **Gender Type** and **Body Age Type**.
6. Save and review the results in the Preview screen.

---

**1.4 Possible Style Expressions**

- **Sheer Stockings** Using gray values in the Alpha channel allows for natural sheer transparency.
- **Opaque Stockings** Setting Alpha to 1.0 results in thick, opaque stockings.
- **Lace / Patterned Stockings** Complex patterns and lace details can be expressed through the Alpha Mask.
- **Thigh-high Stockings** The thigh band area can be created by combining Alpha and Fresnel Mask values.

---

**1.5 Import Guidelines**

- sRGB must be set to Off. Mask and Normal operations require Linear color space processing.
- Use TGA (RGBA 32-bit) as the texture format.
- Create textures at 1024×1024 resolution.
- Do not include color information in the texture. Stocking color is defined through Modkit settings.
