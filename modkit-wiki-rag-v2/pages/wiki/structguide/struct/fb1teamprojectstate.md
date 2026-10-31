---
document_id: "e1b00c5b13416efc03a23b75cfa17f0aec9206d9681649b71ec21dccd69c3289"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1teamprojectstate"
title: "B1TeamProjectState"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:05+00:00"
content_sha256: "2965c904509162f6468e51f0f151878434eba315e0f3c91c345d83c5e3aeb49e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1teamprojectstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime state of an active team project, tracking points, timeline, and per-member contributions.

| PropertyTypeDescriptionMetadataProjectIdFNameForeign key referencing the project definition in the data table.CurrentPointint32Current accumulated contribution points for this project.TotalPointint32Total points required for the Excellent grade, copied from the data table at project start.StartTicksint64Project start time in game ticks.DeadlineTicksint64Project deadline time in game ticks.MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| --- |
| ProjectIdFNameForeign key referencing the project definition in the data table.CurrentPointint32Current accumulated contribution points for this project.TotalPointint32Total points required for the Excellent grade, copied from the data table at project start.StartTicksint64Project start time in game ticks.DeadlineTicksint64Project deadline time in game ticks.MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| CurrentPointint32Current accumulated contribution points for this project.TotalPointint32Total points required for the Excellent grade, copied from the data table at project start.StartTicksint64Project start time in game ticks.DeadlineTicksint64Project deadline time in game ticks.MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| TotalPointint32Total points required for the Excellent grade, copied from the data table at project start.StartTicksint64Project start time in game ticks.DeadlineTicksint64Project deadline time in game ticks.MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| StartTicksint64Project start time in game ticks.DeadlineTicksint64Project deadline time in game ticks.MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| DeadlineTicksint64Project deadline time in game ticks.MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| MemberContributionsTMapMap of entity IDs to their individual contribution point totals.WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| WorkedMemberIdsTArrayMembers who attended at least one day during the team project period. * Members not in this list are excluded from evaluation (no rewards, no penalties).bIsActiveboolWhether the project is currently active and accepting contributions. |
| bIsActiveboolWhether the project is currently active and accepting contributions. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTeam[FB1TeamProjectBonusEntry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1teamprojectbonusentry)[FB1TeamProjectBonusGradeRule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1teamprojectbonusgraderule)[FB1TeamProjectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1teamprojecttablerow)
