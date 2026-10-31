---
document_id: "47b6651dbee522666f4e41006baa154e1aff9f76e95b9194cbf095dc3b574fc2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play"
title: "motion.play"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "76c6904ca5f04e4c78ae379bf02ed2e755ee49a8f4c0aed969de708fc5848ec4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/motion/motion-play"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Play a character animation on the target Zoi. anim_id: CharacterAnim row name (use motion.list to find). section: start section name (Default/Loop/End or motion-specific; default: Default). Use motion.get_info to see valid sections for a motion. position: start position in seconds within the section (default: 0.0). The animation interrupts the current motion. Use motion.stop to stop.

# Metadata

| FieldValueDisplayPlay MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlay` |
| --- |
| DisplayPlay MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlay` |
| Category`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlay` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlay` |
| Scope`B2Authority`Tags—Aliases`MotionPlay` |
| Tags—Aliases`MotionPlay` |
| Aliases`MotionPlay` |

# Parameters

| NameTypeRequiredDefaultDescriptionanim_idnameyes—Animation ID to play (from motion.list)entity_identityIdno—Target entity ID (default: possessed)sectionnameno—Start section (Default/Loop/End, default: Default)positionfloatno—Start position within section in seconds (default: 0.0) |
| --- |
| anim_idnameyes—Animation ID to play (from motion.list)entity_identityIdno—Target entity ID (default: possessed)sectionnameno—Start section (Default/Loop/End, default: Default)positionfloatno—Start position within section in seconds (default: 0.0) |
| entity_identityIdno—Target entity ID (default: possessed)sectionnameno—Start section (Default/Loop/End, default: Default)positionfloatno—Start position within section in seconds (default: 0.0) |
| sectionnameno—Start section (Default/Loop/End, default: Default)positionfloatno—Start position within section in seconds (default: 0.0) |
| positionfloatno—Start position within section in seconds (default: 0.0) |

# Usage

```
await inzoi.cli.execute('motion.play', {  anim_id: '',  entity_id: 0, // optional  section: '', // optional  position: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomotion[motion.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-current)[motion.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-info)[motion.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-list)[motion.play_random](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play-random)[motion.stop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-stop)
