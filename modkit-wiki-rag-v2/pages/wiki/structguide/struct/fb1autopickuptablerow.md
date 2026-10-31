---
document_id: "8ba05194ceeb5bb780b90b6dd78918583cb711e795e043e1d4e7152e5ddc46e4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1autopickuptablerow"
title: "B1AutoPickupTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:27+00:00"
content_sha256: "af32bed8cf32238f37382cc218af211c4c16c5e449796ef265ad9e2b6bb22cf6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1autopickuptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Aggro auto-pickup policy data — defines the policy for grabbing a nearby world object / inventory item into hand during an aggro chase. Referenced from an Aggro.json Reason row (FB1AggroTableRow) via AutoPickupId (FK). If AutoPickupId is NAME_None, that Reason does no auto-pickup (uses aggro/chase but keeps pickup off). The actual pickup is performed by a single location-agnostic InteractionBag (a code constant). Once ResolvePickupObject injects the chosen target entity, the Bag's SequenceStartInfos branches into bag (GrabInventoryObject) / world (PickUp) entry.

| PropertyTypeDescriptionMetadataPickupTargetTypeEB1PickupTargetTypeWhat to pick up and where to search for it. (The per-location pickup action branch is handled by the Bag.)Category: AutoPickupS1FNameParameter interpreted per PickupTargetType: ObjectId variants = Object Id, ObjectTag variants = tag, Any variants = unused.Category: AutoPickupDefaultPickupProbabilityfloatBase pickup probability (0-1). Weighted by Modifier(EB1ModifierType::AggroAutoPickup), then clamped to [0,1].Category: AutoPickup ClampMax: 1.0 ClampMin: 0.0IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| PickupTargetTypeEB1PickupTargetTypeWhat to pick up and where to search for it. (The per-location pickup action branch is handled by the Bag.)Category: AutoPickupS1FNameParameter interpreted per PickupTargetType: ObjectId variants = Object Id, ObjectTag variants = tag, Any variants = unused.Category: AutoPickupDefaultPickupProbabilityfloatBase pickup probability (0-1). Weighted by Modifier(EB1ModifierType::AggroAutoPickup), then clamped to [0,1].Category: AutoPickup ClampMax: 1.0 ClampMin: 0.0IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| S1FNameParameter interpreted per PickupTargetType: ObjectId variants = Object Id, ObjectTag variants = tag, Any variants = unused.Category: AutoPickupDefaultPickupProbabilityfloatBase pickup probability (0-1). Weighted by Modifier(EB1ModifierType::AggroAutoPickup), then clamped to [0,1].Category: AutoPickup ClampMax: 1.0 ClampMin: 0.0IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| DefaultPickupProbabilityfloatBase pickup probability (0-1). Weighted by Modifier(EB1ModifierType::AggroAutoPickup), then clamped to [0,1].Category: AutoPickup ClampMax: 1.0 ClampMin: 0.0IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAuto[FB1AutoFindRepeatUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1autofindrepeatuiinfo)[FB1AutoInsertInteractionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1autoinsertinteractioninfo)[FB1AutoOpenDesireWidgetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1autoopendesirewidgetdata)
