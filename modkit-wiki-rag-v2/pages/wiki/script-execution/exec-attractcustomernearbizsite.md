---
document_id: "370c27cbcd657facd6f77fbdf538b7bb8b50a64713e7d7250d0fca5b8f8de81c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite"
title: "Execute_AttractCustomerNearBizSite"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:16+00:00"
content_sha256: "5e711c84f470a63177cc245981ae50c74509267d86324acd3c5ec5e1517e6f36"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-attractcustomernearbizsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Finds the HouseholdBiz associated with the BaseObject (employee or manager) and attracts the NonBaseObject customer to it. If BaseObject is an employee, their employed business is selected. If BaseObject is a manager, the nearest business they manage (sorted by distance) is selected.

# Parameters

| ParameterDescriptionBaseObjectThe character associated with the business (employee or manager) used to resolve the HouseholdBiz |
| --- |
| BaseObjectThe character associated with the business (employee or manager) used to resolve the HouseholdBiz |

# Examples

| DescriptionBaseObjectCommandEmployee attracts a nearby customer to their biz siteSelfAttractCustomerNearBizSiteManager attracts a nearby customer to their nearest bizSelfAttractCustomerNearBizSite |
| --- |
| Employee attracts a nearby customer to their biz siteSelfAttractCustomerNearBizSiteManager attracts a nearby customer to their nearest bizSelfAttractCustomerNearBizSite |
| Manager attracts a nearby customer to their nearest bizSelfAttractCustomerNearBizSite |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
