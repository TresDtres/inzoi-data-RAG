---
document_id: "e9286d3efb4402e2eb6a3a83402d234ec2fb9f5b24a3eedabb6ce6ddb1996022"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1outfitsetting"
title: "FB1OutfitSetting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:38+00:00"
content_sha256: "073fed334e7238e4969c8b134c6788613b232a603b574d7d3969bd4b38014b1d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1outfitsetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the complete outfit state for a character, including garment, accessory, printed accessory, outfit category, and change reason.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Accessories``table<string, FB1AccessoryDescription>`Map from accessory type name to accessory description (e.g., Glasses, Earring).`CostumeId``string`Costume ID representing special outfit states (e.g., Default, TakeOffShoes, Undressed).`Garments``table<string, FB1GarmentDescription>`Map from garment type name to garment description (e.g., Top, Bottom, Shoes).`PrintedAccessories``FB1PrintedAccessoryDescription[]`List of printed accessory descriptions (e.g., custom-printed items). |
| --- |
| `Accessories``table<string, FB1AccessoryDescription>`Map from accessory type name to accessory description (e.g., Glasses, Earring).`CostumeId``string`Costume ID representing special outfit states (e.g., Default, TakeOffShoes, Undressed).`Garments``table<string, FB1GarmentDescription>`Map from garment type name to garment description (e.g., Top, Bottom, Shoes).`PrintedAccessories``FB1PrintedAccessoryDescription[]`List of printed accessory descriptions (e.g., custom-printed items). |
| `CostumeId``string`Costume ID representing special outfit states (e.g., Default, TakeOffShoes, Undressed).`Garments``table<string, FB1GarmentDescription>`Map from garment type name to garment description (e.g., Top, Bottom, Shoes).`PrintedAccessories``FB1PrintedAccessoryDescription[]`List of printed accessory descriptions (e.g., custom-printed items). |
| `Garments``table<string, FB1GarmentDescription>`Map from garment type name to garment description (e.g., Top, Bottom, Shoes).`PrintedAccessories``FB1PrintedAccessoryDescription[]`List of printed accessory descriptions (e.g., custom-printed items). |
| `PrintedAccessories``FB1PrintedAccessoryDescription[]`List of printed accessory descriptions (e.g., custom-printed items). |
