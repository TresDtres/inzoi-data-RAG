---
document_id: "3af0f1af044194cfa1e7132e525eae9317732aca48aaa693cf0998f42b22943b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1taskinfo"
title: "FB1TaskInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:38+00:00"
content_sha256: "a1203e5aab44aa29fd0bc5ae68e893f3516d72c87ef685edb4fa9263e1bfdcbc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1taskinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single task step within a cooperative action, including scripts, target filters, and role playing info.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`ReleaseMainTargetObject``boolean`Whether to release the main target object after this step.`RolePlayingInfos``FB1RolePlayingInfo[]`List of role playing info entries executed during this task step.`Step``integer`Step index for this task (0-999).`StepScriptInfos``FB1StepScriptInfo[]`Scripts to execute at this step.`StepTargetFilterIds``string[]`Target filter IDs applied when selecting targets for this step. |
| --- |
| `ReleaseMainTargetObject``boolean`Whether to release the main target object after this step.`RolePlayingInfos``FB1RolePlayingInfo[]`List of role playing info entries executed during this task step.`Step``integer`Step index for this task (0-999).`StepScriptInfos``FB1StepScriptInfo[]`Scripts to execute at this step.`StepTargetFilterIds``string[]`Target filter IDs applied when selecting targets for this step. |
| `RolePlayingInfos``FB1RolePlayingInfo[]`List of role playing info entries executed during this task step.`Step``integer`Step index for this task (0-999).`StepScriptInfos``FB1StepScriptInfo[]`Scripts to execute at this step.`StepTargetFilterIds``string[]`Target filter IDs applied when selecting targets for this step. |
| `Step``integer`Step index for this task (0-999).`StepScriptInfos``FB1StepScriptInfo[]`Scripts to execute at this step.`StepTargetFilterIds``string[]`Target filter IDs applied when selecting targets for this step. |
| `StepScriptInfos``FB1StepScriptInfo[]`Scripts to execute at this step.`StepTargetFilterIds``string[]`Target filter IDs applied when selecting targets for this step. |
| `StepTargetFilterIds``string[]`Target filter IDs applied when selecting targets for this step. |
