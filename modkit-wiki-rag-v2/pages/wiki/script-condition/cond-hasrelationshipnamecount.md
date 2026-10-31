---
document_id: "b8426faa772338680a767fd1d97e2cb42c45586bb1e1e8985240a49807015dea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount"
title: "Condition_HasRelationshipNameCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:13+00:00"
content_sha256: "8f02058ceb70b2aa458d6e88540f1efa74c1c0a889c4f1e5aa207e5ebc9af074"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationshipnamecount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the number of characters who have the specified relationship name with BaseObject, and compares that count against F1 (and F2 for range operations).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose relationship name count is checked (Self or Target)CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship ID to count (defined in Relationship.json)F1Comparison threshold or range minimumF2Range maximum (used with InRange or OutRange) |
| --- |
| BaseObjectCharacter whose relationship name count is checked (Self or Target)CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship ID to count (defined in Relationship.json)F1Comparison threshold or range minimumF2Range maximum (used with InRange or OutRange) |
| CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship ID to count (defined in Relationship.json)F1Comparison threshold or range minimumF2Range maximum (used with InRange or OutRange) |
| S1Relationship ID to count (defined in Relationship.json)F1Comparison threshold or range minimumF2Range maximum (used with InRange or OutRange) |
| F1Comparison threshold or range minimumF2Range maximum (used with InRange or OutRange) |
| F2Range maximum (used with InRange or OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Self has exactly 2 BestFriend relationshipsSelfHasRelationshipNameCountEqualBestFriend2Self has fewer than 3 engagement relationshipsSelfHasRelationshipNameCountLessengagement3Self has between 1 and 5 MarriagePartner relationshipsSelfHasRelationshipNameCountInRangeMarriagePartner15Target has at least 1 BestFriend relationshipTargetHasRelationshipNameCountGreaterOrEqualBestFriend1 |
| --- |
| Self has exactly 2 BestFriend relationshipsSelfHasRelationshipNameCountEqualBestFriend2Self has fewer than 3 engagement relationshipsSelfHasRelationshipNameCountLessengagement3Self has between 1 and 5 MarriagePartner relationshipsSelfHasRelationshipNameCountInRangeMarriagePartner15Target has at least 1 BestFriend relationshipTargetHasRelationshipNameCountGreaterOrEqualBestFriend1 |
| Self has fewer than 3 engagement relationshipsSelfHasRelationshipNameCountLessengagement3Self has between 1 and 5 MarriagePartner relationshipsSelfHasRelationshipNameCountInRangeMarriagePartner15Target has at least 1 BestFriend relationshipTargetHasRelationshipNameCountGreaterOrEqualBestFriend1 |
| Self has between 1 and 5 MarriagePartner relationshipsSelfHasRelationshipNameCountInRangeMarriagePartner15Target has at least 1 BestFriend relationshipTargetHasRelationshipNameCountGreaterOrEqualBestFriend1 |
| Target has at least 1 BestFriend relationshipTargetHasRelationshipNameCountGreaterOrEqualBestFriend1 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)
