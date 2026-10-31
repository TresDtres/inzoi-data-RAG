---
document_id: "321db416859ad551f1d15974cfa463f5e06a9d9dbaac33ea2dc47bc7c8109415"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-remove-member"
title: "zoi_group.remove_member"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:23+00:00"
content_sha256: "d5db8290112994361c8e9dd0232466dae1029db15abc43a400b0ade2dd90c6eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi-group/zoi-group-remove-member"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Removes a character from their Zoi group. If only 1 member remains, the group is automatically disbanded.

# Metadata

| FieldValueDisplayRemove Group MemberCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayRemove Group MemberCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Character entity ID to remove from the group |
| --- |
| entity_identityIdyes—Character entity ID to remove from the group |

# Usage

```
await inzoi.cli.execute('zoi_group.remove_member', {  entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi-group[zoi_group.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-add-member)[zoi_group.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-create)[zoi_group.disband](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-disband)[zoi_group.follow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-follow)[zoi_group.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-get-info)[zoi_group.move_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-move-to)[zoi_group.set_leader](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-leader)[zoi_group.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-option)
