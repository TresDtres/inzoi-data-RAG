---
document_id: "8e6c18bb1c4d28930e8b88e0efeabc8ac8e6fb46df30e64fe7cac2c186560028"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimelinetargetsite"
title: "Execute_ApplyOverrideTimelineTargetSite"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:14+00:00"
content_sha256: "752bddcf0944922626d1a349b5f0bee8d4734d8dad9a6dc88b1346ab77306b1f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-applyoverridetimelinetargetsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates an override timeline for the Self character using the given timeline table entry, designating the current Target site as the destination. The schedule's start time is set to the current in-game time and its end time is calculated from the duration encoded in the table row.

# Parameters

| ParameterDescriptionBaseObjectFixed to Self. The Target entity must be a valid Site.S1EventTimeline ID defined in the Timeline data table |
| --- |
| BaseObjectFixed to Self. The Target entity must be a valid Site.S1EventTimeline ID defined in the Timeline data table |
| S1EventTimeline ID defined in the Timeline data table |

# Examples

| DescriptionBaseObjectCommandS1Apply a friend-visit override using the Target site as destinationSelfApplyOverrideTimelineTargetSiteTimeline_FriendVisitApply a shopping override to the Target site for SelfSelfApplyOverrideTimelineTargetSiteTimeline_Shopping |
| --- |
| Apply a friend-visit override using the Target site as destinationSelfApplyOverrideTimelineTargetSiteTimeline_FriendVisitApply a shopping override to the Target site for SelfSelfApplyOverrideTimelineTargetSiteTimeline_Shopping |
| Apply a shopping override to the Target site for SelfSelfApplyOverrideTimelineTargetSiteTimeline_Shopping |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFX, Sound & Animation[ApplyOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyonetimepostureanim)[ApplyOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimeline)[CancelOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelonetimepostureanim)[PlayPP](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playpp)[PlaySound2D](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playsound2d)[RemoveOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeoverridetimeline)[SubActionPlayAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-subactionplayanim)
