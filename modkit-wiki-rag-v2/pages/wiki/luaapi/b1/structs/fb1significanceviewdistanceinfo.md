---
document_id: "f2cf381fa84ba77ae4b77f4b63d96011c1ece63e696fc25b43480cdfcb944aba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1significanceviewdistanceinfo"
title: "FB1SignificanceViewDistanceInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:23+00:00"
content_sha256: "1af2b2b65467aa985deb17cbb81bf82d059fbb6e9e6266bcfed9ccd04324cf4f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1significanceviewdistanceinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Distance thresholds and slot limits that drive character significance (SLOD) level selection for one quality preset.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`HighDistance``number`Distance below which a character is rendered at High significance.`HysteresisBuffer``number`Extra distance buffer applied at level boundaries to prevent frequent significance switching.`LowDistance``number`Distance below which a character is rendered at Low significance.`MediumDistance``number`Distance below which a character is rendered at Medium significance.`SLOD0CharacterLimit``integer`Maximum number of characters allowed to be shown at SLOD0.`SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
| --- |
| `HighDistance``number`Distance below which a character is rendered at High significance.`HysteresisBuffer``number`Extra distance buffer applied at level boundaries to prevent frequent significance switching.`LowDistance``number`Distance below which a character is rendered at Low significance.`MediumDistance``number`Distance below which a character is rendered at Medium significance.`SLOD0CharacterLimit``integer`Maximum number of characters allowed to be shown at SLOD0.`SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
| `HysteresisBuffer``number`Extra distance buffer applied at level boundaries to prevent frequent significance switching.`LowDistance``number`Distance below which a character is rendered at Low significance.`MediumDistance``number`Distance below which a character is rendered at Medium significance.`SLOD0CharacterLimit``integer`Maximum number of characters allowed to be shown at SLOD0.`SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
| `LowDistance``number`Distance below which a character is rendered at Low significance.`MediumDistance``number`Distance below which a character is rendered at Medium significance.`SLOD0CharacterLimit``integer`Maximum number of characters allowed to be shown at SLOD0.`SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
| `MediumDistance``number`Distance below which a character is rendered at Medium significance.`SLOD0CharacterLimit``integer`Maximum number of characters allowed to be shown at SLOD0.`SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
| `SLOD0CharacterLimit``integer`Maximum number of characters allowed to be shown at SLOD0.`SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
| `SLOD0SlotAdvantageDistance``integer`Advantage distance (cm) granted to the current SLOD0 character during slot competition; higher values reduce churn. |
