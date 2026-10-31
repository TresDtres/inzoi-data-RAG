---
document_id: "9aa14024e357a13dfefa69b8b4ac4a436613d41a5b3f828914be76d8a8a66872"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnnewbookobject"
title: "Execute_SpawnNewBookObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "f9d3d7082765a2c33ec1f0209d083da23838e846b0e2c4ec5d3e62660c955907"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnnewbookobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates a new BookObject and attaches it to the hand of the BaseObject character. If S1 is None or the book ID is not found in the table, a random book is selected.

# Parameters

| ParameterDescriptionBaseObjectThe character who will receive the spawned book objectS1BookId to spawn (Book.json Id). If None or not found, a random book is selected |
| --- |
| BaseObjectThe character who will receive the spawned book objectS1BookId to spawn (Book.json Id). If None or not found, a random book is selected |
| S1BookId to spawn (Book.json Id). If None or not found, a random book is selected |

# Examples

| DescriptionBaseObjectCommandS1Spawn a specific book and attach to SelfSelfSpawnNewBookObjectBook_Novel_001Spawn a random book and attach to TargetTargetSpawnNewBookObjectSpawn a cookbook and attach to SelfSelfSpawnNewBookObjectBook_Cook_001 |
| --- |
| Spawn a specific book and attach to SelfSelfSpawnNewBookObjectBook_Novel_001Spawn a random book and attach to TargetTargetSpawnNewBookObjectSpawn a cookbook and attach to SelfSelfSpawnNewBookObjectBook_Cook_001 |
| Spawn a random book and attach to TargetTargetSpawnNewBookObjectSpawn a cookbook and attach to SelfSelfSpawnNewBookObjectBook_Cook_001 |
| Spawn a cookbook and attach to SelfSelfSpawnNewBookObjectBook_Cook_001 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
