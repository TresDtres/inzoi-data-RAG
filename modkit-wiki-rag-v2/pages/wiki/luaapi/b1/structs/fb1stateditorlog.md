---
document_id: "3092f475a95e718963958ee1bd60968f171646284382f20a2e9d870abfc80181"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateditorlog"
title: "FB1StatEditorLog"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:33+00:00"
content_sha256: "23d783a10aed77d349fecd2b6975021c89e8ed63bd8cd0d19bca258681ca3a19"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1stateditorlog"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores a single log entry for stat changes in the editor, used for debugging and visualization.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`DateTime``FDateTime`The timestamp at which this stat change occurred.`DiffValue``number`The difference in stat value caused by this change.`Id``string`The ID of the stat that was changed.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)The script reason that triggered this stat change.`ResultValue``number`The resulting stat value after this change was applied. |
| --- |
| `DateTime``FDateTime`The timestamp at which this stat change occurred.`DiffValue``number`The difference in stat value caused by this change.`Id``string`The ID of the stat that was changed.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)The script reason that triggered this stat change.`ResultValue``number`The resulting stat value after this change was applied. |
| `DiffValue``number`The difference in stat value caused by this change.`Id``string`The ID of the stat that was changed.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)The script reason that triggered this stat change.`ResultValue``number`The resulting stat value after this change was applied. |
| `Id``string`The ID of the stat that was changed.`Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)The script reason that triggered this stat change.`ResultValue``number`The resulting stat value after this change was applied. |
| `Reason`[`EB1ScriptReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1scriptreason)The script reason that triggered this stat change.`ResultValue``number`The resulting stat value after this change was applied. |
| `ResultValue``number`The resulting stat value after this change was applied. |
