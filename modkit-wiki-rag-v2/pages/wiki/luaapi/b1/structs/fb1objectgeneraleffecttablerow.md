---
document_id: "4a9d23fc49c9097e2ea4db2d5befbf33813b0c27888f67d6e380296ab1758429"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectgeneraleffecttablerow"
title: "FB1ObjectGeneralEffectTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:35+00:00"
content_sha256: "cdda774add2ca571ae94af290ced9de726fd9f2ed3f67668adae30d720a42d5d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectgeneraleffecttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining the general effect properties of a game object, including durability and performance quality. Controls object degradation sequences and quality tiers applied during gameplay.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`AffectedDurabilitySequences``string[]`Array of sequence IDs triggered when this object's durability decreases.`Durability`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the durability level of this object.`Efficiency`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the efficiency level of this object.`NeglectFireProbability``number`Probability that neglected cooking causes a fire. Valid range is [0.0, 1.0].`Performance`[`EB1ObjectPerformanceQuality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectperformancequality)Performance quality tier determining which performance-related behaviors apply to this object. |
| --- |
| `AffectedDurabilitySequences``string[]`Array of sequence IDs triggered when this object's durability decreases.`Durability`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the durability level of this object.`Efficiency`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the efficiency level of this object.`NeglectFireProbability``number`Probability that neglected cooking causes a fire. Valid range is [0.0, 1.0].`Performance`[`EB1ObjectPerformanceQuality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectperformancequality)Performance quality tier determining which performance-related behaviors apply to this object. |
| `Durability`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the durability level of this object.`Efficiency`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the efficiency level of this object.`NeglectFireProbability``number`Probability that neglected cooking causes a fire. Valid range is [0.0, 1.0].`Performance`[`EB1ObjectPerformanceQuality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectperformancequality)Performance quality tier determining which performance-related behaviors apply to this object. |
| `Efficiency`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality tier representing the efficiency level of this object.`NeglectFireProbability``number`Probability that neglected cooking causes a fire. Valid range is [0.0, 1.0].`Performance`[`EB1ObjectPerformanceQuality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectperformancequality)Performance quality tier determining which performance-related behaviors apply to this object. |
| `NeglectFireProbability``number`Probability that neglected cooking causes a fire. Valid range is [0.0, 1.0].`Performance`[`EB1ObjectPerformanceQuality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectperformancequality)Performance quality tier determining which performance-related behaviors apply to this object. |
| `Performance`[`EB1ObjectPerformanceQuality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectperformancequality)Performance quality tier determining which performance-related behaviors apply to this object. |
