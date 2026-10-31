---
document_id: "c87333b8f0da0a2317ed823cb18e40ff5a0627a8c23b521a7b1c0cbdf445a69a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setboatanchor"
title: "Execute_SetBoatAnchor"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:53+00:00"
content_sha256: "cae2b22d0ea94190ae6ba8722d1e9269b67619bcc52b791dd445524fa5af6263"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setboatanchor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets the anchor state of a ship. If F1 is 0, the anchor is raised (AnchorUp); otherwise the anchor is lowered (AnchorDown). The state change is also broadcast to clients via packet.

# Parameters

| ParameterDescriptionBaseObjectThe ship entity whose anchor state will be changed (Self or Target).F1Anchor state value (0 = AnchorUp, non-zero = AnchorDown). |
| --- |
| BaseObjectThe ship entity whose anchor state will be changed (Self or Target).F1Anchor state value (0 = AnchorUp, non-zero = AnchorDown). |
| F1Anchor state value (0 = AnchorUp, non-zero = AnchorDown). |

# Examples

| DescriptionBaseObjectCommandF1Lower the anchor of the target ship.TargetSetBoatAnchor1Raise the anchor of the target ship.TargetSetBoatAnchor0Lower the anchor of the self ship.SelfSetBoatAnchor1Raise the anchor of the self ship.SelfSetBoatAnchor0 |
| --- |
| Lower the anchor of the target ship.TargetSetBoatAnchor1Raise the anchor of the target ship.TargetSetBoatAnchor0Lower the anchor of the self ship.SelfSetBoatAnchor1Raise the anchor of the self ship.SelfSetBoatAnchor0 |
| Raise the anchor of the target ship.TargetSetBoatAnchor0Lower the anchor of the self ship.SelfSetBoatAnchor1Raise the anchor of the self ship.SelfSetBoatAnchor0 |
| Lower the anchor of the self ship.SelfSetBoatAnchor1Raise the anchor of the self ship.SelfSetBoatAnchor0 |
| Raise the anchor of the self ship.SelfSetBoatAnchor0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
