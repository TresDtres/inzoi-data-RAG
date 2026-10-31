---
document_id: "b1516286ec213274a0f8d51ceb78aa592bba9d7779e429bbc5753d9647f7842e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/sound/sound-set-volume"
title: "sound.set_volume"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "cc1ce4ff8e7e4d98b240a6810110ae1f2450e4c140f0de38bdb230e10e9c06be"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/sound/sound-set-volume"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set a sound channel volume. Channels: master, music, sfx, ui, voice, cinematic. Value range: 0-100.

# Metadata

| FieldValueDisplaySet Sound VolumeCategory`sound`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet Sound VolumeCategory`sound`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`sound`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionchannelstringyes—Sound channel: master, music, sfx, ui, voice, cinematicvaluestringyes—Volume level (0-100) |
| --- |
| channelstringyes—Sound channel: master, music, sfx, ui, voice, cinematicvaluestringyes—Volume level (0-100) |
| valuestringyes—Volume level (0-100) |

# Usage

```
await inzoi.cli.execute('sound.set_volume', {  channel: '',  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosound[sound.get_volumes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/sound/sound-get-volumes)[sound.mute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/sound/sound-mute)
