---
document_id: "390183c03b9df40a9d7abaaaa589c7db4ab348945fb27eec88c8ccb08d711e64"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-registerhouseholdbiz"
title: "Execute_RegisterHouseholdBiz"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:42+00:00"
content_sha256: "20e3ee87541aa76b230e00e5d2974f73a9f80ab8ec0949832367cc2d77d741a6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-registerhouseholdbiz"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Registers a new HouseholdBiz owned by the BaseObject character at the site identified by the SiteTag in S1. If the target site is public and not yet owned by the character's household, it is purchased automatically. If the character already has a company job, a leave request is automatically sent. Fails (with an ensure) if a HouseholdBiz already exists on the target site.

# Parameters

| ParameterDescriptionBaseObjectThe character who registers and becomes the owner of the new HouseholdBizS1Site tag used to find the target site for registration |
| --- |
| BaseObjectThe character who registers and becomes the owner of the new HouseholdBizS1Site tag used to find the target site for registration |
| S1Site tag used to find the target site for registration |

# Examples

| DescriptionBaseObjectCommandPlayer character registers a new business on a siteSelfRegisterHouseholdBizRegister biz on a public site during tutorialSelfRegisterHouseholdBiz |
| --- |
| Player character registers a new business on a siteSelfRegisterHouseholdBizRegister biz on a public site during tutorialSelfRegisterHouseholdBiz |
| Register biz on a public site during tutorialSelfRegisterHouseholdBiz |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
