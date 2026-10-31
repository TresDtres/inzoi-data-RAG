---
document_id: "ca83cb82bb416f1e09a63fa15eff51b5e7d2ca537922f9aaa437f048bdef102a"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/legacy/caz/head/05finalexport"
title: "Final Export"
section: "modkit/legacy"
breadcrumb: ["ModKit Documentation", "ModKit", "Legacy", "CAZ", "Head"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:34+00:00"
content_sha256: "7ef2960af33b35f8cfcf0e72bc2683e9f504281535f504104efe6849965fbd66"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/legacy/caz/head/05finalexport"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**5.1 Scene Reset After Script Execution**

After running the previous script, the MetaHuman rig will be rebuilt in a new scene based on the modified joint positions.

The **geometry_grp** can be removed since it is no longer used.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_01.png)

---

**5.2 Import the Edited Head Mesh**

Import the FBX file exported in the previous step.

Example file:

```
MOD.fbx
```

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_02.png)

---

**5.3 Run the Binding Script**

Run the following script first.

This script automatically performs:

- Joint binding
- Material assignment

Copy the contents of:

```
bind_material_setup.py
```

and paste it into the **Python Script Editor** in Maya.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_03.png)

---

**5.4 Import the Saved Skin Weights**

Load the skin weight files saved in the previous step and apply them.

Apply the skin weights to all objects inside:

```
head_lod0_grp
```

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_04.png)

---

**5.5 Clean the Scene**

After rigging is complete, clean up the scene so that only the meshes and joints required for the engine remain.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_05.png)

---

**5.6 Import the Final Skeleton**

Import the appropriate skeleton file from:

```
MetaHuman_Skeleton_02.zip
```

Example:

```
Male_Skeleton_02.fbx
```

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_06.png)

Place spine_04 as a child of spine_03 in the hierarchy.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_07.png)

---

**5.7 Clean Unused Nodes**

Open **Hypershade** and remove unused nodes.

```
Hypershade → Edit → Delete Unused Nodes
```

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_08.png)

---

**5.8 Export Final FBX**

Select only:

- **MOD (mesh group)**
- **root (skeleton joint)**

Then export the final FBX.

```
File → Export Selection
```

Settings:

```
Preset : inZOI_Export_FBX
```

Example filename:

```
SKM_Head_MOD.fbx
```

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta05/Meta05_09.png)

---

The final FBX is now ready for use in **inZOI ModKit**.
