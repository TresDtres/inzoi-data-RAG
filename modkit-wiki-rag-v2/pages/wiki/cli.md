---
document_id: "0731b633cb66e70e9ae1421460d7183cbd2072aefa88c1c031b343ac3b0407c2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli"
title: "CLI"
section: "wiki/cli"
breadcrumb: ["ModKit Documentation", "Wiki"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:43+00:00"
content_sha256: "861019e7329b1dd6ccf77912f3ef70f295f5e9351cee5427f3f68eee4266b7a6"
chunk: 1
chunk_count: 1
page_type: "navigation-index"
route: "wiki/cli"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

# Overview

A **CLI command** is a single, named game action that can be invoked by id with an explicit parameter list - for example, setting the current Zoi's mood, fast-forwarding the in-game clock, or spawning an object. Each command has a stable contract, so external code can drive the simulation safely without poking at internal data directly.

The inZOI CLI is a standalone integration layer, not bound to any single host language. The same command catalog is reachable from every embedded runtime that ships with the game - JavaScript inside UI Mods, Lua scripts, and other host environments - each via its own invoke API. UI Mods are just one common caller; the parameter contracts described on these pages apply unchanged everywhere else.

Pick a category below to see its commands. Each command has its own page with parameters and a usage example.

# Categories

# Calling a command

Every host runtime exposes its own invoke API, but the shape is always the same: pass a command id and a parameter object. The snippet below uses the JavaScript binding from a UI Mod - other hosts (Lua, etc.) provide an equivalent call.

```
// Example host: a UI Mod's JavaScript.await window.inzoi.cli.execute('<command-id>', { /* params */ });
```
