---
document_id: "66bfaf09df16ef7af1260cb6c5159bc178fbd08f48667bab8f2791cc1a619fae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount"
title: "uimod.mount"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:21+00:00"
content_sha256: "cb310ff5ffffac403a876cbfb77a8a56c7a16216c52215944944d063529f9533"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-mount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Mount a UI mod from the user mods directory ({mod_id} or InGame/{mod_id}).

# Metadata

| FieldValueDisplayMount User ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayMount User ModCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmod_idstringyes—Mod folder name under the user mods directory |
| --- |
| mod_idstringyes—Mod folder name under the user mods directory |

# Usage

```
await inzoi.cli.execute('uimod.mount', {  mod_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod[uimod.apps](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps)[uimod.cfg_load](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load)[uimod.cfg_save](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save)[uimod.enable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable)[uimod.focus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus)[uimod.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list)[uimod.list_disabled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled)[uimod.remount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount)[uimod.set_app](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app)[uimod.unmount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount)[uimod.unmount_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all)
