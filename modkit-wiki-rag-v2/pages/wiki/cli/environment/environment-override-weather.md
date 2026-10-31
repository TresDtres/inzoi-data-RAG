---
document_id: "9a0d197f23b5e70cb3c1b3a88cc49fbe37defef05a6997c47c810d6ab11c3b1c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/environment/environment-override-weather"
title: "environment.override_weather"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:58+00:00"
content_sha256: "916ae1f5d68abce29778c587aa638eacee4dbb40ddbd8fb6e4beae57404b5f77"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/environment/environment-override-weather"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Temporarily overrides current weather by id and step.

# Metadata

| FieldValueDisplayOverride WeatherCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayOverride WeatherCategory`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`environment`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionweathernameyes—Weather idstepintyes—Weather step index |
| --- |
| weathernameyes—Weather idstepintyes—Weather step index |
| stepintyes—Weather step index |

# Usage

```
await inzoi.cli.execute('environment.override_weather', {  weather: '',  step: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
