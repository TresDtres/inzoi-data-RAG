---
document_id: "c8a1ba361c012f890cf6f43d6b7c245a6a25c5281666b06b2a0e8a316c381fa5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-timerange"
title: "Condition_TimeRange"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:01+00:00"
content_sha256: "1aa9edd94f975cb707a5f79fbec6eb5b7da89959bc1e56bc6b43932be43f8610"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-timerange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current in-game time is within the given time range expressed as HHMM integers (0000 ~ 2359). If F1 <= F2, the range is treated as a normal same-day range (e.g., 0800 ~ 1700). If F1 > F2, the range is treated as an overnight range that wraps across midnight (e.g., 2300 ~ 0400).

# Parameters

| ParameterDescriptionBaseObjectNot used.CompareTypeSupported compare types: Equal, NotEqualF1Begin time expressed as HHMM integer (0000 ~ 2359)F2End time expressed as HHMM integer (0000 ~ 2359) |
| --- |
| BaseObjectNot used.CompareTypeSupported compare types: Equal, NotEqualF1Begin time expressed as HHMM integer (0000 ~ 2359)F2End time expressed as HHMM integer (0000 ~ 2359) |
| CompareTypeSupported compare types: Equal, NotEqualF1Begin time expressed as HHMM integer (0000 ~ 2359)F2End time expressed as HHMM integer (0000 ~ 2359) |
| F1Begin time expressed as HHMM integer (0000 ~ 2359)F2End time expressed as HHMM integer (0000 ~ 2359) |
| F2End time expressed as HHMM integer (0000 ~ 2359) |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks whether the current time is between 08:00 and 17:00.TimeRangeEqual8001700Checks whether the current time is outside the range 09:00 ~ 18:00.TimeRangeNotEqual9001800Checks whether the current time is between 23:00 and 04:00.TimeRangeEqual2300400 |
| --- |
| Checks whether the current time is between 08:00 and 17:00.TimeRangeEqual8001700Checks whether the current time is outside the range 09:00 ~ 18:00.TimeRangeNotEqual9001800Checks whether the current time is between 23:00 and 04:00.TimeRangeEqual2300400 |
| Checks whether the current time is outside the range 09:00 ~ 18:00.TimeRangeNotEqual9001800Checks whether the current time is between 23:00 and 04:00.TimeRangeEqual2300400 |
| Checks whether the current time is between 23:00 and 04:00.TimeRangeEqual2300400 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoTime, Weather & Season[DayOfTheWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-dayoftheweek)[IsWeekday](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekday)[IsWeekend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekend)[Season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-season)[TemperatureRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-temperaturerange)[Time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-time)[Weather](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-weather)
