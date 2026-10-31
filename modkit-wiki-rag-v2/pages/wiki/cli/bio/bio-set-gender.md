---
document_id: "f9b5ba070cc0195060723c0774600f4997c4cc864737759c7edb4934d534dedb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/bio/bio-set-gender"
title: "bio.set_gender"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:47+00:00"
content_sha256: "884d0f9add29554378d0cae2792cd57140d5dd556ed3961e3cebe213fb6f4d00"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/bio/bio-set-gender"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [side: simulation] Updates only the simulation-side gender in FB2BioComponent. B2Authority: applied synchronously. Does NOT change the visual appearance and is NOT reflected by entity.get_character_info (which reads appearance gender). Use appearance.set_gender to change the visible gender.

# Metadata

| FieldValueDisplaySet Bio GenderCategory`bio`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Bio GenderCategory`bio`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`bio`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)genderstringyes—Gender: Male or Female |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)genderstringyes—Gender: Male or Female |
| genderstringyes—Gender: Male or Female |

# Usage

```
await inzoi.cli.execute('bio.set_gender', {  entity_id: 0, // optional  gender: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
