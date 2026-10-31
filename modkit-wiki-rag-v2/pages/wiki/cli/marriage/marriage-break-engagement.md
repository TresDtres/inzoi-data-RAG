---
document_id: "a02ef27e9518814fceaf2bd47c41e1631788fb9df7fed5dc1e0f2fa78a3df2ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-break-engagement"
title: "marriage.break_engagement"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:08+00:00"
content_sha256: "19124a7d1f5a1cec1d6b28115e1b6ac274b2ef5649aa2f9aa1092d336e93e3d7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/marriage/marriage-break-engagement"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Breaks an engagement (removes the 'engagement' relationship). If target_entity_id is omitted, the engaged partner is found automatically.

# Metadata

| FieldValueDisplayBreak EngagementCategory`marriage`Access`UserCheat`Scope`B2Authority`Tags—Aliases`marriage.disengage` |
| --- |
| DisplayBreak EngagementCategory`marriage`Access`UserCheat`Scope`B2Authority`Tags—Aliases`marriage.disengage` |
| Category`marriage`Access`UserCheat`Scope`B2Authority`Tags—Aliases`marriage.disengage` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`marriage.disengage` |
| Scope`B2Authority`Tags—Aliases`marriage.disengage` |
| Tags—Aliases`marriage.disengage` |
| Aliases`marriage.disengage` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID (default: possessed)target_entity_identityIdno—Engaged partner entity ID (optional; auto-detected if omitted) |
| --- |
| entity_identityIdno—Character entity ID (default: possessed)target_entity_identityIdno—Engaged partner entity ID (optional; auto-detected if omitted) |
| target_entity_identityIdno—Engaged partner entity ID (optional; auto-detected if omitted) |

# Usage

```
await inzoi.cli.execute('marriage.break_engagement', {  entity_id: 0, // optional  target_entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomarriage[marriage.divorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-divorce)[marriage.engage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-engage)[marriage.marry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-marry)
