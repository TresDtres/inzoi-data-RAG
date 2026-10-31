---
document_id: "d67aa422afdb273a27865da2d145dde40d805260c1559aaef74651f6aa0e0064"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2characterstatcomponent"
title: "FB2CharacterStatComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:11+00:00"
content_sha256: "6202748a7e5a92f4a022750aa50b9bca9e1da5bf53d736785dc7553acb21dcd9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2characterstatcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages character stats.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent) |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent) |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent) |
| Category`components`Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent) |
| Extends[`FB2StatComponent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent) |

# Properties (3)

| NameTypeDescription`LastProcessedRabbitHoleEndedTicks``integer`Last processed rabbit-hole end tick. Compared with the global LastRabbitHoleEndedTicks to decide the first-decay guard.`SLODNeedDecayMultiplier``number`SLOD-based need-decay multiplier (SLOD0: 1.0, otherwise: 0.25).`bIsHoldingBaby``boolean` |
| --- |
| `LastProcessedRabbitHoleEndedTicks``integer`Last processed rabbit-hole end tick. Compared with the global LastRabbitHoleEndedTicks to decide the first-decay guard.`SLODNeedDecayMultiplier``number`SLOD-based need-decay multiplier (SLOD0: 1.0, otherwise: 0.25).`bIsHoldingBaby``boolean` |
| `SLODNeedDecayMultiplier``number`SLOD-based need-decay multiplier (SLOD0: 1.0, otherwise: 0.25).`bIsHoldingBaby``boolean` |
| `bIsHoldingBaby``boolean` |

# Functions (5)

| FunctionParametersReturnsDescription`CatchUpStat``-``-``InitStats``-``-`Initializes Stats.`OnBecameGhost``-``-`Callback invoked on Became Ghost.`SetDefaultStatsToMax``-``-`Sets Default Stats To Max.`UpdateIsHoldingBaby``-``-`Updates Is Holding Baby. |
| --- |
| `CatchUpStat``-``-``InitStats``-``-`Initializes Stats.`OnBecameGhost``-``-`Callback invoked on Became Ghost.`SetDefaultStatsToMax``-``-`Sets Default Stats To Max.`UpdateIsHoldingBaby``-``-`Updates Is Holding Baby. |
| `InitStats``-``-`Initializes Stats.`OnBecameGhost``-``-`Callback invoked on Became Ghost.`SetDefaultStatsToMax``-``-`Sets Default Stats To Max.`UpdateIsHoldingBaby``-``-`Updates Is Holding Baby. |
| `OnBecameGhost``-``-`Callback invoked on Became Ghost.`SetDefaultStatsToMax``-``-`Sets Default Stats To Max.`UpdateIsHoldingBaby``-``-`Updates Is Holding Baby. |
| `SetDefaultStatsToMax``-``-`Sets Default Stats To Max.`UpdateIsHoldingBaby``-``-`Updates Is Holding Baby. |
| `UpdateIsHoldingBaby``-``-`Updates Is Holding Baby. |
