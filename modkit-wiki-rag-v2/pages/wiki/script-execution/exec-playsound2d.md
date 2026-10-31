---
document_id: "6569a71a4445e80dd050b4b3d154e047f02886e4a0d1a33465967a9a8a9b4b7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playsound2d"
title: "Execute_PlaySound2D"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:39+00:00"
content_sha256: "2bc6269c90b7bed0cf7a98656af9fc94f7fb1cee281a3a91e494f29ff8d5971c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-playsound2d"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Plays a 2D sound effect defined in the AudioResources table. Only plays when the BaseObject is the character currently being controlled by the local player.

# Parameters

| ParameterDescriptionBaseObjectThe target object to check for player possession.S1The SoundId defined in the AudioResources table.S2Set to True to control playback based on possession of the target entity. |
| --- |
| BaseObjectThe target object to check for player possession.S1The SoundId defined in the AudioResources table.S2Set to True to control playback based on possession of the target entity. |
| S1The SoundId defined in the AudioResources table.S2Set to True to control playback based on possession of the target entity. |
| S2Set to True to control playback based on possession of the target entity. |

# Examples

| DescriptionBaseObjectCommandPlay Goal_Change sound when Self is possessedSelfPlaySound2DPlay LevelUp sound when Self is possessedSelfPlaySound2D |
| --- |
| Play Goal_Change sound when Self is possessedSelfPlaySound2DPlay LevelUp sound when Self is possessedSelfPlaySound2D |
| Play LevelUp sound when Self is possessedSelfPlaySound2D |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFX, Sound & Animation[ApplyOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyonetimepostureanim)[ApplyOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimeline)[ApplyOverrideTimelineTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimelinetargetsite)[CancelOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelonetimepostureanim)[PlayPP](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playpp)[RemoveOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeoverridetimeline)[SubActionPlayAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-subactionplayanim)
