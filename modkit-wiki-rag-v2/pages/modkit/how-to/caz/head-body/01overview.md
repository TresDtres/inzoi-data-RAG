---
document_id: "91da6f5b9cf8f044981789331a1734fbdfa67a7013e9b6a33110b81fce1c6b6b"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/caz/head-body/01overview"
title: "Overview"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "CAZ", "Head&Body"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:31+00:00"
content_sha256: "a0a83b43d69a1eddc9d962d2b4a8400802b5df24439a16dff702940c929289da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/caz/head-body/01overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/LAG3Gja5KkQ/maxresdefault.jpg)# 13Skin Modifications](https://www.youtube.com/watch?v=LAG3Gja5KkQ&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/xv73MZQYQzQ/maxresdefault.jpg)# 14Modifying Object Sounds](https://www.youtube.com/watch?v=xv73MZQYQzQ&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/FZLiIq05HBA/maxresdefault.jpg)# 15Face Mod Tutorial Part 01](https://www.youtube.com/watch?v=FZLiIq05HBA&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

This document describes the complete workflow for modding inZOI character faces using **MetaHuman Editor** in Unreal Engine 5, and registering the finished assets in the **ModKit**.

MetaHuman Editor Limitations

Options set in the **Materials** and **Hair & Clothing** tabs of MetaHuman Editor are not reflected in the inZOI ModKit.

- Skin-related settings → Proceed separately via the **Skin Modding** workflow [Project > CAZ > Skin > Overview](https://mod-docs.playinzoi.com/ModKit/project/CAZ/Skin/01.Overview.html)
- Hair-related settings → Proceed separately via the **Hair Modding** workflow [Project > CAZ > Hair > Overview](https://mod-docs.playinzoi.com/ModKit/project/CAZ/Hair/01.Overview.html)

---

**1. Create a Project Folder**

Create a new folder at your desired path in the Content Browser.

info

Any folder inside Content will work. Remember this path, as you will use the same one during the Assemble step later.

![Create a Project Folder](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_01.png)

---

**2. Create a MetaHuman Character**

Right-click in the folder you created and select **MetaHuman → MetaHuman Character** to create and name your character.

![Create a MetaHuman Character](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_02.png)

---

**3. Body Conform Setup**

Important: You must set up the Body first

The Body must be conformed before the Head for everything to work correctly. Reversing the order may cause issues.

Open the MetaHuman character you created and follow the steps below.

1. Select **Body → Conform → From Template**
2. In **Asset → Mesh**, assign the body mesh for the desired gender

**Male**

```
Characters/AvatarParts/Body/Male/Mesh/ModKit
```

**Female**

```
Characters/AvatarParts/Body/Female/Mesh/ModKit
```

![Body Conform Setup](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_05.png)

---

**4. Body Import**

After assigning the body mesh, click the **Import** button.

note

Leave **Body Fit Options** at the default value: `Fit from Mesh and Skeleton`.

![Body Import](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_06.png)

---

**5. Head Conform Setup**

1. Select **Head → Conform → From Template**
2. In **Asset → Mesh**, assign the face mesh for the desired gender

Choose from one of the **9 inZOI face types**.

**Male**

```
/All/Game/Characters/AvatarParts/Heads/Male/Male_Head_ModKit/Mesh
```

**Female**

```
/All/Game/Characters/AvatarParts/Heads/Female/Female_Head_ModKit/Mesh
```

![Head Conform Setup](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_07.png)

---

**6. Head Import Option Settings**

After assigning the face mesh, configure the following options under **Import Template Options**, then click **Conform**.

| OptionValue**Alignment Options**`None`**Adapt Neck**Unchecked |
| --- |
| **Alignment Options**`None`**Adapt Neck**Unchecked |
| **Adapt Neck**Unchecked |

![Head Import Option Settings](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_08.png)

---

**7. Edit the Face (Sculpt / Transform)**

Once the setup is complete, use **Head → Transform / Sculpt** to mod the face.

Editing in Skin Mode

Change the **Topology** option at the top to `Skin` to edit in skin mode.

![Edit the Face](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_09.png) ![Edit the Face 2](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_10.png) ![Edit the Face 3](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_11.png)

---

**8. Body Modding**

Once face editing is complete, switch to the **Body** tab to begin body modding.

Go to **Body → Model → Parametric** and adjust the values.

![Step 8](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_01.png)

---

**9. Download Texture Source**

When editing is complete, click **Download Texture Source** at the top and select **Download 2k Resolution Textures**.

![Step 9](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_02.png)

---

**10. Create Joints Only Rig**

Once the textures have finished downloading, click **Create Joints Only Rig**.

![Step 10](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_03.png)

---

**11. Assembly — Set Root Directory**

When rigging is complete, go to the **Assembly** tab and set the path under **Targets → Root Directory**. (Using the same path as the folder you created at the beginning is recommended.)

After setting the path, click **Assemble** at the bottom.

![Step 11](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_04.png)

---

**12. Assembly Complete**

When Assemble finishes, a folder is created at the specified path.

- **Face** folder — contains the face skeletal mesh
- **Body** folder — contains the body skeletal mesh

![Step 12](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_05.png)

---

**13. CREATE A ZOI — Select Face**

In the ModKit, go to **CREATE A ZOI → CAZ → FACE** tab and select a face. (The material of the selected face will be used.)

After selecting, click **Create new mod project** to create the project.

![Step 13](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_06.png)

---

**14. Move Skeletal Meshes to Mod Project**

Move the skeletal meshes into the **Face** and **Body** folders of the created project.

Important: Mod Project Path

Navigate to **Plugins → /All/Plugins/MH_MOD_ZOI** (your generated mod file path).

![Step 14 - Move Assets](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_07.png)

![Step 14 - Plugin Path](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_08.png)

**15. Assign Skeleton to Body Skeletal Mesh**

Once the skeletal meshes are moved into the mod project, right-click the **body skeletal mesh** and run **Assign Skeleton**.

Accept **SK_Base** (`/Game/Characters/Skeletons/SK_Base.SK_Base`).

Important

This step is required. Do not skip.

![Step 15](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_09.png)

---

**16. Set Face & Body Mesh in Modding Wizard**

In the Face & Body modding wizard, assign the meshes in the following order: **face skeletal mesh first, then body skeletal mesh**.

Important

Head must be assigned before Body.

Keep Nanite off

Nanite must be disabled on both the face and body skeletal meshes. inZOI characters are not built for Nanite, and on a Nanite mesh the highlight in Character Studio shows up as a checkerboard.

Open each mesh, uncheck **Nanite Settings → Enable Nanite Support**, click **Apply Changes**, and save. If the face or body mesh still has Nanite enabled, packaging warns you before it continues.

![Step 16 Head](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_10.png) ![Step 16 Body](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_11.png)

---

**17. Set Thumbnails and Gender**

After assigning the meshes, set the following:

1. Face thumbnail
2. Body shape thumbnail
3. Zoi preset thumbnail

Then go to **Face Properties → Gender Type** and select the appropriate gender.

---

![Step 17 - Properties](https://mod-docs.playinzoi.com/media/Modkit/Caz/HeadBody/HeadBody_12.png)

**18. Run Packaging**

Once all settings are complete, run **Packaging**.
