---
document_id: "e57bc1472adf4bf077f50d9ee3b4b9e23b82039a06bf611018eab5ec52216f2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cleanupchildcarriableobjects"
title: "Execute_CleanUpChildCarriableObjects"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:21+00:00"
content_sha256: "32e546e4c28a3e5e4493b3923ece90512f4ad6aa8255cfb84684981cafbb3023"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-cleanupchildcarriableobjects"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Destroys all child objects of the BaseObject that are of the Carriable type (e.g., small items, food, or handheld tools). Optionally filters by cleanup type (S1). Used to clean up items placed on or attached to a parent object.

# Parameters

| ParameterDescriptionBaseObjectThe parent object whose carriable child objects will be destroyedS1Optional cleanup type (EB1CleanUpObjectType). Defaults to All if not specified |
| --- |
| BaseObjectThe parent object whose carriable child objects will be destroyedS1Optional cleanup type (EB1CleanUpObjectType). Defaults to All if not specified |
| S1Optional cleanup type (EB1CleanUpObjectType). Defaults to All if not specified |

# Examples

| DescriptionBaseObjectCommandRemove all carriable child items from TargetTargetCleanUpChildCarriableObjectsRemove Self object carriable childrenSelfCleanUpChildCarriableObjects |
| --- |
| Remove all carriable child items from TargetTargetCleanUpChildCarriableObjectsRemove Self object carriable childrenSelfCleanUpChildCarriableObjects |
| Remove Self object carriable childrenSelfCleanUpChildCarriableObjects |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
