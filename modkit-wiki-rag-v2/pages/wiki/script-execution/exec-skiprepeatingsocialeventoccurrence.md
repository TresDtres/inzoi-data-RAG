---
document_id: "8910fa74000d92abccda0d1fd60bcdff1a73fc3bd8f68b863a3667641af5379b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-skiprepeatingsocialeventoccurrence"
title: "Execute_SkipRepeatingSocialEventOccurrence"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:57+00:00"
content_sha256: "f2c71dcf422f4869ea913a022e7985935289099a07f7573010f5e1a869c2eded"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-skiprepeatingsocialeventoccurrence"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Drops the responder from the repeating social event occurrence currently in progress without touching the subscription, so the event still repeats next week. Intended for the neutral ("I can't make it today") answer script of a repeat reminder message. The occurrence is looked up from the reminder that was sent between Self and Target, so no parameters are needed. Does nothing when no reminder record exists between the two characters, which is the case on any message other than a repeat reminder.

# Parameters

| ParameterDescriptionBaseObjectUnused. The occurrence is resolved from the reminder sender/receiver. |
| --- |
| BaseObjectUnused. The occurrence is resolved from the reminder sender/receiver. |

# Examples

| DescriptionBaseObjectCommandPlayer answers "I can't make it today" to a reminderSelfSkipRepeatingSocialEventOccurrence |
| --- |
| Player answers "I can't make it today" to a reminderSelfSkipRepeatingSocialEventOccurrence |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
