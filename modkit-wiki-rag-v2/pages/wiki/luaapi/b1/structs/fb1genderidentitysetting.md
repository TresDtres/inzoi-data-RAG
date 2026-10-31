---
document_id: "44e916f1a91200ebfef13cd24e0c722b895a66130ee08718240a2a82cbe15a00"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1genderidentitysetting"
title: "FB1GenderIdentitySetting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:04+00:00"
content_sha256: "7e556ceac03aac91368f03a2123baef4c25f0e3d1b02d832abba27249105e6d3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1genderidentitysetting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores a character's gender identity and their romantic orientation settings, including whether they engage in romance and which gender identities they target.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`GenderIdentity`[`EB1GenderIdentity`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1genderidentity)Gender identity of this character.`RomanceTargetList``table<EB1GenderIdentity, boolean>`Set of gender identities this character can pursue romance with.`bRomanticOrientation``boolean`Whether this character participates in romantic interactions. |
| --- |
| `GenderIdentity`[`EB1GenderIdentity`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1genderidentity)Gender identity of this character.`RomanceTargetList``table<EB1GenderIdentity, boolean>`Set of gender identities this character can pursue romance with.`bRomanticOrientation``boolean`Whether this character participates in romantic interactions. |
| `RomanceTargetList``table<EB1GenderIdentity, boolean>`Set of gender identities this character can pursue romance with.`bRomanticOrientation``boolean`Whether this character participates in romantic interactions. |
| `bRomanticOrientation``boolean`Whether this character participates in romantic interactions. |
