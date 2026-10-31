---
document_id: "e1e8f58e9e3b5224c15750e6b5a9a16abf56d95c77de09ee24399d5d0780df51"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ab1destructibleactor"
title: "AB1DestructibleActor"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:33+00:00"
content_sha256: "f655c12a8c86c3ec9645feb69f8b291705dac72bec258698eb44ad6c0320f313"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ab1destructibleactor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Actor for fixed objects placed for background destruction effects. Added so that merely placing it in the level reflects obstacle/avoidance areas in navigation. UB1DestructionComponent handles the destruction/restore logic; this actor applies StaticMesh/collision/nav settings consistently so designers can use it without extra setup. In debug, intended to switch the Pawn response to overlap to verify touch-destroy behavior.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| Category`classes`Extends`AActor` |
| Extends`AActor` |

# Properties (3)

| NameTypeDescription`DestructionComp``any``NavModifierComp``any`NavModifier that creates a nav-blocking area based on the StaticMesh.`StaticMesh``any` |
| --- |
| `DestructionComp``any``NavModifierComp``any`NavModifier that creates a nav-blocking area based on the StaticMesh.`StaticMesh``any` |
| `NavModifierComp``any`NavModifier that creates a nav-blocking area based on the StaticMesh.`StaticMesh``any` |
| `StaticMesh``any` |
