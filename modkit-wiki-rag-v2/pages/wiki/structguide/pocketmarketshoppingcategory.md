---
document_id: "99c1ba50331fe12118d3a3e622c3ba7689fcea8b980e6fcff64192222df3ca25"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/pocketmarketshoppingcategory"
title: "📘 PocketMarketShoppingCategory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:58+00:00"
content_sha256: "0ade1058e2a1ea2caeaa4bfdc8dd10fa635d6a00e3cc9beee6e3f567c6cd8646"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/pocketmarketshoppingcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1PocketMarketShoppingCategoryTableRow

Defines a shopping category in the Pocket Market system, including discount links and visual UI data.

### Properties

- **Id** (`FName`): Unique identifier for this category.
- **DiscountId** (`FName`): Discount rule applied to items in this category. *(Foreign = "PocketMarketShoppingDiscount.Id")*
- **TitleTextId** (`FString`): Main category name in the UI. *(StringTableKey = "Id")*
- **SubTitleTextId** (`FString`): Optional subtitle text shown in UI. *(StringTableKey = "Id")*
- **ItemSubTitleTextId** (`FString`): Subtitle text applied to each item in the category. *(StringTableKey)*
- **Icon** (`TSoftObjectPtr<UObject>`): Icon shown for this category in the UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **TabType** (`EB1PocketMarketTabType`): Tab type this category appears under.
- **ItemDatas** (`TArray<FB1PocketMarketShoppingItemData>`): List of items sold in this category.

## 📚 References

- [FB1PocketMarketShoppingItemData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketshoppingitemdata)
- [EB1CarriableObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1carriableobjecttype)
- [EB1PocketMarketTabType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1pocketmarkettabtype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPocket[EB1PocketMarketTabType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1pocketmarkettabtype)[PocketMarketShoppingDiscount Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/pocketmarketshoppingdiscount)[FB1PocketMarketGradeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketgradedata)[FB1PocketMarketGradeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketgradeinfo)[FB1PocketMarketPurchasedShoppingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketpurchasedshoppingitem)[FB1PocketMarketPurchasedShoppingItemVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketpurchasedshoppingitemvm)[FB1PocketMarketQualityPriceRatioRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketqualitypriceratiorange)[FB1PocketMarketSellItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketsellitem)[FB1PocketMarketSellItemVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketsellitemvm)[FB1PocketMarketSellWidgetVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketsellwidgetvm)[FB1PocketMarketShoppingCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketshoppingcategorytablerow)[FB1PocketMarketShoppingDiscountData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketshoppingdiscountdata)
