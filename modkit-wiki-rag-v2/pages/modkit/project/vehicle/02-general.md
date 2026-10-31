---
document_id: "a84b1a450d8dfeb68abc75ecf23faac54628c8e69d1e1386872ac3544c7806b2"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/02-general"
title: "General"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:40+00:00"
content_sha256: "7c95377d33527c5d59e6cad319fa24b80e9a4ead62cc2d2910c63163f08663ec"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/vehicle/02-general"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

The **General** section holds the things that describe the vehicle rather than draw it: what it is called, what it costs, who is allowed to buy it, what it looks like on the shop tile, and how it appears at a distance.

---

### 01. Identity and price

| FieldWhat it does**Price**What the player pays.**Purchasable Level**Which maps it can be bought on. A vehicle only appears in the Dream Car app on a map listed here, or if the list contains `All`.**Required Skill Level**Only used to decide whether a Zoi may **rent a boat**. It does not gate buying a car or a motorcycle. |
| --- |
| **Price**What the player pays.**Purchasable Level**Which maps it can be bought on. A vehicle only appears in the Dream Car app on a map listed here, or if the list contains `All`.**Required Skill Level**Only used to decide whether a Zoi may **rent a boat**. It does not gate buying a car or a motorcycle. |
| **Purchasable Level**Which maps it can be bought on. A vehicle only appears in the Dream Car app on a map listed here, or if the list contains `All`.**Required Skill Level**Only used to decide whether a Zoi may **rent a boat**. It does not gate buying a car or a motorcycle. |
| **Required Skill Level**Only used to decide whether a Zoi may **rent a boat**. It does not gate buying a car or a motorcycle. |

There is no on/off switch for purchasability. To keep a vehicle out of the shop, leave **Purchasable Level** empty rather than looking for a toggle.

**The display name and description are not edited here.** They are localised strings, so they live in the translation system rather than on the vehicle. A Duplicate mod starts with a copy of the source vehicle's name, and you should change it - otherwise the player sees two identical entries in the shop. Edit it through a Language workspace, or with `modkit_set_translation_entries`.

---

### 02. Representative Colour and the thumbnail

The **Representative Colour** is the first entry in the vehicle's colour list, and it does two jobs at once.

1. It is the colour the vehicle shows by default.
2. Its **icon** is the vehicle's thumbnail - both in the Dream Car app in game and on the workspace tile in ModKit.

It lives in **General** rather than in **Paint** because of that second job, and it cannot be deleted. That is what guarantees a vehicle always has at least one colour to show.

> ⚠️ **There is no separate "vehicle icon" field.** Older data has an `Icon` field on the vehicle, but the game does not read it, so it is hidden in the workspace.

> ⚠️ Leaving the representative colour's icon empty does not give you a blank thumbnail. The game walks the colour list and uses the first icon it finds, so you get a later variant's picture instead. A thumbnail that shows the wrong colour is the same symptom as a missing one: check that the representative colour has its own icon.

**Setting the thumbnail**

1. Open **General**.
2. Find **Representative Colour**.
3. Set its colour, then set its icon to a square image.

The remaining colours a player can choose from are added in the **Paint** section - see [Appearance](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/03-appearance).

---

### 03. Two appearances, and why a reskin can look unfinished

This catches almost everyone once. A vehicle has **two independent visual representations**, and replacing one does not replace the other.

| RepresentationBuilt fromWhen the player sees it**Full body**The mesh **Slots** - body, doors, wheels, one component each.Up close: the vehicle you drive or park.**Simplified body**A single merged mesh set in **General**.At a distance, and for the traffic that fills the city. |
| --- |
| **Full body**The mesh **Slots** - body, doors, wheels, one component each.Up close: the vehicle you drive or park.**Simplified body**A single merged mesh set in **General**.At a distance, and for the traffic that fills the city. |
| **Simplified body**A single merged mesh set in **General**.At a distance, and for the traffic that fills the city. |

