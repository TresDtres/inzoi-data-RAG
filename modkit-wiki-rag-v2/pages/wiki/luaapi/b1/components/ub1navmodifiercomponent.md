---
document_id: "c547db4d7d59fb4b93cbe8503fc0f691bde9168acd4d95478989a848c66d789e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1navmodifiercomponent"
title: "UB1NavModifierComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:37+00:00"
content_sha256: "e8c10598a683c2522eba259b0d06e439a160a353178af2b8059153ef642b541e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/components/ub1navmodifiercomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component created because a NavModifier bounds reflecting the actual mesh's rotation/scale is needed even when the StaticMesh is excluded from nav-relevant. Uses the bounds of the PrimitiveComponent specified via SetBoundsSourceComponent() so the nav area follows accurately. SetBoundsSourceComponent() must be called to specify the source component; the non-root-component case is not yet verified.

# Metadata

| FieldValueKind`component`EnvironmentB1 - PresentationCategory`components`Extends`UNavModifierComponent` |
| --- |
| Kind`component`EnvironmentB1 - PresentationCategory`components`Extends`UNavModifierComponent` |
| EnvironmentB1 - PresentationCategory`components`Extends`UNavModifierComponent` |
| Category`components`Extends`UNavModifierComponent` |
| Extends`UNavModifierComponent` |

# Properties (1)

| NameTypeDescription`BoundsSourceComponent``any`The component used as the basis for bounds computation. |
| --- |
| `BoundsSourceComponent``any`The component used as the basis for bounds computation. |
