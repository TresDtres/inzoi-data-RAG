---
document_id: "1fa0537be3eea94de28766f1145c55333301328f8cd403f3b8d633dc5a719a23"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/build/01-build"
title: "Guide"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Build"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:35+00:00"
content_sha256: "eb7f3765e492d3fe4cc10ff034b6f503535d86ce63d7ce303d236b8bd6d213a0"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/build/01-build"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/eKVeRV9Zupg/maxresdefault.jpg)# 04Build Object Modding](https://inzoi.me/ModTutorial04)[![](https://i.ytimg.com/vi/WAuQlf4CCH4/maxresdefault.jpg)# 18Material Mod Tutorial](https://www.youtube.com/watch?v=WAuQlf4CCH4&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/Ll-38__KyZg/maxresdefault.jpg)# 22High Heels Mod Tutorial](https://www.youtube.com/watch?v=Ll-38__KyZg&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)[![](https://i.ytimg.com/vi/W07ev3G8vwM/maxresdefault.jpg)# 23Hair Simulation Tutorial](https://www.youtube.com/watch?v=W07ev3G8vwM&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

### 01. Mesh

**Purpose**

- Model a background or interactive object, export it as FBX, and import the mesh into Modkit to place and utilize it in-game.

**Required Files**

- Completed FBX file (Skeletal or Static Mesh)
- Textures such as base color, combined maps, and normal maps

---

**FBX Export Settings Guide**

| ItemSetting / DescriptionScale1 unit = 1 cmNaniteEnabled |
| --- |
| Scale1 unit = 1 cmNaniteEnabled |
| NaniteEnabled |

> ⚠️ When exporting from Blender/Maya/3ds Max, even if UV2 is created, it may be omitted unless explicitly included.

---

**How to Import in Modkit**

1. Launch Modkit
2. Import Mesh (choose based on situation) a. Click `Import Static Mesh` b. Click `Import Skeletal Mesh`
3. Select the prepared FBX file
4. Check Import Settings
    1. `Import Static Mesh`
          1. Enable Nanite (recommended for optimization)
          2. Material: Can be auto-generated, but manual reassignment is recommended
    2. `Import Skeletal Mesh`
          1. Material Curve Suffixes
          2. Index[0]
                  - `.mat` (used to map animation curve values to material parameters)
5. Click `Import` → Mesh is loaded

---

**Post-Import Checklist**

| TypeImageWhat to CheckSkeletal Mesh![](https://mod-docs.playinzoi.com/media/Modkit/Build_01.jpg)Check Asset User Data → Index[0] → Anim Curve Meta DataStatic Mesh![](https://mod-docs.playinzoi.com/media/Modkit/Build_02.jpg)- Collision 1. Use Simple Collision As Complex (recommended) 2. Use Complex Collision As Simple 3. Manually create UCX |
| --- |
| Skeletal Mesh![](https://mod-docs.playinzoi.com/media/Modkit/Build_01.jpg)Check Asset User Data → Index[0] → Anim Curve Meta DataStatic Mesh![](https://mod-docs.playinzoi.com/media/Modkit/Build_02.jpg)- Collision 1. Use Simple Collision As Complex (recommended) 2. Use Complex Collision As Simple 3. Manually create UCX |
| Static Mesh![](https://mod-docs.playinzoi.com/media/Modkit/Build_02.jpg)- Collision 1. Use Simple Collision As Complex (recommended) 2. Use Complex Collision As Simple 3. Manually create UCX |

---

**Common Issues & Fixes**

| IssueCauseSolutionAnimation not compatibleMissing Material Curve SuffixesEnter `.mat` in `index[0]`Import errorMissing collisionCreate manually or use Simple Collision As Complex |
| --- |
| Animation not compatibleMissing Material Curve SuffixesEnter `.mat` in `index[0]`Import errorMissing collisionCreate manually or use Simple Collision As Complex |
| Import errorMissing collisionCreate manually or use Simple Collision As Complex |

---

**Chapter Summary**

| ChecklistDoneIs scale set to 1cm?✅Is collision set properly?✅Is Material Curve Suffix applied?✅Is Nanite enabled?✅ |
| --- |
| Is scale set to 1cm?✅Is collision set properly?✅Is Material Curve Suffix applied?✅Is Nanite enabled?✅ |
| Is collision set properly?✅Is Material Curve Suffix applied?✅Is Nanite enabled?✅ |
| Is Material Curve Suffix applied?✅Is Nanite enabled?✅ |
| Is Nanite enabled?✅ |

---

### 02. Material
