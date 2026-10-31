---
document_id: "2f5c061cfc6ee11168c415c43bbabc3a1130f8b577204048029405c4b671842e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege"
title: "Execute_SetDoorPrivilege"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:54+00:00"
content_sha256: "510f4f6f5718245459dda442149770d74d7b134ebd6fefab6ae22aeb591e0a18"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setdoorprivilege"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Grants or revokes the specified character's door passage privilege. A non-zero value for F1 grants the privilege; zero revokes it.

# Parameters

| ParameterDescriptionBaseObjectThe character to modify door privilege for (Self or Target).F1Non-zero to grant door passage privilege; 0 to revoke it. |
| --- |
| BaseObjectThe character to modify door privilege for (Self or Target).F1Non-zero to grant door passage privilege; 0 to revoke it. |
| F1Non-zero to grant door passage privilege; 0 to revoke it. |

# Examples

| DescriptionBaseObjectCommandF1Grant Self door access privilegeSelfSetDoorPrivilege1Revoke Self door access privilegeSelfSetDoorPrivilege0Grant Target door access privilegeTargetSetDoorPrivilege1 |
| --- |
| Grant Self door access privilegeSelfSetDoorPrivilege1Revoke Self door access privilegeSelfSetDoorPrivilege0Grant Target door access privilegeTargetSetDoorPrivilege1 |
| Revoke Self door access privilegeSelfSetDoorPrivilege0Grant Target door access privilegeTargetSetDoorPrivilege1 |
| Grant Target door access privilegeTargetSetDoorPrivilege1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
