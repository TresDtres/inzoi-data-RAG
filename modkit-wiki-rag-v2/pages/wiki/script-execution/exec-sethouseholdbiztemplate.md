---
document_id: "bdeaef629ef7453a91d03c861186c1497459b1bdc781ea6c36924d335be39955"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sethouseholdbiztemplate"
title: "Execute_SetHouseholdBizTemplate"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:55+00:00"
content_sha256: "98631257da1bd4c9058f72407d96bfffe544a17b3b818fd8b59ce48314b94e05"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sethouseholdbiztemplate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets a HouseholdBiz business template and work schedule for the site identified by the SiteTag in S1. BaseObject must be the HouseholdBiz manager; if not, this Execute does nothing. Aborted if the site already has a DefaultHouseholdBizDtId set. After applying changes, update packets for data cache and app UI are sent to clients.

# Parameters

| ParameterDescriptionBaseObjectCharacter who must be the biz manager to apply the changesS1Site tag used to find the target HouseholdBiz siteS2Business template name to applyF1Work start time (hour) passed to SetWorkTimeF2Work end time (hour) passed to SetWorkTime |
| --- |
| BaseObjectCharacter who must be the biz manager to apply the changesS1Site tag used to find the target HouseholdBiz siteS2Business template name to applyF1Work start time (hour) passed to SetWorkTimeF2Work end time (hour) passed to SetWorkTime |
| S1Site tag used to find the target HouseholdBiz siteS2Business template name to applyF1Work start time (hour) passed to SetWorkTimeF2Work end time (hour) passed to SetWorkTime |
| S2Business template name to applyF1Work start time (hour) passed to SetWorkTimeF2Work end time (hour) passed to SetWorkTime |
| F1Work start time (hour) passed to SetWorkTimeF2Work end time (hour) passed to SetWorkTime |
| F2Work end time (hour) passed to SetWorkTime |

# Examples

| DescriptionBaseObjectCommandSet template and work schedule for a biz siteSelfSetHouseholdBizTemplateApply a bakery template with 9 AM to 6 PM hoursSelfSetHouseholdBizTemplate |
| --- |
| Set template and work schedule for a biz siteSelfSetHouseholdBizTemplateApply a bakery template with 9 AM to 6 PM hoursSelfSetHouseholdBizTemplate |
| Apply a bakery template with 9 AM to 6 PM hoursSelfSetHouseholdBizTemplate |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
