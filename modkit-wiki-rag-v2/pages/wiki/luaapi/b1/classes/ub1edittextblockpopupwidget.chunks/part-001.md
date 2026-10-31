---
document_id: "ac6773103e8044fff1551264eada4780d02c06cd134d1c5cf12f29cad7e14a13"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1edittextblockpopupwidget"
title: "UB1EditTextBlockPopupWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:24+00:00"
content_sha256: "531f6a21ac7131aa1baa9dc34521a8fd22b5f218d3d5d755a12ef9e6824914cf"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1edittextblockpopupwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- EditTextBlock Popup Widget Hosts an EditTextBlock component with optional title and confirm/cancel buttons. Exposes confirm/cancel events and confirm-with-text payload. Design: 1. Composition - wraps B1EditTextBlockWidget (Layer 1 component) 2. Unified API - SetTitle/SetHintText/SetText/GetText 3. Event-driven - delegates only, no business logic 4. Flexible layout - BindWidgetOptional for title and buttons Usage: `cpp UB1EditTextBlockPopupWidget* popup = UB1UIManager::CreateWidget<UB1EditTextBlockPopupWidget>(); popup->SetTitle(FText::FromString(TEXT("Edit Name"))); popup->SetHintText(FText::FromString(TEXT("Enter name..."))); popup->OnConfirmText.AddDynamic(this, &ThisClass::OnNameConfirmed); popup->OnCancelClicked.AddDynamic(popup, &UB1EditTextBlockPopupWidget::ClosePopup); popup->ShowWidget();`

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1MainContentWidgetBase` |
| Category`classes`Extends`UB1MainContentWidgetBase` |
| Extends`UB1MainContentWidgetBase` |

# Properties (9)

| NameTypeDescription`BW_Button_Cancel``any``BW_Button_Close``any``BW_Button_Confirm``any``BW_EditTextBlock``any``BW_Text_Description``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| --- |
| `BW_Button_Cancel``any``BW_Button_Close``any``BW_Button_Confirm``any``BW_EditTextBlock``any``BW_Text_Description``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `BW_Button_Close``any``BW_Button_Confirm``any``BW_EditTextBlock``any``BW_Text_Description``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `BW_Button_Confirm``any``BW_EditTextBlock``any``BW_Text_Description``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `BW_EditTextBlock``any``BW_Text_Description``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `BW_Text_Description``any``BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `BW_Text_Title``any``OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `OnCancelClicked``FOnCancelClicked``OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `OnConfirmClicked``FOnConfirmClicked``OnConfirmText``FOnConfirmText` |
| `OnConfirmText``FOnConfirmText` |

# Functions (16)
