---
document_id: "4d8816db971eb07dc3bdb679443a581602386c0d394005de7b4f3aeeb05db32b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-gender"
title: "appearance.set_gender"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "5dcb5fa10fe8402b4dd3ca1fae8166802940be907b349ab66e1b6611ed81ce64"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-gender"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [side: visual+simulation] Transforms the character's visual appearance to the target gender, then syncs bio gender + voice via C_RefreshAppearance. B1Multicast: returns "dispatched" immediately (fire-and-forget); the change is not applied synchronously and is reflected by entity.get_character_info only after the refresh round-trip completes. Use bio.set_gender to change only the simulation-side gender.

# Metadata

| FieldValueDisplaySet GenderCategory`appearance`Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| --- |
| DisplaySet GenderCategory`appearance`Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| Category`appearance`Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| Scope`B1Multicast`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)genderstringyes—Gender: Male or Female |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)genderstringyes—Gender: Male or Female |
| genderstringyes—Gender: Male or Female |

# Usage

```
await inzoi.cli.execute('appearance.set_gender', {  entity_id: 0, // optional  gender: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.remove_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category)
