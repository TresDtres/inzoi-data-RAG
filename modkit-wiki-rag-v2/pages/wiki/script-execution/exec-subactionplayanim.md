---
document_id: "586290d6ddf0689834c4682dfca0ce255051da7923cfd26dd3733a1b37940128"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-subactionplayanim"
title: "Execute_SubActionPlayAnim"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:02+00:00"
content_sha256: "a3da8a52a6cbf045cce00c5f0104814609231748870ae3beaa35aaf0ed28d1c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-subactionplayanim"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Executes a play-animation SubAction on the SelfEntity. The entity must be at SLOD0, currently standing, and the SubAction must be startable.

# Note

BaseObject is not used; this action always targets SelfEntity.

# Parameters

| ParameterDescriptionS1SubActionAnimDataId identifying the animation to execute |
| --- |
| S1SubActionAnimDataId identifying the animation to execute |

# Examples

| DescriptionBaseObjectCommandS1Play the Irritated reaction animation on SelfSelfSubActionPlayAnimPreference_DisLike_Reaction_Irritated_3Play the Like reaction animation on SelfSelfSubActionPlayAnimPreference_Like_Reaction_Happy_1Play a custom sub-action animation on SelfSelfSubActionPlayAnimSubAnim_CustomReaction_01 |
| --- |
| Play the Irritated reaction animation on SelfSelfSubActionPlayAnimPreference_DisLike_Reaction_Irritated_3Play the Like reaction animation on SelfSelfSubActionPlayAnimPreference_Like_Reaction_Happy_1Play a custom sub-action animation on SelfSelfSubActionPlayAnimSubAnim_CustomReaction_01 |
| Play the Like reaction animation on SelfSelfSubActionPlayAnimPreference_Like_Reaction_Happy_1Play a custom sub-action animation on SelfSelfSubActionPlayAnimSubAnim_CustomReaction_01 |
| Play a custom sub-action animation on SelfSelfSubActionPlayAnimSubAnim_CustomReaction_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFX, Sound & Animation[ApplyOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyonetimepostureanim)[ApplyOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimeline)[ApplyOverrideTimelineTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimelinetargetsite)[CancelOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelonetimepostureanim)[PlayPP](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playpp)[PlaySound2D](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playsound2d)[RemoveOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeoverridetimeline)
