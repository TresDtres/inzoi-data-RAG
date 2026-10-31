---
document_id: "2a6fb6d6de1eb04200c84ab663eb2dbf1fcefe8a7a679b0a9a35ab78001643f1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1traitscript"
title: "FB1TraitScript"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:44+00:00"
content_sha256: "f573361961e3f2636f6dfa8d8e7df0bb6e9e4453efb300d686744d3891548d4f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/scripts/fb1traitscript"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a script block for a trait, specifying entry type, check interval, proximity constraints, triggers, conditions, and executes.

# Metadata

| FieldValueKind`script`EnvironmentB1 - PresentationCategory`scripts` |
| --- |
| Kind`script`EnvironmentB1 - PresentationCategory`scripts` |
| EnvironmentB1 - PresentationCategory`scripts` |
| Category`scripts` |

# Properties (8)

| NameTypeDescription`CheckInterval``number`Interval in seconds between successive evaluations of this script.`CircleConstraintSquared``number`Squared radius of the proximity circle constraint used for character proximity checks.`Conditions``FB1Condition[]`Conditions that must all be satisfied for this trait script to execute.`EventTriggers``FB1TraitEventTrigger[]`List of event triggers that can activate this trait script.`Executes``FB1Execute[]`List of actions executed when all conditions and triggers are satisfied.`NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| --- |
| `CheckInterval``number`Interval in seconds between successive evaluations of this script.`CircleConstraintSquared``number`Squared radius of the proximity circle constraint used for character proximity checks.`Conditions``FB1Condition[]`Conditions that must all be satisfied for this trait script to execute.`EventTriggers``FB1TraitEventTrigger[]`List of event triggers that can activate this trait script.`Executes``FB1Execute[]`List of actions executed when all conditions and triggers are satisfied.`NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `CircleConstraintSquared``number`Squared radius of the proximity circle constraint used for character proximity checks.`Conditions``FB1Condition[]`Conditions that must all be satisfied for this trait script to execute.`EventTriggers``FB1TraitEventTrigger[]`List of event triggers that can activate this trait script.`Executes``FB1Execute[]`List of actions executed when all conditions and triggers are satisfied.`NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `Conditions``FB1Condition[]`Conditions that must all be satisfied for this trait script to execute.`EventTriggers``FB1TraitEventTrigger[]`List of event triggers that can activate this trait script.`Executes``FB1Execute[]`List of actions executed when all conditions and triggers are satisfied.`NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `EventTriggers``FB1TraitEventTrigger[]`List of event triggers that can activate this trait script.`Executes``FB1Execute[]`List of actions executed when all conditions and triggers are satisfied.`NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `Executes``FB1Execute[]`List of actions executed when all conditions and triggers are satisfied.`NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `NeedCharacterCount``integer`Minimum number of other characters required within range for this script to activate.`RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `RequiredTriggerCount``integer`(AccumulatedTrigger only) Number of triggers required within a single in-game day before firing Executes[0]. Counter resets at day boundary.`TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
| `TraitEntryType`[`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)Entry type that controls when and how this trait script is evaluated. |
