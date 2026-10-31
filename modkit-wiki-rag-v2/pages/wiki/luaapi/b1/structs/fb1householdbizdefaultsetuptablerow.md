---
document_id: "0c474ed9d7256d48ff7b3caa10fc89eb4894b202690a660d231f930ae15207ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizdefaultsetuptablerow"
title: "FB1HouseholdBizDefaultSetupTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "50e9b00fcd8ce7f9f21e9bf350aaded1a9086ed9fd50cd47bcff0cbb91f85e47"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizdefaultsetuptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the default setup configuration for a system-managed business site, including name, description, operating hours, business template, and employee templates.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (7)

| NameTypeDescription`AccommodationSiteIds``string[]`Accommodation site IDs used by this default setup. Each ID is HouseholdBizAccommodation.Id and the target SiteId.`BizLevel``integer`Business level override for crowd businesses. -1 uses max level (default).`Desc``string`Localized description text identifier for this default setup.`EmployeeTemplateIdList``string[]`Employee template IDs used in this default site setup.`HouseholdBizTemplateId``string`Business template ID applied as the default for this site setup.`Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| --- |
| `AccommodationSiteIds``string[]`Accommodation site IDs used by this default setup. Each ID is HouseholdBizAccommodation.Id and the target SiteId.`BizLevel``integer`Business level override for crowd businesses. -1 uses max level (default).`Desc``string`Localized description text identifier for this default setup.`EmployeeTemplateIdList``string[]`Employee template IDs used in this default site setup.`HouseholdBizTemplateId``string`Business template ID applied as the default for this site setup.`Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| `BizLevel``integer`Business level override for crowd businesses. -1 uses max level (default).`Desc``string`Localized description text identifier for this default setup.`EmployeeTemplateIdList``string[]`Employee template IDs used in this default site setup.`HouseholdBizTemplateId``string`Business template ID applied as the default for this site setup.`Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| `Desc``string`Localized description text identifier for this default setup.`EmployeeTemplateIdList``string[]`Employee template IDs used in this default site setup.`HouseholdBizTemplateId``string`Business template ID applied as the default for this site setup.`Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| `EmployeeTemplateIdList``string[]`Employee template IDs used in this default site setup.`HouseholdBizTemplateId``string`Business template ID applied as the default for this site setup.`Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| `HouseholdBizTemplateId``string`Business template ID applied as the default for this site setup.`Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| `Name``string`Localized name text identifier for this default setup.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
| `WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Operating hours and days configuration for this default setup. |
