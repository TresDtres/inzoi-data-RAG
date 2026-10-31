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
chunk: 1
chunk_count: 2
page_type: "article"
route: "faq/mod-errors"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

This document summarizes the error codes and their causes when mod inspection (compatibility check) fails.

Definition location

`Source/BlueModManager/ModSystem/B1Mod.h`

Fatal error

When a **Fatal error** (`ConfigError`) occurs, the mod is blocked from Manifest saving and activation.

---

**1.Error code list**

| CodeDisplay nameFatal`ConfigError`Config ErrorFatal`PakFileNotFound`*(No popup)*—`UcasFileNotFound`*(No popup)*—`UtocFileNotFound`*(No popup)*—`PakMountError`*(No popup)*—`PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| --- |
| `ConfigError`Config ErrorFatal`PakFileNotFound`*(No popup)*—`UcasFileNotFound`*(No popup)*—`UtocFileNotFound`*(No popup)*—`PakMountError`*(No popup)*—`PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `PakFileNotFound`*(No popup)*—`UcasFileNotFound`*(No popup)*—`UtocFileNotFound`*(No popup)*—`PakMountError`*(No popup)*—`PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `UcasFileNotFound`*(No popup)*—`UtocFileNotFound`*(No popup)*—`PakMountError`*(No popup)*—`PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `UtocFileNotFound`*(No popup)*—`PakMountError`*(No popup)*—`PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `PakMountError`*(No popup)*—`PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `PakUnMountError`*(No popup)*—`DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `DataPatchError`Data Error—`ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `ShaderCompatibilityError`Shader Compatibility Error—`AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `AssetCompatibilityError`Asset Compatibility Error—`LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `LuaScriptError`Lua Script Error—`OldModKitVersion`Old ModKit Version— |
| `OldModKitVersion`Old ModKit Version— |

---

**2.Detailed descriptions**

**`ConfigError`**

**Cause**: The mod's base configuration file cannot be loaded.

| TriggerDetails`mod_manifest.json` load/parse failureManifest file is corrupted or does not existMod name and project name mismatchName in manifest differs from `.uplugin` file name`.uplugin` file load/parse failurePlugin descriptor is corrupted or does not exist |
| --- |
| `mod_manifest.json` load/parse failureManifest file is corrupted or does not existMod name and project name mismatchName in manifest differs from `.uplugin` file name`.uplugin` file load/parse failurePlugin descriptor is corrupted or does not exist |
| Mod name and project name mismatchName in manifest differs from `.uplugin` file name`.uplugin` file load/parse failurePlugin descriptor is corrupted or does not exist |
| `.uplugin` file load/parse failurePlugin descriptor is corrupted or does not exist |

---

**`PakFileNotFound` / `UcasFileNotFound` / `UtocFileNotFound`**

**Cause**: Mod package file structure validation failed.

| ErrorDetails`PakFileNotFound``.pak` file does not exist`UcasFileNotFound``.ucas` file does not exist`UtocFileNotFound``.utoc` file does not exist |
| --- |
| `PakFileNotFound``.pak` file does not exist`UcasFileNotFound``.ucas` file does not exist`UtocFileNotFound``.utoc` file does not exist |
| `UcasFileNotFound``.ucas` file does not exist`UtocFileNotFound``.utoc` file does not exist |
| `UtocFileNotFound``.utoc` file does not exist |

---

**`PakMountError` / `PakUnMountError`**

**Cause**: Pak file mount/unmount runtime failure.

| ErrorDetails`PakMountError``FPakPlatformFile::Mount()` call failed — pak file is corrupted or locked by another process`PakUnMountError``FPakPlatformFile::Unmount()` call failed — already unmounted or references remain |
| --- |
| `PakMountError``FPakPlatformFile::Mount()` call failed — pak file is corrupted or locked by another process`PakUnMountError``FPakPlatformFile::Unmount()` call failed — already unmounted or references remain |
| `PakUnMountError``FPakPlatformFile::Unmount()` call failed — already unmounted or references remain |

---

**`DataPatchError`**

**Cause**: An error occurred while processing the mod's JSON data patch.

| ScenarioDetailsSource JSON not foundCannot find the original data (StructTag-based) to patchNamed source JSON not foundCannot find the specified named data sourceInvalid JSON valuePatch descriptor contains an invalid JSON valuePatch descriptor load failureFailed to load `FModPatchDescriptor`Patch application errorPatch commands (Add/Remove/Replace, etc.) failed to apply to target dataPatch result deserialization failureFailed to convert patched JSON to struct |
| --- |
| Source JSON not foundCannot find the original data (StructTag-based) to patchNamed source JSON not foundCannot find the specified named data sourceInvalid JSON valuePatch descriptor contains an invalid JSON valuePatch descriptor load failureFailed to load `FModPatchDescriptor`Patch application errorPatch commands (Add/Remove/Replace, etc.) failed to apply to target dataPatch result deserialization failureFailed to convert patched JSON to struct |
| Named source JSON not foundCannot find the specified named data sourceInvalid JSON valuePatch descriptor contains an invalid JSON valuePatch descriptor load failureFailed to load `FModPatchDescriptor`Patch application errorPatch commands (Add/Remove/Replace, etc.) failed to apply to target dataPatch result deserialization failureFailed to convert patched JSON to struct |
| Invalid JSON valuePatch descriptor contains an invalid JSON valuePatch descriptor load failureFailed to load `FModPatchDescriptor`Patch application errorPatch commands (Add/Remove/Replace, etc.) failed to apply to target dataPatch result deserialization failureFailed to convert patched JSON to struct |
| Patch descriptor load failureFailed to load `FModPatchDescriptor`Patch application errorPatch commands (Add/Remove/Replace, etc.) failed to apply to target dataPatch result deserialization failureFailed to convert patched JSON to struct |
| Patch application errorPatch commands (Add/Remove/Replace, etc.) failed to apply to target dataPatch result deserialization failureFailed to convert patched JSON to struct |
| Patch result deserialization failureFailed to convert patched JSON to struct |

---

**`ShaderCompatibilityError`**

**Cause**: Shaders included in the mod are incompatible with the current game build.

---

**`AssetCompatibilityError`**

**Cause**: Mod assets are incompatible with the current game build.
