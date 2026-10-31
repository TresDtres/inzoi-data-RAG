---
document_id: "28ec3ec750790043e16ceeb427510c5f3286aeeeaafffffadbea1d5e78fa93ad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2careercomponent"
title: "FB2CareerComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:11+00:00"
content_sha256: "438ad8934cbf424f90db2478d199cde6043578c868c725cef80ca3362e2af9f2"
chunk: 43
chunk_count: 54
page_type: "article"
route: "wiki/luaapi/b2/components/fb2careercomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

o change). Called from B2Script_School::Execute_AddExamStudyBonus.`TryPublishCraftObject`InCraftObjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean` |
| `TryAcquireLicense`InLicenseId: `string`, OutFailReasons: `EB1LicenseAcquireFailReason[]``boolean``TryAddExamStudyBonus`InAmount: `number`, InMaxPerDay: `integer``boolean`Tries to accumulate one exam-study bonus. If the daily counter check passes, ExamPreparation += InAmount and the counter increments; returns false if over the limit (no change). Called from B2Script_School::Execute_AddExamStudyBonus.`TryPublishCraftObject`InCraftObjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean` |
| `TryAddExamStudyBonus`InAmount: `number`, InMaxPerDay: `integer``boolean`Tries to accumulate one exam-study bonus. If the daily counter check passes, ExamPreparation += InAmount and the counter increments; returns false if over the limit (no change). Called from B2Script_School::Execute_AddExamStudyBonus.`TryPublishCraftObject`InCraftObjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean` |
| `TryPublishCraftObject`InCraftObjectEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean` |

# Override points (33)

Implement these in Lua as `FB2CareerComponent.Override_Name = function(...) end`.
