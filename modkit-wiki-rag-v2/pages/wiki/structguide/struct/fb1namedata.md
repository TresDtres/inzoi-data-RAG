---
document_id: "7d9a1d32be58e63773d65bcbd412b9e93e80fafdc9742d62aeb566455f7bbe33"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1namedata"
title: "B1NameData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:42+00:00"
content_sha256: "e2586e4ddd4aa7b0cc5441c0d21f123e5b849024caf77aed6f3117ebc99ca615"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1namedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- A single name entry within a name pool, storing a list key, gender association, and localized display text. * Used in both family name and first name pool table rows to define individual name options.

| PropertyTypeDescriptionMetadataListKeyFStringUnique list key identifying this name entry within its parent array.Category: B1NameDataGenderEB1GenderTypeGender this name is associated with, used to filter names during character creation.Category: B1NameDataDisplayNameTextIdFStringString table key referencing the localized display text for this name.Category: B1NameDatabHiddenFromRandomPoolboolIf true, this name is excluded from random name generation (e.g. reserved for special NPCs).Category: B1NameData |
| --- |
| ListKeyFStringUnique list key identifying this name entry within its parent array.Category: B1NameDataGenderEB1GenderTypeGender this name is associated with, used to filter names during character creation.Category: B1NameDataDisplayNameTextIdFStringString table key referencing the localized display text for this name.Category: B1NameDatabHiddenFromRandomPoolboolIf true, this name is excluded from random name generation (e.g. reserved for special NPCs).Category: B1NameData |
| GenderEB1GenderTypeGender this name is associated with, used to filter names during character creation.Category: B1NameDataDisplayNameTextIdFStringString table key referencing the localized display text for this name.Category: B1NameDatabHiddenFromRandomPoolboolIf true, this name is excluded from random name generation (e.g. reserved for special NPCs).Category: B1NameData |
| DisplayNameTextIdFStringString table key referencing the localized display text for this name.Category: B1NameDatabHiddenFromRandomPoolboolIf true, this name is excluded from random name generation (e.g. reserved for special NPCs).Category: B1NameData |
| bHiddenFromRandomPoolboolIf true, this name is excluded from random name generation (e.g. reserved for special NPCs).Category: B1NameData |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoName[FB1NameSetWrapper](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1namesetwrapper)
