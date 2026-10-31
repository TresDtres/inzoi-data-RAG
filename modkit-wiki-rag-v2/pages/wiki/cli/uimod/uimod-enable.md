---
document_id: "dd21db05a8dbe13784e6ef3ac489ed06540e2ed38cab479c61317327c4250535"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable"
title: "uimod.enable"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "3e755b023d36266b25d0332fe7c1daa532d2de86b8191fbff3579ddc177afd6c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-enable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Finds a disabled UI-only mod by keyword (name or friendly name) and mounts it at runtime. Also sets bEnable=true in mod runtime state for persistence. Use uimod.list_disabled to see available mods.

# Metadata

| FieldValueDisplayEnable Disabled UI-Only ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayEnable Disabled UI-Only ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionkeywordstringyes—Mod name or friendly name (partial match) |
| --- |
| keywordstringyes—Mod name or friendly name (partial match) |

# Usage

```
await inzoi.cli.execute('uimod.enable', {  keyword: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod[uimod.apps](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps)[uimod.cfg_load](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load)[uimod.cfg_save](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save)[uimod.focus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus)[uimod.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list)[uimod.list_disabled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled)[uimod.mount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount)[uimod.remount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount)[uimod.set_app](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app)[uimod.unmount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount)[uimod.unmount_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all)
