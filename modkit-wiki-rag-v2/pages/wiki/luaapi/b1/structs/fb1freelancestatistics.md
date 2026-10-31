---
document_id: "cf4c3c2f747d8697c1fa8431599480eeb4c1fc193fabf2ac16553369576dbdca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancestatistics"
title: "FB1FreelanceStatistics"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:56+00:00"
content_sha256: "403d0b2d319628405bae227f72fde031dd37675acc417a0b342b0c5dd6d352d7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancestatistics"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cumulative freelance statistics data stored in a component, tracking completed/failed orders, total earnings, tips, ratings, and per-license completed order counts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`AverageRating``number`Average client satisfaction (0.0 ~ 1.0). UI displays as * 5.f for a 5-point scale.`CompletedOrdersByLicense``table<string, integer>`Completed order count by license.`TotalCompletedOrders``integer`Total number of completed orders.`TotalEarnings``integer`Total earnings.`TotalFailedOrders``integer`Total number of failed orders.`TotalTips``integer`Total tip earnings. |
| --- |
| `AverageRating``number`Average client satisfaction (0.0 ~ 1.0). UI displays as * 5.f for a 5-point scale.`CompletedOrdersByLicense``table<string, integer>`Completed order count by license.`TotalCompletedOrders``integer`Total number of completed orders.`TotalEarnings``integer`Total earnings.`TotalFailedOrders``integer`Total number of failed orders.`TotalTips``integer`Total tip earnings. |
| `CompletedOrdersByLicense``table<string, integer>`Completed order count by license.`TotalCompletedOrders``integer`Total number of completed orders.`TotalEarnings``integer`Total earnings.`TotalFailedOrders``integer`Total number of failed orders.`TotalTips``integer`Total tip earnings. |
| `TotalCompletedOrders``integer`Total number of completed orders.`TotalEarnings``integer`Total earnings.`TotalFailedOrders``integer`Total number of failed orders.`TotalTips``integer`Total tip earnings. |
| `TotalEarnings``integer`Total earnings.`TotalFailedOrders``integer`Total number of failed orders.`TotalTips``integer`Total tip earnings. |
| `TotalFailedOrders``integer`Total number of failed orders.`TotalTips``integer`Total tip earnings. |
| `TotalTips``integer`Total tip earnings. |
