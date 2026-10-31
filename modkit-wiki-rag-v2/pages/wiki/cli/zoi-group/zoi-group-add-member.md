---
document_id: "c5bc93f83bbe767696e83b08b75425a35a19f904c329be135464f9b436fd4c90"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-add-member"
title: "zoi_group.add_member"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:22+00:00"
content_sha256: "c9d02809fc981c82a747baaf02f2e4326fa1e20c9d8165d7043a47b21a4cdecf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi-group/zoi-group-add-member"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds a character to an existing Zoi group. Specify which group by providing a current member's entity_id.

# Metadata

| FieldValueDisplayAdd Group MemberCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd Group MemberCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Character entity ID to add to the groupgroup_member_entity_identityIdno—Any existing member of the target group (default: possessed) |
| --- |
| entity_identityIdyes—Character entity ID to add to the groupgroup_member_entity_identityIdno—Any existing member of the target group (default: possessed) |
| group_member_entity_identityIdno—Any existing member of the target group (default: possessed) |

# Usage

```
await inzoi.cli.execute('zoi_group.add_member', {  entity_id: 0,  group_member_entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi-group[zoi_group.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-create)[zoi_group.disband](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-disband)[zoi_group.follow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-follow)[zoi_group.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-get-info)[zoi_group.move_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-move-to)[zoi_group.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-remove-member)[zoi_group.set_leader](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-leader)[zoi_group.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-option)
