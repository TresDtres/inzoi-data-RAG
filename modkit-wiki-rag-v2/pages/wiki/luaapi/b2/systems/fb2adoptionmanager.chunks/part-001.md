---
document_id: "84623be2f9ae9e8b09f34252d3d896e9a0bae4536730ac9f95a28460405a14db"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2adoptionmanager"
title: "FB2AdoptionManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "e2da035d42f4f0eb3655d48a0d9454122732ace2354b6c4532042550c0e9bc54"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2adoptionmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages adoption flows.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AdoptionManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AdoptionManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AdoptionManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AdoptionManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AdoptionManager')` |
| Require`require('Systems.B2AdoptionManager')` |

# Properties (10)

| NameTypeDescription`AdoptionDatas``table<integer, FB1CharacterAttribute>`Primitive data treated as not yet assigned an EntityId until actually adopted.`AdoptionTimetaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`CachedMedicalAdoptionGenerateParam``FB2CharacterGenerateParam``CityName``string``CyclePerSeconds``integer``GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| --- |
| `AdoptionDatas``table<integer, FB1CharacterAttribute>`Primitive data treated as not yet assigned an EntityId until actually adopted.`AdoptionTimetaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`CachedMedicalAdoptionGenerateParam``FB2CharacterGenerateParam``CityName``string``CyclePerSeconds``integer``GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `AdoptionTimetaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`CachedMedicalAdoptionGenerateParam``FB2CharacterGenerateParam``CityName``string``CyclePerSeconds``integer``GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `CachedMedicalAdoptionGenerateParam``FB2CharacterGenerateParam``CityName``string``CyclePerSeconds``integer``GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `CityName``string``CyclePerSeconds``integer``GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `CyclePerSeconds``integer``GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `GeneticProviderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `MaxPoolCount``integer``UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `UpdateAdoptionQueue``EB1GrowthStep[]``bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `bHasExplicitGeneticProvider``boolean``bIsResetAdoptionData``boolean` |
| `bIsResetAdoptionData``boolean` |

# Functions (5)

| FunctionParametersReturnsDescription`MakeMedicalAdoption`InRequesterEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InFirstName: `string`, InLastName: `string``-`Makes Medical Adoption.`QueryAdoptable`InAdoptionType: [`EB1AdoptionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1adoptiontype), InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAdoptionIndex: `integer`[`EB1AdoptionFailureReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1adoptionfailurereason)`RequestAdoption_Medical`InDataParam: [`FB1MedicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1medicaladoptionparam)`-`Requests Adoption_Medical.`RequestAdoption_Physical`InDataParam: [`FB1PhysicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1physicaladoptionparam)`-`Requests Adoption_Physical.`SendGenerateAdoptionDatas``-``-`Sends Generate Adoption Datas. |
| --- |
| `MakeMedicalAdoption`InRequesterEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InFirstName: `string`, InLastName: `string``-`Makes Medical Adoption.`QueryAdoptable`InAdoptionType: [`EB1AdoptionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1adoptiontype), InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAdoptionIndex: `integer`[`EB1AdoptionFailureReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1adoptionfailurereason)`RequestAdoption_Medical`InDataParam: [`FB1MedicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1medicaladoptionparam)`-`Requests Adoption_Medical.`RequestAdoption_Physical`InDataParam: [`FB1PhysicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1physicaladoptionparam)`-`Requests Adoption_Physical.`SendGenerateAdoptionDatas``-``-`Sends Generate Adoption Datas. |
| `QueryAdoptable`InAdoptionType: [`EB1AdoptionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1adoptiontype), InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InAdoptionIndex: `integer`[`EB1AdoptionFailureReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1adoptionfailurereason)`RequestAdoption_Medical`InDataParam: [`FB1MedicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1medicaladoptionparam)`-`Requests Adoption_Medical.`RequestAdoption_Physical`InDataParam: [`FB1PhysicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1physicaladoptionparam)`-`Requests Adoption_Physical.`SendGenerateAdoptionDatas``-``-`Sends Generate Adoption Datas. |
| `RequestAdoption_Medical`InDataParam: [`FB1MedicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1medicaladoptionparam)`-`Requests Adoption_Medical.`RequestAdoption_Physical`InDataParam: [`FB1PhysicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1physicaladoptionparam)`-`Requests Adoption_Physical.`SendGenerateAdoptionDatas``-``-`Sends Generate Adoption Datas. |
| `RequestAdoption_Physical`InDataParam: [`FB1PhysicalAdoptionParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1physicaladoptionparam)`-`Requests Adoption_Physical.`SendGenerateAdoptionDatas``-``-`Sends Generate Adoption Datas. |
| `SendGenerateAdoptionDatas``-``-`Sends Generate Adoption Datas. |

# Override points (3)

Implement these in Lua as `FB2AdoptionManager.Override_Name = function(...) end`.
