---
document_id: "b8691795f27fa8bfe8d8c231cfdab0948c66a9839505530d396f8174d53ccb67"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/characteranimation/interaction"
title: "Interaction"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "CharacterAnimation"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:29+00:00"
content_sha256: "5acd6e93817f4030f542fcf7cc99d132d24dace725d7423e94ab67ca6bbd8ac5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/characteranimation/interaction"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

This section defines how **character interaction animations (Animation Montages)** are configured and executed in-game.

![Interaction Animation](https://mod-docs.playinzoi.com/media/Modkit/Animation/Animation_02.jpg)

---

**Character Animation**

- **Playing Component Name**
    - Specifies the component that will play the animation
    - Default: `Root`
- **Start Anim Section**
    - Defines the starting section of the animation
    - Default: `Default`
- **Stop Other Component on Finish**
    - Stops other animation components when this animation finishes

---

**Character Anim Config List**

This is the core configuration area that defines animation behavior.

Each element represents an animation setup based on specific conditions (e.g., posture, character state).

---

**Anim Posture Type**

- Defines the posture in which the animation will be executed
- Example:
    - `Stand`
- **Anim Body Parts / Grab Parts / Slot Direction**
    - Optional interaction condition settings
    - Set to `None` if not used

---

**Anim Info List**

Defines which animations to use based on character conditions such as gender and age.

---

**Parameter Description**

Each element includes the following settings:

- **Gender**
    - `Male` / `Female`
- **Anim Growth Step**
    - Growth stage such as `Adult`, `Child`
- **Animation**
    - The actual animation asset to be played
- **Total Play Length**
    - Total duration of the animation
- **Loop Play Length**
    - Loop duration (used for looping animations)
- **Rate Scale**
    - Playback speed multiplier
    - Default: `1.0`
- **Random Loop Anims**
    - Optional random animation variations

---

**Multiple Configurations**

- Multiple conditions (e.g., Male / Female) can be configured simultaneously
- The appropriate animation is automatically selected based on character conditions

---

**Tools**

- **Open Data Editor**
    - Opens the data editor for advanced configuration

---

tip

Make sure to configure all required conditions (e.g., Male / Female). Missing settings may cause the animation to not play in-game.
