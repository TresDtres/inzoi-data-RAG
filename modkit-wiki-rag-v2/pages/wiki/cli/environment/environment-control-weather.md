---
document_id: "a89aa1c2471e38b05d303ee1aab37141a3b0a7262a288c7ae58d4d5eb07393c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-weather"
title: "environment.control_weather"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:58+00:00"
content_sha256: "5719fbf247683e22108bd4818e6488f96446c0cfe9d01d39d09faaee542d044c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/environment/environment-control-weather"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Advances or adjusts weather by type and step.

# Metadata

| FieldValueDisplayControl WeatherCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ControlWeather`, `world.control_weather` |
| --- |
| DisplayControl WeatherCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ControlWeather`, `world.control_weather` |
| Category`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ControlWeather`, `world.control_weather` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`ControlWeather`, `world.control_weather` |
| Scope`B2Authority`Tags—Aliases`ControlWeather`, `world.control_weather` |
| Tags—Aliases`ControlWeather`, `world.control_weather` |
| Aliases`ControlWeather`, `world.control_weather` |

# Parameters

| NameTypeRequiredDefaultDescriptionweatherstringyes—Weather identifierstepintyes—Weather control step |
| --- |
| weatherstringyes—Weather identifierstepintyes—Weather control step |
| stepintyes—Weather control step |

# Usage

```
await inzoi.cli.execute('environment.control_weather', {  weather: '',  step: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoenvironment[environment.apocalypse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-apocalypse)[environment.change_season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-change-season)[environment.control_disaster](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-disaster)[environment.get_simulation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-simulation)[environment.get_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-state)[environment.get_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-time)[environment.pause](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-pause)[environment.reset_karma](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-reset-karma)[environment.resume](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-resume)[environment.set_season_length](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-season-length)[environment.set_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-time)[environment.time_skip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-time-skip)
