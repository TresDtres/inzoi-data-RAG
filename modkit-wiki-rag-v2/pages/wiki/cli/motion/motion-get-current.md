---
document_id: "475935f2dae7eadd9ab209b7fbb309a4121a6f906174aa8e4bb59f49e39224cc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-current"
title: "motion.get_current"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:09+00:00"
content_sha256: "9dcd5d78eaceedbe213d350b2fcde87dfcd5510b95f79c86e2c0d36b2d46fbea"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/motion/motion-get-current"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get the motion(s) currently playing on the target Zoi. Returns playing=false if idle, otherwise an array of active montage instances with anim_id, position (seconds), total_length, rate_scale, and group. Only Root component motions are reported (full-body).

# Metadata

| FieldValueDisplayGet Current MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetCurrent` |
| --- |
| DisplayGet Current MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetCurrent` |
| Category`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetCurrent` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionGetCurrent` |
| Scope`B2Authority`Tags—Aliases`MotionGetCurrent` |
| Tags—Aliases`MotionGetCurrent` |
| Aliases`MotionGetCurrent` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('motion.get_current', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomotion[motion.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-info)[motion.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-list)[motion.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play)[motion.play_random](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play-random)[motion.stop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-stop)
