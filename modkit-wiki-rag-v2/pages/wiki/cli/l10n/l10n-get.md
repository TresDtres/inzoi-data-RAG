---
document_id: "2f74d94da408a72af67c4ea978251983c982c4e5be8a7d094cbb73ba0775f702"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/l10n/l10n-get"
title: "l10n.get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:07+00:00"
content_sha256: "ef0db80404306b0ae3f26e03f5be976173f73e0a82acb93ae195cb8e99e0e469"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/l10n/l10n-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Resolves StringTable text IDs to localized strings. Pass 'key' for single or 'keys' (JSON array) for batch.

# Metadata

| FieldValueDisplayLocalize Text IDsCategory`l10n`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayLocalize Text IDsCategory`l10n`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`l10n`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionkeystringno—Single text ID to resolvekeysstringno—JSON array of text IDs, e.g. ["id1","id2"] |
| --- |
| keystringno—Single text ID to resolvekeysstringno—JSON array of text IDs, e.g. ["id1","id2"] |
| keysstringno—JSON array of text IDs, e.g. ["id1","id2"] |

# Usage

```
await inzoi.cli.execute('l10n.get', {  key: '', // optional  keys: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
