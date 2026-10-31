---
document_id: "e3bb553118f38252548c7ae2415f07411428c3190ced43949621cf80864613c4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/status-and-health/status-and-health-add-illness"
title: "status_and_health.add_illness"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:18+00:00"
content_sha256: "06a834f9c6e40aa7fa8dc4fed9c7bbc912ab3fe2c89c85e642edfaa29d1477c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/status-and-health/status-and-health-add-illness"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds the specified illness to the current character.

# Metadata

| FieldValueDisplayAdd IllnessCategory`status_and_health`Access`UserCheat`Scope`B2Authority`Tags—Aliases`AddIllness`, `health.add_illness` |
| --- |
| DisplayAdd IllnessCategory`status_and_health`Access`UserCheat`Scope`B2Authority`Tags—Aliases`AddIllness`, `health.add_illness` |
| Category`status_and_health`Access`UserCheat`Scope`B2Authority`Tags—Aliases`AddIllness`, `health.add_illness` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`AddIllness`, `health.add_illness` |
| Scope`B2Authority`Tags—Aliases`AddIllness`, `health.add_illness` |
| Tags—Aliases`AddIllness`, `health.add_illness` |
| Aliases`AddIllness`, `health.add_illness` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)illness_idnameyes—Illness ID to add |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)illness_idnameyes—Illness ID to add |
| illness_idnameyes—Illness ID to add |

# Usage

```
await inzoi.cli.execute('status_and_health.add_illness', {  entity_id: 0, // optional  illness_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsostatus-and-health[status_and_health.cure_illness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/status-and-health/status-and-health-cure-illness)
