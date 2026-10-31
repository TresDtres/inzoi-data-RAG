---
document_id: "f8b4efeabaf84411923c881c1e11e6352b2914bf7493ce74a696ce9a5093afc0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1actiontype"
title: "EB1ActionType"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:27+00:00"
content_sha256: "852b38f484bffce241b9be618b3e407aab8650cca3ca9e0e7431b6df7f0dc8b8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/enum/eb1actiontype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧭 Enum: EB1ActionType

Defines various character or object actions used in simulation sequences.

- **Invalid**: Default value representing no action.
- **WalkTo**: Moves to a specific location.
- **WalkToCompany**: Moves to a company location.
- **WalkToHome**: Navigates to the character's home.
- **WalkToNearby**: Walks to a nearby point of interest.
- **WalkToNearestRoad**: Heads toward the closest road.
- **WalkToNearestCityGraph**: Navigates to nearest city graph node.
- **WalkToSite**: Moves to a designated site.
- **WalkToNonCancelable**: Walk that cannot be interrupted.
- **WalkToPortal**: Moves to a portal or transfer point.
- **WalkToSubway**: Heads toward a subway entrance.
- **WalkToVehicle**: Moves toward a vehicle.
- **TeleportTo**: Instantly relocates to a target position.
- **PlayAnim**: Plays an animation based on the target type (`AnimCharacter_*` or `AnimGameObject_*`).
- **PlayLoopAnim**: Plays a looping animation tied to the target type.
- **PlayVATAnim**: Plays a vertex animation texture-based animation.
- **RotateTo**: Rotates to face a specified direction.
- **ChangePosture**: Changes the character’s posture.
- **PickUp**: Plays pickup animation using S2 or `Grab` asset from S1.
- **PickUpAuto**: Automatically plays pickup animation as above.
- **PickUpCharacter**: Picks up another character using similar animation logic.
- **PutDown**: Plays put-down animation defined by S1.
- **PutDownInventoryObject**: Places inventory item in the world.
- **PutDownDestroy**: Drops and destroys the item with animation.
- **Delay**: Waits for a duration.
- **WaitForAsyncLoad**: Waits until async loading finishes.
- **Sleep**: Initiates sleep state.
- **Work**: Begins working animation/state.
- **Sit**: Character takes a seated position.
- **ChangeCostume**: Changes or removes costume based on S2.
- **ChangeOutfitCategory**: Switches outfit category.
- **RemoveCostumeByActionReason**: Removes outfit due to contextual reason.
- **BookRead**: Plays book-reading animation defined in S2.
- **Eat**: Plays eating animation or consumes food.
- **RabbitHole**: Enters a building or location in rabbit-hole style.
- **EditCharacter**: Initiates character editing mode.
- **UpdateAging**: Triggers character aging update.
- **Coop**: Starts a cooperative interaction.
- **CoopSelect**: Selects a cooperative interaction.
- **WaitCoopResponse**: Waits for another character’s coop response.
- **WaitTalkSequence**: Waits for a conversation sequence to begin.
- **WaitTalkPositioning**: Waits until positioned for conversation.
- **WalkToContext**: Walks based on contextual data.
- **RotateToContext**: Rotates based on contextual direction.
- **PlayAnimContext**: Plays a context-specific animation.
- **TalkContext**: Begins talking in context.
- **LevelSequence**: Plays a Level Sequence cinematic.
- **WalkAroundSite**: Roams around a site.
- **WalkAroundLocation**: Wanders a specified area.
- **RequestEnterVehicle**: Attempts to enter a vehicle.
- **ChangeVehiclePartState**: Changes a part’s state (e.g., open/close).
- **MoveWithVehicle**: Moves along with a vehicle.
- **SpawnVehicle**: Spawns a vehicle.
- **ChangePostureSit**: Takes seated posture.
- **WalkToDirtyPlace**: Moves to a dirty area to clean.
- **WalkToSpawner**: Goes to a spawner location.
- **WalkToLocation**: Walks to a general location.
- **GrabInventoryObject**: Picks item from inventory into hand.
- **PopupMessage**: Triggers a popup message.
- **PlayVideo**: Plays video content.
- **Die**: Executes a death sequence.
- **LaunchCraft**: Launches crafting process using `Crafting.Id`.
- **StartCrafting**: Begins crafting with `Recipe.Id`.
- **ContinueCrafting**: Resumes crafting progress.
- **ProgressCrafting**: Advances crafting stages.
- **CleanDusty**: Cleans dusty surfaces.
- **Buy**: Performs a purchase action.
- **RunAway**: Character flees from danger.
- **CraftBulidMode**: Crafts object in build mode.
- **RegisterPocketMarketItem**: Registers item for the pocket market.
- **SelectSlotOwnership**: Assigns slot ownership.
- **GenerateMotion**: Generates motion procedurally.
- **PlayGeneratedMotion**: Plays generated motion.
- **WalkToSharedSiteSpawner**: Walks to a shared site spawn point.
- **SatisfyDesire**: Fulfills a character’s desire.
- **Exercise**: Performs an exercise or fitness action.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAction[Action Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/action)[FB1ActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actioninfo)[FB1ActionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actiontablerow)[FB1ActionTimeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actiontimedata)
