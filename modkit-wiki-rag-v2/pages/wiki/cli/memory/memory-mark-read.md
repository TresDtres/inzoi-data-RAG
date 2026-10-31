---
document_id: "2089004b79036c88c0a681fb66603055e3e08fde1a1b5cdb5e23e51b48c64f43"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read"
title: "memory.mark_read"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:19+00:00"
content_sha256: "4ba6bcde2666ef65add6f8efc4f814a5f16a6c04e3f69290cbdd26678439c42b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-mark-read"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Updates the last-read time so the unread memory count becomes zero.

# Metadata

| FieldValueDisplayMark Memories ReadCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayMark Memories ReadCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('memory.mark_read', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
