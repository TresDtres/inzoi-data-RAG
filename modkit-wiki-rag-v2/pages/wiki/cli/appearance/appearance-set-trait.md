---
document_id: "0bccfa5e47a8579b2dfba8563a05e16d87d5efc2468fb66650ce7ebc5bb33b2b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-trait"
title: "appearance.set_trait"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:46+00:00"
content_sha256: "efddc0adba55dbbffcd9b41d41cd1af522458c8bdd069c7894aacd94bffa6ebb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-trait"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set personality and two characteristic traits for a Zoi.

# Metadata

| FieldValueDisplaySet TraitCategory`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetTrait`, `zoi.set_trait` |
| --- |
| DisplaySet TraitCategory`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetTrait`, `zoi.set_trait` |
| Category`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetTrait`, `zoi.set_trait` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetTrait`, `zoi.set_trait` |
| Scope`B2Authority`Tags—Aliases`SetTrait`, `zoi.set_trait` |
| Tags—Aliases`SetTrait`, `zoi.set_trait` |
| Aliases`SetTrait`, `zoi.set_trait` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)personalitynameyes—Personality idchar1nameyes—First characteristic idchar2nameyes—Second characteristic id |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)personalitynameyes—Personality idchar1nameyes—First characteristic idchar2nameyes—Second characteristic id |
| personalitynameyes—Personality idchar1nameyes—First characteristic idchar2nameyes—Second characteristic id |
| char1nameyes—First characteristic idchar2nameyes—Second characteristic id |
| char2nameyes—Second characteristic id |

# Usage

```
await inzoi.cli.execute('appearance.set_trait', {  entity_id: 0, // optional  personality: '',  char1: '',  char2: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)
