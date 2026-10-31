---
document_id: "579458dc16f5bc16c8fbae79978e5c2688e6f57707899be3f4faf6509465602e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1globalcitytraveldata"
title: "B1GlobalCityTravelData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:05+00:00"
content_sha256: "6018c04af71b76e7037cb237cd3a09d5811a0f87a8b047cd77540b69e1dc0e23"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1globalcitytraveldata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Global (singleton) city-travel state. Saved. * The save location (manager serialization vs a separate scope) is to be finalized after the global-data work.

| PropertyTypeDescriptionMetadatabTravelInProgressboolWhether a travel is in progress. Single source of truth for mutual exclusion (blocking city move / a new travel).ActiveFB1CityTravelDataData for the currently in-progress travel. Only meaningful while bTravelInProgress is true.TravelHouseholdInfoBufferTArrayCarry buffer for registering the travel group's household(s) into the UI. Travel moves only the companions, not the household entities, so the destination's B1 HouseholdManager has no household and UI such as Zoi cards breaks. At departure, a distinct FB1HouseholdInfo per household is captured and flush-registered on arrival. Same-city travel is already registered, so this is unused. |
| --- |
| bTravelInProgressboolWhether a travel is in progress. Single source of truth for mutual exclusion (blocking city move / a new travel).ActiveFB1CityTravelDataData for the currently in-progress travel. Only meaningful while bTravelInProgress is true.TravelHouseholdInfoBufferTArrayCarry buffer for registering the travel group's household(s) into the UI. Travel moves only the companions, not the household entities, so the destination's B1 HouseholdManager has no household and UI such as Zoi cards breaks. At departure, a distinct FB1HouseholdInfo per household is captured and flush-registered on arrival. Same-city travel is already registered, so this is unused. |
| ActiveFB1CityTravelDataData for the currently in-progress travel. Only meaningful while bTravelInProgress is true.TravelHouseholdInfoBufferTArrayCarry buffer for registering the travel group's household(s) into the UI. Travel moves only the companions, not the household entities, so the destination's B1 HouseholdManager has no household and UI such as Zoi cards breaks. At departure, a distinct FB1HouseholdInfo per household is captured and flush-registered on arrival. Same-city travel is already registered, so this is unused. |
| TravelHouseholdInfoBufferTArrayCarry buffer for registering the travel group's household(s) into the UI. Travel moves only the companions, not the household entities, so the destination's B1 HouseholdManager has no household and UI such as Zoi cards breaks. At departure, a distinct FB1HouseholdInfo per household is captured and flush-registered on arrival. Same-city travel is already registered, so this is unused. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGlobal[FB1GlobalCityMoveData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1globalcitymovedata)[FB1GlobalPseudoSimulationData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1globalpseudosimulationdata)
