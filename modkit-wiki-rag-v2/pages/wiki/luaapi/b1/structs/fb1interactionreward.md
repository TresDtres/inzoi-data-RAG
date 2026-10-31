---
document_id: "8b098f3612ac376b0e2553faba2ea32d9829a0a51e96328e0768dc8ef84699e5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1interactionreward"
title: "FB1InteractionReward"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:12+00:00"
content_sha256: "f723f0d59deeddb1a5debb687b1adb4ad9f6fa2c682061d009da3792f0de3bc9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1interactionreward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines rewards granted from an interaction. Includes stat rewards, value amounts, and associated service tiers.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`Reward``integer`The reward value applied to the specified stat.`StatId``string`ID of the stat affected by this reward (references Stat.Id).`Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier associated with this reward. |
| --- |
| `Reward``integer`The reward value applied to the specified stat.`StatId``string`ID of the stat affected by this reward (references Stat.Id).`Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier associated with this reward. |
| `StatId``string`ID of the stat affected by this reward (references Stat.Id).`Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier associated with this reward. |
| `Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier associated with this reward. |
