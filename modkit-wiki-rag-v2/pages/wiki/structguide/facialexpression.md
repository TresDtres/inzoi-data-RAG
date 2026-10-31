---
document_id: "799a303406ad0f70f58a2915c3bd46f1735f020dbc41aed765f103a464808e92"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/facialexpression"
title: "📘 FacialExpression Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:44+00:00"
content_sha256: "241d978ddde550de9e479c4bef32e1969c9b3112ba90a0ae45ca5c2f791814d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/facialexpression"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FacialExpressionTableRow

Defines a facial expression with animation sequences and blending behavior.

### Properties

- **Id** (`FName`): Unique identifier for this facial expression.
- **AnimInfoList** (`TArray<FB1AnimSequenceInfo>`): Animations for each gender and age group.
- **BlendAlpha** (`float`): Blend weight when this expression is applied.

## 📚 References

- [FB1AnimSequenceInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1animsequenceinfo)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFacial[FB1FacialExpressionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1facialexpressiontablerow)
