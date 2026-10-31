---
document_id: "d1ca4b5bc598d0104b0e104a5e1d21470671e3eaa6b03be7bff353928938bcd5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2objectweatheringcomponent"
title: "FB2ObjectWeatheringComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:14+00:00"
content_sha256: "511934b90db376d658fed939c53c06503cc20df5232373bef769bbaafb3e3394"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/components/fb2objectweatheringcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

ingGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `OnDayOfWeekChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Day Of Week Changed.`RefreshWeathering``-``-``ResetStartTime``-``-`Resets Start Time.`SetCanWeathering`bEnable: `boolean``-`Sets Can Weathering.`SetWeatheringEnabledWithSiteId`InParentSiteId: `string``-`Sets Weathering Enabled With Site Id.`SetWeatheringGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `RefreshWeathering``-``-``ResetStartTime``-``-`Resets Start Time.`SetCanWeathering`bEnable: `boolean``-`Sets Can Weathering.`SetWeatheringEnabledWithSiteId`InParentSiteId: `string``-`Sets Weathering Enabled With Site Id.`SetWeatheringGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `ResetStartTime``-``-`Resets Start Time.`SetCanWeathering`bEnable: `boolean``-`Sets Can Weathering.`SetWeatheringEnabledWithSiteId`InParentSiteId: `string``-`Sets Weathering Enabled With Site Id.`SetWeatheringGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `SetCanWeathering`bEnable: `boolean``-`Sets Can Weathering.`SetWeatheringEnabledWithSiteId`InParentSiteId: `string``-`Sets Weathering Enabled With Site Id.`SetWeatheringGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `SetWeatheringEnabledWithSiteId`InParentSiteId: `string``-`Sets Weathering Enabled With Site Id.`SetWeatheringGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `SetWeatheringGrade`InGrade: `integer`, InRefreshing: `boolean``-`Sets Weathering Grade.`TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `TryNextGrade``-``-``UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `UpdateWeatheringValue``-``-`Updates Weathering Value. |

# Override points (5)

Implement these in Lua as `FB2ObjectWeatheringComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnDayOfWeekChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Day Of Week Changed.`Override_RefreshWeathering``-``-``Override_ResetStartTime``-``-`Resets Start Time.`Override_TryNextGrade``-``-``Override_UpdateWeatheringValue``-``-`Updates Weathering Value. |
| --- |
| `Override_OnDayOfWeekChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Day Of Week Changed.`Override_RefreshWeathering``-``-``Override_ResetStartTime``-``-`Resets Start Time.`Override_TryNextGrade``-``-``Override_UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `Override_RefreshWeathering``-``-``Override_ResetStartTime``-``-`Resets Start Time.`Override_TryNextGrade``-``-``Override_UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `Override_ResetStartTime``-``-`Resets Start Time.`Override_TryNextGrade``-``-``Override_UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `Override_TryNextGrade``-``-``Override_UpdateWeatheringValue``-``-`Updates Weathering Value. |
| `Override_UpdateWeatheringValue``-``-`Updates Weathering Value. |
