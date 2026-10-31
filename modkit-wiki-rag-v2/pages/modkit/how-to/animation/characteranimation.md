---
document_id: "5768049a7ffd27288f9ee9bb3ef4ac44a9749294fad8be4c55467e78865a8125"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/characteranimation"
title: "Character Animation"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "CharacterAnimation"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:29+00:00"
content_sha256: "89f7ba294cc369d02317ef5320cd41d9c7017593a6f550c18c6195dace9c7026"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/characteranimation"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

This category is used to select the type of animation used in Animation Modding.

![Character Animation](https://mod-docs.playinzoi.com/media/Modkit/Animation/Animation_01.jpg)

---

**Interaction**

Defines **interaction-based animations** between characters or with objects.

- Primarily used for event-driven actions
- Examples:
    - Dialogue
    - Gestures
    - Specific action triggers
- Built using **Animation Montages**

---

**Locomotion**

Defines animations related to the character’s basic movement.

- Always used in the default state
- Examples:
    - Idle
    - Walk
    - Run
- Based on **Animation Sequences**

---

**Stat Locomotion**

Defines movement animations that change based on the character’s state (needs, condition, etc.).

- State-driven animations integrated with inZOI systems
- Examples:
    - Tired → Slower movement
    - Drunk → Unsteady movement
    - Specific emotional state → Special idle
- Based on **Animation Sequences**
- Automatically applied depending on stat values

---

tip

The Animation Category defines the **purpose of an animation**. Even the same animation can behave differently depending on which category it is assigned to.
