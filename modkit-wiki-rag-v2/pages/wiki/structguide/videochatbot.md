---
document_id: "10a491a60b21192af8d5ca3f6e4c594961305823f5f165e334942ca0bc2942fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/videochatbot"
title: "📘 VideoChatbot Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:58+00:00"
content_sha256: "ca5bf25ca91e628d380e61ce7cf5e49238858a4447e26080fe52d74075cbe33b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/videochatbot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1VideoChatbotTableRow

Defines a chatbot used for video chat bot.

### Properties

- **ScreenImage** (`TSoftObjectPtr<UTexture2D>`): Screen image displayed during the chatbot session.
- **VoiceIndex** (`int32`): Index used to select the chatbot’s voice.
- **ChatbotDTMap** (`TMap<FName, FSoftObjectPath>`): A map that links each language's chatbot onboarding dialogue topic name to the corresponding data table asset path for that language.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoVideo[FB1VideoChatbotTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1videochatbottablerow)[FB1VideoPlayerInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1videoplayerinfo)
