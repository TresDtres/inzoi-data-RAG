---
document_id: "36a58329360a7af11e0ddf1f509d242ed6e9428b3df3a4c2a45aacb571c56367"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/skeinnedaccessory/01-overview"
title: "01. Overview"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "SkeinnedAccessory"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:37+00:00"
content_sha256: "4cf39a758dcfeb4ca54603274e920a1885e6438e671731181679e6db4a172ae5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/skeinnedaccessory/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/mSXTMqdKKNo/maxresdefault.jpg)# 20Build Object Mod Tutorial](https://www.youtube.com/watch?v=mSXTMqdKKNo&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

First, select the following item in the ModKit.

- Click **Character → SkeinnedAccessory**

![SkeinnedAccessory](https://mod-docs.playinzoi.com/media/Project/Caz/SkeinnedAccessory/SkeinnedAccessory_01.jpg)

---

After selecting it, the **SkeinnedAccessory configuration panel** will open as shown below.

![SkeinnedAccessory](https://mod-docs.playinzoi.com/media/Project/Caz/SkeinnedAccessory/SkeinnedAccessory_02.jpg)

---

**Optional Customization**

- **Thumbnail**
    - Registers the thumbnail image for the item

---

**Accessory Properties**

- **Gender Type**
    - Selects the gender for the item
    - Example: `Male`, `Female`
- **Body Age Type**
    - Selects the body age group for the item
    - Example: `Adult`, `Child`
- **Accessory Type** Types:
    - Defines the accessory type
    - `Necklace` : Necklace
    - `Nail` : Nail
    - `Ring` : Ring
    - `Bracelet` : Bracelet

---

**Mesh**

- Imports the accessory mesh

---

**Deformed Mesh**

- (Necklace only)
- Imports a mesh that is slightly offset above clothing to prevent clipping

---

**Matching Gender Id**

- Defines the item ID shown when the gender is changed in CAZ

---

**Matching Body Age Id**

- Defines the item ID shown when the age group is changed in CAZ

---

**Layer Priority**

- Defines the clothing layer priority of the item
- Recommended default value: `10`

---

**Drawing Regions**

(Used for Necklace and Bracelet)

- Defines regions where the item can be hidden by upper-layer clothing
- To use this feature, **UV1 must be properly set on the mesh**
    - UV1 = second UV channel

**Necklace UV1 Regions**

- `Chest`
- `NeckFront`
- `NeckBack`

**Bracelet UV1 Regions**

- `LeftHand`
- `RightHand`

warning

The Deformed Mesh for necklaces does **not use UV1**.

---

**Skinning Target**

Defines which part of the character the item is skinned to.

- **Body**
    - Nail, Ring, Bracelet
    - Necklace with physics simulation
- **Head**
    - Necklace

warning

Necklaces must be rigged to a joint hierarchy that includes the **Head bone**.

![SkeinnedAccessory](https://mod-docs.playinzoi.com/media/Project/Caz/SkeinnedAccessory/SkeinnedAccessory_03.png)
