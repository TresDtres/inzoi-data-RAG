---
document_id: "ad7a2efe1f0431b94478eab71000b80753aa79443e97adc39c8081ec3c01603f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-leader"
title: "zoi_group.set_leader"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:23+00:00"
content_sha256: "6e032102a969c38c4e291604d99eb2ee71334204d40107f00cc2571c182fea19"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi-group/zoi-group-set-leader"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Changes the leader of the Zoi group to the specified character. The character must already be a member of the group.

# Metadata

| FieldValueDisplaySet Group LeaderCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Group LeaderCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Entity ID of the new leader |
| --- |
| entity_identityIdyes—Entity ID of the new leader |

# Usage

```
await inzoi.cli.execute('zoi_group.set_leader', {  entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi-group[zoi_group.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-add-member)[zoi_group.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-create)[zoi_group.disband](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-disband)[zoi_group.follow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-follow)[zoi_group.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-get-info)[zoi_group.move_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-move-to)[zoi_group.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-remove-member)[zoi_group.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-option)
