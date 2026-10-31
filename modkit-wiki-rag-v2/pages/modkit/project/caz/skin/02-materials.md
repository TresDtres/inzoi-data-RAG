---
document_id: "374a13083742cdef3484af25059ab18675a34860fd251a39a768d629d8214c2e"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/skin/02-materials"
title: "02. Materials / Textures"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Skin"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:38+00:00"
content_sha256: "dada4addcb744a6d4d217dec65f065e881c2000b5479e987b2a4a8e87e9838c7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/skin/02-materials"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/XfMBF3sQDU0/maxresdefault.jpg)# 16Face Mod Tutorial Part 02](https://www.youtube.com/watch?v=XfMBF3sQDU0&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

Purpose The Materials / Textures section in the Skin Modkit allows users to assign the Material Instances used for skin rendering and replace the Color Textures referenced by those materials. In this section, users can confirm which materials are used for the Head Skin and Body Skin, and import the necessary textures to update them.

---

**Head Materials**

Head Materials define the Material Instances used to render the character’s face. Each Material Instance is linked with the default facial textures used in inZOI, and users can replace these textures with new Color Textures through the **Head Texture** field in the Texture section.

---

**Body Material**

Body Material defines the Material Instance used to render the entire body. Each Material Instance is linked with the default body textures used in inZOI, and users can replace these textures with new Color Textures through the **Body Texture** field.

---

**Texture**

In the Texture section, users can import Head and Body Color Textures to replace the existing skin textures.

- Each texture input slot is organized as follows:
    - **Head Texture** Imports the Color Texture applied to the entire face.
    - **Body Texture** Imports the Color Texture applied to the entire body.
    - **Thumbnail** Assigns a preview image that will be displayed in the skin selection UI.

Users can import new Color Textures using the **Import** function. Using **Reimport** allows quick updates by reloading the texture file after modification.

---

**Skin Color ID Reset on First Texture Import**

When importing a Color Texture for the first time, a prompt appears asking whether to reset the Skin Color ID.

![Skin Color ID Reset Prompt](https://mod-docs.playinzoi.com/media/Modkit/Caz/Skin_01.png)

- **Yes** Resets the Skin Color ID to the default value, **Beige 1**.
- **No** Retains the Skin Color ID currently assigned to the skin.
