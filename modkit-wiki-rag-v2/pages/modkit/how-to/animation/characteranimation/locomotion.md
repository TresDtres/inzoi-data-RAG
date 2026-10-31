---
document_id: "516a6f7758c79d34e6f9f106ad84ccf97b8a07f2a30296d0f3158e32d5b1102d"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/characteranimation/locomotion"
title: "Locomotion"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "CharacterAnimation"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:29+00:00"
content_sha256: "e729a51322d1209cf0104f69bd3acd41e0aa4a32fb7f11e59409b206d95730f8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/characteranimation/locomotion"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

This section defines the character’s **basic movement and idle animations**, using **Animation Sequences**.

![Locomotion](https://mod-docs.playinzoi.com/media/Modkit/Animation/Animation_03.jpg)

---

**Character Locomotion**

- **Gender**
    - Sets the character’s gender
    - Example: `Female`, `Male`
- **Anim Growth Step**
    - Defines the character’s growth stage
    - Example: `Adult`, `Child`
- **Idle Anim**
    - Assigns the default idle animation
    - Played when the character is not performing any action

---

**Idle Random Anims**

A list of animations that will play randomly during the idle state.

- Multiple animations can be registered
- Played randomly based on defined probabilities

---

**Index Parameters**

Each Index represents a single random animation setup:

- **Animation**
    - Specifies the animation asset to play
- **Emotion Id**
    - Optional emotional state
    - Used to match animations with specific emotions
- **Emotion Level**
    - Defines the intensity of the emotion
    - Default: `0`
- **Chance to Play**
    - Determines how often the animation is played
    - Higher values increase the probability

---

**Multiple Animation Setup**

- You can add multiple Index entries to create a variety of idle animations
- Helps achieve more natural character behavior

---

tip

Using multiple Idle Random Anims makes character behavior more natural. Make sure to balance the **Chance to Play** values for proper distribution.
