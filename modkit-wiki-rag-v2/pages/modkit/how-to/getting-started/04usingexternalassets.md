---
document_id: "c7d1ffcdf5b7429f3333d34f6a75c1f6ad61bda5578bec2608d844d9dd359f86"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/getting-started/04usingexternalassets"
title: "Using External Assets"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Getting Started"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:32+00:00"
content_sha256: "b16873bdaa01b897a981f876f5a83d9d5ea2bf484a9214bea5deee78df6c9719"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/getting-started/04usingexternalassets"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/Q5X--x2PV2k/maxresdefault.jpg)# 00ModKit Overview](https://inzoi.me/ModTutorial00)

warning

The **Megascans** materials referenced in this document may be subject to copyright. Any legal responsibilities arising from unauthorized distribution, commercial use, or secondary redistribution rest **solely with the user**. Please ensure you review the relevant copyright and license terms before using such materials.

⚠️ This document is provided **solely as an example for practice purposes**. No example files are included, and only the documentation is provided. For any real project usage, you must carefully review and comply with official licenses and copyright requirements.

This guide covers the process of importing high-quality assets from external sources like Quixel Bridge for use in the inZOI ModKit.

---

## 1. Create Folder & Download Content

First, you need to create a new folder to hold the external assets and download the desired asset from Quixel Bridge.

![Create Folder and Launch Quixel Bridge](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_29.jpg)

1. **Create Folder**: Create a new project or open an existing one in `My Mod Projects`. Right-click in the Content Browser to create a new folder for organizing external assets.
2. **Launch Quixel Bridge**: Click the **[Content]** button at the top of the Content Browser to open **[Quixel Bridge]**.
3. **Download Asset**: Find and download the desired asset (e.g., a fireplace) in Bridge.

---

## 2. Import Files

Bring the downloaded assets into the ModKit's Asset Editor to perform the basic setup.

![Drag and Drop Asset](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_30.jpg)

1. Click the **Add** button in Bridge to import the downloaded asset into the **Content Browser**.
2. Double-click the imported asset to open the **Asset Editor**. Here, you can verify that the mesh and materials have been applied correctly and modify any necessary properties.

---

## 3. Texturing

Once the asset is set up, you must apply textures to the Static Mesh, Thumbnail, and Materials appropriately.

If the texture's channel values differ from the MI Prop standard, the channels must be changed. If they are the same as the standard, you can apply it in-game to finish.

!!!tip "Changing Texture Channels"

```
For downloaded textures, the G channel of the mixed map is often set to the Roughness value. Therefore, you may need to change the channels to match the standard used by the MI Prop material: AOMRD (R: AO, G: Metallic, B: Roughness).<a class="button button--lg button--secondary" href="/docs/modkit-docs/modkit/how-to/advancedguides/texturechannel">Change Texture Channels</a>
```

---

## 4. Packaging the Mod

Once all work is complete, click the back arrow at the top left of the editor to return to the main screen, then proceed with the packaging (build) steps below.

![Go Back](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_34.jpg)

Packaging

Use one of the following options to package your mod and make it available in the game or share it with others.

[CurseForge](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/export/curseforge) [Local](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/export/local)

## 5. Organize Asset Files

Creating Folders and Moving Files

These folders are not generated automatically, so you must create them yourself and move the corresponding files. Since the material uses MI_Prop, the Materials folder is created automatically.

- **`Images` folder**: Store 2D image files like **thumbnails** or icons that will be displayed in the UI.
- **`Meshes` folder**: Store the mod's 3D model data, such as **Static Meshes** and **Skeletal Meshes** (`.fbx` files, etc.).
- **`Textures` folder**: Store the **texture** files (`.png`, `.tga`, `.dds`, etc.) that are applied to the surface of the 3D models.

**Reference Video**

You can see the actual process in the video below:

Your browser does not support the video tag.

Optimization

- It is recommended to enable the Nanite option by double-clicking the mesh file.
- Smaller texture sizes and lower mesh triangle counts are better for optimization.

---

## 6. In-Game Confirmation

Finally, apply the packaged mod to the game and confirm that it works correctly.

![Confirm in Game](https://mod-docs.playinzoi.com/media/Modkit/tutorials/tutorials_32.jpg)

1. Set the path to `This PC > Documents > inZOI > Mods`
2. Launch the game and open the **Build Mode** catalog to confirm that the added asset is displayed and can be placed properly.
