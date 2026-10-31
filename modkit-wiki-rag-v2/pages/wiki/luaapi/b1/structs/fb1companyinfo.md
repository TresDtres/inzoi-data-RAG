---
document_id: "f3cea0a5bb9cff22e8a62b7940ca3f218caed4710c12c49f95eb406a00d7d5a1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1companyinfo"
title: "FB1CompanyInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:32+00:00"
content_sha256: "fe3369aeb1a2267d9530ade92e93ad3ed1af3f0636b4d1b5c2a5a6ffb020632a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1companyinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores all runtime data for a company, including departments, employees, seat assignments, and seat rank restrictions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`CompanyDtId``string`Data table ID identifying the company definition.`DepartmentInfoMap``table<FB1DepartmentKey, FB1DepartmentInfo>`Map of department keys to their department runtime info.`Employees``table<FB1EntityId, FB1EmployeeInfo>`Map of employee entity IDs to their employment info.`RootDepartmentInfoMap``table<FB1DepartmentKey, FB1RootDepartmentInfo>`Map of root department keys to their root department runtime info.`SeatAllowedRanksMap``table<FB1EntityId, FB1SeatAllowedRanksInfo>`Seat-specific allowed rank configuration (for rank-based seat assignment). Map of seat entity IDs to their allowed ranks configuration.`SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| --- |
| `CompanyDtId``string`Data table ID identifying the company definition.`DepartmentInfoMap``table<FB1DepartmentKey, FB1DepartmentInfo>`Map of department keys to their department runtime info.`Employees``table<FB1EntityId, FB1EmployeeInfo>`Map of employee entity IDs to their employment info.`RootDepartmentInfoMap``table<FB1DepartmentKey, FB1RootDepartmentInfo>`Map of root department keys to their root department runtime info.`SeatAllowedRanksMap``table<FB1EntityId, FB1SeatAllowedRanksInfo>`Seat-specific allowed rank configuration (for rank-based seat assignment). Map of seat entity IDs to their allowed ranks configuration.`SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| `DepartmentInfoMap``table<FB1DepartmentKey, FB1DepartmentInfo>`Map of department keys to their department runtime info.`Employees``table<FB1EntityId, FB1EmployeeInfo>`Map of employee entity IDs to their employment info.`RootDepartmentInfoMap``table<FB1DepartmentKey, FB1RootDepartmentInfo>`Map of root department keys to their root department runtime info.`SeatAllowedRanksMap``table<FB1EntityId, FB1SeatAllowedRanksInfo>`Seat-specific allowed rank configuration (for rank-based seat assignment). Map of seat entity IDs to their allowed ranks configuration.`SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| `Employees``table<FB1EntityId, FB1EmployeeInfo>`Map of employee entity IDs to their employment info.`RootDepartmentInfoMap``table<FB1DepartmentKey, FB1RootDepartmentInfo>`Map of root department keys to their root department runtime info.`SeatAllowedRanksMap``table<FB1EntityId, FB1SeatAllowedRanksInfo>`Seat-specific allowed rank configuration (for rank-based seat assignment). Map of seat entity IDs to their allowed ranks configuration.`SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| `RootDepartmentInfoMap``table<FB1DepartmentKey, FB1RootDepartmentInfo>`Map of root department keys to their root department runtime info.`SeatAllowedRanksMap``table<FB1EntityId, FB1SeatAllowedRanksInfo>`Seat-specific allowed rank configuration (for rank-based seat assignment). Map of seat entity IDs to their allowed ranks configuration.`SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| `SeatAllowedRanksMap``table<FB1EntityId, FB1SeatAllowedRanksInfo>`Seat-specific allowed rank configuration (for rank-based seat assignment). Map of seat entity IDs to their allowed ranks configuration.`SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| `SeatObjectDepartmentMap``table<FB1EntityId, FB1DepartmentKey>`Map of seat object entity IDs to the department key they belong to.`SiteId``string`Site ID where this company is located. |
| `SiteId``string`Site ID where this company is located. |
