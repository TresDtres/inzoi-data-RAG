---
document_id: "e64f3efea0cf088195cfe2a1e27409a9e145344b80f97b255b92eb7583fc1b36"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/guide/03-masking-system"
title: "03. Masking System"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Guide"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "d0435f4aac6535834dc689d9639094154c62478a2a569afd2cb3652cc8c2d634"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/guide/03-masking-system"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/MU_3zZxIvCU/maxresdefault.jpg)# 25Sofa Mod Tutorial](https://www.youtube.com/watch?v=MU_3zZxIvCU&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

**Purpose**

When an outfit is equipped on a character:

- It should naturally hide the character's body mesh, and
- Enable proper layer combinations without visual conflicts.

To achieve this, you must correctly understand and apply **Drawing Regions**, **Covering Regions**, and **Body Regions**.

---

**Why the Masking System Is Needed**

- A single outfit works fine by itself,
- But when **combined with other outfits**, or
- **Overlaps the body mesh**,

→ Visual issues like **mesh clipping or intersection** may occur.

To prevent this:

- Define **which areas of your outfit should be masked** (Drawing Regions)
- Specify **which lower-layer outfit parts should be hidden** (Covering Regions)
- Hide **specific parts of the character’s body** (Body Regions)

---

**Masking System Overview**

| System TypeDescriptionHow to ApplyDrawing RegionsAreas of the outfit to be maskedPlace UVs in designated regions on UV Channel 2Covering RegionsParts of lower-layer outfits to hideAssign Covering Region IDsBody RegionsBody parts to hide when equippedAssign Body Region IDs |
| --- |
| Drawing RegionsAreas of the outfit to be maskedPlace UVs in designated regions on UV Channel 2Covering RegionsParts of lower-layer outfits to hideAssign Covering Region IDsBody RegionsBody parts to hide when equippedAssign Body Region IDs |
| Covering RegionsParts of lower-layer outfits to hideAssign Covering Region IDsBody RegionsBody parts to hide when equippedAssign Body Region IDs |
| Body RegionsBody parts to hide when equippedAssign Body Region IDs |

---

**1. Drawing Regions**

**- Description**

- Set mask regions using **UV Channel 2**.
- Place UV shells into the designated region areas.

**- UV Channel 2 Workflow**

1. Create UV Channel 2
2. Move UV shells to the correct Region ID areas
3. Use guides to avoid overlap between different regions

**- Example Region IDs**

| Region IDDescriptionChestChest areaBellyUpperUpper abdomenLeftArmUpperLeft upper arm |
| --- |
| ChestChest areaBellyUpperUpper abdomenLeftArmUpperLeft upper arm |
| BellyUpperUpper abdomenLeftArmUpperLeft upper arm |
| LeftArmUpperLeft upper arm |

**- UV Channel 2 Region Guide**

