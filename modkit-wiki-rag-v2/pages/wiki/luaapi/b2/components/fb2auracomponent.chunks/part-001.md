---
document_id: "be04d92d6eedf73e2f75bdc689519f8968faccea651bedeedfe995e482a849bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2auracomponent"
title: "FB2AuraComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:11+00:00"
content_sha256: "f9adeb0288b7678009c22886b7eb24aaac5f85f26d66598e06d3cd2b61fb2d61"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/components/fb2auracomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages auras (area effects).

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2AuraComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2AuraComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2AuraComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2AuraComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2AuraComponent')` |
| Require`require('Components.B2AuraComponent')` |

# Properties (6)

| NameTypeDescription`ActiveEmittedAuraIds``table<string, boolean>`List of Auras I am directly emitting (keyed by AuraId).`ActiveEmittedAuras``table<string, any>``ActiveReceivedAuraIds``table<string, boolean>`List of Auras whose effects I am currently receiving (stores only AuraId).`LastAuraFloorLevel``integer``PendingAuraApplies``table<string, FB1AuraKey>`Deferred-apply queue for Aura propagation.`PendingAuraRemovals``table<string, FB1AuraKey>` |
| --- |
| `ActiveEmittedAuraIds``table<string, boolean>`List of Auras I am directly emitting (keyed by AuraId).`ActiveEmittedAuras``table<string, any>``ActiveReceivedAuraIds``table<string, boolean>`List of Auras whose effects I am currently receiving (stores only AuraId).`LastAuraFloorLevel``integer``PendingAuraApplies``table<string, FB1AuraKey>`Deferred-apply queue for Aura propagation.`PendingAuraRemovals``table<string, FB1AuraKey>` |
| `ActiveEmittedAuras``table<string, any>``ActiveReceivedAuraIds``table<string, boolean>`List of Auras whose effects I am currently receiving (stores only AuraId).`LastAuraFloorLevel``integer``PendingAuraApplies``table<string, FB1AuraKey>`Deferred-apply queue for Aura propagation.`PendingAuraRemovals``table<string, FB1AuraKey>` |
| `ActiveReceivedAuraIds``table<string, boolean>`List of Auras whose effects I am currently receiving (stores only AuraId).`LastAuraFloorLevel``integer``PendingAuraApplies``table<string, FB1AuraKey>`Deferred-apply queue for Aura propagation.`PendingAuraRemovals``table<string, FB1AuraKey>` |
| `LastAuraFloorLevel``integer``PendingAuraApplies``table<string, FB1AuraKey>`Deferred-apply queue for Aura propagation.`PendingAuraRemovals``table<string, FB1AuraKey>` |
| `PendingAuraApplies``table<string, FB1AuraKey>`Deferred-apply queue for Aura propagation.`PendingAuraRemovals``table<string, FB1AuraKey>` |
| `PendingAuraRemovals``table<string, FB1AuraKey>` |

# Functions (11)
