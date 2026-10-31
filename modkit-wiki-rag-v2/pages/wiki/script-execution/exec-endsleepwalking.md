---
document_id: "70c8d4d2eb18f1f30b9c3eec2e252a370e9291cacae8bcdff371ebc13999ce02"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endsleepwalking"
title: "Execute_EndSleepwalking"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:27+00:00"
content_sha256: "6de7275e74d08aa1c6de48cc0f4cc571ccb5b35d2bae621b1c9b340d5eddd5eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-endsleepwalking"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Ends the sleepwalking state for the specified character. Calls RequestEndSleepwalking on the character's DreamComponent.

# Note

This execute must be added at the end of sleepwalking interactions to define the exact moment when the sleepwalking state ends.

# Parameters

| ParameterDescriptionBaseObjectThe character to end the sleepwalking state for |
| --- |
| BaseObjectThe character to end the sleepwalking state for |

# Examples

| DescriptionBaseObjectCommandEnd the sleepwalking state for SelfSelfEndSleepwalkingEnd the sleepwalking state for TargetTargetEndSleepwalking |
| --- |
| End the sleepwalking state for SelfSelfEndSleepwalkingEnd the sleepwalking state for TargetTargetEndSleepwalking |
| End the sleepwalking state for TargetTargetEndSleepwalking |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoGhost & Dream[EndDream](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enddream)[HideDreamBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-hidedreambubble)[SetGhostInteractionAvailability](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setghostinteractionavailability)[SetWorldGhostVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setworldghostvisibility)[ShowDreamBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-showdreambubble)[StartDream](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdream)
