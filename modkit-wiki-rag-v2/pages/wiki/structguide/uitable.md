---
document_id: "311cd26cb629ab139c8315e4419bdd44b97b6f3c762b7c797cc48c0249a2eb5d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/uitable"
title: "📘 UI Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:57+00:00"
content_sha256: "b9752539aa32902a2a10afca9a6ed522ff2b4d7bad49e0d15757265c2e88184a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/uitable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1UITableRow

Defines a UI widget entry, including category, creation behavior, and grouping.

### Properties

- **Id** (`EB1UIType`): UI identifier enum value.
- **Category** (`EB1UICategory`): Category classification (e.g., Common, Lobby, InGame).
- **Widget** (`TSoftClassPtr<UUserWidget>`): Widget blueprint used for rendering.
- **ZOrder** (`int32`): Drawing order when the widget is auto or lazily created.
- **LayerName** (`FB1TableRowName`): Layer this widget belongs to. *(Foreign = "UILayer.Id")*
- **CreationType** (`EB1WidgetCreationType`): How this widget is created (e.g., AutoCreatedAtStartup, PlacedOnOtherWidget).
- **CustomCursorSetName** (`FName`): Cursor set name to apply when this UI is open.
- **bAlwaysShowCursor** (`bool`): If true, cursor remains visible while this UI is shown.
- **bDisableDLSSFG** (`bool`): If true, disables DLSS-FG when this widget is visible.
- **UIOpenGroup** (`FB1UIOpenGroup`): UI Group for open/close UI behaviors.

## 📚 References

- [EB1UIType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1uitype)
- [EB1WidgetCreationType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1widgetcreationtype)
- [FB1UIOpenGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uiopengroup)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoU[EB1UIType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1uitype)[UILayer Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/uilayer)[UITooltip Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/uitooltip)[FB1UIFocusableLayerInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uifocusablelayerinfo)[FB1UILayerByUIType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uilayerbyuitype)[FB1UILayerTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uilayertablerow)[FB1UIOpenGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uiopengroup)[FB1UIRestoreInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uirestoreinfo)[FB1UITableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitablerow)[FB1UITimeAlertBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitimealertbuffinfo)[FB1UITimeAlertTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitimealerttablerow)[FB1UITooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitooltiptablerow)
