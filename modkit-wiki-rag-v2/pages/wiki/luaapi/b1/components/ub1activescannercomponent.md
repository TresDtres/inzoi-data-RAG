---
document_id: "50ea9de34578a03ae5ec8239b212957bc72d55c02fe9e1c9d0c93893fb2ae649"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1activescannercomponent"
title: "UB1ActiveScannerComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:34+00:00"
content_sha256: "6f06d7a2ac228c9896d10dff768e2e7bb5417a12387775d9dd6f89a02abbfb5f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/components/ub1activescannercomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Forward-search component dedicated to active mode / top-shoulder-view one-key. Finds carriable objects in front, highlights them with an outline, and exposes the grab target EntityId; it also detects and exposes the forward attack target (character) / kick target (Kickable object) used for one-key decisions. Works independently of the shared InteractionScanner (for F/V/C interactions) and excludes objects held in hand from carriable candidates.

# Metadata

| FieldValueKind`component`EnvironmentB1 - PresentationCategory`components`Extends`USceneComponent` |
| --- |
| Kind`component`EnvironmentB1 - PresentationCategory`components`Extends`USceneComponent` |
| EnvironmentB1 - PresentationCategory`components`Extends`USceneComponent` |
| Category`components`Extends`USceneComponent` |
| Extends`USceneComponent` |

# Properties (3)

| NameTypeDescription`CurrentAttackTargetActor``any``CurrentKickTargetActor``any``CurrentTargetActor``any` |
| --- |
| `CurrentAttackTargetActor``any``CurrentKickTargetActor``any``CurrentTargetActor``any` |
| `CurrentKickTargetActor``any``CurrentTargetActor``any` |
| `CurrentTargetActor``any` |
