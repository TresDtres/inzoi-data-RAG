---
document_id: "e830fdb5a7eb2df865ce4bc0ace9134de761659697c2b4afc076e676eb33d449"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cleanupnearby"
title: "Execute_CleanUpNearby"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:21+00:00"
content_sha256: "b47df185d9eb0765de50ebae3223ee4d0d5ba5f3b24960005d66671dc7138616"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-cleanupnearby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Cleans up (despawns) nearby carriable objects around the BaseObject within a specified radius. Uses the AOI system to gather nearby GameObjects, filters to eligible CarriableObjects, and destroys those matching the requested cleanup type (S1). Properly detaches grouped objects from their parent before destruction. Objects currently in interactions or held by a character are excluded.

# Parameters

| ParameterDescriptionBaseObjectThe actor used as the cleanup origin (location and floor level)S1Cleanup target type (EB1CleanUpObjectType). Defaults to All if omitted or invalidF1Cleanup radius in cm. Must be > 0 |
| --- |
| BaseObjectThe actor used as the cleanup origin (location and floor level)S1Cleanup target type (EB1CleanUpObjectType). Defaults to All if omitted or invalidF1Cleanup radius in cm. Must be > 0 |
| S1Cleanup target type (EB1CleanUpObjectType). Defaults to All if omitted or invalidF1Cleanup radius in cm. Must be > 0 |
| F1Cleanup radius in cm. Must be > 0 |

# Examples

| DescriptionBaseObjectCommandS1F1Remove all eligible clutter within 500cm radiusSelfCleanUpNearbyAll500Remove only Trash type objects within 800cm radiusSelfCleanUpNearbyTrash800 |
| --- |
| Remove all eligible clutter within 500cm radiusSelfCleanUpNearbyAll500Remove only Trash type objects within 800cm radiusSelfCleanUpNearbyTrash800 |
| Remove only Trash type objects within 800cm radiusSelfCleanUpNearbyTrash800 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
