---
document_id: "8f4eae6341f668b0cdadeccafd11f0366353db93de007b40ea5260ea49e5f4c2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/emotion/emotion-get-current"
title: "emotion.get_current"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:55+00:00"
content_sha256: "08e2f61bf4f7df23edbc1656d283da138382335ae66e9c9916bcf093af78fbe1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/emotion/emotion-get-current"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the current emotion type and level for the target character.

# Metadata

| FieldValueDisplayGet Current EmotionCategory`emotion`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Current EmotionCategory`emotion`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`emotion`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('emotion.get_current', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoemotion[emotion.list_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/emotion/emotion-list-all)[emotion.set](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/emotion/emotion-set)
