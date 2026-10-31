---
document_id: "9ff2c64e9ae01c13e2e57202f40eb97b2494803f7e9363419af92786dddc1f4c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1disasterdataasset"
title: "UB1DisasterDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:22+00:00"
content_sha256: "eb433c80cf771dd166eb897bbcd1e28614f9e10dfbefb31462d71dcdfcaf90fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1disasterdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset that stores global disaster timing and recovery configuration parameters.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (4)

| NameTypeDescription`DisasterTriggerBlockedDayOfWeeks``table<EB1DayOfWeek, boolean>`Days of week when disaster triggers are blocked.`DisasterTriggerHourBegin``integer`Starting hour of the daily window during which disasters may be triggered (e.g., 9 means disasters can start from 9:00).`DisasterTriggerHourEnd``integer`Ending hour of the daily window during which disasters may be triggered (e.g., 15 means disasters can start until 15:00).`RecoveryScheduledDays``integer`Number of in-game days scheduled for disaster recovery after it ends. |
| --- |
| `DisasterTriggerBlockedDayOfWeeks``table<EB1DayOfWeek, boolean>`Days of week when disaster triggers are blocked.`DisasterTriggerHourBegin``integer`Starting hour of the daily window during which disasters may be triggered (e.g., 9 means disasters can start from 9:00).`DisasterTriggerHourEnd``integer`Ending hour of the daily window during which disasters may be triggered (e.g., 15 means disasters can start until 15:00).`RecoveryScheduledDays``integer`Number of in-game days scheduled for disaster recovery after it ends. |
| `DisasterTriggerHourBegin``integer`Starting hour of the daily window during which disasters may be triggered (e.g., 9 means disasters can start from 9:00).`DisasterTriggerHourEnd``integer`Ending hour of the daily window during which disasters may be triggered (e.g., 15 means disasters can start until 15:00).`RecoveryScheduledDays``integer`Number of in-game days scheduled for disaster recovery after it ends. |
| `DisasterTriggerHourEnd``integer`Ending hour of the daily window during which disasters may be triggered (e.g., 15 means disasters can start until 15:00).`RecoveryScheduledDays``integer`Number of in-game days scheduled for disaster recovery after it ends. |
| `RecoveryScheduledDays``integer`Number of in-game days scheduled for disaster recovery after it ends. |
