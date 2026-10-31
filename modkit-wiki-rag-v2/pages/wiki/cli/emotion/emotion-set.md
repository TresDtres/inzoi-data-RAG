---
document_id: "e50192458436f3016c797925dbead3de68a3cd2278a7bc670e71fbd4d3bbfa32"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/emotion/emotion-set"
title: "emotion.set"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:56+00:00"
content_sha256: "10cee65de7323da0f26b82d3b3fe6cb51f0be8ec179e9d69c9cb84bb7cb5b3ea"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/emotion/emotion-set"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the cheat emotion on the target character. Use 'Normal' or empty to clear. e.g. type=Happy level=3

# Metadata

| FieldValueDisplaySet EmotionCategory`emotion`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet EmotionCategory`emotion`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`emotion`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)typenameyes—Emotion type name (e.g. Happy, Sad, Normal)levelintno1Emotion level (default: 1) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)typenameyes—Emotion type name (e.g. Happy, Sad, Normal)levelintno1Emotion level (default: 1) |
| typenameyes—Emotion type name (e.g. Happy, Sad, Normal)levelintno1Emotion level (default: 1) |
| levelintno1Emotion level (default: 1) |

# Usage

```
await inzoi.cli.execute('emotion.set', {  entity_id: 0, // optional  type: '',  level: 1, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoemotion[emotion.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/emotion/emotion-get-current)[emotion.list_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/emotion/emotion-list-all)
