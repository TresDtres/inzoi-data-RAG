---
document_id: "633a583431fe8b61fb5c7793c54f85a0d9845567cc5ab7c41731a254a09bd91e"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/build/04advanced"
title: "Edit"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Build"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:30+00:00"
content_sha256: "015245b28fe0a5e08d75408eb6014fdb62e3b977200dec61bd883dffc2c25d38"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/build/04advanced"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/eKVeRV9Zupg/maxresdefault.jpg)# 04Build Object Modding](https://inzoi.me/ModTutorial04)[![](https://i.ytimg.com/vi/WAuQlf4CCH4/maxresdefault.jpg)# 18Material Mod Tutorial](https://www.youtube.com/watch?v=WAuQlf4CCH4&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/g2iaUMlrJtk/maxresdefault.jpg)# 05Build Data Modding](https://inzoi.me/ModTutorial05)

Once the project has been created, it is time to directly edit the core data of the mod. This guide explains how to use the Data Editor to analyze and modify the asset data included in your mod.

---

## Launch Data Editor

First, select **[Open Data Editor]** for the mod project you created in the previous step.

![My Mod Projects Context Menu](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_26.jpg)

---

## Object tables

A furniture object is described by two tables.

- **`Object`** — what the object *is*: name, price, category, tags, and the rows it references for interactions.
- **`ObjectBP`** — how the object is *built*: its components, attachment slots, area box and actor metadata.

This guide edits **`Object`**. `ObjectBP` is easier to change from the workspace panel, where the Components, Slot and Bounds sections write it for you.

![inZOI Data Editor Screen](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_27.jpg)

- **Working Data (Left Panel)** A list of data available for editing. Select **`Object`** to show its details in the middle and right panels.

Source Data vs Working Data

- **Source Data**: The large library of original inZOI game data.
- **Working Data**: A copy of Source Data that you have pulled for editing.

---

- **Properties Panel (Middle Panel)**
    - The main editing space where all properties of the selected row are displayed for easy modification.
    - **Key Properties**
          - **ID**: Unique identifier of the data.
          - **DisplayName / DescriptionTextId**: IDs for the object’s display name and description shown in-game. (Actual text is linked via String data.)
          - **ObjectTemplateId**: Specifies which base template this object uses.
          - **ObjectCategory / FilterCategory**: Defines the category under which the object is listed in the build catalog (e.g., `Bed`).
          - **MarketPriceId**: The market price row this object uses. Leave it `None` when the object is not traded.
          - **Icon**: Specifies the icon image displayed in the UI.
          - **ObjectTags / ObjectFilterTags**: Tags the game uses for gameplay rules and for catalog filtering.
          - **Quality / Weight / InventoryCount**: Defines quality, weight, and inventory count of the object.
          - **Price**: Base price of the object.
- **Value Panel (Right Panel)**
    - Shows how the changes you make in the middle panel are stored in the actual data file (JSON format).
    - Mainly used by developers to check the data structure.
- **Editing & Saving**
    1. Select `Object` from the **Working Data** list.
    2. Modify the desired property (e.g., `Price`) in the **Properties Panel**.
    3. Click the **[Save]** button in the top right to save changes.

---

## Modify Data

Now let’s change some values in practice. This section explains how to edit list-type data.

1. Click the data you want to edit in the **Working Data** list.
2. In the **Details** panel on the right, click the property you want to edit (e.g., `detailType`).
3. A **Detailed Edit Window** appears at the bottom of the screen.
4. Modify the value or list in the detailed edit window, then click **[Apply]**.
5. Once applied, the **[Save]** button at the top of the screen will be enabled.
6. Click the enabled **[Save]** button to finalize your changes.

![Detailed Editing & Save Process](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_28.jpg)

---

[Watch on YouTube](https://youtu.be/eKVeRV9Zupg)
