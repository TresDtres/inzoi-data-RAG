---
document_id: "6aca6b1156f0eb871c40bea3813de67c83f516d4a60ed21085755daf0596d63e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-level"
title: "household_biz.set_level"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "5738a6129af73ec50243de882e73ee6576e8a9664f31f5a568748b3f9e4f9ccb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-level"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Directly sets a household business's level.

# Metadata

| FieldValueDisplaySet Business LevelCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Business LevelCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionlevelintyes—New business levelhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| levelintyes—New business levelhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_level', {  level: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
