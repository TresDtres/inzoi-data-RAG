---
document_id: "b65fafac386dacf0a52dc5738569d7163effe3af281a2ade12ab1114df75081e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/uilayer"
title: "📘 UILayer Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:58+00:00"
content_sha256: "82833b27403b27b8ed677807e256781a56df3974bb2749eed2d10273cfe2903d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/uilayer"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1UILayerTableRow

Defines a UI layer with z-ordering and interaction settings.

### Properties

- **Id** (`FName`): Unique identifier for the UI layer.
- **ZOrder** (`int32`): Drawing order for this layer; higher values are drawn on top.
- **bMouseEnabled** (`bool`): If true, this layer accepts mouse input.
- **HideLayers** (`TArray<FName>`): List of other layers to be hidden when this layer is shown. *(Foreign = "UILayer.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoU[EB1UIType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1uitype)[UI Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/uitable)[UITooltip Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/uitooltip)[FB1UIFocusableLayerInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uifocusablelayerinfo)[FB1UILayerByUIType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uilayerbyuitype)[FB1UILayerTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uilayertablerow)[FB1UIOpenGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uiopengroup)[FB1UIRestoreInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uirestoreinfo)[FB1UITableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitablerow)[FB1UITimeAlertBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitimealertbuffinfo)[FB1UITimeAlertTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitimealerttablerow)[FB1UITooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1uitooltiptablerow)