The simplified body is one low-cost mesh, not something assembled from your slots. So if you swap the slots and leave the simplified mesh alone, your vehicle looks like your mod when the player walks up to it and like the **original** when it drives past in traffic.

**To keep it consistent**

1. Merge your new body into a single static mesh.
2. Import it into the plugin.
3. Set it as the simplified mesh in **General**.

If you only care about the close-up look, leaving it alone is functionally fine - the vehicle still works. It is a visual consistency choice, not a correctness one, so it is worth a line in your mod description either way.

---

### 04. Common issues and fixes

| IssueCauseFixThumbnail missing, or showing the wrong colourRepresentative colour has no icon, so the game fell through to a later variantSet the icon on the representative colour in **General**Vehicle reverts to the original shape at a distanceSimplified mesh still points at the originalReplace the simplified mesh tooTwo identical entries in the shopDuplicate mod with the source's display nameChange the display nameVehicle never appears in the shop**Purchasable Level** does not list the map you are on (or `All`), or a skill/level gateCheck the purchase fields |
| --- |
| Thumbnail missing, or showing the wrong colourRepresentative colour has no icon, so the game fell through to a later variantSet the icon on the representative colour in **General**Vehicle reverts to the original shape at a distanceSimplified mesh still points at the originalReplace the simplified mesh tooTwo identical entries in the shopDuplicate mod with the source's display nameChange the display nameVehicle never appears in the shop**Purchasable Level** does not list the map you are on (or `All`), or a skill/level gateCheck the purchase fields |
| Vehicle reverts to the original shape at a distanceSimplified mesh still points at the originalReplace the simplified mesh tooTwo identical entries in the shopDuplicate mod with the source's display nameChange the display nameVehicle never appears in the shop**Purchasable Level** does not list the map you are on (or `All`), or a skill/level gateCheck the purchase fields |
| Two identical entries in the shopDuplicate mod with the source's display nameChange the display nameVehicle never appears in the shop**Purchasable Level** does not list the map you are on (or `All`), or a skill/level gateCheck the purchase fields |
| Vehicle never appears in the shop**Purchasable Level** does not list the map you are on (or `All`), or a skill/level gateCheck the purchase fields |

---

### 05. Chapter summary

| ChecklistDoneDoes the representative colour have a square icon?✅For a Duplicate, did I change the display name?✅Did I replace the simplified mesh, or decide not to on purpose?✅Is the price set to something deliberate?✅ |
| --- |
| Does the representative colour have a square icon?✅For a Duplicate, did I change the display name?✅Did I replace the simplified mesh, or decide not to on purpose?✅Is the price set to something deliberate?✅ |
| For a Duplicate, did I change the display name?✅Did I replace the simplified mesh, or decide not to on purpose?✅Is the price set to something deliberate?✅ |
| Did I replace the simplified mesh, or decide not to on purpose?✅Is the price set to something deliberate?✅ |
| Is the price set to something deliberate?✅ |

---

### 06. What the MCP tools cover

| ToolUse`modkit_set_data` with `data="Vehicle"`Price, purchase conditions, the simplified mesh.`modkit_set_vehicle_color`Colours, including the representative one.`modkit_set_translation_entries`Display name and description. |
| --- |
| `modkit_set_data` with `data="Vehicle"`Price, purchase conditions, the simplified mesh.`modkit_set_vehicle_color`Colours, including the representative one.`modkit_set_translation_entries`Display name and description. |
| `modkit_set_vehicle_color`Colours, including the representative one.`modkit_set_translation_entries`Display name and description. |
| `modkit_set_translation_entries`Display name and description. |

Colours are a structured list, so use `modkit_set_vehicle_color` rather than writing the field directly.

---

### 07. Data reference

- [Vehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicle) - every field in this section.
- [FB1VehicleColorData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecolordata) - one colour entry, including its icon.
