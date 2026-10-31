---
document_id: "58d932f0914a550eba78be7469ac1e4b0a098370acc650d2f3cece231a719273"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play-random"
title: "motion.play_random"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "d8e1ad16d3eb72920dd8a29b55e8d7cfc6125a378af00e2fce0f77b5be3b012d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/motion/motion-play-random"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Pick a random motion matching the filter and play it on the target Zoi. Only motions playable by the character (gender/age/posture compatible) are considered. filter is required to constrain the candidate set (e.g. filter=dance).

# Metadata

| FieldValueDisplayPlay Random MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlayRandom` |
| --- |
| DisplayPlay Random MotionCategory`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlayRandom` |
| Category`motion`Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlayRandom` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`MotionPlayRandom` |
| Scope`B2Authority`Tags—Aliases`MotionPlayRandom` |
| Tags—Aliases`MotionPlayRandom` |
| Aliases`MotionPlayRandom` |

# Parameters

| NameTypeRequiredDefaultDescriptionfilterstringyes—Keyword filter for candidate selection (required, e.g. dance)entity_identityIdno—Target entity ID (default: possessed)sectionnameno—Start section (default: Default)positionfloatno—Start position in seconds (default: 0.0) |
| --- |
| filterstringyes—Keyword filter for candidate selection (required, e.g. dance)entity_identityIdno—Target entity ID (default: possessed)sectionnameno—Start section (default: Default)positionfloatno—Start position in seconds (default: 0.0) |
| entity_identityIdno—Target entity ID (default: possessed)sectionnameno—Start section (default: Default)positionfloatno—Start position in seconds (default: 0.0) |
| sectionnameno—Start section (default: Default)positionfloatno—Start position in seconds (default: 0.0) |
| positionfloatno—Start position in seconds (default: 0.0) |

# Usage

```
await inzoi.cli.execute('motion.play_random', {  filter: '',  entity_id: 0, // optional  section: '', // optional  position: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomotion[motion.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-current)[motion.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-get-info)[motion.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-list)[motion.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play)[motion.stop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-stop)
