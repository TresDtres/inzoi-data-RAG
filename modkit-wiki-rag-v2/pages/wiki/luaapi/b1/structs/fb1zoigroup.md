---
document_id: "b524ebbc18b89ece332531f465e65bd50e6f8b9c3eaed289adaa31d5e9bd9e9a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoigroup"
title: "FB1ZoiGroup"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:52+00:00"
content_sha256: "8a2c50e281cbf7d372314f79c4ba43c6ca9d5fdc8674877114662a8597fb4fc1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1zoigroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a Zoi group instance, storing the leader, group ID, group type, and the list of member entity IDs.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`GroupId`[`FB1ZoiGroupId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoigroupid)Unique identifier for this Zoi group instance.`GroupType`[`EB1ZoiGroupType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoigrouptype)Type flags describing the nature of this group (e.g., Default, Family, Date).`LeaderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the group leader.`MemberIds``FB1EntityId[]`List of entity IDs for all members belonging to this group. |
| --- |
| `GroupId`[`FB1ZoiGroupId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoigroupid)Unique identifier for this Zoi group instance.`GroupType`[`EB1ZoiGroupType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoigrouptype)Type flags describing the nature of this group (e.g., Default, Family, Date).`LeaderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the group leader.`MemberIds``FB1EntityId[]`List of entity IDs for all members belonging to this group. |
| `GroupType`[`EB1ZoiGroupType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoigrouptype)Type flags describing the nature of this group (e.g., Default, Family, Date).`LeaderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the group leader.`MemberIds``FB1EntityId[]`List of entity IDs for all members belonging to this group. |
| `LeaderId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the group leader.`MemberIds``FB1EntityId[]`List of entity IDs for all members belonging to this group. |
| `MemberIds``FB1EntityId[]`List of entity IDs for all members belonging to this group. |
