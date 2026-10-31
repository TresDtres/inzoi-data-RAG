---
document_id: "b4996ee7505bf09a10204720aef1b85e45304497014b2e55573e901149049ffa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addentitytag"
title: "Execute_AddEntityTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:06+00:00"
content_sha256: "5553a298bf16eb0577074b76ecc9616ca7786e7bb34e12967184fe91b632b5d8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addentitytag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a tag to the specified entity at runtime. The tag can optionally expire based on an ExpireRule specified in S2. If no ExpireRule is specified, it is treated as AfterMinutes.

# Note

Supported ExpireRules:

- AfterMinutes: tag expires after F1 minutes (max 1400 * 7).
- AfterDaysAt: tag expires at a specific time (F2 in hhmm) after F1 days. If the calculated time has already passed that day, it rolls to the next valid day.
- DayOfWeekAt: tag expires at a specific weekday (F1: 0=Monday ~ 6=Sunday) and time (F2 in hhmm). If the specified weekday+time has already passed, it rolls to the following week.

# Parameters

| ParameterDescriptionBaseObjectThe entity to which the tag will be addedS1The tag name to addS2ExpireRule: AfterMinutes, AfterDaysAt, or DayOfWeekAt. Defaults to AfterMinutes if omittedF1Value determined by ExpireRule (minutes, days, or day-of-week index)F2Additional value determined by ExpireRule (time in hhmm format) |
| --- |
| BaseObjectThe entity to which the tag will be addedS1The tag name to addS2ExpireRule: AfterMinutes, AfterDaysAt, or DayOfWeekAt. Defaults to AfterMinutes if omittedF1Value determined by ExpireRule (minutes, days, or day-of-week index)F2Additional value determined by ExpireRule (time in hhmm format) |
| S1The tag name to addS2ExpireRule: AfterMinutes, AfterDaysAt, or DayOfWeekAt. Defaults to AfterMinutes if omittedF1Value determined by ExpireRule (minutes, days, or day-of-week index)F2Additional value determined by ExpireRule (time in hhmm format) |
| S2ExpireRule: AfterMinutes, AfterDaysAt, or DayOfWeekAt. Defaults to AfterMinutes if omittedF1Value determined by ExpireRule (minutes, days, or day-of-week index)F2Additional value determined by ExpireRule (time in hhmm format) |
| F1Value determined by ExpireRule (minutes, days, or day-of-week index)F2Additional value determined by ExpireRule (time in hhmm format) |
| F2Additional value determined by ExpireRule (time in hhmm format) |

# Examples

| DescriptionBaseObjectCommandS1S2F1F2Add tag 'QWE' and keep it for 60 minutesSelfAddEntityTagQWE60Add tag 'QWE' expiring at 03:00 after 2 daysSelfAddEntityTagQWEAfterDaysAt20300Add tag 'QWE' expiring on Friday at 03:00SelfAddEntityTagQWEDayOfWeekAt40300 |
| --- |
| Add tag 'QWE' and keep it for 60 minutesSelfAddEntityTagQWE60Add tag 'QWE' expiring at 03:00 after 2 daysSelfAddEntityTagQWEAfterDaysAt20300Add tag 'QWE' expiring on Friday at 03:00SelfAddEntityTagQWEDayOfWeekAt40300 |
| Add tag 'QWE' expiring at 03:00 after 2 daysSelfAddEntityTagQWEAfterDaysAt20300Add tag 'QWE' expiring on Friday at 03:00SelfAddEntityTagQWEDayOfWeekAt40300 |
| Add tag 'QWE' expiring on Friday at 03:00SelfAddEntityTagQWEDayOfWeekAt40300 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject State & Tag[RemoveEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeentitytag)
