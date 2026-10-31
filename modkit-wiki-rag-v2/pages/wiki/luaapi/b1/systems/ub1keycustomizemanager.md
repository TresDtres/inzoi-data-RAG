---
document_id: "705c1c8d7cc123dba6813e86976b9f0fa297e6628cb899e76068f789ae571b89"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1keycustomizemanager"
title: "UB1KeyCustomizeManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:56+00:00"
content_sha256: "e43d693f97097f7121848c0823355143f67f634dacd157d0f2ba634d55d18878"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1keycustomizemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- KeyCustomize manager.

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| Category`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |

# Properties (12)

| NameTypeDescription`ActionNameMapByMode``table<EB1GameMode, FActionNameToInputActionMap>`Per-mode ActionName(FName) -> InputAction mapping cache.`CachedGameActionDataAsset``mutable`TObjectPtr`CachedInputActionByNameMap``table<string, any>`FName -> LoadedPtr cache.`CachedInputActionMap``table<UInputAction, any>`SoftPtr -> LoadedPtr cache.`CachedMappingNameToActionMap``table<string, any>`MappingName -> InputAction direct mapping cache (keyed by the base name with the suffix removed).`CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| --- |
| `ActionNameMapByMode``table<EB1GameMode, FActionNameToInputActionMap>`Per-mode ActionName(FName) -> InputAction mapping cache.`CachedGameActionDataAsset``mutable`TObjectPtr`CachedInputActionByNameMap``table<string, any>`FName -> LoadedPtr cache.`CachedInputActionMap``table<UInputAction, any>`SoftPtr -> LoadedPtr cache.`CachedMappingNameToActionMap``table<string, any>`MappingName -> InputAction direct mapping cache (keyed by the base name with the suffix removed).`CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedGameActionDataAsset``mutable`TObjectPtr`CachedInputActionByNameMap``table<string, any>`FName -> LoadedPtr cache.`CachedInputActionMap``table<UInputAction, any>`SoftPtr -> LoadedPtr cache.`CachedMappingNameToActionMap``table<string, any>`MappingName -> InputAction direct mapping cache (keyed by the base name with the suffix removed).`CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedInputActionByNameMap``table<string, any>`FName -> LoadedPtr cache.`CachedInputActionMap``table<UInputAction, any>`SoftPtr -> LoadedPtr cache.`CachedMappingNameToActionMap``table<string, any>`MappingName -> InputAction direct mapping cache (keyed by the base name with the suffix removed).`CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedInputActionMap``table<UInputAction, any>`SoftPtr -> LoadedPtr cache.`CachedMappingNameToActionMap``table<string, any>`MappingName -> InputAction direct mapping cache (keyed by the base name with the suffix removed).`CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedMappingNameToActionMap``table<string, any>`MappingName -> InputAction direct mapping cache (keyed by the base name with the suffix removed).`CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedModifierAction_Alt``any``CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedModifierAction_Ctrl``any``CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedModifierAction_L1``any``CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedModifierAction_R1``any``CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedModifierAction_Shift``any`Keyboard modifier action cache (Shift/Ctrl/Alt).`CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedRuntimeIMCMap``table<EB1GameMode, any>`GameMode -> runtime IMC (a copy with combo mappings added; note it is not the original IMC).`CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
| `CachedRuntimeUIIMCMap``table<EB1UIType, any>` |
