---
document_id: "5ffeb7e379217c6c25faf5920e8af0cb3aea44393439de9df89380ca2a1a55cf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1voicetablerow"
title: "FB1VoiceTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:49+00:00"
content_sha256: "e0952c45908d749bdf18c111fc85d42b8122ae58026c67c3c815b58cbe49623d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1voicetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that defines a voice type: which gender automatic assignment keeps it within, and per-growth-step voice data(resource + pitch range). The row ID is the voice ID. GrowthStepInfos must contain exactly one entry for every growth step.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender this voice belongs to. Used ONLY to keep automatic assignment (random customization, default voice on gender change) within same-gender voices. The customization UI lists all voices regardless of gender, and a gender-mismatched voice is allowed when the user picks it directly.`GrowthStepInfos``FB1VoiceGrowthStepInfo[]`Per-growth-step voice data. Must cover every growth step.`PitchOffsetAdjustmentPerGrowthStep``number`Amount (in semitones) by which the pitch offset is adjusted per single growth-step change. |
| --- |
| `Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender this voice belongs to. Used ONLY to keep automatic assignment (random customization, default voice on gender change) within same-gender voices. The customization UI lists all voices regardless of gender, and a gender-mismatched voice is allowed when the user picks it directly.`GrowthStepInfos``FB1VoiceGrowthStepInfo[]`Per-growth-step voice data. Must cover every growth step.`PitchOffsetAdjustmentPerGrowthStep``number`Amount (in semitones) by which the pitch offset is adjusted per single growth-step change. |
| `GrowthStepInfos``FB1VoiceGrowthStepInfo[]`Per-growth-step voice data. Must cover every growth step.`PitchOffsetAdjustmentPerGrowthStep``number`Amount (in semitones) by which the pitch offset is adjusted per single growth-step change. |
| `PitchOffsetAdjustmentPerGrowthStep``number`Amount (in semitones) by which the pitch offset is adjusted per single growth-step change. |
