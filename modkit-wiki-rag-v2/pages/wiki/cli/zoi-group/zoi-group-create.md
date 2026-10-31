---
document_id: "b3945e201df356cb40285a2eae318b36ef7c16f7b11dd855397b0f166e77e520"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-create"
title: "zoi_group.create"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:22+00:00"
content_sha256: "30b32a8a721ad33dfacf4d9d3dc9e47e0c302779a5774c0ee67b54d94aab5164"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi-group/zoi-group-create"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Creates a new Zoi group with the specified leader and members. Members walk together, share activities, and can do group interactions.

# Metadata

| FieldValueDisplayCreate Zoi GroupCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayCreate Zoi GroupCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionleader_entity_identityIdno—Group leader entity ID (default: possessed)member_entity_idsstringyes—Comma-separated entity IDs to add as members (excluding leader)typestringnoDefaultGroup type: Default, Family, or Date |
| --- |
| leader_entity_identityIdno—Group leader entity ID (default: possessed)member_entity_idsstringyes—Comma-separated entity IDs to add as members (excluding leader)typestringnoDefaultGroup type: Default, Family, or Date |
| member_entity_idsstringyes—Comma-separated entity IDs to add as members (excluding leader)typestringnoDefaultGroup type: Default, Family, or Date |
| typestringnoDefaultGroup type: Default, Family, or Date |

# Usage

```
await inzoi.cli.execute('zoi_group.create', {  leader_entity_id: 0, // optional  member_entity_ids: '',  type: 'Default', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi-group[zoi_group.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-add-member)[zoi_group.disband](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-disband)[zoi_group.follow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-follow)[zoi_group.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-get-info)[zoi_group.move_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-move-to)[zoi_group.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-remove-member)[zoi_group.set_leader](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-leader)[zoi_group.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-option)
