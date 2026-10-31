---
document_id: "35d4d9e3b2088f0b02318c82bbec61fe84ac70ad3ca7a9d5c16a428b551810bb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-remove-outfit-category"
title: "appearance.remove_outfit_category"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:44+00:00"
content_sha256: "83b908b3f7bfc71809a313e94b73c260ddfc53025182c9248aeadcf0483fe9b6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-remove-outfit-category"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Removes an active outfit overlay for a specific category, reverting to the base outfit. Use appearance.get_outfit_category to see active overlays.

# Metadata

| FieldValueDisplayRemove Outfit CategoryCategory`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayRemove Outfit CategoryCategory`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID (default: possessed)categorystringyes—Outfit category to remove: Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter |
| --- |
| entity_identityIdno—Character entity ID (default: possessed)categorystringyes—Outfit category to remove: Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter |
| categorystringyes—Outfit category to remove: Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter |

# Usage

```
await inzoi.cli.execute('appearance.remove_outfit_category', {  entity_id: 0, // optional  category: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoappearance[appearance.beard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-beard)[appearance.custom](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-custom)[appearance.eyebrow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-eyebrow)[appearance.get_outfit_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-get-outfit-category)[appearance.glasses](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-glasses)[appearance.gloves](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-gloves)[appearance.hair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hair)[appearance.hat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-hat)[appearance.jacket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-jacket)[appearance.list_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-list-options)[appearance.mustache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-mustache)[appearance.scan_garments](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-scan-garments)
