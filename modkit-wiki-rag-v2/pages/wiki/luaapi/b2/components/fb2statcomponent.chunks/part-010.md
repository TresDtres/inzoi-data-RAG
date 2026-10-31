---
document_id: "41a15a0b11627914af0ffc9050a091c7b09bcd431273ab16819949b0bae7253c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2statcomponent"
title: "FB2StatComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:15+00:00"
content_sha256: "24790b656d72c326de19122e137062cdc85eab28adb6d432680bceee5c980205"
chunk: 10
chunk_count: 12
page_type: "article"
route: "wiki/luaapi/b2/components/fb2statcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)`-`Sets Stat.`SetStatEx`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)`-`Optimization-related: separates the script-call part when a stat changes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TryPickUrgentStat`InCooldownStats: `string[]`, OutStatId: `string``boolean``TryPickUrgentStatFromCandidates`InCandidateStats: `string[]`, InCooldownStats: `string[]`, OutStatId: `string``boolean``UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |
| `SetStat`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)`-`Sets Stat.`SetStatEx`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)`-`Optimization-related: separates the script-call part when a stat changes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TryPickUrgentStat`InCooldownStats: `string[]`, OutStatId: `string``boolean``TryPickUrgentStatFromCandidates`InCandidateStats: `string[]`, InCooldownStats: `string[]`, OutStatId: `string``boolean``UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |
| `SetStatEx`StatId: `string`, Value: `number`, InReason: [`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)`-`Optimization-related: separates the script-call part when a stat changes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TryPickUrgentStat`InCooldownStats: `string[]`, OutStatId: `string``boolean``TryPickUrgentStatFromCandidates`InCandidateStats: `string[]`, InCooldownStats: `string[]`, OutStatId: `string``boolean``UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |
| `ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TryPickUrgentStat`InCooldownStats: `string[]`, OutStatId: `string``boolean``TryPickUrgentStatFromCandidates`InCandidateStats: `string[]`, InCooldownStats: `string[]`, OutStatId: `string``boolean``UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |
| `TryPickUrgentStat`InCooldownStats: `string[]`, OutStatId: `string``boolean``TryPickUrgentStatFromCandidates`InCandidateStats: `string[]`, InCooldownStats: `string[]`, OutStatId: `string``boolean``UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |
| `TryPickUrgentStatFromCandidates`InCandidateStats: `string[]`, InCooldownStats: `string[]`, OutStatId: `string``boolean``UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |
| `UpdateRoutineStat`InTime: `FDateTime``-`Updates Routine Stat. |

# Override points (14)

Implement these in Lua as `FB2StatComponent.Override_Name = function(...) end`.
