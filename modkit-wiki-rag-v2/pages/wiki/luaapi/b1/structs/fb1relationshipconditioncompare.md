---
document_id: "61c4f7a667a391c807800d400cfd251a782e7d5d7130bc876c9b3889db0724df"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipconditioncompare"
title: "FB1RelationshipConditionCompare"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:12+00:00"
content_sha256: "c7883bdef0ab8e07d843c9fd37b68d0ea15138be86f2fe62d53579be06513bb4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipconditioncompare"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a value range comparison entry linking a stat range to a relationship ID, level, and focus selection data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`FocusSelectionData`[`FB1RelationshipFocusSelectionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipfocusselectiondata)The focus selection configuration applied when this range condition is met.`FromValue``number`The lower bound of the stat value range for this condition compare entry.`Level``integer`The level associated with this value range.`LinkRelationshipId``string`The relationship ID linked when the stat value is within this range.`ToValue``number`The upper bound of the stat value range for this condition compare entry. |
| --- |
| `FocusSelectionData`[`FB1RelationshipFocusSelectionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipfocusselectiondata)The focus selection configuration applied when this range condition is met.`FromValue``number`The lower bound of the stat value range for this condition compare entry.`Level``integer`The level associated with this value range.`LinkRelationshipId``string`The relationship ID linked when the stat value is within this range.`ToValue``number`The upper bound of the stat value range for this condition compare entry. |
| `FromValue``number`The lower bound of the stat value range for this condition compare entry.`Level``integer`The level associated with this value range.`LinkRelationshipId``string`The relationship ID linked when the stat value is within this range.`ToValue``number`The upper bound of the stat value range for this condition compare entry. |
| `Level``integer`The level associated with this value range.`LinkRelationshipId``string`The relationship ID linked when the stat value is within this range.`ToValue``number`The upper bound of the stat value range for this condition compare entry. |
| `LinkRelationshipId``string`The relationship ID linked when the stat value is within this range.`ToValue``number`The upper bound of the stat value range for this condition compare entry. |
| `ToValue``number`The upper bound of the stat value range for this condition compare entry. |
