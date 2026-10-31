---
document_id: "de2c556c6373dbd1c23084df066ccb16777e48924e5411e9a21fa55c9b48121c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour"
title: "Condition_LastContactHour"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:51+00:00"
content_sha256: "88456fc6340d67265b1222f672314d99a7b960b01cf5991e7f82dc13afebd1a3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-lastcontacthour"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the number of hours elapsed since the last interaction between BaseObject and the counterpart. Returns false if no interaction has ever occurred (LatestInteractionTick is 0).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose last contact time is checked (Self or Target)CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)F1Elapsed hours threshold or range minimumF2Range maximum in hours (used with InRange or OutRange) |
| --- |
| BaseObjectCharacter whose last contact time is checked (Self or Target)CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)F1Elapsed hours threshold or range minimumF2Range maximum in hours (used with InRange or OutRange) |
| CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)F1Elapsed hours threshold or range minimumF2Range maximum in hours (used with InRange or OutRange) |
| F1Elapsed hours threshold or range minimumF2Range maximum in hours (used with InRange or OutRange) |
| F2Range maximum in hours (used with InRange or OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Self has not contacted Target for more than 24 hoursSelfLastContactHourGreater24Self contacted Target within the last 8 hoursSelfLastContactHourLessOrEqual8Last contact between Self and Target was 12 to 48 hours agoSelfLastContactHourInRange1248Target has not contacted Self for over 72 hoursTargetLastContactHourGreater72 |
| --- |
| Self has not contacted Target for more than 24 hoursSelfLastContactHourGreater24Self contacted Target within the last 8 hoursSelfLastContactHourLessOrEqual8Last contact between Self and Target was 12 to 48 hours agoSelfLastContactHourInRange1248Target has not contacted Self for over 72 hoursTargetLastContactHourGreater72 |
| Self contacted Target within the last 8 hoursSelfLastContactHourLessOrEqual8Last contact between Self and Target was 12 to 48 hours agoSelfLastContactHourInRange1248Target has not contacted Self for over 72 hoursTargetLastContactHourGreater72 |
| Last contact between Self and Target was 12 to 48 hours agoSelfLastContactHourInRange1248Target has not contacted Self for over 72 hoursTargetLastContactHourGreater72 |
| Target has not contacted Self for over 72 hoursTargetLastContactHourGreater72 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)
