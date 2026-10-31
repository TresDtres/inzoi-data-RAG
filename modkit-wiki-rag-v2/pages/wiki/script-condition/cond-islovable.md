---
document_id: "7b8530b406af7a5c01ffdd1e05778fc6dd13dc07b2ae9e80cd17a44875cb4805"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable"
title: "Condition_IsLovable"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:36+00:00"
content_sha256: "44f0792e418644bf86d626689f10c215ea4be3b5ef739b1437f8d5ce2ba7da2d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-islovable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self and Target are romantically eligible with each other. This checks romance eligibility based on age, kinship, and romance orientation — not current romance stats. Age rule: characters below teen age cannot love anyone; a teen cannot love a young adult or older. Kinship rule: characters related within 4th degree cannot love each other; 5th degree or further is allowed. Spouses are not treated as kin. Romance orientation is checked for both parties unless overridden by S1.

# Parameters

| ParameterDescriptionBaseObjectAlways Self for this conditionCompareTypeType of comparison operation (Equal, NotEqual)S1Optional override: set to IgnoreMatchingRomanceTarget to skip romance orientation check |
| --- |
| BaseObjectAlways Self for this conditionCompareTypeType of comparison operation (Equal, NotEqual)S1Optional override: set to IgnoreMatchingRomanceTarget to skip romance orientation check |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Optional override: set to IgnoreMatchingRomanceTarget to skip romance orientation check |
| S1Optional override: set to IgnoreMatchingRomanceTarget to skip romance orientation check |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Self and Target can be romantically involvedSelfIsLovableEqualSelf and Target cannot be romantically involvedSelfIsLovableNotEqualSelf and Target can love each other (ignore romance orientation)SelfIsLovableEqualIgnoreMatchingRomanceTargetSelf and Target cannot love each other (ignore romance orientation)SelfIsLovableNotEqualIgnoreMatchingRomanceTarget |
| --- |
| Self and Target can be romantically involvedSelfIsLovableEqualSelf and Target cannot be romantically involvedSelfIsLovableNotEqualSelf and Target can love each other (ignore romance orientation)SelfIsLovableEqualIgnoreMatchingRomanceTargetSelf and Target cannot love each other (ignore romance orientation)SelfIsLovableNotEqualIgnoreMatchingRomanceTarget |
| Self and Target cannot be romantically involvedSelfIsLovableNotEqualSelf and Target can love each other (ignore romance orientation)SelfIsLovableEqualIgnoreMatchingRomanceTargetSelf and Target cannot love each other (ignore romance orientation)SelfIsLovableNotEqualIgnoreMatchingRomanceTarget |
| Self and Target can love each other (ignore romance orientation)SelfIsLovableEqualIgnoreMatchingRomanceTargetSelf and Target cannot love each other (ignore romance orientation)SelfIsLovableNotEqualIgnoreMatchingRomanceTarget |
| Self and Target cannot love each other (ignore romance orientation)SelfIsLovableNotEqualIgnoreMatchingRomanceTarget |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)
