---
document_id: "f8e960947da324f35f43654a8abf4c8ce98a9ba74e855ae8ecdad7d683491aae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/sound/sound-mute"
title: "sound.mute"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "bc05248e4aa56e12051564413e8de1ed45ffe22f9512a8001d164a8d6893f456"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/sound/sound-mute"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Mute or unmute all sound by setting master volume to 0 or 100. Default: mute. Use enable=false to unmute.

# Metadata

| FieldValueDisplayMute SoundCategory`sound`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayMute SoundCategory`sound`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`sound`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionenableboolnotruetrue=mute (default), false=unmute |
| --- |
| enableboolnotruetrue=mute (default), false=unmute |

# Usage

```
await inzoi.cli.execute('sound.mute', {  enable: true, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosound[sound.get_volumes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/sound/sound-get-volumes)[sound.set_volume](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/sound/sound-set-volume)
