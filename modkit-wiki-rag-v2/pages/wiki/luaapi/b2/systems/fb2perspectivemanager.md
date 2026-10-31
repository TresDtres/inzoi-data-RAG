---
document_id: "cb7c78209e287ccd60ec4a57cf0ea00f2c97e99510059978edcca87dbcc576ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2perspectivemanager"
title: "FB2PerspectiveManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "b65b973ba2563aacb53fc3bc12c274c30bc35c894836e961c60c6fd01f0aede3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2perspectivemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages perspective-related simulation.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase) |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase) |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase) |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase) |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase) |

# Functions (3)

| FunctionParametersReturnsDescription`GetMainPerspective`InPerspectives: `table<string, FB1Perspective>`, OutMainPerspectiveId: `string``boolean`Returns Main Perspective.`InitPerspectiveByTrait`DateTime: `FDateTime`, InTraitId: `string`, OutPerspectives: `table<string, FB1Perspective>``-`Initializes Perspective By Trait.`IsCoolTimeReady`InPerspectives: `table<string, FB1Perspective>`, InPerspectiveId: `string`, InCategoryId: `string`, InInteractionBagId: `string`, InCurrentTime: `FDateTime``boolean`Returns whether Cool Time Ready. |
| --- |
| `GetMainPerspective`InPerspectives: `table<string, FB1Perspective>`, OutMainPerspectiveId: `string``boolean`Returns Main Perspective.`InitPerspectiveByTrait`DateTime: `FDateTime`, InTraitId: `string`, OutPerspectives: `table<string, FB1Perspective>``-`Initializes Perspective By Trait.`IsCoolTimeReady`InPerspectives: `table<string, FB1Perspective>`, InPerspectiveId: `string`, InCategoryId: `string`, InInteractionBagId: `string`, InCurrentTime: `FDateTime``boolean`Returns whether Cool Time Ready. |
| `InitPerspectiveByTrait`DateTime: `FDateTime`, InTraitId: `string`, OutPerspectives: `table<string, FB1Perspective>``-`Initializes Perspective By Trait.`IsCoolTimeReady`InPerspectives: `table<string, FB1Perspective>`, InPerspectiveId: `string`, InCategoryId: `string`, InInteractionBagId: `string`, InCurrentTime: `FDateTime``boolean`Returns whether Cool Time Ready. |
| `IsCoolTimeReady`InPerspectives: `table<string, FB1Perspective>`, InPerspectiveId: `string`, InCategoryId: `string`, InInteractionBagId: `string`, InCurrentTime: `FDateTime``boolean`Returns whether Cool Time Ready. |
