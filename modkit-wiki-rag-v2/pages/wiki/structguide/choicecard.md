---
document_id: "5fe0a18a9134ef743bbedd6bfa4cf552d683107e20b30f8cca786cc5a166fb28"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/choicecard"
title: "📘 ChoiceCard Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:22+00:00"
content_sha256: "bda1806e4c3342327bbbc052aa55c55393b1263e9f4920c81f2221d905f07b24"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/choicecard"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ChoiceCardTableRow

Defines a choice card entry used in gameplay decisions, including conditions, answers, and display configuration.

### Properties

- **Id** (`FName`): Unique identifier for the choice card.
- **ConditionId** (`FName`): ID of the condition that enables this choice card. *(Foreign = "ChoiceCardCondition.Id")*
- **TitleStrId** (`FString`): Localization key for the title text. *(StringTableKey)*
- **MessageStrId** (`FString`): Localization key for the body message. *(StringTableKey)*
- **ColorId** (`FName`): Background color of choice card used for UI representation. *(Foreign = "ColorMapping.Id")*
- **AudioId** (`FName`): Audio resource played when the choice card appears. *(Foreign = "AudioResources.Id")*
- **PositiveAnswerConditionId** (`FName`): Condition required to enable positive answers. *(Foreign = "ChoiceCardCondition.Id")*
- **PositiveAnswerStrId** (`FString`): Text shown for the positive answer button. *(StringTableKey)*
- **PositiveChoiceCardAnswers** (`TArray<FB1ChoiceCardAnswer>`): List of positive answer options.
- **NegativeAnswerConditionId** (`FName`): Condition required to show negative answer options. *(Foreign = "ChoiceCardCondition.Id")*
- **NegativeTitleStrId** (`FString`): Text shown for the negative answer button. *(StringTableKey)*
- **NegativeChoiceCardAnswers** (`TArray<FB1ChoiceCardAnswer>`): List of negative answer options.

## 📚 References

- [FB1ChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardanswer)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoChoice[ChoiceCardGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/choicecardgroup)[FB1ChoiceCard](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecard)[FB1ChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardanswer)[FB1ChoiceCardAnswerCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardanswercondition)[FB1ChoiceCardGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardgrouptablerow)[FB1ChoiceCardTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardtablerow)[FB1ChoiceCardTextArgument](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardtextargument)[FB1ChoiceCardTimeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1choicecardtimeinfo)
