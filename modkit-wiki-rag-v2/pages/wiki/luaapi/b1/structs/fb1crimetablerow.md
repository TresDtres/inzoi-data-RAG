---
document_id: "c18347e6064f58a6dfe716079eb42f50d6f19b2b75542a7bef09fdc8d52bd6ad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1crimetablerow"
title: "FB1CrimeTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:35+00:00"
content_sha256: "c4bbd3ce2cfd528326b01618dcd28567393cc4bb058b4ce9cb548a9b067bb138"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1crimetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Crime definition table row. Defines a specific type of crime, its score thresholds, associated behaviors, and scripts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (7)

| NameTypeDescription`CrimeReportScriptIds``string[]`Script IDs to execute when this crime is reported.`CrimeScoreMax``number`Maximum allowed crime score for this crime.`CrimeScoreMin``number`Minimum allowed crime score for this crime.`CrimeScoreReportThreshold``number`Crime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.`CriminalBehaviorScriptIds``string[]`Script IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.`CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| --- |
| `CrimeReportScriptIds``string[]`Script IDs to execute when this crime is reported.`CrimeScoreMax``number`Maximum allowed crime score for this crime.`CrimeScoreMin``number`Minimum allowed crime score for this crime.`CrimeScoreReportThreshold``number`Crime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.`CriminalBehaviorScriptIds``string[]`Script IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.`CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| `CrimeScoreMax``number`Maximum allowed crime score for this crime.`CrimeScoreMin``number`Minimum allowed crime score for this crime.`CrimeScoreReportThreshold``number`Crime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.`CriminalBehaviorScriptIds``string[]`Script IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.`CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| `CrimeScoreMin``number`Minimum allowed crime score for this crime.`CrimeScoreReportThreshold``number`Crime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.`CriminalBehaviorScriptIds``string[]`Script IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.`CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| `CrimeScoreReportThreshold``number`Crime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.`CriminalBehaviorScriptIds``string[]`Script IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.`CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| `CriminalBehaviorScriptIds``string[]`Script IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.`CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| `CriminalBehaviors``FB1CriminalBehavior[]`List of behaviors that belong to this crime.`DisplayTextId``string`String table key for the localized display name of this crime. |
| `DisplayTextId``string`String table key for the localized display name of this crime. |
