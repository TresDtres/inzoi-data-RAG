---
document_id: "5d9697142f183c08daab3930fb3be7c0c2ec765c5ce4d69b74b900d0365c3371"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/characteranimation/statlocomotion"
title: "Stat Locomotion"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "CharacterAnimation"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:30+00:00"
content_sha256: "913f124529fdd88bd6c069a57126661d9a6d489da4a2738ac407ad7c91a963bd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/characteranimation/statlocomotion"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

This system applies different movement animations based on the character’s **state (needs, condition, etc.)**, using **Animation Sequences**.

![Stat Locomotion](https://mod-docs.playinzoi.com/media/Modkit/Animation/Animation_04.jpg)

---

**Character StatLocomotion**

- **Gender**
    - Sets the character’s gender
    - Example: `Female`, `Male`
- **Anim Growth Step**
    - Defines the character’s growth stage
    - Example: `Adult`, `Child`

---

**Stat Locomotions**

A list of movement configurations for each state.

- Multiple states can be added to create diverse behavior patterns

---

**Index (State Setup)**

Each Index represents a single state configuration.

---

**Basic Properties**

- **Stat Id**
    - Name of the state
    - Example: `Sleepwalking`
- **Stat Value**
    - Threshold value for the state
    - Determines when the state becomes active

---

**Movement Animations**

- **Stat Walk Anim**
    - Walking animation used in this state
- **Min Normal Walk Time / Max Normal Walk Time**
    - Duration range for normal walking animations

---

**Idle / Random Animations**

- **Idle Random Anims**
    - Idle animations played randomly in this state

---

**Swimming Animations**

- **Swim Idle Random Anims**
- **Swim Walk Anim**

→ Defines animations used during swimming

---

**Facial Animations (Face Anim)**

- **Idle Face Anim**
- **Walk Face Anim**
- **Swim Idle Face Anim**
- **Swim Walk Face Anim**

→ Defines facial expressions based on the current state

---

**Additional Options**

- **Disable Jog**
    - Disables jogging when enabled

---

**Multiple State Setup**

- Multiple Index entries can be added to define different states
- Each state can have unique movement, facial expressions, and random animations

---

tip

Stat Locomotion allows you to create completely different movement behaviors based on character states. (e.g., slow movement when tired, staggering when drunk, etc.)
