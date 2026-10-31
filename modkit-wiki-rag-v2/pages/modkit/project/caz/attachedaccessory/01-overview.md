---
document_id: "b2ab7c116dfa7b08c1128cbcc76aa46adc8e5ec7cfb963da7b2084cc3a4f406d"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/attachedaccessory/01-overview"
title: "01. Overview"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "AttachedAccessory"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "52bef2d8e1beea07e7a49205fc719f3bb5f18d9feda46d795e9d55e25a184c8e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/attachedaccessory/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/1UDL-oICoZk/maxresdefault.jpg)# 08Create a Star Accessory](https://www.youtube.com/watch?v=1UDL-oICoZk&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/ZXDwh8-_aL8/maxresdefault.jpg)# 19Data Mod Tutorial](https://www.youtube.com/watch?v=ZXDwh8-_aL8&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

First, select the following item in the ModKit.

- Click **Character → AttachedAccessory**

![AttachedAccessory](https://mod-docs.playinzoi.com/media/Project/Caz/AttachedAccessory/AttachedAccessory_01.jpg)

---

After selecting it, the **AttachedAccessory configuration panel** will open as shown below.

![AttachedAccessory](https://mod-docs.playinzoi.com/media/Project/Caz/AttachedAccessory/AttachedAccessory_02.jpg)

---

**Optional Customization**

- **Thumbnail**
    - Registers the thumbnail image for the item

---

**Accessory Properties**

- **Gender Type**
    - Defines which gender can use the item
    - Example: `Male`, `Female`
- **Body Age Type**
    - Defines the age group for the item
    - Example: `Adult`, `Child`
- **Accessory Type** Types:
    - Selects the accessory category
    - `Glasses` : Glasses
    - `Earring` : Earrings
    - `HairAccessory` : Hair accessories
    - `Piercing` : Piercings
    - `CraftingMaterial` : Processed gem (content-related)

---

**Socket by Mesh Map**

- Connects static mesh assets to specific socket positions
- Click the `+` button to add entries

**Socket Positions**

- **Head**
    - Top of the head (used for hair accessories)
- **Nose Upper**
    - Nose bridge (used for glasses – Adult Female / Children)
- **Glasses**
    - Nose bridge (used for glasses – Adult Male)
- **L Ear 4 / R Ear 4**
    - Lower ear (used for earrings)
- **L Ear 3 / R Ear 3**
    - Middle ear (used for earrings)
- **L Ear 2 / R Ear 2**
    - Upper ear (used for earrings)
- **Facial Root**
    - Center of the face (used for hair accessories)
- **L Forehead Out / R Forehead Out**
    - Eyebrow (used for eyebrow piercings)
- **Nostril**
    - Nose (used for nose piercings)
- **Lip Lower**
    - Lip (used for lip piercings)

---

**Matching Gender Id**

- Defines which item ID is displayed when the gender is changed in CAZ

---

**Matching Body Age Id**

- Defines which item ID is displayed when the age group is changed in CAZ

---

**Tools**

- **Open Data Editor**
    - Opens the data editor for advanced configuration
- **Open Resource Import Tool**
    - Opens the resource import tool

---

tip

Make sure to select the correct socket based on the accessory type. Incorrect socket selection may result in misaligned or improperly attached items in-game.
