---
document_id: "5255bf6d5f59324dcf4402dc42a277e8bd63b1d2ab37fc41b4d5cd4df9b5d9a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipreward"
title: "FB1RelationshipReward"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:14+00:00"
content_sha256: "6931ea027db95f762038a28abcec21f5994e2de16354596dae7ae6b93afa60e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipreward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a relationship-based reward for an interaction. Applies a bonus based on the relationship stat level between specified targets.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`Bonus``integer`Bonus value applied when the relationship level is within the specified range.`LevelFrom``integer`Minimum relationship level at which this reward applies.`LevelTo``integer`Maximum relationship level at which this reward applies.`RelationshipStatId``string`ID of the relationship stat associated with this reward (references RelationshipStat.Id).`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object for the relationship reward (e.g., Self or another entity). |
| --- |
| `Bonus``integer`Bonus value applied when the relationship level is within the specified range.`LevelFrom``integer`Minimum relationship level at which this reward applies.`LevelTo``integer`Maximum relationship level at which this reward applies.`RelationshipStatId``string`ID of the relationship stat associated with this reward (references RelationshipStat.Id).`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object for the relationship reward (e.g., Self or another entity). |
| `LevelFrom``integer`Minimum relationship level at which this reward applies.`LevelTo``integer`Maximum relationship level at which this reward applies.`RelationshipStatId``string`ID of the relationship stat associated with this reward (references RelationshipStat.Id).`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object for the relationship reward (e.g., Self or another entity). |
| `LevelTo``integer`Maximum relationship level at which this reward applies.`RelationshipStatId``string`ID of the relationship stat associated with this reward (references RelationshipStat.Id).`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object for the relationship reward (e.g., Self or another entity). |
| `RelationshipStatId``string`ID of the relationship stat associated with this reward (references RelationshipStat.Id).`Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object for the relationship reward (e.g., Self or another entity). |
| `Target`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The target object for the relationship reward (e.g., Self or another entity). |
