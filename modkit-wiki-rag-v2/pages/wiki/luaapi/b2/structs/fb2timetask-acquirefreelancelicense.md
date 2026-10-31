---
document_id: "89ccb5e6c89b170ea9e0f137f2fbf513d7e13ec6dbab5f633d5b0d214450fef6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-acquirefreelancelicense"
title: "FB2TimeTask_AcquireFreelanceLicense"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:50+00:00"
content_sha256: "86a8d13a75e35ef8a556b6afe155589772678a90f488a296b978a7a75cd5456f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2timetask-acquirefreelancelicense"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- TimeTask for completing freelance-license review. Created when TryAcquireLicense is called, triggers after 2 hours, and on Execute calls FB2CareerComponent::OnLicenseReviewCompleted.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Category`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |

# Properties (2)

| NameTypeDescription`LicenseId``string``OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| --- |
| `LicenseId``string``OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
