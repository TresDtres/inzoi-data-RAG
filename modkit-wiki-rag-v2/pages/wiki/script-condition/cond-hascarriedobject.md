---
document_id: "eaeb6395d8bd29778f9d9953511ed12a898ca08bb6997aea9aed0afaada47e05"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject"
title: "Condition_HasCarriedObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:03+00:00"
content_sha256: "97c26a62cb697d1b1bb4805d5ac4395f1f651b622cfa3704cf97694290f0f9a1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hascarriedobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject currently carries an object.

By default (`UseHand` is `Default`), this condition checks both hands. If `UseHand` is `Left`, it checks only the left hand. If `UseHand` is `Right`, it checks only the right hand.

If `S1` is provided, an additional carried-object detail check is applied using `EB1CarriedObjectCheckType`.

# Parameters

| ParameterDescriptionBaseObjectCharacter used for carried-object checkCompareTypeType of comparison operation (Equal / NotEqual)UseHandHand selector: `Default` (both), `Left`, or `Right`S1Optional carried-object detail check type (`EB1CarriedObjectCheckType`)- `Target`: carried entity is the current Target- `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| --- |
| BaseObjectCharacter used for carried-object checkCompareTypeType of comparison operation (Equal / NotEqual)UseHandHand selector: `Default` (both), `Left`, or `Right`S1Optional carried-object detail check type (`EB1CarriedObjectCheckType`)- `Target`: carried entity is the current Target- `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| CompareTypeType of comparison operation (Equal / NotEqual)UseHandHand selector: `Default` (both), `Left`, or `Right`S1Optional carried-object detail check type (`EB1CarriedObjectCheckType`)- `Target`: carried entity is the current Target- `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| UseHandHand selector: `Default` (both), `Left`, or `Right`S1Optional carried-object detail check type (`EB1CarriedObjectCheckType`)- `Target`: carried entity is the current Target- `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| S1Optional carried-object detail check type (`EB1CarriedObjectCheckType`)- `Target`: carried entity is the current Target- `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| - `Target`: carried entity is the current Target- `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| - `Object`: carried entity is a game object- `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| - `Character`: carried entity is a character (right hand only)- `HandOver`: carried entity can be handed over |
| - `HandOver`: carried entity can be handed over |

# Notes

- Returns false when BaseObject is not a valid character.
- Returns false when posture data is not available.
- If `S1` is empty, only carry existence is checked.

# Examples

| DescriptionBaseObjectCommandCompareTypeUseHandS1Checks whether self carries any object in either handSelfHasCarriedObjectEqualDefaultChecks whether self carries any object in left handSelfHasCarriedObjectEqualLeftChecks whether the carried object is the current targetSelfHasCarriedObjectEqualDefaultTargetChecks whether the carried object can be handed overSelfHasCarriedObjectEqualDefaultHandOver |
| --- |
| Checks whether self carries any object in either handSelfHasCarriedObjectEqualDefaultChecks whether self carries any object in left handSelfHasCarriedObjectEqualLeftChecks whether the carried object is the current targetSelfHasCarriedObjectEqualDefaultTargetChecks whether the carried object can be handed overSelfHasCarriedObjectEqualDefaultHandOver |
| Checks whether self carries any object in left handSelfHasCarriedObjectEqualLeftChecks whether the carried object is the current targetSelfHasCarriedObjectEqualDefaultTargetChecks whether the carried object can be handed overSelfHasCarriedObjectEqualDefaultHandOver |
| Checks whether the carried object is the current targetSelfHasCarriedObjectEqualDefaultTargetChecks whether the carried object can be handed overSelfHasCarriedObjectEqualDefaultHandOver |
| Checks whether the carried object can be handed overSelfHasCarriedObjectEqualDefaultHandOver |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)
