---
document_id: "315b3ff739b1bc1d7569ffe59bf669eb76183493d375e918c66e537f484acc61"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isaffairwithmypartner"
title: "Condition_IsAffairWithMyPartner"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "d6582086824e515e26f9d764256eb67e60ddd3a08bfec5fd089d15ab2d0e54ae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isaffairwithmypartner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the person currently being observed together with BaseObject's counterpart is in fact BaseObject's own partner. Resolves the counterpart (the opposite side of BaseObject) and its current Coop companions, then returns true if either the counterpart itself or one of its companions is BaseObject's partner. Used to detect that BaseObject is witnessing their own partner's affair.

# Parameters

| ParameterDescriptionBaseObjectThe observer whose partner is being checked for (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual) |
| --- |
| BaseObjectThe observer whose partner is being checked for (Self or Target)CompareTypeType of comparison operation (Equal, NotEqual) |
| CompareTypeType of comparison operation (Equal, NotEqual) |

# Examples

| DescriptionBaseObjectCommandCompareTypeSelf is witnessing Target (or Target's companion) as Self's partner in an affairSelfIsAffairWithMyPartnerEqualSelf is NOT witnessing an affair involving Self's own partnerSelfIsAffairWithMyPartnerNotEqualTarget is witnessing Self (or Self's companion) as Target's partner in an affairTargetIsAffairWithMyPartnerEqual |
| --- |
| Self is witnessing Target (or Target's companion) as Self's partner in an affairSelfIsAffairWithMyPartnerEqualSelf is NOT witnessing an affair involving Self's own partnerSelfIsAffairWithMyPartnerNotEqualTarget is witnessing Self (or Self's companion) as Target's partner in an affairTargetIsAffairWithMyPartnerEqual |
| Self is NOT witnessing an affair involving Self's own partnerSelfIsAffairWithMyPartnerNotEqualTarget is witnessing Self (or Self's companion) as Target's partner in an affairTargetIsAffairWithMyPartnerEqual |
| Target is witnessing Self (or Self's companion) as Target's partner in an affairTargetIsAffairWithMyPartnerEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
