---
document_id: "e602743d585ba15e0d1bfbcf0831c9b78f0019d807a9dd81ae4447a0a07bcaa7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1edittextblockwidget"
title: "UB1EditTextBlockWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:24+00:00"
content_sha256: "146e2b223ef08369c45ec3db8d633a4ab44e9d6c4dc29adfe3f2c715fa15e766"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1edittextblockwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- EditTextBlock Component Widget UB1MultiLineEditableTextBox wrapper component with line-based height control. Design: 1. Composition - embed in other widgets (forms, popups, settings) 2. Unified API - SetText/GetText/SetHintText/SetLineCount 3. Event-driven - delegates only, no business logic 4. Line-based height - (FontSize + Offset) * Lines Usage: `cpp void UMyFormWidget::NativeOnInitialized() { Super::NativeOnInitialized(); BW_EditTextBlock->OnTextChangedEvent.AddDynamic(this, &ThisClass::OnNameChanged); } void UMyFormWidget::RefreshData() { BW_EditTextBlock->SetHintText(NSLOCTEXT("MyForm", "NameHint", "Enter name...")); BW_EditTextBlock->SetText(FText::FromString(CurrentName)); BW_EditTextBlock->SetLineCount(3); }`

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Category`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |

# Properties (7)

| NameTypeDescription`BW_EditableTextBox``any``BW_SizeBox``any``LineCount``integer``MaxLength``integer``OnTextChangedEvent``FOnTextChangedEvent``OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| --- |
| `BW_EditableTextBox``any``BW_SizeBox``any``LineCount``integer``MaxLength``integer``OnTextChangedEvent``FOnTextChangedEvent``OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| `BW_SizeBox``any``LineCount``integer``MaxLength``integer``OnTextChangedEvent``FOnTextChangedEvent``OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| `LineCount``integer``MaxLength``integer``OnTextChangedEvent``FOnTextChangedEvent``OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| `MaxLength``integer``OnTextChangedEvent``FOnTextChangedEvent``OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| `OnTextChangedEvent``FOnTextChangedEvent``OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| `OnTextCommittedEvent``FOnTextCommittedEvent``WrapTextAt``number` |
| `WrapTextAt``number` |

# Functions (8)

| FunctionParametersReturnsDescription`GetText``-``string`Returns Text.`OnTextChanged`InText: `string``-`Callback invoked on Text Changed.`OnTextCommitted`InText: `string`, InCommitType: `ETextCommit``-`Callback invoked on Text Committed.`SetHintText`InText: `string``-`Sets Hint Text.`SetLineCount`InLineCount: `integer``-`Sets Line Count.`SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| --- |
| `GetText``-``string`Returns Text.`OnTextChanged`InText: `string``-`Callback invoked on Text Changed.`OnTextCommitted`InText: `string`, InCommitType: `ETextCommit``-`Callback invoked on Text Committed.`SetHintText`InText: `string``-`Sets Hint Text.`SetLineCount`InLineCount: `integer``-`Sets Line Count.`SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `OnTextChanged`InText: `string``-`Callback invoked on Text Changed.`OnTextCommitted`InText: `string`, InCommitType: `ETextCommit``-`Callback invoked on Text Committed.`SetHintText`InText: `string``-`Sets Hint Text.`SetLineCount`InLineCount: `integer``-`Sets Line Count.`SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `OnTextCommitted`InText: `string`, InCommitType: `ETextCommit``-`Callback invoked on Text Committed.`SetHintText`InText: `string``-`Sets Hint Text.`SetLineCount`InLineCount: `integer``-`Sets Line Count.`SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `SetHintText`InText: `string``-`Sets Hint Text.`SetLineCount`InLineCount: `integer``-`Sets Line Count.`SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `SetLineCount`InLineCount: `integer``-`Sets Line Count.`SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `SetMaxLength`InMaxLength: `integer``-`Sets Max Length.`SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `SetText`InText: `string``-`Sets Text.`SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
| `SetWrapTextAt`InWrapTextAt: `number``-`Sets Wrap Text At. |
