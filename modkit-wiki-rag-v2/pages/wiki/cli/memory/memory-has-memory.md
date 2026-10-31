---
document_id: "968eceba4ca35e4f160803a30274dc9cba89f93f0e1b5a6136ca81fd531e740d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory"
title: "memory.has_memory"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:19+00:00"
content_sha256: "1a244262b6c46e2ccb75d6e8c27701c68b009030e6b308acbd87a06ccde4c755"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-has-memory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Checks whether the target character has a memory. If target_entity_id is given, checks the latest memory with that target.

# Metadata

| FieldValueDisplayHas MemoryCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayHas MemoryCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner entity ID (default: possessed)memory_dt_idnameyes—Memory data table ID to checktarget_entity_identityIdno—Optional: restrict to memory with this target |
| --- |
| entity_identityIdno—Owner entity ID (default: possessed)memory_dt_idnameyes—Memory data table ID to checktarget_entity_identityIdno—Optional: restrict to memory with this target |
| memory_dt_idnameyes—Memory data table ID to checktarget_entity_identityIdno—Optional: restrict to memory with this target |
| target_entity_identityIdno—Optional: restrict to memory with this target |

# Returns

Returns a JSON object with the following fields:

| FieldTypeRequiredDescription`entity_id`entityIdyesOwner entity id`memory_dt_id`stringyesMemory data table id checked`has_memory`boolyesWhether the memory exists |
| --- |
| `entity_id`entityIdyesOwner entity id`memory_dt_id`stringyesMemory data table id checked`has_memory`boolyesWhether the memory exists |
| `memory_dt_id`stringyesMemory data table id checked`has_memory`boolyesWhether the memory exists |
| `has_memory`boolyesWhether the memory exists |

# Usage

```
await inzoi.cli.execute('memory.has_memory', {  entity_id: 0, // optional  memory_dt_id: '',  target_entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
