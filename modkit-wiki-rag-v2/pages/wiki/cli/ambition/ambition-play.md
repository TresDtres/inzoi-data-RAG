---
document_id: "fd33ee585d030f887344687803e6e7aec2b30fa7b8c7a33f2b13eb784304c848"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-play"
title: "ambition.play"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:43+00:00"
content_sha256: "9361c7564147649343aa3f6288a9a49936874dd6faa48d357dd4fcb0a460df78"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ambition/ambition-play"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Starts (sets) a specific ambition item on the target character. Forced by default (valid id only); pass guard=true to require playability (age/condition/not-completed/not-already-playing).

# Metadata

| FieldValueDisplayPlay AmbitionCategory`ambition`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayPlay AmbitionCategory`ambition`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`ambition`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)ambition_item_idnameyes—Ambition item ID to start (see ambition.get)guardboolnofalseIf true, require playability. Default false (force). |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)ambition_item_idnameyes—Ambition item ID to start (see ambition.get)guardboolnofalseIf true, require playability. Default false (force). |
| ambition_item_idnameyes—Ambition item ID to start (see ambition.get)guardboolnofalseIf true, require playability. Default false (force). |
| guardboolnofalseIf true, require playability. Default false (force). |

# Usage

```
await inzoi.cli.execute('ambition.play', {  entity_id: 0, // optional  ambition_item_id: '',  guard: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoambition[ambition.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-complete)[ambition.get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-get)
