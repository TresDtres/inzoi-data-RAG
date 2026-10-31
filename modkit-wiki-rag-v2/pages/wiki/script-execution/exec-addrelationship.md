---
document_id: "9f3a1ebb71cbd86199dd745dfba150630076128a834faf20cddfa2a8951acac1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship"
title: "Execute_AddRelationship"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:09+00:00"
content_sha256: "fb5b147584fb29173dc8011f49f66c793fd9feaecad809e006f3f2d27672c99d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addrelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds the specified amount to a relationship stat between Self and Target. If the action is triggered during a Talk interaction and one of the characters belongs to a possessed household, the add value is scaled by the PossessHouseholdTalkRelationshipStatRatio from TalkDataAsset. S2 can be set to True to force the add regardless of main relationship constraints.

# Parameters

| ParameterDescriptionBaseObjectAlways Self for this actionS1Relationship stat ID to modify (defined in RelationshipStat.json)S2Set to True to bypass main relationship constraint; leave empty for defaultF1Amount to add to the relationship stat (can be negative) |
| --- |
| BaseObjectAlways Self for this actionS1Relationship stat ID to modify (defined in RelationshipStat.json)S2Set to True to bypass main relationship constraint; leave empty for defaultF1Amount to add to the relationship stat (can be negative) |
| S1Relationship stat ID to modify (defined in RelationshipStat.json)S2Set to True to bypass main relationship constraint; leave empty for defaultF1Amount to add to the relationship stat (can be negative) |
| S2Set to True to bypass main relationship constraint; leave empty for defaultF1Amount to add to the relationship stat (can be negative) |
| F1Amount to add to the relationship stat (can be negative) |

# Examples

| DescriptionBaseObjectCommandS1S2F1Increase friendship between Self and Target by 10SelfAddRelationshipfriendship10Decrease romance between Self and Target by 15SelfAddRelationshipromance-15Increase business between Self and Target by 5SelfAddRelationshipbusiness5Force add 20 to friendship ignoring main relationshipSelfAddRelationshipfriendshipTrue20 |
| --- |
| Increase friendship between Self and Target by 10SelfAddRelationshipfriendship10Decrease romance between Self and Target by 15SelfAddRelationshipromance-15Increase business between Self and Target by 5SelfAddRelationshipbusiness5Force add 20 to friendship ignoring main relationshipSelfAddRelationshipfriendshipTrue20 |
| Decrease romance between Self and Target by 15SelfAddRelationshipromance-15Increase business between Self and Target by 5SelfAddRelationshipbusiness5Force add 20 to friendship ignoring main relationshipSelfAddRelationshipfriendshipTrue20 |
| Increase business between Self and Target by 5SelfAddRelationshipbusiness5Force add 20 to friendship ignoring main relationshipSelfAddRelationshipfriendshipTrue20 |
| Force add 20 to friendship ignoring main relationshipSelfAddRelationshipfriendshipTrue20 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
