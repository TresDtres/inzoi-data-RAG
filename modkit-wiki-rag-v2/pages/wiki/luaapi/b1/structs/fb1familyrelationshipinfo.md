---
document_id: "d5d16b32b5bb131419f9d6ad109a0a0700e41d37ceaf3bac328b6ebaa5d05d33"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familyrelationshipinfo"
title: "FB1FamilyRelationshipInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:50+00:00"
content_sha256: "d8d1c9fdb3b5cdfc4f74a2da8694219e81e241df99a4af45964685a405aad152"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1familyrelationshipinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the relationship type between two family members, identified by either a static name ID or a runtime entity ID.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Runtime entity ID of the related family member.`Id``string`Static/template name ID of the related family member.`RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)The type of family relationship (parent, child, spouse, etc.). |
| --- |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Runtime entity ID of the related family member.`Id``string`Static/template name ID of the related family member.`RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)The type of family relationship (parent, child, spouse, etc.). |
| `Id``string`Static/template name ID of the related family member.`RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)The type of family relationship (parent, child, spouse, etc.). |
| `RelationshipType`[`EB1FamilyRelationshipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1familyrelationshiptype)The type of family relationship (parent, child, spouse, etc.). |
