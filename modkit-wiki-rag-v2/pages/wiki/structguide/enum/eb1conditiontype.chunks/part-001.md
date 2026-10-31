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
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/structguide/enum/eb1conditiontype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Enum: EB1ConditionType

Defines all condition types used throughout the game for scripting, interaction validation, logic evaluation, and more.

### Scripting, interaction validation, logic evaluation, and more.

- **Invalid**: Represents an invalid or undefined condition.
- **None**: No condition to evaluate.
- **Fail**: Always fails the condition.
- **Stat**: Compares a specified stat (uses Stat.Id).
- **ObjectCategory**: Checks object category (Object.ObjectCategory).
- **HandCarriedObjectType**: Compares type of object in hand.
- **HandCarriedObjectId**: Checks if carried object matches specified ID (Object_*.Id).
- **HandCarriedObjectTag**: Matches tag on carried object.
- **HasCarriedObject**: Checks if character is carrying anything.
- **HasObjectTag**: Checks if object or template has a matching tag.
- **HasFood**: Checks if character has a food item.
- **Buff**: Checks for presence of specific buff (Buff.Id).
- **BuffTag**: Checks for buff with specified tag (Buff.BuffBasicInfo.Tags).
- **Posture**: Matches character posture.
- **State**: Compares character state.
- **Emotion**: Emotion ID check (Emotion.Id).
- **EmotionValue**: Emotion value check (Emotion.Id).
- **EmotionLevel**: Compares emotion level (Emotion.Id).
- **OwnedEmotionLevel**: Checks emotion level of owned emotion (Emotion.Id).
- **EmotionTendency**: Compares emotional tendency (Emotion.Tendency).
- **Skill**: Checks skill possession (Skill.Id).
- **SkillUp**: Checks skill increase (Skill.Id).
- **RelationshipStat**: Compares relationship stat (RelationshipStat.Id).
- **RelationshipStatRange**: Checks if relationship stat falls within a range.
- **RelationshipName**: Checks for relationship name (Relationship.Id).
- **HasRelationship**: Verifies any relationship exists.
- **HasRelationshipName**: Checks for specific relationship name (Relationship.Id).
- **HasRelationshipRecord**: Checks if a relationship record exists (RelationshipRecord.Id).
- **IsRelationshipFocusSelection**: Checks for focused relationship selection (RelationshipStat.Id).
- **InteractionName**: Checks for interaction ID (Interaction.Id).
- **InteractionTag**: Matches interaction tag.
- **InteractionBagTag**: Matches interaction bag tag (InteractionBag.InteractionBagTags).
- **Trait**: Checks for specific trait (Trait.Id).
- **TraitGroup**: Checks for trait group membership (TraitGroup.Id).

### Gameplay logic evaluation

- **TargetDistance**: Compares distance to target.
- **NumberOfZOI**: Checks number of Zones of Influence (ZOI).
- **InteractionObjectRange**: Checks interaction object range (InteractionBag.Id).
- **InteractionTargetIsOwner**: True if interaction target is the owner.
- **GrowthStep**: Checks character's growth stage.
- **IsChildAllowedInWorld**: Verifies if child characters are allowed.
- **CanPregnancy**: Checks if character can become pregnant.
- **IsPregnancyState**: Checks if character is currently pregnant.
- **IsLovable**: Determines if a character is eligible for romance.
- **Chemistry**: Compares chemistry value (TraitChemistryReward_* via RelationshipStat.Id).
- **CanMarry**: Checks if character is eligible for marriage.
- **CanMarrySuccess**: Determines if marriage can succeed.
- **OccupyingSlotByPosture**: Checks posture used to occupy slot (Posture.PostureType).
- **OccupyingConnectedChairByPosture**: Checks posture used to occupy connected chair.
- **Gender**: Compares character gender.
- **GenderCompWithTarget**: Compares gender compatibility with target.
- **ActionTimeId**: Matches action time slot (Action_Interaction.Id).
- **ActionTimeTag**: Matches action time tag (Action_Interaction.ActionTags).
- **CompleteAmbition**: Checks if ambition is completed (AmbitionItem.Id).
- **PlayingAmbition**: Checks if ambition is currently playing (AmbitionItem.Id).
- **CurrentAmbition**: Checks current ambition state (AmbitionItem.Id).
- **HasJob**: Checks if character has a job (Job.Id).
- **ComparePreviousJobRank**: Compares previous job rank with current (Company.Id, Job.Id).
- **IsWorking**: Checks if character is working.
- **HasHome**: Checks if character owns or is assigned a home.
- **IsLocatedSameSite**: Verifies if two entities are in the same site.
- **Site**: Compares with specific site (Site.Id).
- **SiteByImpactPoint**: Checks which site contains impact point (Site.Id).
- **Time**: Compares current in-game time.
- **TimeRange**: Checks if time falls within a specified range.

