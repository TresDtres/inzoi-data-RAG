---
document_id: "8dcd230b93307264e741f6eee74b84739480341d04f9a69beb53f57da83f453c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-relationshipdeviation"
title: "Condition_RelationshipDeviation"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:57+00:00"
content_sha256: "9efbeba7e091e10997b8eaabafd4069d0e197d02e970f433b72e99567cd8474b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-relationshipdeviation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the absolute deviation (difference) of a relationship stat between Self and Target. Computes |Self's stat value - Target's stat value| and compares it against F1 (and F2 for range operations). BaseObject is not used; the check always operates on the Self-Target pair from the script context.

# Parameters

| ParameterDescriptionBaseObjectNot used; always evaluates the deviation between Self and TargetCompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship stat ID to compare (e.g., Friendship, Romance, Business)F1Comparison threshold or range minimum for the absolute differenceF2Range maximum (used with InRange or OutRange) |
| --- |
| BaseObjectNot used; always evaluates the deviation between Self and TargetCompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship stat ID to compare (e.g., Friendship, Romance, Business)F1Comparison threshold or range minimum for the absolute differenceF2Range maximum (used with InRange or OutRange) |
| CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange)S1Relationship stat ID to compare (e.g., Friendship, Romance, Business)F1Comparison threshold or range minimum for the absolute differenceF2Range maximum (used with InRange or OutRange) |
| S1Relationship stat ID to compare (e.g., Friendship, Romance, Business)F1Comparison threshold or range minimum for the absolute differenceF2Range maximum (used with InRange or OutRange) |
| F1Comparison threshold or range minimum for the absolute differenceF2Range maximum (used with InRange or OutRange) |
| F2Range maximum (used with InRange or OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Friendship deviation between Self and Target is greater than 30SelfRelationshipDeviationGreaterFriendship30Romance deviation between Self and Target is within 10 pointsSelfRelationshipDeviationLessOrEqualRomance10Business deviation between Self and Target is between 5 and 20SelfRelationshipDeviationInRangeBusiness520Friendship deviation between Self and Target equals 0SelfRelationshipDeviationEqualFriendship0 |
| --- |
| Friendship deviation between Self and Target is greater than 30SelfRelationshipDeviationGreaterFriendship30Romance deviation between Self and Target is within 10 pointsSelfRelationshipDeviationLessOrEqualRomance10Business deviation between Self and Target is between 5 and 20SelfRelationshipDeviationInRangeBusiness520Friendship deviation between Self and Target equals 0SelfRelationshipDeviationEqualFriendship0 |
| Romance deviation between Self and Target is within 10 pointsSelfRelationshipDeviationLessOrEqualRomance10Business deviation between Self and Target is between 5 and 20SelfRelationshipDeviationInRangeBusiness520Friendship deviation between Self and Target equals 0SelfRelationshipDeviationEqualFriendship0 |
| Business deviation between Self and Target is between 5 and 20SelfRelationshipDeviationInRangeBusiness520Friendship deviation between Self and Target equals 0SelfRelationshipDeviationEqualFriendship0 |
| Friendship deviation between Self and Target equals 0SelfRelationshipDeviationEqualFriendship0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)
