---
document_id: "513cdadb225e72d956b145af186e98bf30ade8b3cb38f6068f49e2988d6f32c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setghostinteractionavailability"
title: "Execute_SetGhostInteractionAvailability"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:55+00:00"
content_sha256: "a1eea15239824f9979db78b34a7a2c6548e06b7e8e9f98e0e607589e666a3903"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setghostinteractionavailability"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets whether the specified character is available for interaction with ghost characters. A non-zero value for F1 enables availability; zero disables it.

# Parameters

| ParameterDescriptionBaseObjectThe character to apply the availability setting to (Self or Target).F1Non-zero to enable ghost interaction availability; 0 to disable it. |
| --- |
| BaseObjectThe character to apply the availability setting to (Self or Target).F1Non-zero to enable ghost interaction availability; 0 to disable it. |
| F1Non-zero to enable ghost interaction availability; 0 to disable it. |

# Examples

| DescriptionBaseObjectCommandF1Enable ghost interaction availability for SelfSelfSetGhostInteractionAvailability1Disable ghost interaction availability for SelfSelfSetGhostInteractionAvailability0Enable ghost interaction availability for TargetTargetSetGhostInteractionAvailability1 |
| --- |
| Enable ghost interaction availability for SelfSelfSetGhostInteractionAvailability1Disable ghost interaction availability for SelfSelfSetGhostInteractionAvailability0Enable ghost interaction availability for TargetTargetSetGhostInteractionAvailability1 |
| Disable ghost interaction availability for SelfSelfSetGhostInteractionAvailability0Enable ghost interaction availability for TargetTargetSetGhostInteractionAvailability1 |
| Enable ghost interaction availability for TargetTargetSetGhostInteractionAvailability1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoGhost & Dream[EndDream](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enddream)[EndSleepwalking](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endsleepwalking)[HideDreamBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-hidedreambubble)[SetWorldGhostVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setworldghostvisibility)[ShowDreamBubble](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-showdreambubble)[StartDream](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdream)
