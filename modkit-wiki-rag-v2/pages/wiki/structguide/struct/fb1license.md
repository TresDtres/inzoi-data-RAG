---
document_id: "82f4277b4b2a28689d46e5f43b27d5f98d089e0a77f1608a42657d5d529cf9bb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1license"
title: "B1License"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:26+00:00"
content_sha256: "8f45ce187aca6604885e5ac46afdfe3520ae945e9e6a309fddc0b104191aa6c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1license"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime data for a license stored in a component. * All licenses (owned/under-review/not-owned) are registered in LicensesMap; * the Status field distinguishes the current state.

| PropertyTypeDescriptionMetadataLicenseIdFNameLicense ID.Category: B1LicenseStatusEB1FreelanceLicenseStatusLicense status (Owned/UnderReview/Locked/Available).Category: B1LicenseCurrentGradeEB1LicenseGradeCurrent grade.Category: B1LicenseTrustScoreint32Trust score (0~100).Category: B1LicenseCompletedOrderCountint32Number of completed orders.Category: B1LicenseAcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| --- |
| LicenseIdFNameLicense ID.Category: B1LicenseStatusEB1FreelanceLicenseStatusLicense status (Owned/UnderReview/Locked/Available).Category: B1LicenseCurrentGradeEB1LicenseGradeCurrent grade.Category: B1LicenseTrustScoreint32Trust score (0~100).Category: B1LicenseCompletedOrderCountint32Number of completed orders.Category: B1LicenseAcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| StatusEB1FreelanceLicenseStatusLicense status (Owned/UnderReview/Locked/Available).Category: B1LicenseCurrentGradeEB1LicenseGradeCurrent grade.Category: B1LicenseTrustScoreint32Trust score (0~100).Category: B1LicenseCompletedOrderCountint32Number of completed orders.Category: B1LicenseAcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| CurrentGradeEB1LicenseGradeCurrent grade.Category: B1LicenseTrustScoreint32Trust score (0~100).Category: B1LicenseCompletedOrderCountint32Number of completed orders.Category: B1LicenseAcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| TrustScoreint32Trust score (0~100).Category: B1LicenseCompletedOrderCountint32Number of completed orders.Category: B1LicenseAcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| CompletedOrderCountint32Number of completed orders.Category: B1LicenseAcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| AcquiredTimeTicksint64Acquisition time (Ticks).Category: B1LicenseReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| ReviewStartTimeTicksint64Review start time (valid only when Status == UnderReview).Category: B1LicenseReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| ReviewExpireTimeTicksint64Review expiry time (valid only when Status == UnderReview).Category: B1LicenseAcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |
| AcquireConditionSatisfiedListTArrayPer-condition satisfaction flags (1:1 mapping with AcquireConditions, same index).Category: B1License |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoLicense[FB1LicenseAcquireCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1licenseacquirecondition)[FB1LicenseGradeCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1licensegradecondition)[FB1LicenseGradeUpScript](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1licensegradeupscript)[FB1LicenseTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1licensetablerow)
