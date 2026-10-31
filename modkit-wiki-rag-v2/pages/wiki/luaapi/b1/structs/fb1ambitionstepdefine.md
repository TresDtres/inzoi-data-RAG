---
document_id: "748f9d3338dc389b8b1015a7d9cacc2c975c01bd9389b321ad1511b092812b1e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ambitionstepdefine"
title: "FB1AmbitionStepDefine"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "9db945c51a126c641ab24adfa9436c2ec90c14750f209b766ea7a1bab13fb302"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1ambitionstepdefine"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single step within an ambition item, including its step index, step completion script, and the list of missions to complete.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`CompleteTraitId``string`Aptitude trait granted to the character when this step is completed.`Step``integer`Step number within the ambition item progression.`StepCompleteScriptId``string`Script executed when all missions in this step are completed.`StepMissions``FB1AmbitionStepMissionDefine[]`List of missions that must be completed to finish this step. |
| --- |
| `CompleteTraitId``string`Aptitude trait granted to the character when this step is completed.`Step``integer`Step number within the ambition item progression.`StepCompleteScriptId``string`Script executed when all missions in this step are completed.`StepMissions``FB1AmbitionStepMissionDefine[]`List of missions that must be completed to finish this step. |
| `Step``integer`Step number within the ambition item progression.`StepCompleteScriptId``string`Script executed when all missions in this step are completed.`StepMissions``FB1AmbitionStepMissionDefine[]`List of missions that must be completed to finish this step. |
| `StepCompleteScriptId``string`Script executed when all missions in this step are completed.`StepMissions``FB1AmbitionStepMissionDefine[]`List of missions that must be completed to finish this step. |
| `StepMissions``FB1AmbitionStepMissionDefine[]`List of missions that must be completed to finish this step. |
