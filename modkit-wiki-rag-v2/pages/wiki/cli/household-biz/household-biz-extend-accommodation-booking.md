---
document_id: "9c852a3035bd477410c461a39457713c5eaf1744a0dbd74f078224c9bbe2cd9f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-extend-accommodation-booking"
title: "household_biz.extend_accommodation_booking"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "a06f718c42cc77d3fe5a988a49e3bb3919b4a600a1ec452e2f4dfadd54630557"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-extend-accommodation-booking"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Extends the accommodation booking containing the specified guest.

# Metadata

| FieldValueDisplayExtend Accommodation BookingCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayExtend Accommodation BookingCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionguest_entity_identityIdyes—Any guest entity id in the bookingadditional_stay_daysintyes—Number of stay days to add |
| --- |
| guest_entity_identityIdyes—Any guest entity id in the bookingadditional_stay_daysintyes—Number of stay days to add |
| additional_stay_daysintyes—Number of stay days to add |

# Usage

```
await inzoi.cli.execute('household_biz.extend_accommodation_booking', {  guest_entity_id: 0,  additional_stay_days: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
