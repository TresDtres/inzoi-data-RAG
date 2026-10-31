---
document_id: "d835018684c18f032a30ddd810d62d25d2a91a791a43c1f8107a8648db4cb065"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/appearance/appearance-set-aptitudes"
title: "appearance.set_aptitudes"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:45+00:00"
content_sha256: "ffb7346d9100cc4defa3b40eb2add054fe05c974e5d361daa67a333df43f31dc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/appearance/appearance-set-aptitudes"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set the full aptitude trait list for a Zoi (comma-separated ids). Empty clears all aptitudes.

# Metadata

| FieldValueDisplaySet AptitudesCategory`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet AptitudesCategory`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`appearance`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)aptitudesstringno—Comma-separated aptitude trait ids. Empty string clears all. |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)aptitudesstringno—Comma-separated aptitude trait ids. Empty string clears all. |
| aptitudesstringno—Comma-separated aptitude trait ids. Empty string clears all. |

# Usage

```
await inzoi.cli.execute('appearance.set_aptitudes', {  entity_id: 0, // optional  aptitudes: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
