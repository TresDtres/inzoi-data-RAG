---
document_id: "9d99231e1e6431ffb976e9da6321417fe827dc660d2f55f83bfa5d1a14e66e9f"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/stocking/03-optional-customization"
title: "03. Optional Customization"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Stocking"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:38+00:00"
content_sha256: "cc7e082b69ad781cc0433b3f49ad7ed2f5414d95ef3ae8bbf6d36bd77e7ae127"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/stocking/03-optional-customization"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/sqYJBjFOZiE/maxresdefault.jpg)# 24Cabinet Mod Tutorial](https://www.youtube.com/watch?v=sqYJBjFOZiE&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

- The Optional Customization settings allow you to adjust visual characteristics of the stocking based on the texture.
- These options can be modified directly in the Modkit, enabling adjustments to color, surface quality, brightness, and highlight intensity.
- They allow a single texture to be used for a wide variety of stocking styles.

---

**3.1 Thumbnail**

A preview image used to identify the stocking item.

- Displayed in the customization UI and the outfit selection UI.
- A solid-color or transparent background is recommended.
- Recommended resolution: **256 × 256 pixels**
- Recommended format: **PNG**

---

**3.2 Stocking Roughness**

Controls the roughness and reflectivity of the stocking surface.

- Lower values result in a smoother surface with increased specular reflection.
- Higher values make the surface appear more matte with reduced reflection.

---

**3.3 Stocking Fresnel**

Adjusts the range of rim lighting applied to the outer contour of the stocking.

![](https://mod-docs.playinzoi.com/media/Modkit/Caz/Stocking_05.png)

---

**3.4 Stocking Core Brightness**

Controls the overall brightness intensity of the stocking.

![](https://mod-docs.playinzoi.com/media/Modkit/Caz/Stocking_06.png)

---

**3.5 Stocking Color**

Defines the final color of the stocking. Since the texture does not contain color information, the stocking’s color is determined entirely by this option.

**Components**

- **R:** Red value
- **G:** Green value
- **B:** Blue value

![](https://mod-docs.playinzoi.com/media/Modkit/Caz/Stocking_07.png)

---

**Notes**

- The stocking color remains consistent regardless of skin tone changes, as the final appearance is always calculated based on the Color parameter.
- A wide range of looks can be achieved, from black stockings to pastel-toned styles.

---

**3.6 Gender Type**

Specifies the applicable gender for the current stocking ID.

- Prevents the item from being shown on the wrong gender.
- Used by the in-game category filtering system.

---

**3.7 Body Age Type**

Specifies the applicable age group for the current stocking ID.

- Ensures correct compatibility with different body meshes across age groups.
