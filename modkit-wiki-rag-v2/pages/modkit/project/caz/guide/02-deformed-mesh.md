---
document_id: "c2ededde52dced57571bc11ff45700de0597ae41798d34fc5f287c324752d0b0"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/caz/guide/02-deformed-mesh"
title: "02. Deformed Mesh"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "CAZ", "Guide"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "9ca1b328949b42bb84ca9f1359da9538fa0f96cea4292630edadacd8cd90368c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/project/caz/guide/02-deformed-mesh"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/xiQVOiU-gUI/maxresdefault.jpg)# 02Character Outfit Modding](https://inzoi.me/ModTutorial02)[![](https://i.ytimg.com/vi/MU_3zZxIvCU/maxresdefault.jpg)# 25Sofa Mod Tutorial](https://www.youtube.com/watch?v=MU_3zZxIvCU&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

**Purpose**

When wearing layered outfits (especially outerwear), mesh overlapping issues may occur. To prevent this, a **Deformed Skeletal Mesh** (volume-reduced mesh) should be prepared and applied.

---

**Why a Deformed Mesh Is Needed**

inZOI allows wearing multiple clothing layers simultaneously. Examples: Top + Outerwear + Bottom

However, standard tops have volume (arms/chest/sides), and when combined with outerwear, issues may arise:

- Mesh clipping or poking through
- Masking alone cannot fully resolve it
- Unnatural or visually broken outfit results

→ For clothing that might overlap, create a **reduced-volume version of the mesh** and configure it to **auto-switch** when worn with outerwear.

---

**When Do You Need a Deformed Mesh?**

| Clothing TypeRequiredNotesLoose Tops (hoodies, sweatshirts)YesHigh risk of overlap around chest/armsJumpsuits, DressesYesCovers multiple body areasWide PantsYesVolume in thighs/hips may cause overlapLeggings, Tight TopsNoTight fit → no overlap |
| --- |
| Loose Tops (hoodies, sweatshirts)YesHigh risk of overlap around chest/armsJumpsuits, DressesYesCovers multiple body areasWide PantsYesVolume in thighs/hips may cause overlapLeggings, Tight TopsNoTight fit → no overlap |
| Jumpsuits, DressesYesCovers multiple body areasWide PantsYesVolume in thighs/hips may cause overlapLeggings, Tight TopsNoTight fit → no overlap |
| Wide PantsYesVolume in thighs/hips may cause overlapLeggings, Tight TopsNoTight fit → no overlap |
| Leggings, Tight TopsNoTight fit → no overlap |

---

**How to Create One (Summary)**

**1. Duplicate the Base Mesh**

- Copy the original FBX file and use it to create a separate deformed version.

**2. Reduce Volume**

- Slightly reduce volume in overlap-prone areas (chest, arms, abdomen, hips).
- Keep rigging/skeleton unchanged.
    - Avoid flattening too much → aim for subtle and natural reduction.

**3. Keep UVs Identical**

- UV1: For textures
- UV2: For masking
- UV channels must match the base mesh exactly.

---

**File Naming Convention**

There’s no strict rule in inZOI Modkit, but the following naming is generally used:

**Base Mesh Name + `_Jacket`**

| Base Mesh NameDeformed Version NameF_Costume_Top001F_Costume_Top001_JacketM_Costume_Pants001M_Costume_Pants001_Jacket |
| --- |
| F_Costume_Top001F_Costume_Top001_JacketM_Costume_Pants001M_Costume_Pants001_Jacket |
| M_Costume_Pants001M_Costume_Pants001_Jacket |

> If the `_Jacket` version is imported into Modkit, it will be automatically used when worn with outerwear.

---

**Importing into Modkit**

1. Launch Modkit
2. Click `Import Deformed Mesh`
3. Select the FBX with `_Jacket` suffix
4. Choose the same skeleton as the base mesh
5. Click Import

---

**Behavior When Wearing**

| SituationMesh UsedWorn aloneBase MeshWorn with outerwear`_Jacket` Deformed Mesh (auto-applied) |
| --- |
| Worn aloneBase MeshWorn with outerwear`_Jacket` Deformed Mesh (auto-applied) |
| Worn with outerwear`_Jacket` Deformed Mesh (auto-applied) |

---

**Mistake Prevention Checklist**

| Check ItemNotesIs the skeleton structure identical?✅Are both UV1 and UV2 included?✅ |
| --- |
| Is the skeleton structure identical?✅Are both UV1 and UV2 included?✅ |
| Are both UV1 and UV2 included?✅ |

---

**Summary**

- Only prepare Deformed Meshes when overlap may occur.
- UV channels and skeleton must match the base mesh.
