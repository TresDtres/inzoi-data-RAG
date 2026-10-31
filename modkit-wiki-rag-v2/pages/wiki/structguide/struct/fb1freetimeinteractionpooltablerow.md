---
document_id: "8e9f505d453895d7812ffd5fba434a81b436c7960945b3749ecea4e9ec620eeb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freetimeinteractionpooltablerow"
title: "B1FreeTimeInteractionPoolTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:50+00:00"
content_sha256: "3bdc25b17411a4b0338ce63f7b9df6e527ca050e4002a92514ebf327fb698aca"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1freetimeinteractionpooltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Row that classifies a FreeTime autonomy interaction into pools and emotion-exclusion rules. * Id = InteractionBag.Id: each row carries the pool/forbid data for that single bag. * Pool membership is evaluated against the current state: emotion pool if a current emotion matches an OpenEmotions key, trait pool if the character has an OpenTraitIds trait, * base pool if IsBasePool is true. A bag may belong to multiple pools and must belong to at least one (validated).

| PropertyTypeDescriptionMetadataOpenEmotionsTArrayEmotion pool: opens when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowOpenTraitIdsTArrayTrait pool: opens when the character has any of these traits.Category: B1FreeTimeInteractionPoolTableRow Foreign: Trait.IdIsBasePoolboolBase pool: when true, the bag is also selectable in the always-available base pool regardless of emotion/trait conditions.Category: B1FreeTimeInteractionPoolTableRowForbidEmotionsTArrayPer-bag exclusion: excluded when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowSelectionLevelint32FreeTime selection level (0/1/2). Each level is one geometric ratio step more likely; the same-room bonus adds one level.Category: B1FreeTimeInteractionPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| OpenEmotionsTArrayEmotion pool: opens when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowOpenTraitIdsTArrayTrait pool: opens when the character has any of these traits.Category: B1FreeTimeInteractionPoolTableRow Foreign: Trait.IdIsBasePoolboolBase pool: when true, the bag is also selectable in the always-available base pool regardless of emotion/trait conditions.Category: B1FreeTimeInteractionPoolTableRowForbidEmotionsTArrayPer-bag exclusion: excluded when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowSelectionLevelint32FreeTime selection level (0/1/2). Each level is one geometric ratio step more likely; the same-room bonus adds one level.Category: B1FreeTimeInteractionPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| OpenTraitIdsTArrayTrait pool: opens when the character has any of these traits.Category: B1FreeTimeInteractionPoolTableRow Foreign: Trait.IdIsBasePoolboolBase pool: when true, the bag is also selectable in the always-available base pool regardless of emotion/trait conditions.Category: B1FreeTimeInteractionPoolTableRowForbidEmotionsTArrayPer-bag exclusion: excluded when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowSelectionLevelint32FreeTime selection level (0/1/2). Each level is one geometric ratio step more likely; the same-room bonus adds one level.Category: B1FreeTimeInteractionPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IsBasePoolboolBase pool: when true, the bag is also selectable in the always-available base pool regardless of emotion/trait conditions.Category: B1FreeTimeInteractionPoolTableRowForbidEmotionsTArrayPer-bag exclusion: excluded when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowSelectionLevelint32FreeTime selection level (0/1/2). Each level is one geometric ratio step more likely; the same-room bonus adds one level.Category: B1FreeTimeInteractionPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ForbidEmotionsTArrayPer-bag exclusion: excluded when the current emotion matches any key and the current level is >= that key's EmotionLevel.Category: B1FreeTimeInteractionPoolTableRowSelectionLevelint32FreeTime selection level (0/1/2). Each level is one geometric ratio step more likely; the same-room bonus adds one level.Category: B1FreeTimeInteractionPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| SelectionLevelint32FreeTime selection level (0/1/2). Each level is one geometric ratio step more likely; the same-room bonus adds one level.Category: B1FreeTimeInteractionPoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFree[FreeChatbot Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/freechatbot)[FB1FreeChatbotDTInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freechatbotdtinfo)[FB1FreeChatbotTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freechatbottablerow)
