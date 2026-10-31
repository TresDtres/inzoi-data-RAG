---
document_id: "2822b09b2d88cbef2ed0ec1a3940aeb8f4628022c5ee8f1b671520fd806ebc14"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve"
title: "memory.solve"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:20+00:00"
content_sha256: "db479476d73537d86485e1211e9e7e9695b0a23a1ba6f8fe452005e680a2d745"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-solve"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Marks the social context with target_entity_id as solved. expired=true treats it as a cooltime expiration.

# Metadata

| FieldValueDisplaySolve MemoryCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySolve MemoryCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner entity ID (default: possessed)target_entity_identityIdyes—Target entity of the social context to solveexpiredboolnofalseSolve by time expiration (default: false) |
| --- |
| entity_identityIdno—Owner entity ID (default: possessed)target_entity_identityIdyes—Target entity of the social context to solveexpiredboolnofalseSolve by time expiration (default: false) |
| target_entity_identityIdyes—Target entity of the social context to solveexpiredboolnofalseSolve by time expiration (default: false) |
| expiredboolnofalseSolve by time expiration (default: false) |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('memory.solve', {  entity_id: 0, // optional  target_entity_id: 0,  expired: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)
