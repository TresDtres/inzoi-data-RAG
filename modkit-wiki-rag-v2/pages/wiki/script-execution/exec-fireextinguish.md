---
document_id: "04eeb324fc18b30382b656b9cf1b39f5aaa4c77d334111d2a6e6fa0e79da0bda"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish"
title: "Execute_FireExtinguish"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:28+00:00"
content_sha256: "8238489a1bb6427d4ac3043c50def814e371e392037fabe620560337e6212e0e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-fireextinguish"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Performs a fire extinguish action on nearby objects using configuration data from FireExtinguishInfo. Objects within the configured radius that match the target state are either destroyed (if SootObject) or have their state changed.

# Parameters

| ParameterDescriptionBaseObjectThe entity used as the origin point for the fire extinguish areaS1ID of the FireExtinguishInfo entry in the StateDataAsset (defines radius, states, and conditions) |
| --- |
| BaseObjectThe entity used as the origin point for the fire extinguish areaS1ID of the FireExtinguishInfo entry in the StateDataAsset (defines radius, states, and conditions) |
| S1ID of the FireExtinguishInfo entry in the StateDataAsset (defines radius, states, and conditions) |

# Examples

| DescriptionBaseObjectCommandS1Extinguish fire using the default fire extinguish dataSelfFireExtinguishDA_State_FE_DATAExtinguish fire around Target using specific configTargetFireExtinguishDA_State_FE_DATA |
| --- |
| Extinguish fire using the default fire extinguish dataSelfFireExtinguishDA_State_FE_DATAExtinguish fire around Target using specific configTargetFireExtinguishDA_State_FE_DATA |
| Extinguish fire around Target using specific configTargetFireExtinguishDA_State_FE_DATA |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
