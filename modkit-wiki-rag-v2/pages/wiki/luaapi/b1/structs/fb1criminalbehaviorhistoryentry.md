---
document_id: "914d4280e2e117420eda71bea98d64a9ca94aa6f94b46a3efe34301b576bddbb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1criminalbehaviorhistoryentry"
title: "FB1CriminalBehaviorHistoryEntry"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:35+00:00"
content_sha256: "52d54d8d6d92622c055d696012746371e464dffd862cfce1cb99674bf6e94bf5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1criminalbehaviorhistoryentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A history entry that records a single criminal behavior event. Stores information about when and how a crime was committed, including the source interaction and target.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`CrimeId``string`Crime definition ID this history entry is associated with (FB1CrimeTableRow::Id).`SourceInteractionId``string`Interaction ID that triggered this crime event, if it was caused by an interaction.`SourceMobileMessageTag``string`Mobile message tag that triggered this crime event, if it was caused by a mobile message.`SourceScriptTriggerTag``string`Script trigger key that triggered this crime event, if it was raised by the TriggerCriminalBehavior execute.`SourceTalkInteractionBagId``string`Talk interaction bag ID that triggered this crime event, if it was caused by talk.`SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| --- |
| `CrimeId``string`Crime definition ID this history entry is associated with (FB1CrimeTableRow::Id).`SourceInteractionId``string`Interaction ID that triggered this crime event, if it was caused by an interaction.`SourceMobileMessageTag``string`Mobile message tag that triggered this crime event, if it was caused by a mobile message.`SourceScriptTriggerTag``string`Script trigger key that triggered this crime event, if it was raised by the TriggerCriminalBehavior execute.`SourceTalkInteractionBagId``string`Talk interaction bag ID that triggered this crime event, if it was caused by talk.`SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `SourceInteractionId``string`Interaction ID that triggered this crime event, if it was caused by an interaction.`SourceMobileMessageTag``string`Mobile message tag that triggered this crime event, if it was caused by a mobile message.`SourceScriptTriggerTag``string`Script trigger key that triggered this crime event, if it was raised by the TriggerCriminalBehavior execute.`SourceTalkInteractionBagId``string`Talk interaction bag ID that triggered this crime event, if it was caused by talk.`SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `SourceMobileMessageTag``string`Mobile message tag that triggered this crime event, if it was caused by a mobile message.`SourceScriptTriggerTag``string`Script trigger key that triggered this crime event, if it was raised by the TriggerCriminalBehavior execute.`SourceTalkInteractionBagId``string`Talk interaction bag ID that triggered this crime event, if it was caused by talk.`SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `SourceScriptTriggerTag``string`Script trigger key that triggered this crime event, if it was raised by the TriggerCriminalBehavior execute.`SourceTalkInteractionBagId``string`Talk interaction bag ID that triggered this crime event, if it was caused by talk.`SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `SourceTalkInteractionBagId``string`Talk interaction bag ID that triggered this crime event, if it was caused by talk.`SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `SourceVehicleAccidentId``string`Vehicle accident ID that triggered this crime event, if it was caused by a vehicle accident.`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity that was the main target.`Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `Timestamp``integer`Time when this crime score history entry was recorded.`bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
| `bConditionsPassed``boolean`True if the crime conditions (FB1CriminalBehavior::ConditionIds) were satisfied. |
