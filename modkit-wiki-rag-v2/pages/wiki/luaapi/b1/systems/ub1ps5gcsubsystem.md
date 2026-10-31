---
document_id: "532b4b3f1a152b9c1cf5fad1a93ee456e50e7b7440c227217dd3f8bc384e0a43"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1ps5gcsubsystem"
title: "UB1PS5GCSubSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:57+00:00"
content_sha256: "39f29c65a7dfd8457a3c6bf11788d997c46ba0dbb73d853b9ef1d955b96dff69"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1ps5gcsubsystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PS5-only subsystem. Periodically checks memory usage and forces garbage collection (GC) when it exceeds a configured threshold. Operates with the game-instance lifecycle and can be controlled via .ini files and console commands.

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends`UGameInstanceSubsystem` |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends`UGameInstanceSubsystem` |
| EnvironmentB1 - PresentationCategory`systems`Extends`UGameInstanceSubsystem` |
| Category`systems`Extends`UGameInstanceSubsystem` |
| Extends`UGameInstanceSubsystem` |

# Properties (2)

| NameTypeDescription`CheckIntervalSec``number`Interval (seconds) for checking memory usage. Settable from an .ini file via UPROPERTY(Config).`MemoryThresholdMB``integer`Memory-usage threshold (MB) at which GC runs. Settable from an .ini file via UPROPERTY(Config). |
| --- |
| `CheckIntervalSec``number`Interval (seconds) for checking memory usage. Settable from an .ini file via UPROPERTY(Config).`MemoryThresholdMB``integer`Memory-usage threshold (MB) at which GC runs. Settable from an .ini file via UPROPERTY(Config). |
| `MemoryThresholdMB``integer`Memory-usage threshold (MB) at which GC runs. Settable from an .ini file via UPROPERTY(Config). |
