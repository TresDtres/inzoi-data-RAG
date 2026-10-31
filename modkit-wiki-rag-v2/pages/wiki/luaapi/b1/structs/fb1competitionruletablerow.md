---
document_id: "e706771fcc68f87d2412cce3bcb8107abf5daca6cf2fe61e065ad5f7bf37faf5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1competitionruletablerow"
title: "FB1CompetitionRuleTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:32+00:00"
content_sha256: "01c72baa80ecabf86851ded051e96e41509be8d57820fe59ba5bdb5e8c7bb648"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1competitionruletablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a competition rule table row. Includes Competition Skill, PlayerNums, Reward Buff etc.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`CompetitionSkillId``string`The skill ID used for this competition`CompetitionType`[`EB1CompetitionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1competitiontype)The type of competition (Individual or Versus...)`PlayerNum``integer`The number of players participating in this competition`PlayerRoleIds``string[]`Player role id (skill check target) for coop`SkillCheckResultInfos``FB1SkillCheckResultInfo[]`Array of skill check result information defining sequences and buffs for each result type`bAvailableDraw``boolean`Whether a draw result is possible in this competition |
| --- |
| `CompetitionSkillId``string`The skill ID used for this competition`CompetitionType`[`EB1CompetitionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1competitiontype)The type of competition (Individual or Versus...)`PlayerNum``integer`The number of players participating in this competition`PlayerRoleIds``string[]`Player role id (skill check target) for coop`SkillCheckResultInfos``FB1SkillCheckResultInfo[]`Array of skill check result information defining sequences and buffs for each result type`bAvailableDraw``boolean`Whether a draw result is possible in this competition |
| `CompetitionType`[`EB1CompetitionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1competitiontype)The type of competition (Individual or Versus...)`PlayerNum``integer`The number of players participating in this competition`PlayerRoleIds``string[]`Player role id (skill check target) for coop`SkillCheckResultInfos``FB1SkillCheckResultInfo[]`Array of skill check result information defining sequences and buffs for each result type`bAvailableDraw``boolean`Whether a draw result is possible in this competition |
| `PlayerNum``integer`The number of players participating in this competition`PlayerRoleIds``string[]`Player role id (skill check target) for coop`SkillCheckResultInfos``FB1SkillCheckResultInfo[]`Array of skill check result information defining sequences and buffs for each result type`bAvailableDraw``boolean`Whether a draw result is possible in this competition |
| `PlayerRoleIds``string[]`Player role id (skill check target) for coop`SkillCheckResultInfos``FB1SkillCheckResultInfo[]`Array of skill check result information defining sequences and buffs for each result type`bAvailableDraw``boolean`Whether a draw result is possible in this competition |
| `SkillCheckResultInfos``FB1SkillCheckResultInfo[]`Array of skill check result information defining sequences and buffs for each result type`bAvailableDraw``boolean`Whether a draw result is possible in this competition |
| `bAvailableDraw``boolean`Whether a draw result is possible in this competition |
