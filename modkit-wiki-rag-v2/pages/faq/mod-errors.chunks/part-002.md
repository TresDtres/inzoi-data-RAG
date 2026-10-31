---
document_id: "969847293122e7075e2c4f23111e75b63d0bfb3e9b0c407c6ceef7fff7a75a8c"
source: "faq"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/faq/mod-errors"
title: "Mod Error Codes ( EB1ModError )"
section: "faq/mod-errors"
breadcrumb: ["ModKit Documentation", "FAQ"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:21+00:00"
content_sha256: "7e7f4f5f6cc12071776449d7076ad2d86f38688413bf6b5e4fb34fa04c8e6912"
chunk: 2
chunk_count: 2
page_type: "article"
route: "faq/mod-errors"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| ScenarioDetailsAsset Hash JSON missingContains MPC assets but hash file is missingMPC GUID mismatch`MaterialParameterCollection` `StateId` differs from the gameMPC path invalid/load failureAsset hash JSON contains an invalid MPC pathMaterial structure hash mismatchMaterial parameter structure has changed (e.g. game update)Material path invalid/load failureMaterial asset does not existMFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| --- |
| Asset Hash JSON missingContains MPC assets but hash file is missingMPC GUID mismatch`MaterialParameterCollection` `StateId` differs from the gameMPC path invalid/load failureAsset hash JSON contains an invalid MPC pathMaterial structure hash mismatchMaterial parameter structure has changed (e.g. game update)Material path invalid/load failureMaterial asset does not existMFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| MPC GUID mismatch`MaterialParameterCollection` `StateId` differs from the gameMPC path invalid/load failureAsset hash JSON contains an invalid MPC pathMaterial structure hash mismatchMaterial parameter structure has changed (e.g. game update)Material path invalid/load failureMaterial asset does not existMFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| MPC path invalid/load failureAsset hash JSON contains an invalid MPC pathMaterial structure hash mismatchMaterial parameter structure has changed (e.g. game update)Material path invalid/load failureMaterial asset does not existMFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| Material structure hash mismatchMaterial parameter structure has changed (e.g. game update)Material path invalid/load failureMaterial asset does not existMFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| Material path invalid/load failureMaterial asset does not existMFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| MFI hash mismatch`MaterialFunctionInstance` structure has changedMFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| MFI path invalid/load failureMFI asset does not existDA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| DA exists as pak assetDataAsset is packaged as a pak asset instead of JSONAnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| AnimMontage Notify class load failureNotify class referenced by montage does not existAnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |
| AnimMontage Notify property mismatchNotify class properties differ from the game (added/removed) |

---

**`LuaScriptError`**

**Cause**: Lua script validation failed for the mod.

| ScenarioDetails`.lua`/`.luapak` mixed usageBoth formats used simultaneously in one modStatic analysis (luacheck) execution failureError occurred while running the analysis toolAnalysis result file missingAnalysis output file was not generatedAnalysis result parse failureOutput JSON file has an invalid formatLua diagnostic error detectedStatic analysis found error-level diagnostic results |
| --- |
| `.lua`/`.luapak` mixed usageBoth formats used simultaneously in one modStatic analysis (luacheck) execution failureError occurred while running the analysis toolAnalysis result file missingAnalysis output file was not generatedAnalysis result parse failureOutput JSON file has an invalid formatLua diagnostic error detectedStatic analysis found error-level diagnostic results |
| Static analysis (luacheck) execution failureError occurred while running the analysis toolAnalysis result file missingAnalysis output file was not generatedAnalysis result parse failureOutput JSON file has an invalid formatLua diagnostic error detectedStatic analysis found error-level diagnostic results |
| Analysis result file missingAnalysis output file was not generatedAnalysis result parse failureOutput JSON file has an invalid formatLua diagnostic error detectedStatic analysis found error-level diagnostic results |
| Analysis result parse failureOutput JSON file has an invalid formatLua diagnostic error detectedStatic analysis found error-level diagnostic results |
| Lua diagnostic error detectedStatic analysis found error-level diagnostic results |

---

**- `OldModKitVersion`**

**Cause**: The mod was built with an outdated ModKit version.

| ScenarioDetailsModKit changelist below minimumThe second digit (changelist) of the mod version is below the minimum requirement (`11246`) |
| --- |
| ModKit changelist below minimumThe second digit (changelist) of the mod version is below the minimum requirement (`11246`) |

note

This check only applies to UE 5.6+ builds.

---

**3.Mod states (`EB1ModState`)**

| StateDescription`Active`Activated and applied to the game`Inspecting`Compatibility check in progress`Unreachable`Mod directory is inaccessible`Broken`Structure is corrupted`RuntimeError`Deactivated due to inspection failure`AddedInGame`Mod added in-game |
| --- |
| `Active`Activated and applied to the game`Inspecting`Compatibility check in progress`Unreachable`Mod directory is inaccessible`Broken`Structure is corrupted`RuntimeError`Deactivated due to inspection failure`AddedInGame`Mod added in-game |
| `Inspecting`Compatibility check in progress`Unreachable`Mod directory is inaccessible`Broken`Structure is corrupted`RuntimeError`Deactivated due to inspection failure`AddedInGame`Mod added in-game |
| `Unreachable`Mod directory is inaccessible`Broken`Structure is corrupted`RuntimeError`Deactivated due to inspection failure`AddedInGame`Mod added in-game |
| `Broken`Structure is corrupted`RuntimeError`Deactivated due to inspection failure`AddedInGame`Mod added in-game |
| `RuntimeError`Deactivated due to inspection failure`AddedInGame`Mod added in-game |
| `AddedInGame`Mod added in-game |
