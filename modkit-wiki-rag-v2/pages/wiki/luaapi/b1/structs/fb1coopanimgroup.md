---
document_id: "5f238a3fcbc2cbb8699bf2eb57c2b51ed45506ac70f42fe7419e34873a8133e7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1coopanimgroup"
title: "FB1CoopAnimGroup"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:33+00:00"
content_sha256: "dd9954b445f8ddca633c2e4709f205c315ec73cfeab9e5ab677fb722e0f5894a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1coopanimgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Anim group for coop talk animation pools. Each group declares the (host, target) character condition it applies to (4 filters), and the anim entries to use for that condition. Default = wildcard. Real characters never evaluate to Default, so Default works as an "any" filter. Matching priority: (1) filter pass, (2) only groups with the maximum specific-count are kept, (3) weighted random across AnimEntries.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`AnimEntries``FB1RandomAnimInfo[]`Anim entries that apply to this (host, target) combination.`HostBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Host character's body-age filter. Default = Any.`HostGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Host character's gender filter. Default = Any.`TargetBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Target character's body-age filter. Default = Any.`TargetGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Target character's gender filter. Default = Any. |
| --- |
| `AnimEntries``FB1RandomAnimInfo[]`Anim entries that apply to this (host, target) combination.`HostBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Host character's body-age filter. Default = Any.`HostGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Host character's gender filter. Default = Any.`TargetBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Target character's body-age filter. Default = Any.`TargetGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Target character's gender filter. Default = Any. |
| `HostBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Host character's body-age filter. Default = Any.`HostGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Host character's gender filter. Default = Any.`TargetBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Target character's body-age filter. Default = Any.`TargetGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Target character's gender filter. Default = Any. |
| `HostGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Host character's gender filter. Default = Any.`TargetBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Target character's body-age filter. Default = Any.`TargetGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Target character's gender filter. Default = Any. |
| `TargetBodyAgeFilter`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Target character's body-age filter. Default = Any.`TargetGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Target character's gender filter. Default = Any. |
| `TargetGenderFilter`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Target character's gender filter. Default = Any. |
