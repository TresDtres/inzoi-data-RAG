---
document_id: "3ba416551ef59c09907d246635f0ca095464cc7c8f017d9517f04baac9d6e112"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject"
title: "Execute_SpawnFakeObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:57+00:00"
content_sha256: "e7cb5ba7b1aaa50678408f14d6a80ddc0c132ccaf3421892a7ea4b495f456635"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnfakeobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns a Fake Object by duplicating the properties of the BaseObject (game object). The original object is unregistered from the site, and the fake object is registered with System ownership. This is primarily used for seizure and foreclosure systems.

# Note

Spawning is skipped if the object has DoNotSpawnFakeObjectTag, has the Ceil placement flag, or no valid located site can be determined. When BaseObject is Self, the site is derived from the Target character's location; when BaseObject is Target, the site is derived from the Self character.

# Parameters

| ParameterDescriptionBaseObjectThe game object whose properties are duplicated to create the fake object.S1First state name parameter passed to the fake object's state change on spawn.S2Second state name parameter passed to the fake object's state change on spawn. |
| --- |
| BaseObjectThe game object whose properties are duplicated to create the fake object.S1First state name parameter passed to the fake object's state change on spawn.S2Second state name parameter passed to the fake object's state change on spawn. |
| S1First state name parameter passed to the fake object's state change on spawn.S2Second state name parameter passed to the fake object's state change on spawn. |
| S2Second state name parameter passed to the fake object's state change on spawn. |

# Examples

| DescriptionBaseObjectCommandS1S2Spawn a fake object from Self; Target character provides the site contextSelfSpawnFakeObjectSeizedActiveSpawn a fake object from Target; Self character provides the site contextTargetSpawnFakeObjectSeizedActiveSpawn a fake object and transition it to a custom stateSelfSpawnFakeObjectRepossessedDisplayed |
| --- |
| Spawn a fake object from Self; Target character provides the site contextSelfSpawnFakeObjectSeizedActiveSpawn a fake object from Target; Self character provides the site contextTargetSpawnFakeObjectSeizedActiveSpawn a fake object and transition it to a custom stateSelfSpawnFakeObjectRepossessedDisplayed |
| Spawn a fake object from Target; Self character provides the site contextTargetSpawnFakeObjectSeizedActiveSpawn a fake object and transition it to a custom stateSelfSpawnFakeObjectRepossessedDisplayed |
| Spawn a fake object and transition it to a custom stateSelfSpawnFakeObjectRepossessedDisplayed |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
