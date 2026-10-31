---
document_id: "680e483a874a83affdadc1c23302375a8dedf865a438e72aab991eb5a6fcd3c5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-weather"
title: "Condition_Weather"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:02+00:00"
content_sha256: "c120f2982305f528396b7103fcc7a857b703b606e6f3a3c88b273293cdd6a559"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-weather"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current weather matches the specified weather ID and optionally a specific weather step. When S2 is "ExcludeUserEdit", weather overridden by user via City Edit is excluded from matching.

# Parameters

| ParameterDescriptionBaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual.S1The row ID of the weather to check against (FB1WeatherTableRow, see Weather.json).S2(Optional) "ExcludeUserEdit" to ignore user-edited weather (City Edit). If omitted, any weather source matches.F1The weather step to compare. If not provided (0), only the weather type is checked without step comparison. |
| --- |
| BaseObjectThe object used as the context for this condition check.CompareTypeSupported compare types: Equal, NotEqual.S1The row ID of the weather to check against (FB1WeatherTableRow, see Weather.json).S2(Optional) "ExcludeUserEdit" to ignore user-edited weather (City Edit). If omitted, any weather source matches.F1The weather step to compare. If not provided (0), only the weather type is checked without step comparison. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The row ID of the weather to check against (FB1WeatherTableRow, see Weather.json).S2(Optional) "ExcludeUserEdit" to ignore user-edited weather (City Edit). If omitted, any weather source matches.F1The weather step to compare. If not provided (0), only the weather type is checked without step comparison. |
| S1The row ID of the weather to check against (FB1WeatherTableRow, see Weather.json).S2(Optional) "ExcludeUserEdit" to ignore user-edited weather (City Edit). If omitted, any weather source matches.F1The weather step to compare. If not provided (0), only the weather type is checked without step comparison. |
| S2(Optional) "ExcludeUserEdit" to ignore user-edited weather (City Edit). If omitted, any weather source matches.F1The weather step to compare. If not provided (0), only the weather type is checked without step comparison. |
| F1The weather step to compare. If not provided (0), only the weather type is checked without step comparison. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS2Check if the current weather is cloudySelfWeatherEqualCheck if the current weather is Cloud step 1SelfWeatherEqualCheck if the current weather is not cloudySelfWeatherNotEqualCheck if the current weather is rainy (exclude user-edited weather)SelfWeatherEqualExcludeUserEdit |
| --- |
| Check if the current weather is cloudySelfWeatherEqualCheck if the current weather is Cloud step 1SelfWeatherEqualCheck if the current weather is not cloudySelfWeatherNotEqualCheck if the current weather is rainy (exclude user-edited weather)SelfWeatherEqualExcludeUserEdit |
| Check if the current weather is Cloud step 1SelfWeatherEqualCheck if the current weather is not cloudySelfWeatherNotEqualCheck if the current weather is rainy (exclude user-edited weather)SelfWeatherEqualExcludeUserEdit |
| Check if the current weather is not cloudySelfWeatherNotEqualCheck if the current weather is rainy (exclude user-edited weather)SelfWeatherEqualExcludeUserEdit |
| Check if the current weather is rainy (exclude user-edited weather)SelfWeatherEqualExcludeUserEdit |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoTime, Weather & Season[DayOfTheWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-dayoftheweek)[IsWeekday](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekday)[IsWeekend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isweekend)[Season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-season)[TemperatureRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-temperaturerange)[Time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-time)[TimeRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-timerange)
