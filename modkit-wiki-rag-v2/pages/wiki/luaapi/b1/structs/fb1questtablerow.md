---
document_id: "74036e4c9cf040742a96d897824f23abdba978f63617535284950aa02ae6ef9d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1questtablerow"
title: "FB1QuestTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:09+00:00"
content_sha256: "b700485d02e0d5ce5b593822581cf12f96781d75b74e3b204e23d541a750b794"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1questtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a quest, including sequential mission flags, category, and a list of quest info entries.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`IsLazyComplete``boolean`If true, the quest is not completed until all tasks end and a success signal is explicitly sent.`QuestCategoryId``string`The category ID this quest belongs to.`QuestList``FB1QuestInfo[]`The list of quest info entries defining the tasks and timing for this quest.`RandomSelectMax``integer`Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).`RandomSelectMin``integer`Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).`bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
| --- |
| `IsLazyComplete``boolean`If true, the quest is not completed until all tasks end and a success signal is explicitly sent.`QuestCategoryId``string`The category ID this quest belongs to.`QuestList``FB1QuestInfo[]`The list of quest info entries defining the tasks and timing for this quest.`RandomSelectMax``integer`Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).`RandomSelectMin``integer`Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).`bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
| `QuestCategoryId``string`The category ID this quest belongs to.`QuestList``FB1QuestInfo[]`The list of quest info entries defining the tasks and timing for this quest.`RandomSelectMax``integer`Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).`RandomSelectMin``integer`Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).`bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
| `QuestList``FB1QuestInfo[]`The list of quest info entries defining the tasks and timing for this quest.`RandomSelectMax``integer`Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).`RandomSelectMin``integer`Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).`bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
| `RandomSelectMax``integer`Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).`RandomSelectMin``integer`Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).`bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
| `RandomSelectMin``integer`Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).`bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
| `bIsSequentialMission``boolean`If true, missions in QuestList are activated one by one in sequence; each success activates the next. |
