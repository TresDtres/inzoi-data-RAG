---
document_id: "6a4944bee4a883078bbd9e73fc93f02371807349fed82ae4e3912e8538522312"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedelayinfo"
title: "B1MobileMessageDelayInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:38+00:00"
content_sha256: "04327cab0361759fa4bea82b8ac0515f6c3880789f23fb1afc35581a3265476a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1mobilemessagedelayinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime delay configuration for a mobile message, specifying when a delayed message should be sent. * Includes probability, day-of-week filters, date offset, and time window for the delayed send.

| PropertyTypeDescriptionMetadataDelayProbabilityfloatProbability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.IsWeekdayboolWhether the delayed send is restricted to weekdays.IsWeekendboolWhether the delayed send is restricted to weekends.DayOfWeekEB1DayOfWeekSpecific day of the week on which the delayed message should be sent.DelayDateint32Number of in-game days to delay before sending the message.StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| --- |
| DelayProbabilityfloatProbability of using the delay; 0.0 always delays, 0.5 gives a 50% chance of immediate or delayed send.IsWeekdayboolWhether the delayed send is restricted to weekdays.IsWeekendboolWhether the delayed send is restricted to weekends.DayOfWeekEB1DayOfWeekSpecific day of the week on which the delayed message should be sent.DelayDateint32Number of in-game days to delay before sending the message.StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| IsWeekdayboolWhether the delayed send is restricted to weekdays.IsWeekendboolWhether the delayed send is restricted to weekends.DayOfWeekEB1DayOfWeekSpecific day of the week on which the delayed message should be sent.DelayDateint32Number of in-game days to delay before sending the message.StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| IsWeekendboolWhether the delayed send is restricted to weekends.DayOfWeekEB1DayOfWeekSpecific day of the week on which the delayed message should be sent.DelayDateint32Number of in-game days to delay before sending the message.StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| DayOfWeekEB1DayOfWeekSpecific day of the week on which the delayed message should be sent.DelayDateint32Number of in-game days to delay before sending the message.StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| DelayDateint32Number of in-game days to delay before sending the message.StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| StartTimeint32Start time of the window during which the delayed message may be sent (HHmm format).AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| AddOffsetTimeint32Random offset in minutes added to the start time to vary the exact send time.EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |
| EndTimeint32End time of the window during which the delayed message may be sent (HHmm format). |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMobile[EB1MobileMessageBaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1mobilemessagebaseobject)[MobileMessage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessage)[MobileMessageParties Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessageparties)[MobileMessageReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagereward)[MobileMessageSystem Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagesystem)[FB1MobileCallTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecalltablerow)[FB1MobileContactMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecontactmap)[FB1MobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessage)[FB1MobileMessageCooltimeMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecooltimemap)[FB1MobileMessageCustomResponse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecustomresponse)[FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)[FB1MobileMessageList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagelist)
