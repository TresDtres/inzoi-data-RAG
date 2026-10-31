---
document_id: "535608af0ecc77efc16d473463c8b40b9c2b6f2129ab263e780911c180617243"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeownership"
title: "Execute_ChangeOwnership"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:20+00:00"
content_sha256: "e4c9863b26ca9f89eef925105d2fc25bfab904c5767c029b1d4335628a50d9fc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changeownership"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the ownership of a GameObject to a Character. If BaseObject is Self, Self is treated as the object and Target as the character. If BaseObject is Target, Target is treated as the object and Self as the character.

# Parameters

| ParameterDescriptionBaseObjectDetermines the object-character pairing: Self -> Self(object)/Target(character), Target -> Target(object)/Self(character)S1OwnershipType value (e.g., Character, Household) |
| --- |
| BaseObjectDetermines the object-character pairing: Self -> Self(object)/Target(character), Target -> Target(object)/Self(character)S1OwnershipType value (e.g., Character, Household) |
| S1OwnershipType value (e.g., Character, Household) |

# Examples

| DescriptionBaseObjectCommandS1Change Self object ownership to Character for TargetSelfChangeOwnershipCharacterChange Target object ownership to Household for SelfTargetChangeOwnershipHousehold |
| --- |
| Change Self object ownership to Character for TargetSelfChangeOwnershipCharacterChange Target object ownership to Household for SelfTargetChangeOwnershipHousehold |
| Change Target object ownership to Household for SelfTargetChangeOwnershipHousehold |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
