---
document_id: "b8e807ec7be4b3ed8f33dc775adb6960b263b399e00f395dbedbec00aee87bc1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-pause"
title: "environment.pause"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:58+00:00"
content_sha256: "8d7dc2834b78f7f86cb26608b4bafd9af0ff458ebab0f5c7a0902658d4b0c6b8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/environment/environment-pause"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Pauses (no argument) or resumes the game simulation while preserving current time speed. Use enable=false to resume.

# Metadata

| FieldValueDisplayPause SimulationCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`PauseSimulation`, `world.pause` |
| --- |
| DisplayPause SimulationCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`PauseSimulation`, `world.pause` |
| Category`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases`PauseSimulation`, `world.pause` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`PauseSimulation`, `world.pause` |
| Scope`B2Authority`Tags—Aliases`PauseSimulation`, `world.pause` |
| Tags—Aliases`PauseSimulation`, `world.pause` |
| Aliases`PauseSimulation`, `world.pause` |

# Parameters

| NameTypeRequiredDefaultDescriptionenableboolnotruetrue to pause (default), false to resume |
| --- |
| enableboolnotruetrue to pause (default), false to resume |

# Usage

```
await inzoi.cli.execute('environment.pause', {  enable: true, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoenvironment[environment.apocalypse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-apocalypse)[environment.change_season](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-change-season)[environment.control_disaster](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-disaster)[environment.control_weather](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-control-weather)[environment.get_simulation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-simulation)[environment.get_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-state)[environment.get_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-get-time)[environment.reset_karma](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-reset-karma)[environment.resume](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-resume)[environment.set_season_length](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-season-length)[environment.set_time](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-set-time)[environment.time_skip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-time-skip)
