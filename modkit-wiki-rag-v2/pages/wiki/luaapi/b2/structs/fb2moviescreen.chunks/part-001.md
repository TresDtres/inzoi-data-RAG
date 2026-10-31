---
document_id: "b4db8e28cedfcb8ffc90584d589621abd3050902229ba1c0982217dc1a46ec36"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moviescreen"
title: "FB2MovieScreen"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:42+00:00"
content_sha256: "5e98a57e18f4dc97f53ca876500378abb177a67cc4728232006a31c1f9e270f8"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2moviescreen"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2MovieScreen')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2MovieScreen')` |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2MovieScreen')` |
| Category`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2MovieScreen')` |
| Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2MovieScreen')` |
| Require`require('Objects.B2MovieScreen')` |

# Properties (10)

| NameTypeDescription`AllTimeAudiences``table<FB1EntityId, boolean>``CurrentAudiences``table<FB1EntityId, integer>``IntervalBuffContexts``FB2MovieBuffContext[]``LocalMovieFilePath``string``MovieId``string``StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| --- |
| `AllTimeAudiences``table<FB1EntityId, boolean>``CurrentAudiences``table<FB1EntityId, integer>``IntervalBuffContexts``FB2MovieBuffContext[]``LocalMovieFilePath``string``MovieId``string``StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `CurrentAudiences``table<FB1EntityId, integer>``IntervalBuffContexts``FB2MovieBuffContext[]``LocalMovieFilePath``string``MovieId``string``StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `IntervalBuffContexts``FB2MovieBuffContext[]``LocalMovieFilePath``string``MovieId``string``StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `LocalMovieFilePath``string``MovieId``string``StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `MovieId``string``StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `StartTicks``integer``StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `StaticBuffContexts``FB2MovieBuffContext[]``StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `StaticBuffElapsedTicks``integer``StopTicks``integer``bLoopMode``boolean` |
| `StopTicks``integer``bLoopMode``boolean` |
| `bLoopMode``boolean` |

# Functions (12)

| FunctionParametersReturnsDescription`AddCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InInteractionQueueId: `integer``-`Adds Current Audience.`ChangeMovie`InMovieId: `string``-``GetMovieId``-``string`Returns Movie Id.`IsLoopMode``-``boolean`Returns whether Loop Mode.`IsPlaying``-``boolean`Returns whether Playing.`OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| --- |
| `AddCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InInteractionQueueId: `integer``-`Adds Current Audience.`ChangeMovie`InMovieId: `string``-``GetMovieId``-``string`Returns Movie Id.`IsLoopMode``-``boolean`Returns whether Loop Mode.`IsPlaying``-``boolean`Returns whether Playing.`OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `ChangeMovie`InMovieId: `string``-``GetMovieId``-``string`Returns Movie Id.`IsLoopMode``-``boolean`Returns whether Loop Mode.`IsPlaying``-``boolean`Returns whether Playing.`OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `GetMovieId``-``string`Returns Movie Id.`IsLoopMode``-``boolean`Returns whether Loop Mode.`IsPlaying``-``boolean`Returns whether Playing.`OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `IsLoopMode``-``boolean`Returns whether Loop Mode.`IsPlaying``-``boolean`Returns whether Playing.`OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `IsPlaying``-``boolean`Returns whether Playing.`OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `OnMovieFinished``-``-`Callback invoked on Movie Finished.`RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `RemoveCurrentAudience`InAudienceEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Current Audience.`SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `SetLocalFilePath`InFilePath: `string``-`Sets Local File Path.`SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `SetLoopMode`bInLoopMode: `boolean``-`Sets Loop Mode.`SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `SetMovieDuration`InDurationMinutes: `number``-`Sets Movie Duration.`StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `StopMovie``-``-`Stops Movie.`SyncTime``-``-` |
| `SyncTime``-``-` |

# Override points (6)

Implement these in Lua as `FB2MovieScreen.Override_Name = function(...) end`.
