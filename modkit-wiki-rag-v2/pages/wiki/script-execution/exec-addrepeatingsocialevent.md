---
document_id: "a191b6c94bd0374d4977eacffdc6901ebb56a1cafff2b817503f4dd1d92939ae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent"
title: "Execute_AddRepeatingSocialEvent"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:10+00:00"
content_sha256: "d27bfa52d18e1dec12892d8d99afe2276a507188749ea1a406bada10494de180"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addrepeatingsocialevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Registers a weekly repeating social event subscription hosted by BaseObject, with the context NonBaseObject joining as a fixed member. The upcoming occurrence is created right away in most cases, so the event shows up on that weekday of the schedule immediately. When the weekday and hour have already passed today the first occurrence lands a full week out, and creation is deferred to the midnight hook, so nothing appears on the schedule until the next day. Only templates flagged IsRepeatable are accepted. Place this on the acceptance script of an invitation or opportunity card.

Registration is skipped when the host or the possessed character already has a weekly subscription overlapping the same weekday and time range. Nothing is created and no message is shown on this path, so check B2LogSiteEvent when a repeat does not appear.

# Parameters

| ParameterDescriptionBaseObjectThe character who hosts the repeating event.S1SocialEventTemplateTable row ID identifying the event template.S2Site ID where the event repeats. Falls back to the template default site if None.F1The weekday the event repeats on (Mon=0 … Sun=6).F2The hour of day at which the event starts. Whole hours only (0 ~ 23). |
| --- |
| BaseObjectThe character who hosts the repeating event.S1SocialEventTemplateTable row ID identifying the event template.S2Site ID where the event repeats. Falls back to the template default site if None.F1The weekday the event repeats on (Mon=0 … Sun=6).F2The hour of day at which the event starts. Whole hours only (0 ~ 23). |
| S1SocialEventTemplateTable row ID identifying the event template.S2Site ID where the event repeats. Falls back to the template default site if None.F1The weekday the event repeats on (Mon=0 … Sun=6).F2The hour of day at which the event starts. Whole hours only (0 ~ 23). |
| S2Site ID where the event repeats. Falls back to the template default site if None.F1The weekday the event repeats on (Mon=0 … Sun=6).F2The hour of day at which the event starts. Whole hours only (0 ~ 23). |
| F1The weekday the event repeats on (Mon=0 … Sun=6).F2The hour of day at which the event starts. Whole hours only (0 ~ 23). |
| F2The hour of day at which the event starts. Whole hours only (0 ~ 23). |

The occurrence length comes from the template DurationHour and is clamped so the occurrence ends before midnight. Registration fails when the start hour leaves less than an hour before midnight.

# Examples

| DescriptionBaseObjectCommandRepeat the game dev club every Monday at 14:00SelfAddRepeatingSocialEventRepeat a weekend brunch at a fixed cafe every SaturdaySelfAddRepeatingSocialEvent |
| --- |
| Repeat the game dev club every Monday at 14:00SelfAddRepeatingSocialEventRepeat a weekend brunch at a fixed cafe every SaturdaySelfAddRepeatingSocialEvent |
| Repeat a weekend brunch at a fixed cafe every SaturdaySelfAddRepeatingSocialEvent |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)[ApplyRandomPresetToMannequin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandompresettomannequin)
