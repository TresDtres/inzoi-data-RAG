---
document_id: "5a196a0071c385f0107bb0f5023b3c9e6477a05b83923e75d56dd2369b490a93"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1licensetablerow"
title: "FB1LicenseTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:16+00:00"
content_sha256: "2bd19af7765e889d9d529f6854d94c7fc8bd38e3abf4be6e1509a1a8a8e63281"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1licensetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a license, including its name, description, icon, acquisition conditions, and guide text. License table (data definition).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`AcquireConditions``FB1LicenseAcquireCondition[]`Acquisition condition list (Job/Business/Skill, etc.).`AcquireGuideTextId``string`Acquisition guide text (String Table Key).`DescriptionTextId``string`License description (String Table Key).`GradeUpScripts``FB1LicenseGradeUpScript[]`Scripts executed when license grade is promoted, per grade.`IconId``string`Icon ID (Foreign reference to B1Texture2D).`LicenseNameTextId``string`License name (String Table Key). |
| --- |
| `AcquireConditions``FB1LicenseAcquireCondition[]`Acquisition condition list (Job/Business/Skill, etc.).`AcquireGuideTextId``string`Acquisition guide text (String Table Key).`DescriptionTextId``string`License description (String Table Key).`GradeUpScripts``FB1LicenseGradeUpScript[]`Scripts executed when license grade is promoted, per grade.`IconId``string`Icon ID (Foreign reference to B1Texture2D).`LicenseNameTextId``string`License name (String Table Key). |
| `AcquireGuideTextId``string`Acquisition guide text (String Table Key).`DescriptionTextId``string`License description (String Table Key).`GradeUpScripts``FB1LicenseGradeUpScript[]`Scripts executed when license grade is promoted, per grade.`IconId``string`Icon ID (Foreign reference to B1Texture2D).`LicenseNameTextId``string`License name (String Table Key). |
| `DescriptionTextId``string`License description (String Table Key).`GradeUpScripts``FB1LicenseGradeUpScript[]`Scripts executed when license grade is promoted, per grade.`IconId``string`Icon ID (Foreign reference to B1Texture2D).`LicenseNameTextId``string`License name (String Table Key). |
| `GradeUpScripts``FB1LicenseGradeUpScript[]`Scripts executed when license grade is promoted, per grade.`IconId``string`Icon ID (Foreign reference to B1Texture2D).`LicenseNameTextId``string`License name (String Table Key). |
| `IconId``string`Icon ID (Foreign reference to B1Texture2D).`LicenseNameTextId``string`License name (String Table Key). |
| `LicenseNameTextId``string`License name (String Table Key). |
