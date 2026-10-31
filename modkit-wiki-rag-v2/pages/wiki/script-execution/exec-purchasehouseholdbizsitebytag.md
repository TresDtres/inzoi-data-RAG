---
document_id: "26c36677a3c528b3bc724e24c91cb37f0f45778d593295c37ca5b5c3b6bd7c44"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag"
title: "Execute_PurchaseHouseholdBizSiteByTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:40+00:00"
content_sha256: "3ce931a60549f17d75a8420360e68bb25bc278b253df24e6a0be3330e246a88f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-purchasehouseholdbizsitebytag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Purchases the HouseholdBiz site identified by the SiteTag in S1, on behalf of the BaseObject character's household. If the site is already owned by the same household, this Execute does nothing silently. If owned by another household, a toast message is shown and the purchase is not forced. If insufficient currency, a toast message is shown.

# Parameters

| ParameterDescriptionBaseObjectThe character whose household will purchase the siteS1SiteTag (FName) identifying the target site to purchase |
| --- |
| BaseObjectThe character whose household will purchase the siteS1SiteTag (FName) identifying the target site to purchase |
| S1SiteTag (FName) identifying the target site to purchase |

# Examples

| DescriptionBaseObjectCommandCharacter purchases a biz site by its tagSelfPurchaseHouseholdBizSiteByTagPurchase a specific shop site during tutorialSelfPurchaseHouseholdBizSiteByTag |
| --- |
| Character purchases a biz site by its tagSelfPurchaseHouseholdBizSiteByTagPurchase a specific shop site during tutorialSelfPurchaseHouseholdBizSiteByTag |
| Purchase a specific shop site during tutorialSelfPurchaseHouseholdBizSiteByTag |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
