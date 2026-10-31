---
document_id: "bb3e9f584ffb7ea356544a939c1a72c4a5fe964e4cac49e1a6639677b0cc6094"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-work-time"
title: "household_biz.set_work_time"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "3b03716b719938e38a06180120b12b65a3d47809a2ab1808cc00fa21d4848983"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-work-time"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the daily operating start/end time (HHMM, e.g. 900, 1800) for a household business.

# Metadata

| FieldValueDisplaySet Work TimeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Work TimeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionstart_hhmmintyes—Work start time (HHMM)end_hhmmintyes—Work end time (HHMM)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| start_hhmmintyes—Work start time (HHMM)end_hhmmintyes—Work end time (HHMM)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| end_hhmmintyes—Work end time (HHMM)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_work_time', {  start_hhmm: 0,  end_hhmm: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
