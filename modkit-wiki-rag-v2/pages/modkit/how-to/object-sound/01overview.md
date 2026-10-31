---
document_id: "c410f9cedc4b7165f258d8be52a37f7f1d4de6b46be1cdcdcb431b33cde67e3a"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/object-sound/01overview"
title: "Overview"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Object Sound"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:32+00:00"
content_sha256: "b51d1b65442fbee6a69497b213bcfbb1642a46401c3c13e3ddd94a0679ebc5fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/object-sound/01overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Related tutorial videos[![](https://i.ytimg.com/vi/fiEacXZQn88/maxresdefault.jpg)# 27Texture Basics](https://www.youtube.com/watch?v=fiEacXZQn88&list=PLQnomZjb2kX036iW-S0OtHfKvywQGdJ5K)

This panel is an **interface for Object Sound modding**. Users can **assign sounds for different interaction states** of a specific object (e.g., a piano).

This screen is designed to allow users to **step-by-step configure how sound resources are linked to object behaviors**.

![Object Sound Modding](https://mod-docs.playinzoi.com/media/Modkit/Sounds/Sound_01.jpg)

---

**OBJECT SOUND**

- A **sound modding category defined per object**.
- Allows configuration of sounds for **interactive objects** such as furniture, instruments, and daily-life objects.

**Search**

- Quickly find a specific sound modding target (e.g., `Piano01`) by entering the object name.

---

**Piano (e.g., Piano01)**

For the selected object, you can configure a **Sound Notify Map**. Each entry represents a **sound slot mapped to a specific interaction or state**.

![Piano Sound Map](https://mod-docs.playinzoi.com/media/Modkit/Sounds/Sound_02.jpg)

---

**Sound Asset Assignment**

By clicking each sound slot, you can select a **MetaSound Source asset** to be used.

[MetaSounds Documentation (Unreal Engine 5.4)](https://dev.epicgames.com/documentation/en-us/unreal-engine/metasounds-the-next-generation-sound-sources-in-unreal-engine?application_version=5.4)

![MetaSound Selection](https://mod-docs.playinzoi.com/media/Modkit/Sounds/Sound_03.jpg)

**Sound Notify Map**

- A list of **sound events defined per object action**.
- Examples include:
    - `Play`
    - `Play_Curious`
    - `Play_Freedom`
    - `Play_Traditional`
    - `Play_Child`
    - Practice stages (`Practice Lv1–3`)
    - Performance stages (`Play Lv1–3`), etc.

Each slot can be assigned a **MetaSound Source**.

---

Note

Object sound modding is **closely integrated with animations, interaction states, and progression levels**. By assigning appropriate MetaSound Sources to each sound slot, you can achieve **natural, progressive, and context-aware sound playback** in-game based on the object’s behavior.
