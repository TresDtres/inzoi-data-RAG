---
document_id: "99c92ae2e053b339ecda954bf0b78269637b3d3fad0b8aab65effcc7e7b6d3ff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1legacycompanydata"
title: "FB1LegacyCompanyData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:15+00:00"
content_sha256: "506a400292ea204df60d120676e7c2960de37ccf475a3dc1d68704e66b2cde7f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1legacycompanydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Must match the field names of CompanyComponent's Employees and TodayWorkedEntities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CompanyDtId``string`Data table ID of the legacy company.`Employees``table<FB1EntityId, FB1LegacyEmployeeInfo>`Legacy employees keyed by entity ID.`TodayWorkedEntities``FB1EntityId[]`Entity IDs that already worked today (legacy). |
| --- |
| `CompanyDtId``string`Data table ID of the legacy company.`Employees``table<FB1EntityId, FB1LegacyEmployeeInfo>`Legacy employees keyed by entity ID.`TodayWorkedEntities``FB1EntityId[]`Entity IDs that already worked today (legacy). |
| `Employees``table<FB1EntityId, FB1LegacyEmployeeInfo>`Legacy employees keyed by entity ID.`TodayWorkedEntities``FB1EntityId[]`Entity IDs that already worked today (legacy). |
| `TodayWorkedEntities``FB1EntityId[]`Entity IDs that already worked today (legacy). |
