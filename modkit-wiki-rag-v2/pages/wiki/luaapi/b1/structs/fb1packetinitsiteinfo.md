---
document_id: "a286b732019d7d4da604a2426e470b6b7ef0086038f16c46f43c4fcc1edcd4ba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1packetinitsiteinfo"
title: "FB1PacketInitSiteInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:00+00:00"
content_sha256: "fe2b12a79b6aef00bf054a7d3d4ca77d56037769d37dbeceb7f3c73b01788a91"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1packetinitsiteinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Packet data used to initialize a site, including its world transform, built data, and owner household.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (10)

| NameTypeDescription`BuiltData`[`FB1SiteAreaBuiltSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteareabuiltsavedata)The built area structure data for this site.`CompatibilitySaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The compatibility save version, updated only when site size changes.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site being initialized.`OwnerHouseholdEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the household that owns this site.`RefreshSite``boolean`Whether this site should be fully refreshed upon initialization.`SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| --- |
| `BuiltData`[`FB1SiteAreaBuiltSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteareabuiltsavedata)The built area structure data for this site.`CompatibilitySaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The compatibility save version, updated only when site size changes.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site being initialized.`OwnerHouseholdEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the household that owns this site.`RefreshSite``boolean`Whether this site should be fully refreshed upon initialization.`SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `CompatibilitySaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The compatibility save version, updated only when site size changes.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site being initialized.`OwnerHouseholdEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the household that owns this site.`RefreshSite``boolean`Whether this site should be fully refreshed upon initialization.`SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the site being initialized.`OwnerHouseholdEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the household that owns this site.`RefreshSite``boolean`Whether this site should be fully refreshed upon initialization.`SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `OwnerHouseholdEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the household that owns this site.`RefreshSite``boolean`Whether this site should be fully refreshed upon initialization.`SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `RefreshSite``boolean`Whether this site should be fully refreshed upon initialization.`SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `SaveVersion`[`EB1SaveVersion`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1saveversion)The save version associated with this site initialization.`Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `Scale``FVector`The world scale of this site.`UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `UserEditedTime``FDateTime`The last time a user edited this site.`WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `WorldLocation``FVector`The world location where this site is placed.`WorldRotation``FRotator`The world rotation of this site. |
| `WorldRotation``FRotator`The world rotation of this site. |
