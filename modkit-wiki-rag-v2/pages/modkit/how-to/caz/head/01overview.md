---
document_id: "dd907963ada090c56c4adb390b9dc32305726cd864e450ff741f99344ec3f248"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/caz/head/01overview"
title: "Overview"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "CAZ", "Head"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:32+00:00"
content_sha256: "9bd9f2614e7d859c1192d8bd8a452a52cc39b6877b367e5fa75701b7cb07c78f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/caz/head/01overview"
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

![Teeth](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_12.png)

---

**8. Download Textures**

Once editing is complete, select the following from the top menu:

> **Download Texture Source → Download 4K Resolution Textures**

![Download Textures](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_14.png)

---

**9. Create Rig**

After the texture download is complete, click the **Create Joints Only Rig** button to generate the rig.

![Create Rig](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_15.png)

---

**10. Run Assemble**

Once rigging is complete, navigate to the **Assembly** tab.

1. Set the path in **Targets → Root Directory**.
2. Click the **Assemble** button at the bottom to execute.

Recommended Path

It is recommended to use the same path as the folder created in (#1-create-a-project-folder).

![Run Assemble](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_16.png)

---

**11. Verify the Output**

Once Assemble is complete, a folder will be created at the specified path.

```
Specified Path/└── Face/    └── Face Skeletal Mesh
```

![Verify the Output](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_17.png)

---

**12. Create a Face Project in the ModKit**

In the ModKit, follow the steps below:

- Select a face in the **CREATE A ZOI → CAZ → FACE** tab

![Create a Face Project in the ModKit](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_18.png)

- Create a project with **Create new mod project**

![Create a Face Project in the ModKit](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_19.png)

---

**13. Move the Face Asset**

Move the face skeletal mesh completed in (#11-verify-the-output) into the mod project you created.

![Move the Face Asset](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_20.png)

---

**14. Open the ModKit Project**

Open the face modding project from **MY MOD PROJECTS**.

![Open the ModKit Project](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_21.png)

---

**15. Register the Mesh**

Register the completed face skeletal mesh in the **Mesh** field of the face modding project.

![Register the Mesh](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_22.png)

Joint Matching Popup

A joint matching popup will appear when the mesh is assigned. Select **Yes**.

![Head Mesh Setup](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_24.png)

Important: Head Mesh Setup

The head mesh has changed. The following setup scripts will run on the selected MetaHuman face skeletal mesh:

1. Skeletal Joint Matching — Recalculates bone correspondence between the reference body and head skeletal meshes and may update bone transforms.
2. LOD Cleanup — inZOI uses LOD 0–4. MetaHuman assets ship with LOD 0–7, so extra LODs will be removed and the mesh will be reorganized to match the inZOI LOD range.
3. Material Replacement — Replaces all material slots with the inZOI in-game materials.

These operations write to skeletal mesh assets. Back up or verify version control state before continuing.

Do you want to continue?

---

**16. Final Settings**

After registering the mesh, configure the following:

1. Set the **Thumbnail**
2. Select the gender in **Face Properties → Gender Type**

![Final Settings](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta56/Meta56_23.png)
