---
document_id: "159c0799193cbb9b78fc66f2de03b4bd10c7e5a1da0dd668dcfa735d21ac65e0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege"
title: "Execute_SetKnockDoorVisitSitePrivilege"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:55+00:00"
content_sha256: "71806edc3d28da37a5c81aca8fc42f5faeb2318b3dcd4efc82b915d588871045"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setknockdoorvisitsiteprivilege"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Script execute function to grant or revoke a character's non-persistent knock-door visit access. Granting allows traversal through doors in the Target door's Residence Site and interior visibility for that Site. It replaces any previously granted knock-door visit access.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. Granting requires Self; revoking applies to BaseObjectS2For grants only: None uses Target; CoopMainTarget uses the current Coop's main targetF11 grants access; 0 revokes BaseObject's current access |
| --- |
| BaseObjectSelf or Target. Granting requires Self; revoking applies to BaseObjectS2For grants only: None uses Target; CoopMainTarget uses the current Coop's main targetF11 grants access; 0 revokes BaseObject's current access |
| S2For grants only: None uses Target; CoopMainTarget uses the current Coop's main targetF11 grants access; 0 revokes BaseObject's current access |
| F11 grants access; 0 revokes BaseObject's current access |

# Notes

The resolved target must be a valid exterior Residence door when granting.

# Examples

| DescriptionBaseObjectCommandS2F1Grant access using the script TargetSelfSetKnockDoorVisitSitePrivilegeNone1Grant access using the current Coop's main targetSelfSetKnockDoorVisitSitePrivilegeCoopMainTarget1Revoke current knock-door visit accessSelfSetKnockDoorVisitSitePrivilegeNone0Revoke the Target's knock-door visit accessTargetSetKnockDoorVisitSitePrivilegeNone0 |
| --- |
| Grant access using the script TargetSelfSetKnockDoorVisitSitePrivilegeNone1Grant access using the current Coop's main targetSelfSetKnockDoorVisitSitePrivilegeCoopMainTarget1Revoke current knock-door visit accessSelfSetKnockDoorVisitSitePrivilegeNone0Revoke the Target's knock-door visit accessTargetSetKnockDoorVisitSitePrivilegeNone0 |
| Grant access using the current Coop's main targetSelfSetKnockDoorVisitSitePrivilegeCoopMainTarget1Revoke current knock-door visit accessSelfSetKnockDoorVisitSitePrivilegeNone0Revoke the Target's knock-door visit accessTargetSetKnockDoorVisitSitePrivilegeNone0 |
| Revoke current knock-door visit accessSelfSetKnockDoorVisitSitePrivilegeNone0Revoke the Target's knock-door visit accessTargetSetKnockDoorVisitSitePrivilegeNone0 |
| Revoke the Target's knock-door visit accessTargetSetKnockDoorVisitSitePrivilegeNone0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
