---
document_id: "599d4b442997b1d1197e047b30b7410e7e58016ec86ac94624601447ee605648"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype"
title: "EB1ConditionType"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:30+00:00"
content_sha256: "325767bc41831c5b6ae916c1ba9ee0ed28742834bde4e5754077ff2ab61b77ce"
chunk: 2
chunk_count: 2
page_type: "article"
route: "wiki/structguide/enum/eb1conditiontype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- **OwnedVehicleSpawned**: Checks if owned vehicle is currently spawned.
- **VehiclePartState**: Compares a specific part's state in the vehicle.
- **IsOwnerSitInDriverSeat**: True if vehicle owner is seated as driver.
- **CharacterGroupType**: Compares the group type the character belongs to.
- **IsCarriableObject**: True if object is carriable.
- **ObjectSize**: Compares physical size of the object.
- **MainPerspective**: Checks character’s primary perspective trait (TraitValue.Id).
- **PerspectivePoint**: Compares perspective score (TraitValue.Id).
- **PerspectivePointDiff**: Compares perspective point difference (TraitValue.Id).
- **IsWorkingDayOfWeek**: True if today is a scheduled workday.
- **WithinJob**: Checks if current activity is within job context.
- **HasJobType**: Compares character's job type.
- **ForTimeSite**: Checks conditions for a specific time-based site (Site.Id).
- **HaveCurrency**: Checks if character has any amount of currency.
- **SiteCleanliness**: Compares site's cleanliness level.
- **HomeCleanliness**: Compares home's cleanliness level.
- **EnteredSiteHasTag**: Checks if recently entered site has the given tag (Site.DefaultInfo.Tags).
- **Season**: Checks current season.
- **Weather**: Checks current weather type.
- **TemperatureRange**: Checks if temperature is within a certain range.
- **IsInInventory**: Checks if object is inside character’s inventory.
- **HasEntityTag**: Checks if character has the specified entity tag.
- **IsLocateSiteInBaby**: Checks if site is marked as “baby allowed.”
- **IsLocateSiteOnFire**: Checks if current site is on fire.
- **HasRumor**: Checks if the character holds a specific rumor (Rumor.Id).
- **IsSameRumor**: Checks if another character has the same rumor.
- **HasRumorValidIndex**: Checks if rumor has a valid index value.
- **HasSameRumorInIndex**: Compares rumor index between two characters.
- **CanRumorTransfer**: True if rumor can be transferred to another character.
- **IsGhostCharacter**: Checks if character is in ghost state.

### Romance, interaction permissions, body states, and advanced logic

- **RomanticOrientation**: Compares character’s romantic orientation.
- **IsMatchingRomanceTarget**: Checks if character matches romantic criteria.
- **IsInSiteWithInTime**: Checks if character entered a specific site within time (Site.Id).
- **HasPutableObjectOnHand**: Checks if character is holding an object that can be placed.
- **IsSiteOnFire**: Checks if the site is currently burning.
- **CanBecomeGhost**: Determines if character is eligible to become a ghost.
- **IsProfileLocked**: Checks if the character's profile is locked.
- **HasEnoughCurrency**: Verifies if character has enough of a specific currency (Currency.Id).
- **HasTaxId**: Checks if object has an associated tax ID (Object.TaxId).
- **IsForceableSale**: Determines if forced sale is permitted.
- **IsSeized**: Checks if object has been seized.
- **IsElectricityCutoffSite**: Checks if site has power cutoff.
- **IsWaterCutoffSite**: Checks if site has water cutoff.
- **IsCrafting**: Checks if crafting is currently in progress.
- **HasObjectInCraftingSlot**: Checks if an object exists in the crafting slot.
- **IsObjectAuthor**: Checks if character is the author of the object.
- **CraftingPlaySuccessAnimation**: Triggers success animation for crafting.
- **CraftingPlayIdleAnimation**: Plays idle animation during crafting.
- **Quality**: Compares object or content quality.
- **RelationshipDeviation**: Compares deviation in relationship stat (RelationshipStat.Id).
- **HasSalesRights**: Checks if character can sell items.
- **HasEnoughCurrencyTarget**: Checks if the target has enough currency.
- **HasEnoughCurrencyExchangeCost**: Validates if exchange cost can be paid.
- **HasEnoughCurrencyExchangeCostInSite**: Same as above, scoped to current site.
- **IsPlayingSiteEvent**: Checks if currently participating in a site or social event.
- **IsSiteEventRole**: Verifies role participation in event (SocialEventTemplate or SiteEvent RoleInfos).
- **IsSocialEventMeeting**: Checks if current event is a social meeting.
- **IsGraduationRank**: Checks graduation rank condition.
- **IsSameSite**: Compares current site with another.
- **IsSameSiteEvent**: Compares if participating in the same site event.
- **IsSameSiteEventRole**: Compares roles within the same event.
- **CanAddObjectToBag**: Checks if object can be added to bag (Object_*.Id).
- **CanAddObjectTemplateToBag**: Same check, using template ID.
- **HasItemObjectToInventory**: Checks if inventory has a specific object (Object.Id).
- **HasItemObjectTemplateToInventory**: Checks inventory for template-matching object.
- **IsInSameFamilyTree**: Checks if characters belong to the same family tree.
- **IsFamilyHead**: True if character is head of family.
- **ObjectPrice**: Compares the price of an object.
- **HasGeneratedMotionIndex**: Checks if motion generation has occurred.
- **EnableGenerateMotion**: Verifies if motion generation is allowed.
- **GiftType**: Checks type of gift.
- **CheckGhostInteractionReason**: Compares reason for ghost-specific interaction.
- **HasCeiling**: Checks for ceiling presence.
- **HasCeilingByImpactPoint**: Same check using hit point.
- **HasFloor**: Checks for floor presence.
- **HasFloorByImpactPoint**: Same check using hit point.
- **ObjectWeathering**: Compares wear/deterioration of an object.
- **IsBabyBeingHeld**: Checks if baby character is currently being held.
- **PurchaseSuccessBaseOnPrice**: Calculates purchase success probability using price.
- **StealSuccessBaseOnPrice**: Calculates steal success probability using price.
- **IsPurchasable**: Checks if item is available for purchase.
- **IsFavoriteObject**: Checks if item is marked as a favorite.
- **HasOverrideSkin**: Checks if character has custom override skin applied.
- **HasOverrideSkinColor**: Checks for skin color override.
- **Muscle**: Compares character’s muscularity level.
- **Obesity**: Compares character’s obesity level.
- **CheckDiceWithRoll**: Performs dice check with predefined roll.
- **CheckDice**: Performs a general dice check.
- **LastContactHour**: Checks how long ago last contact occurred.
- **IsPossessedFamilyToday**: Checks if character was possessed by family today.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCondition[Condition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/condition)[FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)[FB1ConditionFailTooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditionfailtooltiptablerow)[FB1ConditionList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditionlist)[FB1ConditionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditiontablerow)[FB1ConditionTooltipData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditiontooltipdata)[FB1ConditionTooltipParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditiontooltipparam)