![UV Channel 2 Region Guide](https://mod-docs.playinzoi.com/media/Modkit/Caz_01.png)

**- Upper Layer Masking Region Guide**

![Upper Layer Masking Guide](https://mod-docs.playinzoi.com/media/Modkit/Caz_02.png)

**- Lower Layer Masking Region Guide**

![Lower Layer Masking Guide](https://mod-docs.playinzoi.com/media/Modkit/Caz_03.png)

---

**2. Covering Regions**

**- Description**

- Use this when your outfit should hide another outfit in a lower layer.
- Example: If a long top covers the waist of pants, set `PantsWaist` as a Covering Region.
    - The pants must also have `PantsWaist` in their Drawing Regions, properly set in UV2.

**- Covering Region Workflow**

1. Add individual or group IDs in the `"Covering Regions"` field

---

**3. Body Regions**

**- Description**

- Defines which parts of the character’s **body mesh** should be hidden when wearing the outfit.
- Used to prevent body parts from poking through shirts, pants, shoes, etc.

**- Body Masking Region Guide**

![Body Masking Region Guide](https://mod-docs.playinzoi.com/media/Modkit/Caz_04.png) ![Body Masking Region Guide](https://mod-docs.playinzoi.com/media/Modkit/Caz_05.png)

---

**Full ID List (Summary)**

| Drawing / Covering Regions (Clothing Parts)Body Regions (Body Parts)LeftShoulder, RightShoulderChestUpper, BackUpperChest, Back, BellyUpperLeftArmUpper, LeftElbowLeftArmUpper, RightArmUpperBellyUpper, BellyLowerLeftThigh, RightThighWaistBack, PelvisLeftShin, RightShinLeftShin, RightShinLeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| --- |
| LeftShoulder, RightShoulderChestUpper, BackUpperChest, Back, BellyUpperLeftArmUpper, LeftElbowLeftArmUpper, RightArmUpperBellyUpper, BellyLowerLeftThigh, RightThighWaistBack, PelvisLeftShin, RightShinLeftShin, RightShinLeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| Chest, Back, BellyUpperLeftArmUpper, LeftElbowLeftArmUpper, RightArmUpperBellyUpper, BellyLowerLeftThigh, RightThighWaistBack, PelvisLeftShin, RightShinLeftShin, RightShinLeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| LeftArmUpper, RightArmUpperBellyUpper, BellyLowerLeftThigh, RightThighWaistBack, PelvisLeftShin, RightShinLeftShin, RightShinLeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| LeftThigh, RightThighWaistBack, PelvisLeftShin, RightShinLeftShin, RightShinLeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| LeftShin, RightShinLeftShin, RightShinLeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| LeftFoot, RightFootLeftFoot, RightFootetc.etc. |
| etc.etc. |

---

**Group ID System**

Group IDs allow bundling multiple Region IDs into a single convenient setting.

| Group ID NameExample Included RegionsUpperBodyClosedChest, BellyUpper, Back, LeftArmUpper, RightArmUpperBottomMidBellyLower, Buttocks, LeftThigh, RightThighArmsAllLeftArmUpper, LeftArmLower, RightArmUpper, RightArmLower |
| --- |
| UpperBodyClosedChest, BellyUpper, Back, LeftArmUpper, RightArmUpperBottomMidBellyLower, Buttocks, LeftThigh, RightThighArmsAllLeftArmUpper, LeftArmLower, RightArmUpper, RightArmLower |
| BottomMidBellyLower, Buttocks, LeftThigh, RightThighArmsAllLeftArmUpper, LeftArmLower, RightArmUpper, RightArmLower |
| ArmsAllLeftArmUpper, LeftArmLower, RightArmUpper, RightArmLower |

- Beginners can use Group IDs for faster setup
- Advanced users may add individual IDs for more control

---

**Common Mistakes & Fixes**

| MistakeCauseSolutionUV2 not setUV Channel 2 not includedMake sure UV2 is exportedMy outfit isn’t masked- Incorrect UV2 setup - Missing Drawing Region ID - Missing matching Covering Region ID- Fix UV2 - Add Region IDsLower outfit not masked- Missing Covering Region ID - No matching Drawing Region on lower outfitFix Covering Region IDBody pokes through outfitBody Region not setAdd the correct Body Region ID |
| --- |
| UV2 not setUV Channel 2 not includedMake sure UV2 is exportedMy outfit isn’t masked- Incorrect UV2 setup - Missing Drawing Region ID - Missing matching Covering Region ID- Fix UV2 - Add Region IDsLower outfit not masked- Missing Covering Region ID - No matching Drawing Region on lower outfitFix Covering Region IDBody pokes through outfitBody Region not setAdd the correct Body Region ID |
| My outfit isn’t masked- Incorrect UV2 setup - Missing Drawing Region ID - Missing matching Covering Region ID- Fix UV2 - Add Region IDsLower outfit not masked- Missing Covering Region ID - No matching Drawing Region on lower outfitFix Covering Region IDBody pokes through outfitBody Region not setAdd the correct Body Region ID |
| Lower outfit not masked- Missing Covering Region ID - No matching Drawing Region on lower outfitFix Covering Region IDBody pokes through outfitBody Region not setAdd the correct Body Region ID |
| Body pokes through outfitBody Region not setAdd the correct Body Region ID |

---

**Chapter Summary

| ChecklistDoneUV Channel 2 created and placed✅Drawing Regions set✅Covering Regions set✅Body Regions set✅Group ID used if needed✅ |
| --- |
| UV Channel 2 created and placed✅Drawing Regions set✅Covering Regions set✅Body Regions set✅Group ID used if needed✅ |
| Drawing Regions set✅Covering Regions set✅Body Regions set✅Group ID used if needed✅ |
| Covering Regions set✅Body Regions set✅Group ID used if needed✅ |
| Body Regions set✅Group ID used if needed✅ |
| Group ID used if needed✅ |
