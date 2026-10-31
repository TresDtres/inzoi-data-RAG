---
document_id: "774bc785f615149036f9655075a85c5627b0ec34a6999531a761cbbded554963"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberdata"
title: "FB1FamilyTreeMemberData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:50+00:00"
content_sha256: "818660412ad0b16cdf8d8a2a582e36ace56673ff9430535d3967c5981c409d43"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1familytreememberdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores complete family tree data for a single member, including their ID, parents, children, spouse, and gender type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`Children``FB1FamilyTreeMemberId[]`List of child IDs. (a member can have multiple children) Represents blood-related children; the parent-child bond cannot be removed once formed.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Visual gender type used to determine appropriate kinship titles (male/female).`Id`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Unique identifier for this family tree member.`ParentA`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - A. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`ParentB`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - B. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
| --- |
| `Children``FB1FamilyTreeMemberId[]`List of child IDs. (a member can have multiple children) Represents blood-related children; the parent-child bond cannot be removed once formed.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Visual gender type used to determine appropriate kinship titles (male/female).`Id`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Unique identifier for this family tree member.`ParentA`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - A. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`ParentB`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - B. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
| `GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Visual gender type used to determine appropriate kinship titles (male/female).`Id`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Unique identifier for this family tree member.`ParentA`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - A. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`ParentB`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - B. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
| `Id`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Unique identifier for this family tree member.`ParentA`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - A. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`ParentB`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - B. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
| `ParentA`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - A. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`ParentB`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - B. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
| `ParentB`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Parent ID - B. (up to two parents: A and B) Represents a blood-related parent; the parent-child bond cannot be removed once formed.`Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
| `Spouse`[`FB1FamilyTreeMemberId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familytreememberid)Spouse ID. The spousal relationship can be set or removed at any time via marriage or divorce. |
