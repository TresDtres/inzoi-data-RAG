---
document_id: "ad4edb776bd40e532fa3b34e13cc7c0f037b34b3e2cacdf6beeda6a8b0c530e9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/currencyexchange"
title: "📘 CurrencyExchange Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:25+00:00"
content_sha256: "13510dc7e83bf5fc6ed2686fb1dcb4011a7ea3b38c9f2bf772048ed16ef3436a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/currencyexchange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CurrencyExchangeTableRow

Defines exchange rules for converting between currencies.

### Properties

- **Id** (`FName`): Unique identifier for this exchange entry.
- **Value** (`double`): Exchange rate value (source → target).
- **DisplayDecimalPlace** (`int32`): Number of decimal places shown in the UI.
- **ExchangeRoundType** (`EB1RoundType`): Method used to round currency values.
- **ExchangeRoundDigits** (`int32`): Number of digits used when rounding.

## 📚 References

- [EB1RoundType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1roundtype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCurrency[Currency Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/currency)[FB1CurrencyColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencycolor)[FB1CurrencyColorBySign](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencycolorbysign)[FB1CurrencyDefaultData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencydefaultdata)[FB1CurrencyEffectInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencyeffectinfo)[FB1CurrencyExchangeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencyexchangetablerow)[FB1CurrencyInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencyinfo)[FB1CurrencyTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1currencytablerow)
