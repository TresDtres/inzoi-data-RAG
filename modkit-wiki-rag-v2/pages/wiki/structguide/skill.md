---
document_id: "5bbbcde90cc49cf93c6f9243668e03fd198e1f88e7eea0b8ff12635c383cb166"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skill"
title: "📘 Skill Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:03+00:00"
content_sha256: "2d0712ebc27db38f948d69b59f974670d30d1caf1d2dcf1f24b4f78401f2baa9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/skill"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SkillTableRow

Defines a skill that can be acquired or leveled up by characters, including visuals and growth requirements.

### Properties

- **Id** (`FName`): Unique identifier for the skill.
- **SkillDisplayInfo** (`FB1SkillDisplayInfo`): Display information such as name, icon, and description.
- **SkillObjectIds** (`TArray<FName>`): IDs of objects associated with this skill. *(Foreign = "Object.Id")*
- **GrowthStep** (`EB1GrowthStep`): Minimum growth stage required to access this skill.
- **SkillLevelInfo** (`TArray<FB1SkillLevelInfo>`): List of level definitions and effects for this skill.

## 📚 References

- [FB1SkillDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skilldisplayinfo)
- [FB1SkillLevelInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skilllevelinfo)
- [FB1LevelUpDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1levelupdisplayinfo)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSkill[SkillInherit Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skillinherit)[FB1Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skill)[FB1SkillCheckDice](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skillcheckdice)[FB1SkillCheckResultInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skillcheckresultinfo)[FB1SkillCheckResultModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skillcheckresultmodifier)[FB1SkillDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skilldisplayinfo)[FB1SkillEntryWidgetGaugeColorInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skillentrywidgetgaugecolorinfo)[FB1SkillInheritTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skillinherittablerow)[FB1SkillLevelInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skilllevelinfo)[FB1SkillTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skilltablerow)
