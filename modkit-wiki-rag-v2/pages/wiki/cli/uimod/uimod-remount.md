---
document_id: "6858a8e0a9c6b86a8b26111b2e7ba4f4ad00084b23ea63fd790389bef65e6e2b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount"
title: "uimod.remount"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:21+00:00"
content_sha256: "91d355bdf4d8312824177f5556c4b288bd60fccbb5972901f1d443ea4e99a053"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-remount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Unmount then re-mount a UI mod from the user mods directory. Use after editing mod files to apply changes.

# Metadata

| FieldValueDisplayRemount User ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayRemount User ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmod_idstringyes—Mod folder name |
| --- |
| mod_idstringyes—Mod folder name |

# Usage

```
await inzoi.cli.execute('uimod.remount', {  mod_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod[uimod.apps](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps)[uimod.cfg_load](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load)[uimod.cfg_save](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save)[uimod.enable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable)[uimod.focus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus)[uimod.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list)[uimod.list_disabled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled)[uimod.mount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount)[uimod.set_app](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app)[uimod.unmount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount)[uimod.unmount_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all)
