---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [game_get_state, household_biz_get_info, household_biz_can_start_day_business, household_biz_set_business_template, household_biz_set_work_time, household_biz_set_work_days, household_biz_set_entrance_fee_type, household_biz_set_price_policy_type, household_biz_set_purchase_payment_method, household_biz_spawn_random_employee, household_biz_hire_employee, household_biz_list_employees, household_biz_set_employee_activities, household_biz_get_customers, household_biz_get_customer_activities, household_biz_set_customer_activities, household_biz_get_purchase_desire, household_biz_get_customer_diagnostics, household_biz_is_operating, household_biz_get_remain_time, household_biz_should_end_day_business, household_biz_settle_tips, household_biz_get_tip_amount, household_biz_fire_employee, household_biz_depart_employee, currency_add_money]
wiki_refs: []
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412)
generado: 2026-10-09
---

# WF-18: Abrir y operar un negocio del hogar

**Objetivo:** montar el negocio de la familia (plantilla, horario, empleados, precios) y supervisar una jornada de apertura con los comandos household_biz.
**EN:** set up the family business (template, schedule, employees, prices) and supervise an opening day with household_biz commands.
**Nivel:** intermedio
**Ruta:** juego-en-vivo

**Pasos:**

1. `game_get_state` (inzoi-game) — partida activa. Resultado esperado: phase 'in_game'.
2. `household_biz_get_info` (inzoi-game) — informacion basica del negocio: plantilla, tarifas, horario. VERIFICADO EN VIVO (2026-10-09): la creacion del negocio NO es posible por CLI — con template_id real (Cafe_Default, de los 12 ids de la tabla HouseholdBizTemplate) `household_biz_set_business_template` responde el mismo error que `household_biz_get_info`: "Could not resolve household_biz_id (not specified, and possessed character neither manages nor is located at a business)". El negocio debe crearse primero por el flujo normal del juego; los comandos household_biz solo operan sobre un negocio existente. Plantillas disponibles: Bakery_Default, Cafe_Default, FitnessCenter_Default, PCCafe_Default, Restaurant_Default, PremiumRestaurant_Default, Club_Default, Lounge_Default, FlowerShop_Default, HairSalon_Default, ClothStore_Default, Accommodation_Default.
3. `household_biz_can_start_day_business` — ¿puede abrir hoy? Resultado esperado: true. Si false: revisar plantilla y horario con get_info.
4. Configuracion de apertura:
   - `household_biz_set_business_template` — plantilla (recetas y recomendaciones).
   - `household_biz_set_work_time` — apertura/cierre diario (HHMM).
   - `household_biz_set_work_days` — dias de apertura semanales.
   - `household_biz_set_entrance_fee_type` / `household_biz_set_price_policy_type` / `household_biz_set_purchase_payment_method`.
5. Personal:
   - `household_biz_spawn_random_employee` — genera y contrata un candidato aleatorio.
   - `household_biz_hire_employee` — contrata a un personaje concreto.
   - `household_biz_list_employees` — verificacion del plantel.
   - `household_biz_set_employee_activities` / `household_biz_get_employee_activities` — actividades asignadas.
6. Supervision durante la jornada:
   - `household_biz_is_operating` / `household_biz_get_remain_time`.
   - `household_biz_get_customers` — clientes actuales.
   - `household_biz_get_customer_activities` / `household_biz_set_customer_activities`.
   - `household_biz_get_purchase_desire` y `household_biz_get_customer_diagnostics` — por que compran o no compran (diagnostico documentado en el volcado).
7. Cierre: `household_biz_should_end_day_business` — ¿toca cerrar? — y `household_biz_settle_tips` con verificacion previa `household_biz_get_tip_amount` (bote de propinas y reparto).
8. (Opcional) `currency_add_money` — inyeccion de dinero al hogar para pruebas. Comando activo: solo con permiso del usuario.
9. (Baja) `household_biz_fire_employee` / `household_biz_depart_employee` — despido o abandono voluntario.

**Advertencias (obligatorias):**
- Los comandos household_biz NO tienen pagina wiki (38 de la intencion dinero-y-negocios son sin-doc-wiki): **el volcado es unica fuente; requiere verificacion en vivo**. Este workflow entero se apoya en las descripciones del volcado.
- Retornos no publicitados por el servidor (completar tras prueba en vivo).
- Variante restaurante (mesas, tickets, lotes de cocina, cola de limpieza) disponible con: household_biz_get_all_restaurant_tables, household_biz_get_table_capacity, household_biz_get_max_table_capacity, household_biz_find_assigned_table_for_eater, household_biz_get_order_tickets, household_biz_get_restaurant_task_status, household_biz_get_restaurant_dish_batches, household_biz_get_restaurant_cleanup_queue; variante alojamiento: household_biz_create_accommodation_booking / household_biz_extend_accommodation_booking / household_biz_finish_accommodation_booking.

