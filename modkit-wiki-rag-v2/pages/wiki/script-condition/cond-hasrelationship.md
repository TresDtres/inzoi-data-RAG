---
document_id: "3e780888b0d1a3d1db43ebda32722e71e06014d57fd421f2ed451dd224f67b33"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship"
title: "Condition_HasRelationship"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "e2e2ac7ab84945ade3c6ac2989d1b92d24d756f5c6aa1346ab9e941cecaa776c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any relationship has been formed between the selected characters (i.e., whether relationship points have ever been accumulated between them). Returns true even for family or roommate relationships.

# Parameters

| ParameterDescriptionBaseObjectHousehold owner when S2 is Household; ignored when S2 is NoneCompareTypeNot used; pass S1 as TRUE or FALSE insteadS1TRUE to check if a relationship exists; FALSE to check if notS2None checks Self-Target; Household checks any BaseObject household member |
| --- |
| BaseObjectHousehold owner when S2 is Household; ignored when S2 is NoneCompareTypeNot used; pass S1 as TRUE or FALSE insteadS1TRUE to check if a relationship exists; FALSE to check if notS2None checks Self-Target; Household checks any BaseObject household member |
| CompareTypeNot used; pass S1 as TRUE or FALSE insteadS1TRUE to check if a relationship exists; FALSE to check if notS2None checks Self-Target; Household checks any BaseObject household member |
| S1TRUE to check if a relationship exists; FALSE to check if notS2None checks Self-Target; Household checks any BaseObject household member |
| S2None checks Self-Target; Household checks any BaseObject household member |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2A relationship has been formed between Self and TargetSelfHasRelationshipTRUENoneNo relationship has been formed between Self and TargetSelfHasRelationshipFALSENoneAny Target household member has met SelfTargetHasRelationshipTRUEHousehold |
| --- |
| A relationship has been formed between Self and TargetSelfHasRelationshipTRUENoneNo relationship has been formed between Self and TargetSelfHasRelationshipFALSENoneAny Target household member has met SelfTargetHasRelationshipTRUEHousehold |
| No relationship has been formed between Self and TargetSelfHasRelationshipFALSENoneAny Target household member has met SelfTargetHasRelationshipTRUEHousehold |
| Any Target household member has met SelfTargetHasRelationshipTRUEHousehold |

# Notes

S2=None preserves the legacy Self-Target direction regardless of BaseObject.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)[LastContactHour](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-lastcontacthour)
