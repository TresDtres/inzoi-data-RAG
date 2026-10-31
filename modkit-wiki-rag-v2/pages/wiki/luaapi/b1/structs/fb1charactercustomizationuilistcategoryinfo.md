---
document_id: "5995aeff258efe32a94904f0e9c28ebf1d9a88bb9b5ee6805ea61fd566f7b7f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1charactercustomizationuilistcategoryinfo"
title: "FB1CharacterCustomizationUIListCategoryInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:21+00:00"
content_sha256: "ca9a4cff357f61449d24128dfbed870ee30ea7331853812739489bdb4be92406"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1charactercustomizationuilistcategoryinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a customization UI category, including its identifier, display name, icon, category type, data tables, and optional filter.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`CategoryId``string`Identifier for this customization UI category. Used to distinguish categories in the UI.`CategoryType`[`EB1CharacterCustomizationUIListCategoryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1charactercustomizationuilistcategorytype)UI category type.`DataTableNames``string[]`JSON data table identifiers to display for this UI category.`DisabledBodyAgeTypes``table<EB1BodyAgeType, boolean>`List of body age types for which this category is disabled.`FilterId``string`Optional filter identifier for this UI category.`Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| --- |
| `CategoryId``string`Identifier for this customization UI category. Used to distinguish categories in the UI.`CategoryType`[`EB1CharacterCustomizationUIListCategoryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1charactercustomizationuilistcategorytype)UI category type.`DataTableNames``string[]`JSON data table identifiers to display for this UI category.`DisabledBodyAgeTypes``table<EB1BodyAgeType, boolean>`List of body age types for which this category is disabled.`FilterId``string`Optional filter identifier for this UI category.`Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| `CategoryType`[`EB1CharacterCustomizationUIListCategoryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1charactercustomizationuilistcategorytype)UI category type.`DataTableNames``string[]`JSON data table identifiers to display for this UI category.`DisabledBodyAgeTypes``table<EB1BodyAgeType, boolean>`List of body age types for which this category is disabled.`FilterId``string`Optional filter identifier for this UI category.`Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| `DataTableNames``string[]`JSON data table identifiers to display for this UI category.`DisabledBodyAgeTypes``table<EB1BodyAgeType, boolean>`List of body age types for which this category is disabled.`FilterId``string`Optional filter identifier for this UI category.`Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| `DisabledBodyAgeTypes``table<EB1BodyAgeType, boolean>`List of body age types for which this category is disabled.`FilterId``string`Optional filter identifier for this UI category.`Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| `FilterId``string`Optional filter identifier for this UI category.`Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| `Icon``UObject`Icon displayed for this UI category.`Name``string`Display name shown in the customization UI. |
| `Name``string`Display name shown in the customization UI. |
