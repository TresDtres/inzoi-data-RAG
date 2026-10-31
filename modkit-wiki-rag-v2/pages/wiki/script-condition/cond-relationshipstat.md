---
document_id: "c0943548fcddf2426426d7a0885cf7363697be703d689025e0bf8f102ac58bae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-relationshipstat"
title: "Condition_RelationshipStat"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:57+00:00"
content_sha256: "3aed0e7206267c6b6948dad727b0f250d20011621135e8620751ca0f73003771"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-relationshipstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Evaluates the relationship stat (e.g., friendship, romance, business) from BaseObject toward the counterpart against a comparison value. Supports all standard comparison operators including InRange and OutRange.

# Parameters

| ParameterDescriptionBaseObjectStat owner for the check. Self evaluates Self->Target stat; Target evaluates Target->Self statCompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship stat ID to compare (defined in RelationshipStat.json)S2None evaluates BaseObject; Household evaluates BaseObject's householdF1Value to compare against, or range minimum when using InRange/OutRangeF2Range maximum when using InRange or OutRange |
| --- |
| BaseObjectStat owner for the check. Self evaluates Self->Target stat; Target evaluates Target->Self statCompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship stat ID to compare (defined in RelationshipStat.json)S2None evaluates BaseObject; Household evaluates BaseObject's householdF1Value to compare against, or range minimum when using InRange/OutRangeF2Range maximum when using InRange or OutRange |
| CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship stat ID to compare (defined in RelationshipStat.json)S2None evaluates BaseObject; Household evaluates BaseObject's householdF1Value to compare against, or range minimum when using InRange/OutRangeF2Range maximum when using InRange or OutRange |
| S1Relationship stat ID to compare (defined in RelationshipStat.json)S2None evaluates BaseObject; Household evaluates BaseObject's householdF1Value to compare against, or range minimum when using InRange/OutRangeF2Range maximum when using InRange or OutRange |
| S2None evaluates BaseObject; Household evaluates BaseObject's householdF1Value to compare against, or range minimum when using InRange/OutRangeF2Range maximum when using InRange or OutRange |
| F1Value to compare against, or range minimum when using InRange/OutRangeF2Range maximum when using InRange or OutRange |
| F2Range maximum when using InRange or OutRange |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1F2Self's friendship toward target is less than 40SelfRelationshipStatLessfriendshipNone40Self's romance toward target is 0SelfRelationshipStatEqualromanceNone0Target's business toward Self is at least 80TargetRelationshipStatGreaterOrEqualbusinessNone80Any Target household member's friendship toward Self is 30+TargetRelationshipStatGreaterOrEqualfriendshipHousehold30Target household's strongest absolute relationship is positiveTargetRelationshipStatGreaterOrEqual{HighestAbsRelationship}Household0 |
| --- |
| Self's friendship toward target is less than 40SelfRelationshipStatLessfriendshipNone40Self's romance toward target is 0SelfRelationshipStatEqualromanceNone0Target's business toward Self is at least 80TargetRelationshipStatGreaterOrEqualbusinessNone80Any Target household member's friendship toward Self is 30+TargetRelationshipStatGreaterOrEqualfriendshipHousehold30Target household's strongest absolute relationship is positiveTargetRelationshipStatGreaterOrEqual{HighestAbsRelationship}Household0 |
| Self's romance toward target is 0SelfRelationshipStatEqualromanceNone0Target's business toward Self is at least 80TargetRelationshipStatGreaterOrEqualbusinessNone80Any Target household member's friendship toward Self is 30+TargetRelationshipStatGreaterOrEqualfriendshipHousehold30Target household's strongest absolute relationship is positiveTargetRelationshipStatGreaterOrEqual{HighestAbsRelationship}Household0 |
| Target's business toward Self is at least 80TargetRelationshipStatGreaterOrEqualbusinessNone80Any Target household member's friendship toward Self is 30+TargetRelationshipStatGreaterOrEqualfriendshipHousehold30Target household's strongest absolute relationship is positiveTargetRelationshipStatGreaterOrEqual{HighestAbsRelationship}Household0 |
| Any Target household member's friendship toward Self is 30+TargetRelationshipStatGreaterOrEqualfriendshipHousehold30Target household's strongest absolute relationship is positiveTargetRelationshipStatGreaterOrEqual{HighestAbsRelationship}Household0 |
| Target household's strongest absolute relationship is positiveTargetRelationshipStatGreaterOrEqual{HighestAbsRelationship}Household0 |

# Notes

Household normally succeeds when any member matches. When S1 is {HighestAbsRelationship}, it compares only the single strongest absolute relationship stat across the whole household. Positive values win ties with equal absolute values.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)
