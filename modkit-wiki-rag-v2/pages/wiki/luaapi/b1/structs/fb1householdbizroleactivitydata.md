---
document_id: "acb40d54fa8ee989b8dfa0606a86133df4663795f91a181413caa2166f0d5105"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizroleactivitydata"
title: "FB1HouseholdBizRoleActivityData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "c1734906c8e4c33f3078516bb097b76b979760d0b3ccdbfcfd24191b917d7579"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizroleactivitydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores default activity tags automatically granted to each business role (manager, employee, customer) and the list of conflicting activity tag pairs that prevent incompatible activities from co-existing.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`ConflictingActivityTagPairs``FB1ConflictingActivityTagPair[]`List of mutually conflicting activity tag pairs.`CustomerDefaultActivityTags``string[]`Default activity tags automatically added for the customer role.`EmployeeDefaultActivityTags``string[]`Default activity tags automatically added for the employee role.`ManagerDefaultActivityTags``string[]`Default activity tags automatically added for the manager role. |
| --- |
| `ConflictingActivityTagPairs``FB1ConflictingActivityTagPair[]`List of mutually conflicting activity tag pairs.`CustomerDefaultActivityTags``string[]`Default activity tags automatically added for the customer role.`EmployeeDefaultActivityTags``string[]`Default activity tags automatically added for the employee role.`ManagerDefaultActivityTags``string[]`Default activity tags automatically added for the manager role. |
| `CustomerDefaultActivityTags``string[]`Default activity tags automatically added for the customer role.`EmployeeDefaultActivityTags``string[]`Default activity tags automatically added for the employee role.`ManagerDefaultActivityTags``string[]`Default activity tags automatically added for the manager role. |
| `EmployeeDefaultActivityTags``string[]`Default activity tags automatically added for the employee role.`ManagerDefaultActivityTags``string[]`Default activity tags automatically added for the manager role. |
| `ManagerDefaultActivityTags``string[]`Default activity tags automatically added for the manager role. |
