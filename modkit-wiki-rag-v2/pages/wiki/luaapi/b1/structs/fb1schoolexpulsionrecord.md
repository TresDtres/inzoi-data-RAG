---
document_id: "8f898dea05756172d17079a2737833442dd8dbd8b7c28a2918ff69fdcca4ba29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolexpulsionrecord"
title: "FB1SchoolExpulsionRecord"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:20+00:00"
content_sha256: "edc5e1b385a245a529b3991975a52235858681795fbaceec9dfa5e7554237d42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolexpulsionrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Expulsion record. Kept in FB2CareerComponent::ExpulsionRecords. SchoolGrade is the last weekly evaluation grade just before expulsion; None if expelled before any evaluation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CareerDtId``string`CareerDtId (Company.Id) of the school expelled from. Inherited as a graduation record in OvercomeSchoolExpulsion.`EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The education tier of the school the student was expelled from.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade before expulsion; None if expelled before any evaluation. |
| --- |
| `CareerDtId``string`CareerDtId (Company.Id) of the school expelled from. Inherited as a graduation record in OvercomeSchoolExpulsion.`EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The education tier of the school the student was expelled from.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade before expulsion; None if expelled before any evaluation. |
| `EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The education tier of the school the student was expelled from.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade before expulsion; None if expelled before any evaluation. |
| `SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade before expulsion; None if expelled before any evaluation. |
