---
document_id: "5ab5ad21e530da06825ca0d98cf446382ade75841c66763add97e9caeb8278f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelrepeatingsocialevent"
title: "Execute_CancelRepeatingSocialEvent"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:18+00:00"
content_sha256: "3c87735b038169ba87e2ba2137eed5dd28271253b565439d1c9886e8330112fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-cancelrepeatingsocialevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Permanently ends the weekly repeating social event that the reminder text message being answered belongs to. Intended for the negative ("I won't join anymore") answer script of a repeat reminder message. The responder also drops out of the occurrence in progress. The subscription is looked up from the reminder that was sent between Self and Target, so no parameters are needed. Does nothing when no reminder record exists between the two characters, which is the case on any message other than a repeat reminder.

# Parameters

| ParameterDescriptionBaseObjectUnused. The subscription is resolved from the reminder sender/receiver. |
| --- |
| BaseObjectUnused. The subscription is resolved from the reminder sender/receiver. |

# Examples

| DescriptionBaseObjectCommandPlayer answers "I won't join anymore" to a reminderSelfCancelRepeatingSocialEvent |
| --- |
| Player answers "I won't join anymore" to a reminderSelfCancelRepeatingSocialEvent |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