**Herramientas:** game_get_state, household_biz_get_info, household_biz_can_start_day_business, household_biz_set_business_template, household_biz_set_work_time, household_biz_set_work_days, household_biz_set_entrance_fee_type, household_biz_set_price_policy_type, household_biz_set_purchase_payment_method, household_biz_spawn_random_employee, household_biz_hire_employee, household_biz_list_employees, household_biz_set_employee_activities, household_biz_get_customers, household_biz_get_customer_activities, household_biz_set_customer_activities, household_biz_get_purchase_desire, household_biz_get_customer_diagnostics, household_biz_is_operating, household_biz_get_remain_time, household_biz_should_end_day_business, household_biz_settle_tips, household_biz_get_tip_amount, household_biz_fire_employee, household_biz_depart_employee, currency_add_money (inzoi-game)

**Categorias CLI tocadas:** dinero-y-negocios, partida-guardados-y-flujo

**Wiki:** ninguna (los comandos household_biz no tienen pagina en el snapshot; el volcado es unica fuente)
## English version (EN)

**Goal:** set up the family's business (template, schedule, employees, prices) and supervise an opening day with the household_biz commands.

**Level:** intermediate. **Route:** live game.

**Steps:**

1. `game_get_state` (inzoi-game) — active session. Expected: phase 'in_game'.
2. `household_biz_get_info` (inzoi-game) — the business's basic info: template, fees, schedule. VERIFIED LIVE (2026-10-09): creating the business via CLI is NOT possible — with a real template_id (Cafe_Default, from the 12 ids in the HouseholdBizTemplate table) `household_biz_set_business_template` answers the same error as `household_biz_get_info`: "Could not resolve household_biz_id (not specified, and possessed character neither manages nor is located at a business)". The business must be created through the game's normal flow first; household_biz commands only operate on an existing business. Available templates: Bakery_Default, Cafe_Default, FitnessCenter_Default, PCCafe_Default, Restaurant_Default, PremiumRestaurant_Default, Club_Default, Lounge_Default, FlowerShop_Default, HairSalon_Default, ClothStore_Default, Accommodation_Default.
3. `household_biz_can_start_day_business` — can it open today? Expected: true. If false: review template and schedule with get_info.
4. Opening configuration:
   - `household_biz_set_business_template` — template (recipes and recommendations).
   - `household_biz_set_work_time` — daily open/close (HHMM).
   - `household_biz_set_work_days` — weekly opening days.
   - `household_biz_set_entrance_fee_type` / `household_biz_set_price_policy_type` / `household_biz_set_purchase_payment_method`.
5. Staff:
   - `household_biz_spawn_random_employee` — generates and hires a random candidate.
   - `household_biz_hire_employee` — hires a concrete character.
   - `household_biz_list_employees` — staff verification.
   - `household_biz_set_employee_activities` / `household_biz_get_employee_activities` — assigned activities.
6. Supervision during the day:
   - `household_biz_is_operating` / `household_biz_get_remain_time`.
   - `household_biz_get_customers` — current customers.
   - `household_biz_get_customer_activities` / `household_biz_set_customer_activities`.
   - `household_biz_get_purchase_desire` and `household_biz_get_customer_diagnostics` — why they buy or don't buy (diagnostics documented in the dump).
7. Closing: `household_biz_should_end_day_business` — is it time to close? — and `household_biz_settle_tips` with prior verification via `household_biz_get_tip_amount` (tip pool and distribution).
8. (Optional) `currency_add_money` — money injection into the household for testing. Active command: only with the user's permission.
9. (Offboarding) `household_biz_fire_employee` / `household_biz_depart_employee` — firing or voluntary departure.

**Warnings (mandatory):**
- The household_biz commands have NO wiki page (38 of the dinero-y-negocios intent are without-doc-wiki): **the dump is the only source; live verification required**. This whole workflow rests on the dump's descriptions.
- Returns not advertised by the server (to complete after live testing).
- Restaurant variant (tables, tickets, cooking batches, cleanup queue) available with: household_biz_get_all_restaurant_tables, household_biz_get_table_capacity, household_biz_get_max_table_capacity, household_biz_find_assigned_table_for_eater, household_biz_get_order_tickets, household_biz_get_restaurant_task_status, household_biz_get_restaurant_dish_batches, household_biz_get_restaurant_cleanup_queue; accommodation variant: household_biz_create_accommodation_booking / household_biz_extend_accommodation_booking / household_biz_finish_accommodation_booking.
