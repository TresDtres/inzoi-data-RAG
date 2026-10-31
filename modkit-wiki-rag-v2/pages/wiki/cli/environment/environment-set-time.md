---
document_id: "8616b49daa27646afebc6d0765acf7745810d87febe616d75f782a2fe49e9bc1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-time"
title: "environment.set_time"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:58+00:00"
content_sha256: "5c23bf47a0645a555c7ba261fb289c367bc3f64e18e5ebdec60b8f18d54e7b48"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/environment/environment-set-time"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Jumps to a specific in-game time. With only hour/minute it moves to the next occurrence (forward). With 'day' it jumps to that absolute in-game day index (see environment.get_state).

# Metadata

| FieldValueDisplaySet TimeCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.set_time` |
| --- |
| DisplaySet TimeCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.set_time` |
| Category`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.set_time` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.set_time` |
| Scope`B2Authority`Tags—Aliases`world.set_time` |
| Tags—Aliases`world.set_time` |
| Aliases`world.set_time` |

# Parameters

| NameTypeRequiredDefaultDescriptiondayintno—Absolute in-game day index to jump tohourintno—Target hour [0-23]minuteintno—Target minute [0-59]allow_rewindboolnofalseAllow jumping backward in time |
| --- |
| dayintno—Absolute in-game day index to jump tohourintno—Target hour [0-23]minuteintno—Target minute [0-59]allow_rewindboolnofalseAllow jumping backward in time |
| hourintno—Target hour [0-23]minuteintno—Target minute [0-59]allow_rewindboolnofalseAllow jumping backward in time |
| minuteintno—Target minute [0-59]allow_rewindboolnofalseAllow jumping backward in time |
| allow_rewindboolnofalseAllow jumping backward in time |

# Usage

```
await inzoi.cli.execute('environment.set_time', {  day: 0, // optional  hour: 0, // optional  minute: 0, // optional  allow_rewind: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoenvironment[environment.apocalypse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-apocalypse)[environment.change_season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-change-season)[environment.control_disaster](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-disaster)[environment.control_weather](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-weather)[environment.get_simulation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-simulation)[environment.get_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-state)[environment.get_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-time)[environment.pause](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-pause)[environment.reset_karma](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-reset-karma)[environment.resume](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-resume)[environment.set_season_length](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-season-length)[environment.time_skip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-time-skip)
