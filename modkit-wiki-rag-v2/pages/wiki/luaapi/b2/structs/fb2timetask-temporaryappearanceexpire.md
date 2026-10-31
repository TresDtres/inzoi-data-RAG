---
document_id: "4bcadf4af00343e58333ef34c4e0d998388aa381ac66dea488a3d78262ff641f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-temporaryappearanceexpire"
title: "FB2TimeTask_TemporaryAppearanceExpire"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:54+00:00"
content_sha256: "11ca5817489d498e864b6861191cf05ef5d25acc201e05beca31b3109878d729"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2timetask-temporaryappearanceexpire"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- TemporaryAppearance-expiry TimeTask. Runs once based on ExpireTime when a temporary appearance is registered; on expiry calls AppearanceComponent::ResetOverrideAppearance. IsTransient=true: excluded from Snapshot/Restore (re-registered by the AppearanceComponent).

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Category`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |

# Properties (2)

| NameTypeDescription`AppearanceType`[`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| --- |
| `AppearanceType`[`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
