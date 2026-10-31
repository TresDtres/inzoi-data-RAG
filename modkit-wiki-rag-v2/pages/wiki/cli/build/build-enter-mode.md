---
document_id: "6f9dd373467e27de1287f836c0f68b0c6fb7394e9f4329086090ebd296a9524a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-enter-mode"
title: "build.enter_mode"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "bdaf5140fa4ab1a8fa6953d8361cc98d9eeb52294fd4c2a4f51499b36e16d2aa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-enter-mode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Requests entry into build mode for a site. This is ASYNCHRONOUS and returns as soon as the request is accepted: the entry runs a packet round-trip, a streaming grid load, a scene transition and then object spawning. Poll build.get_mode_state until phase == 'ready' before issuing any building.* command. If site_id is omitted the possessed character's home site is used, so a character must be possessed. Entering pauses the simulation.

# Metadata

| FieldValueDisplayEnter Build ModeCategory`build`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayEnter Build ModeCategory`build`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionsite_idnameno—Target site id. Omit to use the possessed character's home site.need_map_mode_openboolnofalseAllow entry while the map view is open |
| --- |
| site_idnameno—Target site id. Omit to use the possessed character's home site.need_map_mode_openboolnofalseAllow entry while the map view is open |
| need_map_mode_openboolnofalseAllow entry while the map view is open |

# Usage

```
await inzoi.cli.execute('build.enter_mode', {  site_id: '', // optional  need_map_mode_open: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
