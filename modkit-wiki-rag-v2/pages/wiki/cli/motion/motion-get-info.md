---
document_id: "d812779d272169b1f59c7b9f67433b8c3d5a7e2d9a845b31fd33814f281b39f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-info"
title: "motion.get_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:09+00:00"
content_sha256: "d90956f213b70bf753569a3e8ff30f8e8566e4ebb82f1c87ec8356fd79ead39b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/motion/motion-get-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get metadata for a motion: total_length, loop_length, rate_scale, blend_out_time, sections (with names, start times, loop flags, next-section transitions), and the playing component (Root/Head/Hair). The character context (entity_id) determines which montage row is matched based on gender/age/posture.

# Metadata

| FieldValueDisplayGet Motion InfoCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetInfo` |
| --- |
| DisplayGet Motion InfoCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetInfo` |
| Category`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetInfo` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetInfo` |
| Scope`B2Authority`Tags—Aliases`MotionGetInfo` |
| Tags—Aliases`MotionGetInfo` |
| Aliases`MotionGetInfo` |

# Parameters

| NameTypeRequiredDefaultDescriptionanim_idnameyes—Animation ID (from motion.list)entity_identityIdno—Target entity ID (default: possessed) |
| --- |
| anim_idnameyes—Animation ID (from motion.list)entity_identityIdno—Target entity ID (default: possessed) |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('motion.get_info', {  anim_id: '',  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomotion[motion.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-current)[motion.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-list)[motion.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play)[motion.play_random](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play-random)[motion.stop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-stop)
