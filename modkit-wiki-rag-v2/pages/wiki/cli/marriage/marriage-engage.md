---
document_id: "c53a13cb533afd10585303432d6e05dbefc3026a266ca3e0a17b3fa3e43444ee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-engage"
title: "marriage.engage"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:09+00:00"
content_sha256: "8e5f7e3b60a35e53f1331d0b657004cfc2e2969e3036c134789efb4b24afa6bb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/marriage/marriage-engage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Instantly engage two characters (adds the 'engagement' relationship). Forced by default; pass guard=true to require IsLovable eligibility.

# Metadata

| FieldValueDisplayEngageCategory`marriage`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayEngageCategory`marriage`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`marriage`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character A entity ID (default: possessed)target_entity_identityIdyes—Character B entity IDguardboolnofalseIf true, require the pair to be lovable (eligible). Default false (force). |
| --- |
| entity_identityIdno—Character A entity ID (default: possessed)target_entity_identityIdyes—Character B entity IDguardboolnofalseIf true, require the pair to be lovable (eligible). Default false (force). |
| target_entity_identityIdyes—Character B entity IDguardboolnofalseIf true, require the pair to be lovable (eligible). Default false (force). |
| guardboolnofalseIf true, require the pair to be lovable (eligible). Default false (force). |

# Usage

```
await inzoi.cli.execute('marriage.engage', {  entity_id: 0, // optional  target_entity_id: 0,  guard: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomarriage[marriage.break_engagement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-break-engagement)[marriage.divorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-divorce)[marriage.marry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/marriage/marriage-marry)
