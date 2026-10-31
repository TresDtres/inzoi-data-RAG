---
document_id: "4e4358484d400afaf9465f6542896968914597de4cce4f572fa48c1650b8afdf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1qualitytablerow"
title: "FB1QualityTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:09+00:00"
content_sha256: "679e685db3088c29cd3d7b326012972104e825dd3156c1551e8036f9c1be8702"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1qualitytablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the quality configuration for an interaction, including market selling data, level quality references, and per-quality data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`MarketSellingDataId``string`The market selling data ID linked to this quality row.`MaxLevelQualityId``string`The level quality configuration ID used when the character is at max level.`NonMaxLevelQualityId``string`The level quality configuration ID used when the character is not at max level.`QualityDatas``FB1QualityData[]`The list of per-quality configuration data entries for this quality row. |
| --- |
| `MarketSellingDataId``string`The market selling data ID linked to this quality row.`MaxLevelQualityId``string`The level quality configuration ID used when the character is at max level.`NonMaxLevelQualityId``string`The level quality configuration ID used when the character is not at max level.`QualityDatas``FB1QualityData[]`The list of per-quality configuration data entries for this quality row. |
| `MaxLevelQualityId``string`The level quality configuration ID used when the character is at max level.`NonMaxLevelQualityId``string`The level quality configuration ID used when the character is not at max level.`QualityDatas``FB1QualityData[]`The list of per-quality configuration data entries for this quality row. |
| `NonMaxLevelQualityId``string`The level quality configuration ID used when the character is not at max level.`QualityDatas``FB1QualityData[]`The list of per-quality configuration data entries for this quality row. |
| `QualityDatas``FB1QualityData[]`The list of per-quality configuration data entries for this quality row. |
