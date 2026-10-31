---
document_id: "39fd37baf8ccf70f33b464015b501691c744103b2a66efb4189e40e2bd34ce05"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-stop"
title: "motion.stop"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "0301355507c1281149b2380de3318b56ce3be5f6f108444b05f30472f46d2b2b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/motion/motion-stop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stop a playing animation on the target Zoi. Omit anim_id to stop all currently playing motions.

# Metadata

| FieldValueDisplayStop MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionStop` |
| --- |
| DisplayStop MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionStop` |
| Category`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionStop` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionStop` |
| Scope`B2Authority`Tags—Aliases`MotionStop` |
| Tags—Aliases`MotionStop` |
| Aliases`MotionStop` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)anim_idnameno—Animation ID to stop (omit to stop all) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)anim_idnameno—Animation ID to stop (omit to stop all) |
| anim_idnameno—Animation ID to stop (omit to stop all) |

# Usage

```
await inzoi.cli.execute('motion.stop', {  entity_id: 0, // optional  anim_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomotion[motion.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-current)[motion.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-info)[motion.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-list)[motion.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play)[motion.play_random](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play-random)
