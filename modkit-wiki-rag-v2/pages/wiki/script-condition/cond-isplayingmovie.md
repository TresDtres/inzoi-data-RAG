---
document_id: "1eadc43195079dd3f65667ebb345d85cce9b608f5f7a3c6324a1ee7f6ee99c49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingmovie"
title: "Condition_IsPlayingMovie"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:40+00:00"
content_sha256: "a383a15be16bba4372c7e141557fc9f0f2b9bfa7f76c60af99ff442a9b6dad97"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isplayingmovie"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the movie screen entity is currently playing a movie. If S1 is empty, checks whether any movie is playing; otherwise checks whether the specified movie ID is currently playing.

# Parameters

| ParameterDescriptionBaseObjectThe movie screen entity to check.CompareTypeEqual: the condition is true when playing, NotEqual: true when not playing.S1The movie ID to compare against. If empty, checks for any movie playing. |
| --- |
| BaseObjectThe movie screen entity to check.CompareTypeEqual: the condition is true when playing, NotEqual: true when not playing.S1The movie ID to compare against. If empty, checks for any movie playing. |
| CompareTypeEqual: the condition is true when playing, NotEqual: true when not playing.S1The movie ID to compare against. If empty, checks for any movie playing. |
| S1The movie ID to compare against. If empty, checks for any movie playing. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if the movie screen is playing any movieTargetIsPlayingMovieEqualCheck if the movie screen is playing the Horror movieTargetIsPlayingMovieEqualHorrorCheck if the movie screen is not playing the Comedy movieTargetIsPlayingMovieNotEqualComedy |
| --- |
| Check if the movie screen is playing any movieTargetIsPlayingMovieEqualCheck if the movie screen is playing the Horror movieTargetIsPlayingMovieEqualHorrorCheck if the movie screen is not playing the Comedy movieTargetIsPlayingMovieNotEqualComedy |
| Check if the movie screen is playing the Horror movieTargetIsPlayingMovieEqualHorrorCheck if the movie screen is not playing the Comedy movieTargetIsPlayingMovieNotEqualComedy |
| Check if the movie screen is not playing the Comedy movieTargetIsPlayingMovieNotEqualComedy |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
