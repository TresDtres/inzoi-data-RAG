---
document_id: "5c022ed6c1255ac17952b30c548f20d60b8308e93c1053a18106a392143667b6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-zoigroup"
title: "Execute_ZoiGroup"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:05+00:00"
content_sha256: "db07717e2b592e6b23278f4946c4fc1262fc1b8b33528ff507d174dde2da2689"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-zoigroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Executes a ZoiGroup management command on the BaseObject character. Supported commands are RemoveMember, Break, and Edit.

# Parameters

| ParameterDescriptionBaseObjectThe reference character on which the ZoiGroup command is executed.S1The ZoiGroup command to execute (EB1ZoiGroupCommand: RemoveMember, Break, Edit).S2The leave reason used when S1 is RemoveMember (EB1ZoiGroupLeaveReason). Omit otherwise. |
| --- |
| BaseObjectThe reference character on which the ZoiGroup command is executed.S1The ZoiGroup command to execute (EB1ZoiGroupCommand: RemoveMember, Break, Edit).S2The leave reason used when S1 is RemoveMember (EB1ZoiGroupLeaveReason). Omit otherwise. |
| S1The ZoiGroup command to execute (EB1ZoiGroupCommand: RemoveMember, Break, Edit).S2The leave reason used when S1 is RemoveMember (EB1ZoiGroupLeaveReason). Omit otherwise. |
| S2The leave reason used when S1 is RemoveMember (EB1ZoiGroupLeaveReason). Omit otherwise. |

# Examples

| DescriptionBaseObjectCommandRemove target from their ZoiGroup with reason "Kicked"TargetZoiGroupRemove self from their ZoiGroup with reason "Left"SelfZoiGroupDisband self's ZoiGroup entirelySelfZoiGroupOpen ZoiGroup edit UI for self (create if no group)SelfZoiGroup |
| --- |
| Remove target from their ZoiGroup with reason "Kicked"TargetZoiGroupRemove self from their ZoiGroup with reason "Left"SelfZoiGroupDisband self's ZoiGroup entirelySelfZoiGroupOpen ZoiGroup edit UI for self (create if no group)SelfZoiGroup |
| Remove self from their ZoiGroup with reason "Left"SelfZoiGroupDisband self's ZoiGroup entirelySelfZoiGroupOpen ZoiGroup edit UI for self (create if no group)SelfZoiGroup |
| Disband self's ZoiGroup entirelySelfZoiGroupOpen ZoiGroup edit UI for self (create if no group)SelfZoiGroup |
| Open ZoiGroup edit UI for self (create if no group)SelfZoiGroup |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
