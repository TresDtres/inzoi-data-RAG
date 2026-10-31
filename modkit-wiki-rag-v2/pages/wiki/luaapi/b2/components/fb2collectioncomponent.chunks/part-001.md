---
document_id: "e34ee7012c53d9acb2e145f5ff9eff7691d6858d88debc2ad436bcbbccfcd61c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2collectioncomponent"
title: "FB2CollectionComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:11+00:00"
content_sha256: "90af2451d3910f10b6025d313c649d2a8623a1017fbcf039efdca01cd87632ce"
chunk: 1
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/components/fb2collectioncomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages collections.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2CollectionComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2CollectionComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2CollectionComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2CollectionComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2CollectionComponent')` |
| Require`require('Components.B2CollectionComponent')` |

# Properties (8)

| NameTypeDescription`CategoryToInfoMap``table<string, FB2CollectionCategoryInfo>`Collection (encyclopedia) data (info on unlocked objects).`CollectedObjectIds``table<string, boolean>``CollectionInformations``FB1CollectionInformation[]`Collection info (partial info acquired from others; latest 10 entries).`ReceivedCollectionRewardIds``table<string, boolean>`Info on received rewards (used to prevent duplicate claims).`TagToCompletedObjectNumMap``table<string, integer>``bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| --- |
| `CategoryToInfoMap``table<string, FB2CollectionCategoryInfo>`Collection (encyclopedia) data (info on unlocked objects).`CollectedObjectIds``table<string, boolean>``CollectionInformations``FB1CollectionInformation[]`Collection info (partial info acquired from others; latest 10 entries).`ReceivedCollectionRewardIds``table<string, boolean>`Info on received rewards (used to prevent duplicate claims).`TagToCompletedObjectNumMap``table<string, integer>``bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `CollectedObjectIds``table<string, boolean>``CollectionInformations``FB1CollectionInformation[]`Collection info (partial info acquired from others; latest 10 entries).`ReceivedCollectionRewardIds``table<string, boolean>`Info on received rewards (used to prevent duplicate claims).`TagToCompletedObjectNumMap``table<string, integer>``bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `CollectionInformations``FB1CollectionInformation[]`Collection info (partial info acquired from others; latest 10 entries).`ReceivedCollectionRewardIds``table<string, boolean>`Info on received rewards (used to prevent duplicate claims).`TagToCompletedObjectNumMap``table<string, integer>``bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `ReceivedCollectionRewardIds``table<string, boolean>`Info on received rewards (used to prevent duplicate claims).`TagToCompletedObjectNumMap``table<string, integer>``bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `TagToCompletedObjectNumMap``table<string, integer>``bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `bNeedUpdateCollectedObjectIds``boolean``bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `bNeedUpdateCompleteObjectsByTag``boolean``bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |
| `bUnlockAll``boolean`Whether all collection info is known (e.g. a convenience-store NPC). |

# Functions (18)
