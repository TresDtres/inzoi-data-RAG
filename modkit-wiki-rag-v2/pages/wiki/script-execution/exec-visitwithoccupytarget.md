---
document_id: "2e19ada777b3d2e521c92b87e1878821336e08e34bc413a6a8d51f19fb6f72f8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget"
title: "Execute_VisitWithOccupyTarget"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:04+00:00"
content_sha256: "26e02d5b5e0c304349979ffaaa8c169db5398bab0bf47e9005f34bc0d5f315e9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-visitwithoccupytarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Performs a cooperative visit action where the BaseObject character moves to a location associated with the other character, occupying the Target during the process. Once both characters arrive and wait at the destination, the script in S2 is executed.

# Note

If BaseObject is Target, the roles of Self and Target are logically swapped within the S2 script. If the destination is far away, characters may be teleported to a nearby spawner, but guaranteed arrival time is not ensured.

# Parameters

| ParameterDescriptionBaseObjectThe character that initiates the visit action (Self or Target). Destination is based on the other character.S1The destination type based on the other character (TargetCurrentLocation or TargetResidingSite).S2The script to execute after both characters have arrived at the destination and are waiting there. |
| --- |
| BaseObjectThe character that initiates the visit action (Self or Target). Destination is based on the other character.S1The destination type based on the other character (TargetCurrentLocation or TargetResidingSite).S2The script to execute after both characters have arrived at the destination and are waiting there. |
| S1The destination type based on the other character (TargetCurrentLocation or TargetResidingSite).S2The script to execute after both characters have arrived at the destination and are waiting there. |
| S2The script to execute after both characters have arrived at the destination and are waiting there. |

# Examples

| DescriptionBaseObjectCommandS1S2Self moves to Target's current location and runs a relationship scriptSelfVisitWithOccupyTargetTargetCurrentLocationRelationshipIncreaseScriptSelf moves to Target's residing site and runs an opportunity card scriptSelfVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptTarget moves to Self's residing site and runs an opportunity card scriptTargetVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a howling scriptSelfVisitWithOccupyTargetTargetCurrentLocationHowlingScript |
| --- |
| Self moves to Target's current location and runs a relationship scriptSelfVisitWithOccupyTargetTargetCurrentLocationRelationshipIncreaseScriptSelf moves to Target's residing site and runs an opportunity card scriptSelfVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptTarget moves to Self's residing site and runs an opportunity card scriptTargetVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a howling scriptSelfVisitWithOccupyTargetTargetCurrentLocationHowlingScript |
| Self moves to Target's residing site and runs an opportunity card scriptSelfVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptTarget moves to Self's residing site and runs an opportunity card scriptTargetVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a howling scriptSelfVisitWithOccupyTargetTargetCurrentLocationHowlingScript |
| Target moves to Self's residing site and runs an opportunity card scriptTargetVisitWithOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a howling scriptSelfVisitWithOccupyTargetTargetCurrentLocationHowlingScript |
| Self moves to Target's current location and runs a howling scriptSelfVisitWithOccupyTargetTargetCurrentLocationHowlingScript |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
