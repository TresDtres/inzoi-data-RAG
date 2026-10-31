---
document_id: "5323c7db6f489884b2053657916a1c1c40c27dc941b7a44bf2406b8c58adc70b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1customizedhouseholdinfo"
title: "FB1CustomizedHouseholdInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:37+00:00"
content_sha256: "7376fae1380e80fcd5f65fddd2f194bdac5ccbd04dab8f62844b87593dd6a290"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1customizedhouseholdinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the minimum information required to create a new household, including the name, member customization data, starting currency map, site ID, and creation reason.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`CreateReason`[`EB2EntityCreateReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitycreatereason)Reason for creating this household entity.`CurrencyMap``table<string, integer>`Initial currency balances for the new household.`HouseholdMemberCustomizedInfo``FB1CustomizedCharacterInfo[]`Customized character info for each member of the new household.`HouseholdName``string`Name of the household being created.`ResidingSiteId``string`Data table ID of the site where the household will reside. |
| --- |
| `CreateReason`[`EB2EntityCreateReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitycreatereason)Reason for creating this household entity.`CurrencyMap``table<string, integer>`Initial currency balances for the new household.`HouseholdMemberCustomizedInfo``FB1CustomizedCharacterInfo[]`Customized character info for each member of the new household.`HouseholdName``string`Name of the household being created.`ResidingSiteId``string`Data table ID of the site where the household will reside. |
| `CurrencyMap``table<string, integer>`Initial currency balances for the new household.`HouseholdMemberCustomizedInfo``FB1CustomizedCharacterInfo[]`Customized character info for each member of the new household.`HouseholdName``string`Name of the household being created.`ResidingSiteId``string`Data table ID of the site where the household will reside. |
| `HouseholdMemberCustomizedInfo``FB1CustomizedCharacterInfo[]`Customized character info for each member of the new household.`HouseholdName``string`Name of the household being created.`ResidingSiteId``string`Data table ID of the site where the household will reside. |
| `HouseholdName``string`Name of the household being created.`ResidingSiteId``string`Data table ID of the site where the household will reside. |
| `ResidingSiteId``string`Data table ID of the site where the household will reside. |
