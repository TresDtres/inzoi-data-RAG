---
document_id: "67257803b7a9d3ed6853167bb66c30b304fde9c7b8e78cb41ca96590dd349d0d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/popup"
title: "📘 Popup Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:58+00:00"
content_sha256: "b01f3b1303eec6649982787360ccb9ecbdfa0c16a2b538ef4502ca84c5a1cbae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/popup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1PopupTableRow

Defines a configurable popup message or dialog window with buttons and behavior.

### Properties

- **Id** (`FName`): Unique identifier for this popup.
- **PopupType** (`EB1PopupType`): Type of popup (e.g., Common, Alert, Confirm).
- **DetailType** (`FName`): Further categorization of popup logic.
- **Title** (`FString`): Popup title text. *(StringTableKey = "Id")*
- **Desc** (`FString`): Description text displayed in the popup. *(StringTableKey = "Id")*
- **OpenPlayAudioId** (`FName`): Audio played when the popup opens. *(Foreign = "AudioResources.Id")*
- **bUseLoadButton** (`bool`): If true, shows a "Load" button in the popup.
- **bDisableAutoCloseTimer** (`bool`): If true, disables automatic closing after timeout.
- **ButtonDetail** (`TArray<FB1PopupButtonDetail>`): List of buttons shown with labels and actions.

## 📚 References

- [FB1PopupButtonDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1popupbuttondetail)
- [FB1PopupConstructData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1popupconstructdata)
- [EB1PopupType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1popuptype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPopup[EB1PopupType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1popuptype)[FB1PopupButtonDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1popupbuttondetail)[FB1PopupConstructData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1popupconstructdata)[FB1PopupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1popuptablerow)
