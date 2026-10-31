---
document_id: "97ca24a22cd5f89ca7b3a9ea9775ff7a0cc65d8437724c7172459d99f5677419"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-get-members"
title: "household.get_members"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "50e3604488f0e88ef463e209ede33706209cc749f6f26622e9daf52f7de2b085"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household/household-get-members"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all members of a household. If household_id is omitted, uses the possessed character's household.

# Metadata

| FieldValueDisplayGet Household MembersCategory`household`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Household MembersCategory`household`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionhousehold_identityIdno—Target household entity ID (default: possessed character's household) |
| --- |
| household_identityIdno—Target household entity ID (default: possessed character's household) |

# Usage

```
await inzoi.cli.execute('household.get_members', {  household_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohousehold[household.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-add-member)[household.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-create)[household.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-list)[household.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-possess)[household.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-remove-member)
