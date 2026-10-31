---
document_id: "8e6baa65f73dfa9f07c54cab18c25a65caf1fb3cd967709de0874ee9f220a079"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite"
title: "Execute_RunScriptToTargetInSite"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:51+00:00"
content_sha256: "9cd5b8964007385e5f8c8dd6141b17230f5a79713fccf4e8531cb8a42dc44e04"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-runscripttotargetinsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Runs the specified script on each object located within the same site as the BaseObject. The BaseObject must be a valid game object with a valid located site. The script is run using B2SiteActionHelper on all objects registered in that site.

# Parameters

| ParameterDescriptionBaseObjectThe game object whose located site determines which objects are targeted.S1Script ID to execute on each object in the site (State data asset ID). |
| --- |
| BaseObjectThe game object whose located site determines which objects are targeted.S1Script ID to execute on each object in the site (State data asset ID). |
| S1Script ID to execute on each object in the site (State data asset ID). |

# Examples

| DescriptionBaseObjectCommandS1Run "Cleanup" script on all objects in Self's located siteSelfRunScriptToTargetInSiteCleanupRun "Inspect" script on all objects in Target's located siteTargetRunScriptToTargetInSiteInspectExecute "Reset" script for every object in the siteSelfRunScriptToTargetInSiteReset |
| --- |
| Run "Cleanup" script on all objects in Self's located siteSelfRunScriptToTargetInSiteCleanupRun "Inspect" script on all objects in Target's located siteTargetRunScriptToTargetInSiteInspectExecute "Reset" script for every object in the siteSelfRunScriptToTargetInSiteReset |
| Run "Inspect" script on all objects in Target's located siteTargetRunScriptToTargetInSiteInspectExecute "Reset" script for every object in the siteSelfRunScriptToTargetInSiteReset |
| Execute "Reset" script for every object in the siteSelfRunScriptToTargetInSiteReset |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
