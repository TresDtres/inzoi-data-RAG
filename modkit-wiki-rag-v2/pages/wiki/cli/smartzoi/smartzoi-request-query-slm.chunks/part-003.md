---
document_id: "06f1b142b05df7df87e901129c30f96ac96d055b4bd8323922ccde076ad9ace5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartzoi/smartzoi-request-query-slm"
title: "smartzoi.request_query_slm"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:17+00:00"
content_sha256: "740ee72bcaa81152dc8c89662a51b621e5413cc802ddf8dc8dfb3152d0fbb456"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/cli/smartzoi/smartzoi-request-query-slm"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

de all current Business/School jobs.action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| business_typenamenoHouseholdBizBusiness type for Business domain. Current supported value: HouseholdBiz.role_hintnamenoAnyBusiness role hint for Business domain: Any, Customer, Employee, or Manager.service_tagnamenoAllOptional HouseholdBiz activity tag filter for Business domain. Use All to use role activity tags.career_typenamenoAllCareer type for Career domain. Current supported values: All, Business, or School.job_idnamenoAllOptional Career job id filter for Career domain. Use All to include all current Business/School jobs.action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| role_hintnamenoAnyBusiness role hint for Business domain: Any, Customer, Employee, or Manager.service_tagnamenoAllOptional HouseholdBiz activity tag filter for Business domain. Use All to use role activity tags.career_typenamenoAllCareer type for Career domain. Current supported values: All, Business, or School.job_idnamenoAllOptional Career job id filter for Career domain. Use All to include all current Business/School jobs.action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| service_tagnamenoAllOptional HouseholdBiz activity tag filter for Business domain. Use All to use role activity tags.career_typenamenoAllCareer type for Career domain. Current supported values: All, Business, or School.job_idnamenoAllOptional Career job id filter for Career domain. Use All to include all current Business/School jobs.action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| career_typenamenoAllCareer type for Career domain. Current supported values: All, Business, or School.job_idnamenoAllOptional Career job id filter for Career domain. Use All to include all current Business/School jobs.action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| job_idnamenoAllOptional Career job id filter for Career domain. Use All to include all current Business/School jobs.action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| action_tagnamenoAllOptional Career action tag filter. Use All to use current Career action tags.scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| scopestringnoAutonomyQuery scope: Autonomy, AOI, CurrentSite, or TargetSite.site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| site_idnameno—TargetSite site id. Takes precedence over site_tag.site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| site_tagnameno—TargetSite site tag used only when site_id is empty.request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| request_typestringnoActionSLM request type: Reason or ActiondumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |
| dumpboolnofalseSave filtered V1 request data and debug metadata while preparing the payload. |

# Usage

```
await inzoi.cli.execute('smartzoi.request_query_slm', {  entity_id: 0, // optional  stat_id: 'All', // optional  coop_id: 'All', // optional  coop_type: 'All', // optional  participant_role: 'Any', // optional  domain: 'Needs', // optional  business_type: 'HouseholdBiz', // optional  role_hint: 'Any', // optional  service_tag: 'All', // optional  career_type: 'All', // optional  job_id: 'All', // optional  action_tag: 'All', // optional  scope: 'Autonomy', // optional  site_id: '', // optional  site_tag: '', // optional  request_type: 'Action', // optional  dump: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
