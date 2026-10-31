---
document_id: "21ae2a967f235400f2f11922d81ce7bbab96ae2a20d75944fd441a521bebdaa2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-temperaturerange"
title: "Condition_TemperatureRange"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:00+00:00"
content_sha256: "bfe02cf7fce6a3cd6efae8d60cd70140f153fdda3d547a7a0711e0f22d626c01"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-temperaturerange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current temperature range satisfies the comparison against the specified range value.

# Parameters

| ParameterDescriptionBaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1The temperature range to compare against (EB1TemperatureRange: Freezing, Cold, Cool, Mild, Warm, Burning, Heatwave). |
| --- |
| BaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1The temperature range to compare against (EB1TemperatureRange: Freezing, Cold, Cool, Mild, Warm, Burning, Heatwave). |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual.S1The temperature range to compare against (EB1TemperatureRange: Freezing, Cold, Cool, Mild, Warm, Burning, Heatwave). |
| S1The temperature range to compare against (EB1TemperatureRange: Freezing, Cold, Cool, Mild, Warm, Burning, Heatwave). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the current temperature range is ColdSelfTemperatureRangeEqualCheck if the temperature is Warm or higherSelfTemperatureRangeGreaterOrEqualCheck if the temperature is not FreezingSelfTemperatureRangeNotEqualCheck if the temperature is below MildSelfTemperatureRangeLess |
| --- |
| Check if the current temperature range is ColdSelfTemperatureRangeEqualCheck if the temperature is Warm or higherSelfTemperatureRangeGreaterOrEqualCheck if the temperature is not FreezingSelfTemperatureRangeNotEqualCheck if the temperature is below MildSelfTemperatureRangeLess |
| Check if the temperature is Warm or higherSelfTemperatureRangeGreaterOrEqualCheck if the temperature is not FreezingSelfTemperatureRangeNotEqualCheck if the temperature is below MildSelfTemperatureRangeLess |
| Check if the temperature is not FreezingSelfTemperatureRangeNotEqualCheck if the temperature is below MildSelfTemperatureRangeLess |
| Check if the temperature is below MildSelfTemperatureRangeLess |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoTime, Weather & Season[DayOfTheWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-dayoftheweek)[IsWeekday](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekday)[IsWeekend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekend)[Season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-season)[Time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-time)[TimeRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-timerange)[Weather](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-weather)
