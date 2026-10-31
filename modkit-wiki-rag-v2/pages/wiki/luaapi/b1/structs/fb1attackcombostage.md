---
document_id: "f9b11cf7fcf724a7a3c16f92df6955c94136ef67718f314956174c721380efa5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1attackcombostage"
title: "FB1AttackComboStage"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "cb58e2aed55128b0f7bf3170c1f820733da22a48d2a89c6ba4fc3f3d70bdb11c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1attackcombostage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- One stage of an attack combo. Pairs an attack anim with the AttackHit effect that its hit applies to the victim. The stage is selected by combo index (% Num), and anim and effect are always kept together so the index never misaligns.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`AnimId``string`Attack animation of this combo stage.`HitEffectId``string`The AttackHit effect this combo stage's hit applies to the victim. The single source of the per-stage effect (required). E.g. a jab stage uses a weak Animation effect, a finisher stage uses a Ragdoll / long-invulnerability effect. |
| --- |
| `AnimId``string`Attack animation of this combo stage.`HitEffectId``string`The AttackHit effect this combo stage's hit applies to the victim. The single source of the per-stage effect (required). E.g. a jab stage uses a weak Animation effect, a finisher stage uses a Ragdoll / long-invulnerability effect. |
| `HitEffectId``string`The AttackHit effect this combo stage's hit applies to the victim. The single source of the per-stage effect (required). E.g. a jab stage uses a weak Animation effect, a finisher stage uses a Ragdoll / long-invulnerability effect. |
