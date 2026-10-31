---
document_id: "95aebdc172860f5dc58f5d4ee62daef678ad21367931cc3f53fe04501e98b30f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimeline"
title: "Execute_ApplyOverrideTimeline"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:14+00:00"
content_sha256: "8619652b6a6211e3aa0258ee942aea8ba2b20d072a6096ed3f879286961a5675"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-applyoverridetimeline"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Applies an override timeline to the BaseObject character using the specified timeline table entry. When F1 is 1, the non-BaseObject entity is set as the associated entity on each schedule.

# Parameters

| ParameterDescriptionBaseObjectThe character to apply the override timeline to (Self or Target)S1EventTimeline ID defined in the Timeline data tableF10 to not set AssociatedEntity; 1 to set AssociatedEntity |
| --- |
| BaseObjectThe character to apply the override timeline to (Self or Target)S1EventTimeline ID defined in the Timeline data tableF10 to not set AssociatedEntity; 1 to set AssociatedEntity |
| S1EventTimeline ID defined in the Timeline data tableF10 to not set AssociatedEntity; 1 to set AssociatedEntity |
| F10 to not set AssociatedEntity; 1 to set AssociatedEntity |

# Examples

| DescriptionBaseObjectCommandS1F1Apply a friend-visit override to Self with associated entity (Target)SelfApplyOverrideTimelineTimeline_FriendVisit1Apply a work override to Self without an associated entitySelfApplyOverrideTimelineTimeline_GoToWork0Apply an event override to Target without an associated entityTargetApplyOverrideTimelineTimeline_Event0 |
| --- |
| Apply a friend-visit override to Self with associated entity (Target)SelfApplyOverrideTimelineTimeline_FriendVisit1Apply a work override to Self without an associated entitySelfApplyOverrideTimelineTimeline_GoToWork0Apply an event override to Target without an associated entityTargetApplyOverrideTimelineTimeline_Event0 |
| Apply a work override to Self without an associated entitySelfApplyOverrideTimelineTimeline_GoToWork0Apply an event override to Target without an associated entityTargetApplyOverrideTimelineTimeline_Event0 |
| Apply an event override to Target without an associated entityTargetApplyOverrideTimelineTimeline_Event0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFX, Sound & Animation[ApplyOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyonetimepostureanim)[ApplyOverrideTimelineTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverridetimelinetargetsite)[CancelOneTimePostureAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelonetimepostureanim)[PlayPP](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playpp)[PlaySound2D](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-playsound2d)[RemoveOverrideTimeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeoverridetimeline)[SubActionPlayAnim](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-subactionplayanim)
