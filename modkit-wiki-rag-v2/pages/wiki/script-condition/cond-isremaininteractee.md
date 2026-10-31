---
document_id: "fafd89a89d24d9dc9b2707d426f77375faf4a529c02afcb161ccfa4a2ec0c4f7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isremaininteractee"
title: "Condition_IsRemainInteractee"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:42+00:00"
content_sha256: "117a1efb4d89a0ce5db6719134e5de5768d96d4780f798e7e37faded0c0ff9e3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isremaininteractee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether there are remaining interactable entities (Interactees) associated with the given GameObject, excluding the NonBaseObject entity itself. Returns true if at least one other interactee exists in the set. If the checked entity is in the set, requires more than one total interactee to return true. If the checked entity is not in the set, any non-empty set returns true.

# Parameters

| ParameterDescriptionBaseObjectThe owner GameObject whose interactee set is checkedCompareTypeEqual: at least one remaining interactee exists; NotEqual: none remaining |
| --- |
| BaseObjectThe owner GameObject whose interactee set is checkedCompareTypeEqual: at least one remaining interactee exists; NotEqual: none remaining |
| CompareTypeEqual: at least one remaining interactee exists; NotEqual: none remaining |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if other interactees remain besides NonBaseSelfIsRemainInteracteeEqualCheck if no interactees remain besides NonBaseTargetIsRemainInteracteeNotEqual |
| --- |
| Check if other interactees remain besides NonBaseSelfIsRemainInteracteeEqualCheck if no interactees remain besides NonBaseTargetIsRemainInteracteeNotEqual |
| Check if no interactees remain besides NonBaseTargetIsRemainInteracteeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
