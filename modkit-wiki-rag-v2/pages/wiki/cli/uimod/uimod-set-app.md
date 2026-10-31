---
document_id: "81dad0ee0c89825f419b30621bfe486dd07cce4d7394fecf8320d3bfb37a8695"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-set-app"
title: "uimod.set_app"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:21+00:00"
content_sha256: "1dd95ce0d46611aa0306c6f89cb32bb9834cfdc5d2588f14909b2a0517147037"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod/uimod-set-app"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Enable or disable a specific app in a multi-app mod. Saves to uimod_apps.json and reloads if mounted.

# Metadata

| FieldValueDisplaySet App EnabledCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet App EnabledCategory`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmod_idstringyes—Parent mod ID (e.g. DevTools)appstringyes—App folder name (e.g. AnalogClock)enabledboolyes—true to enable, false to disable |
| --- |
| mod_idstringyes—Parent mod ID (e.g. DevTools)appstringyes—App folder name (e.g. AnalogClock)enabledboolyes—true to enable, false to disable |
| appstringyes—App folder name (e.g. AnalogClock)enabledboolyes—true to enable, false to disable |
| enabledboolyes—true to enable, false to disable |

# Usage

```
await inzoi.cli.execute('uimod.set_app', {  mod_id: '',  app: '',  enabled: false,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod[uimod.apps](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-apps)[uimod.cfg_load](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-load)[uimod.cfg_save](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-cfg-save)[uimod.enable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-enable)[uimod.focus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-focus)[uimod.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list)[uimod.list_disabled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-list-disabled)[uimod.mount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-mount)[uimod.remount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-remount)[uimod.unmount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount)[uimod.unmount_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod/uimod-unmount-all)
