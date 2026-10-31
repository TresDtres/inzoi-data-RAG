---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
tools: [career_set_exam_preparation, career_set_skill_level, career_set_business_level, career_join, career_list_openings, career_get_work_status, career_can_promote, career_promotion, career_add_attendance]
wiki_refs: [pages/wiki/cli/career/career-add-attendance.md, pages/wiki/cli/career/career-can-promote.md, pages/wiki/cli/career/career-get-work-status.md, pages/wiki/cli/career/career-join.md, pages/wiki/cli/career/career-list-openings.md, pages/wiki/cli/career/career-promotion.md, pages/wiki/cli/career/career-set-business-level.md, pages/wiki/cli/career/career-set-exam-preparation.md, pages/wiki/cli/career/career-set-skill-level.md]
---

## Carreras y trabajo

9 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** careers and work: CLI commands for job and career info.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| career_set_exam_preparation | `career.set_exam_preparation(entity_id, Value)` | Fija la puntuacion de preparacion de examen (0-100) de un estudiante. | [CLI: career.set_exam_preparation] Sets a school student's exam preparation score (0-100) to test exam results/grades without studying. Reset to 0 on the weekly school reset (Monday). | no publicitado — completar tras prueba en vivo | activo |
| career_set_skill_level | `career.set_skill_level(entity_id, skill_name, Level)` | Fija el nivel de una habilidad por su nombre. | [CLI: career.set_skill_level] Sets a skill to the given level by skill name. | no publicitado — completar tras prueba en vivo | activo |
| career_set_business_level | `career.set_business_level(entity_id, Level)` | Fija el nivel del negocio del hogar. | [CLI: career.set_business_level] Sets the business level for the household biz. | no publicitado — completar tras prueba en vivo | activo |
| career_join | `career.join(entity_id, career_entity_id, job_id)` | Asigna al personaje a una carrera o empleo concreto. | [CLI: career.join] Assigns the character to a specific career/job (use career.list_openings to get valid career_entity_id/job_id). | no publicitado — completar tras prueba en vivo | activo |
| career_list_openings | `career.list_openings()` | Lista las carreras de negocio contratables del mundo con vacantes. | [CLI: career.list_openings] Lists joinable Business careers/jobs in the world with vacancy counts. The mod picks one and calls career.join. | wiki: Returns a JSON object with the following fields: | consultivo |
| career_get_work_status | `career.get_work_status(entity_id, entity_ids)` | Devuelve el estado laboral del personaje (tiene empleo, horario...). | [CLI: career.get_work_status] Returns work schedule status for a character (has_job, is_working_time, is_working_day, is_at_work, simulated, work_site_id, home_site_id). Supports batch via comma-separated entity_ids. | wiki: Freeform result (shape is not fixed). > Single query (entity_id) returns {entity_id, has_job, is_working_time, is_commute_time, is_working_day, is_at_work, simulated, work_site_id, home_site_id}. Batch query (entity_ids) | consultivo |
| career_can_promote | `career.can_promote(entity_id)` | Devuelve si el personaje tiene carrera de negocio y puede ascender. | [CLI: career.can_promote] Returns whether the character has a Business career and is eligible for promotion (rank below max). Non-mutating; safe to poll. | wiki: Returns a JSON object with the following fields: | consultivo |
| career_promotion | `career.promotion(entity_id)` | Asciende al Zoi en su empleo actual. | [CLI: career.promotion] Promotes the current Zoi in their job. | no publicitado — completar tras prueba en vivo | activo |
| career_add_attendance | `career.add_attendance(entity_id, Days)` | Anade dias de asistencia al historial laboral del personaje. | [CLI: career.add_attendance] Adds attendance days to a character's career record for retirement eligibility testing | no publicitado — completar tras prueba en vivo | activo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/career/career-add-attendance.md](pages/wiki/cli/career/career-add-attendance.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance
- [pages/wiki/cli/career/career-can-promote.md](pages/wiki/cli/career/career-can-promote.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote
- [pages/wiki/cli/career/career-get-work-status.md](pages/wiki/cli/career/career-get-work-status.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status
- [pages/wiki/cli/career/career-join.md](pages/wiki/cli/career/career-join.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join
- [pages/wiki/cli/career/career-list-openings.md](pages/wiki/cli/career/career-list-openings.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings
- [pages/wiki/cli/career/career-promotion.md](pages/wiki/cli/career/career-promotion.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion
- [pages/wiki/cli/career/career-set-business-level.md](pages/wiki/cli/career/career-set-business-level.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level
- [pages/wiki/cli/career/career-set-exam-preparation.md](pages/wiki/cli/career/career-set-exam-preparation.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation
- [pages/wiki/cli/career/career-set-skill-level.md](pages/wiki/cli/career/career-set-skill-level.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level
