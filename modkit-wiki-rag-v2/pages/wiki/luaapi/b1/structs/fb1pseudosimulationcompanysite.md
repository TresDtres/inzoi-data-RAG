---
document_id: "2b69da36809568bc3d49289b938542f096737d53c9cda63d4669f7589c6b7131"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pseudosimulationcompanysite"
title: "FB1PseudoSimulationCompanySite"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:07+00:00"
content_sha256: "5897ca80ed00ae1468a01d7cf6cff399056224f5e02449000bcc23437726f812"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1pseudosimulationcompanysite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents the pseudo-simulated state of a company site, including the company data ID, character attendance, and salary records.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CharacterAttendedDays``table<FB1EntityId, integer>`A map tracking the number of days each character has attended at this company site.`CharacterSalaries``table<FB1EntityId, integer>`A map storing the salary amount for each character at this company site.`CompanyDtId``string`The data table ID of the company at this site. |
| --- |
| `CharacterAttendedDays``table<FB1EntityId, integer>`A map tracking the number of days each character has attended at this company site.`CharacterSalaries``table<FB1EntityId, integer>`A map storing the salary amount for each character at this company site.`CompanyDtId``string`The data table ID of the company at this site. |
| `CharacterSalaries``table<FB1EntityId, integer>`A map storing the salary amount for each character at this company site.`CompanyDtId``string`The data table ID of the company at this site. |
| `CompanyDtId``string`The data table ID of the company at this site. |
