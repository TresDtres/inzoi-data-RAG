---
document_id: "31526a2b4f96f715ebde7a15a27e92bea04e4ef5b7cc69bf7e1c40dd5a283cb2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isprofilelocked"
title: "Condition_IsProfileLocked"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:41+00:00"
content_sha256: "c922644b5d8a938eeb512e4006a7967cee014896d1375299a3bcee2cdfacaea4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isprofilelocked"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the specified profile information of the target character is locked or unlocked from the perspective of Self (the instigator). Profile lock status depends on relationship progress. Equal means the profile is locked; NotEqual means it is unlocked (visible to Self).

# Parameters

| ParameterDescriptionBaseObjectThe character whose profile lock status is checked (typically Target)CompareTypeEqual (profile is locked), NotEqual (profile is unlocked/visible)S1Profile type to check (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |
| --- |
| BaseObjectThe character whose profile lock status is checked (typically Target)CompareTypeEqual (profile is locked), NotEqual (profile is unlocked/visible)S1Profile type to check (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |
| CompareTypeEqual (profile is locked), NotEqual (profile is unlocked/visible)S1Profile type to check (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |
| S1Profile type to check (Marriage, Trait, Job, TraitValue, Preference, RomanticOrientation, RomanceTarget, CriminalBehavior, Imprisonment) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Self can see Target's trait informationTargetIsProfileLockedNotEqualTraitSelf cannot see Target's job informationTargetIsProfileLockedEqualJobSelf can see Target's romantic orientationTargetIsProfileLockedNotEqualRomanticOrientationSelf cannot see Target's marriage statusTargetIsProfileLockedEqualMarriage |
| --- |
| Self can see Target's trait informationTargetIsProfileLockedNotEqualTraitSelf cannot see Target's job informationTargetIsProfileLockedEqualJobSelf can see Target's romantic orientationTargetIsProfileLockedNotEqualRomanticOrientationSelf cannot see Target's marriage statusTargetIsProfileLockedEqualMarriage |
| Self cannot see Target's job informationTargetIsProfileLockedEqualJobSelf can see Target's romantic orientationTargetIsProfileLockedNotEqualRomanticOrientationSelf cannot see Target's marriage statusTargetIsProfileLockedEqualMarriage |
| Self can see Target's romantic orientationTargetIsProfileLockedNotEqualRomanticOrientationSelf cannot see Target's marriage statusTargetIsProfileLockedEqualMarriage |
| Self cannot see Target's marriage statusTargetIsProfileLockedEqualMarriage |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
