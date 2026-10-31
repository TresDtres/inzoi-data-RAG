---
document_id: "f8d347894d68969c626526d39f64a5b633c83d8772e34af1e3cd754ee796e8d0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save"
title: "uimod.cfg_save"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "cb624268825e876a617db6fbc4f8056b82eccc47475b2a787113dc03bdcbc006"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-cfg-save"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Saves a value to a file under the mod's cfg directory.

# Metadata

| FieldValueDisplaySave Config ValueCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySave Config ValueCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmod_idstringyes—Mod identifiersectionstringyes—Section (subdirectory)keystringyes—Key (filename without extension)valuestringyes—Value to store |
| --- |
| mod_idstringyes—Mod identifiersectionstringyes—Section (subdirectory)keystringyes—Key (filename without extension)valuestringyes—Value to store |
| sectionstringyes—Section (subdirectory)keystringyes—Key (filename without extension)valuestringyes—Value to store |
| keystringyes—Key (filename without extension)valuestringyes—Value to store |
| valuestringyes—Value to store |

# Usage

```
await inzoi.cli.execute('uimod.cfg_save', {  mod_id: '',  section: '',  key: '',  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod[uimod.apps](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps)[uimod.cfg_load](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load)[uimod.enable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable)[uimod.focus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus)[uimod.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list)[uimod.list_disabled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled)[uimod.mount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount)[uimod.remount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount)[uimod.set_app](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app)[uimod.unmount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount)[uimod.unmount_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all)
