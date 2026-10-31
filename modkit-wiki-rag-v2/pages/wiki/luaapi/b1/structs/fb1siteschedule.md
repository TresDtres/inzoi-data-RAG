---
document_id: "9fd0e9a1d863f07e7f9b0bd7fb3f2e11d3e26130fb296034913ccd75e5b2ed5a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteschedule"
title: "FB1SiteSchedule"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:28+00:00"
content_sha256: "a9b21e6d47f0379dac074e083fa07a365025b4a197e7ad710bea26031f4f9650"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1siteschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a site-level schedule entry linking a timeline, company, and character attributes for NPC spawning.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`CharacterAttributeIdList``string[]`List of character attribute IDs eligible to fill this site schedule slot.`CompanyId``string`Company ID associated with this site schedule.`DepartmentKey`[`FB1DepartmentKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1departmentkey)Department key identifying the organizational unit for this schedule.`Id``string`Unique ID for this site schedule entry.`SiteId``string`Auto-generated site ID populated during OnPostJsonDataLoad.`TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| --- |
| `CharacterAttributeIdList``string[]`List of character attribute IDs eligible to fill this site schedule slot.`CompanyId``string`Company ID associated with this site schedule.`DepartmentKey`[`FB1DepartmentKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1departmentkey)Department key identifying the organizational unit for this schedule.`Id``string`Unique ID for this site schedule entry.`SiteId``string`Auto-generated site ID populated during OnPostJsonDataLoad.`TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `CompanyId``string`Company ID associated with this site schedule.`DepartmentKey`[`FB1DepartmentKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1departmentkey)Department key identifying the organizational unit for this schedule.`Id``string`Unique ID for this site schedule entry.`SiteId``string`Auto-generated site ID populated during OnPostJsonDataLoad.`TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `DepartmentKey`[`FB1DepartmentKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1departmentkey)Department key identifying the organizational unit for this schedule.`Id``string`Unique ID for this site schedule entry.`SiteId``string`Auto-generated site ID populated during OnPostJsonDataLoad.`TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `Id``string`Unique ID for this site schedule entry.`SiteId``string`Auto-generated site ID populated during OnPostJsonDataLoad.`TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `SiteId``string`Auto-generated site ID populated during OnPostJsonDataLoad.`TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `TimelineName``string`Name of the timeline used for this site schedule.`WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `WorkConditions``FB1Condition[]`Conditions that must be satisfied for a character to work this schedule.`bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
| `bIsCustomSiteSchedule``boolean`True if this schedule was created through custom site editing rather than data tables. |
