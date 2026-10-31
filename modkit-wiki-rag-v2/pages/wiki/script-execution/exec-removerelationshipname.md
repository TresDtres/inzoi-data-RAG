---
document_id: "87212edb04a23c82634414119d115134c851318e373219e4da3c3e4b5bc9a6a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname"
title: "Execute_RemoveRelationshipName"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:47+00:00"
content_sha256: "df4528478d4acfbd4a37811e53a6a33d4d5f3ac6585ebbaa3251c62144030d46"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removerelationshipname"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes the specified relationship name between Self and Target. If S2 is RemoveAll, the relationship name is removed from all relationships of Self (in both directions). If S2 is empty, the removal applies bidirectionally between Self and Target.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose relationship name is removed (Self or Target)S1Relationship ID to remove (defined in Relationship.json)S2Set to RemoveAll to remove this relationship name from all of BaseObject's relationships |
| --- |
| BaseObjectCharacter whose relationship name is removed (Self or Target)S1Relationship ID to remove (defined in Relationship.json)S2Set to RemoveAll to remove this relationship name from all of BaseObject's relationships |
| S1Relationship ID to remove (defined in Relationship.json)S2Set to RemoveAll to remove this relationship name from all of BaseObject's relationships |
| S2Set to RemoveAll to remove this relationship name from all of BaseObject's relationships |

# Examples

| DescriptionBaseObjectCommandS1S2Remove engagement relationship between Self and TargetSelfRemoveRelationshipNameengagementRemove all engagement relationships Self hasSelfRemoveRelationshipNameengagementRemoveAllRemove best friend relationship between Self and TargetSelfRemoveRelationshipNameBestFriendRemove all ex-spouse relationships Target hasTargetRemoveRelationshipNameExSpouseRemoveAll |
| --- |
| Remove engagement relationship between Self and TargetSelfRemoveRelationshipNameengagementRemove all engagement relationships Self hasSelfRemoveRelationshipNameengagementRemoveAllRemove best friend relationship between Self and TargetSelfRemoveRelationshipNameBestFriendRemove all ex-spouse relationships Target hasTargetRemoveRelationshipNameExSpouseRemoveAll |
| Remove all engagement relationships Self hasSelfRemoveRelationshipNameengagementRemoveAllRemove best friend relationship between Self and TargetSelfRemoveRelationshipNameBestFriendRemove all ex-spouse relationships Target hasTargetRemoveRelationshipNameExSpouseRemoveAll |
| Remove best friend relationship between Self and TargetSelfRemoveRelationshipNameBestFriendRemove all ex-spouse relationships Target hasTargetRemoveRelationshipNameExSpouseRemoveAll |
| Remove all ex-spouse relationships Target hasTargetRemoveRelationshipNameExSpouseRemoveAll |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
