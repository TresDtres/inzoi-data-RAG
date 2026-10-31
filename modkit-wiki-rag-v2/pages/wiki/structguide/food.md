---
document_id: "dbd97a1a8e06270da2a5ea7f0b953bb6e9b6127dd8f81dae184ef86531dcb822"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/food"
title: "📘 Food Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:45+00:00"
content_sha256: "9ffc33d31cb41183e811636d8727f5d26b54b410ccdeb1a51763e233a5e6b788"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/food"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FoodTableRow

Defines an edible food item, including animation, interaction, nutrition, and display data.

### Properties

- **Id** (`FName`): Unique identifier.
- **FoodType** (`EB1FoodType`): Category of the food.
- **CalorieType** (`EB1CalorieType`): Caloric value type.
- **ObjectId** (`FName`): Linked object. *(Foreign = "Object.Id")*
- **InteractionTags** (`TArray<FName>`): Usable interaction contexts. *(Foreign = "Interaction.Tags")*
- **TimeToEat** (`int32`): Seconds required to consume.
- **NumServings** (`int8`): Number of servings for food type PreparedFood.
- **ServedFoodDtId** (`FName`): Served food variant for fodd type PreparedFood. *(Foreign = "Food.Id")*
- **DisplayInfos** (`TArray<FB1FoodDisplayInfo>`): UI display data per mesh.
- **StartScriptIds**, **TickScriptIds**, **FinishScriptIds** (`TArray<FName>`): Scripts for each phase. *(Foreign = "Script_Book.Id")*
- **StandEatAnimId** ~ **SitBarTableFoodEatAnimId** (`FName`): Animations per eating pose. *(Foreign = "AnimCharacter_Interaction.Id")*

@include Data/StrcutGuide/Struct/FB1FoodDisplayInfo.md @include Data/StrcutGuide/Enum/EB1FoodType.md @include Data/StrcutGuide/Enum/EB1CalorieType.md

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFood[EB1FoodType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1foodtype)[FB1FoodDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1fooddisplayinfo)[FB1FoodTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1foodtablerow)
