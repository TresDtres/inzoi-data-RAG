---
document_id: "21a28afa122a04fddc443791513d6940000ce9b7b95dd7f343c2cce6f303e4d8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skilltablerow"
title: "FB1SkillTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:30+00:00"
content_sha256: "ac4f5ba2142bfa8cfe9f3c3a3aa8c2b60f28078d342bd736364cb5a0b613e08f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skilltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a skill, including its display info, associated objects, and level progression.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The growth step category this skill belongs to.`PlumbobFxIdForSkillExpGain``string`The PlumbobFx table row ID used to display the plumbob effect when experience is gained in this skill.`SkillDisplayInfo`[`FB1SkillDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skilldisplayinfo)The display information for this skill, including name, description, and icon.`SkillLevelInfo``FB1SkillLevelInfo[]`The list of level info entries defining progression for this skill.`SkillObjectIds``string[]`The list of object IDs associated with this skill. |
| --- |
| `GrowthStep`[`EB1GrowthStep`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1growthstep)The growth step category this skill belongs to.`PlumbobFxIdForSkillExpGain``string`The PlumbobFx table row ID used to display the plumbob effect when experience is gained in this skill.`SkillDisplayInfo`[`FB1SkillDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skilldisplayinfo)The display information for this skill, including name, description, and icon.`SkillLevelInfo``FB1SkillLevelInfo[]`The list of level info entries defining progression for this skill.`SkillObjectIds``string[]`The list of object IDs associated with this skill. |
| `PlumbobFxIdForSkillExpGain``string`The PlumbobFx table row ID used to display the plumbob effect when experience is gained in this skill.`SkillDisplayInfo`[`FB1SkillDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skilldisplayinfo)The display information for this skill, including name, description, and icon.`SkillLevelInfo``FB1SkillLevelInfo[]`The list of level info entries defining progression for this skill.`SkillObjectIds``string[]`The list of object IDs associated with this skill. |
| `SkillDisplayInfo`[`FB1SkillDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skilldisplayinfo)The display information for this skill, including name, description, and icon.`SkillLevelInfo``FB1SkillLevelInfo[]`The list of level info entries defining progression for this skill.`SkillObjectIds``string[]`The list of object IDs associated with this skill. |
| `SkillLevelInfo``FB1SkillLevelInfo[]`The list of level info entries defining progression for this skill.`SkillObjectIds``string[]`The list of object IDs associated with this skill. |
| `SkillObjectIds``string[]`The list of object IDs associated with this skill. |
