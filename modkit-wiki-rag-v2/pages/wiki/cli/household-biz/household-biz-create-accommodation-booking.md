---
document_id: "a9619d9f93ae4213a034650d987a05460e9e1be0aa01eaf1a9dfee66d5ef475f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-create-accommodation-booking"
title: "household_biz.create_accommodation_booking"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "587d07aaffc6fa77b694db3feecf7e0dc31119cb75b5ea06451408043e999ea3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-create-accommodation-booking"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Creates a booking for an accommodation room owned by a household business. The booking reserves the room for the guest list.

# Metadata

| FieldValueDisplayCreate Accommodation BookingCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayCreate Accommodation BookingCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionaccommodation_dt_idnameyes—Accommodation data table row idroom_purpose_idnameyes—Room purpose idguest_entity_idsstringyes—Comma-separated guest entity idsstay_daysintno1Number of stay days (default: 1)household_biz_identityIdno—Target HouseholdBiz entity id (default: first guest's located site) |
| --- |
| accommodation_dt_idnameyes—Accommodation data table row idroom_purpose_idnameyes—Room purpose idguest_entity_idsstringyes—Comma-separated guest entity idsstay_daysintno1Number of stay days (default: 1)household_biz_identityIdno—Target HouseholdBiz entity id (default: first guest's located site) |
| room_purpose_idnameyes—Room purpose idguest_entity_idsstringyes—Comma-separated guest entity idsstay_daysintno1Number of stay days (default: 1)household_biz_identityIdno—Target HouseholdBiz entity id (default: first guest's located site) |
| guest_entity_idsstringyes—Comma-separated guest entity idsstay_daysintno1Number of stay days (default: 1)household_biz_identityIdno—Target HouseholdBiz entity id (default: first guest's located site) |
| stay_daysintno1Number of stay days (default: 1)household_biz_identityIdno—Target HouseholdBiz entity id (default: first guest's located site) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: first guest's located site) |

# Usage

```
await inzoi.cli.execute('household_biz.create_accommodation_booking', {  accommodation_dt_id: '',  room_purpose_id: '',  guest_entity_ids: '',  stay_days: 1, // optional  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
