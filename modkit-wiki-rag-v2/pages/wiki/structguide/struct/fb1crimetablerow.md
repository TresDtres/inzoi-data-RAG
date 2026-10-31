---
document_id: "55689ccb288bba1a24448039f54428b8b44a199d4f5a806a56df197b3ee5ce2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1crimetablerow"
title: "B1CrimeTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:15+00:00"
content_sha256: "8ecc04df0027accd9c1edd5c65217e8e75fc1b906e0fc7cba77823a46d3bbd17"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1crimetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Crime definition table row. Defines a specific type of crime, its score thresholds, associated behaviors, and scripts.

| PropertyTypeDescriptionMetadataDisplayTextIdFStringString table key for the localized display name of this crime.Category: Crime StringTableKey: IdCrimeScoreMinfloatMinimum allowed crime score for this crime.Category: CrimeCrimeScoreMaxfloatMaximum allowed crime score for this crime.Category: CrimeCrimeScoreReportThresholdfloatCrime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.Category: CrimeCriminalBehaviorsTArrayList of behaviors that belong to this crime.Category: CrimeCriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| DisplayTextIdFStringString table key for the localized display name of this crime.Category: Crime StringTableKey: IdCrimeScoreMinfloatMinimum allowed crime score for this crime.Category: CrimeCrimeScoreMaxfloatMaximum allowed crime score for this crime.Category: CrimeCrimeScoreReportThresholdfloatCrime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.Category: CrimeCriminalBehaviorsTArrayList of behaviors that belong to this crime.Category: CrimeCriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CrimeScoreMinfloatMinimum allowed crime score for this crime.Category: CrimeCrimeScoreMaxfloatMaximum allowed crime score for this crime.Category: CrimeCrimeScoreReportThresholdfloatCrime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.Category: CrimeCriminalBehaviorsTArrayList of behaviors that belong to this crime.Category: CrimeCriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CrimeScoreMaxfloatMaximum allowed crime score for this crime.Category: CrimeCrimeScoreReportThresholdfloatCrime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.Category: CrimeCriminalBehaviorsTArrayList of behaviors that belong to this crime.Category: CrimeCriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CrimeScoreReportThresholdfloatCrime score threshold at or above which the crime report scripts (CrimeReportScriptIds) will be executed.Category: CrimeCriminalBehaviorsTArrayList of behaviors that belong to this crime.Category: CrimeCriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CriminalBehaviorsTArrayList of behaviors that belong to this crime.Category: CrimeCriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CriminalBehaviorScriptIdsTArrayScript IDs to execute when a criminal behavior occurs, regardless of whether conditions (FB1CriminalBehavior::ConditionIds) pass.Category: B1CrimeTableRow Foreign: Script_Crime.IdCrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CrimeReportScriptIdsTArrayScript IDs to execute when this crime is reported.Category: B1CrimeTableRow Foreign: Script_Crime.IdIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
