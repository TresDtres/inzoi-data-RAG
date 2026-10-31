---
document_id: "95d7f9bb37810c3f4c3f48c7d2c4a95dfd37f4251b5172d076ca928f362ccd6e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/actions/fb1gameactioninfo"
title: "FB1GameActionInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:24+00:00"
content_sha256: "acf4fd8691898ca5809b4ed1928b5c1f850ac3e5500e2d045810390de3b58be1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/actions/fb1gameactioninfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Holds configuration data for a single game action, including the input asset, platform availability flags, and how the action trigger is handled.

# Metadata

| FieldValueKind`action`EnvironmentB1 - PresentationCategory`actions` |
| --- |
| Kind`action`EnvironmentB1 - PresentationCategory`actions` |
| EnvironmentB1 - PresentationCategory`actions` |
| Category`actions` |

# Properties (8)

| NameTypeDescription`InputAction``UInputAction`Enhanced Input action asset associated with this action.`TriggerType`[`EB1ActionTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1actiontriggertype)Trigger type controlling how this action is invoked (Pressed once, Down continuously, etc.).`bAllowOnGamePadComboKey``boolean`Whether gamepad combo key input is allowed for this action.`bAllowOnGamePadModifierKey``boolean`Whether single modifier key input (L1/R1) is allowed for this action on gamepad.`bAllowOnGamepad``boolean`Whether gamepad input is allowed for this action.`bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| --- |
| `InputAction``UInputAction`Enhanced Input action asset associated with this action.`TriggerType`[`EB1ActionTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1actiontriggertype)Trigger type controlling how this action is invoked (Pressed once, Down continuously, etc.).`bAllowOnGamePadComboKey``boolean`Whether gamepad combo key input is allowed for this action.`bAllowOnGamePadModifierKey``boolean`Whether single modifier key input (L1/R1) is allowed for this action on gamepad.`bAllowOnGamepad``boolean`Whether gamepad input is allowed for this action.`bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `TriggerType`[`EB1ActionTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1actiontriggertype)Trigger type controlling how this action is invoked (Pressed once, Down continuously, etc.).`bAllowOnGamePadComboKey``boolean`Whether gamepad combo key input is allowed for this action.`bAllowOnGamePadModifierKey``boolean`Whether single modifier key input (L1/R1) is allowed for this action on gamepad.`bAllowOnGamepad``boolean`Whether gamepad input is allowed for this action.`bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `bAllowOnGamePadComboKey``boolean`Whether gamepad combo key input is allowed for this action.`bAllowOnGamePadModifierKey``boolean`Whether single modifier key input (L1/R1) is allowed for this action on gamepad.`bAllowOnGamepad``boolean`Whether gamepad input is allowed for this action.`bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `bAllowOnGamePadModifierKey``boolean`Whether single modifier key input (L1/R1) is allowed for this action on gamepad.`bAllowOnGamepad``boolean`Whether gamepad input is allowed for this action.`bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `bAllowOnGamepad``boolean`Whether gamepad input is allowed for this action.`bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `bAllowOnKeyboard``boolean`Whether keyboard input is allowed for this action.`bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `bHideOnMacControlGuide``boolean`If true, this action is not shown in the Mac platform's control guide.`bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
| `bIsMovementAction``boolean`Whether this is a movement action that should skip keyboard modifier blocker checks. |
