---
document_id: "306629fbcc8a56e212ad7645bdee65726220f634908f4b9585d9fc6bcb0639a8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interaction"
title: "📘 Interaction Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:50+00:00"
content_sha256: "4abe66406291b15eb8057e7a3d44b5126350420cd314f850e90836b0e26c11f6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/interaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1InteractionTableRow

Defines a single interaction entry, including conditions, slot usage, targeting, and scripts.

### Properties

- **Id** (`FName`): Unique identifier for this interaction.
- **InteractionTags** (`TArray<FName>`): Tags used to categorize or group this interaction.
- **ConditionId** (`FName`): Condition that must be satisfied to enable this interaction. *(Foreign = "InteractionCondition.Id")*
- **InteractionSlotUsage** (`EB1SlotUsageType`): Specifies the type of slot utilized by the interaction. (e.g., None, Interaction, Object, Fx, ExtraRequireSpace, Audio).
- **EnableSlotTags** (`TArray<FName>`): List of slot tags that enable this interaction when matched.
- **ObjectSlotUsage** (`EB1SlotUsageType`): How this interaction uses object slots.
- **ActionIdList** (`TArray<FName>`): Actions performed during the interaction. *(Foreign = "Action_Interaction.Id")*
- **InteractionRepeatInfoId** (`FName`): ID used to repeat the same interaction under certain logic. *(Foreign = "Interaction.Id")*
- **FeedbackInteractionBagId** (`FName`): Interaction bag of feedback interactions triggered after this interaction. *(Foreign = "InteractionBag.Id")*
- **FeedbackTarget** (`EB1FeedbackTarget`): Target affected by the FeedbackInteractionBagID.
- **AutoFindTargetType** (`EB1AutoFindTargetType`): How the system finds a target automatically for this interaction.
- **AutoFindId** (`FName`): Identifier used to resolve auto-find logic.
- **AutoFindTargetInfoList** (`TArray<FB1AutoFindTargetInfo>`): List of alternate or advanced auto-targeting rules.
- **TargetFilterInfoList** (`TArray<FB1TargetFilterInfo>`): Conditions used to filter valid targets.
- **TargetFilterFindAll** (`bool`): If true, the interaction applies to all matching targets instead of just one.
- **NoneTargetPlayable** (`bool`): If true, this interaction can be executed without a target.
- **CheckSlotToEntity** (`bool`): If true, validates slot assignment against the target entity.
- **EnableOnlyConnectedChairObjectSlot** (`bool`): If true, restricts slot use to those connected to chair objects.
- **StartScriptIdList** (`TArray<FName>`): Scripts executed at the start of the interaction. *(Foreign = "Script_Interaction.Id")*
- **CancelScriptIdList** (`TArray<FName>`): Scripts executed if the interaction is canceled. *(Foreign = "Script_Interaction.Id")*
- **FinishScriptIdList** (`TArray<FName>`): Scripts executed upon interaction completion. *(Foreign = "Script_Interaction.Id")*
- **ConsumeCurrencyId** (`FName`): Currency type required to perform the interaction. *(Foreign = "Currency.Id")*
- **ConsumeCurrencyValue** (`int64`): Amount of currency consumed when the interaction is executed.

@include Data/StructGuide/Struct/FB1AutoFindTargetInfo @include Data/StructGuide/Enum/EB1AutoFindTargetType @include Data/StructGuide/Struct/FB1TargetFilterInfo @include Data/StructGuide/Enum/EB1SlotUsageType @include Data/StructGuide/Enum/EB1FeedbackTarget

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoInteraction[InteractionBag Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbag)[InteractionBagGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbaggroup)[InteractionBagWhitelist Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbagwhitelistbuff)[InteractionCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactioncategory)[FB1InteractionBagGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbaggrouptablerow)[FB1InteractionBagTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtablerow)[FB1InteractionBagTagTooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtagtooltiptablerow)[FB1InteractionBagWhitelistBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagwhitelistbuff)[FB1InteractionBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbasicinfo)[FB1InteractionCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactioncategorytablerow)[FB1InteractionDesire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondesire)[FB1InteractionDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondisplayinfo)
