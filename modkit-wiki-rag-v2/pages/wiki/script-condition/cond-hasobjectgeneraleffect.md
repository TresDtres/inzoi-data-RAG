---
document_id: "83f8a2477331a2edec9ba476a402d9c50de119eb1fb0d5158de568af1d39afea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect"
title: "Condition_HasObjectGeneralEffect"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:09+00:00"
content_sha256: "bd02049e709eb1d9e27a0d990f1ff797e4ee005ffca3f61dc118c0ac833c4d3e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasobjectgeneraleffect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject has the specified general effect type (S1) at the specified quality grade (S2). If S2 is not provided, only checks whether the effect exists (grade is not None). Supported effect types: Durability, Efficiency, Performance.

# Parameters

| ParameterDescriptionBaseObjectThe game object to check for general effects (Self or Target)CompareTypeComparison operator: Equal, NotEqualS1General effect type: Durability, Efficiency, or Performance (EB1ObjectGeneralEffectType)S2(Optional) Quality grade to compare against. EB1Quality for Durability/Efficiency, EB1ObjectPerformanceQuality for Performance |
| --- |
| BaseObjectThe game object to check for general effects (Self or Target)CompareTypeComparison operator: Equal, NotEqualS1General effect type: Durability, Efficiency, or Performance (EB1ObjectGeneralEffectType)S2(Optional) Quality grade to compare against. EB1Quality for Durability/Efficiency, EB1ObjectPerformanceQuality for Performance |
| CompareTypeComparison operator: Equal, NotEqualS1General effect type: Durability, Efficiency, or Performance (EB1ObjectGeneralEffectType)S2(Optional) Quality grade to compare against. EB1Quality for Durability/Efficiency, EB1ObjectPerformanceQuality for Performance |
| S1General effect type: Durability, Efficiency, or Performance (EB1ObjectGeneralEffectType)S2(Optional) Quality grade to compare against. EB1Quality for Durability/Efficiency, EB1ObjectPerformanceQuality for Performance |
| S2(Optional) Quality grade to compare against. EB1Quality for Durability/Efficiency, EB1ObjectPerformanceQuality for Performance |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if Target has any Durability general effectTargetHasObjectGeneralEffectEqualDurabilityCheck if Self has any Efficiency general effectSelfHasObjectGeneralEffectEqualEfficiencyCheck if Target Durability effect is Good gradeTargetHasObjectGeneralEffectEqualDurabilityGoodCheck if Target has no Performance general effectTargetHasObjectGeneralEffectNotEqualPerformance |
| --- |
| Check if Target has any Durability general effectTargetHasObjectGeneralEffectEqualDurabilityCheck if Self has any Efficiency general effectSelfHasObjectGeneralEffectEqualEfficiencyCheck if Target Durability effect is Good gradeTargetHasObjectGeneralEffectEqualDurabilityGoodCheck if Target has no Performance general effectTargetHasObjectGeneralEffectNotEqualPerformance |
| Check if Self has any Efficiency general effectSelfHasObjectGeneralEffectEqualEfficiencyCheck if Target Durability effect is Good gradeTargetHasObjectGeneralEffectEqualDurabilityGoodCheck if Target has no Performance general effectTargetHasObjectGeneralEffectNotEqualPerformance |
| Check if Target Durability effect is Good gradeTargetHasObjectGeneralEffectEqualDurabilityGoodCheck if Target has no Performance general effectTargetHasObjectGeneralEffectNotEqualPerformance |
| Check if Target has no Performance general effectTargetHasObjectGeneralEffectNotEqualPerformance |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
