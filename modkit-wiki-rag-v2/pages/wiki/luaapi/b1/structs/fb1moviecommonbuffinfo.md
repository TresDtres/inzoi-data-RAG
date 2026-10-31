---
document_id: "2ea476573c764b6492828024d4f7bee0fd4865e63b54186a6702c7633f1c2db2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1moviecommonbuffinfo"
title: "FB1MovieCommonBuffInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "5ce889e0e30f0885ec7298df17314b6280c3bedf68d47bcf8b0ff8c378e1fb2b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1moviecommonbuffinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a common buff entry for movie watching with probability-based selection. Multiple entries can exist per time slot; one is chosen based on Probability weights.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`BodyAnimationIds``string[]`Body animation IDs to play when this buff is applied. One is chosen at random.`BuffId``string`Buff to apply.`FacialAnimationIds``string[]`Facial animation IDs to play when this buff is applied. One is chosen at random.`Probability``number`Probability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0. |
| --- |
| `BodyAnimationIds``string[]`Body animation IDs to play when this buff is applied. One is chosen at random.`BuffId``string`Buff to apply.`FacialAnimationIds``string[]`Facial animation IDs to play when this buff is applied. One is chosen at random.`Probability``number`Probability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0. |
| `BuffId``string`Buff to apply.`FacialAnimationIds``string[]`Facial animation IDs to play when this buff is applied. One is chosen at random.`Probability``number`Probability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0. |
| `FacialAnimationIds``string[]`Facial animation IDs to play when this buff is applied. One is chosen at random.`Probability``number`Probability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0. |
| `Probability``number`Probability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0. |
