---
document_id: "24887471dbf044a4aa97532b66b369647ad2dcfa722eb2c16f4560b9ff68602b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancepenaltyflowstate"
title: "FB1FreelancePenaltyFlowState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:56+00:00"
content_sha256: "3329ea7a9fa163f971adac90658e00567a709b04b25802079dbc3203a9266616"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancepenaltyflowstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime state tracking for the penalty flow after a delivery order failure/cancellation. Persisted via CBOR for Save/Load support.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`NextTriggerTicks``integer`Timer target tick (used to compute remaining time on Save/Load).`OrderTemplateId``string`Order template ID of the failed/cancelled order that triggered this penalty.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this penalty flow belongs to.`Path`[`EB1FreelancePenaltyPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancepenaltypath)Which penalty path (Easy/Normal vs Hard/Expert) is in progress.`PenaltyTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Time task ID scheduling the next penalty step.`TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| --- |
| `NextTriggerTicks``integer`Timer target tick (used to compute remaining time on Save/Load).`OrderTemplateId``string`Order template ID of the failed/cancelled order that triggered this penalty.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this penalty flow belongs to.`Path`[`EB1FreelancePenaltyPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancepenaltypath)Which penalty path (Easy/Normal vs Hard/Expert) is in progress.`PenaltyTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Time task ID scheduling the next penalty step.`TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| `OrderTemplateId``string`Order template ID of the failed/cancelled order that triggered this penalty.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this penalty flow belongs to.`Path`[`EB1FreelancePenaltyPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancepenaltypath)Which penalty path (Easy/Normal vs Hard/Expert) is in progress.`PenaltyTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Time task ID scheduling the next penalty step.`TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| `OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this penalty flow belongs to.`Path`[`EB1FreelancePenaltyPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancepenaltypath)Which penalty path (Easy/Normal vs Hard/Expert) is in progress.`PenaltyTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Time task ID scheduling the next penalty step.`TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| `Path`[`EB1FreelancePenaltyPath`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancepenaltypath)Which penalty path (Easy/Normal vs Hard/Expert) is in progress.`PenaltyTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Time task ID scheduling the next penalty step.`TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| `PenaltyTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Time task ID scheduling the next penalty step.`TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| `TargetItemId``string`Target item ID used to compute the breach penalty amount.`bActive``boolean`Whether a penalty flow is currently active. |
| `bActive``boolean`Whether a penalty flow is currently active. |
