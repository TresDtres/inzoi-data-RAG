---
document_id: "a1f4c6646ae630e79b99bfc14467b6a419aa38cbd3ffc02e42044c0959df7c0e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2sitecheckavailablefireposparam"
title: "FB2SiteCheckAvailableFirePosParam"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:46+00:00"
content_sha256: "25a5d31bb578f80c752fd58243a9274b2c4287b06f5bfdfe212611d8c793dbef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2sitecheckavailablefireposparam"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Parameters for checking whether a valid fire placement position exists at a given site location.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs` |
| EnvironmentB2 - SimulationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`FireId`[`FB1FireId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1fireid)The fire entity ID associated with this placement check.`ObjectDtId``string`The data table ID of the object being placed at the fire position.`PlacementFlag`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)The placement flags affecting how the position validity is evaluated.`RequestPos``FVector`The requested world position for the fire object placement.`RequestRot``FRotator`The requested world rotation for the fire object placement.`SiteId``string`The ID of the site where the fire placement check is performed. |
| --- |
| `FireId`[`FB1FireId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1fireid)The fire entity ID associated with this placement check.`ObjectDtId``string`The data table ID of the object being placed at the fire position.`PlacementFlag`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)The placement flags affecting how the position validity is evaluated.`RequestPos``FVector`The requested world position for the fire object placement.`RequestRot``FRotator`The requested world rotation for the fire object placement.`SiteId``string`The ID of the site where the fire placement check is performed. |
| `ObjectDtId``string`The data table ID of the object being placed at the fire position.`PlacementFlag`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)The placement flags affecting how the position validity is evaluated.`RequestPos``FVector`The requested world position for the fire object placement.`RequestRot``FRotator`The requested world rotation for the fire object placement.`SiteId``string`The ID of the site where the fire placement check is performed. |
| `PlacementFlag`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)The placement flags affecting how the position validity is evaluated.`RequestPos``FVector`The requested world position for the fire object placement.`RequestRot``FRotator`The requested world rotation for the fire object placement.`SiteId``string`The ID of the site where the fire placement check is performed. |
| `RequestPos``FVector`The requested world position for the fire object placement.`RequestRot``FRotator`The requested world rotation for the fire object placement.`SiteId``string`The ID of the site where the fire placement check is performed. |
| `RequestRot``FRotator`The requested world rotation for the fire object placement.`SiteId``string`The ID of the site where the fire placement check is performed. |
| `SiteId``string`The ID of the site where the fire placement check is performed. |
