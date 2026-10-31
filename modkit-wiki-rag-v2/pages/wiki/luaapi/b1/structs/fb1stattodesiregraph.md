---
document_id: "0445709082cfa41cbd9053bedad91307383d6b55df01c93fd0e96db8e59d5990"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stattodesiregraph"
title: "FB1StatToDesireGraph"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:36+00:00"
content_sha256: "ea0d34ae22d278d70f5be616b6906fc640a95c2783c7c43b9568ca38fcfeb646"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1stattodesiregraph"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a mapping from a stat value to a desire score, including service tier and aging variation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`AgingVariation`[`FB1StatDesireAgingVariationInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1statdesireagingvariationinfo)The aging variation modifiers applied to the desire value per growth stage.`DesireValue``number`The desire score produced when this graph entry applies.`Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier this graph entry applies to. |
| --- |
| `AgingVariation`[`FB1StatDesireAgingVariationInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1statdesireagingvariationinfo)The aging variation modifiers applied to the desire value per growth stage.`DesireValue``number`The desire score produced when this graph entry applies.`Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier this graph entry applies to. |
| `DesireValue``number`The desire score produced when this graph entry applies.`Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier this graph entry applies to. |
| `Tier`[`EB1StatServiceTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1statservicetier)The service tier this graph entry applies to. |
