---
document_id: "65d6c4ab7248e46e30efcb226db4d984915ab129651ee7f62471a3c181b55d90"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-move-to"
title: "zoi_group.move_to"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:23+00:00"
content_sha256: "660334876bdfb7b8deb1be7b16e5c18495c5389db15771caa3aecc7d6686dcd6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/zoi-group/zoi-group-move-to"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Makes the entire Zoi group walk together to a destination site. Members gather near the leader first, then move as a group. Far members are auto-teleported.

# Metadata

| FieldValueDisplayGroup Move ToCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGroup Move ToCategory`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`zoi_group`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Any group member entity ID (default: possessed)destinationstringyes—Destination site ID |
| --- |
| entity_identityIdno—Any group member entity ID (default: possessed)destinationstringyes—Destination site ID |
| destinationstringyes—Destination site ID |

# Usage

```
await inzoi.cli.execute('zoi_group.move_to', {  entity_id: 0, // optional  destination: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsozoi-group[zoi_group.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-add-member)[zoi_group.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-create)[zoi_group.disband](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-disband)[zoi_group.follow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-follow)[zoi_group.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-get-info)[zoi_group.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-remove-member)[zoi_group.set_leader](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-leader)[zoi_group.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/zoi-group/zoi-group-set-option)
