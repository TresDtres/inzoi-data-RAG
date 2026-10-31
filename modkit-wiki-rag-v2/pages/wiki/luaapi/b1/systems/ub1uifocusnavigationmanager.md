---
document_id: "4833fd1b7f678a52df01aea12a3f6878d8ca1782ade3c53bced3054bc970de2d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1uifocusnavigationmanager"
title: "UB1UIFocusNavigationManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:58+00:00"
content_sha256: "62bdb7103ef0804b5286bdc27f6f53bce64f1b73851ece0ab2f5aaea20897732"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1uifocusnavigationmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- UIFocusNavigation manager.

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends`:FDiagonalNavInputPreprocessor:IInputProcessor` |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends`:FDiagonalNavInputPreprocessor:IInputProcessor` |
| EnvironmentB1 - PresentationCategory`systems`Extends`:FDiagonalNavInputPreprocessor:IInputProcessor` |
| Category`systems`Extends`:FDiagonalNavInputPreprocessor:IInputProcessor` |
| Extends`:FDiagonalNavInputPreprocessor:IInputProcessor` |

# Properties (5)

| NameTypeDescription`ClickEventPlayAudioId``string``CurrentFocusUserWidget``any``CurrentFocusWidget``any``DebugLineOwner``UWidget``PendingAnimFocusWidget``any`Reservation to defer switching to an animation-focus widget (one that has its own focus animation) until after arrival (pointer interpolation convergence). SetFocused(true) is called after the pointer finishes move-interpolation + shape morphing to the destination, not right after the switch. Consumed in Tick's ProcessPendingAnimFocus(). |
| --- |
| `ClickEventPlayAudioId``string``CurrentFocusUserWidget``any``CurrentFocusWidget``any``DebugLineOwner``UWidget``PendingAnimFocusWidget``any`Reservation to defer switching to an animation-focus widget (one that has its own focus animation) until after arrival (pointer interpolation convergence). SetFocused(true) is called after the pointer finishes move-interpolation + shape morphing to the destination, not right after the switch. Consumed in Tick's ProcessPendingAnimFocus(). |
| `CurrentFocusUserWidget``any``CurrentFocusWidget``any``DebugLineOwner``UWidget``PendingAnimFocusWidget``any`Reservation to defer switching to an animation-focus widget (one that has its own focus animation) until after arrival (pointer interpolation convergence). SetFocused(true) is called after the pointer finishes move-interpolation + shape morphing to the destination, not right after the switch. Consumed in Tick's ProcessPendingAnimFocus(). |
| `CurrentFocusWidget``any``DebugLineOwner``UWidget``PendingAnimFocusWidget``any`Reservation to defer switching to an animation-focus widget (one that has its own focus animation) until after arrival (pointer interpolation convergence). SetFocused(true) is called after the pointer finishes move-interpolation + shape morphing to the destination, not right after the switch. Consumed in Tick's ProcessPendingAnimFocus(). |
| `DebugLineOwner``UWidget``PendingAnimFocusWidget``any`Reservation to defer switching to an animation-focus widget (one that has its own focus animation) until after arrival (pointer interpolation convergence). SetFocused(true) is called after the pointer finishes move-interpolation + shape morphing to the destination, not right after the switch. Consumed in Tick's ProcessPendingAnimFocus(). |
| `PendingAnimFocusWidget``any`Reservation to defer switching to an animation-focus widget (one that has its own focus animation) until after arrival (pointer interpolation convergence). SetFocused(true) is called after the pointer finishes move-interpolation + shape morphing to the destination, not right after the switch. Consumed in Tick's ProcessPendingAnimFocus(). |

# Functions (1)

| FunctionParametersReturnsDescription`SetFocusRegionSystemEnabled`bEnabled: `boolean``-`Enables/disables the entire Region system (not a specific WBP, but the whole system on/off). When disabled, automatic preview/Current handling and all region input stop, and any in-progress preview/Current/reserved state is cleared immediately. E.g. turn the system off while UI unsuitable for Regions (such as an interaction panel) is up, to block other region intervention. |
| --- |
| `SetFocusRegionSystemEnabled`bEnabled: `boolean``-`Enables/disables the entire Region system (not a specific WBP, but the whole system on/off). When disabled, automatic preview/Current handling and all region input stop, and any in-progress preview/Current/reserved state is cleared immediately. E.g. turn the system off while UI unsuitable for Regions (such as an interaction panel) is up, to block other region intervention. |
