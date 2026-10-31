---
document_id: "88827fc5651910bd779ab685da7cb26e94cb96ac04c705cf81138ab51e130c62"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2buffcomponent"
title: "FB2BuffComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:11+00:00"
content_sha256: "2593a2e65c477631898dd5a32b7e4bb8453c8773928cb1723624a72a5b166026"
chunk: 1
chunk_count: 9
page_type: "article"
route: "wiki/luaapi/b2/components/fb2buffcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages buffs/debuffs.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BuffComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BuffComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BuffComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BuffComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2BuffComponent')` |
| Require`require('Components.B2BuffComponent')` |

# Properties (12)

| NameTypeDescription`BuffLastApplyTimeMap``table<string, integer>``BuffTagMap``table<string, integer>``BuffTickStatDeltaMap``table<string, FB2BuffTickStatDelta>``Buffs``table<string, FB1Buff>``CurrentAdmitBoostLevel``integer``CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| --- |
| `BuffLastApplyTimeMap``table<string, integer>``BuffTagMap``table<string, integer>``BuffTickStatDeltaMap``table<string, FB2BuffTickStatDelta>``Buffs``table<string, FB1Buff>``CurrentAdmitBoostLevel``integer``CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `BuffTagMap``table<string, integer>``BuffTickStatDeltaMap``table<string, FB2BuffTickStatDelta>``Buffs``table<string, FB1Buff>``CurrentAdmitBoostLevel``integer``CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `BuffTickStatDeltaMap``table<string, FB2BuffTickStatDelta>``Buffs``table<string, FB1Buff>``CurrentAdmitBoostLevel``integer``CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `Buffs``table<string, FB1Buff>``CurrentAdmitBoostLevel``integer``CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `CurrentAdmitBoostLevel``integer``CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `CurrentAdmitBoostTendency`[`EB1EmotionTendency`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1emotiontendency)`CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `CurrentEmotionInertiaTriggerCount``integer``DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `DeferredModifierNameSet``table<string, boolean>``InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `InteractionBagWhiteList``table<string, integer>``JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `JoyfulBoostBuffId``string``LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `LastSendUpdateModifierPacketTicks``integer``NeedModifierUpdate``boolean` |
| `NeedModifierUpdate``boolean` |

# Functions (28)
