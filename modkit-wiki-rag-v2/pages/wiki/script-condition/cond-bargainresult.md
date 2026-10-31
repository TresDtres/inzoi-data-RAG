---
document_id: "5b5da8ada8f8f3c2a687b46ab5e2c6518cf00ac9ffd840c29608fa3acf34f5f5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult"
title: "Condition_BargainResult"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "ba9374f3be747c9eb4c12f3260d7c2e65b88ff04c04688af715394f943b714a3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-bargainresult"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current or final bargain result matches the expected value specified in S1. S2 selects which result phase to evaluate: "Current" checks the result of the current bargain round, while "Final" checks the overall final outcome of the bargain. The host is always obtained from Self.

# Parameters

| ParameterDescriptionBaseObjectThe host character whose bargain scheduler is queried (Self)CompareTypeEqual: result matches S1; NotEqual: result does not match S1S1Expected bargain result to compare against (None, Accept, Reject, Counter)S2Result phase to check: "Current" for the current round, "Final" for the final outcome |
| --- |
| BaseObjectThe host character whose bargain scheduler is queried (Self)CompareTypeEqual: result matches S1; NotEqual: result does not match S1S1Expected bargain result to compare against (None, Accept, Reject, Counter)S2Result phase to check: "Current" for the current round, "Final" for the final outcome |
| CompareTypeEqual: result matches S1; NotEqual: result does not match S1S1Expected bargain result to compare against (None, Accept, Reject, Counter)S2Result phase to check: "Current" for the current round, "Final" for the final outcome |
| S1Expected bargain result to compare against (None, Accept, Reject, Counter)S2Result phase to check: "Current" for the current round, "Final" for the final outcome |
| S2Result phase to check: "Current" for the current round, "Final" for the final outcome |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Did the current bargain round result in Accept?SelfBargainResultEqualAcceptCurrentWas the final bargain outcome a Reject?SelfBargainResultEqualRejectFinalIs the current round result NOT a Counter offer?SelfBargainResultNotEqualCounterCurrent |
| --- |
| Did the current bargain round result in Accept?SelfBargainResultEqualAcceptCurrentWas the final bargain outcome a Reject?SelfBargainResultEqualRejectFinalIs the current round result NOT a Counter offer?SelfBargainResultNotEqualCounterCurrent |
| Was the final bargain outcome a Reject?SelfBargainResultEqualRejectFinalIs the current round result NOT a Counter offer?SelfBargainResultNotEqualCounterCurrent |
| Is the current round result NOT a Counter offer?SelfBargainResultNotEqualCounterCurrent |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)[CanInviteStayoverGuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninvitestayoverguest)
