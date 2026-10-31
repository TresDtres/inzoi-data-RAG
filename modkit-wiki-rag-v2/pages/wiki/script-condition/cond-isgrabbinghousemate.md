---
document_id: "fa0e6397d06ef94a3e80110b5b0ec97e620e23e25ed8e401cd727214e9c8d497"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgrabbinghousemate"
title: "Condition_IsGrabbingHouseMate"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:30+00:00"
content_sha256: "41bbfb90602eb9334319a9f1b5401020416643d5dad83d2ecab2873d4b7662e2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isgrabbinghousemate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the baby currently being held by the BaseObject character belongs to the same household as the BaseObject. Returns false when no baby is being held.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose grabbed baby will be evaluatedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter whose grabbed baby will be evaluatedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is holding a baby of the same householdSelfIsGrabbingHouseMateEqualIf Self is holding a baby of a different householdSelfIsGrabbingHouseMateNotEqual |
| --- |
| If Self is holding a baby of the same householdSelfIsGrabbingHouseMateEqualIf Self is holding a baby of a different householdSelfIsGrabbingHouseMateNotEqual |
| If Self is holding a baby of a different householdSelfIsGrabbingHouseMateNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
