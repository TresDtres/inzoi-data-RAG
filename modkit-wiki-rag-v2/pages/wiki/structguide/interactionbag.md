---
document_id: "05c2a145a8f74c16667142bcfac8decc71f5409b7f3b786bf1cbd4484d43820a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbag"
title: "📘 InteractionBag Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:50+00:00"
content_sha256: "fe7c84f65fbad8c9500563aa248b688c9007b13999d0707bb21330fad88b239a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/interactionbag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1InteractionBagTableRow

Defines a group of related interactions, including display settings, scripts, rewards, and behavior flags.

### Properties

- **Id** (`FName`): Unique identifier for this interaction bag.
- **InteractionRewards** (`TArray<FB1InteractionReward>`): List of rewards granted from interactions.
- **PreferenceRewards** (`TArray<FB1InteractionPreferenceReward>`): List of preference-based rewards granted from interactions.
- **InteractionBagTags** (`TArray<FName>`): Tags associated with this interaction bag.
- **AutonomyGroupTag** (`FName`): InteractionBags are grouped by Autonomy GroupId. One of Grouped Interactions will be Selected before Evaluate Autonomy.
- **GroupID** (`FName`): Group ID to categorize interaction bags.
- **InteractionBagCategory** (`FName`): Category of this interaction bag.
- **StrongEmotionFilters** (`TArray<FB1EmotionFilterKey>`): Specifies which emotions allow this interaction bag to be available when having a strong emotion. Only applies to Talk interactions.
- **EnqueueConditionId** (`FName`): ID referencing the enqueue condition. *(Foreign = "EnqueueCondition.Id")*
- **InteractionConditionId** (`FName`): ID referencing the interaction condition. *(Foreign = "InteractionCondition.Id")*
- **AgingConditionFlags** (`int32`): Flags representing aging conditions. *(BitmaskEnum = EB1GrowthStep)*
- **InteractionSequence** (`TArray<FB1InteractionSequenceInfo>`): List of interaction sequences associated with this bag.
- **DisplayInfo** (`FB1InteractionDisplayInfo`): Display information for this interaction bag.
- **bRejectable** (`bool`): Determines if this interaction can be rejected.
- **bUniqueInQueue** (`bool`): Ensures uniqueness of this interaction in the queue.
- **bForFixedDesk** (`bool`): Determines if this interaction is fixed to a desk.
- **bNonCancelable** (`bool`): Determines if this interaction cannot be canceled.
- **SelectedScriptId** (`FName`): ID referencing the selected script (references DT_Script). *(Foreign = "Script_Interaction.Id")*
- **StartScriptIds** (`TArray<FName>`): ID referencing the start script. *(Foreign = "Script_Interaction.Id")*
- **FinishScriptIds** (`TArray<FName>`): ID referencing the finish script. *(Foreign = "Script_Interaction.Id")*
- **ConsumeCurrencyId** (`FName`): ID of the currency required for this interaction. *(Foreign = "Currency.Id")*
- **ConsumeCurrencyValue** (`int64`): Amount of currency required for this interaction.
- **bIgnoreConsumeCurrencyCheck** (`bool`): Determines if currency consumption checks should be ignored.
- **bGhostAvailable** (`bool`): Determines if this interaction is available to ghosts.
- **bAlwaysExposeToSLM** (`bool`): Determines if this interaction should always be exposed to SLM.
- **AutonomySLMCooltimeMin** (`int32`): Minimum cooldown time for SLM autonomy (in minutes).
- **ActionsPerformedInThePastHourText** (`FName`): Text ID for actions performed in the past hour.
- **ActionHintText** (`FName`): Text ID for action hints.
- **CurrentStateHintText** (`FName`): Text ID for current state hints.
- **ActionHintTextForSLM** (`FName`): Text ID for SLM-specific action hints.
- **ActionHintTextList** (`FName`): Text ID for a list of action hints.

## 📚 References

- [FB1InteractionReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionreward)
- [FB1InteractionPreferenceReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionpreferencereward)
- [FB1TraitReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitreward)
- [FB1PreferenceReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereward)
- [FB1EmotionReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1emotionreward)
- [FB1RelationshipReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1relationshipreward)
- [FB1InteractionDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondisplayinfo)
- [FB1InteractionSequenceInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionsequenceinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoInteraction[Interaction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interaction)[InteractionBagGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbaggroup)[InteractionBagWhitelist Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbagwhitelistbuff)[InteractionCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactioncategory)[FB1InteractionBagGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbaggrouptablerow)[FB1InteractionBagTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtablerow)[FB1InteractionBagTagTooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtagtooltiptablerow)[FB1InteractionBagWhitelistBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagwhitelistbuff)[FB1InteractionBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbasicinfo)[FB1InteractionCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactioncategorytablerow)[FB1InteractionDesire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondesire)[FB1InteractionDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondisplayinfo)
