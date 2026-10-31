---
document_id: "52e931a33dcd08f232b6464b023b371adcc470ab11b0bdb8758475115239485c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1doorpermissiondata"
title: "FB1DoorPermissionData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:42+00:00"
content_sha256: "ed402cb008875d121616d9e9922cb4bca56bc745fd1fde9b77f6aac0e140900b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1doorpermissiondata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores door permission data including display text, allowed site types, and the message shown when permission is denied.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AllowedBuildMode``boolean`Whether entry is allowed in build mode.`AllowedSiteTypeInPackage``EB1SiteType[]`List of site types that are allowed to enter under this permission when packaged.`NoPermissionToastMessage``string`Toast message displayed when the player does not have permission to enter.`PermissionText``string`Display text describing this permission level. |
| --- |
| `AllowedBuildMode``boolean`Whether entry is allowed in build mode.`AllowedSiteTypeInPackage``EB1SiteType[]`List of site types that are allowed to enter under this permission when packaged.`NoPermissionToastMessage``string`Toast message displayed when the player does not have permission to enter.`PermissionText``string`Display text describing this permission level. |
| `AllowedSiteTypeInPackage``EB1SiteType[]`List of site types that are allowed to enter under this permission when packaged.`NoPermissionToastMessage``string`Toast message displayed when the player does not have permission to enter.`PermissionText``string`Display text describing this permission level. |
| `NoPermissionToastMessage``string`Toast message displayed when the player does not have permission to enter.`PermissionText``string`Display text describing this permission level. |
| `PermissionText``string`Display text describing this permission level. |
