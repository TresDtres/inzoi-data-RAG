---
document_id: "eb8f23e1f5460b3f9323777686fa8cc968fbca0f7c02402f3b92840c83e93268"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1characterattributejobinfo"
title: "FB1CharacterAttributeJobInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:20+00:00"
content_sha256: "7a66ff7ba6ba66eb3ef17d1db01a56dc97f66a9e6c27daeefcb45020bc46375e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1characterattributejobinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggregates a character's job-related attribute data, including career history, per-job info map, and the current company entity ID.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CareerList``FB1CareerInfo[]`List of career history entries for this character.`CurrentCompanyId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character's current company.`JobInfoMap``table<string, FB1JobInfo>`Map from job ID to job info for this character. |
| --- |
| `CareerList``FB1CareerInfo[]`List of career history entries for this character.`CurrentCompanyId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character's current company.`JobInfoMap``table<string, FB1JobInfo>`Map from job ID to job info for this character. |
| `CurrentCompanyId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character's current company.`JobInfoMap``table<string, FB1JobInfo>`Map from job ID to job info for this character. |
| `JobInfoMap``table<string, FB1JobInfo>`Map from job ID to job info for this character. |
