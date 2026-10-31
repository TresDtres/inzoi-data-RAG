---
document_id: "3f4a5e6d54927e2c622b3139cd702acaf696184530a9b1c82dc64fe904e78e76"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1observationtargetingpresetdataasset"
title: "UB1ObservationTargetingPresetDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:01+00:00"
content_sha256: "905ecb618dc34ce9bce4b838ebdc653e1e6e8e447d5b93ff1baef39d33ff4d43"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1observationtargetingpresetdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset mapping personality IDs to targeting presets used for observation and interaction targeting. Provides a default preset and an observation gameplay tag used by the targeting system.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (3)

| NameTypeDescription`DefaultPreset``UTargetingPreset`Default targeting preset applied when no personality-specific preset is found.`ObservationTag``string`Gameplay tag identifying the observation targeting context used to filter valid targets.`TargetingPresetMap``table<string, UTargetingPreset>`Map from personality ID to the targeting preset used for characters with that personality. |
| --- |
| `DefaultPreset``UTargetingPreset`Default targeting preset applied when no personality-specific preset is found.`ObservationTag``string`Gameplay tag identifying the observation targeting context used to filter valid targets.`TargetingPresetMap``table<string, UTargetingPreset>`Map from personality ID to the targeting preset used for characters with that personality. |
| `ObservationTag``string`Gameplay tag identifying the observation targeting context used to filter valid targets.`TargetingPresetMap``table<string, UTargetingPreset>`Map from personality ID to the targeting preset used for characters with that personality. |
| `TargetingPresetMap``table<string, UTargetingPreset>`Map from personality ID to the targeting preset used for characters with that personality. |
