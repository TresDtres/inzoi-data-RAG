---
document_id: "2b446b1ba1d22c97c45c8701fbf079cdb7a41e9b02439f93e3aaa4f95d3a411a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-selectorrandomsalonhair"
title: "Execute_SelectOrRandomSalonHair"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:51+00:00"
content_sha256: "b93af896044f0b4dd201b6ac2324148cc4f9830109fef596c50a699b499343d6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-selectorrandomsalonhair"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Called from Notify_ChangeHair to open the ContentPicker or pick a random hair.

- If the customer is the PlayerCharacter, sends S_OpenSalonHairContentPicker to open the ContentPicker.
    - Empty S1 (normal styling): shows only hairs already owned by the customer.
    - S1=="Locked" (unlock styling): shows only locked hairs, then unlocks the selected hair in C_SelectSalonHair.
- Otherwise, randomly selects from SalonHairPool, stores it in coop scope (SalonHair_PoolId), and shows a bubble icon.

# Parameters

| ParameterDescriptionBaseObjectCustomer (Self in Notify context; remaps the employee through Coop).S1ContentPicker mode: "Locked"=locked hair / empty=owned hair. |
| --- |
| BaseObjectCustomer (Self in Notify context; remaps the employee through Coop).S1ContentPicker mode: "Locked"=locked hair / empty=owned hair. |
| S1ContentPicker mode: "Locked"=locked hair / empty=owned hair. |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
