---
document_id: "101c859f80e5936897f6c7f6890c87e361b0d177448d47e845c69c55c2a96a60"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-list"
title: "household.list"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "732b5f8a31f067ed582e081fc5ed8045396d41056c3918936d06df783caa0ff2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household/household-list"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns households with member counts and residence info. Defaults to residential families only (bCanMoveIn=true and a residence site is connected). Pass include=all to include game-internal NPC households and households without a residence site.

# Metadata

| FieldValueDisplayList HouseholdsCategory`household`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayList HouseholdsCategory`household`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionlimitintno—Max households to return (default: 50)offsetintno—Skip first N households (default: 0)includestringno—Filter: residential (default, bCanMoveIn=true and residence site connected) or all |
| --- |
| limitintno—Max households to return (default: 50)offsetintno—Skip first N households (default: 0)includestringno—Filter: residential (default, bCanMoveIn=true and residence site connected) or all |
| offsetintno—Skip first N households (default: 0)includestringno—Filter: residential (default, bCanMoveIn=true and residence site connected) or all |
| includestringno—Filter: residential (default, bCanMoveIn=true and residence site connected) or all |

# Usage

```
await inzoi.cli.execute('household.list', {  limit: 0, // optional  offset: 0, // optional  include: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohousehold[household.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-add-member)[household.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-create)[household.get_members](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-get-members)[household.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-possess)[household.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-remove-member)