### Outfits, scheduling, family, and character roles.

- **Costume**: Checks worn costume ID (Costume.Id).
- **OutfitCategory**: Matches the category of current outfit.
- **OutfitGarmentTag**: Checks garment tags in current outfit (`Garment*.OutfitCategoryTags` or `Garment*Mesh.Tags`).
- **HasOutfitGarmentType**: Checks for specific type of outfit garment.
- **HasOutfitAccessoryType**: Checks for specific type of accessory.
- **DayOfTheWeek**: Compares current day of the week.
- **IsWeekday**: True if today is a weekday.
- **IsWeekend**: True if today is a weekend.
- **IsFamilyRelationship**: Checks if target is in family relationship.
- **HasFamilyRelationship**: Verifies existence of a family relationship.
- **IsNumberOfRelatives**: Compares number of relatives.
- **IsFamilyAgeRank**: Compares age rank within family.
- **IsFullFamilyMembers**: Checks if family has all required members.
- **IsHouseMate**: True if character is a housemate.
- **IsCohabitable**: Checks if cohabitation is allowed (RelationshipStat.Id).
- **JobEmploymentDay**: Checks how long character has been employed.
- **JobRank**: Compares current job rank.
- **JobRankCompWithTarget**: Compares job rank with target.
- **IsSiteScheduleNPC**: True if NPC is assigned via site schedule.
- **EnteredSiteType**: Checks the type of recently entered site.
- **IsHome**: True if character is currently at home.
- **IsPlayerFamily**: True if character is in player's family.
- **IsPlayerFamilyTree**: True if character is in player's family tree.
- **IsPlayerFamilyAndFamilyTree**: True if in both player’s family and tree.
- **IsPlayerFamilyOrFamilyTree**: True if in either player’s family or tree.
- **IsPlayerCharacter**: True if character is player-controlled.
- **IsPlayerCharacterSelfOrTarget**: True if self or target is a player character.
- **IsNpcCharacter**: Checks if character is an NPC.
- **IsCharacterRole**: Checks assigned character role.

### Preferences, timelines, vehicles, cities, and rumors.

- **HasPreference**: Checks if character has the specified preference (Preference.Id).
- **IsPreferenceLike**: True if character likes the given preference (Preference.Id).
- **ComparePreference**: Compares preference level or value.
- **RelationshipFamilyLove**: Compares level of family love relationship stat.
- **HasRelationshipFamilyLove**: Checks for presence of family love relationship.
- **IsVisitingFriend**: True if character is visiting a friend.
- **HasOverrideTimeline**: Checks if timeline override exists (Timeline_Event.Id).
- **IsGiftBoxOwner**: True if character owns the gift box.
- **GiftBoxTendency**: Checks tendency score related to gifts.
- **DustyValue**: Compares dustiness or dirt level.
- **IsInVehicle**: Checks if character is currently inside a vehicle.
- **IsVehicle**: Checks if the target is a vehicle.
- **IsVehicleInAutoDriving**: True if vehicle is auto-driving.
- **IsDriver**: True if character is currently the driver.
- **IsVehicleDriving**: True if vehicle is actively moving.
- **IsVehicleSeatOccupied**: Checks if a specific seat is taken.
- **IsAnyVehicleSeatOccupied**: Checks if any seat is occupied.
- **IsVehicleLightsOn**: True if lights are on.
- **IsWaitingForPassenger**: Vehicle is waiting for passenger pickup.
- **IsOwnedVehicle**: Vehicle is owned by character.
- **VehicleSpeed**: Compares current vehicle speed.
- **HasOwnedVehicle**: Checks if character owns any vehicle.
- **IsVehicleInParkingPlace**: True if vehicle is parked properly.
- **IsReachableUsingVehicle**: True if target can be reached via vehicle.
- **IsIndoor**: Checks whether character is currently indoors.
- **CanGreetCustomer**: Determines if character can greet customer.
- **IsChangeableState**: Checks if state change is allowed.
- **City**: Compares character’s city ID (Map.Id).
- **NearestCityGraphPointDistance**: Compares distance to nearest city path point.
- **IsSiteHasObjectTemplateTag**: Checks if site contains specific object template tag.
- **IsCompanyEmployee**: True if character is an employee.
- **CheckHowlingTaken**: Checks if a howling effect has been applied (Howling.Id).

### Events, inventory, rumors, ghosts, and more.
