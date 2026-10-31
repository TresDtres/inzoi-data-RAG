---
document_id: "9894a514509bf10a9f9f61ad0f42d2507a566ef516176cf0d46b111a8e00a4bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscurrentinteractioncareerseatowner"
title: "Condition_IsCurrentInteractionCareerSeatOwner"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:25+00:00"
content_sha256: "54129fd4a3326efe03be9419c35c1e82ae2a51120bc1369c65ff222777dc21de"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscurrentinteractioncareerseatowner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character owns the current interaction target seat of the NonBaseObject character. This is intended for Howling contexts where Self is the receiver and Target is the sender, so Self can test whether they own Target's current locker.

# Parameters

| ParamsDescriptionBaseObjectOwner candidate. NonBaseObject is the interacting character to inspect.CommandIsCurrentInteractionCareerSeatOwner.CompareTypeEqual returns true when BaseObject owns the current interaction seat.NotEqual returns true when a valid current interaction seat is not owned byBaseObject. Invalid interaction/seat/career returns false.S1Career type used to resolve the site career. None defaults to Business. |
| --- |
| BaseObjectOwner candidate. NonBaseObject is the interacting character to inspect.CommandIsCurrentInteractionCareerSeatOwner.CompareTypeEqual returns true when BaseObject owns the current interaction seat.NotEqual returns true when a valid current interaction seat is not owned byBaseObject. Invalid interaction/seat/career returns false.S1Career type used to resolve the site career. None defaults to Business. |
| CommandIsCurrentInteractionCareerSeatOwner.CompareTypeEqual returns true when BaseObject owns the current interaction seat.NotEqual returns true when a valid current interaction seat is not owned byBaseObject. Invalid interaction/seat/career returns false.S1Career type used to resolve the site career. None defaults to Business. |
| CompareTypeEqual returns true when BaseObject owns the current interaction seat.NotEqual returns true when a valid current interaction seat is not owned byBaseObject. Invalid interaction/seat/career returns false.S1Career type used to resolve the site career. None defaults to Business. |
| NotEqual returns true when a valid current interaction seat is not owned byBaseObject. Invalid interaction/seat/career returns false.S1Career type used to resolve the site career. None defaults to Business. |
| BaseObject. Invalid interaction/seat/career returns false.S1Career type used to resolve the site career. None defaults to Business. |
| S1Career type used to resolve the site career. None defaults to Business. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Howling receiver owns sender's lockerSelfIsCurrentInteractionCareerSeatOwnerEqualSchoolCheck if Target owns Self's current career seatTargetIsCurrentInteractionCareerSeatOwnerEqualSchool |
| --- |
| Check if Howling receiver owns sender's lockerSelfIsCurrentInteractionCareerSeatOwnerEqualSchoolCheck if Target owns Self's current career seatTargetIsCurrentInteractionCareerSeatOwnerEqualSchool |
| Check if Target owns Self's current career seatTargetIsCurrentInteractionCareerSeatOwnerEqualSchool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
