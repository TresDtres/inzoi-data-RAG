---
document_id: "e5356c7e4c056f1889f2c1230d9eeb23e473d660ce3a5fd2b8eaa41c4209a0cb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1objecttemplateweatherscriptentry"
title: "FB1ObjectTemplateWeatherScriptEntry"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:43+00:00"
content_sha256: "23ff81ab0eb223f272f539d35d64ae03f6bab9225624fa38c65a01e2161b5a96"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/scripts/fb1objecttemplateweatherscriptentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Entry defining weather-specific scripts for an object template. Maps a weather ID to start/end script lists executed when exposure state changes under that weather.

# Metadata

| FieldValueKind`script`EnvironmentB1 - PresentationCategory`scripts` |
| --- |
| Kind`script`EnvironmentB1 - PresentationCategory`scripts` |
| EnvironmentB1 - PresentationCategory`scripts` |
| Category`scripts` |

# Properties (3)

| NameTypeDescription`OnEndScriptIds``string[]`Script IDs executed when the object stops being weather-exposed for this weather.`OnStartScriptIds``string[]`Script IDs executed when the object starts being weather-exposed for this weather.`WeatherId``string`ID of the weather this script entry targets. |
| --- |
| `OnEndScriptIds``string[]`Script IDs executed when the object stops being weather-exposed for this weather.`OnStartScriptIds``string[]`Script IDs executed when the object starts being weather-exposed for this weather.`WeatherId``string`ID of the weather this script entry targets. |
| `OnStartScriptIds``string[]`Script IDs executed when the object starts being weather-exposed for this weather.`WeatherId``string`ID of the weather this script entry targets. |
| `WeatherId``string`ID of the weather this script entry targets. |
