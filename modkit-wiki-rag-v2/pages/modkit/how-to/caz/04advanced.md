---
document_id: "fa7b35bcae96896ce1cfd2c20f163f2d98788e8d021b72f1c07d1ef12afb6069"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/caz/04advanced"
title: "Edit"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "CAZ"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:31+00:00"
content_sha256: "257e1e3310c53fcb5dd13fb19eb563237ca1c172b247c1ae8e47ea1a21cf802c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/caz/04advanced"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/sQbOOSqOgh8/maxresdefault.jpg)# 01ModKit Transfer](https://inzoi.me/ModTutorial01)

Once the project has been created, it is time to directly edit the core data of the mod. This guide explains how to use the Data Editor to analyze the asset data included in the mod and modify it to the desired values.

---

## Launch Data Editor

First, select **[Open Data Editor]** from the mod project you created in the previous step.

![My Mod Projects Context Menu](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_17.jpg)

---

## Check Working Data

When the Data Editor opens, you can directly view and edit the detailed data of the mod assets. This is the "editing space," and the screen is divided into three panels.

![inZOI Data Editor Screen](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_18.jpg)

- **Working Data (Left Panel)**
    - A list of data currently available for editing.
    - If you created a project using a CAZ asset (e.g., `M_C_Jump002_001`), the core data of that asset—**`GarmentFullMesh`** and **`GarmentFull`**—will be automatically registered here.
- **Properties Panel (Middle Panel)**
    - Displays the properties of the selected `Working Data` in an easy-to-read editing space.
    - You can directly edit various property values such as `Thumbnail`, `GenderType`, `BodyAgeType`, and `Tags`.
- **Value Panel (Right Panel)**
    - Shows how the properties from the middle panel are stored in the actual data file, in their original JSON format.
    - The values modified here are what ultimately apply to the mod.

Source Data vs Working Data

- **Source Data**: The large library of original inZOI game data.
- **Working Data**: A copy of Source Data that you have pulled for editing.

---

## Modify Data

Now let’s actually change some values. This example shows how to edit list-type data.

1. Click the data you want to edit in the **Working Data** list.
2. In the **Details** panel on the right, click the property you want to edit (e.g., `DrawingRegions`).
3. A **Detailed Edit Window** will appear at the bottom of the screen.
4. Modify the value or list in the detailed edit window, then click **[Apply]**.
5. Once you click **[Apply]**, the **[Save]** button at the top of the screen will be enabled.
6. Click the enabled **[Save]** button to finalize your changes.

![Detailed Editing & Save Process](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_19.jpg)

Editing Various Properties

Simple text or numeric values can be edited directly in the Details panel, but more complex list or structured properties can be edited through the detailed edit window at the bottom.

---

[Watch on YouTube](https://youtu.be/qLuduFlNp-8)
