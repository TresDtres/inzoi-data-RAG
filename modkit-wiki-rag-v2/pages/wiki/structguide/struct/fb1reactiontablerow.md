---
document_id: "dbdd07d287b36064dec9cc3f1fd58ffa930dc18b597efb6cf662b4c430d28ef7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactiontablerow"
title: "B1ReactionTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:15+00:00"
content_sha256: "abe00ec64fa08c71cd228bc011c74d508c2748ae6b3de9090083cd81dabfe8a0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1reactiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row defining a reaction event, including its priority, condition, animation info, and start scripts.

| PropertyTypeDescriptionMetadataPriorityint32The priority level used to resolve conflicts when multiple reactions could trigger simultaneously.Category: B1ReactionTableRowConditionIdFNameThe condition ID that must be satisfied for this reaction to trigger.Category: B1ReactionTableRow Foreign: Condition_Reaction.IdReactionAnimInfoFB1ReactionAnimInfoThe animation info played when this reaction is triggered.Category: B1ReactionTableRowStartScriptIdsTArrayThe list of script IDs executed when this reaction starts.Category: B1ReactionTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| Priorityint32The priority level used to resolve conflicts when multiple reactions could trigger simultaneously.Category: B1ReactionTableRowConditionIdFNameThe condition ID that must be satisfied for this reaction to trigger.Category: B1ReactionTableRow Foreign: Condition_Reaction.IdReactionAnimInfoFB1ReactionAnimInfoThe animation info played when this reaction is triggered.Category: B1ReactionTableRowStartScriptIdsTArrayThe list of script IDs executed when this reaction starts.Category: B1ReactionTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ConditionIdFNameThe condition ID that must be satisfied for this reaction to trigger.Category: B1ReactionTableRow Foreign: Condition_Reaction.IdReactionAnimInfoFB1ReactionAnimInfoThe animation info played when this reaction is triggered.Category: B1ReactionTableRowStartScriptIdsTArrayThe list of script IDs executed when this reaction starts.Category: B1ReactionTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ReactionAnimInfoFB1ReactionAnimInfoThe animation info played when this reaction is triggered.Category: B1ReactionTableRowStartScriptIdsTArrayThe list of script IDs executed when this reaction starts.Category: B1ReactionTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| StartScriptIdsTArrayThe list of script IDs executed when this reaction starts.Category: B1ReactionTableRow Foreign: Script.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoReaction[Reaction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/reaction)[FB1ReactionAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactionaniminfo)[FB1ReactionRelationshipInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactionrelationshipinfo)
