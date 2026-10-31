---
document_id: "5d1f90e5cb776e945cacc2845df5e9a3566a4cf4b2d541f77fac8600fab158af"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load"
title: "uimod.cfg_load"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "feb24087afc8b7c875937550ead968d906443c41f877c28cb47eb65aa0205f8a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-cfg-load"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Loads a value (or all keys in a section) from the mod's cfg directory.

# Metadata

| FieldValueDisplayLoad Config ValueCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayLoad Config ValueCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmod_idstringyes—Mod identifiersectionstringyes—Section (subdirectory)keystringno—Key (omit to load entire section) |
| --- |
| mod_idstringyes—Mod identifiersectionstringyes—Section (subdirectory)keystringno—Key (omit to load entire section) |
| sectionstringyes—Section (subdirectory)keystringno—Key (omit to load entire section) |
| keystringno—Key (omit to load entire section) |

# Usage

```
await inzoi.cli.execute('uimod.cfg_load', {  mod_id: '',  section: '',  key: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod[uimod.apps](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps)[uimod.cfg_save](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save)[uimod.enable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable)[uimod.focus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus)[uimod.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list)[uimod.list_disabled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled)[uimod.mount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount)[uimod.remount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount)[uimod.set_app](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app)[uimod.unmount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount)[uimod.unmount_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all)
