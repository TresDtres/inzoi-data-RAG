---
document_id: "5199c8dcdf2ec1cd2fe87e2c566c056c13e23fb374520d969cc5a28ff9fc3f43"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecooltimemap"
title: "B1MobileMessageCooltimeMap"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:38+00:00"
content_sha256: "7421cda24eac89f0369cd852f10bc99f8ffeffa3ddc368309266bd81c068fc76"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1mobilemessagecooltimemap"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Stores cooldown maps for mobile messages, message pools, and send messages. * Tracks per-ID cooldown expiry times in in-game minutes to prevent premature re-sending.

| PropertyTypeDescriptionMetadataMobileMessageCooltimeMapTMapMap from custom message ID to the in-game minute timestamp when its cooldown expires.MobileMessagePoolCooltimeMapTMapMap from message pool ID to the in-game minute timestamp when its cooldown expires.SendMessageCooltimeMapTMapMap from send message ID to the in-game minute timestamp when its cooldown expires. |
| --- |
| MobileMessageCooltimeMapTMapMap from custom message ID to the in-game minute timestamp when its cooldown expires.MobileMessagePoolCooltimeMapTMapMap from message pool ID to the in-game minute timestamp when its cooldown expires.SendMessageCooltimeMapTMapMap from send message ID to the in-game minute timestamp when its cooldown expires. |
| MobileMessagePoolCooltimeMapTMapMap from message pool ID to the in-game minute timestamp when its cooldown expires.SendMessageCooltimeMapTMapMap from send message ID to the in-game minute timestamp when its cooldown expires. |
| SendMessageCooltimeMapTMapMap from send message ID to the in-game minute timestamp when its cooldown expires. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMobile[EB1MobileMessageBaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1mobilemessagebaseobject)[MobileMessage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessage)[MobileMessageParties Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessageparties)[MobileMessageReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagereward)[MobileMessageSystem Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagesystem)[FB1MobileCallTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecalltablerow)[FB1MobileContactMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecontactmap)[FB1MobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessage)[FB1MobileMessageCustomResponse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecustomresponse)[FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)[FB1MobileMessageDelayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedelayinfo)[FB1MobileMessageList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagelist)
