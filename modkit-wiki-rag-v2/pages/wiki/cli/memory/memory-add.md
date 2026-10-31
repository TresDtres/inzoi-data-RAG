---
document_id: "2dd734b3d884f54b6a9aa3745636ff5be2bc5a5440a0b7c3444a50dbc9312b31"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add"
title: "memory.add"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:18+00:00"
content_sha256: "666c7a4d67c54e9d8ae57b804706bc86bc86b4825520abe1449e2e90319fe289"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-add"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds a memory (social context) about target_entity_id to the owner character.

# Metadata

| FieldValueDisplayAdd MemoryCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd MemoryCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner entity ID (default: possessed)memory_dt_idnameyes—Memory data table ID to addtarget_entity_identityIdyes—Entity the memory is about |
| --- |
| entity_identityIdno—Owner entity ID (default: possessed)memory_dt_idnameyes—Memory data table ID to addtarget_entity_identityIdyes—Entity the memory is about |
| memory_dt_idnameyes—Memory data table ID to addtarget_entity_identityIdyes—Entity the memory is about |
| target_entity_identityIdyes—Entity the memory is about |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('memory.add', {  entity_id: 0, // optional  memory_dt_id: '',  target_entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
