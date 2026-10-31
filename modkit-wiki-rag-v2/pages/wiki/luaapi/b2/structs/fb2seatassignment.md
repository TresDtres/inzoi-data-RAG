---
document_id: "f9c2c8de3efc0bc6426533e3bb8498cc5da115606dc35c9ef6f51d8b8671afa1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2seatassignment"
title: "FB2SeatAssignment"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:46+00:00"
content_sha256: "7d5e045e9289c3dcb8c160b6e1711ac51644ee7c2e2d8c0b15e0934bf203ed6c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2seatassignment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A fully generic seat-assignment system. A pure seat-assignment mapping module usable by any system (Company, Career, School, etc.). Does not depend on system-specific concepts such as Department. Design: no Department dependency, manages only SeatId-to-MemberId mapping, no business logic (validation is the caller's responsibility), fully generic. Used by adding it as a member to Company/Career/School; the caller validates first, then calls AssignSeat and handles the returned old seat/member.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs` |
| EnvironmentB2 - SimulationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`MemberToSeatMap``table<FB1EntityId, FB1EntityId>`Member -> seat mapping.`SeatToMemberMap``table<FB1EntityId, FB1EntityId>`Seat -> member mapping. |
| --- |
| `MemberToSeatMap``table<FB1EntityId, FB1EntityId>`Member -> seat mapping.`SeatToMemberMap``table<FB1EntityId, FB1EntityId>`Seat -> member mapping. |
| `SeatToMemberMap``table<FB1EntityId, FB1EntityId>`Seat -> member mapping. |
