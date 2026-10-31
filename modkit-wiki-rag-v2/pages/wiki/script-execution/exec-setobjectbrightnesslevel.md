---
document_id: "b89e3170e59497f29ccf443d95814d36acb20d2dda97ec6e75c247a056101cb2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setobjectbrightnesslevel"
title: "Execute_SetObjectBrightnessLevel"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:56+00:00"
content_sha256: "62ada7291d293d421de9de9b3d0908a7590bd20c78ed3f4a3ef6dc605db30dc6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setobjectbrightnesslevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Sets the emissive multiplier of the BaseObject light object to the brightness level named by S1, and records it on the object so the brightness survives save/load and object re-spawn. S1 is a key of UB1InteractionDataAsset.LightBrightnessLevels (for example Light_Low / Light_Middle / Light_High). Every part whose ParamUsage enables both emissive color and emissive multiplier is updated together, so a lamp with two glowing parts does not end up half lit, and the level value is clamped into the part's EmissiveMultiMin/Max range. Writes the same value as the build mode brightness slider, so the two paths overwrite each other and the last write wins. BaseObject = Target (the light object). S2 and F1/F2 are unused.

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
