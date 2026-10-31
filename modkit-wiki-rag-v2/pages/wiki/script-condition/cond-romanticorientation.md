---
document_id: "8423235115972044ee57e0f40c6d826a62774f185804e7e444ed1ce4ef07b77b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-romanticorientation"
title: "Condition_RomanticOrientation"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:57+00:00"
content_sha256: "0d281915739ccd64e5697a268d251c3bac573925eebc4b4d21af782194bb48c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-romanticorientation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the romantic orientation flag(s) based on BaseObject:

- BaseObject=Self: checks only Self's bRomanticOrientation (no Target required).
- BaseObject=Target: checks the logical AND of both Self and Target's bRomanticOrientation flags.

# Parameters

| ParameterDescriptionBaseObjectSelf = check Self only. Target = check both Self and Target (AND).CompareTypeSupported compare types: Equal, NotEqual.S1Expected value of the romantic orientation flag (True or False). |
| --- |
| BaseObjectSelf = check Self only. Target = check both Self and Target (AND).CompareTypeSupported compare types: Equal, NotEqual.S1Expected value of the romantic orientation flag (True or False). |
| CompareTypeSupported compare types: Equal, NotEqual.S1Expected value of the romantic orientation flag (True or False). |
| S1Expected value of the romantic orientation flag (True or False). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has romantic orientation enabledSelfRomanticOrientationEqualTrueCheck if Self does not have romantic orientation enabledSelfRomanticOrientationEqualFalseCheck if both Self and Target have romantic orientation enabledTargetRomanticOrientationEqualTrueCheck if either Self or Target does not have romantic orientation enabledTargetRomanticOrientationEqualFalseCheck (negated) if both Self and Target have romantic orientation enabledTargetRomanticOrientationNotEqualTrue |
| --- |
| Check if Self has romantic orientation enabledSelfRomanticOrientationEqualTrueCheck if Self does not have romantic orientation enabledSelfRomanticOrientationEqualFalseCheck if both Self and Target have romantic orientation enabledTargetRomanticOrientationEqualTrueCheck if either Self or Target does not have romantic orientation enabledTargetRomanticOrientationEqualFalseCheck (negated) if both Self and Target have romantic orientation enabledTargetRomanticOrientationNotEqualTrue |
| Check if Self does not have romantic orientation enabledSelfRomanticOrientationEqualFalseCheck if both Self and Target have romantic orientation enabledTargetRomanticOrientationEqualTrueCheck if either Self or Target does not have romantic orientation enabledTargetRomanticOrientationEqualFalseCheck (negated) if both Self and Target have romantic orientation enabledTargetRomanticOrientationNotEqualTrue |
| Check if both Self and Target have romantic orientation enabledTargetRomanticOrientationEqualTrueCheck if either Self or Target does not have romantic orientation enabledTargetRomanticOrientationEqualFalseCheck (negated) if both Self and Target have romantic orientation enabledTargetRomanticOrientationNotEqualTrue |
| Check if either Self or Target does not have romantic orientation enabledTargetRomanticOrientationEqualFalseCheck (negated) if both Self and Target have romantic orientation enabledTargetRomanticOrientationNotEqualTrue |
| Check (negated) if both Self and Target have romantic orientation enabledTargetRomanticOrientationNotEqualTrue |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)
