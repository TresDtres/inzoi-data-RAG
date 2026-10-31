---
document_id: "6de8614695448eb458a3b3c99f44091b64aa344dd417a37cf3dbf45736cb14ae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1roleplayinginfo"
title: "FB1RolePlayingInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:16+00:00"
content_sha256: "5c5b15e92ec8577c25529e2d0faa087238e0e442f9fd34262967f995fa064661"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1roleplayinginfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines role playing information for a cooperative action, mapping a role to its scenario steps and target filters.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`RoleId``string`Role ID identifying which participant this playing info belongs to.`RoleTargetFilterIds``string[]`Target filter IDs applied when determining valid targets for this role.`ScenarioInfos``FB1ScenarioInfo[]`Ordered list of scenario steps for this role to execute.`TimeOffset``integer`Time offset in milliseconds before this role's scenarios begin. |
| --- |
| `RoleId``string`Role ID identifying which participant this playing info belongs to.`RoleTargetFilterIds``string[]`Target filter IDs applied when determining valid targets for this role.`ScenarioInfos``FB1ScenarioInfo[]`Ordered list of scenario steps for this role to execute.`TimeOffset``integer`Time offset in milliseconds before this role's scenarios begin. |
| `RoleTargetFilterIds``string[]`Target filter IDs applied when determining valid targets for this role.`ScenarioInfos``FB1ScenarioInfo[]`Ordered list of scenario steps for this role to execute.`TimeOffset``integer`Time offset in milliseconds before this role's scenarios begin. |
| `ScenarioInfos``FB1ScenarioInfo[]`Ordered list of scenario steps for this role to execute.`TimeOffset``integer`Time offset in milliseconds before this role's scenarios begin. |
| `TimeOffset``integer`Time offset in milliseconds before this role's scenarios begin. |
