---
document_id: "3e99b2e675feb81bec0d559a388c9133ff33a3a687604f4a8ac9a383c52b2a2d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/pocketmarketshoppingdiscount"
title: "📘 PocketMarketShoppingDiscount Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:59+00:00"
content_sha256: "e46003fe6ea35afe03f18527084ad031a6b25f6a4a6c3dd4dd80a75b23161c0a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/pocketmarketshoppingdiscount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1PocketMarketShoppingDiscountTableRow

Defines conditional discount rules for Pocket Market categories.

### Properties

- **Id** (`FName`): Unique identifier for the discount rule.
- **ConditionId** (`FName`): Condition that enables this discount. *(Foreign = "StoreCondition.Id")*
- **Discounts** (`TArray<FB1PocketMarketShoppingDiscountData>`): Discount rate entries based on item count or usage.

## 📚 References

- [FB1PocketMarketShoppingDiscountData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketshoppingdiscountdata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPocket[EB1PocketMarketTabType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1pocketmarkettabtype)[PocketMarketShoppingCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/pocketmarketshoppingcategory)[FB1PocketMarketGradeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketgradedata)[FB1PocketMarketGradeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketgradeinfo)[FB1PocketMarketPurchasedShoppingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketpurchasedshoppingitem)[FB1PocketMarketPurchasedShoppingItemVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketpurchasedshoppingitemvm)[FB1PocketMarketQualityPriceRatioRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketqualitypriceratiorange)[FB1PocketMarketSellItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketsellitem)[FB1PocketMarketSellItemVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketsellitemvm)[FB1PocketMarketSellWidgetVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketsellwidgetvm)[FB1PocketMarketShoppingCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketshoppingcategorytablerow)[FB1PocketMarketShoppingDiscountData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pocketmarketshoppingdiscountdata)
