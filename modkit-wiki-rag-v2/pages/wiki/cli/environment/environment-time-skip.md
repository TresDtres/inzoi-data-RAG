---
document_id: "371960c05640332780dae794fca0bb64f52574128d622880fc2d99d4143a41c9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-time-skip"
title: "environment.time_skip"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:58+00:00"
content_sha256: "97d3a2067b5f977fd3ee375013d14983b5092d8b45a899ecfd219f13ecc9a8a7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/environment/environment-time-skip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Skips game time forward by the given days/hours/minutes.

# Metadata

| FieldValueDisplayTime SkipCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.time_skip` |
| --- |
| DisplayTime SkipCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.time_skip` |
| Category`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.time_skip` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`world.time_skip` |
| Scope`B2Authority`Tags—Aliases`world.time_skip` |
| Tags—Aliases`world.time_skip` |
| Aliases`world.time_skip` |

# Parameters

| NameTypeRequiredDefaultDescriptiondaysintno—Days to skip forwardhoursintno—Hours to skip forwardminutesintno—Minutes to skip forward |
| --- |
| daysintno—Days to skip forwardhoursintno—Hours to skip forwardminutesintno—Minutes to skip forward |
| hoursintno—Hours to skip forwardminutesintno—Minutes to skip forward |
| minutesintno—Minutes to skip forward |

# Usage

```
await inzoi.cli.execute('environment.time_skip', {  days: 0, // optional  hours: 0, // optional  minutes: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoenvironment[environment.apocalypse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-apocalypse)[environment.change_season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-change-season)[environment.control_disaster](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-disaster)[environment.control_weather](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-weather)[environment.get_simulation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-simulation)[environment.get_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-state)[environment.get_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-time)[environment.pause](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-pause)[environment.reset_karma](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-reset-karma)[environment.resume](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-resume)[environment.set_season_length](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-season-length)[environment.set_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-time)
