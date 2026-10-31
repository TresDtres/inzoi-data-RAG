---
document_id: "772ad2528d3d8142f76c941346b4c77fe1a322060f8bd609fd1fcce893bdca0a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget"
title: "Execute_VisitWithoutOccupyTarget"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:04+00:00"
content_sha256: "2d4485ed62e86a1b255bdc5c7e0c93d77769da99de78e9723578cff708ba53c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-visitwithoutoccupytarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Performs a visit action where the BaseObject character moves to a location associated with the other character and executes a script after arrival, without occupying or restricting the Target. The Target is not affected and may continue any ongoing behavior.

# Note

If BaseObject is Target, the roles of Self and Target are logically swapped within the S2 script. If the destination is far away, the BaseObject may be teleported to a nearby spawner, but guaranteed arrival time is not ensured.

# Parameters

| ParameterDescriptionBaseObjectThe character that initiates the visit action (Self or Target). Destination is based on the other character.S1The destination type based on the other character (TargetCurrentLocation or TargetResidingSite).S2The script to execute after the BaseObject has arrived at the destination. |
| --- |
| BaseObjectThe character that initiates the visit action (Self or Target). Destination is based on the other character.S1The destination type based on the other character (TargetCurrentLocation or TargetResidingSite).S2The script to execute after the BaseObject has arrived at the destination. |
| S1The destination type based on the other character (TargetCurrentLocation or TargetResidingSite).S2The script to execute after the BaseObject has arrived at the destination. |
| S2The script to execute after the BaseObject has arrived at the destination. |

# Examples

| DescriptionBaseObjectCommandS1S2Self moves to Target's current location and runs a howling scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationHowlingScriptSelf moves to Target's residing site and runs an opportunity card scriptSelfVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptTarget moves to Self's residing site and runs an opportunity card scriptTargetVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a relationship scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationRelationshipScript |
| --- |
| Self moves to Target's current location and runs a howling scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationHowlingScriptSelf moves to Target's residing site and runs an opportunity card scriptSelfVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptTarget moves to Self's residing site and runs an opportunity card scriptTargetVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a relationship scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationRelationshipScript |
| Self moves to Target's residing site and runs an opportunity card scriptSelfVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptTarget moves to Self's residing site and runs an opportunity card scriptTargetVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a relationship scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationRelationshipScript |
| Target moves to Self's residing site and runs an opportunity card scriptTargetVisitWithoutOccupyTargetTargetResidingSiteOpportunityCardScriptSelf moves to Target's current location and runs a relationship scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationRelationshipScript |
| Self moves to Target's current location and runs a relationship scriptSelfVisitWithoutOccupyTargetTargetCurrentLocationRelationshipScript |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[CreateSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)
