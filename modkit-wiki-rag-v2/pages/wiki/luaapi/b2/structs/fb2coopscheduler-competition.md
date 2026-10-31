---
document_id: "5217614ebceefd336ecbf8de0784dc266b7ef9a03a9a3f2599533ff1aaef8f5d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-competition"
title: "FB2CoopScheduler_Competition"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:34+00:00"
content_sha256: "e7905f0f8cf5cc5b6ac8dc0a57e89d051ef23c1200409ec224f9448bca1e0b4e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2coopscheduler-competition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CoopScheduler_Coop`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-coop)Require`require('Objects.B2CoopScheduler_Competition')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CoopScheduler_Coop`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-coop)Require`require('Objects.B2CoopScheduler_Competition')` |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CoopScheduler_Coop`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-coop)Require`require('Objects.B2CoopScheduler_Competition')` |
| Category`structs`Extends[`FB2CoopScheduler_Coop`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-coop)Require`require('Objects.B2CoopScheduler_Competition')` |
| Extends[`FB2CoopScheduler_Coop`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-coop)Require`require('Objects.B2CoopScheduler_Competition')` |
| Require`require('Objects.B2CoopScheduler_Competition')` |

# Properties (2)

| NameTypeDescription`CompetitionContext`[`FB2CompetitionGroupContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2competitiongroupcontext)`CompetitionRuleId``string` |
| --- |
| `CompetitionContext`[`FB2CompetitionGroupContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2competitiongroupcontext)`CompetitionRuleId``string` |
| `CompetitionRuleId``string` |

# Functions (4)

| FunctionParametersReturnsDescription`BeginCoop``-``boolean`Begins Coop.`GetCompetitionContext``-`[`FB2CompetitionGroupContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2competitiongroupcontext)Returns Competition Context.`GetCompetitionRuleId``-``string`Returns Competition Rule Id.`SetParams`InParam: [`FB2RequestCoopParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2requestcoopparam)`-`Sets Params. |
| --- |
| `BeginCoop``-``boolean`Begins Coop.`GetCompetitionContext``-`[`FB2CompetitionGroupContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2competitiongroupcontext)Returns Competition Context.`GetCompetitionRuleId``-``string`Returns Competition Rule Id.`SetParams`InParam: [`FB2RequestCoopParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2requestcoopparam)`-`Sets Params. |
| `GetCompetitionContext``-`[`FB2CompetitionGroupContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2competitiongroupcontext)Returns Competition Context.`GetCompetitionRuleId``-``string`Returns Competition Rule Id.`SetParams`InParam: [`FB2RequestCoopParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2requestcoopparam)`-`Sets Params. |
| `GetCompetitionRuleId``-``string`Returns Competition Rule Id.`SetParams`InParam: [`FB2RequestCoopParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2requestcoopparam)`-`Sets Params. |
| `SetParams`InParam: [`FB2RequestCoopParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2requestcoopparam)`-`Sets Params. |

# Override points (1)

Implement these in Lua as `FB2CoopScheduler_Competition.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_BeginCoop``-``boolean`Begins Coop. |
| --- |
| `Override_BeginCoop``-``boolean`Begins Coop. |
