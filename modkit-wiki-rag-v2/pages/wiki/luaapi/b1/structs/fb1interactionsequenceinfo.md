---
document_id: "b7b2f94b5f4dac38db101017f653c33663f0c00c44fd368f74f16f9744c3d58f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1interactionsequenceinfo"
title: "FB1InteractionSequenceInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:12+00:00"
content_sha256: "0a2fc2919231812ef9a89121f41090aabadbb128495f3de359a38d9d7a0bdd1a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1interactionsequenceinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines an interaction sequence. Contains information about interactions, conditions, and probabilities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (10)

| NameTypeDescription`CoopId``string`ID referencing cooperative interaction data (from DT_Coop).`EnableConditionId``string`Condition ID that must be met to enable this sequence (references Condition_Interaction).`Id``string`Unique identifier for this interaction sequence.`InteractionInfos``FB1InteractionInfo[]`List of interactions in this sequence.`MainInteractionId``string`Main interaction ID associated with this sequence.`NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| --- |
| `CoopId``string`ID referencing cooperative interaction data (from DT_Coop).`EnableConditionId``string`Condition ID that must be met to enable this sequence (references Condition_Interaction).`Id``string`Unique identifier for this interaction sequence.`InteractionInfos``FB1InteractionInfo[]`List of interactions in this sequence.`MainInteractionId``string`Main interaction ID associated with this sequence.`NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `EnableConditionId``string`Condition ID that must be met to enable this sequence (references Condition_Interaction).`Id``string`Unique identifier for this interaction sequence.`InteractionInfos``FB1InteractionInfo[]`List of interactions in this sequence.`MainInteractionId``string`Main interaction ID associated with this sequence.`NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `Id``string`Unique identifier for this interaction sequence.`InteractionInfos``FB1InteractionInfo[]`List of interactions in this sequence.`MainInteractionId``string`Main interaction ID associated with this sequence.`NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `InteractionInfos``FB1InteractionInfo[]`List of interactions in this sequence.`MainInteractionId``string`Main interaction ID associated with this sequence.`NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `MainInteractionId``string`Main interaction ID associated with this sequence.`NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `NextInteractionBagId``string`ID of the next interaction bag to transition to after this sequence.`Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `Probability``number`Probability of this interaction sequence occurring (0.0 to 1.0).`SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `SequenceStartInfos``FB1SequenceStartInfo[]`List of starting points for the sequence.`bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `bIsTalk``boolean`Determines if this sequence involves a talk interaction.`bSequencial``boolean`Determines if the interactions should be executed sequentially. |
| `bSequencial``boolean`Determines if the interactions should be executed sequentially. |
