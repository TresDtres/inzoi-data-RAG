---
document_id: "bf9b55c342c7691f18c0ed21e8e10885b93db498f1ebf90b42452f108d73c6fb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1contentpickerentrydata"
title: "UB1ContentPickerEntryData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:17+00:00"
content_sha256: "592ce7965b9fc008dc9d94469b27ef0acff0aebb1c0a57c58b69e75ac40774ce"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1contentpickerentrydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data layer for the ContentPicker entry widget. Design: a hybrid of Common Fields (90% of cases) + Extended Fields (10% of special cases). PrimaryText/PrimaryIcon are common to most entries; the Additional map allows flexible extension; easily accessible from Blueprint (UPROPERTY BlueprintReadWrite). Usage: 1) use B1ContentPickerHelper::CreateEntry() to convert struct data to EntryData, 2) pass the EntryData objects to a TileView/ListView via SetListItems(), 3) receive data in the entry widget via NativeOnListItemObjectSet(), 4) the entry widget reads the EntryData fields to update the UI.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UObject` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UObject` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UObject` |
| Category`classes`Extends`UObject` |
| Extends`UObject` |

# Properties (8)

| NameTypeDescription`AdditionalFlags``table<string, boolean>`Additional flag fields (e.g. 'IsOccupied', 'IsNew', 'IsOnSale').`AdditionalImages``table<string, UTexture2D>`Additional image fields (e.g. secondary icon, badge image).`AdditionalNumbers``table<string, number>`Additional number fields (e.g. 'Quantity', 'Level', 'Price', 'Freshness').`AdditionalTexts``table<string, string>`Additional text fields (e.g. 'JobTitle', 'Department', 'Occupant').`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID (used by business logic).`PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| --- |
| `AdditionalFlags``table<string, boolean>`Additional flag fields (e.g. 'IsOccupied', 'IsNew', 'IsOnSale').`AdditionalImages``table<string, UTexture2D>`Additional image fields (e.g. secondary icon, badge image).`AdditionalNumbers``table<string, number>`Additional number fields (e.g. 'Quantity', 'Level', 'Price', 'Freshness').`AdditionalTexts``table<string, string>`Additional text fields (e.g. 'JobTitle', 'Department', 'Occupant').`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID (used by business logic).`PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `AdditionalImages``table<string, UTexture2D>`Additional image fields (e.g. secondary icon, badge image).`AdditionalNumbers``table<string, number>`Additional number fields (e.g. 'Quantity', 'Level', 'Price', 'Freshness').`AdditionalTexts``table<string, string>`Additional text fields (e.g. 'JobTitle', 'Department', 'Occupant').`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID (used by business logic).`PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `AdditionalNumbers``table<string, number>`Additional number fields (e.g. 'Quantity', 'Level', 'Price', 'Freshness').`AdditionalTexts``table<string, string>`Additional text fields (e.g. 'JobTitle', 'Department', 'Occupant').`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID (used by business logic).`PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `AdditionalTexts``table<string, string>`Additional text fields (e.g. 'JobTitle', 'Department', 'Occupant').`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID (used by business logic).`PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID (used by business logic).`PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `PrimaryIcon``UTexture2D`Main icon/thumbnail image.`PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `PrimaryText``string`Main display text (e.g. 'Apple', 'John', 'Desk A').`bIsSelected``boolean`Selected state (for showing selection in the UI). |
| `bIsSelected``boolean`Selected state (for showing selection in the UI). |

# Functions (8)
