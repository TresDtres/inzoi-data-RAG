---
document_id: "0a8a9424633916e04a0dd48d4d75121db22b5a5763cd8741788483ceda2e9f67"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag"
title: "Condition_HasHouseholdBizActivityTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:06+00:00"
content_sha256: "3dcbf233f4be8794a8fce9d4a61d46649d73e7a9ceb0b8259174b440322e1813"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hashouseholdbizactivitytag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject Character's Activity Tag list (based on their HouseholdBiz role) contains the Activity Tag specified in S1. The Character's role (Manager, Employee, or Customer) is determined at their current HouseholdBiz site, and their respective Activity Tag list is checked. Returns false if the Character is not associated with any HouseholdBiz at their current site. A directly working Manager with no configured activities falls back to the union of the business's employee activities, but only when BaseObject is Self.

# Parameters

| ParameterDescriptionBaseObjectA Character located at a HouseholdBiz site whose role-based Activity Tag list is checked.CompareTypeEqual: true if the Activity Tag list contains S1. NotEqual: true if it does not.S1The Activity Tag (InteractionBagTag) to check for in the Character's role-based activity list. |
| --- |
| BaseObjectA Character located at a HouseholdBiz site whose role-based Activity Tag list is checked.CompareTypeEqual: true if the Activity Tag list contains S1. NotEqual: true if it does not.S1The Activity Tag (InteractionBagTag) to check for in the Character's role-based activity list. |
| CompareTypeEqual: true if the Activity Tag list contains S1. NotEqual: true if it does not.S1The Activity Tag (InteractionBagTag) to check for in the Character's role-based activity list. |
| S1The Activity Tag (InteractionBagTag) to check for in the Character's role-based activity list. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's activity list contains the tag "Greet"SelfHasHouseholdBizActivityTagEqualCheck if Target's activity list does not contain the tag "Serve"TargetHasHouseholdBizActivityTagNotEqualCheck if Self (as employee) has the "CleanTable" activity tagSelfHasHouseholdBizActivityTagEqual |
| --- |
| Check if Self's activity list contains the tag "Greet"SelfHasHouseholdBizActivityTagEqualCheck if Target's activity list does not contain the tag "Serve"TargetHasHouseholdBizActivityTagNotEqualCheck if Self (as employee) has the "CleanTable" activity tagSelfHasHouseholdBizActivityTagEqual |
| Check if Target's activity list does not contain the tag "Serve"TargetHasHouseholdBizActivityTagNotEqualCheck if Self (as employee) has the "CleanTable" activity tagSelfHasHouseholdBizActivityTagEqual |
| Check if Self (as employee) has the "CleanTable" activity tagSelfHasHouseholdBizActivityTagEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)
