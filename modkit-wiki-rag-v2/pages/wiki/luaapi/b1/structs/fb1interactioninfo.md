---
document_id: "f6fee89cf720da090ba4710b43f78e8707795c1abde95062b7c012804f4330f6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1interactioninfo"
title: "FB1InteractionInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:12+00:00"
content_sha256: "278779428e9ebd4d57971a32b25ba9626e5f09cd1856996f2d5bd99c7e17208f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1interactioninfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines interaction information within a sequence. Includes interaction identifiers, labels, and success/failure transitions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`FailNextLabel``string`Label of the next interaction to transition to upon failure.`InteractionId``string`ID of the interaction (references DT_Interaction).`Label``string`Label used to identify this interaction within the sequence.`SuccessNextLabel``string`Label of the next interaction to transition to upon success.`bIsOptional``boolean`Determines if this interaction is optional. |
| --- |
| `FailNextLabel``string`Label of the next interaction to transition to upon failure.`InteractionId``string`ID of the interaction (references DT_Interaction).`Label``string`Label used to identify this interaction within the sequence.`SuccessNextLabel``string`Label of the next interaction to transition to upon success.`bIsOptional``boolean`Determines if this interaction is optional. |
| `InteractionId``string`ID of the interaction (references DT_Interaction).`Label``string`Label used to identify this interaction within the sequence.`SuccessNextLabel``string`Label of the next interaction to transition to upon success.`bIsOptional``boolean`Determines if this interaction is optional. |
| `Label``string`Label used to identify this interaction within the sequence.`SuccessNextLabel``string`Label of the next interaction to transition to upon success.`bIsOptional``boolean`Determines if this interaction is optional. |
| `SuccessNextLabel``string`Label of the next interaction to transition to upon success.`bIsOptional``boolean`Determines if this interaction is optional. |
| `bIsOptional``boolean`Determines if this interaction is optional. |
