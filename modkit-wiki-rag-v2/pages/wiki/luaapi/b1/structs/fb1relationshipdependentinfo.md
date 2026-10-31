---
document_id: "6ebaf4b026b6ab3e85d9a6a78e253c2b324bb9028f2114db22477961bba2d4dc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipdependentinfo"
title: "FB1RelationshipDependentInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:13+00:00"
content_sha256: "e0b7ff022c3d3fc21d3cf7d439a7984de90b864af8c0b8732110b50d1765e772"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipdependentinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines NPC response behavior for a specific range of relationship stat values. Includes response type probabilities, maximum response delay, and ignore probability.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`FromStatValue``number`Lower bound of the relationship stat range to which this configuration applies.`IgnoreProb``number`Probability (0–1) that the NPC ignores the message entirely instead of responding.`MaxResponseDelayMinutes``integer`Maximum number of in-game minutes the NPC may delay before responding.`ResponseTypeProbability`[`FB1ResponseTypeProbability`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsetypeprobability)Probabilities for each response type (positive/normal) within this relationship stat range.`ToStatValue``number`Upper bound of the relationship stat range to which this configuration applies. |
| --- |
| `FromStatValue``number`Lower bound of the relationship stat range to which this configuration applies.`IgnoreProb``number`Probability (0–1) that the NPC ignores the message entirely instead of responding.`MaxResponseDelayMinutes``integer`Maximum number of in-game minutes the NPC may delay before responding.`ResponseTypeProbability`[`FB1ResponseTypeProbability`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsetypeprobability)Probabilities for each response type (positive/normal) within this relationship stat range.`ToStatValue``number`Upper bound of the relationship stat range to which this configuration applies. |
| `IgnoreProb``number`Probability (0–1) that the NPC ignores the message entirely instead of responding.`MaxResponseDelayMinutes``integer`Maximum number of in-game minutes the NPC may delay before responding.`ResponseTypeProbability`[`FB1ResponseTypeProbability`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsetypeprobability)Probabilities for each response type (positive/normal) within this relationship stat range.`ToStatValue``number`Upper bound of the relationship stat range to which this configuration applies. |
| `MaxResponseDelayMinutes``integer`Maximum number of in-game minutes the NPC may delay before responding.`ResponseTypeProbability`[`FB1ResponseTypeProbability`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsetypeprobability)Probabilities for each response type (positive/normal) within this relationship stat range.`ToStatValue``number`Upper bound of the relationship stat range to which this configuration applies. |
| `ResponseTypeProbability`[`FB1ResponseTypeProbability`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1responsetypeprobability)Probabilities for each response type (positive/normal) within this relationship stat range.`ToStatValue``number`Upper bound of the relationship stat range to which this configuration applies. |
| `ToStatValue``number`Upper bound of the relationship stat range to which this configuration applies. |
