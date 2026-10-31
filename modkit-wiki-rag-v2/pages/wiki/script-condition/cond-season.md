---
document_id: "f0fa43f0281975c1535ac312b60c8d4309489c19ea98d8b219297331bc86a6b9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-season"
title: "Condition_Season"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:58+00:00"
content_sha256: "76e90df2d11d310446f0c049da22fe6a8ff0934a2a1ea80aad756dc8b802f647"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-season"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current in-game season matches the specified season value.

# Parameters

| ParameterDescriptionBaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual.S1The season name to compare against (EB1SeasonType: Spring, Summer, Autumn, Winter). |
| --- |
| BaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual.S1The season name to compare against (EB1SeasonType: Spring, Summer, Autumn, Winter). |
| CompareTypeSupported compare types: Equal, NotEqual.S1The season name to compare against (EB1SeasonType: Spring, Summer, Autumn, Winter). |
| S1The season name to compare against (EB1SeasonType: Spring, Summer, Autumn, Winter). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the current season is SpringSelfSeasonEqualCheck if the current season is SummerSelfSeasonEqualCheck if the current season is not WinterSelfSeasonNotEqualCheck if the current season is AutumnTargetSeasonEqual |
| --- |
| Check if the current season is SpringSelfSeasonEqualCheck if the current season is SummerSelfSeasonEqualCheck if the current season is not WinterSelfSeasonNotEqualCheck if the current season is AutumnTargetSeasonEqual |
| Check if the current season is SummerSelfSeasonEqualCheck if the current season is not WinterSelfSeasonNotEqualCheck if the current season is AutumnTargetSeasonEqual |
| Check if the current season is not WinterSelfSeasonNotEqualCheck if the current season is AutumnTargetSeasonEqual |
| Check if the current season is AutumnTargetSeasonEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoTime, Weather & Season[DayOfTheWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-dayoftheweek)[IsWeekday](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekday)[IsWeekend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekend)[TemperatureRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-temperaturerange)[Time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-time)[TimeRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-timerange)[Weather](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-weather)
