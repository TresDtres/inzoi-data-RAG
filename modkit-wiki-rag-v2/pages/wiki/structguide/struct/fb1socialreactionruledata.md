---
document_id: "f81452757207e26aaca1598628f600090ee0dff4d434e79394b7f7352cb53132"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialreactionruledata"
title: "B1SocialReactionRuleData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:50:02+00:00"
content_sha256: "5b3f3325cb561b2b8d290e40523da00fc59f6a63037e579ab9c9e059f1613453"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1socialreactionruledata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines everything a single reaction rule runs on, covering the outputs it can play and the cooldown budget it spends. Keyed by the rule ID in UB1SocialReactionDataAsset::RuleDataMap.

| PropertyTypeDescriptionMetadataOutputMapTMapThe presentation table keyed by the output ID this rule produces.Category: B1SocialReactionRuleDataSelfCooldownMinutesfloatThe minutes the character waits before starting another reaction after any reaction of this rule.Category: B1SocialReactionRuleDataTalkCooldownMinutesfloatThe minutes a reaction of this rule is suppressed against a target the character has just talked to.Category: B1SocialReactionRuleDataHistoryKeepMinutesfloatThe minutes a per target history entry left by this rule is kept before it is compacted away.Category: B1SocialReactionRuleData |
| --- |
| OutputMapTMapThe presentation table keyed by the output ID this rule produces.Category: B1SocialReactionRuleDataSelfCooldownMinutesfloatThe minutes the character waits before starting another reaction after any reaction of this rule.Category: B1SocialReactionRuleDataTalkCooldownMinutesfloatThe minutes a reaction of this rule is suppressed against a target the character has just talked to.Category: B1SocialReactionRuleDataHistoryKeepMinutesfloatThe minutes a per target history entry left by this rule is kept before it is compacted away.Category: B1SocialReactionRuleData |
| SelfCooldownMinutesfloatThe minutes the character waits before starting another reaction after any reaction of this rule.Category: B1SocialReactionRuleDataTalkCooldownMinutesfloatThe minutes a reaction of this rule is suppressed against a target the character has just talked to.Category: B1SocialReactionRuleDataHistoryKeepMinutesfloatThe minutes a per target history entry left by this rule is kept before it is compacted away.Category: B1SocialReactionRuleData |
| TalkCooldownMinutesfloatThe minutes a reaction of this rule is suppressed against a target the character has just talked to.Category: B1SocialReactionRuleDataHistoryKeepMinutesfloatThe minutes a per target history entry left by this rule is kept before it is compacted away.Category: B1SocialReactionRuleData |
| HistoryKeepMinutesfloatThe minutes a per target history entry left by this rule is kept before it is compacted away.Category: B1SocialReactionRuleData |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
