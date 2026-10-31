---
document_id: "c07500eafe506b56c9b08f2463f02c6cb2bdc5cda8fd6dbc146f29ccf1f3de9e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1criminalbehavior"
title: "FB1CriminalBehavior"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:35+00:00"
content_sha256: "5e80788e038664fe1254aaedd378d3773526a90d5fe6740bbd064f8de48f46ac"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1criminalbehavior"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Definition of a criminal behavior. Specifies interactions that constitute criminal activity.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`ConditionIds``string[]`Conditions that must all pass (logical AND) for this behavior's crime score change to be applied.`InteractionIds``string[]`List of interaction IDs that are treated as part of this criminal behavior.`MobileMessageTags``string[]`List of mobile message tags that are treated as part of this criminal behavior. When a received message (FB1MobileMessageTableRow::Tags) contains any of these tags, this behavior is triggered on the sender.`ScoreAddMax``number`Maximum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScoreAddMin``number`Minimum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| --- |
| `ConditionIds``string[]`Conditions that must all pass (logical AND) for this behavior's crime score change to be applied.`InteractionIds``string[]`List of interaction IDs that are treated as part of this criminal behavior.`MobileMessageTags``string[]`List of mobile message tags that are treated as part of this criminal behavior. When a received message (FB1MobileMessageTableRow::Tags) contains any of these tags, this behavior is triggered on the sender.`ScoreAddMax``number`Maximum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScoreAddMin``number`Minimum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `InteractionIds``string[]`List of interaction IDs that are treated as part of this criminal behavior.`MobileMessageTags``string[]`List of mobile message tags that are treated as part of this criminal behavior. When a received message (FB1MobileMessageTableRow::Tags) contains any of these tags, this behavior is triggered on the sender.`ScoreAddMax``number`Maximum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScoreAddMin``number`Minimum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `MobileMessageTags``string[]`List of mobile message tags that are treated as part of this criminal behavior. When a received message (FB1MobileMessageTableRow::Tags) contains any of these tags, this behavior is triggered on the sender.`ScoreAddMax``number`Maximum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScoreAddMin``number`Minimum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `ScoreAddMax``number`Maximum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScoreAddMin``number`Minimum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `ScoreAddMin``number`Minimum amount of crime score to add (or subtract, if negative) when this behavior is successfully evaluated.`ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `ScriptTriggerTags``string[]`List of script trigger keys that are treated as part of this criminal behavior. The TriggerCriminalBehavior execute passes one of these keys in S2 (with this crime's Id in S1) to raise this behavior. Used for crimes that are not driven by a single interaction or talk, such as an active mode assault.`TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `TalkInteractionBagIds``string[]`List of talk interaction bag IDs that are treated as part of this criminal behavior.`VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
| `VehicleAccidentIds``string[]`List of vehicle accident IDs that are treated as part of this criminal behavior. |
