---
document_id: "0b610698fdbaf32956c52be817bd6e748e11c97753f835c2518b4ffb83e81613"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1statlocomotionaniminfo"
title: "FB1StatLocomotionAnimInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:35+00:00"
content_sha256: "f7a26f8a78f763b07b90efdb20feb61c7f766c73ffa030ca8f4dba6ee51c6f66"
chunk: 4
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1statlocomotionaniminfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

isabled when the stat threshold is met.`bOverrideBaseLocomotion``boolean`If true, the base idle/walk/jog locomotion poses are overridden directly with the stat anims (Idle = first IdleRandomAnims, Walk = StatWalkAnim, Jog = StatJogAnim). This makes the locomotion state machine blend straight to the stat pose with no transient base-pose pop, instead of relying on the random-montage overlay which kicks in one loop later. Used for states like low HP that must show the injured pose immediately and constantly. |
| `bOverrideBaseLocomotion``boolean`If true, the base idle/walk/jog locomotion poses are overridden directly with the stat anims (Idle = first IdleRandomAnims, Walk = StatWalkAnim, Jog = StatJogAnim). This makes the locomotion state machine blend straight to the stat pose with no transient base-pose pop, instead of relying on the random-montage overlay which kicks in one loop later. Used for states like low HP that must show the injured pose immediately and constantly. |
