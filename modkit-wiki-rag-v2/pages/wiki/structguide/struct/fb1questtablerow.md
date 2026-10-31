---
document_id: "632314f62a5f00faae1685ebcffff099136bd16ca7ae7be6dbf311c971bb95a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtablerow"
title: "B1QuestTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:10+00:00"
content_sha256: "264138aee7f74edc13cb845370beef201a6a55237f3b6514c86ce9e82029598a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1questtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row defining a quest, including sequential mission flags, category, and a list of quest info entries.

| PropertyTypeDescriptionMetadataIsLazyCompleteboolIf true, the quest is not completed until all tasks end and a success signal is explicitly sent.Category: B1QuestTableRowbIsSequentialMissionboolIf true, missions in QuestList are activated one by one in sequence; each success activates the next.Category: B1QuestTableRowQuestCategoryIdFNameThe category ID this quest belongs to.Category: B1QuestTableRow Foreign: QuestCategory.IdRandomSelectMinint32Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0RandomSelectMaxint32Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| IsLazyCompleteboolIf true, the quest is not completed until all tasks end and a success signal is explicitly sent.Category: B1QuestTableRowbIsSequentialMissionboolIf true, missions in QuestList are activated one by one in sequence; each success activates the next.Category: B1QuestTableRowQuestCategoryIdFNameThe category ID this quest belongs to.Category: B1QuestTableRow Foreign: QuestCategory.IdRandomSelectMinint32Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0RandomSelectMaxint32Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| bIsSequentialMissionboolIf true, missions in QuestList are activated one by one in sequence; each success activates the next.Category: B1QuestTableRowQuestCategoryIdFNameThe category ID this quest belongs to.Category: B1QuestTableRow Foreign: QuestCategory.IdRandomSelectMinint32Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0RandomSelectMaxint32Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| QuestCategoryIdFNameThe category ID this quest belongs to.Category: B1QuestTableRow Foreign: QuestCategory.IdRandomSelectMinint32Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0RandomSelectMaxint32Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| RandomSelectMinint32Minimum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0RandomSelectMaxint32Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| RandomSelectMaxint32Maximum number of quests to randomly assign from QuestList. 0 means use all quests (default).Category: B1QuestTableRow ClampMin: 0QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| QuestListTArrayThe list of quest info entries defining the tasks and timing for this quest.Category: B1QuestTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoQuest[Quest Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/quest)[QuestCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/questcategory)[FB1QuestCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questcategorytablerow)[FB1QuestConditionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questconditiondata)[FB1QuestHistoryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questhistorydata)[FB1QuestHistoryElement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questhistoryelement)[FB1QuestInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questinfo)[FB1QuestTask](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtask)
