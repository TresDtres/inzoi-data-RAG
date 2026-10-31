---
document_id: "9a252e42eaa87d28d21dca444b9e06281e7085853803401ef0565ed2c8c624fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfamilyinpastlife"
title: "Condition_IsFamilyInPastLife"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:27+00:00"
content_sha256: "7727cce9fbff5dd082a03d4ed4f47692d51d1ffe7fc5bbfa7972edae38f9ed31"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfamilyinpastlife"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject (expected to be a ghost) was in the same household as the non-base character during their past life. Returns false if the BaseObject is not a ghost (PastLifeHouseholdEntityId is invalid).

# Parameters

| ParameterDescriptionBaseObjectThe ghost character whose past life household is compared against the non-base characterCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectThe ghost character whose past life household is compared against the non-base characterCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self (ghost) and the interacting character were family in a past lifeSelfIsFamilyInPastLifeEqualIf Self (ghost) and the interacting character were NOT family in a past lifeSelfIsFamilyInPastLifeNotEqualIf Target (ghost) and Self were once in the same household in a past lifeTargetIsFamilyInPastLifeEqualIf Target (ghost) and Self were not in the same household in a past lifeTargetIsFamilyInPastLifeNotEqual |
| --- |
| If Self (ghost) and the interacting character were family in a past lifeSelfIsFamilyInPastLifeEqualIf Self (ghost) and the interacting character were NOT family in a past lifeSelfIsFamilyInPastLifeNotEqualIf Target (ghost) and Self were once in the same household in a past lifeTargetIsFamilyInPastLifeEqualIf Target (ghost) and Self were not in the same household in a past lifeTargetIsFamilyInPastLifeNotEqual |
| If Self (ghost) and the interacting character were NOT family in a past lifeSelfIsFamilyInPastLifeNotEqualIf Target (ghost) and Self were once in the same household in a past lifeTargetIsFamilyInPastLifeEqualIf Target (ghost) and Self were not in the same household in a past lifeTargetIsFamilyInPastLifeNotEqual |
| If Target (ghost) and Self were once in the same household in a past lifeTargetIsFamilyInPastLifeEqualIf Target (ghost) and Self were not in the same household in a past lifeTargetIsFamilyInPastLifeNotEqual |
| If Target (ghost) and Self were not in the same household in a past lifeTargetIsFamilyInPastLifeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
