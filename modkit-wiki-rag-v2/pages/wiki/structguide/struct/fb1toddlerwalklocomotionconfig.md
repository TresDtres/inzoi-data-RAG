---
document_id: "df2b57c47663eaf6a2d1e542058912294c2426558da2c034a7c739a616408118"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1toddlerwalklocomotionconfig"
title: "B1ToddlerWalkLocomotionConfig"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:09+00:00"
content_sha256: "f080a7f366b95687cc1f03a428d4a83429f62e545f63c50da8abf7d6de64f353"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1toddlerwalklocomotionconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Toddler walking unlock policy for locomotion override.

| PropertyTypeDescriptionMetadataUnlockSkillIdFNameSkill used to shorten the walking unlock age progress.Category: B1ToddlerWalkLocomotionConfig Foreign: Skill.IdUnlockAgeProgressBySkillLevelTMap* Maps a skill level to the AgeProgress at which walking starts. * At AgeProgressRate 1.0, a value of 4 starts walking on day 4. * Calendar days are ceil(value / AgeProgressRate) * (for example, 4 -> 2 days at rate 2x and 8 days at 0.5x).Category: B1ToddlerWalkLocomotionConfig |
| --- |
| UnlockSkillIdFNameSkill used to shorten the walking unlock age progress.Category: B1ToddlerWalkLocomotionConfig Foreign: Skill.IdUnlockAgeProgressBySkillLevelTMap* Maps a skill level to the AgeProgress at which walking starts. * At AgeProgressRate 1.0, a value of 4 starts walking on day 4. * Calendar days are ceil(value / AgeProgressRate) * (for example, 4 -> 2 days at rate 2x and 8 days at 0.5x).Category: B1ToddlerWalkLocomotionConfig |
| UnlockAgeProgressBySkillLevelTMap* Maps a skill level to the AgeProgress at which walking starts. * At AgeProgressRate 1.0, a value of 4 starts walking on day 4. * Calendar days are ceil(value / AgeProgressRate) * (for example, 4 -> 2 days at rate 2x and 8 days at 0.5x).Category: B1ToddlerWalkLocomotionConfig |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
