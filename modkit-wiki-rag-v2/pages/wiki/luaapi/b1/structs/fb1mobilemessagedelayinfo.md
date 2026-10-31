---
document_id: "5526168877b13b1a779375d049ae70096c4f6c87fbc7a351234474831ec19a07"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagedelayinfo"
title: "FB1MobileMessageDelayInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "db863c7e6089d842ecd991dd7230ddbdb1752cc47d333717b29435f0d0671a40"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagedelayinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime delay configuration for a mobile message, specifying when a delayed message should be sent. Includes probability, day-of-week filters, date offset, and time window for the delayed send.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`AddOffsetTime``integer`Random offset in minutes added to the start time to vary the exact send time.`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Specific day of the week on which the delayed message should be sent.`DelayDate``integer`Number of in-game days to delay before sending the message.`DelayProbability``number`Probability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.`EndTime``integer`End time of the window during which the delayed message may be sent (HHmm format).`IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| --- |
| `AddOffsetTime``integer`Random offset in minutes added to the start time to vary the exact send time.`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Specific day of the week on which the delayed message should be sent.`DelayDate``integer`Number of in-game days to delay before sending the message.`DelayProbability``number`Probability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.`EndTime``integer`End time of the window during which the delayed message may be sent (HHmm format).`IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Specific day of the week on which the delayed message should be sent.`DelayDate``integer`Number of in-game days to delay before sending the message.`DelayProbability``number`Probability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.`EndTime``integer`End time of the window during which the delayed message may be sent (HHmm format).`IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `DelayDate``integer`Number of in-game days to delay before sending the message.`DelayProbability``number`Probability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.`EndTime``integer`End time of the window during which the delayed message may be sent (HHmm format).`IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `DelayProbability``number`Probability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.`EndTime``integer`End time of the window during which the delayed message may be sent (HHmm format).`IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `EndTime``integer`End time of the window during which the delayed message may be sent (HHmm format).`IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `IsWeekday``boolean`Whether the delayed send is restricted to weekdays.`IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `IsWeekend``boolean`Whether the delayed send is restricted to weekends.`StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
| `StartTime``integer`Start time of the window during which the delayed message may be sent (HHmm format). |
