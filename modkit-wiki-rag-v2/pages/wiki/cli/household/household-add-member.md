---
document_id: "092819dd10455015467a42dda9b3403c7b2ebea650bb49c0322bf68ca9a6b5e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-add-member"
title: "household.add_member"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "83decb54d82679fc4e0c4bc88bdd7514f71e1c7d8a5e4bef5d8c9742d3d23a47"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household/household-add-member"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Transfer a character into the specified household. Removes from old household automatically.

# Metadata

| FieldValueDisplayAdd Household MemberCategory`household`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd Household MemberCategory`household`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Character entity ID to transferhousehold_identityIdno—Destination household entity ID (default: possessed character's household) |
| --- |
| entity_identityIdyes—Character entity ID to transferhousehold_identityIdno—Destination household entity ID (default: possessed character's household) |
| household_identityIdno—Destination household entity ID (default: possessed character's household) |

# Usage

```
await inzoi.cli.execute('household.add_member', {  entity_id: 0,  household_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohousehold[household.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-create)[household.get_members](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-get-members)[household.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-list)[household.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-possess)[household.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-remove-member)
