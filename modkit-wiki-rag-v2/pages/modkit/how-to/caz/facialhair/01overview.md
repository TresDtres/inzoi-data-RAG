---
document_id: "08fecf907355e61d91f67d65946b9d40e12bf929d2442794fb0156225661b6c9"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/caz/facialhair/01overview"
title: "Overview"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "CAZ", "FacialHair"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:31+00:00"
content_sha256: "7bfef6a456ec40db3070b36885cf905f6ef70cb233ce09aae00d5a5c56c1f7bc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/caz/facialhair/01overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/LAG3Gja5KkQ/maxresdefault.jpg)# 13Skin Modifications](https://www.youtube.com/watch?v=LAG3Gja5KkQ&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/xv73MZQYQzQ/maxresdefault.jpg)# 14Modifying Object Sounds](https://www.youtube.com/watch?v=xv73MZQYQzQ&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/FZLiIq05HBA/maxresdefault.jpg)# 15Face Mod Tutorial Part 01](https://www.youtube.com/watch?v=FZLiIq05HBA&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

First, follow steps 1–7 of the [MetaHuman 5.6 Face Modding Guide](https://mod-docs.playinzoi.com/ModKit/How-to/CAZ/Head/01overview.html) as you normally would.

**1. Select Facial Hair in Hair & Clothing Tab**

Once you've finished the body and face setup using the standard face modding process, open the **Hair & Clothing** tab and select **Eyebrows**, **Eyelashes**, **Mustache**, and **Beard**. (Hair is created separately.)

![Step 1](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_01.png)

---

**2. Download Texture Source**

![Step 2](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_04.png)

---

**3. Run Create Joints Only Rig**

![Step 3](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_02.png)

---

**4. Assembly — Set Resource Paths**

In the **Assembly** section, set the resource paths for the eyebrow and beard assets you created.

![Step 4](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_03.png)

---

**5. Epic Login Required (if error appears)**

If the following error appears, you'll need to sign in to Epic.

![Step 5 - Error](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_05.png)

In the Content Browser, right-click an empty area → **Context Menu** → **Add Quixel Content** → **Sign In**. Once you're signed in, **Download Texture Source** will work as expected.

![Step 5 - Sign In](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_06.png)

![Step 5 - Sign In2](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_07.png)

---

**6. Complete Assembly**

Download the texture source and create the joints-only rig as in the standard modding process, then run Assembly. The process is complete once the assets appear at the preset path `/All/Game/Characters/AvatarParts/0515/05150/Grooms`.

![Step 6](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_08.png)

---

**7. Create a Zoi — Face → M_Head02**

![Step 7](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_09.png)

---

**8. Export Face Skeletal Mesh**

In `/All/Game/Characters/AvatarParts/0515/05150/Face`, find **SKM_05150_FaceMesh** (the head skeletal mesh).

![Step 8](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_10.png)

---

**9. Export FBX via Export Helper**

Go to `/All/Game/Characters/AvatarParts/0515/05150/Grooms`, then click **Export FBX**.

warning

For the **Eyebrows**, **Beard**, and **Mustache** static meshes, export **LOD0 only**.

![Step 9](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_11.png)

---

**10. Export Result — 4 FBX Files**

Once the export is complete, you'll have a total of **4 FBX files**: Eyebrows, Beard, Mustache, and Face. (Eyelashes are attached to the face mesh.)

![Step 10](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_12.png)

---

**11. Install Blender Plugin**

[DCC Tools - ModKit Documentation](https://mod-docs.playinzoi.com/Resources/index.html).

---

**12. Run Blender ModKit — Import Face**

**Face** tab → **Import Face** → **Don't Save** → select gender.

Open all the face, eyebrow, and beard meshes you exported earlier.

![Step 12 - Plugin UI](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_13.png) ![Step 12 - Export](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_14.png)

---

**13. Process in Order — Attach / Cleanup / Export**

With the face, eyebrow, and beard meshes loaded, click the following buttons in order:

1. **Attach to Face** (Red) — Attaches beard and eyebrows to the face (auto rigging).
2. **Material Cleanup** (Blue) — Renames and assigns material slots so in-game materials can be applied.
3. **Apply Neckline Skin Weights** (Green) — Matches the neckline skin weights to the inZOI body.
4. **Export Asset** (Yellow) — Exports the FBX files in sequence. (No visible change in the viewport is normal.)

When to use Step 3 (Apply Neckline Skin Weights)

Press this **only when modding the face on its own**. If you're creating a **face & body set**, **skip Step 3 — do not press it**. Pressing it conforms the neckline to the default inZOI body, which will conflict with your custom body.

![Step 13](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_15.png) ![Step 13](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_16.png)

---

**14. Run Import Helper — Set Source Face Mesh**

Launch **Import Helper**. Place the Original HeadMesh (SKM_05150_FaceMesh) into the **Source Face Mesh** slot.

Important

The **Source Face Mesh** must remain at its original folder path.

Setting the Source Face Mesh transfers the MetaHuman data from the original head to the new head that has the eyebrows and beard attached.

![Step 14](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_17.png)

---

**15. Import Modified FBX**

Click **Browse...**, select the **SKM_05150_New_FaceMesh** you just created in Blender, then click **Import FBX**. The file is automatically moved to the correct location.

![Step 15](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_18.png)

---

**16. Import Complete**

Once the import is complete, a pop-up window will appear, and you will be taken directly to the corresponding mode path. If the **Eyelashes** material is automatically applied, the import was successful.

![Step 16](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_19.png)

---

**17. Face Mesh Setup — Confirm Head Mesh**

Drag **Face → Mesh**, assign the head and click **Yes**.

Head Mesh Setup

The following setup scripts will run automatically:

1. **Skeletal Joint Matching** — Recalculates bone correspondence between the reference body and head skeletal meshes and may update bone transforms.
2. **LOD Cleanup** — inZOI uses LOD 0–4. MetaHuman assets ship with LOD 0–7, so extra LODs will be removed and the mesh will be reorganized to match the inZOI LOD range.
3. **Material Replacement** — Replaces all material slots with the inZOI in-game materials.

These operations write to skeletal mesh assets. Back up or verify version control state before continuing.

![Step 17](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_20.png)

---

**18. Proceed to ModKit Packaging**

Once the LOD 0–4 settings and material assignments are verified, proceed with the **ModKit packaging** process.

![Step 19 - Final](https://mod-docs.playinzoi.com/media/Modkit/Caz/FacialHair/FacialHair_21.png)
