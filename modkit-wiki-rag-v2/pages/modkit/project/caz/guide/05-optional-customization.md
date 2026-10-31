---
document_id: "2e990180e2b47986daf3886d0cb2db68afe5b6ba1431a6dc6770438dc36309a5"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/guide/05-optional-customization"
title: "05. Optional Customization"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Guide"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "a727e446b236362068d5e149cd6b564337a7524ebc45008429a841fffde8384b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/guide/05-optional-customization"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/MU_3zZxIvCU/maxresdefault.jpg)# 25Sofa Mod Tutorial](https://www.youtube.com/watch?v=MU_3zZxIvCU&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

**Purpose**

To properly complete a clothing Mod in inZOI Modkit, you must understand and correctly configure the structure and fields of the **Optional Customization** file.

---

**What is Optional Customization?**

- A configuration data file that defines **how each outfit functions** in-game.
- It connects the FBX mesh and textures to the game, and sets values like thumbnail image, layer priority, gender, masking, tags, etc.

In short, **all functional settings** of a clothing mod are handled in the Optional Customization file.

---

**Field Descriptions**

| Field NameDescription`Thumbnail`Specifies the thumbnail image for the outfit`GenderType`Defines which gender can wear the outfit (`Male`, `Female`)`BodyAgeType`Specifies body type (`Adult`, `Child`)`LayerPriority`Determines rendering priority — higher number renders on top (e.g. Outer: 10, Top: 8, Bottom: 6)`Drawing Regions`Region IDs to be masked for this outfit (linked to UV2)`Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| --- |
| `Thumbnail`Specifies the thumbnail image for the outfit`GenderType`Defines which gender can wear the outfit (`Male`, `Female`)`BodyAgeType`Specifies body type (`Adult`, `Child`)`LayerPriority`Determines rendering priority — higher number renders on top (e.g. Outer: 10, Top: 8, Bottom: 6)`Drawing Regions`Region IDs to be masked for this outfit (linked to UV2)`Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `GenderType`Defines which gender can wear the outfit (`Male`, `Female`)`BodyAgeType`Specifies body type (`Adult`, `Child`)`LayerPriority`Determines rendering priority — higher number renders on top (e.g. Outer: 10, Top: 8, Bottom: 6)`Drawing Regions`Region IDs to be masked for this outfit (linked to UV2)`Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `BodyAgeType`Specifies body type (`Adult`, `Child`)`LayerPriority`Determines rendering priority — higher number renders on top (e.g. Outer: 10, Top: 8, Bottom: 6)`Drawing Regions`Region IDs to be masked for this outfit (linked to UV2)`Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `LayerPriority`Determines rendering priority — higher number renders on top (e.g. Outer: 10, Top: 8, Bottom: 6)`Drawing Regions`Region IDs to be masked for this outfit (linked to UV2)`Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `Drawing Regions`Region IDs to be masked for this outfit (linked to UV2)`Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `Covering Regions`IDs of lower-layer regions to be hidden by this outfit`Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `Body Regions`Body mesh regions to hide when worn`Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |
| `Tags`Special tags (e.g. `NoOuter` to prevent layering with outerwear) |

---

**Required / Optional Fields**

| Field NameRequiredDescriptionGenderType✅Required for determining gender compatibilityBodyAgeType✅Required for defining body typeLayerPriority✅Required for correct layer rendering orderDrawing Regions✅Must be defined using UV2Covering Regions🔺Set if overlap with lower clothing occursBody Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| --- |
| GenderType✅Required for determining gender compatibilityBodyAgeType✅Required for defining body typeLayerPriority✅Required for correct layer rendering orderDrawing Regions✅Must be defined using UV2Covering Regions🔺Set if overlap with lower clothing occursBody Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| BodyAgeType✅Required for defining body typeLayerPriority✅Required for correct layer rendering orderDrawing Regions✅Must be defined using UV2Covering Regions🔺Set if overlap with lower clothing occursBody Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| LayerPriority✅Required for correct layer rendering orderDrawing Regions✅Must be defined using UV2Covering Regions🔺Set if overlap with lower clothing occursBody Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| Drawing Regions✅Must be defined using UV2Covering Regions🔺Set if overlap with lower clothing occursBody Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| Covering Regions🔺Set if overlap with lower clothing occursBody Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| Body Regions🔺Use when body parts need to be hiddenTags🔺Optional conditions or restrictions |
| Tags🔺Optional conditions or restrictions |

---

**Using the Modkit Wizard**

Modkit provides a **Wizard UI** for beginners:

- Allows dropdown selection for gender, category
- Region IDs can be selected from a predefined list (individual or grouped)
- You can create configuration files **without using a text editor**

> However, after using the Wizard, you **must still be able to edit manually** for advanced setup.

---

**Mistake Prevention Checklist**

| SituationCauseSolutionColor customization doesn’t work- Missing alpha channel - RGB Mask missing - Custom Color Intensity not set- Check texture setup - Set Custom Color Intensity = 1Body mesh overlaps outfit`BodyRegions` not setAdd appropriate region IDs |
| --- |
| Color customization doesn’t work- Missing alpha channel - RGB Mask missing - Custom Color Intensity not set- Check texture setup - Set Custom Color Intensity = 1Body mesh overlaps outfit`BodyRegions` not setAdd appropriate region IDs |
| Body mesh overlaps outfit`BodyRegions` not setAdd appropriate region IDs |

---

**Summary**

- **Optional Customization** defines how your clothing Mod behaves in-game
- Most settings can be done via Wizard UI, but you should be comfortable with manual editing for advanced customization
- Correct **Region IDs**, proper **LayerPriority**, and appropriate **Tags** are key
