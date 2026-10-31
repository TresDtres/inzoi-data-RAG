---
document_id: "2519eebdaf2f367b3a3801d3a96f779c3617e3e842f41f52ee1bd4e81eee1b5f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skill"
title: "FB1Skill"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:29+00:00"
content_sha256: "04fee48a20d864092a63a426f7c07c6128d8c05af9ec4389cb4527739f28a1d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skill"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents the runtime state of a skill for a character, including level, experience, and growth step.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`Experience``number`The accumulated experience points for this skill.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The current growth step associated with this skill.`Id``string`The unique identifier of this skill.`Level``integer`The current level of this skill.`UpdateExpTime``FDateTime`The timestamp of the last experience update.`bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
| --- |
| `Experience``number`The accumulated experience points for this skill.`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The current growth step associated with this skill.`Id``string`The unique identifier of this skill.`Level``integer`The current level of this skill.`UpdateExpTime``FDateTime`The timestamp of the last experience update.`bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
| `GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The current growth step associated with this skill.`Id``string`The unique identifier of this skill.`Level``integer`The current level of this skill.`UpdateExpTime``FDateTime`The timestamp of the last experience update.`bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
| `Id``string`The unique identifier of this skill.`Level``integer`The current level of this skill.`UpdateExpTime``FDateTime`The timestamp of the last experience update.`bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
| `Level``integer`The current level of this skill.`UpdateExpTime``FDateTime`The timestamp of the last experience update.`bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
| `UpdateExpTime``FDateTime`The timestamp of the last experience update.`bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
| `bIsLevelUpAtCurrentFrame``boolean`Whether this skill leveled up during the current frame. |
