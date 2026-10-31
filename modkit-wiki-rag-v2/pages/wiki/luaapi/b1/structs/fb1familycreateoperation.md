---
document_id: "a3f8e21f39aea45386fbac81dc9703a2614bd9e332d77122eb11cb4248211b69"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familycreateoperation"
title: "FB1FamilyCreateOperation"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:49+00:00"
content_sha256: "6b53cdb749bdbd0012e61c1eb4f244dbf00c30a51a1b85a1c8f3ef6f80cecf59"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1familycreateoperation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Describes a single relationship operation performed when creating a family from a template, specifying the target, relationship type, gender control, and additional relationship targets.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`GenderControllType`[`EB1FamilyCreateGenderControllType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familycreategendercontrolltype)Gender control type applied when creating the character for this operation.`RelationshipTargetId``string`ID of the character this operation's relationship targets.`RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)Type of family relationship applied by this operation.`ToRelationshipTargetIdList``string[]`List of additional character IDs to establish relationships with. |
| --- |
| `GenderControllType`[`EB1FamilyCreateGenderControllType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familycreategendercontrolltype)Gender control type applied when creating the character for this operation.`RelationshipTargetId``string`ID of the character this operation's relationship targets.`RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)Type of family relationship applied by this operation.`ToRelationshipTargetIdList``string[]`List of additional character IDs to establish relationships with. |
| `RelationshipTargetId``string`ID of the character this operation's relationship targets.`RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)Type of family relationship applied by this operation.`ToRelationshipTargetIdList``string[]`List of additional character IDs to establish relationships with. |
| `RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)Type of family relationship applied by this operation.`ToRelationshipTargetIdList``string[]`List of additional character IDs to establish relationships with. |
| `ToRelationshipTargetIdList``string[]`List of additional character IDs to establish relationships with. |
