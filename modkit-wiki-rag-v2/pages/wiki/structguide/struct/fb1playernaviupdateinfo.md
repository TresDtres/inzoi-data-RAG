---
document_id: "3dbe3bcd79de39273136dd639ad44ea6e021e13705d2aca11ecf59a85ac2d242"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1playernaviupdateinfo"
title: "B1PlayerNaviUpdateInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:56+00:00"
content_sha256: "44f7002babbf89f2fa0a36ae226b2aba97ea99cb6180effece9cd8f3c433b0e3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1playernaviupdateinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Per-entity navigation update data sent from B2 to B1 via packet. * Contains position and interaction info needed for the PlayerNavi widget.

| PropertyTypeDescriptionMetadataEntityIdFB1EntityIdEntity whose navigation state this update describes.LocationFVectorCurrent world location of the entity.InteractionQueueIdint64Queue ID of the interaction the entity is currently running, or -1 when none.InteractionBagDtIdFNameInteractionBag data table ID of the current interaction.PickedEntityIdFB1EntityIdTarget entity picked by the current interaction, if any.StatIdFNameStat associated with the current interaction. |
| --- |
| EntityIdFB1EntityIdEntity whose navigation state this update describes.LocationFVectorCurrent world location of the entity.InteractionQueueIdint64Queue ID of the interaction the entity is currently running, or -1 when none.InteractionBagDtIdFNameInteractionBag data table ID of the current interaction.PickedEntityIdFB1EntityIdTarget entity picked by the current interaction, if any.StatIdFNameStat associated with the current interaction. |
| LocationFVectorCurrent world location of the entity.InteractionQueueIdint64Queue ID of the interaction the entity is currently running, or -1 when none.InteractionBagDtIdFNameInteractionBag data table ID of the current interaction.PickedEntityIdFB1EntityIdTarget entity picked by the current interaction, if any.StatIdFNameStat associated with the current interaction. |
| InteractionQueueIdint64Queue ID of the interaction the entity is currently running, or -1 when none.InteractionBagDtIdFNameInteractionBag data table ID of the current interaction.PickedEntityIdFB1EntityIdTarget entity picked by the current interaction, if any.StatIdFNameStat associated with the current interaction. |
| InteractionBagDtIdFNameInteractionBag data table ID of the current interaction.PickedEntityIdFB1EntityIdTarget entity picked by the current interaction, if any.StatIdFNameStat associated with the current interaction. |
| PickedEntityIdFB1EntityIdTarget entity picked by the current interaction, if any.StatIdFNameStat associated with the current interaction. |
| StatIdFNameStat associated with the current interaction. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPlayer[FB1PlayerProfileData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1playerprofiledata)[FB1PlayerSpawnParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1playerspawnparameter)
