---
document_id: "ca6213251d0b475d0d300841f009ef2477ba29b468fe60a75ca33b76015cf3de"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1publishingjackpottablerow"
title: "FB1PublishingJackpotTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:08+00:00"
content_sha256: "1c477a6a6b8151061e338cb7076aa71009d98d1a9f90e2bfbca2e58ec44f106e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1publishingjackpottablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PublishingJackpot.json — Jackpot settings per quality x tier (15 rows).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`JackpotBonusMultiplier``number`Bonus multiplier (baseAmount x JackpotBonusMultiplier).`JackpotProb``number`Jackpot trigger probability (same per Quality, 0.0~1.0).`JackpotRepeat``integer`Jackpot evaluation repeat.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality grade.`Weight``integer`Tier selection weight (sum within same Quality = 100). |
| --- |
| `JackpotBonusMultiplier``number`Bonus multiplier (baseAmount x JackpotBonusMultiplier).`JackpotProb``number`Jackpot trigger probability (same per Quality, 0.0~1.0).`JackpotRepeat``integer`Jackpot evaluation repeat.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality grade.`Weight``integer`Tier selection weight (sum within same Quality = 100). |
| `JackpotProb``number`Jackpot trigger probability (same per Quality, 0.0~1.0).`JackpotRepeat``integer`Jackpot evaluation repeat.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality grade.`Weight``integer`Tier selection weight (sum within same Quality = 100). |
| `JackpotRepeat``integer`Jackpot evaluation repeat.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality grade.`Weight``integer`Tier selection weight (sum within same Quality = 100). |
| `JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier.`Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality grade.`Weight``integer`Tier selection weight (sum within same Quality = 100). |
| `Quality`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Quality grade.`Weight``integer`Tier selection weight (sum within same Quality = 100). |
| `Weight``integer`Tier selection weight (sum within same Quality = 100). |
