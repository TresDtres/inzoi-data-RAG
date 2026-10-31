---
document_id: "6e3af5bd6d32b5516e0246d8e42b56fbec6cdddc3c3126129eac31a7adbfa338"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce"
title: "Condition_CanDivorce"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:47+00:00"
content_sha256: "3294c4d976b1a604aa92e8b2905ad783cb02902c7200adaeb14d83b8c103042d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-candivorce"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Gates autonomy-originated divorce. Returns false only when the play reason is autonomy-sourced (Autonomy / AutonomyEmergency, injected by the autonomy collection path) and AllowDivorce is off. Player-directed and other non-autonomy paths are not restricted. Wired as an enable condition on the divorce coops (Divorce_01/02).

# Parameters

| ParameterDescriptionBaseObjectMust be Self (the character being checked for divorce)CompareTypeEqual, NotEqual |
| --- |
| BaseObjectMust be Self (the character being checked for divorce)CompareTypeEqual, NotEqual |
| CompareTypeEqual, NotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)[CanInviteStayoverGuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninvitestayoverguest)
