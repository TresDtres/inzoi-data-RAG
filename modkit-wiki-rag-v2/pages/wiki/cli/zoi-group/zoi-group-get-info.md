---
document_id: "1f203125a0d55752ff71b93d35c06cdf3934a6f9def695827ed95e4c6169df8c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-get-info"
title: "zoi_group.get_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:23+00:00"
content_sha256: "1fe14163e29197bd08208eedd4ad04db7df1d3a3e7894873b1b999240a9fc840"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi-group/zoi-group-get-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns group information for the specified character: group_id, type, leader, all members with display names, and group options. Returns has_group=false if not in a group.

# Metadata

| FieldValueDisplayGet Zoi Group InfoCategory`zoi_group`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Zoi Group InfoCategory`zoi_group`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`zoi_group`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID (default: possessed) |
| --- |
| entity_identityIdno—Character entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('zoi_group.get_info', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi-group[zoi_group.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-add-member)[zoi_group.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-create)[zoi_group.disband](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-disband)[zoi_group.follow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-follow)[zoi_group.move_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-move-to)[zoi_group.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-remove-member)[zoi_group.set_leader](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-leader)[zoi_group.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-option)
