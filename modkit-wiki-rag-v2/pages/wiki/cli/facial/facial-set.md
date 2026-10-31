---
document_id: "c9387f7c3df043c092f29931a4c64739d49228fd7c3392d98fa153223256d9fa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/facial/facial-set"
title: "facial.set"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "bb5a6c2ae0d6a96df944705c47eb8241d4772352e35edb5276f2713c3b0b6769"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/facial/facial-set"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the visual facial expression on a B1 character.

# Metadata

| FieldValueDisplaySet Facial ExpressionCategory`facial`Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| --- |
| DisplaySet Facial ExpressionCategory`facial`Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| Category`facial`Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Multicast`Tags—Aliases— |
| Scope`B1Multicast`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)expressionnameyes—Facial expression row name |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)expressionnameyes—Facial expression row name |
| expressionnameyes—Facial expression row name |

# Usage

```
await inzoi.cli.execute('facial.set', {  entity_id: 0, // optional  expression: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsofacial[facial.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/facial/facial-list)
