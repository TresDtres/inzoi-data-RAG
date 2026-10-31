---
document_id: "3782efe67d115ce8497d7556808ce9d6a99973ca24727755c9165ce2a96dcf96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi/zoi-freeze"
title: "zoi.freeze"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:23+00:00"
content_sha256: "547b2411b3b85433e4c76fa190e485bdbacd5c5b9874971b80a2ed5fde231b71"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi/zoi-freeze"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cancel current/queued interactions and disable autonomy. The character stays idle in place.

# Metadata

| FieldValueDisplayFreeze CharacterCategory`zoi`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayFreeze CharacterCategory`zoi`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`zoi`Access`Public`Scope`B2Authority`Tags—Aliases— |
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
await inzoi.cli.execute('zoi.freeze', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi[zoi.destroy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi/zoi-destroy)
