(() => {
  "use strict";

  const NODE_TYPES = new Set(["state", "event", "condition", "action", "bridge", "end"]);
  const OPERATORS = new Set(["==", "~=", ">", ">=", "<", "<=", "exists"]);
  const ENVIRONMENTS = new Set(["B1", "B2"]);
  const VERIFICATION_STATUS = Object.freeze({
    VERIFIED: "VERIFICADA",
    DOCUMENTED: "DOCUMENTADA",
    DOCUMENTED_NOT_EXECUTED: "DOCUMENTADA_NOT_EXECUTED",
    ACK_ONLY_READBACK_UNCHANGED: "ACK_ONLY_READBACK_UNCHANGED",
    ACK_ONLY: "ACK_ONLY",
    PARTIAL_ACK_ONLY: "PARTIAL_ACK_ONLY",
    ASYNC_NOT_CONFIRMED: "ASYNC_NOT_CONFIRMED",
    READBACK_UNCHANGED: "READBACK_UNCHANGED",
    EXPERIMENTAL: "EXPERIMENTAL",
    UNKNOWN: "DESCONOCIDA",
    INCOMPATIBLE: "NO COMPATIBLE"
  });
  const OPERATION_KIND = Object.freeze({
    SIMPLE: "SIMPLE",
    COMPOUND: "COMPOUND",
    ASYNC: "ASYNC",
    READBACK_VERIFIED: "READBACK_VERIFIED",
    ACK_ONLY: "ACK_ONLY",
    EXPERIMENTAL_OR_PENDING: "EXPERIMENTAL_OR_PENDING"
  });
  const QUESTIONED_CAPABILITY_IDS = Object.freeze([
    "weather.list",
    "aging.stop_aging",
    "aging.immortal",
    "needs.freeze",
    "action.interaction.clear_queue",
    "motion.stop",
    "autonomy.set_enable"
  ]);
  const B1B2_CONTRACT = {
    reqChannel: "inzoi_flow.rpc.req",
    resChannel: "inzoi_flow.rpc.res",
    encodePacket(fields = {}) {
      const sanitize = val => String(val ?? "").replace(/[|=]/g, "_");
      return Object.entries(fields)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${sanitize(k)}=${sanitize(v)}`)
        .join("|");
    },
    decodePacket(raw = "") {
      if (raw && typeof raw === "object") return { ...raw };
      const out = {};
      for (const token of String(raw || "").split("|")) {
        const eq = token.indexOf("=");
        if (eq > 0) out[token.slice(0, eq)] = token.slice(eq + 1);
      }
      return out;
    },
    executeServerOperation(reqPacket, context = {}) {
      const req = typeof reqPacket === "string" ? this.decodePacket(reqPacket) : { ...(reqPacket || {}) };
      const reqId = req.req_id || "0";
      const op = req.op || "";
      const entityId = req.entity_id || context.entity_id || "owner";
      if (!req.req_id || !op) {
        return this.encodePacket({
          req_id: reqId,
          op,
          ok: "false",
          status: "ERR_INVALID_CONTRACT",
          result: "none",
          error: "missing_req_id_or_op"
        });
      }
      const bridgeSpec = BRIDGE_CATALOG[op];
      if (!bridgeSpec || bridgeSpec.simulateError) {
        return this.encodePacket({
          req_id: reqId,
          op,
          ok: "false",
          status: "ERR_UNSUPPORTED_OP",
          result: "none",
          error: bridgeSpec?.errorReason || "ERR_UNSUPPORTED_OP"
        });
      }
      for (const reqParam of bridgeSpec.required || []) {
        if (!req[reqParam] || String(req[reqParam]).trim() === "") {
          return this.encodePacket({
            req_id: reqId,
            op,
            ok: "false",
            status: "ERR_MISSING_PARAM",
            result: "none",
            error: `missing_param_${reqParam}`
          });
        }
      }
      return this.encodePacket({
        req_id: reqId,
        op,
        ok: "true",
        status: "EXEC_OK",
        result: `${bridgeSpec.b2Cli}:ack_entity_${entityId}`,
        error: "none"
      });
    }
  };
  const BRIDGE_CATALOG = {
    verify_sim_authority: {
      name: "Verificar autoridad B2 (weather.list + entity_id)",
      label: "Verificar autoridad B2",
      description: "Envía solicitud B1 → B2 por inzoi.message.send_to_sim, ejecuta weather.list en B2 sin teletransporte ni movimiento y responde a B1 por send_to_client.",
      b2Cli: "weather.list",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { tag: "string" },
      defaults: { tag: "sim_check" },
      required: [],
      fields: [["result", "string"], ["error", "string"]]
    },
    "needs.set_full": {
      name: "Restaurar necesidad al 100% en B2",
      label: "Restaurar necesidad 100% (VERIFICADA)",
      description: "B1 solicita a B2 ejecutar needs.set_full con autoridad de simulación y recibe confirmación en B1.",
      b2Cli: "needs.set_full",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { category: "string", entity_id: "entityId" },
      defaults: { category: "Energy" },
      required: ["category"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "weather.control": {
      name: "Clima + Estación + Temperatura (Secuencia Compuesta B2)",
      label: "Clima + Estación + Temperatura (COMPOUND · VERIFICADA)",
      description: "Ejecuta en B2 la secuencia compuesta verificada: weather.control + weather.season + weather.temperature con readback real.",
      b2Cli: "weather.control",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: { weather_type: "string", season_type: "string", temperature: "int" },
      defaults: { weather_type: "Snow", season_type: "Winter", temperature: "-2" },
      required: ["weather_type"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "time.DefaultDaySkip": {
      name: "Saltar día + Velocidad de simulación en B2",
      label: "Saltar día + Velocidad (VERIFICADA)",
      description: "Avanza el día de simulación con time.DefaultDaySkip y ajusta game.set_speed en B2.",
      b2Cli: "time.DefaultDaySkip",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { multiplier: "float" },
      defaults: { multiplier: "5.0" },
      required: [],
      fields: [["result", "string"], ["error", "string"]]
    },
    "aging.set_growth_step": {
      name: "Cambiar etapa vital del Zoi (GetGrowthStep C++)",
      label: "Cambiar etapa vital (COMPOUND · VERIFICADA)",
      description: "Cambia la etapa de vida del Zoi en B2 (YoungAdult, Adult, OldAge, Child) y verifica la mutación con owner:GetGrowthStep().",
      b2Cli: "aging.set_growth_step",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: { step: "string", entity_id: "entityId" },
      defaults: { step: "OldAge" },
      required: ["step"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "emotion.add": {
      name: "Inyectar emoción + readback C++ GetDominantEmotion",
      label: "Inyectar emoción (VERIFICADA)",
      description: "Aplica emotion.add en B2 (Joyful, Angry, Sad, Calm, Excited) y verifica con owner:GetDominantEmotion().",
      b2Cli: "emotion.add",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { emotion_id: "string", level: "int", entity_id: "entityId" },
      defaults: { emotion_id: "Joyful", level: "2" },
      required: ["emotion_id"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "emotion.reset": {
      name: "Limpiar emociones activas en B2",
      label: "Limpiar emociones (VERIFICADA)",
      description: "Ejecuta emotion.reset sobre el Zoi en B2 y devuelve el estado dominante a Calm.",
      b2Cli: "emotion.reset",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { entity_id: "entityId" },
      defaults: {},
      required: [],
      fields: [["result", "string"], ["error", "string"]]
    },
    "currency.set": {
      name: "Fijar dinero del hogar (Meow) en B2",
      label: "Fijar dinero del hogar (VERIFICADA)",
      description: "Modifica el saldo económico del hogar en B2 con currency.set y confirma con currency.get.",
      b2Cli: "currency.set",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { amount: "int" },
      defaults: { amount: "999999" },
      required: ["amount"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "social.create_relationship": {
      name: "Crear vínculo social entre Zois en B2",
      label: "Crear relación social (VERIFICADA)",
      description: "Crea o actualiza la relación entre dos Zois en B2 con social.create_relationship.",
      b2Cli: "social.create_relationship",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { target_entity_id: "entityId", relationship_type: "string", entity_id: "entityId" },
      defaults: { target_entity_id: "2", relationship_type: "Friend" },
      required: ["target_entity_id", "relationship_type"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "schedule.AdvanceToNextSchedule": {
      name: "Avanzar al siguiente bloque de horario en B2",
      label: "Avanzar horario (VERIFICADA)",
      description: "Avanza inmediatamente la agenda del Zoi en B2 con schedule.AdvanceToNextSchedule.",
      b2Cli: "schedule.AdvanceToNextSchedule",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { entity_id: "entityId" },
      defaults: {},
      required: [],
      fields: [["result", "string"], ["error", "string"]]
    },
    "movement.teleport": {
      name: "Teletransportar Zoi en B2 con readback GetLocation()",
      label: "Teletransportar Zoi (VERIFICADA)",
      description: "Teletransporta el Zoi en B2 a un destino o coordenadas y verifica su nueva posición con owner:GetLocation().",
      b2Cli: "movement.teleport",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { destination: "string", entity_id: "entityId" },
      defaults: { destination: "Gangnam_Public_CentralPark" },
      required: ["destination"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "movement.cpp_set_location_simul": {
      name: "Vuelo físico C++ en B2 (SetLocationOnlySimul + on_tick)",
      label: "Vuelo físico C++ en B2 (COMPOUND · VERIFICADA)",
      description: "Eleva al Zoi en B2 con owner:SetLocationOnlySimul(loc), mantiene la altura en M.on_tick con ForceSendMovementData() y aterriza con RequestSnapToGround().",
      b2Cli: "SetLocationOnlySimul",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: { delta_z: "float", ticks: "int" },
      defaults: { delta_z: "250", ticks: "90" },
      required: ["delta_z"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "vehicle.attach_flying_prop": {
      name: "Acoplar prop aéreo en B1 + Vuelo físico C++ en B2",
      label: "Prop aéreo B1 + Vuelo C++ B2 (COMPOUND · VERIFICADA)",
      description: "Acopla el prop visual (mesh_id=40) al socket pelvis en B1 y activa el vuelo físico SetLocationOnlySimul + M.on_tick en B2.",
      b2Cli: "SetLocationOnlySimul",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: { mesh_id: "int", socket: "string", scale: "float", delta_z: "float", ticks: "int" },
      defaults: { mesh_id: "40", socket: "pelvis", scale: "2.8", delta_z: "250", ticks: "90" },
      required: ["mesh_id", "delta_z"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "pregnancy.context_suite": {
      name: "Árbol Contextual: Embarazo, Reglas, Ecografía y Genética (FB2BioComponent + CLI)",
      label: "Embarazo + Reglas + Genética (COMPOUND · B1↔B2)",
      description: "Ejecuta en B2 el árbol de embarazo elegido: bypass de género biológico (bio.set_gender), límite MaxPregnancyCount, inicio/avance/parto/cancelación, ecografía prenatal (GetBabySpawnDataGenderType) y herencia genética (piel, cabello, ojos y rasgos).",
      b2Cli: "pregnancy_and_birth.get_baby_with",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        mode: "string",
        partner_id: "entityId",
        allow_male_pregnancy: "bool",
        max_children: "int",
        ultrasound: "bool",
        baby_gender: "string",
        include_genetics: "bool",
        resemblance: "string",
        skin_color_id: "int",
        hair_id: "string",
        eye_shape: "float",
        personality_trait: "int"
      },
      defaults: {
        mode: "start",
        partner_id: "2",
        allow_male_pregnancy: "true",
        max_children: "6",
        ultrasound: "true",
        baby_gender: "Female",
        include_genetics: "true",
        resemblance: "mix",
        skin_color_id: "3",
        hair_id: "Hair_Long_Brown",
        eye_shape: "0.35",
        personality_trait: "2"
      },
      required: ["mode"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "appearance.context_suite": {
      name: "Árbol Contextual: Vestimenta, Prendas, Color B1 y Estudio CAZ",
      label: "Vestimenta + Prendas + Color + CAZ (COMPOUND · B1↔B2)",
      description: "Aplica tinte de prenda en B1 (appearance.set_garment_color) y sincroniza en B2 categoría de atuendo, prendas (chaqueta, calzado, gorro, gafas), genética visual y apertura opcional de CAZ.",
      b2Cli: "appearance.set_outfit_category",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        outfit_category: "string",
        jacket_action: "string",
        shoes_action: "string",
        hat_action: "string",
        glasses_action: "string",
        tint_garment: "bool",
        garment_type: "string",
        garment_color: "string",
        customize_genetics: "bool",
        skin_color_id: "int",
        hair_id: "string",
        open_caz: "bool"
      },
      defaults: {
        outfit_category: "Party",
        jacket_action: "change",
        shoes_action: "change",
        hat_action: "none",
        glasses_action: "add",
        tint_garment: "true",
        garment_type: "jacket",
        garment_color: "#2563EB",
        customize_genetics: "true",
        skin_color_id: "3",
        hair_id: "Hair_Long_Brown",
        open_caz: "false"
      },
      required: ["outfit_category"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "vehicle.context_suite": {
      name: "Árbol Contextual: Escaneo de Vehículos, Prop Aéreo B1 y Vuelo Físico C++ B2",
      label: "Vehículos + Prop Aéreo + Vuelo C++ (COMPOUND · B1↔B2)",
      description: "Escanea vehículos cercanos en B1 (entity.scan_vehicles), acopla el prop aéreo al esqueleto (entity.attach_mesh) y ejecuta en B2 el vuelo físico C++ (SetLocationOnlySimul + M.on_tick + RequestSnapToGround).",
      b2Cli: "SetLocationOnlySimul",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        scan_vehicles: "bool",
        scan_radius: "float",
        attach_prop: "bool",
        mesh_id: "int",
        socket: "string",
        scale: "float",
        enable_flight: "bool",
        delta_z: "float",
        ticks: "int",
        teleport_dest: "string"
      },
      defaults: {
        scan_vehicles: "true",
        scan_radius: "100",
        attach_prop: "true",
        mesh_id: "40",
        socket: "pelvis",
        scale: "2.8",
        enable_flight: "true",
        delta_z: "250",
        ticks: "90",
        teleport_dest: "none"
      },
      required: ["delta_z"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "furniture.context_suite": {
      name: "Árbol Contextual: Muebles, Escala, Material B1 e Interacción B2",
      label: "Muebles + Material B1 + Interacción B2 (COMPOUND · B1↔B2)",
      description: "Escanea muebles cercanos en B1 (entity.scan_objects), coloca/escala/recolorea objetos (building.place_object, building.set_object_scale, build.set_object_material) y encola la interacción en B2 (interaction.execute).",
      b2Cli: "interaction.execute",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        scan_objects: "bool",
        scan_radius: "float",
        place_object_id: "string",
        snap: "bool",
        target_object_id: "entityId",
        object_scale: "float",
        material_color: "string",
        interaction_bag_id: "string"
      },
      defaults: {
        scan_objects: "true",
        scan_radius: "50",
        place_object_id: "Chair03",
        snap: "true",
        target_object_id: "100",
        object_scale: "1.25",
        material_color: "#D97706",
        interaction_bag_id: "Sit"
      },
      required: ["interaction_bag_id"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "life.context_suite": {
      name: "Árbol Contextual: Ciclo Vital, Necesidades, Emociones, Relaciones y Economía",
      label: "Vida + Emoción + Relación + Economía (COMPOUND · B2)",
      description: "Combina en una sola transacción B2: restaurar necesidad (needs.set_full), cambiar etapa vital (aging.set_growth_step + GetGrowthStep), inyectar emoción (emotion.add + GetDominantEmotion), crear vínculo social y fijar fondos (currency.set).",
      b2Cli: "aging.set_growth_step",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        refill_need: "bool",
        need_category: "string",
        change_growth: "bool",
        growth_step: "string",
        inject_emotion: "bool",
        emotion_id: "string",
        emotion_level: "int",
        create_relationship: "bool",
        relationship_type: "string",
        target_entity_id: "entityId",
        set_funds: "bool",
        currency_amount: "int"
      },
      defaults: {
        refill_need: "true",
        need_category: "Energy",
        change_growth: "true",
        growth_step: "YoungAdult",
        inject_emotion: "true",
        emotion_id: "Joyful",
        emotion_level: "2",
        create_relationship: "true",
        relationship_type: "Lover",
        target_entity_id: "2",
        set_funds: "true",
        currency_amount: "999999"
      },
      required: ["growth_step"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "zoi_self.context_suite": {
      name: "Árbol Contextual Zoi Principal: Clic Propio, Smartphone, CCTV, Radar Vehículo, Grupo, Negocio y Emote IA",
      label: "Menú Zoi Principal + Smartphone + CCTV (COMPOUND · B1↔B2)",
      description: "Ejecuta el árbol contextual de clic propio sobre el Zoi principal: acciones de Smartphone (19 bags), radar GPS de vehículo aparcado, cámara CCTV de oficina/empleados en vivo, gestión de grupo (zoi_group.*), negocio propio (household_biz.*), acciones físicas, busking/ambiciones, limpieza, cambio rápido de ropa y emote IA con bocadillo/SLM.",
      b2Cli: "interaction.execute",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        use_smartphone: "bool",
        smartphone_bag_id: "string",
        locate_parked_vehicle: "bool",
        parking_action: "string",
        cctv_office_monitor: "bool",
        cctv_camera_filter: "string",
        manage_group: "bool",
        group_action: "string",
        group_target_id: "entityId",
        manage_business: "bool",
        biz_action: "string",
        biz_employee_task: "string",
        run_personal_action: "bool",
        personal_bag_id: "string",
        run_interactive_skill: "bool",
        interactive_bag_id: "string",
        enable_cleaning_suite: "bool",
        cleaning_mode: "string",
        quick_change_outfit: "bool",
        self_outfit_category: "string",
        self_garment_tint: "string",
        enable_ai_emote: "bool",
        facial_preset: "string",
        speech_bubble_text: "string",
        query_slm_prompt: "string"
      },
      defaults: {
        use_smartphone: "true",
        smartphone_bag_id: "Self_SmartPhone_Check",
        locate_parked_vehicle: "true",
        parking_action: "scan_and_toast",
        cctv_office_monitor: "true",
        cctv_camera_filter: "SecurityCam",
        manage_group: "true",
        group_action: "follow",
        group_target_id: "20524",
        manage_business: "true",
        biz_action: "get_info",
        biz_employee_task: "Cooking",
        run_personal_action: "false",
        personal_bag_id: "Self_Pose_CatHeart",
        run_interactive_skill: "false",
        interactive_bag_id: "Self_Busking_Song",
        enable_cleaning_suite: "true",
        cleaning_mode: "instant_clean",
        quick_change_outfit: "true",
        self_outfit_category: "Everyday",
        self_garment_tint: "#10B981",
        enable_ai_emote: "true",
        facial_preset: "Happy",
        speech_bubble_text: "Revisando mi coche y negocio desde el móvil",
        query_slm_prompt: "Saluda con entusiasmo a tu familia"
      },
      required: ["smartphone_bag_id"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "zoi_social.context_suite": {
      name: "Árbol Contextual Zoi Secundario: Submenús Sociales, Romance, Familia, Karma e Inyección TalkSelection",
      label: "Menú Social Zoi Secundario + Pareja + TalkPatch (COMPOUND · B1↔B2)",
      description: "Ejecuta el árbol contextual de clic sobre otro Zoi (pareja, hijo, amigo o NPC): submenús TalkSelection (Vida diaria, Romance, Cariño, Charla, Humor, Conflicto, Karma/Fantasma/Exorcista, Crianza, Negocio, Grupo), matrimonio (marriage.*), niveles de relación/obliviate y parche de nueva opción en el menú contextual (data.patch / modkit_build_talk_patch).",
      b2Cli: "interaction.execute",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND,
      params: {
        talk_submenu_category: "string",
        target_zoi_id: "entityId",
        run_daily_talk: "bool",
        daily_bag_id: "string",
        run_romance_suite: "bool",
        romance_bag_id: "string",
        marriage_action: "string",
        run_affection_suite: "bool",
        affection_bag_id: "string",
        run_conflict_or_humor: "bool",
        social_tone_bag_id: "string",
        memory_wipe_obliviate: "bool",
        adjust_relationship_score: "bool",
        relation_preset: "string",
        relation_Delta: "int",
        inject_custom_talk_option: "bool",
        custom_talk_name: "string",
        custom_talk_tone: "string",
        custom_talk_buff: "string",
        unlock_visibility_conditions: "bool",
        enable_multi_family_targets: "bool",
        family_target_scope: "string",
        selected_member_ids: "string",
        batch_family_action: "string",
        runtime_host_swapping: "bool",
        host_swap_mode: "string",
        target_host_id: "entityId",
        restore_on_event: "string"
      },
      defaults: {
        talk_submenu_category: "Romance",
        target_zoi_id: "20524",
        run_daily_talk: "true",
        daily_bag_id: "Co_ExpectantParents_03",
        run_romance_suite: "true",
        romance_bag_id: "Co_Family_Spouse_R05",
        marriage_action: "none",
        run_affection_suite: "true",
        affection_bag_id: "Co_Family_Spouse_A03",
        run_conflict_or_humor: "false",
        social_tone_bag_id: "Int_Humor_Joke_01",
        memory_wipe_obliviate: "false",
        adjust_relationship_score: "true",
        relation_preset: "set_full",
        relation_Delta: "80",
        inject_custom_talk_option: "true",
        custom_talk_name: "Preguntar por coche y negocio",
        custom_talk_tone: "Positive",
        custom_talk_buff: "Flutter",
        unlock_visibility_conditions: "true",
        enable_multi_family_targets: "true",
        family_target_scope: "selected_members",
        selected_member_ids: "20524,20525,20526",
        batch_family_action: "prank_all_selected",
        runtime_host_swapping: "true",
        host_swap_mode: "full_possess_and_restore",
        target_host_id: "20524",
        restore_on_event: "interaction.finished"
      },
      required: ["target_zoi_id"],
      fields: [["result", "string"], ["error", "string"]]
    },
    "interaction.clear_queue": {
      name: "Limpiar cola de interacción en B2 (ACK parcial)",
      label: "Limpiar cola (PARTIAL_ACK_ONLY)",
      description: "B1 solicita a B2 limpiar la cola de interacciones del Zoi y devuelve el estado a B1.",
      b2Cli: "interaction.clear_queue",
      verificationStatus: VERIFICATION_STATUS.PARTIAL_ACK_ONLY,
      verification: VERIFICATION_STATUS.PARTIAL_ACK_ONLY,
      operationKind: OPERATION_KIND.ACK_ONLY,
      params: { cancel_current: "bool", entity_id: "entityId" },
      defaults: { cancel_current: "true" },
      required: ["cancel_current"],
      fields: [["result", "string"], ["error", "string"]]
    },
    invalid_op_probe: {
      name: "Sonda de orden inválida (Prueba de fallo controlado B2 → B1)",
      label: "Sonda de fallo controlado (VERIFICADA)",
      description: "Envía una operación no admitida a B2 para verificar que B2 rechaza la orden y B1 activa la rama error sin romper el flujo.",
      b2Cli: "unsupported.command",
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      verification: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      params: { reason: "string" },
      defaults: { reason: "test_invalid_op" },
      required: [],
      simulateError: true,
      errorReason: "ERR_UNSUPPORTED_OP",
      fields: [["result", "string"], ["error", "string"]]
    }
  };
  const BINDING_PRESETS = {
    Main: { label: "Main (Boot Module)", env: "B1+B2", type: "", key: "", module: "Main" },
    "Zoi:*": { label: "Binding Nativo · Zoi (*)", env: "B1+B2", type: "Zoi", key: "*", module: "Zoi.LuaFlow" },
    "Zoi:ResidenceFamily": { label: "Binding Nativo · Zoi (ResidenceFamily)", env: "B1+B2", type: "Zoi", key: "ResidenceFamily", module: "Zoi.LuaFlow" },
    "Manager:Weather": { label: "Binding Nativo · Manager (Weather)", env: "B2", type: "Manager", key: "Weather", module: "Manager.LuaFlow" },
    "Manager:UserCheat": { label: "Binding Nativo · Manager (UserCheat)", env: "B2", type: "Manager", key: "UserCheat", module: "Manager.LuaFlow" },
    "Component:Emotion": { label: "Binding Nativo · Component (Emotion)", env: "B2", type: "Component", key: "Emotion", module: "Component.LuaFlow" }
  };
  const EVENT_CATALOG = {
    "ui.cheat_message": {
      scope: "ui_bridge",
      kind: "lua_message",
      messageId: "CheatMenu.Trigger",
      fields: [["entity_id", "entityId"], ["state_tag", "string"], ["need_id", "string"], ["action_id", "string"]]
    },
    "zoi.divorced": { scope: "zoi", fields: [["entity_id", "entityId"], ["partner_entity_id", "entityId"]] },
    "zoi.married": { scope: "zoi", fields: [["entity_id", "entityId"], ["partner_entity_id", "entityId"]] },
    "zoi.pregnancy_cancel": { scope: "zoi", fields: [["entity_id", "entityId"], ["father_entity_id", "entityId"]] },
    "zoi.pregnancy_begin": { scope: "zoi", fields: [["entity_id", "entityId"], ["father_entity_id", "entityId"]] },
    "zoi.died": { scope: "zoi", fields: [["entity_id", "entityId"], ["Reason", "string"], ["became_ghost", "bool"]] },
    "zoi.born": { scope: "zoi", fields: [["baby_entity_id", "entityId"], ["mother_entity_id", "entityId"], ["father_entity_id", "entityId"]] },
    "zoi.growth_changed": { scope: "zoi", fields: [["entity_id", "entityId"], ["from_step", "int"], ["to_step", "int"]] },
    "simulation.pause_changed": { scope: "world", fields: [["is_paused", "bool"], ["Reason", "string"]] },
    "weather.changed": { scope: "world", fields: [["from_weather", "string"], ["to_weather", "string"], ["is_disaster", "bool"], ["Temperature", "int"]] },
    "season.changed": { scope: "world", fields: [["from_season", "string"], ["to_season", "string"]] },
    "time.day_night_changed": { scope: "world", fields: [["is_night", "bool"], ["Hour", "int"]] },
    "time.hour_changed": { scope: "world", fields: [["Hour", "int"]] },
    "time.day_changed": { scope: "world", fields: [["day_of_week", "string"]] },
    "skill.level_changed": { scope: "zoi", fields: [["entity_id", "entityId"], ["skill_id", "string"], ["from_level", "int"], ["to_level", "int"]] },
    "relationship.level_changed": { scope: "zoi", fields: [["entity_id", "entityId"], ["target_entity_id", "entityId"], ["stat_id", "string"], ["from_level", "int"], ["to_level", "int"], ["to_relationship_id", "string"]] },
    "need.state_changed": { scope: "zoi", fields: [["entity_id", "entityId"], ["need_id", "string"], ["from_state", "string"], ["to_state", "string"]] },
    "interaction.failed": { scope: "zoi", fields: [["entity_id", "entityId"], ["interaction_bag_id", "string"], ["target_entity_id", "entityId"], ["Reason", "string"]] },
    "interaction.canceled": { scope: "zoi", fields: [["entity_id", "entityId"], ["interaction_bag_id", "string"], ["target_entity_id", "entityId"], ["Reason", "string"]] },
    "interaction.finished": { scope: "zoi", fields: [["entity_id", "entityId"], ["interaction_bag_id", "string"], ["target_entity_id", "entityId"]] },
    "interaction.started": { scope: "zoi", fields: [["entity_id", "entityId"], ["interaction_bag_id", "string"], ["target_entity_id", "entityId"]] },
    "emotion.level_changed": { scope: "zoi", fields: [["entity_id", "entityId"], ["Emotion", "string"], ["from_level", "int"], ["to_level", "int"]] },
    "emotion.changed": { scope: "zoi", fields: [["entity_id", "entityId"], ["from_emotion", "string"], ["to_emotion", "string"]] },
    "buff.removed": { scope: "zoi", fields: [["entity_id", "entityId"], ["buff_id", "string"], ["canceled", "bool"]] },
    "buff.added": { scope: "zoi", fields: [["entity_id", "entityId"], ["buff_id", "string"]] },
    "character.overlap_end": { scope: "player", fields: [["other_entity_id", "entityId"]] },
    "character.overlap_begin": { scope: "player", fields: [["other_entity_id", "entityId"]] }
  };
  const CLI_CATALOG = {
    "interaction.clear_queue": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Interaction",
      description: "Clears all queued interactions (C3: cola leída pre-clear pero sin readback posterior tras clear_queue).",
      params: { entity_id: "entityId", cancel_current: "bool" },
      defaults: { cancel_current: "true" },
      verificationStatus: VERIFICATION_STATUS.PARTIAL_ACK_ONLY,
      operationKind: OPERATION_KIND.ACK_ONLY
    },
    "movement.teleport": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Movement",
      description: "Teleports a character to a site or world coordinates.",
      params: { destination: "string", x: "float", y: "float", z: "float", entity_id: "entityId" },
      defaults: { destination: "Gangnam_Public_CentralPark" },
      oneOf: [[["destination"], ["x", "y", "z"]]],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "life_and_death.stop_aging": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Life and Death",
      description: "Stops or resumes aging for a Zoi (A4: ok=true pero CanAging() permaneció true en readback).",
      params: { entity_id: "entityId", enable: "bool" },
      defaults: { enable: "true" },
      required: ["enable"],
      verificationStatus: VERIFICATION_STATUS.ACK_ONLY_READBACK_UNCHANGED,
      operationKind: OPERATION_KIND.ACK_ONLY
    },
    "needs.set_full": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Needs",
      description: "Fills the specified need category (e.g. Energy, Sleep) or all needs to 100%.",
      params: { category: "string", entity_id: "entityId" },
      defaults: { category: "Energy" },
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "needs.freeze_all": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Needs",
      description: "Freezes or unfreezes need decay for the target character (C1: ACK ok=true sin prueba temporal de decaimiento).",
      params: { entity_id: "entityId", enable: "bool" },
      defaults: { enable: "true" },
      required: ["enable"],
      verificationStatus: VERIFICATION_STATUS.ACK_ONLY,
      operationKind: OPERATION_KIND.ACK_ONLY
    },
    "buff.add": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Buff",
      description: "Adds a buff to the target character with optional duration.",
      params: { buff_id: "string", duration_minutes: "int", entity_id: "entityId" },
      defaults: {},
      required: ["buff_id"],
      verificationStatus: VERIFICATION_STATUS.DOCUMENTED,
      operationKind: OPERATION_KIND.EXPERIMENTAL_OR_PENDING
    },
    "camera.set_fov": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Camera (Client)",
      description: "Sets the client camera field of view angle (60-120).",
      params: { value: "string" },
      defaults: { value: "90" },
      required: ["value"],
      verificationStatus: VERIFICATION_STATUS.DOCUMENTED,
      operationKind: OPERATION_KIND.EXPERIMENTAL_OR_PENDING
    },
    "camera.set_sensitivity": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Camera (Client)",
      description: "Sets the follow-view camera mouse sensitivity (0-100).",
      params: { value: "string" },
      defaults: { value: "50" },
      required: ["value"],
      verificationStatus: VERIFICATION_STATUS.DOCUMENTED,
      operationKind: OPERATION_KIND.EXPERIMENTAL_OR_PENDING
    },
    "toast.show": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Toast (Client UI)",
      description: "Muestra un aviso visual en B1 (cliente).",
      params: { message: "string", lifetime: "int", immediate: "bool" },
      defaults: { message: "B2_ACK_OK", lifetime: "3", immediate: "true" },
      required: ["message"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    "pose.set_bone": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Pose (Client)",
      description: "Aplica una rotación aditiva a un hueso del Zoi en B1.",
      params: { entity_id: "entityId", bone: "string", mode: "string", rot_pitch: "float" },
      defaults: { bone: "head", mode: "additive", rot_pitch: "15" },
      required: ["bone"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    "pose.clear": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Pose (Client)",
      description: "Limpia los overrides de pose de huesos en B1.",
      params: { entity_id: "entityId" },
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "entity.set_scale": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Entity (Client)",
      description: "Escala uniformemente la malla, cápsula y cámara del Zoi en B1 (0.1..10.0) con readback confirmado.",
      params: { entity_id: "entityId", scale: "float" },
      defaults: { scale: "1.6" },
      required: ["scale"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "entity.set_visibility": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Entity (Client)",
      description: "Oculta o muestra la malla del personaje en B1 con readback confirmado.",
      params: { entity_id: "entityId", visible: "bool" },
      defaults: { visible: "true" },
      required: ["visible"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "entity.attach_mesh": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Entity (Client)",
      description: "Acopla una malla 3D del catálogo (ej. mesh_id=40) a un socket del esqueleto (pelvis, head, hand_r) en B1.",
      params: { entity_id: "entityId", mesh_id: "int", socket: "string", scale: "float" },
      defaults: { mesh_id: "40", socket: "pelvis", scale: "2.8" },
      required: ["mesh_id", "socket"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "entity.detach_all_meshes": {
      scope: "B1",
      apiScope: "B1Standalone",
      domain: "Entity (Client)",
      description: "Desacopla todos los props 3D adheridos al Zoi en B1.",
      params: { entity_id: "entityId" },
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "weather.control": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Weather (Simulation)",
      description: "Fuerza el clima activo en B2 (Sun, Cloudy, Rain, Snow, HeatWave, ColdWave, Storm) con mutación verificada.",
      params: { weather_type: "string", intensity: "float" },
      defaults: { weather_type: "Rain", intensity: "1.0" },
      required: ["weather_type"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "weather.season": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Weather (Simulation)",
      description: "Cambia la estación activa en B2 (Spring, Summer, Autumn, Winter) con persistencia confirmada.",
      params: { season_type: "string" },
      defaults: { season_type: "Winter" },
      required: ["season_type"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "weather.temperature": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Weather (Simulation)",
      description: "Modifica la temperatura ambiental en B2 (-10..40 °C) con readback confirmado en environment.get_state.",
      params: { temperature: "int" },
      defaults: { temperature: "5" },
      required: ["temperature"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "time.DefaultDaySkip": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Time (Simulation)",
      description: "Salta al día siguiente en B2 avanzando el calendario real de la partida.",
      params: { count: "int" },
      defaults: { count: "1" },
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "game.set_speed": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Time (Simulation)",
      description: "Cambia el multiplicador de velocidad de simulación en B2 (1.0, 2.0, 5.0, 10.0).",
      params: { multiplier: "float" },
      defaults: { multiplier: "5.0" },
      required: ["multiplier"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "aging.set_growth_step": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Life and Death",
      description: "Cambia la etapa vital del Zoi en B2 (YoungAdult, Adult, OldAge, Child) confirmado con GetGrowthStep().",
      params: { entity_id: "entityId", step: "string" },
      defaults: { step: "OldAge" },
      required: ["step"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "emotion.add": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Emotion",
      description: "Inyecta una emoción al Zoi en B2 (Joyful, Angry, Sad, Calm, Excited) verificada con GetDominantEmotion().",
      params: { entity_id: "entityId", emotion_id: "string", level: "int" },
      defaults: { emotion_id: "Joyful", level: "2" },
      required: ["emotion_id"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "emotion.reset": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Emotion",
      description: "Limpia todas las emociones activas del Zoi en B2 devolviendo el estado a Calm.",
      params: { entity_id: "entityId" },
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "currency.set": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Economy",
      description: "Fija el dinero del hogar (Meow) en B2 con confirmación en currency.get.",
      params: { amount: "int" },
      defaults: { amount: "999999" },
      required: ["amount"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "social.create_relationship": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Social",
      description: "Crea o modifica el vínculo social entre dos Zois en B2 (Friend, Lover, Spouse, Enemy).",
      params: { entity_id: "entityId", target_entity_id: "entityId", relationship_type: "string" },
      defaults: { target_entity_id: "2", relationship_type: "Friend" },
      required: ["target_entity_id", "relationship_type"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "schedule.AdvanceToNextSchedule": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Schedule",
      description: "Avanza al Zoi inmediatamente a su siguiente actividad programada en B2.",
      params: { entity_id: "entityId" },
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.READBACK_VERIFIED
    },
    "pregnancy_and_birth.get_baby_with": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Pregnancy & Genetics",
      description: "Inicia un embarazo entre el Zoi objetivo (entity_id) y su pareja (partner_id) en FB2BioComponent.",
      params: { entity_id: "entityId", partner_id: "entityId" },
      defaults: { partner_id: "2" },
      required: ["partner_id"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "pregnancy_and_birth.hello_my_angel": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Pregnancy & Genetics",
      description: "Culmina inmediatamente el embarazo activo y da a luz al bebé en B2.",
      params: { entity_id: "entityId" },
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "pregnancy_and_birth.remove_pregnancy": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Pregnancy & Genetics",
      description: "Cancela el embarazo activo en FB2BioComponent sin penalización.",
      params: { entity_id: "entityId" },
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "bio.set_gender": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Pregnancy & Genetics",
      description: "Cambia el género biológico de simulación en FB2BioComponent (Female/Male) sin cambiar la malla 3D en B1 (permite embarazo masculino).",
      params: { entity_id: "entityId", gender: "string" },
      defaults: { gender: "Female" },
      required: ["gender"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "appearance.set_outfit_category": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Appearance & Clothing",
      description: "Cambia la categoría de vestimenta activa del Zoi (Everyday, Formal, Party, Swimwear, Sleep, Sports, Summer, Winter).",
      params: { entity_id: "entityId", category: "string" },
      defaults: { category: "Party" },
      required: ["category"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "appearance.set_garment_color": {
      scope: "B1",
      apiScope: "B1Multicast",
      domain: "Appearance & Clothing",
      description: "Tiñe en tiempo real una prenda equipada en B1 con color hexadecimal (#RRGGBB).",
      params: { entity_id: "entityId", garment_type: "string", color: "string" },
      defaults: { garment_type: "jacket", color: "#2563EB" },
      required: ["garment_type", "color"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "appearance.set_skin_color": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Appearance & Genetics",
      description: "Cambia el tono de piel del Zoi o recién nacido en B2 por índice de paleta.",
      params: { entity_id: "entityId", action: "string", color_id: "int" },
      defaults: { action: "set", color_id: "3" },
      required: ["action"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "appearance.hair": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Appearance & Genetics",
      description: "Cambia o añade el peinado del Zoi en B2.",
      params: { entity_id: "entityId", action: "string", id: "string" },
      defaults: { action: "change", id: "Hair_Long_Brown" },
      required: ["action"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "appearance.set_face_shape": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Appearance & Genetics",
      description: "Ajusta los rasgos faciales (Eye, Nose, Mouth, Jaw) entre -1.0 y 1.0 en B2.",
      params: { entity_id: "entityId", action: "string", group: "string", value: "float" },
      defaults: { action: "set", group: "Eye", value: "0.35" },
      required: ["action"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "appearance.set_trait": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Appearance & Genetics",
      description: "Define la personalidad genética y características del Zoi en B2.",
      params: { entity_id: "entityId", personality: "int" },
      defaults: { personality: "2" },
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "entity.scan_vehicles": {
      scope: "B1",
      apiScope: "B1Multicast",
      domain: "Vehicles",
      description: "Escanea vehículos cercanos al Zoi en B1 devolviendo IDs, distancia y dirección.",
      params: { radius: "float", direction: "string" },
      defaults: { radius: "100", direction: "all" },
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "entity.scan_objects": {
      scope: "B1",
      apiScope: "B1Multicast",
      domain: "Furniture & Build",
      description: "Escanea muebles y objetos interactuables cercanos al Zoi en B1.",
      params: { radius: "float", direction: "string" },
      defaults: { radius: "50", direction: "all" },
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "building.place_object": {
      scope: "B1",
      apiScope: "B1Multicast",
      domain: "Furniture & Build",
      description: "Coloca un mueble u objeto en el solar desde la tabla ObjectTemplate en B1.",
      params: { object_table_id: "string", x: "float", y: "float", z: "float", snap: "bool" },
      defaults: { object_table_id: "Chair03", x: "0", y: "0", z: "0", snap: "true" },
      required: ["object_table_id"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "building.set_object_scale": {
      scope: "B1",
      apiScope: "B1Multicast",
      domain: "Furniture & Build",
      description: "Modifica la escala 3D de un mueble colocado en el solar en B1.",
      params: { entity_id: "entityId", scale: "float" },
      defaults: { entity_id: "100", scale: "1.25" },
      required: ["entity_id", "scale"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "build.set_object_material": {
      scope: "B1",
      apiScope: "B1Multicast",
      domain: "Furniture & Build",
      description: "Aplica material y color hexadecimal (#RRGGBB) a un mueble en B1.",
      params: { entity_id: "entityId", color: "string" },
      defaults: { entity_id: "100", color: "#D97706" },
      required: ["entity_id"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "interaction.execute": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Interaction",
      description: "Encola una interacción por InteractionBagId (Sit, Talk, Cook) para que el Zoi camine al objeto y la ejecute en B2.",
      params: { entity_id: "entityId", interaction_bag_id: "string", target_entity_id: "entityId", insert_front: "bool" },
      defaults: { interaction_bag_id: "Sit", target_entity_id: "100", insert_front: "true" },
      required: ["interaction_bag_id"],
      verificationStatus: VERIFICATION_STATUS.VERIFIED,
      operationKind: OPERATION_KIND.COMPOUND
    },
    "weather.list": {
      scope: "B2",
      apiScope: "B2Authority",
      domain: "Weather (Simulation)",
      description: "Consulta la lista de climas disponibles en la autoridad B2 sin alterar posición ni estado.",
      params: {},
      defaults: {},
      verificationStatus: VERIFICATION_STATUS.DOCUMENTED_NOT_EXECUTED,
      operationKind: OPERATION_KIND.EXPERIMENTAL_OR_PENDING
    }
  };
  const OPERATION_CATALOG = [
    {
      id: "weather.get_state",
      category: "A_CLIMA_ENTORNO",
      name: "environment.get_state",
      context: "B2",
      parameters: [],
      returns: "JSON { weather, season, temperature, day_of_week, hour, minute, second, game_speed }",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "A01, A10",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt (A01_ENV_STATE_INIT)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:1",
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:21"
      ],
      limitations: "Exclusivo de B2Authority; desde B1 requiere puente RPC B1->B2. El campo season es de solo lectura.",
      description: "Obtiene el estado meteorológico y temporal actual (weather, season, temperature, hour, minute, game_speed).",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B2_TO_B1_RPC_PAYLOAD",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "READ_ONLY",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "weather.list",
      category: "A_CLIMA_ENTORNO",
      name: "weather.list",
      context: "B2",
      parameters: [],
      returns: "Lista de tipos meteorológicos soportados (Sun, Cloudy, Rain, Snow, HeatWave, ColdWave, DustStorm, Storm)",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "A01 (no ejecutada como sonda de listado)",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt:1-25 (omitida; A01 invocó environment.get_state)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:1-25",
        "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md:104-121"
      ],
      limitations: "No fue invocada directamente en el lote A de pruebas de dominio (batch1_group_A_B.txt pasa de A01 environment.get_state a A02..A09 environment.control_weather). En proto-b1-b2-ping solo se leyó ok_cli sin capturar el JSON retornado.",
      description: "Consulta la lista de climas disponibles en la autoridad B2 (documentada en catálogo CLI, pendiente de prueba con captura de payload).",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.EXPERIMENTAL_OR_PENDING,
      runtimeObserved: false,
      requestSent: false,
      requestReceived: false,
      executionConfirmed: false,
      ackReceived: false,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "NONE_NOT_EXECUTED",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "READ_ONLY",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.DOCUMENTED_NOT_EXECUTED
    },
    {
      id: "weather.control",
      category: "A_CLIMA_ENTORNO",
      name: "environment.control_weather",
      context: "B2",
      parameters: ["weather: Sun|Cloudy|Rain|Snow|HeatWave|ColdWave|DustStorm|Storm", "step: 0..3"],
      returns: "ok: boolean, message: string",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "A02..A09, A14, Escenario 1, Escenario 6",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt (A02..A14) y batch4_scenarios_1_to_6.txt (SCN1_WEATHER_FLOW)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:3-20",
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:25",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:3-9",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:27"
      ],
      limitations: "Para restaurar Sun tras un clima con step>0, combinar ClearOverridenWeather() con environment.control_weather weather=Sun step=0. No altera season ni temperature instantánea en el mismo frame.",
      description: "Cambia clima e intensidad (step 0..3) en la autoridad B2 con confirmación por readback.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.COMPOUND,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [
        "1. Lectura base: environment.get_state -> weather=Sun, season=Spring, temperature=20.415.",
        "2. Mutación meteorológica: environment.control_weather weather=<Rain|Snow|HeatWave|ColdWave|DustStorm|Storm|Cloudy> step=<0..3>.",
        "3. Verificación por readback: environment.get_state confirma cambio del campo weather.",
        "4. Restauración limpia a Sun: WeatherManager:ClearOverridenWeather() + environment.control_weather weather=Sun step=0."
      ],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "weather.set_time",
      category: "A_CLIMA_ENTORNO",
      name: "environment.set_time",
      context: "B2",
      parameters: ["hour: 0..23", "minute: 0..59"],
      returns: "ok: boolean, message: string",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "A11, A12",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt (A11_TIME_NOON, A12_TIME_MIDNIGHT)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:22-23"
      ],
      limitations: "Si la hora objetivo es anterior a la actual, avanza al día siguiente (ej. Thursday -> Friday al pasar de 12:30 a 08:06).",
      description: "Ajusta la hora del mundo en B2 con confirmación en environment.get_state.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "weather.set_game_speed",
      category: "A_CLIMA_ENTORNO",
      name: "environment.set_game_speed",
      context: "B2",
      parameters: ["speed: 0..4"],
      returns: "ok: boolean, message: string",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "A13",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt (A13_SPEED_SET_restore)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:24"
      ],
      limitations: "speed=0 pausa la simulación y detiene los ticks B2.",
      description: "Cambia la velocidad de simulación del juego (0=Pause..4=Ultra) con readback de game_speed.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "aging.stop_aging",
      category: "B_EDAD_CICLO_VITAL",
      name: "life_and_death.stop_aging",
      context: "B2",
      parameters: ["enable: true|false"],
      returns: "ok: boolean (CanAging() permaneció true en readback inmediato)",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "B02, B03, Escenario 4",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt:31-32, batch2_group_C_D.txt:2 y batch4_scenarios_1_to_6.txt:19",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:31-32",
        "RUNTIME_EVIDENCE/batch2_group_C_D.txt:2",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:19"
      ],
      limitations: "Rechaza entity_id (Unknown arguments: entity_id). Sin entity_id devuelve ok=true, pero el readback nativo FB2Character:CanAging() permaneció en true tanto tras enable=true (ca1:true) como tras enable=false (ca2:true).",
      description: "Envía comando global stop_aging en B2; solo ACK confirmado (CanAging() no reflejó cambio en el readback).",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.ACK_ONLY,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "UNCONFIRMED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.ACK_ONLY_READBACK_UNCHANGED
    },
    {
      id: "aging.immortal",
      category: "B_EDAD_CICLO_VITAL",
      name: "life_and_death.immortal",
      context: "B2",
      parameters: ["entity_id: int64", "enable: true|false"],
      returns: "ok: boolean, message: string",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "B06, B07, Escenario 4",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt:39-40 y batch4_scenarios_1_to_6.txt:18,20",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:39-40",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:18",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:20"
      ],
      limitations: "Devuelve ok=true (on/off), pero FB2Character no expone getter Lua de inmortalidad y no se ejecutó evento letal para demostrar bloqueo real de muerte.",
      description: "Solicita activar o desactivar inmortalidad para un Zoi en B2 (solo ACK; sin getter ni prueba letal).",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.ACK_ONLY,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "UNCONFIRMED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.ACK_ONLY
    },
    {
      id: "aging.set_growth_step",
      category: "B_EDAD_CICLO_VITAL",
      name: "appearance.set_growth_step",
      context: "B2",
      parameters: ["entity_id: int64", "growth_step: Newborn|Toddler|Child|Adolescent|Youth|Adult|MiddleAged|Elderly"],
      returns: "ok: boolean, message: string (verificado vía GetGrowthStep() -> enum 7 OldAge y enum 5 YoungAdult)",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "B01, B05, B10, Escenario 4",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt (B05_B10_GROWTH_STEP) y batch4_scenarios_1_to_6.txt (SCN4_AGING_FLOW)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:35-38",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:15-17"
      ],
      limitations: "Reconstruye la malla esquelética al cambiar de etapa vital. Llega hasta OldAge (enum=7); no existe comando directo de muerte (el fallecimiento real solo se observa pasivamente vía zoi.died).",
      description: "Cambia la etapa vital (growth_step) de un Zoi hasta OldAge y restaura su etapa original con confirmación en C++.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.COMPOUND,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [
        "1. Lectura vital inicial: entity.get_character_info y owner:GetGrowthStep() -> YoungAdult (enum=5, age=0).",
        "2. Transición a vejez: appearance.set_growth_step entity_id=20522 growth_step=Elderly -> GetGrowthStep() muta a OldAge (enum=7).",
        "3. Restauración vital: appearance.set_growth_step entity_id=20522 growth_step=Youth -> GetGrowthStep() vuelve a YoungAdult (enum=5).",
        "4. Límite de muerte: ninguna operación probada mató al Zoi; el fallecimiento no es invocable por comando directo y solo expone el evento pasivo zoi.died."
      ],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "character.get_info",
      category: "B_EDAD_CICLO_VITAL",
      name: "entity.get_character_info",
      context: "B2",
      parameters: ["entity_id: int64"],
      returns: "JSON { entity_id, name, age, growth_step, gender, location, ... }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "B01",
      evidence: "RUNTIME_EVIDENCE/batch1_group_A_B.txt (B01_CHAR_INFO)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch1_group_A_B.txt:27-30"
      ],
      limitations: "Exclusivo de B2Authority.",
      description: "Consulta edad, etapa vital, nombre y ubicación de un Zoi en B2.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B2_TO_B1_RPC_PAYLOAD",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "READ_ONLY",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "movement.cpp_set_location_simul",
      category: "C_MOVIMIENTO_VUELO_ZOI",
      name: "FB2Character:SetLocationOnlySimul + ForceSendMovementData",
      context: "B2",
      parameters: ["newLoc: FVector (mutando copia de owner:GetLocation())"],
      returns: "void (actualiza owner:GetLocation() y sincroniza con B1)",
      requires_entity_id: true,
      requires_tick: true,
      verified_in_runtime: true,
      test_id: "C01..C09, C14..C16, Escenario 2, Escenario 3, Escenario 6",
      evidence: "RUNTIME_EVIDENCE/batch2_group_C_D.txt (C03..C16) y batch4_scenarios_1_to_6.txt (SCN2_ZOI_FLY_START..LAND)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch2_group_C_D.txt:4-11",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:10-14",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:21-26",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:29",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:32"
      ],
      limitations: "El global UE.FVector no existe en Lua; se debe mutar .X, .Y, .Z sobre owner:GetLocation(). En llamada suelta la gravedad devuelve Z al suelo; el vuelo sostenido exige re-aplicación en M.on_tick.",
      description: "Operación compuesta de vuelo y desplazamiento 3D del Zoi en B2 con sostenimiento por tick y sincronización a B1.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.COMPOUND,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "REQUIRES_TICK_SUSTAIN",
      persistence: "TRANSIENT_GRAVITY_RESET",
      compoundSteps: [
        "1. Lectura de ubicación actual: local loc = owner:GetLocation() (guarda ground_loc X, Y, Z).",
        "2. Elevación en simulación B2: mutar loc.Z = loc.Z + offset sobre la instancia FVector e invocar owner:SetLocationOnlySimul(loc).",
        "3. Sostenimiento por tick: re-aplicar SetLocationOnlySimul(target_loc) en M.on_tick(self, owner, dt) para contrarrestar la gravedad de CharacterMovement.",
        "4. Sincronización de movimiento: invocar owner:ForceSendMovementData() tras cada actualización en B2.",
        "5. Aterrizaje y ajuste al suelo: restaurar owner:SetLocationOnlySimul(ground_loc), invocar owner:RequestSnapToGround() y owner:ForceSendMovementData()."
      ],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "movement.cpp_set_rotation_simul",
      category: "C_MOVIMIENTO_VUELO_ZOI",
      name: "FB2Character:SetRotationOnlySimul",
      context: "B2",
      parameters: ["newRot: FRotator (mutando copia de owner:GetRotation())"],
      returns: "void (actualiza Pitch, Yaw, Roll en B2)",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "C02, C11",
      evidence: "RUNTIME_EVIDENCE/batch2b_group_D.txt (C11_ROTATION_SET_RESTORE)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch2_group_C_D.txt:5",
        "RUNTIME_EVIDENCE/batch2b_group_D.txt:6-7"
      ],
      limitations: "Mutar .Yaw/.Pitch/.Roll sobre el FRotator retornado por owner:GetRotation().",
      description: "Modifica y restaura la rotación 3D de un Zoi en B2 con readback en GetRotation().",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "movement.walk_speed",
      category: "C_MOVIMIENTO_VUELO_ZOI",
      name: "movement.walk_speed",
      context: "B1",
      parameters: ["entity_id: int64", "speed: float", "reset: bool"],
      returns: "JSON / confirmación de MaxWalkSpeed (default 190.0 cm/s)",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "C10",
      evidence: "RUNTIME_EVIDENCE/batch2_group_C_D.txt (C10_SPEED_GET_INIT, C10_SPEED_SET_600, C10_SPEED_RESET)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch2_group_C_D.txt:16-21"
      ],
      limitations: "Exclusivo de B1Standalone (opera sobre AB1Character).",
      description: "Consulta, modifica (600 cm/s) o restablece (190 cm/s) la velocidad máxima de desplazamiento en B1.",
      executionContext: "B1",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: true, B2: false },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "movement.teleport",
      category: "C_MOVIMIENTO_VUELO_ZOI",
      name: "movement.teleport",
      context: "B2",
      parameters: ["entity_id: int64", "x: float", "y: float", "z: float", "destination: string"],
      returns: "ok: boolean, message: string",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "C12, C13",
      evidence: "RUNTIME_EVIDENCE/batch2_group_C_D.txt (C12_C13_TELEPORT_COORDS)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch2_group_C_D.txt:12-13"
      ],
      limitations: "Ajusta automáticamente Z al suelo navegable cercano.",
      description: "Teletransporta un Zoi a coordenadas X/Y/Z o a un destino con nombre en B2 con confirmación en GetLocation().",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "vehicle.scan_and_inspect",
      category: "D_VEHICULOS",
      name: "entity.scan_vehicles + entity.get_vehicle_info",
      context: "B1",
      parameters: ["radius: float", "entity_id: int64"],
      returns: "JSON con lista de vehículos cercanos y metadatos (vehicle_type, location, rotation, occupied, driver_id)",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "D01, D02, D03, D14",
      evidence: "RUNTIME_EVIDENCE/batch2b_group_D.txt (D01_SCAN_VEH_B1, D02_D03_D14_VEH_INFO_B1)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch2b_group_D.txt:1-5",
        "RUNTIME_EVIDENCE/batch2b_group_D.txt:10-20"
      ],
      limitations: "Scope B1Standalone. En B2, FB2Vehicle:SetLocationOnlySimul muta la coordenada interna pero NO replica visualmente al actor estacionado en B1 sin conductor (occupied=false, driver_id=0), y Board/Alight/StartDrivingTo no están exportados a Lua.",
      description: "Detecta vehículos del mundo cercanos (ej. IONIQ5) e inspecciona su estado en B1, diferenciando el actor estacionado de un prop acoplado.",
      executionContext: "B1",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B2_NO_B1_REPLICATION_WITHOUT_DRIVER",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "READ_ONLY",
      compoundSteps: [
        "1. Escaneo B1: entity.scan_vehicles detecta actores de vehículo del mundo (ej. entity_id=14932, IONIQ5).",
        "2. Inspección B1: entity.get_vehicle_info informa location, rotation, occupied=false y driver_id=0.",
        "3. Límite del actor FB2Vehicle del mundo: mutar SetLocationOnlySimul o SetActorHiddenInGame en B2 cambia el readback interno B2 pero no mueve el actor visual estacionado en B1."
      ],
      b1b2Compatibility: { B1: true, B2: false },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "vehicle.attach_flying_prop",
      category: "D_VEHICULOS",
      name: "entity.attach_prop (type=vehicle) + Vuelo B2",
      context: "B1->B2",
      parameters: ["entity_id: int64", "action: attach|set_transform|list|detach", "type: vehicle", "object_id: CASPER|...", "bone: pelvis"],
      returns: "JSON { prop_index, type: 'vehicle', object_id, bone }",
      requires_entity_id: true,
      requires_tick: true,
      verified_in_runtime: true,
      test_id: "Escenario 3",
      evidence: "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt (SCN3_VEH_ATTACH_CASPER..SCN3_VEH_DETACH)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:21-26"
      ],
      limitations: "No mueve un FB2Vehicle autónomo del mundo; acopla un vehículo visual (CASPER) como prop esquelético al hueso pelvis en B1 y eleva al Zoi por ticks en B2.",
      description: "Operación compuesta B1+B2: acopla un vehículo visual (CASPER) al hueso pelvis en B1 y ejecuta vuelo 3D por ticks en B2.",
      executionContext: "B1->B2->B1",
      type: "bridge",
      operationKind: OPERATION_KIND.COMPOUND,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "REQUIRES_TICK_SUSTAIN",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [
        "1. Acoplamiento en B1: entity.attach_prop entity_id=20522 action=attach type=vehicle object_id=CASPER bone=pelvis (prop_index=1).",
        "2. Elevación y avance por ticks en B2: M.on_tick aplica owner:SetLocationOnlySimul(fly_loc) + owner:ForceSendMovementData() (Z=306.19, X+460, Y+184).",
        "3. Aterrizaje en B2: restaurar ground_loc + owner:RequestSnapToGround() + owner:ForceSendMovementData() (Z=6.19).",
        "4. Desacoplamiento en B1: entity.attach_prop entity_id=20522 action=detach prop_index=1."
      ],
      b1b2Compatibility: { B1: true, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "needs.stat_get_and_set",
      category: "E_NECESIDADES_EMOCIONES",
      name: "stat.get_all + stat.set",
      context: "B2",
      parameters: ["entity_id: int64", "stat_id: Energy|Hunger|Cleanliness|Sleep|Toilet|Fun|Society|Admit|Weathering|Karma|Homesick", "value: -100..100"],
      returns: "JSON con todas las necesidades y confirmación del nuevo valor",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "E01, E02, E03, E04, E08, Escenario 5",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt (E01..E08)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:1-8",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:1-4",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:36-41"
      ],
      limitations: "El ID real de higiene en el motor es Cleanliness (no Hygiene). Rango interno -100..100.",
      description: "Lee todas las necesidades del Zoi o fija un valor exacto (-100..100) en B2 con confirmación en stat.get_all.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "action.needs.set_full",
      category: "E_NECESIDADES_EMOCIONES",
      name: "needs.set_full",
      context: "B2",
      parameters: ["entity_id: int64", "stat_id / category: string (opcional)"],
      returns: "ok: boolean (restaura una o todas las necesidades a 100.0)",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "E07, Escenario 5, Escenario 6",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt (E07_E08_RESTORE_ALL_FULL)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:15-18",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:3-4",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:28",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:38"
      ],
      limitations: "Exclusivo de B2Authority.",
      description: "Rellena al 100% una necesidad o todas las necesidades del Zoi en B2 con confirmación en stat.get_all.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      params: { category: "string", entity_id: "entityId" },
      inputTypes: ["exec:in", "data:param:entity_id(entityId)"],
      outputTypes: ["exec:next"],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "needs.freeze",
      category: "E_NECESIDADES_EMOCIONES",
      name: "needs.freeze",
      context: "B2",
      parameters: ["entity_id: int64", "enable: true|false"],
      returns: "ok: boolean",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "E06",
      evidence: "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:13-14 (E06_FREEZE_NEEDS)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:13-14"
      ],
      limitations: "Devuelve ok=true tanto con enable=true como con enable=false, pero no se realizó muestreo temporal de stat.get_all para confirmar la ausencia de decaimiento pasivo.",
      description: "Solicita congelar o descongelar el decaimiento de necesidades en B2 (solo ACK; sin prueba de decaimiento temporal).",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.ACK_ONLY,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "UNCONFIRMED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.ACK_ONLY
    },
    {
      id: "emotion.get_and_set",
      category: "E_NECESIDADES_EMOCIONES",
      name: "emotion.get_current + emotion.set + emotion.list_all",
      context: "B2",
      parameters: ["entity_id: int64", "type: Normal|Calm|Excited|Funny|Sad|Tired|Irritated|Worried|Surprised|Curious|Bored|...", "level: 1..3"],
      returns: "JSON { emotion_type, emotion_string_id } / confirmación de cambio emocional",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "E05, Escenario 5, Escenario 6",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt (E05_EMOTION_SET_VERIFY)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:5-7",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:31",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:37",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:39"
      ],
      limitations: "Usar los 19 IDs canónicos de emotion.list_all (ej. Calm o Excited; 'Joy' no existe como ID).",
      description: "Consulta y cambia la emoción activa y su nivel en B2 con confirmación en emotion.get_current.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "action.interaction.clear_queue",
      category: "E_NECESIDADES_EMOCIONES",
      name: "interaction.get_current + interaction.clear_queue",
      context: "B2",
      parameters: ["entity_id: int64", "cancel_current: bool"],
      returns: "Lectura verificada en get_current; clear_queue solo devolvió ok=true sin segundo readback",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "E09, E11, G10",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:8,16-18 (G10_INTER_CHK, G10_INTER_CANCEL)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:19-20",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:8",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:16-18"
      ],
      limitations: "interaction.get_current leyó la cola real (Mirror_Speech en G10_INTER_CHK), pero tras interaction.clear_queue cancel_current=true solo se registró ok=true (G10_INTER_CANCEL) sin un segundo get_current posterior que confirme el vaciado efectivo.",
      description: "Inspecciona la cola (verificado) y envía clear_queue en B2 (parcial: solo ACK tras cancelar, sin segundo readback).",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.ACK_ONLY,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "ASYNC_SAME_TICK_UNCONFIRMED",
      persistence: "UNCONFIRMED",
      compoundSteps: [],
      params: { entity_id: "entityId", cancel_current: "bool" },
      inputTypes: ["exec:in", "data:param:entity_id(entityId)"],
      outputTypes: ["exec:next"],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.PARTIAL_ACK_ONLY
    },
    {
      id: "motion.play_and_stop",
      aliases: ["motion.stop", "motion.play", "motion.get_current", "motion.list"],
      questionedCapability: "motion.stop",
      category: "F_ANIMACIONES_POSES",
      name: "motion.list + motion.get_current + motion.play + motion.stop",
      context: "B2",
      parameters: ["entity_id: int64", "anim_id: EmoReact_Calm_Joyful|EmoReact_Funny_Laughing|EmoReact_Sad_Reaction_Tearful_Lv2|..."],
      returns: "motion.play verificado con readback; motion.stop devuelve ok=true pero sigue is_playing=true en el mismo tick",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "F01, F02, F03, F04, F12, Escenario 5, Escenario 6",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:10-15,36-38 y batch4_scenarios_1_to_6.txt:30",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:10-15",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:36-38",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:30",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:40"
      ],
      limitations: "motion.play y motion.get_current tienen mutación real demostrada (play:true_anims:EmoReact_Calm_Joyful en F02, F04 y SCN6), pero motion.stop (F03_MOTION_STOP) devolvió ok=true mientras la lectura inmediata en el mismo frame (F03_CHK_STOP) seguía reportando play:true_anims:EmoReact_Funny_Laughing.",
      description: "Reproduce y encadena animaciones en B2 (verificado), pero motion.stop presenta parada asíncrona no confirmada en el mismo tick.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.ASYNC,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "B2_INTERNAL_AND_B1_VISIBLE",
      asyncBehavior: "ASYNC_SAME_TICK_UNCONFIRMED",
      persistence: "UNCONFIRMED",
      compoundSteps: [
        "1. Inicio o sustitución de montage (VERIFICADA): motion.play cambia inmediatamente anim_id activo en motion.get_current (F02, F04, F12, SCN5, SCN6).",
        "2. Parada de montage (ASYNC_NOT_CONFIRMED): motion.stop devuelve ok=true en F03_MOTION_STOP, pero motion.get_current en el mismo frame (F03_CHK_STOP) mantiene play:true_anims:EmoReact_Funny_Laughing hasta completar blend-out en ticks posteriores."
      ],
      subOperations: {
        "motion.play": { status: VERIFICATION_STATUS.VERIFIED, readbackConfirmed: true, stateMutated: true },
        "motion.get_current": { status: VERIFICATION_STATUS.VERIFIED, readbackConfirmed: true, stateMutated: false },
        "motion.stop": { status: VERIFICATION_STATUS.ASYNC_NOT_CONFIRMED, readbackConfirmed: false, stateMutated: false }
      },
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.ASYNC_NOT_CONFIRMED
    },
    {
      id: "action.pose.set_bone",
      category: "F_ANIMACIONES_POSES",
      name: "pose.set + pose.get + pose.clear",
      context: "B1",
      parameters: ["entity_id: int64", "bone: Head|hand_r|pelvis|...", "rx: float", "ry: float", "rz: float"],
      returns: "JSON con overrides de rotación/traslación/escala de huesos en B1",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "F06",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt (F06_POSE_SET_HEAD..F06_POSE_CLEAR)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:19-23"
      ],
      limitations: "Exclusivo de B1Standalone.",
      description: "Modifica, consulta (bone_count:2 en pose.get) y limpia (bone_count:0 en pose.clear) overrides óseos en B1.",
      executionContext: "B1",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      params: { entity_id: "entityId", bone: "string", mode: "string", rot_pitch: "float" },
      inputTypes: ["exec:in", "data:param:entity_id(entityId)"],
      outputTypes: ["exec:next"],
      b1b2Compatibility: { B1: true, B2: false },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "prop.attach_and_transform",
      category: "F_ANIMACIONES_POSES",
      name: "entity.attach_prop",
      context: "B1",
      parameters: ["entity_id: int64", "action: attach|list|set_transform|detach", "type: object|vehicle", "object_id: BathSet01|CASPER|...", "bone: Hand_R|pelvis|..."],
      returns: "JSON con prop_index, object_id, bone y transform relativo",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "F06, Escenario 3",
      evidence: "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt (F06_PROP_ATTACH_OBJ..F06_PROP_DETACH_ALL)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:33-35"
      ],
      limitations: "object_id debe ser el object_data_table_id de la tabla Object (ej. BathSet01) o Vehicle (ej. CASPER), no el object_template_id.",
      description: "Spawnea, transforma, lista y desacopla objetos o vehículos sin colisión en cualquier hueso del Zoi en B1.",
      executionContext: "B1",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: true, B2: false },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "world_object.scan_and_inspect",
      category: "G_OBJETOS_MUNDO",
      name: "entity.scan_objects + entity.get_object_info",
      context: "B2",
      parameters: ["entity_id: int64", "radius: float"],
      returns: "JSON { entity_id, object_data_table_id, object_template_id, location, forward }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "G01, G02",
      evidence: "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt (G01..G02) y batch3b_group_E_F_G_H_verified.txt",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:29-31",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:24-26"
      ],
      limitations: "building.set_object_location/rotation/scale requieren Build Mode activo.",
      description: "Escanea objetos cercanos al Zoi y obtiene su ID de tabla (ej. Mirror02, BathSet01), plantilla y coordenadas en B2.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B2_TO_B1_RPC_PAYLOAD",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "READ_ONLY",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "entity.visibility_and_scale",
      category: "G_OBJETOS_MUNDO",
      name: "entity.set_visibility + entity.set_scale",
      context: "B1",
      parameters: ["entity_id: int64", "action: hide|show|toggle|get|set|reset", "scale: 0.1..10.0"],
      returns: "JSON con estado de visibilidad y escala uniforme de malla/cápsula/velocidad/cámara",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "G08, G09",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt (G08_CHAR_VIS_HIDE..G09_CHAR_SCALE_RESET)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:27-33"
      ],
      limitations: "Opera exclusivamente sobre personajes (AB1Character) en B1; falla en objetos de mobiliario.",
      description: "Oculta/muestra la malla de un Zoi o cambia su escala uniforme (0.1..10x) en B1 con readback confirmado.",
      executionContext: "B1",
      type: "action",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      b1b2Compatibility: { B1: true, B2: false },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "event.character.overlap_begin",
      category: "H_EVENTOS_RELACIONES_AUTONOMIA",
      name: "character.overlap_begin",
      context: "B1",
      parameters: [],
      returns: "payload { other_entity_id }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "H01",
      evidence: "FlyingZoi_67FE4309/workspace/lua/B1/Zoi/PlayerFlight.lua:56 y audit/inzoi_game_flow_b1b2/evidence/runtime_status.md",
      evidenceRefs: [
        "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md:94-110"
      ],
      limitations: "Requiere colisión física entre cápsulas de personajes.",
      description: "Dispara cuando otro Zoi entra en el radio de colisión del personaje actual.",
      executionContext: "B1+B2",
      type: "event",
      operationKind: OPERATION_KIND.SIMPLE,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B1_TO_B2_RPC_ACK",
      asyncBehavior: "EVENT_DRIVEN",
      persistence: "SESSION_PERSISTENT",
      compoundSteps: [],
      params: {},
      inputTypes: [],
      outputTypes: ["exec:next", "data:other_entity_id(entityId)"],
      b1b2Compatibility: { B1: true, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "event.interaction.started",
      category: "H_EVENTOS_RELACIONES_AUTONOMIA",
      name: "interaction.started / M.on_interaction_started",
      context: "B2",
      parameters: [],
      returns: "payload { entity_id, interaction_bag_id, target_entity_id }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "H02, H03",
      evidence: "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt (H01_H05_EVENT_HOOKS: istart:Co_Family_ToChild_G06, icancel:Co_Emotion_Sad3_Friendship3)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:45",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:39"
      ],
      limitations: "Autoridad de simulación B2.",
      description: "Dispara en tiempo real cuando un Zoi inicia o cancela una interacción en B2.",
      executionContext: "B2",
      type: "event",
      operationKind: OPERATION_KIND.SIMPLE,
      runtimeObserved: true,
      requestSent: false,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "EVENT_DRIVEN",
      persistence: "SESSION_PERSISTENT",
      compoundSteps: [],
      params: {},
      inputTypes: [],
      outputTypes: ["exec:next", "data:entity_id(entityId)", "data:interaction_bag_id(string)", "data:target_entity_id(entityId)"],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "event.emotion.changed",
      category: "H_EVENTOS_RELACIONES_AUTONOMIA",
      name: "emotion.changed / M.on_emotion_changed",
      context: "B2",
      parameters: [],
      returns: "payload { entity_id, from_emotion, to_emotion }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "H04",
      evidence: "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt (H01_H05_EVENT_HOOKS: emo:Calm)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:45",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:39"
      ],
      limitations: "Autoridad de simulación B2.",
      description: "Dispara en tiempo real cuando cambia la emoción dominante del Zoi en B2.",
      executionContext: "B2",
      type: "event",
      operationKind: OPERATION_KIND.SIMPLE,
      runtimeObserved: true,
      requestSent: false,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "EVENT_DRIVEN",
      persistence: "SESSION_PERSISTENT",
      compoundSteps: [],
      params: {},
      inputTypes: [],
      outputTypes: ["exec:next", "data:entity_id(entityId)", "data:from_emotion(string)", "data:to_emotion(string)"],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "autonomy.set_enable",
      category: "H_EVENTOS_RELACIONES_AUTONOMIA",
      name: "autonomy.set_enable + schedule.diagnose + zoi_group.get_info",
      context: "B2",
      parameters: ["entity_id: int64", "enable: true|false"],
      returns: "zoi_group.get_info y schedule.diagnose verificados; autonomy.set_enable permaneció en _autonomy_enabled_:false",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: false,
      test_id: "H08, H10, H11",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:34-35 (H10_AUTONOMY_CYCLE, H11_SCHEDULE_DIAG)",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3_group_E_F_G_H.txt:40-44",
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:34-35"
      ],
      limitations: "Mientras zoi_group.get_info (H08) y schedule.diagnose (H11) devolvieron datos reales, autonomy.set_enable en H10_AUTONOMY_CYCLE devolvió _autonomy_enabled_:false en los tres pasos (consulta inicial q, off y on) sin mutar a true.",
      description: "Diagnostica grupo y horario en B2, pero la conmutación autonomy.set_enable devolvió _autonomy_enabled_:false sin cambio en el readback.",
      executionContext: "B2",
      type: "action",
      operationKind: OPERATION_KIND.EXPERIMENTAL_OR_PENDING,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: false,
      stateMutated: false,
      replication: "B2_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "UNCONFIRMED",
      compoundSteps: [],
      b1b2Compatibility: { B1: false, B2: true },
      verificationStatus: VERIFICATION_STATUS.READBACK_UNCHANGED
    },
    {
      id: "action.toast.show",
      category: "BRIDGE_UI_CLIENTE",
      name: "toast.show",
      context: "B1",
      parameters: ["message: string", "lifetime: int", "immediate: bool"],
      returns: "ok: boolean",
      requires_entity_id: false,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "Escenario 1",
      evidence: "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md",
      evidenceRefs: [
        "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md:112-120"
      ],
      limitations: "Exclusivo de B1Standalone.",
      description: "Muestra una notificación emergente en B1 con mensaje, duración e inmediatez.",
      executionContext: "B1",
      type: "action",
      operationKind: OPERATION_KIND.SIMPLE,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_ONLY",
      asyncBehavior: "SYNCHRONOUS",
      persistence: "TRANSIENT_GRAVITY_RESET",
      compoundSteps: [],
      params: { message: "string", lifetime: "int", immediate: "bool" },
      inputTypes: ["exec:in", "data:param:message(string)"],
      outputTypes: ["exec:next"],
      b1b2Compatibility: { B1: true, B2: false },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "bridge.verify_sim_authority",
      category: "BRIDGE_RPC_B1_B2",
      name: "Puente B1→B2→B1: verify_sim_authority",
      context: "B1->B2",
      parameters: ["tag: string"],
      returns: "packet { req_id, ok, status, result, error }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "Escenario 1",
      evidence: "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt (SCN1_WEATHER_FLOW)",
      evidenceRefs: [
        "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md:94-121",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:1-9"
      ],
      limitations: "Requiere binding Zoi:* tanto en B1 como en B2 sobre la misma entidad.",
      description: "Envía petición de B1 a B2 (send_to_sim), ejecuta operación en B2 y devuelve ACK a B1 (send_to_client).",
      executionContext: "B1->B2->B1",
      type: "bridge",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_TO_B2_RPC_ACK",
      asyncBehavior: "EVENT_DRIVEN",
      persistence: "SESSION_PERSISTENT",
      compoundSteps: [],
      params: { tag: "string" },
      inputTypes: ["exec:in", "data:param:tag(string)"],
      outputTypes: ["exec:ok", "exec:error", "data:payload:result(string)", "data:payload:error(string)"],
      b1b2Compatibility: { B1: true, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "bridge.needs.set_full",
      category: "BRIDGE_RPC_B1_B2",
      name: "Puente B1→B2→B1: needs.set_full",
      context: "B1->B2",
      parameters: ["category: string", "entity_id: int64"],
      returns: "packet { req_id, ok, status, result, error }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "E07, Escenario 5, Escenario 6",
      evidence: "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt (E07_E08_RESTORE_ALL_FULL) y batch4_scenarios_1_to_6.txt",
      evidenceRefs: [
        "RUNTIME_EVIDENCE/batch3b_group_E_F_G_H_verified.txt:3-4",
        "RUNTIME_EVIDENCE/batch4_scenarios_1_to_6.txt:28"
      ],
      limitations: "Requiere binding Zoi:* en B1 y B2.",
      description: "Solicita desde B1 a B2 restaurar una necesidad del Zoi al 100% y retorna el resultado a B1.",
      executionContext: "B1->B2->B1",
      type: "bridge",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: true,
      replication: "B1_TO_B2_RPC_ACK",
      asyncBehavior: "EVENT_DRIVEN",
      persistence: "PERSISTENT_UNTIL_RESTORED",
      compoundSteps: [],
      params: { category: "string", entity_id: "entityId" },
      inputTypes: ["exec:in", "data:param:category(string)", "data:param:entity_id(entityId)"],
      outputTypes: ["exec:ok", "exec:error", "data:payload:result(string)", "data:payload:error(string)"],
      b1b2Compatibility: { B1: true, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    },
    {
      id: "bridge.invalid_op_probe",
      category: "BRIDGE_RPC_B1_B2",
      name: "Puente B1→B2→B1: invalid_op_probe (Fallo controlado)",
      context: "B1->B2",
      parameters: ["reason: string"],
      returns: "packet { req_id, ok: 'false', status: 'ERR_UNSUPPORTED_OP', error: 'ERR_UNSUPPORTED_OP' }",
      requires_entity_id: true,
      requires_tick: false,
      verified_in_runtime: true,
      test_id: "Caso 4",
      evidence: "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md",
      evidenceRefs: [
        "audit/inzoi_game_flow_b1b2/evidence/runtime_status.md:104-121"
      ],
      limitations: "Diseñado para verificar el enrutamiento de la rama error en B1.",
      description: "Envía una orden no admitida a B2 para verificar el rechazo controlado ERR_UNSUPPORTED_OP hacia la rama error en B1.",
      executionContext: "B1->B2->B1",
      type: "bridge",
      operationKind: OPERATION_KIND.READBACK_VERIFIED,
      runtimeObserved: true,
      requestSent: true,
      requestReceived: true,
      executionConfirmed: true,
      ackReceived: true,
      readbackConfirmed: true,
      stateMutated: false,
      replication: "B1_TO_B2_RPC_ACK",
      asyncBehavior: "EVENT_DRIVEN",
      persistence: "SESSION_PERSISTENT",
      compoundSteps: [],
      params: { reason: "string" },
      inputTypes: ["exec:in"],
      outputTypes: ["exec:ok", "exec:error", "data:payload:result(string)", "data:payload:error(string)"],
      b1b2Compatibility: { B1: true, B2: true },
      verificationStatus: VERIFICATION_STATUS.VERIFIED
    }
  ].map(entry => ({
    ...entry,
    status: entry.verificationStatus,
    env: entry.executionContext,
    domain: entry.category || entry.type,
    evidenceModel: Object.freeze({
      status: entry.verificationStatus,
      runtimeObserved: Boolean(entry.runtimeObserved),
      requestSent: Boolean(entry.requestSent),
      requestReceived: Boolean(entry.requestReceived),
      executionConfirmed: Boolean(entry.executionConfirmed),
      ackReceived: Boolean(entry.ackReceived),
      readbackConfirmed: Boolean(entry.readbackConfirmed),
      stateMutated: Boolean(entry.stateMutated),
      replication: String(entry.replication || ""),
      asyncBehavior: String(entry.asyncBehavior || ""),
      persistence: String(entry.persistence || ""),
      evidenceRefs: Object.freeze([...(entry.evidenceRefs || [])]),
      limitations: String(entry.limitations || "")
    })
  }));
  const DEFAULT_GRAPH = {
    version: 2,
    initialState: "idle",
    nodes: [
      { id: "state-idle", type: "state", x: 60, y: 430, data: { name: "idle" } },
      { id: "evt-1", type: "event", x: 70, y: 120, data: { event: "interaction.started", whenState: "idle" } },
      { id: "cond-1", type: "condition", x: 380, y: 120, data: { source: "payload", field: "interaction_bag_id", operator: "==", value: "Self_GoHome" } },
      { id: "act-1", type: "action", x: 720, y: 50, data: { command: "interaction.clear_queue", args: "", params: { cancel_current: "true" }, scope: "B2" } },
      { id: "act-2", type: "action", x: 1000, y: 50, data: { command: "movement.teleport", args: "", params: { destination: "Gangnam_Public_CentralPark" }, scope: "B2" } },
      { id: "state-park", type: "state", x: 1280, y: 50, data: { name: "park" } },
      { id: "end-1", type: "end", x: 720, y: 260, data: {} }
    ],
    edges: [
      { from: "evt-1", port: "next", to: "cond-1" },
      { from: "cond-1", port: "true", to: "act-1" },
      { from: "cond-1", port: "false", to: "end-1" },
      { from: "act-1", port: "next", to: "act-2" },
      { from: "act-2", port: "next", to: "state-park" },
      { kind: "data", from: "evt-1", port: "payload:interaction_bag_id", to: "cond-1", input: "value" },
      { kind: "data", from: "evt-1", port: "payload:entity_id", to: "act-1", input: "param:entity_id" },
      { kind: "data", from: "evt-1", port: "payload:entity_id", to: "act-2", input: "param:entity_id" }
    ]
  };
  const EXAMPLES = [
    {
      id: "filtro-evento",
      title: "1. Filtrar un evento",
      description: "Solo limpia la cola cuando interaction.started corresponde a Self_GoHome; los demás eventos terminan sin acción.",
      flow: "Evento → Condición → Acción / Fin",
      steps: [
        "Añade Evento y configura interaction.started; el ID debe existir en el juego.",
        "Conecta Condición y compara payload.interaction_bag_id con Self_GoHome.",
        "Conecta T a la acción interaction.clear_queue y F a Fin.",
        "Simula con entity_id e interaction_bag_id; luego inspecciona el Lua generado."
      ],
      environment: "B2",
      payload: { entity_id: 42, interaction_bag_id: "Self_GoHome" },
      graph: {
        version: 2, initialState: "idle",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 350, data: { name: "idle" } },
          { id: "evt-1", type: "event", x: 50, y: 100, data: { event: "interaction.started", whenState: "idle", ownerField: "entity_id" } },
          { id: "cond-1", type: "condition", x: 360, y: 100, data: { source: "payload", field: "interaction_bag_id", operator: "==", value: "Self_GoHome" } },
          { id: "act-1", type: "action", x: 700, y: 40, data: { command: "interaction.clear_queue", args: "entity_id=${payload.entity_id} cancel_current=true", scope: "B2" } },
          { id: "end-1", type: "end", x: 700, y: 250, data: {} }
        ],
        edges: [
          { from: "evt-1", port: "next", to: "cond-1" },
          { from: "cond-1", port: "true", to: "act-1" },
          { from: "cond-1", port: "false", to: "end-1" },
          { from: "act-1", port: "next", to: "end-1" }
        ]
      }
    },
    {
      id: "cadena-acciones",
      title: "2. Encadenar acciones",
      description: "Limpia la cola y teletransporta el Zoí, en ese orden, solo cuando coincide Self_GoHome.",
      flow: "Evento → Condición → Acción → Acción → Estado",
      steps: [
        "Empieza con Evento y filtra payload.interaction_bag_id == Self_GoHome.",
        "Desde T, conecta interaction.clear_queue y luego movement.teleport.",
        "Conecta la última acción al estado park; deja F conectado a Fin.",
        "Revisa los IDs y argumentos CLI en el catálogo antes de exportar."
      ],
      environment: "B2",
      payload: { entity_id: 42, interaction_bag_id: "Self_GoHome" },
      graph: DEFAULT_GRAPH
    },
    {
      id: "estado-guardia",
      title: "3. Cambiar estado con una guardia",
      description: "La acción se ejecuta solo cuando el estado actual es idle; luego el flujo pasa a park.",
      flow: "Evento → Condición de estado → Acción → Estado / Fin",
      steps: [
        "Añade Evento y una Condición; selecciona estado actual como dato.",
        "Configura == idle y conecta T a interaction.clear_queue.",
        "Conecta la acción al estado park y F a Fin.",
        "Simula el mismo evento con estado idle y park para ver ambas rutas."
      ],
      environment: "B2",
      payload: { entity_id: 42 },
      graph: {
        version: 2, initialState: "idle",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 350, data: { name: "idle" } },
          { id: "evt-1", type: "event", x: 50, y: 100, data: { event: "interaction.started", whenState: "", ownerField: "entity_id" } },
          { id: "cond-1", type: "condition", x: 360, y: 100, data: { source: "state", field: "", operator: "==", value: "idle" } },
          { id: "act-1", type: "action", x: 700, y: 40, data: { command: "interaction.clear_queue", args: "entity_id=${payload.entity_id} cancel_current=true", scope: "B2" } },
          { id: "state-park", type: "state", x: 1000, y: 40, data: { name: "park" } },
          { id: "end-1", type: "end", x: 700, y: 250, data: {} }
        ],
        edges: [
          { from: "evt-1", port: "next", to: "cond-1" },
          { from: "cond-1", port: "true", to: "act-1" },
          { from: "cond-1", port: "false", to: "end-1" },
          { from: "act-1", port: "next", to: "state-park" }
        ]
      }
    },
    {
      id: "validar-payload",
      title: "4. Validar varios datos",
      description: "Combina dos condiciones antes de limpiar la cola: la interacción debe coincidir y el payload incluir entity_id.",
      flow: "Evento → Condición → Condición → Acción / Fin",
      steps: [
        "Conecta Evento a la primera Condición: interaction_bag_id == Self_GoHome.",
        "Desde T conecta otra Condición: payload.entity_id exists.",
        "Conecta T de la segunda condición a interaction.clear_queue.",
        "Conecta cada salida F a Fin y prueba payloads completos e incompletos."
      ],
      environment: "B2",
      payload: { entity_id: 42, interaction_bag_id: "Self_GoHome" },
      graph: {
        version: 2, initialState: "idle",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 430, data: { name: "idle" } },
          { id: "evt-1", type: "event", x: 50, y: 100, data: { event: "interaction.started", whenState: "idle", ownerField: "entity_id" } },
          { id: "cond-1", type: "condition", x: 360, y: 100, data: { source: "payload", field: "interaction_bag_id", operator: "==", value: "Self_GoHome" } },
          { id: "cond-2", type: "condition", x: 680, y: 100, data: { source: "payload", field: "entity_id", operator: "exists", value: "" } },
          { id: "act-1", type: "action", x: 1000, y: 40, data: { command: "interaction.clear_queue", args: "entity_id=${payload.entity_id} cancel_current=true", scope: "B2" } },
          { id: "end-1", type: "end", x: 680, y: 300, data: {} },
          { id: "end-2", type: "end", x: 1000, y: 300, data: {} }
        ],
        edges: [
          { from: "evt-1", port: "next", to: "cond-1" },
          { from: "cond-1", port: "true", to: "cond-2" },
          { from: "cond-1", port: "false", to: "end-1" },
          { from: "cond-2", port: "true", to: "act-1" },
          { from: "cond-2", port: "false", to: "end-2" },
          { from: "act-1", port: "next", to: "end-2" }
        ]
      }
    }
  ];
  const PROGRESSIVE_TEST_CASES = [
    {
      id: "proto-b1-b2-ping",
      title: "Caso 1 (Prototipo Mínimo): B1 → B2 → B1 sin teletransporte",
      description: "Evento en B1 (character.overlap_begin) → Condición → Puente B1→B2 (verify_sim_authority ejecuta weather.list en B2) → Respuesta B2→B1 → Acción toast.show en B1 → Estado verified.",
      flow: "Evento B1 → Condición → Puente B1↔B2 (OK) → Acción B1 (toast.show) → Estado verified",
      steps: [
        "B1 escucha character.overlap_begin en Zoi.FlowBridgeClient y valida que other_entity_id exista.",
        "El nodo bridge envía inzoi.message.send_to_sim(owner:GetEntityId(), 'inzoi_flow.rpc.req', packet).",
        "B2 recibe en M.on_lua_message, ejecuta weather.list sin teletransporte ni movimiento y responde con send_to_client.",
        "B1 recibe el ACK de B2, muestra toast.show y cambia al estado verified."
      ],
      environment: "B1",
      payload: { other_entity_id: 99 },
      graph: {
        version: 2,
        initialState: "idle",
        binding: "Zoi:*",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 380, data: { name: "idle" } },
          { id: "evt-b1", type: "event", x: 50, y: 90, data: { event: "character.overlap_begin", whenState: "idle" } },
          { id: "cond-other", type: "condition", x: 350, y: 90, data: { source: "payload", field: "other_entity_id", operator: "exists", value: "" } },
          { id: "bridge-sim", type: "bridge", x: 660, y: 60, data: { operation: "verify_sim_authority", params: { tag: "sim_check" } } },
          { id: "act-toast-ok", type: "action", x: 980, y: 40, data: { command: "toast.show", params: { message: "B2_ACK_OK", lifetime: "3", immediate: "true" }, scope: "B1" } },
          { id: "state-verified", type: "state", x: 1270, y: 40, data: { name: "verified" } },
          { id: "end-err", type: "end", x: 980, y: 240, data: {} },
          { id: "end-skip", type: "end", x: 660, y: 280, data: {} }
        ],
        edges: [
          { kind: "exec", from: "evt-b1", port: "next", to: "cond-other" },
          { kind: "data", from: "evt-b1", port: "payload:other_entity_id", to: "cond-other", input: "value" },
          { kind: "exec", from: "cond-other", port: "true", to: "bridge-sim" },
          { kind: "exec", from: "cond-other", port: "false", to: "end-skip" },
          { kind: "exec", from: "bridge-sim", port: "ok", to: "act-toast-ok" },
          { kind: "exec", from: "bridge-sim", port: "error", to: "end-err" },
          { kind: "data", from: "bridge-sim", port: "payload:result", to: "act-toast-ok", input: "param:message" },
          { kind: "exec", from: "act-toast-ok", port: "next", to: "state-verified" }
        ]
      }
    },
    {
      id: "case-state-transition",
      title: "Caso 2: Evento → Condición de estado → Acción → Nuevo estado",
      description: "Verifica la transición controlada de máquina de estados: solo actúa cuando currentState == idle y transiciona a active.",
      flow: "Evento → Condición (state == idle) → Acción B1 → Estado active",
      steps: [
        "El evento character.overlap_begin dispara la evaluación.",
        "La condición comprueba que el estado actual de la máquina sea 'idle'.",
        "Por la rama true ejecuta toast.show en B1 y transiciona al estado 'active'."
      ],
      environment: "B1",
      payload: { other_entity_id: 12 },
      graph: {
        version: 2,
        initialState: "idle",
        binding: "Zoi:*",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 340, data: { name: "idle" } },
          { id: "evt-1", type: "event", x: 50, y: 90, data: { event: "character.overlap_begin", whenState: "" } },
          { id: "cond-state", type: "condition", x: 350, y: 90, data: { source: "state", field: "", operator: "==", value: "idle" } },
          { id: "act-notify", type: "action", x: 670, y: 50, data: { command: "toast.show", params: { message: "STATE_ACTIVE", lifetime: "2", immediate: "true" }, scope: "B1" } },
          { id: "state-active", type: "state", x: 980, y: 50, data: { name: "active" } },
          { id: "end-ignore", type: "end", x: 670, y: 240, data: {} }
        ],
        edges: [
          { kind: "exec", from: "evt-1", port: "next", to: "cond-state" },
          { kind: "exec", from: "cond-state", port: "true", to: "act-notify" },
          { kind: "exec", from: "cond-state", port: "false", to: "end-ignore" },
          { kind: "exec", from: "act-notify", port: "next", to: "state-active" }
        ]
      }
    },
    {
      id: "case-multi-branch",
      title: "Caso 3: Evento → Múltiples ramas → Distintas acciones",
      description: "Evalúa múltiples condiciones encadenadas sobre el evento y bifurca hacia acciones distintas según el resultado.",
      flow: "Evento → Condición 1 → (True: Acción A / False: Condición 2 → Acción B o Fin)",
      steps: [
        "Evalúa si to_emotion == Excited en emotion.changed.",
        "Si es verdadero, limpia la cola de interacciones (rama A).",
        "Si es falso, evalúa una segunda condición (from_emotion exists) y aplica buff.add (rama B)."
      ],
      environment: "B2",
      payload: { entity_id: 42, from_emotion: "Calm", to_emotion: "Angry" },
      graph: {
        version: 2,
        initialState: "idle",
        binding: "Zoi:*",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 380, data: { name: "idle" } },
          { id: "evt-emo", type: "event", x: 50, y: 100, data: { event: "emotion.changed", whenState: "idle" } },
          { id: "cond-excited", type: "condition", x: 350, y: 80, data: { source: "payload", field: "to_emotion", operator: "==", value: "Excited" } },
          { id: "act-branch-a", type: "action", x: 680, y: 30, data: { command: "interaction.clear_queue", params: { cancel_current: "true" }, scope: "B2" } },
          { id: "cond-fallback", type: "condition", x: 680, y: 210, data: { source: "payload", field: "from_emotion", operator: "exists", value: "" } },
          { id: "act-branch-b", type: "action", x: 990, y: 180, data: { command: "needs.set_full", params: { category: "Energy" }, scope: "B2" } },
          { id: "state-handled", type: "state", x: 1280, y: 90, data: { name: "handled" } },
          { id: "end-none", type: "end", x: 990, y: 340, data: {} }
        ],
        edges: [
          { kind: "exec", from: "evt-emo", port: "next", to: "cond-excited" },
          { kind: "data", from: "evt-emo", port: "payload:to_emotion", to: "cond-excited", input: "value" },
          { kind: "exec", from: "cond-excited", port: "true", to: "act-branch-a" },
          { kind: "exec", from: "cond-excited", port: "false", to: "cond-fallback" },
          { kind: "data", from: "evt-emo", port: "payload:entity_id", to: "act-branch-a", input: "param:entity_id" },
          { kind: "data", from: "evt-emo", port: "payload:from_emotion", to: "cond-fallback", input: "value" },
          { kind: "exec", from: "cond-fallback", port: "true", to: "act-branch-b" },
          { kind: "exec", from: "cond-fallback", port: "false", to: "end-none" },
          { kind: "data", from: "evt-emo", port: "payload:entity_id", to: "act-branch-b", input: "param:entity_id" },
          { kind: "exec", from: "act-branch-a", port: "next", to: "state-handled" },
          { kind: "exec", from: "act-branch-b", port: "next", to: "state-handled" }
        ]
      }
    },
    {
      id: "case-error-handling",
      title: "Caso 4: Evento B1 → Orden inválida a B2 → Manejo de error en B1",
      description: "Verifica resiliencia: B1 envía una operación inválida a B2, B2 responde ERR_UNSUPPORTED_OP y B1 toma el puerto 'error' sin romper el flujo.",
      flow: "Evento B1 → Puente B1↔B2 (invalid_op_probe) → Salida error → Acción toast.show → Estado error_recovered",
      steps: [
        "B1 dispara character.overlap_begin y ejecuta el puente con 'invalid_op_probe'.",
        "B2 detecta que la operación no es válida y devuelve ok=false, status=ERR_UNSUPPORTED_OP.",
        "El nodo puente en B1 enruta la ejecución por el puerto 'error' hacia toast.show y transiciona a 'error_recovered'."
      ],
      environment: "B1",
      payload: { other_entity_id: 77 },
      graph: {
        version: 2,
        initialState: "idle",
        binding: "Zoi:*",
        nodes: [
          { id: "state-idle", type: "state", x: 50, y: 360, data: { name: "idle" } },
          { id: "evt-b1-err", type: "event", x: 50, y: 100, data: { event: "character.overlap_begin", whenState: "idle" } },
          { id: "bridge-bad", type: "bridge", x: 380, y: 90, data: { operation: "invalid_op_probe", params: { reason: "test_invalid_op" } } },
          { id: "act-recover", type: "action", x: 720, y: 180, data: { command: "toast.show", params: { message: "ERR_UNSUPPORTED_OP", lifetime: "4", immediate: "true" }, scope: "B1" } },
          { id: "state-recovered", type: "state", x: 1040, y: 180, data: { name: "error_recovered" } },
          { id: "end-unused-ok", type: "end", x: 720, y: 40, data: {} }
        ],
        edges: [
          { kind: "exec", from: "evt-b1-err", port: "next", to: "bridge-bad" },
          { kind: "exec", from: "bridge-bad", port: "ok", to: "end-unused-ok" },
          { kind: "exec", from: "bridge-bad", port: "error", to: "act-recover" },
          { kind: "data", from: "bridge-bad", port: "payload:error", to: "act-recover", input: "param:message" },
          { kind: "exec", from: "act-recover", port: "next", to: "state-recovered" }
        ]
      }
    }
  ];

  const CONTEXT_ACTION_TREES = {
    pregnancy: {
      id: "pregnancy",
      title: "Embarazo, Parto y Genética C++",
      badge: "FB2BioComponent + CLI B2/B1",
      bridgeOperation: "pregnancy.context_suite",
      defaultEvent: "character.overlap_begin",
      summary: "Configura las opciones de concepción, bypass de sexo biológico para embarazo masculino, etapas de gestación, mellizos/trillizos, escáner de sexo fetal y genética heredada.",
      engineRules: [
        "Regla del motor: pregnancy_and_birth.get_baby_with exige por defecto género biológico Female y PregnancyState == None.",
        "Bypass verificado (Embarazo masculino): bio.set_gender entity_id=<id> gender=Female en B2 cambia solo el flag biológico en FB2BioComponent sin alterar la malla 3D masculina en B1.",
        "Control C++ nativo: FB2BioComponent expone MaxPregnancyCount (mellizos/trillizos), ProceedToNextPregnancyState() y GetBabySpawnDataGenderType()."
      ],
      options: [
        {
          id: "allow_male_pregnancy",
          group: "1. Reglas biológicas y concepción",
          label: "Permitir embarazo en hombres y mujeres (Bypass bio.set_gender en B2)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "bio.set_gender + pregnancy_and_birth.get_baby_with",
          detail: "Habilita el flag biológico femenino en FB2BioComponent antes de iniciar la gestación."
        },
        {
          id: "partner_entity_id",
          group: "1. Reglas biológicas y concepción",
          label: "ID del segundo progenitor (partner_entity_id)",
          type: "text",
          defaultValue: "2",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "pregnancy_and_birth.get_baby_with",
          detail: "Entidad con la que se combina el ADN y el árbol genealógico."
        },
        {
          id: "stage_mode",
          group: "2. Control temporal del embarazo y parto",
          label: "Acción sobre la etapa de gestación",
          type: "select",
          defaultValue: "NextStage",
          choices: [
            ["Normal", "Iniciar embarazo estándar (Trimester 1)"],
            ["NextStage", "Acelerar a la siguiente etapa (ProceedToNextPregnancyState C++)"],
            ["InstantBirth", "Dar a luz inmediatamente (pregnancy_and_birth.hello_my_angel)"],
            ["Cancel", "Cancelar / interrumpir embarazo (pregnancy_and_birth.remove_pregnancy)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "FB2BioComponent:ProceedToNextPregnancyState / hello_my_angel / remove_pregnancy",
          detail: "Permite iniciar, adelantar trimestre, provocar el parto inmediato o cancelar la gestación."
        },
        {
          id: "max_babies",
          group: "2. Control temporal del embarazo y parto",
          label: "Número máximo de bebés (MaxPregnancyCount C++)",
          type: "select",
          defaultValue: "2",
          choices: [
            ["1", "1 bebé (parto único)"],
            ["2", "2 bebés (mellizos / gemelos)"],
            ["3", "3 bebés (trillizos)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "FB2BioComponent.MaxPregnancyCount",
          detail: "Sobrescribe la propiedad C++ MaxPregnancyCount antes de generar los datos de alumbramiento."
        },
        {
          id: "check_baby_gender",
          group: "3. Consulta médica / ecografía",
          label: "Conocer sexo del bebé (Ecografía C++ GetBabySpawnDataGenderType)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2→B1",
          status: "VERIFICADA",
          apiRef: "FB2BioComponent:GetBabySpawnDataGenderType()",
          detail: "Lee el sexo asignado en la semilla de alumbramiento y lo devuelve al cliente B1."
        },
        {
          id: "apply_genetics",
          group: "4. Genética, fenotipo y rasgos heredados",
          label: "Personalizar genética y apariencia (cabello, piel, rostro y rasgo)",
          type: "checkbox",
          defaultValue: "true",
          env: "B1+B2",
          status: "VERIFICADA",
          apiRef: "appearance.set_skin_color + appearance.hair + appearance.set_face_shape + appearance.set_trait",
          detail: "Activa las órdenes de fenotipo en B1 y rasgo genético en B2."
        },
        {
          id: "skin_color_index",
          group: "4. Genética, fenotipo y rasgos heredados",
          label: "Tono de piel (skin_color_index)",
          type: "select",
          defaultValue: "3",
          dependsOn: "apply_genetics",
          choices: [
            ["1", "Tono 1 (Muy claro)"],
            ["3", "Tono 3 (Medio cálido)"],
            ["6", "Tono 6 (Bronceado)"],
            ["9", "Tono 9 (Oscuro)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_skin_color",
          detail: "Índice del preset de piel en CAZ."
        },
        {
          id: "hair_id",
          group: "4. Genética, fenotipo y rasgos heredados",
          label: "Estilo / color de cabello (hair_id)",
          type: "select",
          defaultValue: "Hair_Female_Long_01",
          dependsOn: "apply_genetics",
          choices: [
            ["Hair_Female_Long_01", "Castaño largo (Hair_Female_Long_01)"],
            ["Hair_Female_Bob_02", "Corte Bob oscuro (Hair_Female_Bob_02)"],
            ["Hair_Male_Short_01", "Corto clásico (Hair_Male_Short_01)"],
            ["Hair_Unisex_Curl_03", "Rizado natural (Hair_Unisex_Curl_03)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.hair",
          detail: "ID del catálogo de cabello en B1."
        },
        {
          id: "face_preset_id",
          group: "4. Genética, fenotipo y rasgos heredados",
          label: "Semejanza facial / ojos (face_preset_id)",
          type: "select",
          defaultValue: "Face_Preset_02",
          dependsOn: "apply_genetics",
          choices: [
            ["Face_Preset_01", "Semejanza progenitor A · Ojos claros (Face_Preset_01)"],
            ["Face_Preset_02", "Semejanza progenitor B · Ojos azules/verdes (Face_Preset_02)"],
            ["Face_Preset_03", "Rasgos mixtos equilibrados (Face_Preset_03)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_face_shape",
          detail: "Preset morfológico facial y ocular."
        },
        {
          id: "trait_id",
          group: "4. Genética, fenotipo y rasgos heredados",
          label: "Rasgo genético de personalidad (trait_id)",
          type: "select",
          defaultValue: "Trait_Creative",
          dependsOn: "apply_genetics",
          choices: [
            ["Trait_Creative", "Creativo (Trait_Creative)"],
            ["Trait_Genius", "Genio (Trait_Genius)"],
            ["Trait_Cheerful", "Alegre (Trait_Cheerful)"],
            ["Trait_Athletic", "Atlético (Trait_Athletic)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "appearance.set_trait",
          detail: "Rasgo asignado en la simulación B2."
        },
        {
          id: "create_parent_bond",
          group: "5. Parentesco y genealogía",
          label: "Registrar vínculo de pareja/progenitores (social.create_relationship)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "social.create_relationship + FB2GenealogyComponent",
          detail: "Asegura el vínculo Spouse/Parent entre ambos progenitores en B2."
        }
      ]
    },
    appearance: {
      id: "appearance",
      title: "Vestimenta, CAZ y Estilismo en Vivo",
      badge: "FB2AppearanceComponent + B1/B2",
      bridgeOperation: "appearance.context_suite",
      defaultEvent: "character.overlap_begin",
      summary: "Cambia categoría de ropa, tinta prendas en hexadecimal sin recompilar DataAssets, modifica peinado, piel, rostro y rasgo en una sola operación.",
      engineRules: [
        "Regla del motor: las mallas y materiales de ropa se renderizan en B1 (cliente), mientras que los rasgos y emociones residen en B2 (simulación).",
        "Ventaja clave: appearance.set_garment_color permite tintar prendas en vivo con color hexadecimal sin abrir el editor de materiales."
      ],
      options: [
        {
          id: "change_outfit",
          group: "1. Categoría de vestuario",
          label: "Cambiar categoría de atuendo (appearance.set_outfit_category)",
          type: "checkbox",
          defaultValue: "true",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_outfit_category",
          detail: "Conmuta el conjunto activo del Zoi."
        },
        {
          id: "outfit_category",
          group: "1. Categoría de vestuario",
          label: "Categoría de ropa",
          type: "select",
          defaultValue: "Formal",
          dependsOn: "change_outfit",
          choices: [
            ["Everyday", "Diario (Everyday)"],
            ["Formal", "Formal / Gala (Formal)"],
            ["Sleepwear", "Pijama / Dormir (Sleepwear)"],
            ["Sportswear", "Deporte (Sportswear)"],
            ["Swimwear", "Baño (Swimwear)"],
            ["Party", "Fiesta (Party)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_outfit_category",
          detail: "Categoría del armario CAZ."
        },
        {
          id: "tint_garment",
          group: "2. Tintado dinámico de prendas",
          label: "Tintar prenda en vivo (appearance.set_garment_color)",
          type: "checkbox",
          defaultValue: "true",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_garment_color",
          detail: "Aplica color sRGB hex a la ranura de prenda elegida."
        },
        {
          id: "slot_index",
          group: "2. Tintado dinámico de prendas",
          label: "Ranura de prenda (slot_index)",
          type: "select",
          defaultValue: "0",
          dependsOn: "tint_garment",
          choices: [
            ["0", "Ranura 0 (Prenda superior / Cuerpo entero)"],
            ["1", "Ranura 1 (Prenda inferior)"],
            ["2", "Ranura 2 (Calzado)"],
            ["3", "Ranura 3 (Accesorio)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_garment_color",
          detail: "Índice del slot de ropa."
        },
        {
          id: "color_hex",
          group: "2. Tintado dinámico de prendas",
          label: "Color hexadecimal (color_hex)",
          type: "select",
          defaultValue: "#1E3A8A",
          dependsOn: "tint_garment",
          choices: [
            ["#1E3A8A", "Azul zafiro (#1E3A8A)"],
            ["#991B1B", "Rojo carmesí (#991B1B)"],
            ["#065F46", "Verde esmeralda (#065F46)"],
            ["#111827", "Negro obsidiana (#111827)"],
            ["#F59E0B", "Dorado solar (#F59E0B)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_garment_color",
          detail: "Color aplicado en tiempo real sobre el material."
        },
        {
          id: "change_hair",
          group: "3. Cabello y morfología CAZ",
          label: "Cambiar peinado (appearance.hair)",
          type: "checkbox",
          defaultValue: "true",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.hair",
          detail: "Sustituye la malla de cabello activa."
        },
        {
          id: "hair_id",
          group: "3. Cabello y morfología CAZ",
          label: "Identificador de peinado (hair_id)",
          type: "select",
          defaultValue: "Hair_Female_Long_01",
          dependsOn: "change_hair",
          choices: [
            ["Hair_Female_Long_01", "Largo ondulado (Hair_Female_Long_01)"],
            ["Hair_Female_Bob_02", "Bob moderno (Hair_Female_Bob_02)"],
            ["Hair_Male_Short_01", "Corto ejecutivo (Hair_Male_Short_01)"],
            ["Hair_Unisex_Curl_03", "Rizado urbano (Hair_Unisex_Curl_03)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.hair",
          detail: "ID del recurso de pelo."
        },
        {
          id: "change_skin",
          group: "3. Cabello y morfología CAZ",
          label: "Cambiar tono de piel (appearance.set_skin_color)",
          type: "checkbox",
          defaultValue: "false",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_skin_color",
          detail: "Actualiza el índice de piel del Zoi."
        },
        {
          id: "skin_color_index",
          group: "3. Cabello y morfología CAZ",
          label: "Índice de piel",
          type: "select",
          defaultValue: "3",
          dependsOn: "change_skin",
          choices: [
            ["1", "Tono 1"],
            ["3", "Tono 3"],
            ["6", "Tono 6"],
            ["9", "Tono 9"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_skin_color",
          detail: "Índice numérico de piel."
        },
        {
          id: "change_face",
          group: "3. Cabello y morfología CAZ",
          label: "Aplicar preset facial (appearance.set_face_shape)",
          type: "checkbox",
          defaultValue: "false",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_face_shape",
          detail: "Reconfigura las facciones del Zoi."
        },
        {
          id: "face_preset_id",
          group: "3. Cabello y morfología CAZ",
          label: "Preset facial",
          type: "select",
          defaultValue: "Face_Preset_02",
          dependsOn: "change_face",
          choices: [
            ["Face_Preset_01", "Face_Preset_01"],
            ["Face_Preset_02", "Face_Preset_02"],
            ["Face_Preset_03", "Face_Preset_03"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "appearance.set_face_shape",
          detail: "Identificador del preset facial."
        },
        {
          id: "sync_trait",
          group: "4. Sincronización en Simulación B2",
          label: "Sincronizar rasgo y emoción en B2 tras cambiar look",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "appearance.set_trait + emotion.add",
          detail: "Aplica el rasgo en B2 y añade emoción Confident/Joyful."
        },
        {
          id: "trait_id",
          group: "4. Sincronización en Simulación B2",
          label: "Rasgo en B2 (trait_id)",
          type: "select",
          defaultValue: "Trait_Charismatic",
          dependsOn: "sync_trait",
          choices: [
            ["Trait_Charismatic", "Carismático (Trait_Charismatic)"],
            ["Trait_Creative", "Creativo (Trait_Creative)"],
            ["Trait_Trendsetter", "Creador de tendencias (Trait_Trendsetter)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "appearance.set_trait",
          detail: "Rasgo sincronizado en servidor."
        }
      ]
    },
    vehicle: {
      id: "vehicle",
      title: "Vehículos, Conducción y Vuelo C++",
      badge: "FB2DrivableVehicleComponent + Vuelo B2",
      bridgeOperation: "vehicle.context_suite",
      defaultEvent: "character.overlap_begin",
      summary: "Escanea vehículos reales en el mundo, ordena embarcar/conducir con interaction.execute, acopla mallas visuales en B1 e impulsa vuelo C++ en B2.",
      engineRules: [
        "Límite real del motor: vehicle.spawn devuelve ACK pero NO instancia un vehículo con físicas conducibles.",
        "Solución verificada: escanear vehículos existentes (entity.scan_vehicles), encolar interacción de conducción (interaction.execute) o activar propulsión vertical C++ (SetLocationOnlySimul + ForceSendMovementData)."
      ],
      options: [
        {
          id: "scan_nearby",
          group: "1. Detección y embarque en vehículos reales",
          label: "Escanear vehículos cercanos en el mundo (entity.scan_vehicles)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "entity.scan_vehicles",
          detail: "Localiza vehículos instanciados alrededor del Zoi antes de interactuar."
        },
        {
          id: "search_radius",
          group: "1. Detección y embarque en vehículos reales",
          label: "Radio de búsqueda en metros (search_radius)",
          type: "select",
          defaultValue: "80.0",
          dependsOn: "scan_nearby",
          choices: [
            ["30.0", "30 metros (cercano)"],
            ["80.0", "80 metros (manzana completa)"],
            ["200.0", "200 metros (distrito)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "entity.scan_vehicles",
          detail: "Distancia máxima de escaneo."
        },
        {
          id: "board_vehicle",
          group: "1. Detección y embarque en vehículos reales",
          label: "Encolar interacción de subida / conducción (interaction.execute)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "interaction.execute",
          detail: "Inserta la interacción de vehículo al principio de la cola del Zoi."
        },
        {
          id: "vehicle_entity_id",
          group: "1. Detección y embarque en vehículos reales",
          label: "ID de entidad del vehículo objetivo (vehicle_entity_id)",
          type: "text",
          defaultValue: "10",
          dependsOn: "board_vehicle",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "interaction.execute",
          detail: "EntityId del vehículo detectado en la escena."
        },
        {
          id: "interaction_bag_id",
          group: "1. Detección y embarque en vehículos reales",
          label: "Acción sobre el vehículo (interaction_bag_id)",
          type: "select",
          defaultValue: "Vehicle_Drive",
          dependsOn: "board_vehicle",
          choices: [
            ["Vehicle_Drive", "Conducir como piloto (Vehicle_Drive)"],
            ["Vehicle_Ride", "Subir como pasajero (Vehicle_Ride)"],
            ["Vehicle_Inspect", "Inspeccionar vehículo (Vehicle_Inspect)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "interaction.execute",
          detail: "Bag de interacción del vehículo."
        },
        {
          id: "attach_visual_prop",
          group: "2. Chasis visual y propulsión aérea C++",
          label: "Acoplar malla visual al socket del Zoi en B1 (entity.attach_mesh)",
          type: "checkbox",
          defaultValue: "true",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "entity.attach_mesh",
          detail: "Une un prop visual en B1 antes de activar el desplazamiento aéreo."
        },
        {
          id: "mesh_id",
          group: "2. Chasis visual y propulsión aérea C++",
          label: "ID de malla visual (mesh_id)",
          type: "select",
          defaultValue: "40",
          dependsOn: "attach_visual_prop",
          choices: [
            ["40", "Malla 40 (Propulsor / tabla aérea)"],
            ["12", "Malla 12 (Chasis ligero)"],
            ["25", "Malla 25 (Dron / ala)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "entity.attach_mesh",
          detail: "Identificador numérico del mesh en B1."
        },
        {
          id: "socket",
          group: "2. Chasis visual y propulsión aérea C++",
          label: "Socket del esqueleto (socket)",
          type: "select",
          defaultValue: "pelvis",
          dependsOn: "attach_visual_prop",
          choices: [
            ["pelvis", "Pelvis (centro de masas)"],
            ["spine_03", "Espalda / Jetpack (spine_03)"],
            ["hand_r", "Mano derecha (hand_r)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          apiRef: "entity.attach_mesh",
          detail: "Hueso donde se fija el objeto."
        },
        {
          id: "enable_cpp_flight",
          group: "2. Chasis visual y propulsión aérea C++",
          label: "Activar vuelo sostenido C++ en B2 (SetLocationOnlySimul + on_tick)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "FB2Character:SetLocationOnlySimul + ForceSendMovementData + RequestSnapToGround",
          detail: "Eleva la coordenada Z en B2 durante N ticks y aterriza limpiamente al terminar."
        },
        {
          id: "delta_z",
          group: "2. Chasis visual y propulsión aérea C++",
          label: "Altura de elevación en cm (delta_z)",
          type: "select",
          defaultValue: "280",
          dependsOn: "enable_cpp_flight",
          choices: [
            ["150", "+150 cm (Levitación baja)"],
            ["280", "+280 cm (Vuelo medio urbano)"],
            ["500", "+500 cm (Vuelo alto)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "FB2Character:SetLocationOnlySimul",
          detail: "Incremento vertical sobre la cota actual."
        },
        {
          id: "ticks",
          group: "2. Chasis visual y propulsión aérea C++",
          label: "Duración del vuelo en ticks (ticks)",
          type: "select",
          defaultValue: "90",
          dependsOn: "enable_cpp_flight",
          choices: [
            ["45", "45 ticks (Corto)"],
            ["90", "90 ticks (Estándar)"],
            ["180", "180 ticks (Largo)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "M.on_tick + RequestSnapToGround",
          detail: "Ticks de mantenimiento de altura antes de RequestSnapToGround()."
        }
      ]
    },
    furniture: {
      id: "furniture",
      title: "Muebles, Objetos y Construcción",
      badge: "Building CLI + Interacción B2",
      bridgeOperation: "furniture.context_suite",
      defaultEvent: "character.overlap_begin",
      summary: "Escanea mobiliario cercano, coloca objetos del catálogo en la parcela, ajusta escala, cambia materiales y ordena al Zoi usar el mueble.",
      engineRules: [
        "Regla del motor: la colocación y transformación de muebles de parcela se ejecuta en B2 (building.place_object, building.set_object_scale).",
        "Encadenamiento limpio: tras colocar o localizar el mueble, interaction.execute con insert_front=true hace que el Zoi lo utilice de inmediato."
      ],
      options: [
        {
          id: "scan_objects",
          group: "1. Escaneo e instanciación en parcela",
          label: "Escanear muebles cercanos antes de operar (entity.scan_objects)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "entity.scan_objects",
          detail: "Lista los objetos interactivos en un radio de 25m."
        },
        {
          id: "place_new_object",
          group: "1. Escaneo e instanciación en parcela",
          label: "Colocar mueble del catálogo en la parcela (building.place_object)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "building.place_object",
          detail: "Instancia una plantilla ObjectTemplate en la propiedad activa."
        },
        {
          id: "object_template_id",
          group: "1. Escaneo e instanciación en parcela",
          label: "Plantilla del mueble (object_template_id)",
          type: "select",
          defaultValue: "Obj_Sofa_Modern_01",
          dependsOn: "place_new_object",
          choices: [
            ["Obj_Sofa_Modern_01", "Sofá moderno (Obj_Sofa_Modern_01)"],
            ["Obj_Bed_Double_01", "Cama doble (Obj_Bed_Double_01)"],
            ["Obj_Desk_Gaming_01", "Escritorio gaming (Obj_Desk_Gaming_01)"],
            ["Obj_Piano_Grand_01", "Piano de cola (Obj_Piano_Grand_01)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "building.place_object",
          detail: "ID de fila en la tabla ObjectTemplate."
        },
        {
          id: "scale_object",
          group: "2. Escala y acabado de material",
          label: "Modificar escala geométrica del mueble (building.set_object_scale)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "building.set_object_scale",
          detail: "Reescala el objeto objetivo en la escena."
        },
        {
          id: "target_object_id",
          group: "2. Escala y acabado de material",
          label: "EntityId del mueble objetivo (target_object_id)",
          type: "text",
          defaultValue: "20",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "building.set_object_scale / interaction.execute",
          detail: "ID de la entidad del mueble en el mundo."
        },
        {
          id: "scale",
          group: "2. Escala y acabado de material",
          label: "Factor de escala (scale)",
          type: "select",
          defaultValue: "1.25",
          dependsOn: "scale_object",
          choices: [
            ["0.75", "0.75x (Compacto)"],
            ["1.0", "1.0x (Original)"],
            ["1.25", "1.25x (Amplio)"],
            ["1.6", "1.6x (Monumental)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "building.set_object_scale",
          detail: "Multiplicador uniforme de tamaño."
        },
        {
          id: "change_material",
          group: "2. Escala y acabado de material",
          label: "Sustituir material del mueble (build.set_object_material)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "build.set_object_material",
          detail: "Aplica un preset de material de construcción."
        },
        {
          id: "material_id",
          group: "2. Escala y acabado de material",
          label: "Material (material_id)",
          type: "select",
          defaultValue: "Mat_Wood_Oak",
          dependsOn: "change_material",
          choices: [
            ["Mat_Wood_Oak", "Madera de roble (Mat_Wood_Oak)"],
            ["Mat_Marble_White", "Mármol blanco (Mat_Marble_White)"],
            ["Mat_Fabric_Velvet_Blue", "Terciopelo azul (Mat_Fabric_Velvet_Blue)"],
            ["Mat_Metal_BrushedGold", "Oro cepillado (Mat_Metal_BrushedGold)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "build.set_object_material",
          detail: "Preset de material en ModKit."
        },
        {
          id: "use_furniture",
          group: "3. Uso autónomo por el Zoi",
          label: "Ordenar al Zoi usar el mueble inmediatamente (interaction.execute)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "interaction.execute",
          detail: "Encola la interacción con prioridad frontal (insert_front=true)."
        },
        {
          id: "interaction_bag_id",
          group: "3. Uso autónomo por el Zoi",
          label: "Interacción con el mueble (interaction_bag_id)",
          type: "select",
          defaultValue: "Sit",
          dependsOn: "use_furniture",
          choices: [
            ["Sit", "Sentarse (Sit)"],
            ["Sleep", "Dormir / descansar (Sleep)"],
            ["PlayInstrument", "Tocar instrumento (PlayInstrument)"],
            ["UseComputer", "Usar escritorio / ordenador (UseComputer)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "interaction.execute",
          detail: "Bag de interacción asignado al objeto."
        }
      ]
    },
    weather_time: {
      id: "weather_time",
      title: "Clima, Estaciones y Reloj del Mundo",
      badge: "Weather & Time B2",
      bridgeOperation: "weather.control",
      defaultEvent: "character.overlap_begin",
      summary: "Controla el estado meteorológico verificado, documenta qué parámetros climáticos son ACK_ONLY y permite encadenar salto de día o velocidad de simulación.",
      engineRules: [
        "Evidencia forense en partida: weather.control muta inmediatamente la atmósfera (Rain, Snow, Sunny, Cloudy, Thunderstorm) y es VERIFICADA.",
        "Transparencia del motor: weather.season y weather.temperature devuelven ACK_ONLY sin cambiar la estación ni los grados reales en build actual; están señalados explícitamente."
      ],
      options: [
        {
          id: "weather_type",
          group: "1. Meteorología real verificada",
          label: "Clima activo (weather.control)",
          type: "select",
          defaultValue: "Rain",
          choices: [
            ["Sunny", "Soleado despejado (Sunny)"],
            ["Rain", "Lluvia (Rain)"],
            ["Snow", "Nieve (Snow)"],
            ["Cloudy", "Nublado (Cloudy)"],
            ["Thunderstorm", "Tormenta eléctrica (Thunderstorm)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "weather.control",
          detail: "Cambia la precipitación y cielo inmediatamente en la partida."
        },
        {
          id: "season_type",
          group: "2. Parámetros estacionales (Advertencia: ACK_ONLY en motor actual)",
          label: "Estación solicitada (weather.season · ACK_ONLY)",
          type: "select",
          defaultValue: "Winter",
          choices: [
            ["Spring", "Primavera (Spring)"],
            ["Summer", "Verano (Summer)"],
            ["Autumn", "Otoño (Autumn)"],
            ["Winter", "Invierno (Winter)"]
          ],
          env: "B2",
          status: "ACK_ONLY",
          apiRef: "weather.season",
          detail: "El comando responde ok=true pero el motor mantiene la estación de la partida."
        },
        {
          id: "temperature",
          group: "2. Parámetros estacionales (Advertencia: ACK_ONLY en motor actual)",
          label: "Temperatura en °C (weather.temperature · ACK_ONLY)",
          type: "select",
          defaultValue: "5",
          choices: [
            ["-5", "-5 °C (Helada)"],
            ["5", "5 °C (Frío)"],
            ["22", "22 °C (Templado)"],
            ["34", "34 °C (Calor)"]
          ],
          env: "B2",
          status: "ACK_ONLY",
          apiRef: "weather.temperature",
          detail: "Incluido para compatibilidad de paquete; marcado honestamente como ACK_ONLY."
        },
        {
          id: "enable_era_map_conversion",
          group: "3. Conversión de Época y Subsistemas del Mapa (Hanok / Joseon / Sin Tráfico)",
          label: "Activar conversión total de época en el mapa (UB1WorldManager + FB2CityEditManager + FB2SiteManager)",
          type: "checkbox",
          defaultValue: "false",
          env: "B1+B2",
          status: "VERIFICADA",
          apiRef: "FB2Site:ApplySitePreset + FB2EntityManager:DestroyObject + UB1WorldManager",
          detail: "Transforma solares adyacentes en casas Hanok, elimina el 100% de vehículos y electrodomésticos modernos y viste a los Zois con Hanbok."
        },
        {
          id: "era_hanok_preset_mode",
          group: "3. Conversión de Época y Subsistemas del Mapa (Hanok / Joseon / Sin Tráfico)",
          label: "Modo de reemplazo arquitectónico Hanok (FB2Site:ApplySitePreset + BuildPreset)",
          type: "select",
          defaultValue: "all_adjacent_hanok",
          dependsOn: "enable_era_map_conversion",
          choices: [
            ["all_adjacent_hanok", "Convertir todos los solares residenciales a Hanok (Free01_06 / Free01_07 / Free03_10)"],
            ["active_site_only", "Aplicar Gran Mansión Hanok solo al solar activo"],
            ["keep_buildings", "Conservar edificios actuales (solo purgar tráfico y objetos modernos)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "FB2SiteManager:FindSiteBySiteId + FB2Site:ApplySitePreset",
          detail: "Aplica los paquetes nativos Gran mansión hanok y Casa hanok Sodam y activa site.bTakeOffShoes = true."
        },
        {
          id: "era_purge_vehicles_and_appliances",
          group: "3. Conversión de Época y Subsistemas del Mapa (Hanok / Joseon / Sin Tráfico)",
          label: "Purgar vehículos (FB2Vehicle) y electrodomésticos modernos (FB2GameObject.ObjectTableId)",
          type: "checkbox",
          defaultValue: "true",
          dependsOn: "enable_era_map_conversion",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "FB2EntityManager:DestroyObject + FB2CityGraphManager:SetRoadState",
          detail: "Destruye coches estacionados/en marcha, cierra carreteras al tráfico y elimina neveras, fogones, TVs y luces modernas."
        },
        {
          id: "era_apply_hanbok_crowd",
          group: "3. Conversión de Época y Subsistemas del Mapa (Hanok / Joseon / Sin Tráfico)",
          label: "Vestir a todos los Zois del mapa con Hanbok tradicional (F_10014 / M_10011 / Gat)",
          type: "checkbox",
          defaultValue: "true",
          dependsOn: "enable_era_map_conversion",
          env: "B1",
          status: "VERIFICADA",
          apiRef: "character.change_clothes + AppearancePreset",
          detail: "Aplica presets Hanbok verificados según género y edad a todos los residentes y peatones."
        }
      ]
    },
    life: {
      id: "life",
      title: "Ciclo Vital, Necesidades, Emociones y Economía",
      badge: "Bio + Needs + Social + Currency B2",
      bridgeOperation: "life.context_suite",
      defaultEvent: "character.overlap_begin",
      summary: "Combina etapa de edad con readback C++ (GetGrowthStep), recarga de necesidades, estado de ánimo dominante, fondos del hogar y creación de relaciones.",
      engineRules: [
        "Verificación con readback C++: aging.set_growth_step se confirma con owner:GetGrowthStep() y emotion.add se confirma con owner:GetDominantEmotion().",
        "Mutación directa en simulación: needs.set_full, currency.set y social.create_relationship están verificadas en B2."
      ],
      options: [
        {
          id: "change_age_step",
          group: "1. Ciclo de vida y crecimiento",
          label: "Cambiar etapa vital del Zoi (aging.set_growth_step + GetGrowthStep C++)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "aging.set_growth_step + FB2Character:GetGrowthStep()",
          detail: "Cambia el tramo de edad y verifica el cambio leyendo el enum C++."
        },
        {
          id: "growth_step",
          group: "1. Ciclo de vida y crecimiento",
          label: "Etapa vital objetivo (growth_step)",
          type: "select",
          defaultValue: "YoungAdult",
          dependsOn: "change_age_step",
          choices: [
            ["Child", "Niño/a (Child)"],
            ["Adolescent", "Adolescente (Adolescent)"],
            ["YoungAdult", "Joven adulto/a (YoungAdult)"],
            ["Adult", "Adulto/a (Adult)"],
            ["OldAge", "Persona mayor (OldAge)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "aging.set_growth_step",
          detail: "Etapa de crecimiento del Zoi."
        },
        {
          id: "refill_needs",
          group: "2. Necesidades y estado emocional",
          label: "Rellenar necesidad al 100% (needs.set_full)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "needs.set_full",
          detail: "Restaura al máximo la necesidad seleccionada."
        },
        {
          id: "need_category",
          group: "2. Necesidades y estado emocional",
          label: "Categoría de necesidad (need_category)",
          type: "select",
          defaultValue: "Energy",
          dependsOn: "refill_needs",
          choices: [
            ["Energy", "Energía (Energy)"],
            ["Hunger", "Hambre (Hunger)"],
            ["Hygiene", "Higiene (Hygiene)"],
            ["Social", "Social (Social)"],
            ["Fun", "Diversión (Fun)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "needs.set_full",
          detail: "Necesidad fisiológica del Zoi."
        },
        {
          id: "boost_emotion",
          group: "2. Necesidades y estado emocional",
          label: "Aplicar emoción dominante (emotion.add + GetDominantEmotion C++)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "emotion.add + FB2Character:GetDominantEmotion()",
          detail: "Añade la emoción y lee el estado dominante resultante en C++."
        },
        {
          id: "emotion_id",
          group: "2. Necesidades y estado emocional",
          label: "Emoción (emotion_id)",
          type: "select",
          defaultValue: "Joyful",
          dependsOn: "boost_emotion",
          choices: [
            ["Joyful", "Radiante / Feliz (Joyful)"],
            ["Confident", "Seguro/a (Confident)"],
            ["Excited", "Entusiasmado/a (Excited)"],
            ["Calm", "Tranquilo/a (Calm)"],
            ["Flirty", "Coqueto/a (Flirty)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "emotion.add",
          detail: "Identificador de emoción verificada."
        },
        {
          id: "grant_currency",
          group: "3. Economía y vínculos sociales",
          label: "Fijar dinero de la familia (currency.set)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "currency.set",
          detail: "Actualiza los Mew disponibles en el hogar."
        },
        {
          id: "currency_amount",
          group: "3. Economía y vínculos sociales",
          label: "Cantidad de Mew (currency_amount)",
          type: "select",
          defaultValue: "500000",
          dependsOn: "grant_currency",
          choices: [
            ["50000", "50.000 Mew"],
            ["500000", "500.000 Mew"],
            ["999999", "999.999 Mew"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "currency.set",
          detail: "Saldo total asignado."
        },
        {
          id: "create_relationship",
          group: "3. Economía y vínculos sociales",
          label: "Establecer relación con otro Zoi (social.create_relationship)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "social.create_relationship",
          detail: "Crea el vínculo social en B2."
        },
        {
          id: "target_entity_id",
          group: "3. Economía y vínculos sociales",
          label: "EntityId del segundo Zoi (target_entity_id)",
          type: "text",
          defaultValue: "2",
          dependsOn: "create_relationship",
          env: "B2",
          status: "VERIFICADA",
          apiRef: "social.create_relationship",
          detail: "ID del Zoi con quien se establece la relación."
        },
        {
          id: "relationship_type",
          group: "3. Economía y vínculos sociales",
          label: "Tipo de relación (relationship_type)",
          type: "select",
          defaultValue: "Friend",
          dependsOn: "create_relationship",
          choices: [
            ["Friend", "Amistad (Friend)"],
            ["BestFriend", "Mejor amigo/a (BestFriend)"],
            ["Lover", "Romance / Pareja (Lover)"],
            ["Spouse", "Cónyuge (Spouse)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          apiRef: "social.create_relationship",
          detail: "Categoría de relación en B2."
        }
      ]
    },
    zoi_self_menu: {
      id: "zoi_self_menu",
      title: "Menú Contextual Zoi Principal · Clic Propio y Smartphone",
      badge: "Self Menu + SmartPhone + CCTV + Group B1/B2",
      bridgeOperation: "zoi_self.context_suite",
      defaultEvent: "interaction.started",
      summary: "Configura las opciones al hacer clic sobre tu propio Zoi (ej. Lina Tres): Teléfono Móvil (21 apps + Radar GPS de vehículo aparcado + Cámara CCTV de oficina/empleados), Grupo, Negocio propio, Acciones personales, Busking/Ambiciones, Limpieza, Cambiarse de ropa y Emote IA.",
      engineRules: [
        "Menú de clic propio (Self_*): las interacciones sobre el propio Zoi se ejecutan en B2 con target_entity_id == entity_id o mediante las 10 categorías Self_OutfitCategory_*.",
        "Smartphone + Radar GPS de vehículo: combina entity.scan_vehicles + entity.get_vehicle_info en B1/B2 con el bag nativo Self_ReturnToParkingPlace para localizar o volver al coche aparcado.",
        "Smartphone + Cámara CCTV de oficina/empleados: encadena household_biz.list_employees + household_biz.get_employee_activities en B2 con visual.free_camera + view.set_filter en B1 para vigilar el negocio en vivo.",
        "Regla de Grupos (zoi_group.*): zoi_group.create / add_member / follow exigen un Zoi objetivo válido (ej. pareja Lara Ni 20524) y sincronizan el desplazamiento grupal en B2."
      ],
      options: [
        {
          id: "use_smartphone",
          group: "1. Teléfono Móvil (Self_SmartPhone_*)",
          label: "Ejecutar acción o app del Teléfono Móvil (Self_SmartPhone_*)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "smartphone_cam",
          apiRef: "interaction.execute (Self_SmartPhone_*)",
          detail: "Abre el móvil del Zoi principal y ejecuta la acción o aplicación seleccionada."
        },
        {
          id: "smartphone_bag_id",
          group: "1. Teléfono Móvil (Self_SmartPhone_*)",
          label: "Aplicación / Acción nativa del Smartphone (smartphone_bag_id)",
          type: "select",
          defaultValue: "Self_SmartPhone_Check",
          dependsOn: "use_smartphone",
          choices: [
            ["Self_SmartPhone_Check", "Revisar mensajes y notificaciones (Self_SmartPhone_Check)"],
            ["Self_SmartPhone_Light", "Linterna del móvil (Self_SmartPhone_Light)"],
            ["Self_SmartPhone_Check_Schedule", "Consultar agenda y horario (Self_SmartPhone_Check_Schedule)"],
            ["Self_SmartPhone_Album_Check_Perspective", "Ver álbum de fotos en 1ª persona (Self_SmartPhone_Album_Check_Perspective)"],
            ["Self_SmartPhone_Pregnancy_Sonogram", "Ver ecografía de embarazo en el móvil (Self_SmartPhone_Pregnancy_Sonogram)"],
            ["Self_SmartPhone_Insurance_CurrentState", "Consultar póliza de seguros (Self_SmartPhone_Insurance_CurrentState)"],
            ["Self_SmartPhone_Accommodation_Booking", "Reservar alojamiento / hotel (Self_SmartPhone_Accommodation_Booking)"],
            ["Self_SmartPhone_Accommodation_ExtendOrCheckOut", "Ampliar estancia o Check-Out (Self_SmartPhone_Accommodation_ExtendOrCheckOut)"],
            ["Self_SmartPhone_Business_Tutorial_CheckBiz", "Panel de control de mi negocio (Self_SmartPhone_Business_Tutorial_CheckBiz)"],
            ["Self_SmartPhone_HouseholdBiz_17", "Gestión avanzada de negocio familiar (Self_SmartPhone_HouseholdBiz_17)"],
            ["Self_SmartPhone_HouseholdBiz_Quit", "Cerrar jornada de negocio desde móvil (Self_SmartPhone_HouseholdBiz_Quit)"],
            ["Self_SmartPhone_Engagement_Breakup", "Romper compromiso por mensaje (Self_SmartPhone_Engagement_Breakup)"],
            ["Self_SmartPhone_HireLawyer", "Contratar abogado desde el móvil (Self_SmartPhone_HireLawyer)"],
            ["Self_Karma_SendRumor", "Difundir rumor positivo de Karma (Self_Karma_SendRumor)"],
            ["Self_Karma_SendBadRumor", "Difundir rumor malicioso de Karma (Self_Karma_SendBadRumor)"],
            ["Self_Karma_SendPrank", "Enviar broma telefónica (Self_Karma_SendPrank)"],
            ["Self_SendMessageSecretly", "Enviar mensaje secreto (Self_SendMessageSecretly)"],
            ["Self_Call_119", "Llamar a emergencias 119 (Self_Call_119)"],
            ["Self_Call_Exorcist", "Llamar a un exorcista (Self_Call_Exorcist)"],
            ["Self_Call_Babysitters", "Contratar niñera / canguro (Self_Call_Babysitters)"],
            ["Self_Takepic", "Tomar fotografía con cámara móvil (Self_Takepic)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "smartphone_cam",
          apiRef: "interaction.execute",
          detail: "21 acciones reales verificadas del submenú Teléfono Móvil."
        },
        {
          id: "locate_parked_vehicle",
          group: "1. Teléfono Móvil (Self_SmartPhone_*)",
          label: "Radar GPS en el móvil: Ver dónde está aparcado mi vehículo",
          type: "checkbox",
          defaultValue: "true",
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "world_vehicle",
          apiRef: "entity.scan_vehicles + entity.get_vehicle_info + Self_ReturnToParkingPlace",
          detail: "Escanea los vehículos de la escena, localiza el coche del Zoi y permite enfocar la cámara o regresar al parking."
        },
        {
          id: "parking_action",
          group: "1. Teléfono Móvil (Self_SmartPhone_*)",
          label: "Acción al localizar el vehículo aparcado (parking_action)",
          type: "select",
          defaultValue: "scan_and_toast",
          dependsOn: "locate_parked_vehicle",
          choices: [
            ["scan_and_toast", "Mostrar coordenadas GPS y distancia en notificación (scan_and_toast)"],
            ["focus_camera", "Mover cámara B1 hacia el vehículo aparcado (focus_camera)"],
            ["return_to_parking", "Ir hacia el vehículo aparcado (Self_ReturnToParkingPlace)"]
          ],
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "world_vehicle",
          apiRef: "entity.scan_vehicles + Self_ReturnToParkingPlace + visual.free_camera",
          detail: "Define cómo interactúa el Zoi o la cámara al localizar el coche."
        },
        {
          id: "cctv_office_monitor",
          group: "1. Teléfono Móvil (Self_SmartPhone_*)",
          label: "Cámara CCTV en el móvil: Ver oficina y empleados en tiempo real",
          type: "checkbox",
          defaultValue: "true",
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "business",
          apiRef: "household_biz.list_employees + get_employee_activities + visual.free_camera + view.set_filter",
          detail: "Conecta el móvil con las cámaras del negocio: lista empleados activos, lee qué están haciendo y activa vista CCTV en B1."
        },
        {
          id: "cctv_camera_filter",
          group: "1. Teléfono Móvil (Self_SmartPhone_*)",
          label: "Filtro visual del monitor CCTV (cctv_camera_filter)",
          type: "select",
          defaultValue: "SecurityCam",
          dependsOn: "cctv_office_monitor",
          choices: [
            ["SecurityCam", "Lente Cámara de Seguridad CCTV (SecurityCam)"],
            ["NightVision", "Visión Nocturna Infrarroja (NightVision)"],
            ["CleanHUD", "Imagen nítida sin filtro (CleanHUD)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          impact: "smartphone_cam",
          apiRef: "view.set_filter + visual.free_camera",
          detail: "Aplica filtro de monitor de vigilancia en el cliente B1."
        },
        {
          id: "manage_group",
          group: "2. Grupo (zoi_group.*)",
          label: "Gestionar Grupo de Zois (Crear, invitar, líder o caminar juntos)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "zoi_group.create / add_member / follow / move_to",
          detail: "Controla el submenú Grupo del Zoi principal para coordinar acompañantes o familia."
        },
        {
          id: "group_action",
          group: "2. Grupo (zoi_group.*)",
          label: "Operación de grupo (group_action)",
          type: "select",
          defaultValue: "follow",
          dependsOn: "manage_group",
          choices: [
            ["create", "Crear nuevo grupo (zoi_group.create)"],
            ["add_member", "Añadir Zoi secundario al grupo (zoi_group.add_member)"],
            ["remove_member", "Quitar miembro del grupo (zoi_group.remove_member)"],
            ["set_leader", "Designar líder del grupo (zoi_group.set_leader)"],
            ["follow", "Hacer que todo el grupo siga al Zoi principal (zoi_group.follow)"],
            ["move_to", "Desplazar el grupo en formación (zoi_group.move_to)"],
            ["disband", "Disolver el grupo actual (zoi_group.disband)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "zoi_group.*",
          detail: "Acción ejecutada sobre el sistema de grupos."
        },
        {
          id: "group_target_id",
          group: "2. Grupo (zoi_group.*)",
          label: "EntityId del acompañante / miembro (ej. Lara Ni = 20524)",
          type: "text",
          defaultValue: "20524",
          dependsOn: "manage_group",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "zoi_group.add_member",
          detail: "ID del Zoi que se une o interactúa con el grupo."
        },
        {
          id: "manage_business",
          group: "3. Negocio Propio (household_biz.*)",
          label: "Gestionar Negocio Propio y Empleados (household_biz.*)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "business",
          apiRef: "household_biz.get_info / spawn_random_employee / set_employee_activities",
          detail: "Permite dirigir tu tienda, oficina o restaurante directamente desde el menú del Zoi."
        },
        {
          id: "biz_action",
          group: "3. Negocio Propio (household_biz.*)",
          label: "Acción administrativa del negocio (biz_action)",
          type: "select",
          defaultValue: "get_info",
          dependsOn: "manage_business",
          choices: [
            ["get_info", "Auditar estado, clientes y ganancias (household_biz.get_info)"],
            ["spawn_random_employee", "Generar/contratar empleado de refuerzo (spawn_random_employee)"],
            ["set_employee_activities", "Asignar rol/tarea a los empleados (set_employee_activities)"],
            ["settle_tips", "Recaudar propinas acumuladas (household_biz.settle_tips)"],
            ["set_level", "Subir nivel de prestigio del negocio (household_biz.set_level)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "business",
          apiRef: "household_biz.*",
          detail: "Orden ejecutada sobre la franquicia o negocio del hogar."
        },
        {
          id: "biz_employee_task",
          group: "3. Negocio Propio (household_biz.*)",
          label: "Tarea asignada a empleados (biz_employee_task)",
          type: "select",
          defaultValue: "Cooking",
          dependsOn: "manage_business",
          choices: [
            ["Cooking", "Cocina y preparación (Cooking)"],
            ["Serving", "Atención al cliente y mesas (Serving)"],
            ["Cleaning", "Limpieza y mantenimiento (Cleaning)"],
            ["Cashier", "Cobro en caja y recepción (Cashier)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "business",
          apiRef: "household_biz.set_employee_activities",
          detail: "Actividad prioritaria para la plantilla del negocio."
        },
        {
          id: "run_personal_action",
          group: "4. Acciones Personales y Físicas (Self_*)",
          label: "Ejecutar Acción Personal / Postura Corporal (Self_*)",
          type: "checkbox",
          defaultValue: "false",
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "interaction.execute (Self_*)",
          detail: "Activa animaciones de postura, ejercicio, cuidado personal o selfie."
        },
        {
          id: "personal_bag_id",
          group: "4. Acciones Personales y Físicas (Self_*)",
          label: "Acción personal seleccionada (personal_bag_id)",
          type: "select",
          defaultValue: "Self_Pose_CatHeart",
          dependsOn: "run_personal_action",
          choices: [
            ["Self_Warmup_Active", "Estiramiento y calentamiento (Self_Warmup_Active)"],
            ["Self_Squat_NonAuto", "Serie de sentadillas (Self_Squat_NonAuto)"],
            ["Self_Floor_Sitting", "Sentarse en el suelo (Self_Floor_Sitting)"],
            ["Self_Floor_Sitting_CrossLeg", "Sentarse con piernas cruzadas (Self_Floor_Sitting_CrossLeg)"],
            ["Self_Pose_CatHeart", "Posar haciendo corazón felino (Self_Pose_CatHeart)"],
            ["Self_Money_Count_Perspective", "Contar fajo de billetes (Self_Money_Count_Perspective)"],
            ["Self_Appearance_Care", "Arreglarse frente al espejo (Self_Appearance_Care)"],
            ["Self_TakeSelfie_Perspective", "Tomarse un selfie (Self_TakeSelfie_Perspective)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "interaction.execute",
          detail: "Bag de interacción personal del propio Zoi."
        },
        {
          id: "run_interactive_skill",
          group: "5. Acción Interactiva y Ambiciones (Self_Busking_* / Self_Ambition_*)",
          label: "Activar Espectáculo Callejero (Busking) o Ambición (Self_Ambition_*)",
          type: "checkbox",
          defaultValue: "false",
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "interaction.execute + ambition.play",
          detail: "Inicia actuaciones musicales, baile callejero, fuegos artificiales o rutinas de ambición."
        },
        {
          id: "interactive_bag_id",
          group: "5. Acción Interactiva y Ambiciones (Self_Busking_* / Self_Ambition_*)",
          label: "Actuación o Ambición (interactive_bag_id)",
          type: "select",
          defaultValue: "Self_Busking_Song",
          dependsOn: "run_interactive_skill",
          choices: [
            ["Self_Busking_Song", "Cantar balada en vivo (Self_Busking_Song)"],
            ["Self_Busking_Rap", "Concierto de Rap callejero (Self_Busking_Rap)"],
            ["Self_Busking_Jazz", "Sesión de Jazz en vivo (Self_Busking_Jazz)"],
            ["Self_Busking_Rock", "Actuación de Rock (Self_Busking_Rock)"],
            ["Self_Busking_Dance", "Coreografía de baile Busking (Self_Busking_Dance)"],
            ["Self_Play_Fireworks", "Encender fuegos artificiales (Self_Play_Fireworks)"],
            ["Self_Rain_Poetry", "Declamar poesía bajo la lluvia (Self_Rain_Poetry)"],
            ["Self_Ambition_Casanova", "Ambición: Gran Romance / Casanova (Self_Ambition_Casanova)"],
            ["Self_Ambition_Property", "Ambición: Fortuna Inmobiliaria (Self_Ambition_Property)"],
            ["Self_Ambition_Career", "Ambición: Cumbre Profesional (Self_Ambition_Career)"],
            ["Self_Ambition_Cleaner", "Ambición: Perfección e Higiene (Self_Ambition_Cleaner)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "interaction.execute",
          detail: "Acción artística o meta vital del Zoi."
        },
        {
          id: "enable_cleaning_suite",
          group: "6. Limpiar (cleaning.*)",
          label: "Ejecutar Suite de Limpieza del Hogar / Parcela (cleaning.*)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "world_vehicle",
          apiRef: "cleaning.instant_clean / cleaning.freeze_cleanliness / quality_of_life.stop_cleaning",
          detail: "Permite limpiar al instante toda la casa, congelar la suciedad o cancelar tareas de limpieza."
        },
        {
          id: "cleaning_mode",
          group: "6. Limpiar (cleaning.*)",
          label: "Modo de limpieza (cleaning_mode)",
          type: "select",
          defaultValue: "instant_clean",
          dependsOn: "enable_cleaning_suite",
          choices: [
            ["instant_clean", "Limpieza total instantánea (cleaning.instant_clean)"],
            ["freeze_cleanliness", "Congelar estado impoluto permanente (cleaning.freeze_cleanliness)"],
            ["stop_cleaning", "Detener animación de limpieza actual (quality_of_life.stop_cleaning)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "world_vehicle",
          apiRef: "cleaning.*",
          detail: "Comportamiento del subsistema de higiene del solar."
        },
        {
          id: "quick_change_outfit",
          group: "7. Cambiarse de Ropa (Self_OutfitCategory_*)",
          label: "Cambio Rápido de Ropa y Tinte desde el menú del Zoi",
          type: "checkbox",
          defaultValue: "true",
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "appearance.set_outfit_category + Self_OutfitCategory_*",
          detail: "Cambia al instante entre las 10 categorías de vestuario y aplica color personalizado."
        },
        {
          id: "self_outfit_category",
          group: "7. Cambiarse de Ropa (Self_OutfitCategory_*)",
          label: "Categoría de atuendo (self_outfit_category)",
          type: "select",
          defaultValue: "Everyday",
          dependsOn: "quick_change_outfit",
          choices: [
            ["Everyday", "Diario / Casual (Everyday)"],
            ["Formal", "Etiqueta / Formal (Formal)"],
            ["School", "Uniforme Escolar (School)"],
            ["Sleep", "Ropa de Dormir (Sleep)"],
            ["Party", "Fiesta / Noche (Party)"],
            ["Sports", "Deporte / Fitness (Sports)"],
            ["Swimwear", "Traje de Baño (Swimwear)"],
            ["Summer", "Clima Cálido / Verano (Summer)"],
            ["Winter", "Clima Frío / Invierno (Winter)"],
            ["RainCoat", "Impermeable de Lluvia (RainCoat)"]
          ],
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "appearance.set_outfit_category",
          detail: "Las 10 categorías reales del submenú Cambiarse de ropa."
        },
        {
          id: "self_garment_tint",
          group: "7. Cambiarse de Ropa (Self_OutfitCategory_*)",
          label: "Color hexadecimal de prenda principal (self_garment_tint)",
          type: "text",
          defaultValue: "#10B981",
          dependsOn: "quick_change_outfit",
          env: "B1",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "appearance.set_garment_color",
          detail: "Tinte RGB inmediato sobre el atuendo activo."
        },
        {
          id: "enable_ai_emote",
          group: "8. Emote IA y Expresión (facial.set + motion.play + smartzoi.request_query_slm)",
          label: "Activar Emote IA, Expresión Facial y Bocadillo SLM",
          type: "checkbox",
          defaultValue: "true",
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "facial.set + entity.show_speech_bubble + smartzoi.request_query_slm",
          detail: "Combina gesto facial B1, bocadillo de diálogo en pantalla y consulta al modelo local SmartZoi SLM en B2."
        },
        {
          id: "facial_preset",
          group: "8. Emote IA y Expresión (facial.set + motion.play + smartzoi.request_query_slm)",
          label: "Expresión facial (facial_preset)",
          type: "select",
          defaultValue: "Happy",
          dependsOn: "enable_ai_emote",
          choices: [
            ["Happy", "Alegre / Sonriente (Happy)"],
            ["Angry", "Molesto / Serio (Angry)"],
            ["Sad", "Triste / Pensativo (Sad)"],
            ["Surprised", "Asombrado (Surprised)"],
            ["Flirty", "Seductor / Coqueto (Flirty)"]
          ],
          env: "B1",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "facial.set",
          detail: "Morfología facial expresiva en B1."
        },
        {
          id: "speech_bubble_text",
          group: "8. Emote IA y Expresión (facial.set + motion.play + smartzoi.request_query_slm)",
          label: "Texto del bocadillo sobre la cabeza del Zoi (speech_bubble_text)",
          type: "text",
          defaultValue: "Revisando mi coche y negocio desde el móvil",
          dependsOn: "enable_ai_emote",
          env: "B1",
          status: "VERIFICADA",
          impact: "smartphone_cam",
          apiRef: "entity.show_speech_bubble",
          detail: "Muestra el globo de diálogo directamente sobre el Zoi."
        },
        {
          id: "query_slm_prompt",
          group: "8. Emote IA y Expresión (facial.set + motion.play + smartzoi.request_query_slm)",
          label: "Instrucción cognitiva para SmartZoi IA (query_slm_prompt)",
          type: "text",
          defaultValue: "Saluda con entusiasmo a tu familia",
          dependsOn: "enable_ai_emote",
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "smartzoi.request_query_slm",
          detail: "Prompt enviado al motor SLM de pensamiento del Zoi."
        }
      ]
    },
    zoi_target_social: {
      id: "zoi_target_social",
      title: "Menú Contextual Zoi Secundario · Pareja, Familia y NPCs",
      badge: "TalkSelection + Romance + Karma + DataPatch",
      bridgeOperation: "zoi_social.context_suite",
      defaultEvent: "interaction.started",
      summary: "Configura las opciones al hacer clic sobre otro Zoi (pareja, marido/esposa como Lara Ni 20524, hijo, amigo o desconocido): submenús de Vida diaria, Romance, Cariño, Charla, Humor, Conflicto, Karma/Fantasma y creación de nuevas opciones en el menú contextual (TalkSelection).",
      engineRules: [
        "Submenús TalkSelection: al hacer clic sobre otro Zoi, el motor agrupa las interacciones en categorías (DailyLife, Romance, Affection, Chatter, Humor, Conflict, Ghost, Exorcist, Parenting, HouseholdBiz, GroupContext).",
        "Regla de Visibilidad Social: muchas interacciones de pareja o familia están filtradas por InteractionVisibleConditionIds (nivel de relación, edad o estado civil). Puedes saltar ese filtro con data.patch o fijando relationships.set_full + marriage.marry en B2.",
        "Inyección en Menú Contextual: modkit_build_talk_patch y data.patch sobre Talk / TalkSelection permiten añadir tus propias frases, buffs y animaciones al menú emergente del Zoi secundario.",
        "↳ Inversión de Posesión Dinámica (runtime_host_swapping) y Selección Multi-Miembro Familiar (household.get_members): cuando se ejecuta una acción social cruzada donde el emisor no sea el Zoi principal activo o se quiera actuar sobre varios miembros de la familia (ej. gastar una broma a todos o solo a los marcados sin cambiar manualmente de Zoi host), el nodo puente fuerza temporalmente el cambio de contexto en el motor (entity.get_possessed + entity.possess en B2 / character.possess en B1, equivalentes reales de player.possess_zoi), dispara la interacción en TalkSelection y restaura el foco al Zoi original al finalizar (interaction.finished)."
      ],
      options: [
        {
          id: "talk_submenu_category",
          group: "1. Categoría de Submenú Social (TalkSelection)",
          label: "Categoría del menú al hacer clic en el Zoi secundario (TalkSelection)",
          type: "select",
          defaultValue: "Romance",
          choices: [
            ["DailyLife", "Vida diaria (DailyLife)"],
            ["Romance", "Romance (Romance)"],
            ["Affection", "Cariño y afecto (Affection)"],
            ["Chatter", "Charla casual (Chatter)"],
            ["Humor", "Humor y bromas (Humor)"],
            ["Conflict", "Conflicto y discusión (Conflict)"],
            ["Ghost", "Karma · Fantasma (Ghost)"],
            ["Exorcist", "Karma · Exorcista (Exorcist)"],
            ["Parenting", "Crianza e hijos (Parenting)"],
            ["HouseholdBiz", "Negocio familiar (HouseholdBiz)"],
            ["GroupContext", "Acciones de grupo (GroupContext)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "TalkSelection.Category",
          detail: "Rama del menú contextual que se despliega al seleccionar a otro Zoi."
        },
        {
          id: "target_zoi_id",
          group: "1. Categoría de Submenú Social (TalkSelection)",
          label: "ID del Zoi secundario / pareja (ej. Lara Ni = 20524)",
          type: "text",
          defaultValue: "20524",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute target_entity_id",
          detail: "EntityId del cónyuge, familiar, empleado o NPC destinatario."
        },
        {
          id: "run_daily_talk",
          group: "2. Interacciones de Vida Diaria y Charla (DailyLife / Chatter)",
          label: "Ejecutar diálogo de Vida Diaria o Charla (DailyLife / Chatter)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute (DailyLife / Chatter)",
          detail: "Encola una conversación cotidiana o confidencia con el Zoi objetivo."
        },
        {
          id: "daily_bag_id",
          group: "2. Interacciones de Vida Diaria y Charla (DailyLife / Chatter)",
          label: "Tema de conversación cotidiana (daily_bag_id)",
          type: "select",
          defaultValue: "Co_ExpectantParents_03",
          dependsOn: "run_daily_talk",
          choices: [
            ["Co_ExpectantParents_03", "Hablar sobre futuros hijos y familia (Co_ExpectantParents_03)"],
            ["Int_DailyLife_Lv1_01", "Ponerse al día sobre la rutina (Int_DailyLife_Lv1_01)"],
            ["Int_Chatter_Gossip_01", "Contar rumor / cotilleo local (Int_Chatter_Gossip_01)"],
            ["Int_Thoughts_Share_01", "Compartir reflexiones sinceras (Int_Thoughts_Share_01)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute",
          detail: "Bag de conversación del submenú Vida diaria / Charla."
        },
        {
          id: "run_romance_suite",
          group: "3. Romance y Vínculo de Pareja (Romance / marriage.*)",
          label: "Activar interacción Romántica y Estado Civil (Romance / marriage.*)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute (Romance) + marriage.*",
          detail: "Permite gestos románticos de pareja, baile cooperativo y cambio de estado matrimonial."
        },
        {
          id: "romance_bag_id",
          group: "3. Romance y Vínculo de Pareja (Romance / marriage.*)",
          label: "Interacción romántica (romance_bag_id)",
          type: "select",
          defaultValue: "Co_Family_Spouse_R05",
          dependsOn: "run_romance_suite",
          choices: [
            ["Co_Family_Spouse_R05", "Caricia romántica de cónyuges (Co_Family_Spouse_R05)"],
            ["Co_Family_Spouse_R08", "Beso apasionado de pareja (Co_Family_Spouse_R08)"],
            ["Coop_CoupleDance01", "Baile romántico en pareja (Coop_CoupleDance01)"],
            ["Int_Romance_Lv1_16_Propose", "Pedir matrimonio de rodillas (Int_Romance_Lv1_16_Propose)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute",
          detail: "Acción cooperativa del submenú Romance."
        },
        {
          id: "marriage_action",
          group: "3. Romance y Vínculo de Pareja (Romance / marriage.*)",
          label: "Cambio de estado civil directo (marriage_action)",
          type: "select",
          defaultValue: "none",
          dependsOn: "run_romance_suite",
          choices: [
            ["none", "Conservar estado civil actual (none)"],
            ["engage", "Comprometer a la pareja (marriage.engage)"],
            ["marry", "Casar inmediatamente como esposos (marriage.marry)"],
            ["divorce", "Divorciar pareja (marriage.divorce)"],
            ["break_engagement", "Cancelar compromiso (marriage.break_engagement)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "marriage.engage / marry / divorce / break_engagement",
          detail: "Modifica el vínculo legal y familiar en B2."
        },
        {
          id: "run_affection_suite",
          group: "4. Cariño, Familia y Crianza (Affection / Parenting)",
          label: "Ejecutar gesto de Cariño o Crianza de Hijos (Affection / Parenting)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute (Affection / Parenting)",
          detail: "Acciones tiernas con la pareja, hijos o bebés del hogar."
        },
        {
          id: "affection_bag_id",
          group: "4. Cariño, Familia y Crianza (Affection / Parenting)",
          label: "Muestra de cariño o cuidado infantil (affection_bag_id)",
          type: "select",
          defaultValue: "Co_Family_Spouse_A03",
          dependsOn: "run_affection_suite",
          choices: [
            ["Co_Family_Spouse_A03", "Abrazo afectuoso de pareja (Co_Family_Spouse_A03)"],
            ["Co_Affection_Lv4_02", "Demostración de cariño incondicional (Co_Affection_Lv4_02)"],
            ["Baby_Care", "Atender y cuidar al bebé (Baby_Care)"],
            ["Baby_Bonding", "Estrechar lazos con el bebé (Baby_Bonding)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute",
          detail: "Bag de afecto familiar o crianza."
        },
        {
          id: "run_conflict_or_humor",
          group: "5. Humor y Conflicto (Humor / Conflict)",
          label: "Activar Broma, Discusión o Borrado de Memoria (Humor / Conflict)",
          type: "checkbox",
          defaultValue: "false",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute (Humor / Conflict) + relationships.obliviate",
          detail: "Permite bromear, discutir o reiniciar los recuerdos entre ambos Zois."
        },
        {
          id: "social_tone_bag_id",
          group: "5. Humor y Conflicto (Humor / Conflict)",
          label: "Acción de humor o conflicto (social_tone_bag_id)",
          type: "select",
          defaultValue: "Int_Humor_Joke_01",
          dependsOn: "run_conflict_or_humor",
          choices: [
            ["Int_Humor_Joke_01", "Contar chiste divertido (Int_Humor_Joke_01)"],
            ["Int_Conflict_Argue_01", "Iniciar discusión tensa (Int_Conflict_Argue_01)"],
            ["Int_Conflict_Breakup", "Ruptura dramática (Int_Conflict_Breakup)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute",
          detail: "Interacción de tono humorístico o conflictivo."
        },
        {
          id: "memory_wipe_obliviate",
          group: "5. Humor y Conflicto (Humor / Conflict)",
          label: "Olvidar historial de relación (relationships.obliviate)",
          type: "checkbox",
          defaultValue: "false",
          dependsOn: "run_conflict_or_humor",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "relationships.obliviate",
          detail: "Borra la memoria relacional entre ambos Zois para empezar desde cero."
        },
        {
          id: "adjust_relationship_score",
          group: "6. Ajuste de Nivel de Relación y Karma (relationships.* / environment.reset_karma)",
          label: "Modificar Puntuación de Relación y Karma con el Zoi secundario",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "relationships.set_full / set_worst / set_value_between + environment.reset_karma",
          detail: "Ajusta directamente las barras de afecto, amistad, romance y karma."
        },
        {
          id: "relation_preset",
          group: "6. Ajuste de Nivel de Relación y Karma (relationships.* / environment.reset_karma)",
          label: "Preset de relación y karma (relation_preset)",
          type: "select",
          defaultValue: "set_full",
          dependsOn: "adjust_relationship_score",
          choices: [
            ["set_full", "Relación al 100% en todas las barras (relationships.set_full)"],
            ["set_worst", "Relación al mínimo / rivalidad (relationships.set_worst)"],
            ["custom_value", "Puntos personalizados + Limpiar Karma (custom_value)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "relationships.*",
          detail: "Ajuste instantáneo del nivel de vínculo."
        },
        {
          id: "relation_Delta",
          group: "6. Ajuste de Nivel de Relación y Karma (relationships.* / environment.reset_karma)",
          label: "Valor numérico de relación (-100 a 100) (relation_Delta)",
          type: "text",
          defaultValue: "80",
          dependsOn: "adjust_relationship_score",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "relationships.set_value_between",
          detail: "Puntuación aplicada cuando se elige valor personalizado."
        },
        {
          id: "inject_custom_talk_option",
          group: "7. Inyectar Opción Nueva en el Menú Contextual (modkit_build_talk_patch / data.patch)",
          label: "Añadir Opción Personalizada al Menú Contextual (Talk / TalkSelection)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "datatable_patch",
          apiRef: "modkit_build_talk_patch + data.patch (Talk / TalkSelection)",
          detail: "Crea e inyecta un nuevo botón de diálogo en el menú emergente al hacer clic sobre el Zoi."
        },
        {
          id: "custom_talk_name",
          group: "7. Inyectar Opción Nueva en el Menú Contextual (modkit_build_talk_patch / data.patch)",
          label: "Texto visible del nuevo botón en el menú (custom_talk_name)",
          type: "text",
          defaultValue: "Preguntar por coche y negocio",
          dependsOn: "inject_custom_talk_option",
          env: "B2",
          status: "VERIFICADA",
          impact: "datatable_patch",
          apiRef: "Talk.TextId / TalkSelection",
          detail: "Etiqueta que verá el jugador en el submenú social."
        },
        {
          id: "custom_talk_tone",
          group: "7. Inyectar Opción Nueva en el Menú Contextual (modkit_build_talk_patch / data.patch)",
          label: "Tono emocional del diálogo (custom_talk_tone)",
          type: "select",
          defaultValue: "Positive",
          dependsOn: "inject_custom_talk_option",
          choices: [
            ["Positive", "Positivo / Amigable (Positive)"],
            ["Negative", "Negativo / Confrontación (Negative)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "datatable_patch",
          apiRef: "modkit_build_talk_patch",
          detail: "Define la reacción base del Zoi interlocutor."
        },
        {
          id: "custom_talk_buff",
          group: "7. Inyectar Opción Nueva en el Menú Contextual (modkit_build_talk_patch / data.patch)",
          label: "Efecto / Buff otorgado al conversar (custom_talk_buff)",
          type: "select",
          defaultValue: "Flutter",
          dependsOn: "inject_custom_talk_option",
          choices: [
            ["Flutter", "Ilusión / Mariposas (Flutter)"],
            ["Confident", "Seguridad / Confianza (Confident)"],
            ["Joyful", "Alegría compartida (Joyful)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "datatable_patch",
          apiRef: "buff.add + Talk",
          detail: "Buff aplicado tras completar la interacción."
        },
        {
          id: "unlock_visibility_conditions",
          group: "7. Inyectar Opción Nueva en el Menú Contextual (modkit_build_talk_patch / data.patch)",
          label: "Saltar requisitos de visibilidad (InteractionVisibleConditionIds = [])",
          type: "checkbox",
          defaultValue: "true",
          dependsOn: "inject_custom_talk_option",
          env: "B2",
          status: "VERIFICADA",
          impact: "datatable_patch",
          apiRef: "data.patch InteractionVisibleConditionIds",
          detail: "Garantiza que la opción aparezca siempre aunque no exista amistad o matrimonio previo."
        },
        {
          id: "enable_multi_family_targets",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "Seleccionar múltiples miembros de la familia / grupo sin cambiar de Zoi Host (household.get_members)",
          type: "checkbox",
          defaultValue: "true",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "household.get_members + interaction.execute",
          detail: "Permite actuar sobre toda la familia o solo sobre los miembros marcados (ej. gastar una broma a varios) sin tener que cambiar manualmente de Zoi."
        },
        {
          id: "family_target_scope",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "Alcance de selección familiar (family_target_scope)",
          type: "select",
          defaultValue: "selected_members",
          dependsOn: "enable_multi_family_targets",
          choices: [
            ["selected_members", "Solo miembros marcados / seleccionados (selected_member_ids)"],
            ["all_household", "Todos los miembros de la familia a la vez (household.get_members)"],
            ["single_target", "Solo el Zoi secundario principal (target_zoi_id)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "household.get_members",
          detail: "Define si la acción se aplica a una selección concreta de Zois o a toda la unidad doméstica."
        },
        {
          id: "selected_member_ids",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "IDs de los miembros de la familia seleccionados (separados por coma) (selected_member_ids)",
          type: "text",
          defaultValue: "20524,20525,20526",
          dependsOn: "enable_multi_family_targets",
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "household.get_members members[].entity_id",
          detail: "Marca exactamente sobre qué miembros de la familia actuar (ej. Pareja 20524, Hijo 20525, Hermano 20526)."
        },
        {
          id: "batch_family_action",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "Acción en lote sobre los miembros seleccionados (batch_family_action)",
          type: "select",
          defaultValue: "prank_all_selected",
          dependsOn: "enable_multi_family_targets",
          choices: [
            ["prank_all_selected", "Gastar broma en lote a los seleccionados (Int_Humor_Joke_01 + Self_Karma_SendPrank)"],
            ["current_suite_actions", "Ejecutar todas las acciones sociales activas arriba sobre cada seleccionado"],
            ["gift_affection_all", "Dar abrazo y cariño familiar a los seleccionados (Co_Family_Spouse_A03)"],
            ["summon_and_greet_all", "Reunir aquí a los seleccionados y saludar (movement.summon + Int_DailyLife_Lv1_01)"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "interaction.execute + movement.summon",
          detail: "Acción que se ejecuta automáticamente para cada miembro marcado de la familia."
        },
        {
          id: "runtime_host_swapping",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "Inversión de Posesión Dinámica (runtime_host_swapping · entity.possess + interaction.finished)",
          type: "checkbox",
          defaultValue: "true",
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "entity.get_possessed + entity.possess + character.possess + interaction.finished",
          detail: "Cuando el emisor no es el Zoi principal activo, cambia temporalmente el contexto al target_host_id, dispara TalkSelection y restaura el foco al Zoi original en interaction.finished."
        },
        {
          id: "host_swap_mode",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "Modo de Inversión de Host (host_swap_mode)",
          type: "select",
          defaultValue: "full_possess_and_restore",
          dependsOn: "runtime_host_swapping",
          choices: [
            ["full_possess_and_restore", "Posesión temporal (entity.possess + character.possess) y restaurar en interaction.finished"],
            ["invert_b2_no_cam_loss", "Inversión silenciosa en B2 sin mover cámara (entity_id=target_host -> target=original_host)"],
            ["sequential_family_chain", "Cadena multi-miembro: cada familiar seleccionado toma posesión, actúa y devuelve el foco"]
          ],
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "entity.possess + character.possess + interaction.execute",
          detail: "Elige entre cambio completo de posesión con restauración automática o delegación silenciosa en B2 sin cambiar tu cámara."
        },
        {
          id: "target_host_id",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "ID del Zoi emisor temporal (target_host_id)",
          type: "text",
          defaultValue: "20524",
          dependsOn: "runtime_host_swapping",
          env: "B1+B2",
          status: "VERIFICADA",
          impact: "target_zoi",
          apiRef: "entity.possess entity_id / character.possess character_id",
          detail: "Zoi que asumirá temporalmente el rol de emisor antes de devolver el foco al Zoi original."
        },
        {
          id: "restore_on_event",
          group: "8. Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica (runtime_host_swapping)",
          label: "Momento de restauración del Zoi original (restore_on_event)",
          type: "select",
          defaultValue: "interaction.finished",
          dependsOn: "runtime_host_swapping",
          choices: [
            ["interaction.finished", "Al finalizar la interacción en el motor (interaction.finished)"],
            ["immediate_after_queue", "Inmediatamente tras encolar la acción en TalkSelection"]
          ],
          env: "B2",
          status: "VERIFICADA",
          impact: "self_zoi",
          apiRef: "inzoi.event.on('interaction.finished') -> entity.possess",
          detail: "Controla cuándo se devuelve automáticamente el foco al Zoi principal original."
        }
      ]
    }
  };

  const IMPACT_SCOPES = {
    all: { id: "all", label: "Todos los ámbitos", badge: "🌐 Todos" },
    self_zoi: { id: "self_zoi", label: "🧍 Zoi Principal", badge: "🧍 Zoi Principal" },
    target_zoi: { id: "target_zoi", label: "👫 Zoi Secundario / Pareja", badge: "👫 Zoi Secundario / Pareja" },
    smartphone_cam: { id: "smartphone_cam", label: "📱 Móvil / Cámara / HUD B1", badge: "📱 Móvil / Cámara B1" },
    business: { id: "business", label: "🏪 Negocio / Empleados", badge: "🏪 Negocio / Empleados B2" },
    world_vehicle: { id: "world_vehicle", label: "🚗 Mundo / Vehículos / Objetos", badge: "🚗 Mundo / Vehículos / Solar" },
    datatable_patch: { id: "datatable_patch", label: "🗂️ Menús / DataTables", badge: "🗂️ Menús / DataTables" }
  };

  function getOptionImpactMeta(domainId, opt) {
    if (!opt || typeof opt !== "object") {
      return {
        impactId: "self_zoi",
        impactLabel: IMPACT_SCOPES.self_zoi.label,
        impactBadge: IMPACT_SCOPES.self_zoi.badge,
        childCount: 0,
        childIds: [],
        childLabels: []
      };
    }
    const tree = CONTEXT_ACTION_TREES[domainId];
    const allOpts = tree?.options || [];
    const childOpts = allOpts.filter(candidate => candidate.dependsOn === opt.id);
    let impactId = opt.impact || "";
    if (!impactId) {
      const ref = `${opt.id} ${opt.apiRef || ""} ${opt.label || ""}`.toLowerCase();
      if (ref.includes("talk") || ref.includes("data.patch")) impactId = "datatable_patch";
      else if (ref.includes("household_biz") || ref.includes("currency")) impactId = "business";
      else if (ref.includes("smartphone") || ref.includes("camera") || ref.includes("filter") || ref.includes("speech_bubble")) impactId = "smartphone_cam";
      else if (ref.includes("partner") || ref.includes("target_") || ref.includes("social") || ref.includes("marriage") || ref.includes("relationship")) impactId = "target_zoi";
      else if (domainId === "vehicle" || domainId === "furniture" || domainId === "weather_time" || ref.includes("cleaning") || ref.includes("vehicle")) impactId = "world_vehicle";
      else impactId = "self_zoi";
    }
    const scopeMeta = IMPACT_SCOPES[impactId] || IMPACT_SCOPES.self_zoi;
    return {
      impactId: scopeMeta.id,
      impactLabel: scopeMeta.label,
      impactBadge: scopeMeta.badge,
      childCount: childOpts.length,
      childIds: childOpts.map(c => c.id),
      childLabels: childOpts.map(c => c.label.split("(")[0].trim())
    };
  }

  function defaultOptionsForContextTree(domainId) {
    const tree = CONTEXT_ACTION_TREES[domainId];
    if (!tree) return {};
    const out = {};
    for (const opt of tree.options) {
      out[opt.id] = opt.defaultValue;
    }
    return out;
  }

  function buildGraphFromContextTree(domainId, userOptions = {}, triggerEvent = "") {
    const tree = CONTEXT_ACTION_TREES[domainId];
    if (!tree) throw new Error(`Dominio contextual desconocido: ${domainId}`);
    const mergedOptions = { ...defaultOptionsForContextTree(domainId), ...(userOptions || {}) };
    const bridgeOp = tree.bridgeOperation;
    const bSchema = BRIDGE_CATALOG[bridgeOp];
    const bridgeParams = { ...(bSchema?.defaults || {}) };
    for (const key of Object.keys(bSchema?.params || {})) {
      if (mergedOptions[key] !== undefined) {
        bridgeParams[key] = String(mergedOptions[key]);
      }
    }
    const chosenEvent = EVENT_CATALOG[triggerEvent] ? triggerEvent : (tree.defaultEvent || "character.overlap_begin");
    const doneStateName = `${domainId}_applied`;
    const candidateGraph = {
      version: 2,
      binding: "Zoi:*",
      initialState: "idle",
      nodes: [
        { id: "state-idle", type: "state", x: 35, y: 45, data: { name: "idle" } },
        { id: "evt-context", type: "event", x: 35, y: 170, data: { event: chosenEvent, whenState: "idle" } },
        {
          id: `bridge-${domainId}`,
          type: "bridge",
          x: 345,
          y: 155,
          data: {
            operation: bridgeOp,
            reqId: "1",
            params: bridgeParams
          }
        },
        {
          id: "act-toast-ok",
          type: "action",
          x: 660,
          y: 95,
          data: {
            command: "toast.show",
            args: "",
            params: { message: "OK", lifetime: "3", immediate: "true" },
            scope: "B1"
          }
        },
        { id: `state-${domainId}-ok`, type: "state", x: 960, y: 95, data: { name: doneStateName } },
        { id: `state-${domainId}-err`, type: "state", x: 660, y: 270, data: { name: `${domainId}_error` } }
      ],
      edges: [
        { kind: "exec", from: "evt-context", port: "next", to: `bridge-${domainId}` },
        { kind: "exec", from: `bridge-${domainId}`, port: "ok", to: "act-toast-ok" },
        { kind: "data", from: `bridge-${domainId}`, port: "payload:result", to: "act-toast-ok", input: "param:message" },
        { kind: "exec", from: "act-toast-ok", port: "next", to: `state-${domainId}-ok` },
        { kind: "exec", from: `bridge-${domainId}`, port: "error", to: `state-${domainId}-err` }
      ]
    };
    normalizeGraph(candidateGraph);
    return {
      id: `blueprint-${domainId}`,
      title: `Blueprint: ${tree.title}`,
      description: tree.summary,
      environment: "B1",
      payload: { entity_id: 1, other_entity_id: 2, interaction_bag_id: "Self_GoHome" },
      graph: candidateGraph
    };
  }

  const BLUEPRINT_IDEA_PRESETS = [
    {
      id: "mobile_cctv_gps",
      icon: "📱",
      title: "Móvil CCTV Oficina + GPS Coche",
      description: "Desde el móvil de Lina Tres: localiza su coche aparcado por GPS y conecta con las cámaras CCTV de su negocio y empleados.",
      triggerEvent: "interaction.started",
      domains: ["zoi_self_menu"],
      optionsByDomain: {
        zoi_self_menu: {
          use_smartphone: "true",
          smartphone_bag_id: "Self_SmartPhone_Business_Tutorial_CheckBiz",
          locate_parked_vehicle: "true",
          parking_action: "focus_camera",
          cctv_office_monitor: "true",
          cctv_camera_filter: "SecurityCam",
          manage_business: "true",
          biz_action: "get_info",
          manage_group: "false",
          enable_ai_emote: "true",
          speech_bubble_text: "Vigilando mi oficina y el parking desde el móvil"
        }
      }
    },
    {
      id: "vip_bodyguard_squad",
      icon: "🕶️",
      title: "Séquito VIP Guardaespaldas",
      description: "Combina Grupo + Vestimenta Formal: reúne a tu acompañante (20524), os viste de gala con gafas y hace que te escolte.",
      triggerEvent: "interaction.started",
      domains: ["zoi_self_menu", "appearance"],
      optionsByDomain: {
        zoi_self_menu: {
          use_smartphone: "false",
          locate_parked_vehicle: "false",
          cctv_office_monitor: "false",
          manage_group: "true",
          group_action: "follow",
          group_target_id: "20524",
          quick_change_outfit: "true",
          self_outfit_category: "Formal",
          self_garment_tint: "#111827"
        },
        appearance: {
          change_outfit: "true",
          outfit_category: "Formal",
          tint_garment: "true",
          color_hex: "#111827",
          sync_trait: "true",
          trait_id: "Trait_Charismatic"
        }
      }
    },
    {
      id: "cupid_romantic_dance",
      icon: "💘",
      title: "Cupido y Baile Romántico (Lara Ni)",
      description: "Sube la relación al 100% con tu pareja (20524), inicia baile romántico cooperativo e inyecta nueva opción en el menú Romance.",
      triggerEvent: "interaction.started",
      domains: ["zoi_target_social", "life"],
      optionsByDomain: {
        zoi_target_social: {
          talk_submenu_category: "Romance",
          target_zoi_id: "20524",
          run_romance_suite: "true",
          romance_bag_id: "Coop_CoupleDance01",
          marriage_action: "marry",
          adjust_relationship_score: "true",
          relation_preset: "set_full",
          inject_custom_talk_option: "true",
          custom_talk_name: "Cita sorpresa y baile VIP"
        },
        life: {
          refill_needs: "true",
          need_category: "Energy",
          boost_emotion: "true",
          emotion_id: "Flirty",
          create_relationship: "true",
          target_entity_id: "20524",
          relationship_type: "Spouse"
        }
      }
    },
    {
      id: "family_prank_host_swap",
      icon: "🎭",
      title: "Broma Familiar Multi-Zoi + Inversión de Host",
      description: "Actúa sobre los miembros de la familia marcados (20524,20525,20526) sin cambiar manualmente de Zoi: gasta bromas en lote o invierte la posesión (entity.possess) y restaura el foco en interaction.finished.",
      triggerEvent: "interaction.started",
      domains: ["zoi_target_social"],
      optionsByDomain: {
        zoi_target_social: {
          talk_submenu_category: "Humor",
          target_zoi_id: "20524",
          run_daily_talk: "false",
          run_romance_suite: "false",
          run_affection_suite: "false",
          run_conflict_or_humor: "true",
          social_tone_bag_id: "Int_Humor_Joke_01",
          enable_multi_family_targets: "true",
          family_target_scope: "selected_members",
          selected_member_ids: "20524,20525,20526",
          batch_family_action: "prank_all_selected",
          runtime_host_swapping: "true",
          host_swap_mode: "full_possess_and_restore",
          target_host_id: "20524",
          restore_on_event: "interaction.finished"
        }
      }
    },
    {
      id: "ai_emote_slm",
      icon: "🧠",
      title: "Emote IA + Bocadillo SLM",
      description: "Activa expresión facial, bocadillo de diálogo en vivo y consulta cognitiva SmartZoi SLM junto con espectáculo Busking.",
      triggerEvent: "interaction.started",
      domains: ["zoi_self_menu"],
      optionsByDomain: {
        zoi_self_menu: {
          use_smartphone: "false",
          locate_parked_vehicle: "false",
          cctv_office_monitor: "false",
          manage_group: "false",
          manage_business: "false",
          run_personal_action: "true",
          personal_bag_id: "Self_Pose_CatHeart",
          run_interactive_skill: "true",
          interactive_bag_id: "Self_Busking_Song",
          enable_ai_emote: "true",
          facial_preset: "Happy",
          speech_bubble_text: "¡Hora de brillar con IA en directo!",
          query_slm_prompt: "Canta y anima a todos los vecinos del barrio"
        }
      }
    },
    {
      id: "full_mix_self_partner",
      icon: "⚡",
      title: "Mix Completo Zoi Principal + Pareja",
      description: "Combina en un mismo flujo el menú propio de Lina Tres (Móvil + CCTV + Coche) con el menú social de su pareja Lara Ni (20524).",
      triggerEvent: "interaction.started",
      domains: ["zoi_self_menu", "zoi_target_social"],
      optionsByDomain: {
        zoi_self_menu: defaultOptionsForContextTree("zoi_self_menu"),
        zoi_target_social: defaultOptionsForContextTree("zoi_target_social")
      }
    }
  ];

  function buildMultiDomainGraphFromContextTrees(domainIds = [], optionsByDomain = {}, triggerEvent = "") {
    const validDomains = (Array.isArray(domainIds) ? domainIds : []).filter(id => CONTEXT_ACTION_TREES[id]);
    if (validDomains.length === 0) throw new Error("Debes seleccionar al menos una categoría contextual válida.");
    if (validDomains.length === 1) {
      const singleId = validDomains[0];
      return buildGraphFromContextTree(singleId, optionsByDomain[singleId] || {}, triggerEvent);
    }
    const firstTree = CONTEXT_ACTION_TREES[validDomains[0]];
    const chosenEvent = EVENT_CATALOG[triggerEvent] ? triggerEvent : (firstTree.defaultEvent || "interaction.started");
    const nodes = [
      { id: "state-idle", type: "state", x: 35, y: 45, data: { name: "idle" } },
      { id: "evt-context", type: "event", x: 35, y: 170, data: { event: chosenEvent, whenState: "idle" } }
    ];
    const edges = [];
    let prevNodeId = "evt-context";
    let prevPort = "next";

    validDomains.forEach((domainId, idx) => {
      const tree = CONTEXT_ACTION_TREES[domainId];
      const mergedOptions = { ...defaultOptionsForContextTree(domainId), ...(optionsByDomain[domainId] || {}) };
      const bridgeOp = tree.bridgeOperation;
      const bSchema = BRIDGE_CATALOG[bridgeOp];
      const bridgeParams = { ...(bSchema?.defaults || {}) };
      for (const key of Object.keys(bSchema?.params || {})) {
        if (mergedOptions[key] !== undefined) {
          bridgeParams[key] = String(mergedOptions[key]);
        }
      }
      const bridgeId = `bridge-${domainId}`;
      nodes.push({
        id: bridgeId,
        type: "bridge",
        x: 330 + idx * 300,
        y: 155,
        data: {
          operation: bridgeOp,
          reqId: String(idx + 1),
          params: bridgeParams
        }
      });
      edges.push({ kind: "exec", from: prevNodeId, port: prevPort, to: bridgeId });
      edges.push({ kind: "exec", from: bridgeId, port: "error", to: "state-mix-err" });
      prevNodeId = bridgeId;
      prevPort = "ok";
    });

    const toastX = 330 + validDomains.length * 300;
    nodes.push(
      {
        id: "act-toast-ok",
        type: "action",
        x: toastX,
        y: 95,
        data: {
          command: "toast.show",
          args: "",
          params: { message: "OK", lifetime: "3", immediate: "true" },
          scope: "B1"
        }
      },
      { id: "state-mix-ok", type: "state", x: toastX + 290, y: 95, data: { name: "mix_applied" } },
      { id: "state-mix-err", type: "state", x: toastX, y: 275, data: { name: "mix_error" } }
    );
    edges.push(
      { kind: "exec", from: prevNodeId, port: "ok", to: "act-toast-ok" },
      { kind: "data", from: prevNodeId, port: "payload:result", to: "act-toast-ok", input: "param:message" },
      { kind: "exec", from: "act-toast-ok", port: "next", to: "state-mix-ok" }
    );

    const candidateGraph = {
      version: 2,
      binding: "Zoi:*",
      initialState: "idle",
      nodes,
      edges
    };
    normalizeGraph(candidateGraph);
    const titles = validDomains.map(id => CONTEXT_ACTION_TREES[id].title.split("·")[0].trim());
    return {
      id: `blueprint-mix-${validDomains.join("-")}`,
      title: `Mix Blueprint (${validDomains.length}): ${titles.join(" + ")}`,
      description: `Combinación multi-categoría: ${titles.join(" + ")}.`,
      environment: "B1",
      payload: { entity_id: 1, other_entity_id: 20524, target_entity_id: 20524, interaction_bag_id: "Self_SmartPhone_Check" },
      graph: candidateGraph
    };
  }

  function normalizeGraph(graph) {
    if (!graph || !Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) return graph;
    graph.edges = graph.edges.map(edge => edge && typeof edge === "object"
      ? { kind: edge.kind || "exec", ...edge }
      : edge);
    const executionTargets = new Map();
    for (const edge of graph.edges.filter(item => item?.kind === "exec")) {
      const key = `${edge.from}:${edge.port}`;
      if (!executionTargets.has(key)) executionTargets.set(key, []);
      executionTargets.get(key).push(edge.to);
    }
    for (const action of graph.nodes.filter(node => node?.type === "action")) {
      const schema = CLI_CATALOG[action.data?.command];
      action.data.params = { ...(schema?.defaults || {}), ...(action.data?.params || {}) };
      for (const token of String(action.data?.args || "").matchAll(/([A-Za-z_][A-Za-z0-9_]*)=([^\s]+)/g)) {
        const [, key, value] = token;
        if (!schema?.params[key]) continue;
        const match = /^\$\{payload\.([A-Za-z_][A-Za-z0-9_.]*)\}$/.exec(value);
        if (match) {
          action.data.params[key] = "";
          const event = graph.nodes.find(node => node?.type === "event");
          if (event) graph.edges.push({
            kind: "data", from: event.id, port: `payload:${match[1]}`,
            to: action.id, input: `param:${key}`
          });
        } else {
          action.data.params[key] = value;
        }
      }
      action.data.args = "";
    }
    for (const bridge of graph.nodes.filter(node => node?.type === "bridge")) {
      const schema = BRIDGE_CATALOG[bridge.data?.operation];
      bridge.data.params = { ...(schema?.defaults || {}), ...(bridge.data?.params || {}) };
    }
    for (const event of graph.nodes.filter(node => node?.type === "event")) {
      const reachable = new Set();
      const visit = id => {
        if (reachable.has(id)) return;
        reachable.add(id);
        for (const edge of graph.edges.filter(item => item?.kind === "exec" && item.from === id)) visit(edge.to);
      };
      for (const target of executionTargets.get(`${event.id}:next`) || []) visit(target);
      for (const node of graph.nodes.filter(item => reachable.has(item.id))) {
        if (node.type === "condition" && node.data?.source === "payload" && node.data?.field &&
            !graph.edges.some(edge => edge?.kind === "data" && edge.to === node.id && edge.input === "value")) {
          graph.edges.push({
            kind: "data", from: event.id, port: `payload:${node.data.field}`,
            to: node.id, input: "value"
          });
        }
      }
    }
    return graph;
  }
  normalizeGraph(DEFAULT_GRAPH);
  for (const example of EXAMPLES) normalizeGraph(example.graph);
  for (const testCase of PROGRESSIVE_TEST_CASES) normalizeGraph(testCase.graph);

  function getCatalogOperationById(idOrAlias) {
    const key = String(idOrAlias || "").trim();
    return OPERATION_CATALOG.find(entry =>
      entry.id === key || (Array.isArray(entry.aliases) && entry.aliases.includes(key))
    ) || null;
  }

  function searchCatalogOperations(queryOrOpts = "", envFilter = "ALL") {
    const opts = typeof queryOrOpts === "object" && queryOrOpts !== null
      ? queryOrOpts
      : { query: queryOrOpts, env: envFilter, status: "ALL", kind: "ALL" };
    const q = String(opts.query || "").trim().toLowerCase();
    const env = opts.env || "ALL";
    const status = opts.status || "ALL";
    const kind = opts.kind || opts.operationKind || "ALL";
    return OPERATION_CATALOG.filter(entry => {
      if (env && env !== "ALL") {
        if (env === "INCOMPATIBLE" && entry.verificationStatus !== VERIFICATION_STATUS.INCOMPATIBLE) return false;
        if (env === "B1" && !entry.b1b2Compatibility.B1) return false;
        if (env === "B2" && !entry.b1b2Compatibility.B2) return false;
        if (env === "B1+B2" && !(entry.b1b2Compatibility.B1 && entry.b1b2Compatibility.B2)) return false;
        if (env === "BRIDGE" && entry.type !== "bridge") return false;
      }
      if (status && status !== "ALL") {
        if (status === "QUESTIONED") {
          if (entry.verified_in_runtime) return false;
        } else if (entry.verificationStatus !== status) {
          return false;
        }
      }
      if (kind && kind !== "ALL" && entry.operationKind !== kind) return false;
      if (!q) return true;
      return [
        entry.id,
        ...(entry.aliases || []),
        entry.questionedCapability,
        entry.name,
        entry.description,
        entry.executionContext,
        entry.verificationStatus,
        entry.operationKind,
        ...(entry.evidenceRefs || [])
      ].some(text => String(text || "").toLowerCase().includes(q));
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function luaString(value) {
    return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\n/g, "\\n")}"`;
  }

  function findTarget(graph, nodeId, port) {
    const edge = graph.edges.find(item => (item?.kind || "exec") === "exec" && item?.from === nodeId && item?.port === port);
    return edge ? graph.nodes.find(item => item?.id === edge.to) : null;
  }

  function connectedField(graph, nodeId, input) {
    const edge = graph.edges.find(item => item?.kind === "data" && item.to === nodeId && item.input === input);
    if (!edge || !String(edge.port).startsWith("payload:")) return "";
    return String(edge.port).slice("payload:".length);
  }

  function availableCLICommands(environment) {
    return Object.entries(CLI_CATALOG).filter(([, schema]) =>
      schema.scope === environment || schema.scope === "B1+B2");
  }

  function availableBindings(environment) {
    return Object.entries(BINDING_PRESETS).filter(([, preset]) =>
      preset.env === environment || preset.env === "B1+B2");
  }

  function actionSummary(graph, node) {
    const schema = CLI_CATALOG[node.data?.command];
    if (!schema) return node.data?.command || "action";
    const parts = Object.keys(schema.params).flatMap(param => {
      const field = connectedField(graph, node.id, `param:${param}`);
      if (field) return [`${param}←${field}`];
      const val = node.data?.params?.[param] ?? schema.defaults?.[param] ?? "";
      return val !== "" ? [`${param}=${val}`] : [];
    });
    return `${node.data.command}${parts.length ? ` (${parts.join(", ")})` : ""}`;
  }

  function validateGraph(graph) {
    const errors = [];
    if (!graph || graph.version !== 2 || !Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) {
      return ["Formato de grafo no compatible."];
    }
    if (typeof graph.initialState !== "string" || !graph.initialState.trim()) {
      errors.push("Indica un estado inicial.");
    }

    const ids = new Set();
    for (const node of graph.nodes) {
      if (!node || !NODE_TYPES.has(node.type) || typeof node.id !== "string" ||
          !/^[A-Za-z0-9_-]+$/.test(node.id) || ids.has(node.id)) {
        errors.push("Hay nodos inválidos o IDs duplicados.");
        continue;
      }
      ids.add(node.id);
      if (!Number.isFinite(node.x) || !Number.isFinite(node.y) || node.x < 0 || node.y < 0) {
        errors.push(`${node.id}: posición del nodo inválida.`);
      }
      if (!node.data || typeof node.data !== "object") errors.push(`${node.id}: faltan sus datos.`);
      if (node.type === "event" && !EVENT_CATALOG[node.data?.event]) {
        errors.push(`${node.id}: selecciona un evento del catálogo capturado del juego.`);
      }
      if (node.type === "state" && !/^[A-Za-z0-9_-]+$/.test(node.data?.name || "")) {
        errors.push(`${node.id}: nombre de estado vacío o inválido.`);
      }
      if (node.type === "condition") {
        if (!OPERATORS.has(node.data?.operator)) errors.push(`${node.id}: operador no compatible.`);
        if (node.data?.source === "payload" && !/^[A-Za-z_][A-Za-z0-9_.]*$/.test(node.data?.field || "")) {
          errors.push(`${node.id}: campo payload inválido.`);
        }
        if (!["payload", "state"].includes(node.data?.source)) errors.push(`${node.id}: origen de condición inválido.`);
        if ([">", ">=", "<", "<="].includes(node.data?.operator) &&
            (String(node.data?.value ?? "").trim() === "" || !Number.isFinite(Number(node.data?.value)))) {
          errors.push(`${node.id}: la comparación numérica requiere un número.`);
        }
      }
      if (node.type === "action") {
        const schema = CLI_CATALOG[node.data?.command];
        if (!schema) errors.push(`${node.id}: selecciona un comando CLI con esquema verificado.`);
        if (schema && node.data?.scope !== schema.scope) errors.push(`${node.id}: el alcance CLI no coincide con el catálogo.`);
        if (schema) {
          for (const [name, value] of Object.entries(node.data?.params || {})) {
            if (!schema.params[name]) errors.push(`${node.id}: parámetro no disponible: ${name}.`);
            if (value !== "" && !/^[A-Za-z0-9_.-]+$/.test(String(value))) {
              errors.push(`${node.id}: ${name} debe ser un valor CLI sin espacios ni caracteres especiales.`);
            }
            if (value !== "" && schema.params[name] === "bool" &&
                !["true", "false"].includes(String(value).toLowerCase())) {
              errors.push(`${node.id}: ${name} debe ser true o false.`);
            }
            if (value !== "" && ["int", "float"].includes(schema.params[name]) &&
                !Number.isFinite(Number(value))) {
              errors.push(`${node.id}: ${name} debe ser numérico.`);
            }
          }
          for (const name of schema.required || []) {
            const connected = graph.edges.some(edge => edge?.kind === "data" &&
              edge.to === node.id && edge.input === `param:${name}`);
            if (!connected && String(node.data?.params?.[name] ?? "").trim() === "") {
              errors.push(`${node.id}: falta el parámetro obligatorio «${name}».`);
            }
          }
          for (const alternatives of schema.oneOf || []) {
            const configured = name => graph.edges.some(edge => edge?.kind === "data" &&
              edge.to === node.id && edge.input === `param:${name}`) ||
              String(node.data?.params?.[name] ?? "").trim() !== "";
            if (!alternatives.some(group => group.every(configured))) {
              errors.push(`${node.id}: configura ${alternatives.map(group => group.join(" + ")).join(" o ")}.`);
            }
          }
          if (node.data.command === "movement.teleport") {
            const params = node.data.params || {};
            const hasCoordinates = ["x", "y", "z"].every(key => params[key] !== undefined && params[key] !== "");
            const hasPartialCoordinates = ["x", "y", "z"].some(key => params[key] !== undefined && params[key] !== "");
            if (hasPartialCoordinates && !hasCoordinates) errors.push(`${node.id}: movement.teleport requiere x, y y z juntos.`);
          }
        }
      }
      if (node.type === "bridge") {
        const bridgeSchema = BRIDGE_CATALOG[node.data?.operation];
        if (!bridgeSchema) {
          errors.push(`${node.id}: selecciona una operación de puente B1↔B2 verificada.`);
        } else {
          for (const reqParam of bridgeSchema.required || []) {
            const connected = graph.edges.some(edge => edge?.kind === "data" &&
              edge.to === node.id && edge.input === `param:${reqParam}`);
            if (!connected && String(node.data?.params?.[reqParam] ?? "").trim() === "") {
              errors.push(`${node.id}: falta el parámetro obligatorio «${reqParam}» en el puente B1↔B2.`);
            }
          }
        }
      }
    }
    const stateNames = graph.nodes.filter(node => node?.type === "state").map(node => node.data?.name);
    if (stateNames.length === 0) errors.push("Añade al menos un nodo Estado.");
    if (new Set(stateNames).size !== stateNames.length) errors.push("Los nombres de estado deben ser únicos.");
    if (!stateNames.includes(graph.initialState)) errors.push("El estado inicial debe corresponder a un nodo Estado.");
    for (const eventNode of graph.nodes.filter(node => node?.type === "event")) {
      if (eventNode.data?.whenState && !stateNames.includes(eventNode.data.whenState)) {
        errors.push(`${eventNode.id}: el estado de activación no existe.`);
      }
    }

    const outgoing = new Map();
    for (const edge of graph.edges) {
      if (!edge || typeof edge.from !== "string" || typeof edge.to !== "string" || typeof edge.port !== "string") {
        errors.push("Hay una conexión inválida.");
        continue;
      }
      const source = graph.nodes.find(node => node?.id === edge.from);
      const target = graph.nodes.find(node => node?.id === edge.to);
      if (!source || !target || source.id === target.id) {
        errors.push("Hay una conexión a un nodo inexistente o a sí mismo.");
        continue;
      }
      const kind = edge.kind || "exec";
      if (kind === "data") {
        const [prefix, field] = String(edge.port || "").split(":");
        const eventSchema = source.type === "event" ? EVENT_CATALOG[source.data?.event] : null;
        const fieldType = prefix === "payload"
          ? (source.type === "event"
            ? eventSchema?.fields.find(([name]) => name === field)?.[1]
            : (source.type === "bridge" && ["result", "error"].includes(field) ? "string" : null))
          : null;
        let inputType = null;
        if (target.type === "condition" && edge.input === "value") inputType = "scalar";
        if (target.type === "action" && String(edge.input || "").startsWith("param:")) {
          const param = edge.input.slice(6);
          inputType = CLI_CATALOG[target.data?.command]?.params[param];
        }
        if (target.type === "bridge" && String(edge.input || "").startsWith("param:")) {
          const param = edge.input.slice(6);
          inputType = BRIDGE_CATALOG[target.data?.operation]?.params[param];
        }
        const compatible = inputType === "scalar" ? Boolean(fieldType)
          : inputType === "entityId" ? fieldType === "entityId"
            : inputType === "bool" ? fieldType === "bool"
              : ["int", "float"].includes(inputType) ? ["int", "float"].includes(fieldType)
                : inputType === "string" ? fieldType === "string" : false;
        if (!["event", "bridge"].includes(source.type) || !fieldType || !inputType || !compatible) {
          errors.push(`${edge.from}: salida de datos incompatible con ${edge.to}.`);
          continue;
        }
        const key = `${edge.to}:${edge.input}`;
        if (outgoing.has(key)) errors.push(`${edge.to}: la entrada «${edge.input}» tiene más de una conexión.`);
        outgoing.set(key, edge.from);
        continue;
      }
      if (kind !== "exec") {
        errors.push("Tipo de conexión desconocido.");
        continue;
      }
      const allowed = source.type === "condition" ? ["true", "false"]
        : source.type === "bridge" ? ["ok", "error"]
        : ["event", "action"].includes(source.type) ? ["next"] : [];
      if (!allowed.includes(edge.port)) {
        errors.push(`${source.id}: salida «${edge.port}» no permitida.`);
        continue;
      }
      const key = `${edge.from}:${edge.port}`;
      if (outgoing.has(key)) errors.push(`${source.id}: la salida «${edge.port}» tiene más de una conexión.`);
      outgoing.set(key, edge.to);
    }

    const startNodes = graph.nodes.filter(node => node?.type === "event");
    if (startNodes.length === 0) errors.push("Añade al menos un nodo Evento.");
    for (const node of graph.nodes) {
      if (!node || !NODE_TYPES.has(node.type)) continue;
      if (["event", "action"].includes(node.type) && !outgoing.has(`${node.id}:next`)) {
        errors.push(`${node.id}: conecta su salida.`);
      }
      if (node.type === "bridge") {
        for (const port of ["ok", "error"]) {
          if (!outgoing.has(`${node.id}:${port}`)) errors.push(`${node.id}: conecta la salida «${port}» del puente B1↔B2.`);
        }
      }
      if (node.type === "condition") {
        if (node.data?.source === "payload" && !outgoing.has(`${node.id}:value`)) {
          errors.push(`${node.id}: conecta un campo del payload a la entrada de datos.`);
        }
        for (const port of ["true", "false"]) {
          if (!outgoing.has(`${node.id}:${port}`)) errors.push(`${node.id}: conecta la salida «${port}».`);
        }
      }
      if (["state", "end"].includes(node.type) &&
          graph.edges.some(edge => edge && (edge.kind || "exec") === "exec" && edge.from === node.id)) {
        errors.push(`${node.id}: este nodo es terminal.`);
      }
    }

    for (const eventNode of startNodes) {
      const visit = (nodeId, path) => {
        if (path.has(nodeId)) {
          errors.push(`${nodeId}: hay un ciclo; termina cada ruta en Estado o Fin.`);
          return;
        }
        const node = graph.nodes.find(item => item.id === nodeId);
        if (!node) return;
        if (["state", "end"].includes(node.type)) return;
        const nextPath = new Set(path);
        nextPath.add(nodeId);
        const ports = node.type === "condition" ? ["true", "false"]
          : node.type === "bridge" ? ["ok", "error"]
          : ["next"];
        for (const port of ports) {
          const next = findTarget(graph, node.id, port);
          if (next) visit(next.id, nextPath);
        }
      };
      const first = findTarget(graph, eventNode.id, "next");
      if (first) visit(first.id, new Set([eventNode.id]));
    }
    return [...new Set(errors)];
  }

  function conditionLua(node, connectedPayloadField) {
    const value = connectedPayloadField
      ? `lua_flow_get_path(payload, ${luaString(connectedPayloadField)})`
      : node.data.source === "state"
      ? "M.currentState"
      : `lua_flow_get_path(payload, ${luaString(node.data.field)})`;
    const literal = node.data.operator === "exists" ? null
      : ["true", "false"].includes(String(node.data.value).trim()) ? String(node.data.value).trim()
        : Number.isFinite(Number(node.data.value)) && String(node.data.value).trim() !== ""
          ? String(Number(node.data.value))
          : luaString(node.data.value);

    if (node.data.operator === "exists") return `${value} ~= nil`;
    if (node.data.operator === "==") return `tostring(${value}) == tostring(${literal})`;
    if (node.data.operator === "~=") return `tostring(${value}) ~= tostring(${literal})`;
    return `tonumber(${value}) ~= nil and tonumber(${value}) ${node.data.operator} ${literal}`;
  }

  function compileGraph(graph, environment) {
    if (!ENVIRONMENTS.has(environment)) {
      return { errors: ["El entorno debe ser B1 o B2."], lua: "", manifest: "" };
    }
    normalizeGraph(graph);
    const errors = validateGraph(graph);
    if (!graph || !Array.isArray(graph.nodes)) return { errors, lua: "", manifest: "" };
    const bindingKey = graph.binding && BINDING_PRESETS[graph.binding] ? graph.binding : "Main";
    const binding = BINDING_PRESETS[bindingKey];
    if (binding.env !== "B1+B2" && binding.env !== environment) {
      errors.push(`Binding ${bindingKey}: disponible en ${binding.env}, no en ${environment}.`);
    }
    for (const node of graph.nodes) {
      if (node?.type !== "action") continue;
      if (node.data.scope === "unverified") {
        errors.push(`${node.id}: confirma el entorno del CLI en el catálogo ModKit.`);
      } else if (node.data.scope !== "B1+B2" && node.data.scope !== environment) {
        errors.push(`${node.id}: CLI disponible en ${node.data.scope}, no en ${environment}.`);
      }
    }
    if (errors.length) return { errors, lua: "", manifest: "" };
    const lines = [
      "local M = {}",
      "",
      "local function lua_flow_trace(node_id, message)",
      '    print("[LuaFlow][" .. node_id .. "] " .. message)',
      "end",
      "",
      "local function lua_flow_get_path(value, path)",
      '    for key in string.gmatch(path, "[^%.]+") do',
      '        if type(value) ~= "table" then return nil end',
      "        value = value[key]",
      "    end",
      "    return value",
      "end",
      "",
      "local function lua_flow_get_id(value)",
      '    if type(value) == "table" or type(value) == "userdata" then',
      "        local ok, id = pcall(function() return value.Value end)",
      "        if ok and id ~= nil then return id end",
      "    end",
      "    return value",
      "end",
      "",
      "local function lua_flow_cli_token(value)",
      '    return (tostring(lua_flow_get_id(value) or ""):gsub("[^%w_.%-]", ""))',
      "end",
      ""
    ];

    const nodes = new Map(graph.nodes.map(node => [node.id, node]));
    let functionIndex = 0;
    let conditionIndex = 0;
    let actionIndex = 0;
    const emitFlow = (node, depth, ancestors) => {
      if (!node || ["state", "end"].includes(node.type)) {
        if (node?.type === "state") {
          lines.push(`${"    ".repeat(depth)}M.currentState = ${luaString(node.data.name)}`);
          lines.push(`${"    ".repeat(depth)}lua_flow_trace(${luaString(node.id)}, "state=" .. M.currentState)`);
        } else if (node?.type === "end") {
          lines.push(`${"    ".repeat(depth)}lua_flow_trace(${luaString(node.id)}, "flow=end")`);
        }
        return;
      }
      if (ancestors.has(node.id)) return;
      const nextAncestors = new Set(ancestors);
      nextAncestors.add(node.id);
      const indent = "    ".repeat(depth);

      if (node.type === "condition") {
        const result = `lua_flow_condition_${++conditionIndex}`;
        const field = node.data.source === "payload" ? connectedField(graph, node.id, "value") : "";
        lines.push(`${indent}local ${result} = ${conditionLua(node, field)}`);
        lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "condition=" .. tostring(${result}))`);
        lines.push(`${indent}if ${result} then`);
        emitFlow(findTarget(graph, node.id, "true"), depth + 1, nextAncestors);
        lines.push(`${indent}else`);
        emitFlow(findTarget(graph, node.id, "false"), depth + 1, nextAncestors);
        lines.push(`${indent}end`);
        return;
      }
      if (node.type === "action") {
        const index = ++actionIndex;
        lines.push(`${indent}local lua_flow_command_${index} = ${luaString(node.data.command)}`);
        const schema = CLI_CATALOG[node.data.command];
        for (const [param, type] of Object.entries(schema.params)) {
          const field = connectedField(graph, node.id, `param:${param}`);
          const configured = node.data.params?.[param] ?? schema.defaults?.[param] ?? "";
          if (field) {
            const valueName = `lua_flow_value_${index}_${param}`;
            lines.push(`${indent}local ${valueName} = lua_flow_get_path(payload, ${luaString(field)})`);
            lines.push(`${indent}if ${valueName} == nil then lua_flow_trace(${luaString(node.id)}, "missing_${param}"); return end`);
            lines.push(`${indent}lua_flow_command_${index} = lua_flow_command_${index} .. " ${param}=" .. lua_flow_cli_token(${valueName})`);
          } else if (configured !== "") {
            lines.push(`${indent}lua_flow_command_${index} = lua_flow_command_${index} .. " ${param}=" .. lua_flow_cli_token(${luaString(configured)})`);
          }
        }
        lines.push(`${indent}local lua_flow_ok_${index}, lua_flow_message_${index}, lua_flow_data_${index} = inzoi.cli.execute(lua_flow_command_${index})`);
        lines.push(`${indent}if lua_flow_ok_${index} then`);
        lines.push(`${indent}    lua_flow_trace(${luaString(node.id)}, "cli_ok")`);
        lines.push(`${indent}else`);
        lines.push(`${indent}    lua_flow_trace(${luaString(node.id)}, "cli_error=" .. tostring(lua_flow_message_${index}))`);
        lines.push(`${indent}    return`);
        lines.push(`${indent}end`);
        emitFlow(findTarget(graph, node.id, "next"), depth, nextAncestors);
        return;
      }
      if (node.type === "bridge") {
        const index = ++actionIndex;
        const bridgeOp = node.data.operation || "verify_sim_authority";
        lines.push(`${indent}local lua_flow_bridge_req_${index} = "req_id=${index}|op=" .. ${luaString(bridgeOp)} .. "|from_state=" .. tostring(M.currentState)`);
        lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "bridge_b1_to_b2=" .. lua_flow_bridge_req_${index})`);
        lines.push(`${indent}if M.boundTarget ~= nil then`);
        lines.push(`${indent}    inzoi.message.send_to_sim(M.boundTarget:GetEntityId(), ${luaString(B1B2_CONTRACT.reqChannel)}, lua_flow_bridge_req_${index})`);
        lines.push(`${indent}end`);
        const okBranch = findTarget(graph, node.id, "ok");
        const errBranch = findTarget(graph, node.id, "error");
        if (BRIDGE_CATALOG[bridgeOp]?.simulateError) {
          lines.push(`${indent}payload.error = ${luaString(BRIDGE_CATALOG[bridgeOp].errorReason || "ERR_UNSUPPORTED_OP")}`);
          emitFlow(errBranch, depth, nextAncestors);
        } else {
          lines.push(`${indent}payload.result = ${luaString(`${BRIDGE_CATALOG[bridgeOp]?.b2Cli || bridgeOp}:ack`)}`);
          emitFlow(okBranch, depth, nextAncestors);
        }
      }
    };

    const events = graph.nodes.filter(node => node.type === "event");
    for (const node of events) {
      const fn = `lua_flow_event_${++functionIndex}`;
      lines.push("---@param payload table");
      lines.push(`local function ${fn}(payload)`);
      lines.push(`    lua_flow_trace(${luaString(node.id)}, "event")`);
      lines.push("    if type(payload) ~= \"table\" then payload = {} end");
      if (node.data.whenState) {
        lines.push(`    if M.currentState ~= ${luaString(node.data.whenState)} then return end`);
      }
      emitFlow(findTarget(graph, node.id, "next"), 1, new Set([node.id]));
      lines.push("end", "");
    }

    lines.push(`M.currentState = ${luaString(graph.initialState || "idle")}`);
    lines.push("M.luaFlowListeners = {}");
    const beginParams = binding.type ? "self, target" : "";
    lines.push(`function M.on_begin(${beginParams})`);
    if (binding.type) {
      lines.push("    M.boundTarget = target");
    }
    for (const node of events) {
      const index = events.indexOf(node) + 1;
      const fn = `lua_flow_event_${index}`;
      const eventSchema = EVENT_CATALOG[node.data.event];
      if (eventSchema?.kind === "lua_message") {
        lines.push(`    lua_flow_trace(${luaString(node.id)}, "awaiting_lua_message=" .. ${luaString(eventSchema.messageId)})`);
        continue;
      }
      const handle = `lua_flow_handle_${index}`;
      lines.push(`    local ${handle} = inzoi.event.on(${luaString(node.data.event)}, function(payload)`);
      lines.push(`        ${fn}(payload)`);
      lines.push("    end)");
      lines.push(`    if ${handle} ~= nil and ${handle} ~= 0 then`);
      lines.push(`        M.luaFlowListeners[#M.luaFlowListeners + 1] = { event = ${luaString(node.data.event)}, handle = ${handle} }`);
      lines.push(`        lua_flow_trace(${luaString(node.id)}, "subscribed")`);
      lines.push("    else");
      lines.push(`        lua_flow_trace(${luaString(node.id)}, "subscribe_error")`);
      lines.push("    end");
    }
    lines.push("    lua_flow_trace(\"runtime\", \"started state=\" .. tostring(M.currentState))");
    lines.push("end", "");

    const messageEvents = events
      .map((node, idx) => ({ node, fn: `lua_flow_event_${idx + 1}`, schema: EVENT_CATALOG[node.data.event] }))
      .filter(item => item.schema?.kind === "lua_message");
    if (messageEvents.length > 0) {
      const defaultMsgId = messageEvents[0].schema.messageId;
      lines.push("function M.trigger_ui_message(payload)");
      lines.push(`    inzoi.message.send_to_sim(${luaString(defaultMsgId)}, payload or {})`);
      lines.push("end", "");
      lines.push("function M.on_lua_message(message_id, payload)");
      for (const item of messageEvents) {
        lines.push(`    if message_id == ${luaString(item.schema.messageId)} then`);
        lines.push(`        ${item.fn}(payload)`);
        lines.push("    end");
      }
      lines.push("end", "");
    }

    lines.push(`function M.on_end(${beginParams})`);
    lines.push("    for _, listener in ipairs(M.luaFlowListeners or {}) do");
    lines.push("        if listener.handle then pcall(inzoi.event.off, listener.event, listener.handle) end");
    lines.push("    end");
    lines.push("    M.luaFlowListeners = {}");
    lines.push("    lua_flow_trace(\"runtime\", \"stopped\")");
    lines.push("end", "", "return M");

    const script = lines.join("\n");
    const manifestObj = binding.type
      ? { bindings: { [environment]: { [binding.type]: { [binding.key]: [binding.module] } } } }
      : { bindings: {} };
    const manifest = JSON.stringify(manifestObj, null, 2);
    const scriptPath = `${environment}/${binding.module.replace(/\./g, "/")}.lua`;
    return {
      errors: [],
      lua: script,
      manifest,
      scriptPath
    };
  }

  function compileB1B2Bundle(graph) {
    normalizeGraph(graph);
    const errors = validateGraph(graph);
    if (errors.length) {
      return {
        errors,
        b1Lua: "",
        b2Lua: "",
        b1Path: "B1/Zoi/FlowBridgeClient.lua",
        b2Path: "B2/Zoi/FlowBridgeServer.lua",
        manifest: "",
        contract: B1B2_CONTRACT
      };
    }

    const b1Lines = [
      "local M = {}",
      "",
      `local REQ_CHANNEL = ${luaString(B1B2_CONTRACT.reqChannel)}`,
      `local RES_CHANNEL = ${luaString(B1B2_CONTRACT.resChannel)}`,
      "",
      "M.traceLog = {}",
      "",
      "local function lua_flow_sync_trace()",
      '    local text = table.concat(M.traceLog, ";")',
      '    if text ~= "" then',
      '        inzoi.cli.execute("clipboard.copy text=" .. text)',
      "    end",
      "end",
      "",
      "---@param node_id string",
      "---@param message string",
      "local function lua_flow_trace(node_id, message)",
      '    print("[LuaFlow][B1][" .. node_id .. "] " .. message)',
      '    local clean = tostring(message):gsub("[^%w_%.%-:=|]", "_")',
      '    M.traceLog[#M.traceLog + 1] = "B1:" .. tostring(node_id) .. ":" .. clean',
      "end",
      "",
      "---@param fields table",
      "---@return string",
      "local function encode_packet(fields)",
      "    local parts = {}",
      "    for k, v in pairs(fields) do",
      '        local sk = tostring(k):gsub("[|=]", "_")',
      '        local sv = tostring(v):gsub("[|=]", "_")',
      '        parts[#parts + 1] = sk .. "=" .. sv',
      "    end",
      '    return table.concat(parts, "|")',
      "end",
      "",
      "---@param raw string",
      "---@return table",
      "local function decode_packet(raw)",
      "    local out = {}",
      '    if type(raw) ~= "string" then return out end',
      '    for token in string.gmatch(raw, "[^|]+") do',
      '        local eq = string.find(token, "=", 1, true)',
      "        if eq and eq > 1 then",
      "            out[string.sub(token, 1, eq - 1)] = string.sub(token, eq + 1)",
      "        end",
      "    end",
      "    return out",
      "end",
      "",
      "---@param value table",
      "---@param path string",
      "local function lua_flow_get_path(value, path)",
      '    for key in string.gmatch(path, "[^%.]+") do',
      '        if type(value) ~= "table" then return nil end',
      "        value = value[key]",
      "    end",
      "    return value",
      "end",
      "",
      "local function lua_flow_get_id(value)",
      '    if type(value) == "table" or type(value) == "userdata" then',
      "        local ok, id = pcall(function() return value.Value end)",
      "        if ok and id ~= nil then return id end",
      "    end",
      "    return value",
      "end",
      "",
      "local function lua_flow_cli_token(value)",
      '    return (tostring(lua_flow_get_id(value) or ""):gsub("[^%w_.%-]", ""))',
      "end",
      "",
      `M.currentState = ${luaString(graph.initialState || "idle")}`,
      ""
    ];

    const bridgeNodes = graph.nodes.filter(node => node.type === "bridge");
    let condIdx = 0;
    let actIdx = 0;

    const emitB1Continuation = (node, depth, ancestors) => {
      const indent = "    ".repeat(depth);
      if (!node || ["state", "end"].includes(node.type)) {
        if (node?.type === "state") {
          b1Lines.push(`${indent}self.state = ${luaString(node.data.name)}`);
          b1Lines.push(`${indent}M.currentState = ${luaString(node.data.name)}`);
          b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "state=" .. tostring(M.currentState))`);
        } else if (node?.type === "end") {
          b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "flow=end")`);
        }
        return;
      }
      if (ancestors.has(node.id)) return;
      const nextAncestors = new Set(ancestors);
      nextAncestors.add(node.id);

      if (node.type === "condition") {
        const resVar = `cond_res_${++condIdx}`;
        const field = node.data.source === "payload" ? connectedField(graph, node.id, "value") : "";
        b1Lines.push(`${indent}local ${resVar} = ${conditionLua(node, field)}`);
        b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "condition=" .. tostring(${resVar}))`);
        b1Lines.push(`${indent}if ${resVar} then`);
        emitB1Continuation(findTarget(graph, node.id, "true"), depth + 1, nextAncestors);
        b1Lines.push(`${indent}else`);
        emitB1Continuation(findTarget(graph, node.id, "false"), depth + 1, nextAncestors);
        b1Lines.push(`${indent}end`);
        return;
      }

      if (node.type === "action") {
        const idx = ++actIdx;
        const schema = CLI_CATALOG[node.data.command];
        b1Lines.push(`${indent}local cmd_${idx} = ${luaString(node.data.command)}`);
        for (const [param] of Object.entries(schema?.params || {})) {
          const field = connectedField(graph, node.id, `param:${param}`);
          const configured = node.data.params?.[param] ?? schema?.defaults?.[param] ?? "";
          if (field) {
            b1Lines.push(`${indent}local val_${idx}_${param} = lua_flow_get_path(payload, ${luaString(field)})`);
            b1Lines.push(`${indent}if val_${idx}_${param} ~= nil then cmd_${idx} = cmd_${idx} .. " ${param}=" .. lua_flow_cli_token(val_${idx}_${param}) end`);
          } else if (configured !== "") {
            b1Lines.push(`${indent}cmd_${idx} = cmd_${idx} .. " ${param}=" .. lua_flow_cli_token(${luaString(configured)})`);
          }
        }
        b1Lines.push(`${indent}local ok_${idx}, msg_${idx} = inzoi.cli.execute(cmd_${idx})`);
        b1Lines.push(`${indent}if ok_${idx} then`);
        b1Lines.push(`${indent}    lua_flow_trace(${luaString(node.id)}, "cli_ok=" .. cmd_${idx})`);
        b1Lines.push(`${indent}else`);
        b1Lines.push(`${indent}    lua_flow_trace(${luaString(node.id)}, "cli_err=" .. tostring(msg_${idx}))`);
        b1Lines.push(`${indent}end`);
        emitB1Continuation(findTarget(graph, node.id, "next"), depth, nextAncestors);
        return;
      }

      if (node.type === "bridge") {
        const op = node.data.operation || "verify_sim_authority";
        const bSchema = BRIDGE_CATALOG[op];
        b1Lines.push(`${indent}M.inFlight = true`);
        b1Lines.push(`${indent}self.seq = (self.seq or 0) + 1`);
        b1Lines.push(`${indent}local req_id = tostring(self.seq)`);
        b1Lines.push(`${indent}local owner_id = owner:GetEntityId()`);
        b1Lines.push(`${indent}local owner_num = tostring(lua_flow_get_id(owner_id))`);
        if (op === "vehicle.attach_flying_prop") {
          const meshId = String(node.data.params?.mesh_id ?? bSchema?.defaults?.mesh_id ?? "40").replace(/[^0-9]/g, "") || "40";
          const socketName = String(node.data.params?.socket ?? bSchema?.defaults?.socket ?? "pelvis").replace(/[^A-Za-z0-9_.-]/g, "") || "pelvis";
          const meshScale = String(node.data.params?.scale ?? bSchema?.defaults?.scale ?? "2.8").replace(/[^0-9.-]/g, "") || "2.8";
          b1Lines.push(`${indent}local ok_prop = inzoi.cli.execute("entity.attach_mesh entity_id=" .. owner_num .. " mesh_id=${meshId} socket=${socketName} scale=${meshScale}")`);
          b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_attach_prop=" .. tostring(ok_prop) .. " mesh_id=${meshId} socket=${socketName}")`);
        } else if (op === "pregnancy.context_suite") {
          const applyGenetics = String(node.data.params?.apply_genetics ?? bSchema?.defaults?.apply_genetics ?? "true") === "true";
          if (applyGenetics) {
            const skinIdx = String(node.data.params?.skin_color_index ?? bSchema?.defaults?.skin_color_index ?? "3").replace(/[^0-9]/g, "") || "3";
            const hairId = String(node.data.params?.hair_id ?? bSchema?.defaults?.hair_id ?? "Hair_Female_Long_01").replace(/[^A-Za-z0-9_.-]/g, "");
            const faceId = String(node.data.params?.face_preset_id ?? bSchema?.defaults?.face_preset_id ?? "Face_Preset_02").replace(/[^A-Za-z0-9_.-]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_skin_color entity_id=" .. owner_num .. " skin_color_index=${skinIdx}")`);
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.hair entity_id=" .. owner_num .. " hair_id=${hairId}")`);
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_face_shape entity_id=" .. owner_num .. " face_preset_id=${faceId}")`);
            b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_genetics_applied skin=${skinIdx} hair=${hairId} face=${faceId}")`);
          }
        } else if (op === "appearance.context_suite") {
          const chgOutfit = String(node.data.params?.change_outfit ?? bSchema?.defaults?.change_outfit ?? "true") === "true";
          const tintGarment = String(node.data.params?.tint_garment ?? bSchema?.defaults?.tint_garment ?? "true") === "true";
          const chgHair = String(node.data.params?.change_hair ?? bSchema?.defaults?.change_hair ?? "true") === "true";
          const chgSkin = String(node.data.params?.change_skin ?? bSchema?.defaults?.change_skin ?? "false") === "true";
          const chgFace = String(node.data.params?.change_face ?? bSchema?.defaults?.change_face ?? "false") === "true";
          if (chgOutfit) {
            const cat = String(node.data.params?.outfit_category ?? bSchema?.defaults?.outfit_category ?? "Formal").replace(/[^A-Za-z0-9_.-]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_outfit_category entity_id=" .. owner_num .. " category=${cat}")`);
          }
          if (tintGarment) {
            const slotIdx = String(node.data.params?.slot_index ?? bSchema?.defaults?.slot_index ?? "0").replace(/[^0-9]/g, "") || "0";
            const colorHex = String(node.data.params?.color_hex ?? bSchema?.defaults?.color_hex ?? "#1E3A8A").replace(/[^#A-Za-z0-9]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_garment_color entity_id=" .. owner_num .. " slot_index=${slotIdx} color_hex=${colorHex}")`);
          }
          if (chgHair) {
            const hairId = String(node.data.params?.hair_id ?? bSchema?.defaults?.hair_id ?? "Hair_Female_Long_01").replace(/[^A-Za-z0-9_.-]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.hair entity_id=" .. owner_num .. " hair_id=${hairId}")`);
          }
          if (chgSkin) {
            const skinIdx = String(node.data.params?.skin_color_index ?? bSchema?.defaults?.skin_color_index ?? "3").replace(/[^0-9]/g, "") || "3";
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_skin_color entity_id=" .. owner_num .. " skin_color_index=${skinIdx}")`);
          }
          if (chgFace) {
            const faceId = String(node.data.params?.face_preset_id ?? bSchema?.defaults?.face_preset_id ?? "Face_Preset_02").replace(/[^A-Za-z0-9_.-]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_face_shape entity_id=" .. owner_num .. " face_preset_id=${faceId}")`);
          }
          b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_appearance_suite_applied")`);
        } else if (op === "vehicle.context_suite") {
          const attachProp = String(node.data.params?.attach_visual_prop ?? bSchema?.defaults?.attach_visual_prop ?? "true") === "true";
          if (attachProp) {
            const meshId = String(node.data.params?.mesh_id ?? bSchema?.defaults?.mesh_id ?? "40").replace(/[^0-9]/g, "") || "40";
            const socketName = String(node.data.params?.socket ?? bSchema?.defaults?.socket ?? "pelvis").replace(/[^A-Za-z0-9_.-]/g, "") || "pelvis";
            b1Lines.push(`${indent}inzoi.cli.execute("entity.attach_mesh entity_id=" .. owner_num .. " mesh_id=${meshId} socket=${socketName} scale=2.5")`);
            b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_vehicle_prop_attached mesh_id=${meshId}")`);
          }
        } else if (op === "zoi_self.context_suite") {
          const cctvOn = String(node.data.params?.cctv_office_monitor ?? bSchema?.defaults?.cctv_office_monitor ?? "true") === "true";
          const locateVeh = String(node.data.params?.locate_parked_vehicle ?? bSchema?.defaults?.locate_parked_vehicle ?? "true") === "true";
          const parkingAct = String(node.data.params?.parking_action ?? bSchema?.defaults?.parking_action ?? "scan_and_toast").replace(/[^A-Za-z0-9_.-]/g, "");
          const quickOutfit = String(node.data.params?.quick_change_outfit ?? bSchema?.defaults?.quick_change_outfit ?? "true") === "true";
          const aiEmote = String(node.data.params?.enable_ai_emote ?? bSchema?.defaults?.enable_ai_emote ?? "true") === "true";
          if (cctvOn) {
            const camFilter = String(node.data.params?.cctv_camera_filter ?? bSchema?.defaults?.cctv_camera_filter ?? "SecurityCam").replace(/[^A-Za-z0-9_.-]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("visual.free_camera enable=true")`);
            b1Lines.push(`${indent}inzoi.cli.execute("view.set_filter filter=${camFilter}")`);
            b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_cctv_monitor_active filter=${camFilter}")`);
          }
          if (locateVeh && parkingAct === "focus_camera") {
            b1Lines.push(`${indent}inzoi.cli.execute("visual.free_camera enable=true")`);
            b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_parking_gps_camera_focus")`);
          }
          if (quickOutfit) {
            const selfCat = String(node.data.params?.self_outfit_category ?? bSchema?.defaults?.self_outfit_category ?? "Everyday").replace(/[^A-Za-z0-9_.-]/g, "");
            const selfTint = String(node.data.params?.self_garment_tint ?? bSchema?.defaults?.self_garment_tint ?? "#10B981").replace(/[^#A-Za-z0-9]/g, "");
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_outfit_category entity_id=" .. owner_num .. " category=${selfCat}")`);
            b1Lines.push(`${indent}inzoi.cli.execute("appearance.set_garment_color entity_id=" .. owner_num .. " slot_index=0 color_hex=${selfTint}")`);
          }
          if (aiEmote) {
            const facialPreset = String(node.data.params?.facial_preset ?? bSchema?.defaults?.facial_preset ?? "Happy").replace(/[^A-Za-z0-9_.-]/g, "");
            const bubbleMsg = String(node.data.params?.speech_bubble_text ?? bSchema?.defaults?.speech_bubble_text ?? "OK").replace(/[^A-Za-z0-9_.-]/g, "_");
            b1Lines.push(`${indent}inzoi.cli.execute("facial.set entity_id=" .. owner_num .. " preset=${facialPreset}")`);
            b1Lines.push(`${indent}inzoi.cli.execute("entity.show_speech_bubble entity_id=" .. owner_num .. " text=${bubbleMsg}")`);
          }
        } else if (op === "zoi_social.context_suite") {
          const hostSwap = String(node.data.params?.runtime_host_swapping ?? bSchema?.defaults?.runtime_host_swapping ?? "true") === "true";
          const swapMode = String(node.data.params?.host_swap_mode ?? bSchema?.defaults?.host_swap_mode ?? "full_possess_and_restore").replace(/[^A-Za-z0-9_.-]/g, "");
          const targetHost = String(node.data.params?.target_host_id ?? bSchema?.defaults?.target_host_id ?? "20524").replace(/[^0-9]/g, "") || "20524";
          if (hostSwap && swapMode === "full_possess_and_restore") {
            b1Lines.push(`${indent}inzoi.cli.execute("character.possess character_id=${targetHost}")`);
            b1Lines.push(`${indent}local b1_restore_h = nil`);
            b1Lines.push(`${indent}b1_restore_h = inzoi.event.on("interaction.finished", function(_)`);
            b1Lines.push(`${indent}    inzoi.cli.execute("character.possess character_id=" .. owner_num)`);
            b1Lines.push(`${indent}    if b1_restore_h ~= nil then inzoi.event.off(b1_restore_h); b1_restore_h = nil end`);
            b1Lines.push(`${indent}end)`);
            b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "b1_host_swap_possess target=${targetHost} restore_to=" .. owner_num)`);
          }
        }
        b1Lines.push(`${indent}self.pending[req_id] = { node_id = ${luaString(node.id)}, op = ${luaString(op)} }`);
        const pktFields = [
          `req_id = req_id`,
          `node_id = ${luaString(node.id)}`,
          `op = ${luaString(op)}`,
          `entity_id = owner_num`,
          `from_state = tostring(M.currentState)`
        ];
        for (const [param] of Object.entries(bSchema?.params || {})) {
          if (param === "entity_id") continue;
          const field = connectedField(graph, node.id, `param:${param}`);
          const configured = node.data.params?.[param] ?? bSchema?.defaults?.[param] ?? "";
          if (field) {
            b1Lines.push(`${indent}local bval_${param} = lua_flow_get_path(payload, ${luaString(field)})`);
            pktFields.push(`${param} = lua_flow_cli_token(bval_${param} or ${luaString(configured)})`);
          } else if (configured !== "") {
            pktFields.push(`${param} = ${luaString(String(configured))}`);
          }
        }
        b1Lines.push(`${indent}local packet = encode_packet({ ${pktFields.join(", ")} })`);
        b1Lines.push(`${indent}lua_flow_trace(${luaString(node.id)}, "tx_b1_to_b2=" .. packet)`);
        b1Lines.push(`${indent}lua_flow_sync_trace()`);
        b1Lines.push(`${indent}inzoi.message.send_to_sim(owner_id, REQ_CHANNEL, packet)`);
      }
    };

    const events = graph.nodes.filter(node => node.type === "event");
    b1Lines.push("---@param self table");
    b1Lines.push("---@param owner FB2Character");
    b1Lines.push("function M.on_begin(self, owner)");
    b1Lines.push("    self.seq = 0");
    b1Lines.push("    self.state = M.currentState");
    b1Lines.push("    self.pending = {}");
    b1Lines.push("    self.handles = {}");
    b1Lines.push("    local begin_owner_id = owner:GetEntityId()");
    b1Lines.push("    local begin_owner_num = tonumber(lua_flow_get_id(begin_owner_id)) or -1");
    b1Lines.push("    if M.activeSelf == nil and begin_owner_num > 0 then");
    b1Lines.push("        M.activeSelf = self");
    b1Lines.push("    end");
    b1Lines.push("    if begin_owner_num > 0 and not M.b1BeginLogged then");
    b1Lines.push("        M.b1BeginLogged = true");
    b1Lines.push('        lua_flow_trace("runtime", "b1_on_begin entity_id=" .. tostring(begin_owner_num) .. " state=" .. tostring(M.currentState))');
    b1Lines.push("        lua_flow_sync_trace()");
    b1Lines.push("    end");
    events.forEach((evtNode, index) => {
      const hName = `h_${index + 1}`;
      b1Lines.push(`    local ${hName} = inzoi.event.on(${luaString(evtNode.data.event)}, function(payload)`);
      b1Lines.push('        if type(payload) ~= "table" then payload = {} end');
      if (evtNode.data.whenState) {
        b1Lines.push(`        if M.currentState ~= ${luaString(evtNode.data.whenState)} then return end`);
      }
      b1Lines.push("        if M.inFlight then return end");
      b1Lines.push("        if M.activeSelf ~= nil and self ~= M.activeSelf then return end");
      b1Lines.push(`        lua_flow_trace(${luaString(evtNode.id)}, "event=" .. ${luaString(evtNode.data.event)} .. " owner_id=" .. tostring(lua_flow_get_id(owner:GetEntityId())))`);
      emitB1Continuation(findTarget(graph, evtNode.id, "next"), 2, new Set([evtNode.id]));
      b1Lines.push("    end)");
      b1Lines.push(`    if ${hName} ~= nil and ${hName} ~= 0 then`);
      b1Lines.push(`        self.handles[#self.handles + 1] = { event = ${luaString(evtNode.data.event)}, handle = ${hName} }`);
      b1Lines.push("    end");
    });
    b1Lines.push("end", "");

    b1Lines.push("---@param self table");
    b1Lines.push("---@param owner FB2Character");
    b1Lines.push("---@param msg_type string");
    b1Lines.push("---@param content string");
    b1Lines.push("function M.on_lua_message(self, owner, msg_type, content)");
    b1Lines.push("    if msg_type ~= RES_CHANNEL then return end");
    b1Lines.push("    local res = decode_packet(content)");
    b1Lines.push('    if res["boot"] == "b2_on_begin" then');
    b1Lines.push('        local boot_id = tostring(res["entity_id"] or "")');
    b1Lines.push('        local is_pos_boot = (res["possessed"] == "true")');
    b1Lines.push("        if is_pos_boot or M.activeSelf == nil then");
    b1Lines.push("            M.activeSelf = self");
    b1Lines.push("        end");
    b1Lines.push("        if is_pos_boot or not M.b2BeginLogged then");
    b1Lines.push("            M.b2BeginLogged = true");
    b1Lines.push('            lua_flow_trace("runtime", "b1_on_begin entity_id=" .. tostring(lua_flow_get_id(owner:GetEntityId())) .. " state=" .. tostring(M.currentState))');
    b1Lines.push('            lua_flow_trace("runtime", "b2_on_begin entity_id=" .. boot_id .. " possessed=" .. tostring(is_pos_boot))');
    b1Lines.push("            lua_flow_sync_trace()");
    b1Lines.push("        end");
    b1Lines.push("        return");
    b1Lines.push("    end");
    b1Lines.push('    local req_id = res["req_id"] or ""');
    b1Lines.push("    local pending_entry = self.pending and self.pending[req_id]");
    b1Lines.push("    if not pending_entry then");
    b1Lines.push('        lua_flow_trace("bridge", "err_unknown_req_id=" .. tostring(req_id))');
    b1Lines.push("        return");
    b1Lines.push("    end");
    b1Lines.push("    self.pending[req_id] = nil");
    b1Lines.push("    M.inFlight = false");
    b1Lines.push('    if res["b2_trace"] ~= nil then');
    b1Lines.push('        lua_flow_trace("bridge-b2", tostring(res["b2_trace"]))');
    b1Lines.push("    end");
    b1Lines.push('    lua_flow_trace("bridge-b2", "tx_b2_to_b1=" .. tostring(content))');
    b1Lines.push('    local payload = { result = res["result"] or "ACK", error = res["error"] or "ERR", status = res["status"] or "", baby_gender = res["baby_gender"] or "Unknown" }');
    if (bridgeNodes.length === 0) {
      b1Lines.push('    lua_flow_trace("bridge", "rx_b2_to_b1=" .. tostring(content))');
    } else {
      bridgeNodes.forEach((bNode, bIdx) => {
        const keyword = bIdx === 0 ? "if" : "elseif";
        b1Lines.push(`    ${keyword} pending_entry.node_id == ${luaString(bNode.id)} then`);
        b1Lines.push(`        if res["ok"] == "true" then`);
        b1Lines.push(`            lua_flow_trace(${luaString(bNode.id)}, "rx_ok req_id=" .. tostring(req_id) .. " result=" .. tostring(res["result"]))`);
        emitB1Continuation(findTarget(graph, bNode.id, "ok"), 3, new Set([bNode.id]));
        b1Lines.push("        else");
        b1Lines.push(`            lua_flow_trace(${luaString(bNode.id)}, "rx_err req_id=" .. tostring(req_id) .. " error=" .. tostring(res["error"]))`);
        emitB1Continuation(findTarget(graph, bNode.id, "error"), 3, new Set([bNode.id]));
        b1Lines.push("        end");
      });
      b1Lines.push("    end");
    }
    b1Lines.push("    lua_flow_sync_trace()");
    b1Lines.push("end", "");

    b1Lines.push("---@param self table");
    b1Lines.push("---@param owner FB2Character");
    b1Lines.push("function M.on_end(self, owner)");
    b1Lines.push("    for _, item in ipairs(self.handles or {}) do");
    b1Lines.push("        if item.handle then pcall(inzoi.event.off, item.event, item.handle) end");
    b1Lines.push("    end");
    b1Lines.push("    self.handles = {}");
    b1Lines.push("    self.pending = {}");
    b1Lines.push("end", "", "return M");

    const b2Lines = [
      "local M = {}",
      "",
      `local REQ_CHANNEL = ${luaString(B1B2_CONTRACT.reqChannel)}`,
      `local RES_CHANNEL = ${luaString(B1B2_CONTRACT.resChannel)}`,
      "",
      "---@param node_id string",
      "---@param message string",
      "local function lua_flow_trace(node_id, message)",
      '    print("[LuaFlow][B2][" .. node_id .. "] " .. message)',
      "end",
      "",
      "local function lua_flow_get_id(value)",
      '    if type(value) == "table" or type(value) == "userdata" then',
      "        local ok, id = pcall(function() return value.Value end)",
      "        if ok and id ~= nil then return id end",
      "    end",
      "    return value",
      "end",
      "",
      "local function lua_flow_bio_op(entity, max_babies, stage_mode)",
      '    local gender_str = "Unknown"',
      "    local step_ok = false",
      "    pcall(function()",
      "        local comp = entity:GetComponent(inzoi.EB2ComponentType.Bio)",
      "        if comp ~= nil then",
      "            comp.MaxPregnancyCount = tonumber(max_babies) or 1",
      '            if stage_mode == "NextStage" then',
      "                step_ok = comp:ProceedToNextPregnancyState() == true",
      "            end",
      "            gender_str = tostring(comp:GetBabySpawnDataGenderType())",
      "        end",
      "    end)",
      "    return gender_str, step_ok",
      "end",
      "",
      "---@param fields table",
      "---@return string",
      "local function encode_packet(fields)",
      "    local parts = {}",
      "    for k, v in pairs(fields) do",
      '        local sk = tostring(k):gsub("[|=]", "_")',
      '        local sv = tostring(v):gsub("[|=]", "_")',
      '        parts[#parts + 1] = sk .. "=" .. sv',
      "    end",
      '    return table.concat(parts, "|")',
      "end",
      "",
      "---@param raw string",
      "---@return table",
      "local function decode_packet(raw)",
      "    local out = {}",
      '    if type(raw) ~= "string" then return out end',
      '    for token in string.gmatch(raw, "[^|]+") do',
      '        local eq = string.find(token, "=", 1, true)',
      "        if eq and eq > 1 then",
      "            out[string.sub(token, 1, eq - 1)] = string.sub(token, eq + 1)",
      "        end",
      "    end",
      "    return out",
      "end",
      "",
      "---@param self table",
      "---@param owner FB2Character",
      "function M.on_begin(self, owner)",
      "    self.handled = 0",
      "    self.flightTicks = 0",
      "    self.flightTargetZ = nil",
      "    local owner_id = owner:GetEntityId()",
      "    local owner_num = tostring(lua_flow_get_id(owner_id))",
      "    local ok_pos, is_pos = pcall(function() return inzoi.entity.is_possessed(owner_id) end)",
      "    if ok_pos and is_pos == true then",
      "        M.b2BeginSent = true",
      '        lua_flow_trace("runtime", "on_begin entity_id=" .. owner_num .. " possessed=true")',
      '        inzoi.message.send_to_client(owner_id, RES_CHANNEL, encode_packet({ boot = "b2_on_begin", entity_id = owner_num, possessed = "true" }))',
      "    elseif not M.b2BeginSent then",
      "        M.b2BeginSent = true",
      '        lua_flow_trace("runtime", "on_begin entity_id=" .. owner_num .. " possessed=false")',
      '        inzoi.message.send_to_client(owner_id, RES_CHANNEL, encode_packet({ boot = "b2_on_begin", entity_id = owner_num, possessed = "false" }))',
      "    end",
      "end",
      "",
      "---@param self table",
      "---@param owner FB2Character",
      "---@param dt number",
      "function M.on_tick(self, owner, dt)",
      "    if (self.flightTicks or 0) <= 0 then return end",
      "    self.flightTicks = self.flightTicks - 1",
      "    local loc = owner:GetLocation()",
      "    if loc ~= nil and self.flightTargetZ ~= nil then",
      "        loc.Z = self.flightTargetZ",
      "        owner:SetLocationOnlySimul(loc)",
      "        owner:ForceSendMovementData()",
      "    end",
      "    if self.flightTicks <= 0 then",
      "        owner:RequestSnapToGround()",
      '        lua_flow_trace("bridge", "flight_landed_snap_to_ground")',
      "    end",
      "end",
      "",
      "---@param self table",
      "---@param owner FB2Character",
      "---@param msg_type string",
      "---@param content string",
      "function M.on_lua_message(self, owner, msg_type, content)",
      "    if msg_type ~= REQ_CHANNEL then return end",
      "    local req = decode_packet(content)",
      '    local req_id = req["req_id"] or "0"',
      '    local op = req["op"] or ""',
      "    local owner_id = owner:GetEntityId()",
      "    local owner_num = tostring(lua_flow_get_id(owner_id))",
      '    lua_flow_trace("bridge", "rx_b1_to_b2 req_id=" .. tostring(req_id) .. " op=" .. tostring(op) .. " entity_id=" .. owner_num)',
      '    if op == "" then',
      "        local err_pkt = encode_packet({ req_id = req_id, op = op, ok = \"false\", status = \"ERR_INVALID_CONTRACT\", result = \"none\", error = \"missing_op\" })",
      '        lua_flow_trace("bridge", "tx_b2_to_b1 req_id=" .. tostring(req_id) .. " status=ERR_INVALID_CONTRACT")',
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, err_pkt)",
      "        return",
      "    end",
      '    if op == "verify_sim_authority" then',
      '        local ok_cli, msg_cli = inzoi.cli.execute("weather.list")',
      "        self.handled = (self.handled or 0) + 1",
      '        lua_flow_trace("bridge", "exec op=" .. tostring(op) .. " cli=weather.list ok=" .. tostring(ok_cli))',
      '        local b2_trace = "rx_req_id=" .. tostring(req_id) .. ":op=" .. tostring(op) .. ":cli=weather.list:ok=" .. tostring(ok_cli) .. ":tx_res=" .. tostring(req_id)',
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_cli and "true" or "false",',
      '            status = ok_cli and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_cli and ("B2_ACK_" .. owner_num) or "none",',
      '            error = ok_cli and "none" or tostring(msg_cli or "cli_failed"),',
      "            b2_trace = b2_trace",
      "        })",
      '        lua_flow_trace("bridge", "tx_b2_to_b1 req_id=" .. tostring(req_id) .. " status=" .. (ok_cli and "EXEC_OK" or "ERR_CLI_EXEC") .. " result=" .. (ok_cli and ("B2_ACK_" .. owner_num) or "none"))',
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "needs.set_full" then',
      '        local cat = (req["category"] or "Energy"):gsub("[^%w_.%-]", "")',
      '        local ok_cli, msg_cli = inzoi.cli.execute("needs.set_full category=" .. cat .. " entity_id=" .. owner_num)',
      "        self.handled = (self.handled or 0) + 1",
      '        lua_flow_trace("bridge", "exec op=" .. tostring(op) .. " cli=needs.set_full ok=" .. tostring(ok_cli))',
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_cli and "true" or "false",',
      '            status = ok_cli and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_cli and ("NEEDS_FULL_" .. cat) or "none",',
      '            error = ok_cli and "none" or tostring(msg_cli or "cli_failed")',
      "        })",
      '        lua_flow_trace("bridge", "tx_b2_to_b1 req_id=" .. tostring(req_id) .. " status=" .. (ok_cli and "EXEC_OK" or "ERR_CLI_EXEC"))',
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "weather.control" then',
      '        local wtype = (req["weather_type"] or "Rain"):gsub("[^%w_.%-]", "")',
      '        local stype = (req["season_type"] or "Winter"):gsub("[^%w_.%-]", "")',
      '        local temp = (req["temperature"] or "5"):gsub("[^%w_.%-]", "")',
      '        local ok_w, msg_w = inzoi.cli.execute("weather.control weather_type=" .. wtype)',
      '        if stype ~= "" then inzoi.cli.execute("weather.season season_type=" .. stype) end',
      '        if temp ~= "" then inzoi.cli.execute("weather.temperature temperature=" .. temp) end',
        '        if req["enable_era_map_conversion"] == "true" then',
        '            pcall(function() inzoi.cli.execute("building.edit_all_site enable=true") end)',
        '            pcall(function()',
        '                local siteMgr = inzoi.getB2Manager("FB2SiteManager")',
        '                if siteMgr and req["era_hanok_preset_mode"] ~= "keep_buildings" then',
        '                    local hanokMap = { Gangnam_Residence_Free01 = "Gangnam_Residence_Free01_06", Gangnam_Residence_Free03 = "Gangnam_Residence_Free03_10", Gangnam_Residence_Free07 = "Gangnam_Residence_Free07_05", Gangnam_Residence_Free08 = "Gangnam_Residence_Free08_05" }',
        '                    for siteId, presetId in pairs(hanokMap) do',
        '                        local site = siteMgr:FindSiteBySiteId(siteId)',
        '                        if site then site.bTakeOffShoes = true; pcall(function() site:ApplySitePreset(presetId) end) end',
        '                    end',
        '                end',
        '            end)',
        '            if req["era_purge_vehicles_and_appliances"] ~= "false" then',
        '                pcall(function()',
        '                    local entityMgr = inzoi.getB2Manager("FB2EntityManager")',
        '                    if entityMgr then',
        '                        local vehicles = entityMgr:GetAllEntities(inzoi.EB2EntityType.Vehicle) or {}',
        '                        for i = 1, #vehicles do pcall(function() entityMgr:DestroyObject(vehicles[i], inzoi.EB2EntityDestroyReason.Script) end) end',
        '                    end',
        '                end)',
        '            end',
        '        end',
        "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_w and "true" or "false",',
      '            status = ok_w and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_w and ("WEATHER_" .. wtype .. "_" .. stype .. "_" .. temp .. "C") or "none",',
      '            error = ok_w and "none" or tostring(msg_w or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "time.DefaultDaySkip" then',
      '        local mult = (req["multiplier"] or "5.0"):gsub("[^%w_.%-]", "")',
      '        local ok_t, msg_t = inzoi.cli.execute("time.DefaultDaySkip")',
      '        if mult ~= "" then inzoi.cli.execute("game.set_speed multiplier=" .. mult) end',
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_t and "true" or "false",',
      '            status = ok_t and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_t and ("DAY_SKIP_SPEED_" .. mult) or "none",',
      '            error = ok_t and "none" or tostring(msg_t or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "aging.set_growth_step" then',
      '        local step = (req["step"] or "OldAge"):gsub("[^%w_.%-]", "")',
      '        local ok_g, msg_g = inzoi.cli.execute("aging.set_growth_step entity_id=" .. owner_num .. " step=" .. step)',
      "        local rb_step = tostring(owner:GetGrowthStep())",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_g and "true" or "false",',
      '            status = ok_g and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_g and ("GROWTH_" .. step .. "_CPP_" .. rb_step) or "none",',
      '            error = ok_g and "none" or tostring(msg_g or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "emotion.add" then',
      '        local emo = (req["emotion_id"] or "Joyful"):gsub("[^%w_.%-]", "")',
      '        local lvl = (req["level"] or "2"):gsub("[^%w_.%-]", "")',
      '        local ok_e, msg_e = inzoi.cli.execute("emotion.add entity_id=" .. owner_num .. " emotion_id=" .. emo .. " level=" .. lvl)',
      "        local dom = tostring(owner:GetDominantEmotion())",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_e and "true" or "false",',
      '            status = ok_e and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_e and ("EMO_" .. emo .. "_DOM_" .. dom) or "none",',
      '            error = ok_e and "none" or tostring(msg_e or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "emotion.reset" then',
      '        local ok_er, msg_er = inzoi.cli.execute("emotion.reset entity_id=" .. owner_num)',
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_er and "true" or "false",',
      '            status = ok_er and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_er and "EMOTION_RESET_OK" or "none",',
      '            error = ok_er and "none" or tostring(msg_er or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "currency.set" then',
      '        local amt = (req["amount"] or "999999"):gsub("[^%w_.%-]", "")',
      '        local ok_c, msg_c = inzoi.cli.execute("currency.set amount=" .. amt)',
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_c and "true" or "false",',
      '            status = ok_c and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_c and ("CURRENCY_" .. amt) or "none",',
      '            error = ok_c and "none" or tostring(msg_c or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "social.create_relationship" then',
      '        local tid = (req["target_entity_id"] or "2"):gsub("[^%w_.%-]", "")',
      '        local rtype = (req["relationship_type"] or "Friend"):gsub("[^%w_.%-]", "")',
      '        local ok_r, msg_r = inzoi.cli.execute("social.create_relationship entity_id=" .. owner_num .. " target_entity_id=" .. tid .. " relationship_type=" .. rtype)',
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_r and "true" or "false",',
      '            status = ok_r and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_r and ("REL_" .. rtype .. "_" .. tid) or "none",',
      '            error = ok_r and "none" or tostring(msg_r or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "schedule.AdvanceToNextSchedule" then',
      '        local ok_s, msg_s = inzoi.cli.execute("schedule.AdvanceToNextSchedule entity_id=" .. owner_num)',
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_s and "true" or "false",',
      '            status = ok_s and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_s and "SCHEDULE_ADVANCED" or "none",',
      '            error = ok_s and "none" or tostring(msg_s or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "movement.teleport" then',
      '        local dest = (req["destination"] or "Gangnam_Public_CentralPark"):gsub("[^%w_.%-]", "")',
      '        local ok_tp, msg_tp = inzoi.cli.execute("movement.teleport entity_id=" .. owner_num .. " destination=" .. dest)',
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_tp and "true" or "false",',
      '            status = ok_tp and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_tp and ("TELEPORT_" .. dest) or "none",',
      '            error = ok_tp and "none" or tostring(msg_tp or "cli_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "movement.cpp_set_location_simul" or op == "vehicle.attach_flying_prop" then',
      '        local dz = tonumber(req["delta_z"] or "250") or 250',
      '        local ticks = tonumber(req["ticks"] or "90") or 90',
      "        local loc = owner:GetLocation()",
      "        if loc ~= nil then",
      "            loc.Z = loc.Z + dz",
      "            self.flightTargetZ = loc.Z",
      "            self.flightTicks = ticks",
      "            owner:SetLocationOnlySimul(loc)",
      "            owner:ForceSendMovementData()",
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "CPP_FLIGHT_Z_PLUS_" .. tostring(dz) .. "_TICKS_" .. tostring(ticks),',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "interaction.clear_queue" then',
      '        local ok_cli, msg_cli = inzoi.cli.execute("interaction.clear_queue cancel_current=true entity_id=" .. owner_num)',
      "        self.handled = (self.handled or 0) + 1",
      '        lua_flow_trace("bridge", "exec op=" .. tostring(op) .. " cli=interaction.clear_queue ok=" .. tostring(ok_cli))',
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_cli and "true" or "false",',
      '            status = ok_cli and "EXEC_OK" or "ERR_CLI_EXEC",',
      '            result = ok_cli and "QUEUE_CLEARED" or "none",',
      '            error = ok_cli and "none" or tostring(msg_cli or "cli_failed")',
      "        })",
      '        lua_flow_trace("bridge", "tx_b2_to_b1 req_id=" .. tostring(req_id) .. " status=" .. (ok_cli and "EXEC_OK" or "ERR_CLI_EXEC"))',
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "pregnancy.context_suite" then',
      '        local allow_male = (req["allow_male_pregnancy"] or "true") == "true"',
      '        local partner_id = (req["partner_entity_id"] or "2"):gsub("[^%w_.%-]", "")',
      '        local stage_mode = (req["stage_mode"] or "NextStage"):gsub("[^%w_.%-]", "")',
      '        local max_babies = (req["max_babies"] or "2"):gsub("[^0-9]", "")',
      '        local apply_gen = (req["apply_genetics"] or "true") == "true"',
      '        local trait_id = (req["trait_id"] or "Trait_Creative"):gsub("[^%w_.%-]", "")',
      '        local parent_bond = (req["create_parent_bond"] or "true") == "true"',
      "        if allow_male then",
      '            inzoi.cli.execute("bio.set_gender entity_id=" .. owner_num .. " gender=Female")',
      "        end",
      "        if parent_bond and partner_id ~= \"\" then",
      '            inzoi.cli.execute("social.create_relationship entity_id=" .. owner_num .. " target_entity_id=" .. partner_id .. " relationship_type=Spouse")',
      "        end",
      "        local ok_preg, msg_preg",
      '        if stage_mode == "Cancel" then',
      '            ok_preg, msg_preg = inzoi.cli.execute("pregnancy_and_birth.remove_pregnancy entity_id=" .. owner_num)',
      '        elseif stage_mode == "InstantBirth" then',
      '            inzoi.cli.execute("pregnancy_and_birth.get_baby_with entity_id=" .. owner_num .. " partner_entity_id=" .. partner_id)',
      '            ok_preg, msg_preg = inzoi.cli.execute("pregnancy_and_birth.hello_my_angel entity_id=" .. owner_num)',
      "        else",
      '            ok_preg, msg_preg = inzoi.cli.execute("pregnancy_and_birth.get_baby_with entity_id=" .. owner_num .. " partner_entity_id=" .. partner_id)',
      "        end",
      "        local baby_gender, step_advanced = lua_flow_bio_op(owner, max_babies, stage_mode)",
      '        if apply_gen and trait_id ~= "" then',
      '            inzoi.cli.execute("appearance.set_trait entity_id=" .. owner_num .. " trait_id=" .. trait_id)',
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_preg and "true" or "false",',
      '            status = ok_preg and "EXEC_OK" or "ERR_CLI_EXEC",',
      "            baby_gender = baby_gender,",
      '            result = "PREG_" .. stage_mode .. "_BABIES_" .. max_babies .. "_GENDER_" .. baby_gender .. "_STEP_" .. tostring(step_advanced),',
      '            error = ok_preg and "none" or tostring(msg_preg or "pregnancy_failed")',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "appearance.context_suite" then',
      '        local sync_trait = (req["sync_trait"] or "true") == "true"',
      '        local trait_id = (req["trait_id"] or "Trait_Charismatic"):gsub("[^%w_.%-]", "")',
      '        local outfit_cat = (req["outfit_category"] or "Formal"):gsub("[^%w_.%-]", "")',
      "        local ok_app = true",
      '        if sync_trait and trait_id ~= "" then',
      '            ok_app = inzoi.cli.execute("appearance.set_trait entity_id=" .. owner_num .. " trait_id=" .. trait_id)',
      '            inzoi.cli.execute("emotion.add entity_id=" .. owner_num .. " emotion_id=Confident level=2")',
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = ok_app and "true" or "false",',
      '            status = "EXEC_OK",',
      '            result = "APPEARANCE_OUTFIT_" .. outfit_cat .. "_TRAIT_" .. trait_id,',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "vehicle.context_suite" then',
      '        local scan_nearby = (req["scan_nearby"] or "true") == "true"',
      '        local radius = (req["search_radius"] or "80.0"):gsub("[^0-9.]", "")',
      '        local board = (req["board_vehicle"] or "true") == "true"',
      '        local veh_id = (req["vehicle_entity_id"] or "10"):gsub("[^0-9]", "")',
      '        local bag_id = (req["interaction_bag_id"] or "Vehicle_Drive"):gsub("[^%w_.%-]", "")',
      '        local cpp_flight = (req["enable_cpp_flight"] or "true") == "true"',
      '        local dz = tonumber(req["delta_z"] or "280") or 280',
      '        local ticks = tonumber(req["ticks"] or "90") or 90',
      "        if scan_nearby then",
      '            inzoi.cli.execute("entity.scan_vehicles entity_id=" .. owner_num .. " search_radius=" .. radius)',
      "        end",
      "        if board and veh_id ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. veh_id .. " interaction_bag_id=" .. bag_id .. " insert_front=true")',
      "        end",
      "        if cpp_flight then",
      "            local loc = owner:GetLocation()",
      "            if loc ~= nil then",
      "                loc.Z = loc.Z + dz",
      "                self.flightTargetZ = loc.Z",
      "                self.flightTicks = ticks",
      "                owner:SetLocationOnlySimul(loc)",
      "                owner:ForceSendMovementData()",
      "            end",
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "VEHICLE_BAG_" .. bag_id .. "_FLIGHT_Z_" .. tostring(dz),',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "furniture.context_suite" then',
      '        local scan_obj = (req["scan_objects"] or "true") == "true"',
      '        local place_new = (req["place_new_object"] or "true") == "true"',
      '        local tpl_id = (req["object_template_id"] or "Obj_Sofa_Modern_01"):gsub("[^%w_.%-]", "")',
      '        local scale_obj = (req["scale_object"] or "true") == "true"',
      '        local target_obj = (req["target_object_id"] or "20"):gsub("[^0-9]", "")',
      '        local scale_val = (req["scale"] or "1.25"):gsub("[^0-9.]", "")',
      '        local chg_mat = (req["change_material"] or "true") == "true"',
      '        local mat_id = (req["material_id"] or "Mat_Wood_Oak"):gsub("[^%w_.%-]", "")',
      '        local use_furn = (req["use_furniture"] or "true") == "true"',
      '        local bag_id = (req["interaction_bag_id"] or "Sit"):gsub("[^%w_.%-]", "")',
      "        if scan_obj then",
      '            inzoi.cli.execute("entity.scan_objects entity_id=" .. owner_num .. " search_radius=25.0")',
      "        end",
      "        if place_new and tpl_id ~= \"\" then",
      '            inzoi.cli.execute("building.place_object object_template_id=" .. tpl_id)',
      "        end",
      "        if scale_obj and target_obj ~= \"\" then",
      '            inzoi.cli.execute("building.set_object_scale entity_id=" .. target_obj .. " scale=" .. scale_val)',
      "        end",
      "        if chg_mat and target_obj ~= \"\" then",
      '            inzoi.cli.execute("build.set_object_material entity_id=" .. target_obj .. " material_id=" .. mat_id)',
      "        end",
      "        if use_furn and target_obj ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. target_obj .. " interaction_bag_id=" .. bag_id .. " insert_front=true")',
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "FURNITURE_" .. tpl_id .. "_MAT_" .. mat_id .. "_USE_" .. bag_id,',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "life.context_suite" then',
      '        local chg_age = (req["change_age_step"] or "true") == "true"',
      '        local step = (req["growth_step"] or "YoungAdult"):gsub("[^%w_.%-]", "")',
      '        local refill = (req["refill_needs"] or "true") == "true"',
      '        local need_cat = (req["need_category"] or "Energy"):gsub("[^%w_.%-]", "")',
      '        local boost_emo = (req["boost_emotion"] or "true") == "true"',
      '        local emo_id = (req["emotion_id"] or "Joyful"):gsub("[^%w_.%-]", "")',
      '        local grant_curr = (req["grant_currency"] or "true") == "true"',
      '        local curr_amt = (req["currency_amount"] or "500000"):gsub("[^0-9]", "")',
      '        local create_rel = (req["create_relationship"] or "true") == "true"',
      '        local target_id = (req["target_entity_id"] or "2"):gsub("[^0-9]", "")',
      '        local rel_type = (req["relationship_type"] or "Friend"):gsub("[^%w_.%-]", "")',
      "        if chg_age then",
      '            inzoi.cli.execute("aging.set_growth_step entity_id=" .. owner_num .. " step=" .. step)',
      "        end",
      "        if refill then",
      '            inzoi.cli.execute("needs.set_full entity_id=" .. owner_num .. " category=" .. need_cat)',
      "        end",
      "        if boost_emo then",
      '            inzoi.cli.execute("emotion.add entity_id=" .. owner_num .. " emotion_id=" .. emo_id .. " level=2")',
      "        end",
      "        if grant_curr then",
      '            inzoi.cli.execute("currency.set amount=" .. curr_amt)',
      "        end",
      "        if create_rel and target_id ~= \"\" then",
      '            inzoi.cli.execute("social.create_relationship entity_id=" .. owner_num .. " target_entity_id=" .. target_id .. " relationship_type=" .. rel_type)',
      "        end",
      "        local rb_step = tostring(owner:GetGrowthStep())",
      "        local rb_emo = tostring(owner:GetDominantEmotion())",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "LIFE_" .. rb_step .. "_EMO_" .. rb_emo .. "_MEW_" .. curr_amt,',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "weather.context_suite" then',
      '        local chg_w = (req["change_weather"] or "true") == "true"',
      '        local w_state = (req["weather_state"] or "Rain"):gsub("[^%w_.%-]", "")',
      '        local w_lvl = (req["weather_level"] or "3"):gsub("[^0-9]", "")',
      '        local chg_s = (req["change_season"] or "true") == "true"',
      '        local s_id = (req["season"] or "Winter"):gsub("[^%w_.%-]", "")',
      '        local skip_d = (req["skip_day"] or "false") == "true"',
      '        local adv_sched = (req["advance_schedule"] or "true") == "true"',
      "        if chg_w then",
      '            inzoi.cli.execute("weather.control state=" .. w_state .. " level=" .. w_lvl)',
      "        end",
      "        if chg_s then",
      '            inzoi.cli.execute("environment.change_season season=" .. s_id)',
      "        end",
      "        if skip_d then",
      '            inzoi.cli.execute("time.DefaultDaySkip")',
      "        end",
      "        if adv_sched then",
      '            inzoi.cli.execute("schedule.AdvanceToNextSchedule entity_id=" .. owner_num)',
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "WEATHER_" .. w_state .. "_SEASON_" .. s_id,',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "zoi_self.context_suite" then',
      '        local use_phone = (req["use_smartphone"] or "true") == "true"',
      '        local phone_bag = (req["smartphone_bag_id"] or "Self_SmartPhone_Check"):gsub("[^%w_.%-]", "")',
      '        local loc_veh = (req["locate_parked_vehicle"] or "true") == "true"',
      '        local park_act = (req["parking_action"] or "scan_and_toast"):gsub("[^%w_.%-]", "")',
      '        local cctv_mon = (req["cctv_office_monitor"] or "true") == "true"',
      '        local mng_grp = (req["manage_group"] or "true") == "true"',
      '        local grp_act = (req["group_action"] or "follow"):gsub("[^%w_.%-]", "")',
      '        local grp_tid = (req["group_target_id"] or "20524"):gsub("[^0-9]", "")',
      '        local mng_biz = (req["manage_business"] or "true") == "true"',
      '        local biz_act = (req["biz_action"] or "get_info"):gsub("[^%w_.%-]", "")',
      '        local biz_task = (req["biz_employee_task"] or "Cooking"):gsub("[^%w_.%-]", "")',
      '        local run_pers = (req["run_personal_action"] or "false") == "true"',
      '        local pers_bag = (req["personal_bag_id"] or "Self_Pose_CatHeart"):gsub("[^%w_.%-]", "")',
      '        local run_skill = (req["run_interactive_skill"] or "false") == "true"',
      '        local skill_bag = (req["interactive_bag_id"] or "Self_Busking_Song"):gsub("[^%w_.%-]", "")',
      '        local clean_on = (req["enable_cleaning_suite"] or "true") == "true"',
      '        local clean_mode = (req["cleaning_mode"] or "instant_clean"):gsub("[^%w_.%-]", "")',
      '        local ai_emote = (req["enable_ai_emote"] or "true") == "true"',
      '        local slm_prompt = (req["query_slm_prompt"] or "Saluda"):gsub("[^%w_.%-]", "_")',
      "        if use_phone and phone_bag ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. owner_num .. " interaction_bag_id=" .. phone_bag .. " insert_front=true")',
      "        end",
      "        if loc_veh then",
      '            inzoi.cli.execute("entity.scan_vehicles entity_id=" .. owner_num .. " search_radius=120.0")',
      '            inzoi.cli.execute("entity.get_vehicle_info entity_id=" .. owner_num)',
      '            if park_act == "return_to_parking" then',
      '                inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. owner_num .. " interaction_bag_id=Self_ReturnToParkingPlace insert_front=true")',
      "            end",
      "        end",
      "        if cctv_mon then",
      '            inzoi.cli.execute("household_biz.list_employees entity_id=" .. owner_num)',
      '            inzoi.cli.execute("household_biz.get_employee_activities entity_id=" .. owner_num)',
      "        end",
      "        if mng_grp then",
      '            inzoi.cli.execute("zoi_group." .. grp_act .. " entity_id=" .. owner_num .. " target_entity_id=" .. grp_tid)',
      "        end",
      "        if mng_biz then",
      '            inzoi.cli.execute("household_biz." .. biz_act .. " entity_id=" .. owner_num .. " task=" .. biz_task)',
      "        end",
      "        if run_pers and pers_bag ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. owner_num .. " interaction_bag_id=" .. pers_bag)',
      "        end",
      "        if run_skill and skill_bag ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. owner_num .. " interaction_bag_id=" .. skill_bag)',
      "        end",
      "        if clean_on then",
      '            if clean_mode == "stop_cleaning" then',
      '                inzoi.cli.execute("quality_of_life.stop_cleaning entity_id=" .. owner_num)',
      "            else",
      '                inzoi.cli.execute("cleaning." .. clean_mode .. " entity_id=" .. owner_num)',
      "            end",
      "        end",
      "        if ai_emote then",
      '            inzoi.cli.execute("smartzoi.request_query_slm entity_id=" .. owner_num .. " prompt=" .. slm_prompt)',
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "ZOI_SELF_" .. phone_bag .. "_PARK_" .. park_act .. "_BIZ_" .. biz_act,',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      '    elseif op == "zoi_social.context_suite" then',
      '        local talk_cat = (req["talk_submenu_category"] or "Romance"):gsub("[^%w_.%-]", "")',
      '        local target_id = (req["target_zoi_id"] or "20524"):gsub("[^0-9]", "")',
      '        local run_daily = (req["run_daily_talk"] or "true") == "true"',
      '        local daily_bag = (req["daily_bag_id"] or "Co_ExpectantParents_03"):gsub("[^%w_.%-]", "")',
      '        local run_rom = (req["run_romance_suite"] or "true") == "true"',
      '        local rom_bag = (req["romance_bag_id"] or "Co_Family_Spouse_R05"):gsub("[^%w_.%-]", "")',
      '        local mar_act = (req["marriage_action"] or "none"):gsub("[^%w_.%-]", "")',
      '        local run_aff = (req["run_affection_suite"] or "true") == "true"',
      '        local aff_bag = (req["affection_bag_id"] or "Co_Family_Spouse_A03"):gsub("[^%w_.%-]", "")',
      '        local run_conf = (req["run_conflict_or_humor"] or "false") == "true"',
      '        local tone_bag = (req["social_tone_bag_id"] or "Int_Humor_Joke_01"):gsub("[^%w_.%-]", "")',
      '        local wipe_mem = (req["memory_wipe_obliviate"] or "false") == "true"',
      '        local adj_rel = (req["adjust_relationship_score"] or "true") == "true"',
      '        local rel_preset = (req["relation_preset"] or "set_full"):gsub("[^%w_.%-]", "")',
      '        local rel_delta = (req["relation_Delta"] or "80"):gsub("[^0-9%-]", "")',
      '        local inj_talk = (req["inject_custom_talk_option"] or "true") == "true"',
      '        local talk_name = (req["custom_talk_name"] or "Dialogo_Mod"):gsub("[^%w_.%-]", "_")',
      '        local talk_buff = (req["custom_talk_buff"] or "Flutter"):gsub("[^%w_.%-]", "")',
      '        local unlock_vis = (req["unlock_visibility_conditions"] or "true") == "true"',
      '        local multi_fam = (req["enable_multi_family_targets"] or "true") == "true"',
      '        local fam_scope = (req["family_target_scope"] or "selected_members"):gsub("[^%w_.%-]", "")',
      '        local sel_members = (req["selected_member_ids"] or "20524,20525,20526"):gsub("[^0-9,]", "")',
      '        local batch_act = (req["batch_family_action"] or "prank_all_selected"):gsub("[^%w_.%-]", "")',
      '        local host_swap = (req["runtime_host_swapping"] or "true") == "true"',
      '        local swap_mode = (req["host_swap_mode"] or "full_possess_and_restore"):gsub("[^%w_.%-]", "")',
      '        local target_host = (req["target_host_id"] or target_id):gsub("[^0-9]", "")',
      '        local restore_evt = (req["restore_on_event"] or "interaction.finished"):gsub("[^%w_.%-]", "")',
      "        local targets = {}",
      "        if multi_fam then",
      '            if fam_scope == "all_household" then',
      '                inzoi.cli.execute("household.get_members")',
      "            end",
      '            for m_id in sel_members:gmatch("(%d+)") do',
      "                if m_id ~= \"\" and m_id ~= owner_num then",
      "                    table.insert(targets, m_id)",
      "                end",
      "            end",
      "        end",
      "        if #targets == 0 and target_id ~= \"\" then",
      "            table.insert(targets, target_id)",
      "        end",
      "        if run_daily and daily_bag ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. target_id .. " interaction_bag_id=" .. daily_bag)',
      "        end",
      "        if run_rom then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. target_id .. " interaction_bag_id=" .. rom_bag)',
      '            if mar_act ~= "none" and mar_act ~= "" then',
      '                inzoi.cli.execute("marriage." .. mar_act .. " entity_id=" .. owner_num .. " target_entity_id=" .. target_id)',
      "            end",
      "        end",
      "        if run_aff and aff_bag ~= \"\" then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. target_id .. " interaction_bag_id=" .. aff_bag)',
      "        end",
      "        if run_conf then",
      '            inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. target_id .. " interaction_bag_id=" .. tone_bag)',
      "            if wipe_mem then",
      '                inzoi.cli.execute("relationships.obliviate entity_id=" .. owner_num .. " target_entity_id=" .. target_id)',
      "            end",
      "        end",
      "        if adj_rel then",
      '            if rel_preset == "custom_value" then',
      '                inzoi.cli.execute("relationships.set_value_between entity_id=" .. owner_num .. " target_entity_id=" .. target_id .. " value=" .. rel_delta)',
      '                inzoi.cli.execute("environment.reset_karma entity_id=" .. owner_num)',
      "            else",
      '                inzoi.cli.execute("relationships." .. rel_preset .. " entity_id=" .. owner_num .. " target_entity_id=" .. target_id)',
      "            end",
      "        end",
      "        if inj_talk then",
      '            inzoi.cli.execute("data.patch table=TalkSelection row=" .. talk_name .. " category=" .. talk_cat .. " unlock=" .. tostring(unlock_vis))',
      '            inzoi.cli.execute("buff.add entity_id=" .. owner_num .. " buff_id=" .. talk_buff)',
      "        end",
      "        if multi_fam then",
      "            for _, m_id in ipairs(targets) do",
      '                if batch_act == "prank_all_selected" then',
      '                    inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. m_id .. " interaction_bag_id=Int_Humor_Joke_01 insert_front=true")',
      '                    inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. m_id .. " interaction_bag_id=Self_Karma_SendPrank")',
      '                elseif batch_act == "gift_affection_all" then',
      '                    inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. m_id .. " interaction_bag_id=Co_Family_Spouse_A03 insert_front=true")',
      '                elseif batch_act == "summon_and_greet_all" then',
      '                    inzoi.cli.execute("movement.summon entity_id=" .. m_id)',
      '                    inzoi.cli.execute("interaction.execute entity_id=" .. owner_num .. " target_entity_id=" .. m_id .. " interaction_bag_id=Int_DailyLife_Lv1_01 insert_front=true")',
      "                end",
      "            end",
      "        end",
      "        if host_swap and target_host ~= \"\" then",
      '            local orig_host_id = owner_num',
      '            inzoi.cli.execute("entity.get_possessed")',
      '            if swap_mode == "full_possess_and_restore" then',
      '                inzoi.cli.execute("entity.possess entity_id=" .. target_host)',
      '                inzoi.cli.execute("interaction.execute entity_id=" .. target_host .. " target_entity_id=" .. orig_host_id .. " interaction_bag_id=" .. tone_bag .. " insert_front=true")',
      '                if restore_evt == "interaction.finished" then',
      "                    local restore_h = nil",
      '                    restore_h = inzoi.event.on("interaction.finished", function(_)',
      '                        inzoi.cli.execute("entity.possess entity_id=" .. orig_host_id)',
      "                        if restore_h ~= nil then inzoi.event.off(restore_h); restore_h = nil end",
      "                    end)",
      "                else",
      '                    inzoi.cli.execute("entity.possess entity_id=" .. orig_host_id)',
      "                end",
      '            elseif swap_mode == "invert_b2_no_cam_loss" then',
      "                for _, m_id in ipairs(targets) do",
      '                    inzoi.cli.execute("interaction.execute entity_id=" .. m_id .. " target_entity_id=" .. orig_host_id .. " interaction_bag_id=" .. tone_bag .. " insert_front=true")',
      "                end",
      '            elseif swap_mode == "sequential_family_chain" then',
      "                for _, m_id in ipairs(targets) do",
      '                    inzoi.cli.execute("entity.possess entity_id=" .. m_id)',
      '                    inzoi.cli.execute("interaction.execute entity_id=" .. m_id .. " target_entity_id=" .. orig_host_id .. " interaction_bag_id=" .. tone_bag .. " insert_front=true")',
      "                end",
      '                inzoi.cli.execute("entity.possess entity_id=" .. orig_host_id)',
      "            end",
      "        end",
      "        self.handled = (self.handled or 0) + 1",
      "        local res_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "true",',
      '            status = "EXEC_OK",',
      '            result = "ZOI_SOCIAL_" .. talk_cat .. "_TARGET_" .. target_id .. "_SWAP_" .. swap_mode .. "_FAM_" .. tostring(#targets),',
      '            error = "none"',
      "        })",
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, res_pkt)",
      "        return",
      "    else",
      "        local unsupported_pkt = encode_packet({",
      "            req_id = req_id,",
      "            op = op,",
      '            ok = "false",',
      '            status = "ERR_UNSUPPORTED_OP",',
      '            result = "none",',
      '            error = "ERR_UNSUPPORTED_OP"',
      "        })",
      '        lua_flow_trace("bridge", "tx_b2_to_b1 req_id=" .. tostring(req_id) .. " status=ERR_UNSUPPORTED_OP")',
      "        inzoi.message.send_to_client(owner_id, RES_CHANNEL, unsupported_pkt)",
      "    end",
      "end",
      "",
      "---@param self table",
      "---@param owner FB2Character",
      "function M.on_end(self, owner)",
      "    self.handled = 0",
      "end",
      "",
      "return M"
    ];

    const v2Manifest = JSON.stringify({
      bindings: {
        B2: [{ type: "Zoi", key: "*", script: "Zoi.FlowBridgeServer" }],
        B1: [{ type: "Zoi", key: "*", script: "Zoi.FlowBridgeClient" }]
      }
    }, null, 2);

    return {
      errors: [],
      b1Lua: b1Lines.join("\n"),
      b2Lua: b2Lines.join("\n"),
      b1Path: "B1/Zoi/FlowBridgeClient.lua",
      b2Path: "B2/Zoi/FlowBridgeServer.lua",
      manifest: v2Manifest,
      contract: B1B2_CONTRACT
    };
  }

  const VALID_BINDING_TYPES_BY_ENV = {
    B2: new Set(["Zoi", "ObjectTemplate", "Household", "Vehicle", "Component", "Manager"]),
    B1: new Set(["Zoi", "ObjectTemplate", "Vehicle", "Component"])
  };

  const WILDCARD_BINDING_TYPES = new Set(["Zoi", "ObjectTemplate", "Household"]);
  const MODULE_PATH_RE = /^[A-Za-z_][A-Za-z0-9_]*(\.[A-Za-z_][A-Za-z0-9_]*)*$/;

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function validateManifestStructure(manifestInput) {
    const errors = [];
    let parsed = manifestInput;
    if (typeof manifestInput === "string") {
      try {
        parsed = JSON.parse(manifestInput);
      } catch (err) {
        return { ok: false, errors: [`JSON inválido en lua_manifest.json: ${err.message}`], manifestObj: null };
      }
    }
    if (!isPlainObject(parsed)) {
      return { ok: false, errors: ["La raíz de lua_manifest.json debe ser un objeto JSON."], manifestObj: null };
    }
    for (const key of Object.keys(parsed)) {
      if (key !== "bindings" && key !== "chunkScripts") {
        errors.push(`Campo raíz desconocido en lua_manifest.json: "${key}".`);
      }
    }
    if (!isPlainObject(parsed.bindings)) {
      errors.push('El campo "bindings" es obligatorio y debe ser un objeto.');
    } else {
      for (const [env, entries] of Object.entries(parsed.bindings)) {
        if (env !== "B1" && env !== "B2") {
          errors.push(`Entorno desconocido en bindings: "${env}".`);
          continue;
        }
        if (!Array.isArray(entries)) {
          errors.push(`bindings.${env} debe ser un array de objetos { type, key, script }.`);
          continue;
        }
        entries.forEach((entry, idx) => {
          if (!isPlainObject(entry)) {
            errors.push(`bindings.${env}[${idx}] no es un objeto.`);
            return;
          }
          const entryKeys = Object.keys(entry);
          for (const k of entryKeys) {
            if (k !== "type" && k !== "key" && k !== "script") {
              errors.push(`Campo desconocido "${k}" en bindings.${env}[${idx}].`);
            }
          }
          if (typeof entry.type !== "string" || !VALID_BINDING_TYPES_BY_ENV[env].has(entry.type)) {
            errors.push(`Tipo de binding inválido "${entry.type}" en bindings.${env}[${idx}].`);
          }
          if (typeof entry.key !== "string" || !entry.key.trim()) {
            errors.push(`Clave "key" vacía o inválida en bindings.${env}[${idx}].`);
          } else if (entry.key === "*" && typeof entry.type === "string" && !WILDCARD_BINDING_TYPES.has(entry.type)) {
            errors.push(`El tipo "${entry.type}" en bindings.${env}[${idx}] no admite el comodín "*".`);
          }
          if (typeof entry.script !== "string" || !MODULE_PATH_RE.test(entry.script)) {
            errors.push(`Ruta de módulo "script" inválida "${entry.script}" en bindings.${env}[${idx}].`);
          } else if (entry.script === "Main" || entry.script.startsWith("B1.") || entry.script.startsWith("B2.")) {
            errors.push(`"script" en bindings.${env}[${idx}] debe ser relativo a ${env}/ y no apuntar a Main: "${entry.script}".`);
          }
        });
      }
    }

    if (parsed.chunkScripts !== undefined) {
      if (!isPlainObject(parsed.chunkScripts)) {
        errors.push('El campo "chunkScripts" debe ser un objeto si está presente.');
      } else {
        for (const [env, scripts] of Object.entries(parsed.chunkScripts)) {
          if (env !== "B1" && env !== "B2") {
            errors.push(`Entorno desconocido en chunkScripts: "${env}".`);
            continue;
          }
          if (!Array.isArray(scripts)) {
            errors.push(`chunkScripts.${env} debe ser un array de módulos.`);
            continue;
          }
          scripts.forEach((modPath, idx) => {
            if (typeof modPath !== "string" || !MODULE_PATH_RE.test(modPath)) {
              errors.push(`Módulo inválido en chunkScripts.${env}[${idx}]: "${modPath}".`);
            }
          });
        }
      }
    }

    return { ok: errors.length === 0, errors, manifestObj: errors.length === 0 ? parsed : null };
  }

  function mergeB1B2Manifest(existingManifestInput, bundleManifestInput) {
    const baseCheck = existingManifestInput === undefined || existingManifestInput === null || existingManifestInput === ""
      ? { ok: true, errors: [], manifestObj: { bindings: {} } }
      : validateManifestStructure(existingManifestInput);
    if (!baseCheck.ok) {
      return { ok: false, errors: baseCheck.errors, manifest: "", manifestObj: null };
    }

    const bundleCheck = validateManifestStructure(bundleManifestInput);
    if (!bundleCheck.ok) {
      return { ok: false, errors: bundleCheck.errors, manifest: "", manifestObj: null };
    }

    const mergedBindings = {};
    for (const env of ["B2", "B1"]) {
      const existingList = Array.isArray(baseCheck.manifestObj.bindings[env])
        ? baseCheck.manifestObj.bindings[env].map(item => ({ type: item.type, key: item.key, script: item.script }))
        : [];
      const incomingList = Array.isArray(bundleCheck.manifestObj.bindings[env])
        ? bundleCheck.manifestObj.bindings[env]
        : [];
      for (const incoming of incomingList) {
        const duplicate = existingList.some(
          item => item.type === incoming.type && item.key === incoming.key && item.script === incoming.script
        );
        if (!duplicate) {
          existingList.push({ type: incoming.type, key: incoming.key, script: incoming.script });
        }
      }
      if (existingList.length > 0) {
        mergedBindings[env] = existingList;
      }
    }

    const mergedObj = { bindings: mergedBindings };

    const mergedChunks = {};
    for (const env of ["B2", "B1"]) {
      const existingChunks = Array.isArray(baseCheck.manifestObj.chunkScripts?.[env])
        ? [...baseCheck.manifestObj.chunkScripts[env]]
        : [];
      const incomingChunks = Array.isArray(bundleCheck.manifestObj.chunkScripts?.[env])
        ? bundleCheck.manifestObj.chunkScripts[env]
        : [];
      for (const modPath of incomingChunks) {
        if (!existingChunks.includes(modPath)) existingChunks.push(modPath);
      }
      if (existingChunks.length > 0) {
        mergedChunks[env] = existingChunks;
      }
    }
    if (Object.keys(mergedChunks).length > 0) {
      mergedObj.chunkScripts = mergedChunks;
    }

    return {
      ok: true,
      errors: [],
      manifestObj: mergedObj,
      manifest: JSON.stringify(mergedObj, null, 2)
    };
  }

  function exportB1B2BundleToWorkspace(graph, workspaceLuaDir, ioAdapter) {
    const bundle = compileB1B2Bundle(graph);
    if (bundle.errors.length > 0) {
      return { ok: false, errors: [...bundle.errors], artifacts: null };
    }
    if (!bundle.b1Lua || !bundle.b2Lua || !bundle.manifest) {
      return { ok: false, errors: ["compileB1B2Bundle produjo artefactos vacíos."], artifacts: null };
    }
    if (!workspaceLuaDir || typeof workspaceLuaDir !== "string") {
      return { ok: false, errors: ["Se requiere una ruta válida de workspace/lua."], artifacts: null };
    }

    const fsMod = ioAdapter?.fs || (typeof require === "function" ? require("node:fs") : null);
    const pathMod = ioAdapter?.path || (typeof require === "function" ? require("node:path") : null);
    if (!fsMod || !pathMod) {
      return { ok: false, errors: ["Entorno sin acceso a sistema de archivos para exportar a disco."], artifacts: null };
    }

    const manifestPath = pathMod.join(workspaceLuaDir, "lua_manifest.json");
    const backupPath = pathMod.join(workspaceLuaDir, "lua_manifest.json.bak");
    const b1FullPath = pathMod.join(workspaceLuaDir, ...bundle.b1Path.split("/"));
    const b2FullPath = pathMod.join(workspaceLuaDir, ...bundle.b2Path.split("/"));

    let existingRaw = null;
    if (fsMod.existsSync(manifestPath)) {
      existingRaw = fsMod.readFileSync(manifestPath, "utf8");
    }

    const mergeRes = mergeB1B2Manifest(existingRaw, bundle.manifest);
    if (!mergeRes.ok) {
      return { ok: false, errors: mergeRes.errors, artifacts: null };
    }

    try {
      if (existingRaw !== null && !fsMod.existsSync(backupPath)) {
        fsMod.writeFileSync(backupPath, existingRaw, "utf8");
      }
      fsMod.mkdirSync(pathMod.dirname(b1FullPath), { recursive: true });
      fsMod.mkdirSync(pathMod.dirname(b2FullPath), { recursive: true });
      fsMod.writeFileSync(b1FullPath, bundle.b1Lua, "utf8");
      fsMod.writeFileSync(b2FullPath, bundle.b2Lua, "utf8");
      fsMod.writeFileSync(manifestPath, `${mergeRes.manifest}\n`, "utf8");
    } catch (err) {
      return { ok: false, errors: [`Error de escritura en workspace: ${err.message}`], artifacts: null };
    }

    const verificationErrors = [];
    for (const [label, filePath] of [
      ["b1Lua", b1FullPath],
      ["b2Lua", b2FullPath],
      ["manifest", manifestPath]
    ]) {
      if (!fsMod.existsSync(filePath)) {
        verificationErrors.push(`Falta artefacto obligatorio (${label}): ${filePath}`);
      } else {
        const content = fsMod.readFileSync(filePath, "utf8");
        if (!content || !content.trim()) {
          verificationErrors.push(`El artefacto (${label}) está vacío en disco: ${filePath}`);
        }
      }
    }

    if (verificationErrors.length > 0) {
      return { ok: false, errors: verificationErrors, artifacts: null };
    }

    const diskManifestRaw = fsMod.readFileSync(manifestPath, "utf8");
    const diskCheck = validateManifestStructure(diskManifestRaw);
    if (!diskCheck.ok) {
      return { ok: false, errors: diskCheck.errors, artifacts: null };
    }

    for (const env of ["B2", "B1"]) {
      const entries = diskCheck.manifestObj.bindings[env] || [];
      for (const entry of entries) {
        const relParts = entry.script.split(".");
        relParts[relParts.length - 1] = `${relParts[relParts.length - 1]}.lua`;
        const targetLuaPath = pathMod.join(workspaceLuaDir, env, ...relParts);
        if (!fsMod.existsSync(targetLuaPath)) {
          verificationErrors.push(`El binding ${env}:${entry.type}:${entry.key} -> "${entry.script}" apunta a un archivo inexistente: ${targetLuaPath}`);
        }
      }
    }

    if (verificationErrors.length > 0) {
      return { ok: false, errors: verificationErrors, artifacts: null };
    }

    return {
      ok: true,
      errors: [],
      artifacts: {
        b1FullPath,
        b2FullPath,
        manifestPath,
        backupPath: existingRaw !== null ? backupPath : null,
        manifestObj: diskCheck.manifestObj,
        manifest: diskManifestRaw.trim()
      }
    };
  }

  function simulateEvent(graph, eventName, payload, currentState) {
    normalizeGraph(graph);
    const active = new Set();
    const log = [];
    let state = currentState || graph.initialState || "idle";
    const eventNodes = graph.nodes.filter(node => node.type === "event" && node.data.event === eventName);
    if (eventNodes.length === 0) return { active: [], log: [`No hay nodo para el evento ${eventName}.`], state };

    for (const eventNode of eventNodes) {
      active.add(eventNode.id);
      log.push(`Evento ${eventName}`);
      if (eventNode.data.whenState && eventNode.data.whenState !== state) {
        log.push(`Ignorado: estado actual ${state}.`);
        continue;
      }
      let node = findTarget(graph, eventNode.id, "next");
      const visited = new Set([eventNode.id]);
      while (node && !visited.has(node.id)) {
        visited.add(node.id);
        active.add(node.id);
        if (node.type === "condition") {
          const field = node.data.source === "payload"
            ? connectedField(graph, node.id, "value") || node.data.field
            : "";
          const actual = node.data.source === "state" ? state
            : String(field || "").split(".").reduce((value, key) =>
              value && typeof value === "object" ? value[key] : undefined, payload);
          const wanted = node.data.value;
          const numericActual = Number(actual);
          const numericWanted = Number(wanted);
          let matches;
          switch (node.data.operator) {
            case "exists": matches = actual !== undefined && actual !== null; break;
            case "==": matches = String(actual) === String(wanted); break;
            case "~=": matches = String(actual) !== String(wanted); break;
            case ">": matches = Number.isFinite(numericActual) && numericActual > numericWanted; break;
            case ">=": matches = Number.isFinite(numericActual) && numericActual >= numericWanted; break;
            case "<": matches = Number.isFinite(numericActual) && numericActual < numericWanted; break;
            case "<=": matches = Number.isFinite(numericActual) && numericActual <= numericWanted; break;
            default: matches = false;
          }
          log.push(`${node.id}: condición ${matches ? "true" : "false"}`);
          node = findTarget(graph, node.id, matches ? "true" : "false");
          continue;
        }
        if (node.type === "action") {
          const schema = CLI_CATALOG[node.data.command];
          let missingParam = "";
          const args = Object.entries(schema?.params || {}).flatMap(([key]) => {
            const field = connectedField(graph, node.id, `param:${key}`);
            const value = field
              ? field.split(".").reduce((current, part) =>
                current && typeof current === "object" ? current[part] : undefined, payload)
              : node.data.params?.[key] ?? schema.defaults?.[key];
            const scalar = value && typeof value === "object" && "Value" in value ? value.Value : value;
            if (field && (scalar === undefined || scalar === null || scalar === "")) {
              missingParam = key;
              return [];
            }
            return scalar === undefined || scalar === null || scalar === ""
              ? []
              : [`${key}=${String(scalar).replace(/[^A-Za-z0-9_.-]/g, "")}`];
          }).join(" ");
          if (missingParam) {
            const reason = missingParam === "entity_id"
              ? "falta el campo de identidad"
              : `falta el dato ${missingParam}`;
            log.push(`${node.id}: ${reason} (${missingParam}).`);
            return { active: [...active], log, state };
          }
          const command = `${node.data.command}${args ? ` ${args}` : ""}`;
          log.push(`${node.id}: CLI preparado (simulación, no ejecutado): ${command}`);
          node = findTarget(graph, node.id, "next");
          continue;
        }
        if (node.type === "bridge") {
          const op = node.data.operation || "verify_sim_authority";
          const bSchema = BRIDGE_CATALOG[op];
          const resolvedParams = {};
          for (const [key] of Object.entries(bSchema?.params || {})) {
            const field = connectedField(graph, node.id, `param:${key}`);
            const val = field
              ? field.split(".").reduce((cur, part) => (cur && typeof cur === "object" ? cur[part] : undefined), payload)
              : node.data.params?.[key] ?? bSchema?.defaults?.[key];
            if (val !== undefined && val !== null && val !== "") {
              resolvedParams[key] = val;
            }
          }
          const reqPacket = B1B2_CONTRACT.encodePacket({
            req_id: node.data.reqId || "1",
            node_id: node.id,
            op,
            entity_id: payload?.entity_id ?? 1,
            from_state: state,
            ...resolvedParams
          });
          log.push(`${node.id}: TX B1→B2 (${B1B2_CONTRACT.reqChannel}): ${reqPacket}`);
          const resPacket = B1B2_CONTRACT.executeServerOperation(reqPacket, { entity_id: payload?.entity_id ?? 1 });
          const decoded = B1B2_CONTRACT.decodePacket(resPacket);
          log.push(`${node.id}: RX B2→B1 (${B1B2_CONTRACT.resChannel}): ${resPacket}`);
          payload = { ...(payload || {}), result: decoded.result, error: decoded.error, status: decoded.status };
          node = findTarget(graph, node.id, decoded.ok === "true" ? "ok" : "error");
          continue;
        }
        if (node.type === "state") {
          state = node.data.name;
          log.push(`${node.id}: nuevo estado ${state}`);
        } else if (node.type === "end") {
          log.push(`${node.id}: fin`);
        }
        break;
      }
    }
    return { active: [...active], log, state };
  }

  function parseRuntimeTrace(text) {
    return [...new Set([...String(text).matchAll(/\[LuaFlow\](?:\[B[12]\])?\[([a-z0-9_-]+)\]/gi)].map(match => match[1]))];
  }

  function createEmptyGraph(binding = "Zoi:*") {
    return {
      version: 2,
      binding: binding && BINDING_PRESETS[binding] ? binding : "Zoi:*",
      initialState: "idle",
      nodes: [
        { id: "state-idle", type: "state", x: 80, y: 100, data: { name: "idle" } }
      ],
      edges: []
    };
  }

  function createGraphHistory(initialSnapshot, maxDepth = 50) {
    const cloneSnapshot = value => JSON.parse(JSON.stringify(value));
    const undoStack = [];
    const redoStack = [];
    let current = cloneSnapshot(initialSnapshot);

    function record(nextSnapshot, label = "cambio") {
      undoStack.push({ snapshot: cloneSnapshot(current), label });
      if (undoStack.length > maxDepth) undoStack.shift();
      redoStack.length = 0;
      current = cloneSnapshot(nextSnapshot);
      return cloneSnapshot(current);
    }

    function undo() {
      if (undoStack.length === 0) return null;
      const entry = undoStack.pop();
      redoStack.push({ snapshot: cloneSnapshot(current), label: entry.label });
      current = cloneSnapshot(entry.snapshot);
      return { snapshot: cloneSnapshot(current), label: entry.label };
    }

    function redo() {
      if (redoStack.length === 0) return null;
      const entry = redoStack.pop();
      undoStack.push({ snapshot: cloneSnapshot(current), label: entry.label });
      current = cloneSnapshot(entry.snapshot);
      return { snapshot: cloneSnapshot(current), label: entry.label };
    }

    function replaceCurrent(nextSnapshot) {
      current = cloneSnapshot(nextSnapshot);
    }

    return {
      record,
      undo,
      redo,
      replaceCurrent,
      canUndo: () => undoStack.length > 0,
      canRedo: () => redoStack.length > 0,
      undoCount: () => undoStack.length,
      redoCount: () => redoStack.length,
      getCurrent: () => cloneSnapshot(current)
    };
  }

  const UI_MOD_THEMES = {
    modkit_teal: {
      id: "modkit_teal",
      label: "Oscuro Turquesa (ModKit)",
      bgColor: "#141c24",
      accentColor: "#45d6bd",
      textColor: "#e6eef8",
      opacity: 0.92
    },
    violet_glass: {
      id: "violet_glass",
      label: "Cristal Violeta (Sci-Fi)",
      bgColor: "#1a1428",
      accentColor: "#b388ff",
      textColor: "#f3eaff",
      opacity: 0.86
    },
    amber_gold: {
      id: "amber_gold",
      label: "Ámbar Dorado (Estudio)",
      bgColor: "#211a12",
      accentColor: "#f4b942",
      textColor: "#fff5e4",
      opacity: 0.92
    },
    clean_light: {
      id: "clean_light",
      label: "Claro Minimalista (inZOI UI)",
      bgColor: "#f4f7fb",
      accentColor: "#1d7dfa",
      textColor: "#182230",
      opacity: 0.95
    }
  };

  const UI_ACTION_LABELS = {
    "interaction.clear_queue": { icon: "🧹", label: "Limpiar cola de acciones" },
    "movement.teleport": { icon: "📍", label: "Teletransportar Zoi" },
    "appearance.hair": { icon: "💇", label: "Peinado y color de cabello" },
    "appearance.set_skin_color": { icon: "🎨", label: "Ajustar tono de piel" },
    "appearance.equip_accessory": { icon: "🕶️", label: "Equipar accesorio" },
    "outfit.change_preset": { icon: "👗", label: "Cambiar conjunto de ropa" },
    "toast.show": { icon: "💬", label: "Mostrar aviso en pantalla" },
    "entity.attach_mesh": { icon: "🛸", label: "Acoplar vehículo / prop" },
    "entity.set_scale": { icon: "📐", label: "Cambiar escala del Zoi" },
    "entity.set_visibility": { icon: "👁️", label: "Alternar visibilidad" },
    "pose.set_bone": { icon: "🦴", label: "Aplicar pose / hueso" },
    "camera.shake": { icon: "📷", label: "Sacudir cámara" },
    "fx.play": { icon: "✨", label: "Lanzar efecto visual" },
    "sound.play_2d": { icon: "🔊", label: "Reproducir sonido UI" },
    "pregnancy_and_birth.suite": { icon: "🤰", label: "Embarazo y Genética (B2)" },
    "pregnancy.context_suite": { icon: "🤰", label: "Embarazo, Sexo y Genética" },
    "appearance.suite": { icon: "👗", label: "Aplicar Vestimenta (B2)" },
    "appearance.context_suite": { icon: "👗", label: "Vestimenta, Peinado y Tintes" },
    "vehicle.suite": { icon: "🚗", label: "Control de Vehículo / Vuelo" },
    "vehicle.context_suite": { icon: "🚗", label: "Vehículos, Conducción y Vuelo" },
    "furniture.suite": { icon: "🛋️", label: "Colocar / Usar Mobiliario" },
    "furniture.context_suite": { icon: "🛋️", label: "Muebles, Decoración y Uso" },
    "weather_time.suite": { icon: "🌦️", label: "Aplicar Clima y Hora" },
    "weather.context_suite": { icon: "🌦️", label: "Clima, Estación y Agenda" },
    "life.suite": { icon: "🧬", label: "Ciclo Vital y Necesidades" },
    "life.context_suite": { icon: "🧬", label: "Edad, Necesidades y Dinero" },
    "zoi_self.context_suite": { icon: "📱", label: "Menú Zoi Principal y Móvil CCTV" },
    "zoi_social.context_suite": { icon: "👫", label: "Menú Social Pareja y Familia" },
    "needs.set_full": { icon: "🔋", label: "Llenar necesidades al 100%" },
    "weather.control": { icon: "🌧️", label: "Cambiar clima del mundo" },
    "time.DefaultDaySkip": { icon: "⏩", label: "Saltar al día siguiente" },
    "aging.set_growth_step": { icon: "🎂", label: "Cambiar etapa de edad" },
    "emotion.add": { icon: "😊", label: "Añadir emoción (B2)" },
    "emotion.set": { icon: "🎭", label: "Cambiar emoción activa" },
    "emotion.reset": { icon: "🧘", label: "Calmar emociones" },
    "currency.set": { icon: "💰", label: "Ajustar dinero (Meow)" },
    "social.create_relationship": { icon: "🤝", label: "Crear vínculo / relación" },
    "schedule.AdvanceToNextSchedule": { icon: "📅", label: "Avanzar agenda del Zoi" },
    "movement.cpp_set_location_simul": { icon: "🚀", label: "Impulso físico C++ (B2)" },
    "vehicle.attach_flying_prop": { icon: "🛸", label: "Activar vuelo con prop" },
    "verify_sim_authority": { icon: "✅", label: "Verificar puente B1 ↔ B2" },
      "zoi_self.context_suite": { icon: "📱", label: "Menú Zoi Principal y Smartphone" },
      "zoi_social.context_suite": { icon: "👫", label: "Menú Social, Familia y Host Swap" }
    };

  function extractButtonsFromGraph(targetGraph) {
    if (!targetGraph || !Array.isArray(targetGraph.nodes)) return [];
    const buttons = [];
    for (const node of targetGraph.nodes) {
      if (node.type === "action") {
        const cmd = node.data?.command || "emotion.set";
        const friendly = UI_ACTION_LABELS[cmd];
        buttons.push({
          id: `btn-${node.id}`,
          nodeId: node.id,
          enabled: true,
          icon: friendly?.icon || "⚡",
          label: friendly?.label || cmd,
          kind: "cli",
          command: cmd,
          argsText: node.data?.args || "",
          env: node.data?.targetEnv || "B1"
        });
      } else if (node.type === "bridge") {
        const op = node.data?.operation || "emotion.set";
        const friendly = UI_ACTION_LABELS[op];
        const bridgeMeta = BRIDGE_CATALOG[op] || getCatalogOperationById(op);
        buttons.push({
          id: `btn-${node.id}`,
          nodeId: node.id,
          enabled: true,
          icon: friendly?.icon || "🌉",
          label: friendly?.label || (bridgeMeta?.label ? bridgeMeta.label.split("(")[0].trim() : op),
          kind: "bridge",
          command: op,
          argsText: node.data?.args || "",
          env: "B1→B2"
        });
      }
    }
    if (buttons.length === 0) {
      buttons.push({
        id: "btn-default-1",
        nodeId: "",
        enabled: true,
        icon: "✨",
        label: "Ejecutar acción principal",
        kind: "cli",
        command: "emotion.set",
        argsText: "emotion=Happy",
        env: "B1"
      });
    }
    return buttons;
  }

  function defaultUiModConfig(targetGraph = DEFAULT_GRAPH, titleHint = "Panel Interactivo del Mod") {
    const theme = UI_MOD_THEMES.modkit_teal;
    return {
      appName: "flow_control_panel",
      title: titleHint,
      subtitle: "Pulsa cualquier opción para aplicarla en vivo sobre el Zoi",
      themeId: theme.id,
      bgColor: theme.bgColor,
      accentColor: theme.accentColor,
      textColor: theme.textColor,
      opacity: theme.opacity,
      width: 420,
      height: 360,
      borderRadius: 12,
      position: "top-right",
      customLeftPct: null,
      customTopPct: null,
      buttonLayout: "stack",
      buttonStyle: "solid",
      inputPolicy: "overlay",
      triggerType: "keybind",
      triggerKey: "M",
      triggerModifier: "Ctrl",
      triggerCommand: "flow_panel.toggle",
      buttons: extractButtonsFromGraph(targetGraph)
    };
  }

  function hexToRgba(hex, alpha = 0.9) {
    const clean = String(hex || "#141c24").replace("#", "").trim();
    const num = Number.parseInt(clean.length === 3
      ? clean.split("").map(ch => ch + ch).join("")
      : clean.padEnd(6, "0").slice(0, 6), 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    const clampedAlpha = Math.max(0.2, Math.min(1, Number(alpha) || 0.9));
    return `rgba(${r}, ${g}, ${b}, ${clampedAlpha.toFixed(2)})`;
  }

  function compileUiModBundle(targetGraph, rawConfig = {}) {
    const base = defaultUiModConfig(targetGraph);
    const cfg = {
      ...base,
      ...rawConfig,
      buttons: Array.isArray(rawConfig.buttons) && rawConfig.buttons.length > 0
        ? rawConfig.buttons
        : extractButtonsFromGraph(targetGraph)
    };
    const enabledButtons = cfg.buttons.filter(btn => btn.enabled !== false);
    const triggers = [];
    if (cfg.triggerType === "always_on") {
      triggers.push({ type: "always_on" });
    } else {
      const keyTrigger = { type: "keybind", key: String(cfg.triggerKey || "M").toUpperCase() };
      if (cfg.triggerModifier && cfg.triggerModifier !== "NONE") {
        keyTrigger.modifiers = [cfg.triggerModifier];
      }
      triggers.push(keyTrigger);
      if (cfg.triggerCommand) {
        triggers.push({ type: "command", command: String(cfg.triggerCommand).trim() });
      }
    }

    const manifestObj = {
      name: String(cfg.title || "Flow Control Panel").trim(),
      entry: "index.html",
      display: {
        width: 1920,
        height: 1080,
        transparent: true,
        input_policy: ["overlay", "modal", "passthrough"].includes(cfg.inputPolicy) ? cfg.inputPolicy : "overlay"
      },
      triggers
    };

    const posRules = {
      "top-right": "top: 64px; right: 64px;",
      "top-left": "top: 64px; left: 64px;",
      "center": "top: 50%; left: 50%; transform: translate(-50%, -50%);",
      "bottom-right": "bottom: 64px; right: 64px;"
    };
    const hasCustomPos = Number.isFinite(Number(cfg.customLeftPct)) && Number.isFinite(Number(cfg.customTopPct));
    const customX1920 = hasCustomPos ? Math.round((Number(cfg.customLeftPct) / 100) * 1920) : null;
    const customY1080 = hasCustomPos ? Math.round((Number(cfg.customTopPct) / 100) * 1080) : null;
    const posCss = hasCustomPos
      ? `left: ${customX1920}px; top: ${customY1080}px;`
      : (posRules[cfg.position] || posRules["top-right"]);
    const bgRgba = hexToRgba(cfg.bgColor, cfg.opacity);
    const accent = cfg.accentColor || "#45d6bd";
    const textCol = cfg.textColor || "#e6eef8";
    const widthPx = Math.max(260, Math.min(760, Number(cfg.width) || 390));
    const heightPx = Math.max(180, Math.min(720, Number(cfg.height) || 360));
    const radiusPx = Math.max(4, Math.min(28, Number(cfg.borderRadius) || 12));
    const gridCols = cfg.buttonLayout === "stack" ? "1fr" : "repeat(2, minmax(0, 1fr))";

    let btnCssRule = `background: ${accent}; color: #0c1218; border: 1px solid ${accent}; font-weight: 700;`;
    if (cfg.buttonStyle === "outline") {
      btnCssRule = `background: transparent; color: ${textCol}; border: 1.5px solid ${accent}; font-weight: 600;`;
    } else if (cfg.buttonStyle === "glass") {
      btnCssRule = `background: rgba(255, 255, 255, 0.08); color: ${textCol}; border: 1px solid ${accent}; font-weight: 600;`;
    }

    const stylesCss = `html, body {
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
  background: transparent;
  color: ${textCol};
  font-family: "Segoe UI", system-ui, sans-serif;
  overflow: hidden;
}
#uimod-window {
  position: absolute;
  ${posCss}
  width: ${widthPx}px;
  min-height: ${heightPx}px;
  padding: 18px;
  box-sizing: border-box;
  background: ${bgRgba};
  border: 1.5px solid ${accent};
  border-radius: ${radiusPx}px;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
#uimod-window.is-hidden {
  display: none;
}
.uimod-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  cursor: move;
  user-select: none;
}
.uimod-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${textCol};
}
.uimod-subtitle {
  margin: 2px 0 0;
  font-size: 12px;
  opacity: 0.78;
}
.uimod-close {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.28);
  color: ${textCol};
  cursor: pointer;
}
.uimod-buttons {
  display: grid;
  grid-template-columns: ${gridCols};
  gap: 9px;
}
.uimod-btn {
  padding: 10px 12px;
  border-radius: ${Math.max(4, radiusPx - 4)}px;
  cursor: pointer;
  font-size: 13px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.1s ease, filter 0.15s ease;
  ${btnCssRule}
}
.uimod-btn:hover {
  filter: brightness(1.1);
}
.uimod-btn:active {
  transform: scale(0.98);
}
.uimod-status {
  margin-top: auto;
  padding: 8px 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.32);
  font-family: "Consolas", monospace;
  font-size: 11px;
  color: ${textCol};
}
`;

    const buttonsHtml = enabledButtons.map(btn => `      <button type="button" class="uimod-btn" data-btn-id="${escapeHtml(btn.id)}" data-kind="${escapeHtml(btn.kind)}" data-command="${escapeHtml(btn.command)}" data-args="${escapeHtml(btn.argsText || "")}">
        <span>${escapeHtml(btn.icon || "⚡")}</span>
        <span>${escapeHtml(btn.label)}</span>
      </button>`).join("\n");

    const indexHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(cfg.title)}</title>
  <link rel="stylesheet" href="styles.css">
  <script src="coui://inzoi/cohtml.js"></script>
  <script src="coui://inzoi/mod/inzoi-sdk.js"></script>
</head>
<body>
  <div id="uimod-window">
    <div class="uimod-header" id="uimod-drag-handle">
      <div>
        <h1 class="uimod-title">${escapeHtml(cfg.title)}</h1>
        <p class="uimod-subtitle">${escapeHtml(cfg.subtitle || "")}</p>
      </div>
      <button type="button" class="uimod-close" id="uimod-close-btn" title="Cerrar">✕</button>
    </div>
    <div class="uimod-buttons">
${buttonsHtml}
    </div>
    <div class="uimod-status" id="uimod-status">Listo · ${enabledButtons.length} acciones conectadas al mod.</div>
  </div>
  <script src="window.js"></script>
  <script src="app.js"></script>
</body>
</html>
`;

    const windowJs = `(function () {
  var win = document.getElementById("uimod-window");
  var handle = document.getElementById("uimod-drag-handle");
  var closeBtn = document.getElementById("uimod-close-btn");
  if (!win) return;

  win.addEventListener("mouseenter", function () {
    if (window.inzoi && window.inzoi.view && window.inzoi.view.hover) {
      window.inzoi.view.hover(true);
    }
  });
  win.addEventListener("mouseleave", function () {
    if (window.inzoi && window.inzoi.view && window.inzoi.view.hover) {
      window.inzoi.view.hover(false);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      win.classList.add("is-hidden");
      if (window.inzoi && window.inzoi.view && window.inzoi.view.hover) {
        window.inzoi.view.hover(false);
      }
    });
  }

  var dragState = null;
  if (handle) {
    handle.addEventListener("mousedown", function (e) {
      var rect = win.getBoundingClientRect();
      dragState = { startX: e.clientX, startY: e.clientY, left: rect.left, top: rect.top };
      win.style.transform = "none";
      win.style.right = "auto";
      win.style.bottom = "auto";
      win.style.left = rect.left + "px";
      win.style.top = rect.top + "px";
    });
  }
  window.addEventListener("mousemove", function (e) {
    if (!dragState) return;
    win.style.left = Math.max(0, dragState.left + (e.clientX - dragState.startX)) + "px";
    win.style.top = Math.max(0, dragState.top + (e.clientY - dragState.startY)) + "px";
  });
  window.addEventListener("mouseup", function () {
    dragState = null;
  });
})();
`;

    const appJs = `(function () {
  var win = document.getElementById("uimod-window");
  var statusEl = document.getElementById("uimod-status");

  function parseKvArgs(raw) {
    var out = {};
    String(raw || "").trim().split(/\\s+/).filter(Boolean).forEach(function (pair) {
      var idx = pair.indexOf("=");
      if (idx > 0) {
        out[pair.slice(0, idx)] = pair.slice(idx + 1);
      }
    });
    return out;
  }

  function runAction(btn) {
    var kind = btn.getAttribute("data-kind") || "cli";
    var cmd = btn.getAttribute("data-command") || "";
    var argsRaw = btn.getAttribute("data-args") || "";
    var params = parseKvArgs(argsRaw);
    statusEl.textContent = "Ejecutando: " + cmd + (argsRaw ? " (" + argsRaw + ")" : "") + "...";

    if (window.inzoi && window.inzoi.cli && window.inzoi.cli.execute) {
      var cliCall = kind === "bridge"
        ? window.inzoi.cli.execute("lua.send_message", {
            message_type: "${B1B2_CONTRACT.reqChannel}",
            content: "v=1|req_id=ui_1|op=" + cmd + "|entity_id=1|args=" + encodeURIComponent(argsRaw)
          })
        : window.inzoi.cli.execute(cmd, params);
      Promise.resolve(cliCall)
        .then(function (res) {
          statusEl.textContent = "OK: " + cmd + " -> " + JSON.stringify(res || "aplicado");
        })
        .catch(function (err) {
          statusEl.textContent = "Error en " + cmd + ": " + (err && err.message ? err.message : String(err));
        });
    } else {
      statusEl.textContent = "[Simulación UI] " + cmd + (argsRaw ? " " + argsRaw : "");
    }
  }

  document.querySelectorAll(".uimod-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      runAction(btn);
    });
  });

  if (window.inzoi && window.inzoi.trigger && window.inzoi.trigger.onActivated) {
    window.inzoi.trigger.onActivated(function (t) {
      if (!win) return;
      win.classList.toggle("is-hidden");
      statusEl.textContent = "Trigger recibido: " + (t && t.type ? t.type : "toggle");
    });
  }

  console.log("[${escapeHtml(cfg.appName || "flow_control_panel")}] ready");
})();
`;

    return {
      ok: true,
      config: cfg,
      manifestObj,
      manifestJson: `${JSON.stringify(manifestObj, null, 2)}\n`,
      indexHtml,
      stylesCss,
      windowJs,
      appJs
    };
  }

  window.InzoiLuaFlow = {
    DEFAULT_GRAPH,
    EXAMPLES,
    PROGRESSIVE_TEST_CASES,
    CONTEXT_ACTION_TREES,
    IMPACT_SCOPES,
    getOptionImpactMeta,
    BLUEPRINT_IDEA_PRESETS,
    defaultOptionsForContextTree,
    buildGraphFromContextTree,
    buildMultiDomainGraphFromContextTrees,
    createEmptyGraph,
    createGraphHistory,
    UI_MOD_THEMES,
    extractButtonsFromGraph,
    defaultUiModConfig,
    compileUiModBundle,
    VERIFICATION_STATUS,
    OPERATION_KIND,
    QUESTIONED_CAPABILITY_IDS,
    B1B2_CONTRACT,
    BRIDGE_CATALOG,
    OPERATION_CATALOG,
    getCatalogOperationById,
    searchCatalogOperations,
    validateGraph,
    compileGraph,
    compileB1B2Bundle,
    validateManifestStructure,
    mergeB1B2Manifest,
    exportB1B2BundleToWorkspace,
    simulateEvent,
    parseRuntimeTrace
  };

  const root = document.getElementById("lua-flow-app");
  if (!root) return;
  const storageKey = "inzoi-lua-flow-v3";
  const backupStorageKey = `${storageKey}-before-example`;
  let graph = structuredClone(DEFAULT_GRAPH);
  let selectedId = graph.nodes[0].id;
  let environment = "B2";
  let previousGraph = null;
  let connecting = null;
  let activeNodes = new Set();
  let drag = null;
  let viewportObserver = null;
  let catalogQuery = "";
  let catalogEnv = "ALL";
  let catalogStatus = "ALL";
  let catalogKind = "ALL";
  let activeTreeDomain = "zoi_self_menu";
  let activeTreeTrigger = "interaction.started";
  let bpFilterSearch = "";
  let bpFilterGroup = "ALL";
  let bpFilterImpact = "all";
  let bpFilterState = "all";
  let activeIdeaPresetId = "";
  const selectedMixDomains = new Set(["zoi_self_menu", "zoi_target_social"]);
  const activeTreeOptionsByDomain = Object.fromEntries(
    Object.keys(CONTEXT_ACTION_TREES).map(domainId => [domainId, defaultOptionsForContextTree(domainId)])
  );
  let uiModConfig = defaultUiModConfig(graph, "Panel Interactivo · Embarazo y Genética");
  let uiPreviewVisible = true;
  let uiPreviewHover = false;
  let uiPreviewStatusText = "Listo · pulsa cualquier botón de la ventana para probarlo.";
  let uiConsoleLines = [
    "[info] [cohtml.js] Engine binding initialized (1920x1080 logical canvas)",
    "[info] [inzoi-sdk.js] window.inzoi ready",
    `[info] [${uiModConfig.appName}] ready · trigger: ${uiModConfig.triggerModifier}+${uiModConfig.triggerKey}`
  ];

  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || localStorage.getItem("inzoi-lua-flow-v2") || "null");
    if (stored?.graph) normalizeGraph(stored.graph);
    if (stored?.graph && validateGraph(stored.graph).length === 0) graph = stored.graph;
    if (ENVIRONMENTS.has(stored?.environment)) environment = stored.environment;
    const backup = JSON.parse(localStorage.getItem(backupStorageKey) || "null");
    if (backup?.graph && validateGraph(backup.graph).length === 0 && ENVIRONMENTS.has(backup.environment)) {
      previousGraph = backup;
    }
  } catch {
    // Storage puede estar deshabilitado; el editor continúa en memoria.
  }

  selectedId = graph.nodes[0]?.id || null;
  const history = createGraphHistory({ graph, environment, selectedId }, 50);

  function persistLocalStorage() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ graph, environment }));
    } catch {
      showMessage("No se pudo guardar en este navegador; descarga el JSON para conservar el grafo.", "error");
    }
  }

  function save(label = "cambio en grafo") {
    history.record({ graph, environment, selectedId }, label);
    persistLocalStorage();
  }

  function undoGraph() {
    const entry = history.undo();
    if (!entry) {
      showMessage("No hay más acciones para deshacer.");
      return;
    }
    graph = entry.snapshot.graph;
    environment = entry.snapshot.environment;
    selectedId = entry.snapshot.selectedId && graph.nodes.some(n => n.id === entry.snapshot.selectedId)
      ? entry.snapshot.selectedId
      : (graph.nodes[0]?.id || null);
    connecting = null;
    activeNodes.clear();
    persistLocalStorage();
    render();
    showMessage(`↩ Deshecho: ${entry.label} (${history.undoCount()} pasos disponibles).`);
  }

  function redoGraph() {
    const entry = history.redo();
    if (!entry) {
      showMessage("No hay más acciones para rehacer.");
      return;
    }
    graph = entry.snapshot.graph;
    environment = entry.snapshot.environment;
    selectedId = entry.snapshot.selectedId && graph.nodes.some(n => n.id === entry.snapshot.selectedId)
      ? entry.snapshot.selectedId
      : (graph.nodes[0]?.id || null);
    connecting = null;
    activeNodes.clear();
    persistLocalStorage();
    render();
    showMessage(`↪ Rehecho: ${entry.label} (${history.redoCount()} pasos disponibles).`);
  }

  function deleteNodeById(nodeId) {
    if (!nodeId) return;
    const target = graph.nodes.find(node => node.id === nodeId);
    if (!target) return;
    if (target.type === "state" && graph.nodes.filter(node => node.type === "state").length <= 1) {
      showMessage("El grafo requiere al menos un nodo de estado base (puedes renombrarlo en el panel lateral).", "error");
      return;
    }
    graph.nodes = graph.nodes.filter(node => node.id !== nodeId);
    graph.edges = graph.edges.filter(edge => edge.from !== nodeId && edge.to !== nodeId);
    if (target.type === "state" && graph.initialState === target.data?.name) {
      const nextState = graph.nodes.find(node => node.type === "state");
      if (nextState) graph.initialState = nextState.data.name;
    }
    if (selectedId === nodeId) selectedId = graph.nodes[0]?.id || null;
    connecting = null;
    activeNodes.delete(nodeId);
    save(`eliminar nodo ${nodeId}`);
    render();
    showMessage(`🗑️ Nodo eliminado: ${nodeId}. Pulsa Deshacer (Ctrl+Z) para recuperarlo.`);
  }

  function clearEdges() {
    if (graph.edges.length === 0) {
      showMessage("El grafo no tiene cables conectados.");
      return;
    }
    const removedCount = graph.edges.length;
    graph.edges = [];
    connecting = null;
    activeNodes.clear();
    save("borrar todos los cables");
    render();
    showMessage(`✂️ ${removedCount} cables eliminados. Pulsa Deshacer (Ctrl+Z) para restaurarlos.`);
  }

  function clearGraph() {
    graph = createEmptyGraph(graph.binding);
    selectedId = graph.nodes[0]?.id || null;
    connecting = null;
    activeNodes.clear();
    save("vaciar grafo (lienzo limpio)");
    render();
    showMessage("🗑️ Lienzo vaciado (conservando el estado base 'idle'). Pulsa Deshacer (Ctrl+Z) para recuperar el grafo anterior.");
  }

  function resetDefaultGraph() {
    graph = structuredClone(DEFAULT_GRAPH);
    environment = "B2";
    selectedId = graph.nodes[0]?.id || null;
    connecting = null;
    activeNodes.clear();
    save("restablecer grafo inicial por defecto");
    render();
    showMessage("🔄 Grafo inicial restaurado. Pulsa Deshacer (Ctrl+Z) para volver atrás.");
  }

  function showMessage(message, type = "info") {
    for (const status of root.querySelectorAll("[data-status], [data-canvas-hint]")) {
      status.textContent = message;
      status.dataset.kind = type;
    }
  }

  function selectedNode() {
    return graph.nodes.find(node => node.id === selectedId) || null;
  }

  function addNode(type) {
    const availableCommands = availableCLICommands(environment);
    if (type === "action" && availableCommands.length === 0) {
      showMessage("No hay acciones CLI verificadas para este entorno.", "error");
      return;
    }
    const defaultCommand = availableCommands[0]?.[0] || "";
    const defaults = {
      event: { event: "interaction.started", whenState: "" },
      condition: { source: "payload", field: "interaction_bag_id", operator: "==", value: "" },
      action: {
        command: defaultCommand,
        args: "",
        params: { ...(CLI_CATALOG[defaultCommand]?.defaults || {}) },
        scope: CLI_CATALOG[defaultCommand]?.scope || "unverified"
      },
      bridge: { operation: "verify_sim_authority", reqId: "1" },
      state: { name: `state_${graph.nodes.filter(item => item.type === "state").length + 1}` },
      end: {}
    };
    const offset = (graph.nodes.length % 4) * 35;
    const node = {
      id: `${type}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      type, x: 90 + offset, y: 100 + offset, data: { ...defaults[type] }
    };
    graph.nodes.push(node);
    selectedId = node.id;
    save();
    render();
  }

  function updateNodeFromForm(form) {
    const node = selectedNode();
    if (!node) return;
    const selectedCommand = node.type === "action" ? new FormData(form).get("command") : null;
    if (selectedCommand && selectedCommand !== node.data.command) {
      node.data.command = selectedCommand;
      const schema = CLI_CATALOG[selectedCommand];
      node.data.params = { ...(schema?.defaults || {}) };
      node.data.scope = schema?.scope || "unverified";
      graph.edges = graph.edges.filter(edge => edge.kind !== "data" || edge.to !== node.id ||
        schema?.params[edge.input?.slice(6)]);
      save();
      render();
      return;
    }
    const selectedOperation = node.type === "bridge" ? new FormData(form).get("operation") : null;
    if (selectedOperation && selectedOperation !== node.data.operation) {
      node.data.operation = selectedOperation;
      const bSchema = BRIDGE_CATALOG[selectedOperation];
      node.data.params = { ...(bSchema?.defaults || {}) };
      graph.edges = graph.edges.filter(edge => edge.kind !== "data" || edge.to !== node.id ||
        bSchema?.params?.[edge.input?.slice(6)]);
      save();
      render();
      return;
    }
    for (const [key, value] of new FormData(form).entries()) {
      if (key.startsWith("param.")) {
        node.data.params ||= {};
        node.data.params[key.slice(6)] = value;
      } else {
        node.data[key] = value;
      }
    }
    if (node.type === "action") {
      node.data.scope = CLI_CATALOG[node.data.command]?.scope || "unverified";
      const schema = CLI_CATALOG[node.data.command];
      if (schema) {
        node.data.params = { ...schema.defaults, ...node.data.params };
        graph.edges = graph.edges.filter(edge => edge.kind !== "data" || edge.to !== node.id ||
          schema.params[edge.input?.slice(6)]);
      }
    }
    if (node.type === "bridge") {
      const bSchema = BRIDGE_CATALOG[node.data.operation];
      if (bSchema) {
        node.data.params = { ...(bSchema.defaults || {}), ...(node.data.params || {}) };
        graph.edges = graph.edges.filter(edge => edge.kind !== "data" || edge.to !== node.id ||
          bSchema.params?.[edge.input?.slice(6)]);
      }
    }
    if (node.type === "event") {
      const fields = new Set((EVENT_CATALOG[node.data.event]?.fields || []).map(([name]) => name));
      graph.edges = graph.edges.filter(edge => edge.from !== node.id || edge.kind !== "data" ||
        fields.has(String(edge.port).slice("payload:".length)));
    }
    if (node.type === "condition" && node.data.source === "state") {
      graph.edges = graph.edges.filter(edge => edge.kind !== "data" || edge.to !== node.id);
    }
    save();
    render();
  }

  function renderProperties() {
    const node = selectedNode();
    const panel = root.querySelector("[data-properties]");
    if (!node) {
      panel.innerHTML = "<p class='flow-muted'>Selecciona un nodo para editarlo.</p>";
      return;
    }
    const input = (label, name, value, placeholder = "") =>
      `<label>${label}<input name="${name}" value="${escapeHtml(value || "")}" placeholder="${escapeHtml(placeholder)}"></label>`;
    let fields = "";
    if (node.type === "event") {
      fields = `<label>Evento del juego<select name="event">${Object.entries(EVENT_CATALOG).map(([name, schema]) =>
        `<option value="${escapeHtml(name)}" ${node.data.event === name ? "selected" : ""}>${escapeHtml(name)} · ${schema.scope}</option>`
      ).join("")}</select></label>
        <p class="flow-muted">Payload: ${(EVENT_CATALOG[node.data.event]?.fields || []).map(([name, type]) =>
          `${escapeHtml(name)} (${escapeHtml(type)})`).join(", ")}</p>
        <label>Estado requerido<select name="whenState"><option value="">cualquiera</option>${graph.nodes
          .filter(item => item.type === "state")
          .map(item => `<option value="${escapeHtml(item.data.name)}" ${node.data.whenState === item.data.name ? "selected" : ""}>${escapeHtml(item.data.name)}</option>`)
          .join("")}</select></label>`;
    } else if (node.type === "condition") {
      fields = `<label>Origen<select name="source"><option value="payload" ${node.data.source === "payload" ? "selected" : ""}>cable de datos del evento</option><option value="state" ${node.data.source === "state" ? "selected" : ""}>estado actual</option></select></label>`
        + `<label>Operador<select name="operator">${[...OPERATORS].map(op => `<option ${node.data.operator === op ? "selected" : ""}>${op}</option>`).join("")}</select></label>`
        + (node.data.operator === "exists" ? "" : input("Valor a comparar", "value", node.data.value));
    } else if (node.type === "action") {
      const schema = CLI_CATALOG[node.data.command];
      const commands = availableCLICommands(environment);
      const commandOptions = commands.map(([name, definition]) => {
        const statusTag = definition.verificationStatus === VERIFICATION_STATUS.VERIFIED
          ? "✓ VERIFICADA"
          : `⚠ ${definition.verificationStatus || "SIN VERIFICAR"}`;
        return `<option value="${escapeHtml(name)}" ${node.data.command === name ? "selected" : ""}>${escapeHtml(name)} · ${escapeHtml(definition.apiScope || definition.scope)} (${escapeHtml(statusTag)})</option>`;
      });
      if (schema && !commands.some(([name]) => name === node.data.command)) {
      commandOptions.unshift(`<option value="${escapeHtml(node.data.command)}" selected disabled>${escapeHtml(node.data.command)} · no disponible en ${environment}</option>`);
      }
      fields = `${commands.length
      ? `<label>Comando CLI<select name="command">${commandOptions.join("")}</select></label>`
      : `<p class="flow-error">No hay acciones CLI disponibles para este entorno.</p>`}`
      + (schema && !commands.some(([name]) => name === node.data.command)
        ? `<p class="flow-error">La acción ${escapeHtml(schema.scope)} no se puede compilar en ${environment}.</p>` : "")
      + (schema ? `<p class="flow-muted">${escapeHtml(schema.domain)} · ${escapeHtml(schema.description)}</p>` : "")
      + (schema?.verificationStatus && schema.verificationStatus !== VERIFICATION_STATUS.VERIFIED
        ? `<p class="flow-error">Estado forense: <strong>${escapeHtml(schema.verificationStatus)}</strong> (${escapeHtml(schema.operationKind || OPERATION_KIND.ACK_ONLY)}) · ACK no demuestra mutación de estado real.</p>`
        : schema?.verificationStatus === VERIFICATION_STATUS.VERIFIED
          ? `<p class="flow-good">Estado forense: <strong>${escapeHtml(schema.verificationStatus)}</strong> · Readback confirmado.</p>`
          : "")
      + (schema ? `<p class="flow-muted">Parámetros tipados según el catálogo ModKit (${Object.keys(schema.params).length}):</p><div class="flow-props-params-grid">${Object.entries(schema.params).map(([name, type]) =>
        input(`${name} (${type})${(schema.required || []).includes(name) ? " *" : ""}`, `param.${name}`, node.data.params?.[name] ?? schema.defaults?.[name] ?? "")
      ).join("")}</div>` : "");
    } else if (node.type === "bridge") {
      const bSchema = BRIDGE_CATALOG[node.data.operation];
      const bStatus = bSchema?.verificationStatus || bSchema?.verification || VERIFICATION_STATUS.VERIFIED;
      fields = `<label>Operación RPC B1→B2→B1<select name="operation">${Object.entries(BRIDGE_CATALOG).map(([key, item]) =>
        `<option value="${escapeHtml(key)}" ${node.data.operation === key ? "selected" : ""}>${escapeHtml(key)} · ${escapeHtml(item.label || item.name)}</option>`
      ).join("")}</select></label>`
        + input("req_id", "reqId", node.data.reqId || "1", "1")
        + (bSchema ? `<p class="flow-muted">${escapeHtml(bSchema.description)} · Estado: <span class="flow-badge" data-status="${escapeHtml(bStatus)}">${escapeHtml(bStatus)}</span></p>` : "")
        + (bSchema?.params ? `<div class="flow-props-params-grid">${Object.entries(bSchema.params).map(([name, type]) =>
          input(`${name} (${type})${(bSchema.required || []).includes(name) ? " *" : ""}`, `param.${name}`, node.data.params?.[name] ?? bSchema.defaults?.[name] ?? "")
        ).join("")}</div>` : "");
    } else if (node.type === "state") {
      fields = input("ID del estado", "name", node.data.name, "park");
    } else {
      fields = "<p class='flow-muted'>Finaliza esta ruta sin cambiar estado.</p>";
    }
    panel.innerHTML = `<form data-node-form><strong>${escapeHtml(node.type)} · ${escapeHtml(node.id)}</strong>${fields}</form>`;
    panel.querySelector("form").addEventListener("change", event => updateNodeFromForm(event.currentTarget));
  }

  function sourceFieldsForNode(node) {
    if (!node) return [];
    if (node.type === "event") return EVENT_CATALOG[node.data.event]?.fields || [];
    if (node.type === "bridge") return BRIDGE_CATALOG[node.data.operation]?.fields || [["result", "string"], ["error", "string"]];
    return [];
  }

  function nodeHeight(node) {
    if (node.type === "event") return 112 + (EVENT_CATALOG[node.data.event]?.fields.length || 0) * 22;
    if (node.type === "bridge") return 145 + (BRIDGE_CATALOG[node.data.operation]?.fields.length || 2) * 22;
    if (node.type === "action") return 105 + Object.keys(CLI_CATALOG[node.data.command]?.params || {}).length * 22;
    return node.type === "condition" ? 150 : 100;
  }

  function edgePoint(node, port, target = false, kind = "exec", input = "") {
    if (target && kind === "data") {
      if (node.type === "condition") return { x: node.x, y: node.y + 105 };
      const param = input.slice(6);
      const index = Object.keys(CLI_CATALOG[node.data.command]?.params || {}).indexOf(param);
      return { x: node.x, y: node.y + 92 + Math.max(0, index) * 22 };
    }
    if (target) return { x: node.x, y: node.y + 52 };
    if (kind === "data") {
      const field = String(port).slice("payload:".length);
      const fields = sourceFieldsForNode(node);
      const index = fields.findIndex(([name]) => name === field);
      return { x: node.x + 250, y: node.y + 102 + Math.max(0, index) * 22 };
    }
    if (node.type === "condition") {
      return { x: node.x + 250, y: node.y + (port === "true" ? 55 : 112) };
    }
    if (node.type === "bridge") {
      return { x: node.x + 250, y: node.y + (port === "ok" ? 55 : 88) };
    }
    return { x: node.x + 250, y: node.y + 78 };
  }

  function stageSize() {
    return {
      width: Math.max(900, ...graph.nodes.map(node => node.x + 250 + 36)),
      height: Math.max(520, ...graph.nodes.map(node => node.y + nodeHeight(node) + 36))
    };
  }

  function edgeMarkup(width, height) {
    const paths = graph.edges.map(edge => {
      const source = graph.nodes.find(node => node.id === edge.from);
      const target = graph.nodes.find(node => node.id === edge.to);
      if (!source || !target) return "";
      const kind = edge.kind || "exec";
      const a = edgePoint(source, edge.port, false, kind);
      const b = edgePoint(target, "", true, kind, edge.input || "");
      const mid = (a.x + b.x) / 2;
      const active = activeNodes.has(source.id) && activeNodes.has(target.id) ? " active" : "";
      return `<path d="M ${a.x} ${a.y} C ${mid} ${a.y}, ${mid} ${b.y}, ${b.x} ${b.y}" class="${kind === "data" ? "data-link" : "exec-link"}${active}" marker-end="url(#flow-arrow)"></path>`;
    }).join("");
    let preview = "";
    if (connecting) {
      const source = graph.nodes.find(node => node.id === connecting.from);
      if (source) {
        const a = edgePoint(source, connecting.port, false, connecting.kind);
        const bx = Number.isFinite(connecting.cursorX) ? connecting.cursorX : a.x + 60;
        const by = Number.isFinite(connecting.cursorY) ? connecting.cursorY : a.y;
        const mid = (a.x + bx) / 2;
        preview = `<path d="M ${a.x} ${a.y} C ${mid} ${a.y}, ${mid} ${by}, ${bx} ${by}" class="preview-link ${connecting.kind === "data" ? "data-link" : "exec-link"}" marker-end="url(#flow-arrow)"></path>`;
      }
    }
    return `<svg class="flow-links" width="${width}" height="${height}" aria-hidden="true"><defs><marker id="flow-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L0,8 L9,4 z"></path></marker></defs>${paths}${preview}</svg>`;
  }

  function refreshEdgesSvg() {
    const stage = root.querySelector("[data-stage]");
    const oldSvg = root.querySelector(".flow-links");
    if (!stage || !oldSvg) return;
    const size = stageSize();
    stage.style.width = `${size.width}px`;
    stage.style.height = `${size.height}px`;
    const replacement = document.createElement("div");
    replacement.innerHTML = edgeMarkup(size.width, size.height);
    oldSvg.replaceWith(replacement.firstElementChild);
  }

  function isPortCompatible(sourceState, toSpec) {
    if (!sourceState || !toSpec) return false;
    const [to, kind, input] = toSpec.split("|");
    if (sourceState.from === to || sourceState.kind !== kind) return false;
    if (kind === "exec") return true;
    const source = graph.nodes.find(node => node.id === sourceState.from);
    const target = graph.nodes.find(node => node.id === to);
    const field = sourceState.port.slice("payload:".length);
    const fieldType = sourceFieldsForNode(source).find(([name]) => name === field)?.[1];
    const inputType = input === "value" ? "scalar" : CLI_CATALOG[target?.data.command]?.params[input.slice(6)];
    return inputType === "scalar" ? Boolean(fieldType)
      : inputType === "entityId" ? fieldType === "entityId"
        : inputType === "bool" ? fieldType === "bool"
          : ["int", "float"].includes(inputType) ? ["int", "float"].includes(fieldType)
            : inputType === "string" ? fieldType === "string" : false;
  }

  function updatePortHighlights() {
    root.querySelectorAll("[data-connect-from]").forEach(btn => {
      const spec = `${connecting?.from}|${connecting?.kind}|${connecting?.port}`;
      btn.classList.toggle("is-connecting-source", Boolean(connecting) && btn.dataset.connectFrom === spec);
    });
    root.querySelectorAll("[data-connect-to]").forEach(btn => {
      btn.classList.toggle("is-compatible-target", Boolean(connecting) && isPortCompatible(connecting, btn.dataset.connectTo));
    });
  }

  function tryConnectTo(toSpec) {
    if (!connecting) return false;
    const [to, kind, input] = toSpec.split("|");
    if (connecting.from === to) {
      showMessage("Un nodo no puede conectarse a sí mismo.", "error");
      return false;
    }
    if (connecting.kind !== kind) {
      showMessage("No se pueden mezclar conexiones de ejecución (▶/◀) y de datos (●).", "error");
      return false;
    }
    const source = graph.nodes.find(node => node.id === connecting.from);
    const target = graph.nodes.find(node => node.id === to);
    if (kind === "data" && !isPortCompatible(connecting, toSpec)) {
      const field = connecting.port.slice("payload:".length);
      const fieldType = sourceFieldsForNode(source).find(([name]) => name === field)?.[1];
      const inputType = input === "value" ? "scalar" : CLI_CATALOG[target?.data.command]?.params[input.slice(6)];
      showMessage(`Tipos incompatibles: ${fieldType || "?"} → ${inputType || "?"}.`, "error");
      return false;
    }
    graph.edges = graph.edges.filter(edge => kind === "exec"
      ? !((edge.kind || "exec") === "exec" && edge.from === connecting.from && edge.port === connecting.port)
      : !(edge.kind === "data" && edge.to === to && edge.input === input));
    graph.edges.push(kind === "exec"
      ? { kind, from: connecting.from, port: connecting.port, to }
      : { kind, from: connecting.from, port: connecting.port, to, input });
    if (kind === "data" && target.type === "condition") {
      target.data.source = "payload";
      target.data.field = connecting.port.slice("payload:".length);
    }
    if (kind === "data" && target.type === "action") target.data.params[input.slice(6)] = "";
    const fromId = connecting.from;
    selectedId = to;
    connecting = null;
    save();
    render();
    showMessage(`Conectado: ${fromId} → ${to}.`);
    return true;
  }

  function fitGraph() {
    const viewport = root.querySelector(".flow-viewport");
    const stage = root.querySelector("[data-stage]");
    if (!viewport || !stage) return;
    const size = stageSize();
    const width = Math.max(1, viewport.clientWidth - 32);
    const height = Math.max(1, viewport.clientHeight - 32);
    const maxZoom = document.fullscreenElement === root.querySelector(".flow-editor") ? 1.35 : 1;
    const zoom = Math.min(maxZoom, width / size.width, height / size.height);
    stage.style.zoom = String(zoom);
    viewport.scrollLeft = 0;
    viewport.scrollTop = 0;
  }

  function updateFullscreenButton() {
    const editor = root.querySelector(".flow-editor");
    const button = root.querySelector("[data-fullscreen]");
    if (editor && button) {
      button.textContent = document.fullscreenElement === editor ? "Salir de pantalla completa" : "Pantalla completa";
    }
  }

  function renderGraph() {
    const stage = root.querySelector("[data-stage]");
    if (!stage) return;
    const size = stageSize();
    stage.style.width = `${size.width}px`;
    stage.style.height = `${size.height}px`;
    const cards = graph.nodes.map(node => {
      const outFields = sourceFieldsForNode(node);
      const actionParams = Object.entries(CLI_CATALOG[node.data.command]?.params || {});
      const outputs = node.type === "condition"
        ? `<button class="flow-port port-true" data-connect-from="${node.id}|exec|true" title="Salida de ejecución true">T</button><button class="flow-port port-false" data-connect-from="${node.id}|exec|false" title="Salida de ejecución false">F</button>`
        : node.type === "bridge"
          ? `<button class="flow-port port-ok" data-connect-from="${node.id}|exec|ok" title="Salida de ejecución OK (B2→B1)">OK</button><button class="flow-port port-error" data-connect-from="${node.id}|exec|error" title="Salida de ejecución ERR (B2→B1)">ERR</button>`
          : ["event", "action"].includes(node.type)
            ? `<button class="flow-port" data-connect-from="${node.id}|exec|next" title="Salida de ejecución">▶</button>`
            : "";
      const execInput = node.type === "event" ? ""
        : `<button class="flow-target" data-connect-to="${node.id}|exec|in" title="Entrada de ejecución">◀</button>`;
      const dataInputs = node.type === "condition" && node.data.source === "payload"
        ? `<div class="flow-data-row input"><span>valor</span><button class="flow-data-port" data-connect-to="${node.id}|data|value" title="Entrada de datos: valor"></button></div>`
        : node.type === "action"
          ? actionParams.map(([name, type]) => `<div class="flow-data-row input"><span>${escapeHtml(name)} <small>${escapeHtml(type)}</small></span><button class="flow-data-port type-${escapeHtml(type)}" data-connect-to="${node.id}|data|param:${escapeHtml(name)}" title="Entrada de datos: ${escapeHtml(name)}"></button></div>`).join("")
          : "";
      const dataOutputs = ["event", "bridge"].includes(node.type)
        ? outFields.map(([name, type]) => `<div class="flow-data-row output"><span>${escapeHtml(name)} <small>${escapeHtml(type)}</small></span><button class="flow-data-port type-${escapeHtml(type)}" data-connect-from="${node.id}|data|payload:${escapeHtml(name)}" title="Salida payload.${escapeHtml(name)}"></button></div>`).join("")
        : "";
      const highlight = activeNodes.has(node.id) ? " is-active" : "";
      const selected = selectedId === node.id ? " is-selected" : "";
      const summary = node.type === "event" ? node.data.event
        : node.type === "condition" ? `${node.data.source}.${node.data.field || "state"} ${node.data.operator} ${node.data.value || ""}`
          : node.type === "action" ? actionSummary(graph, node)
            : node.type === "bridge" ? `B1→B2→B1 · ${node.data.operation || "verify_sim_authority"}`
              : node.type === "state" ? `Estado: ${node.data.name}` : "Fin";
      return `<article class="flow-node node-${node.type}${highlight}${selected}" data-node="${node.id}" style="left:${node.x}px;top:${node.y}px">
        <header class="flow-node-head"><span>${escapeHtml(node.type)}</span><button type="button" class="flow-node-remove" data-remove-node="${escapeHtml(node.id)}" title="Eliminar nodo ${escapeHtml(node.id)} (Supr)">✕</button>${execInput}${outputs}</header>
        <div class="flow-node-body" data-select-node="${node.id}"><strong>${escapeHtml(node.id)}</strong><small>${escapeHtml(summary)}</small></div>
        <div class="flow-node-data">${dataInputs}${dataOutputs}</div>
      </article>`;
    }).join("");
    stage.innerHTML = `${edgeMarkup(size.width, size.height)}${cards}`;
    updatePortHighlights();
    stage.querySelectorAll("[data-connect-to]").forEach(button => {
      button.addEventListener("contextmenu", event => {
        event.preventDefault();
        const [to, kind, input] = button.dataset.connectTo.split("|");
        const before = graph.edges.length;
        graph.edges = graph.edges.filter(edge => kind === "exec"
          ? !((edge.kind || "exec") === "exec" && edge.to === to)
          : !(edge.kind === "data" && edge.to === to && edge.input === input));
        if (graph.edges.length !== before) {
          save();
          render();
          showMessage(`Cable desconectado en ${to}.`);
        }
      });
    });
    fitGraph();
    if (viewportObserver) viewportObserver.disconnect();
    if (typeof ResizeObserver !== "undefined") {
      viewportObserver = new ResizeObserver(fitGraph);
      viewportObserver.observe(root.querySelector(".flow-viewport"));
    }
  }

  function renderCatalogRows() {
    const body = root.querySelector("[data-catalog-rows]");
    if (!body) return;
    const rows = searchCatalogOperations({ query: catalogQuery, env: catalogEnv, status: catalogStatus, kind: catalogKind });
    body.innerHTML = rows.map(op => {
      const compoundHtml = Array.isArray(op.compoundSteps) && op.compoundSteps.length
        ? `<div class="flow-compound-steps"><strong>Pasos compuestos:</strong> ${op.compoundSteps.map(s => escapeHtml(s)).join(" → ")}</div>`
        : "";
      const evidenceRefsHtml = Array.isArray(op.evidenceRefs) && op.evidenceRefs.length
        ? `<div class="flow-evidence-refs"><strong>Evidencia:</strong> <code>${op.evidenceRefs.map(r => escapeHtml(r)).join("</code>, <code>")}</code></div>`
        : "";
      const mutationSummary = `Mutación: ${op.stateMutated === null ? "N/A (lectura)" : op.stateMutated ? "Sí" : "No demostrada"} · Readback: ${op.readbackConfirmed ? "Confirmado" : "No confirmado"} · Persistencia: ${escapeHtml(op.persistence)}`;
      const insertBtnHtml = op.verified_in_runtime
        ? `<div style="margin-top:6px"><button type="button" data-insert-catalog-op="${escapeHtml(op.id)}">➕ Insertar en grafo</button></div>`
        : `<div class="flow-muted" style="margin-top:6px">⛔ Bloqueada por falta de mutación real en partida</div>`;
      return `
      <tr>
        <td><code>${escapeHtml(op.id)}</code>${op.questionedCapability ? `<div class="flow-muted">Sub-op cuestionada: <code>${escapeHtml(op.questionedCapability)}</code></div>` : ""}${insertBtnHtml}</td>
        <td><strong>${escapeHtml(op.env)}</strong></td>
        <td>${escapeHtml(op.domain)}</td>
        <td>
          <span class="flow-badge" data-status="${escapeHtml(op.status)}">${escapeHtml(op.status)}</span>
          <div class="flow-kind-tag" data-kind="${escapeHtml(op.operationKind || "")}">${escapeHtml(op.operationKind || "")}</div>
        </td>
        <td>
          <div>${escapeHtml(op.description)}</div>
          <div class="flow-muted">${mutationSummary}</div>
          ${compoundHtml}
          ${evidenceRefsHtml}
        </td>
      </tr>
    `;
    }).join("");
    body.querySelectorAll("[data-insert-catalog-op]").forEach(btn => {
      btn.addEventListener("click", () => insertCatalogOperationIntoGraph(btn.dataset.insertCatalogOp));
    });
  }

  function insertCatalogOperationIntoGraph(opId) {
    const op = getCatalogOperationById(opId);
    if (!op || !op.verified_in_runtime) {
      showMessage(`La operación ${opId} no tiene mutación verificada y está bloqueada.`, "error");
      return;
    }
    const offset = (graph.nodes.length % 5) * 35;
    let newNode = null;
    if (op.type === "event") {
      const evtName = op.id.replace(/^event\./, "");
      newNode = {
        id: `evt-${Date.now().toString(36).slice(-4)}`,
        type: "event",
        x: 80 + offset,
        y: 90 + offset,
        data: { event: EVENT_CATALOG[evtName] ? evtName : "character.overlap_begin", whenState: "" }
      };
    } else if (BRIDGE_CATALOG[op.id] || op.id.startsWith("bridge.")) {
      const bridgeKey = BRIDGE_CATALOG[op.id] ? op.id : op.id.replace(/^bridge\./, "");
      const bSchema = BRIDGE_CATALOG[bridgeKey] || BRIDGE_CATALOG.verify_sim_authority;
      newNode = {
        id: `bridge-${Date.now().toString(36).slice(-4)}`,
        type: "bridge",
        x: 420 + offset,
        y: 110 + offset,
        data: { operation: BRIDGE_CATALOG[bridgeKey] ? bridgeKey : "verify_sim_authority", reqId: "1", params: { ...(bSchema.defaults || {}) } }
      };
    } else {
      const cliMap = {
        "action.toast.show": "toast.show",
        "action.schedule.AdvanceToNextSchedule": "schedule.AdvanceToNextSchedule",
        "entity.visibility_and_scale": "entity.set_scale",
        "pose.bone_override": "pose.set_bone"
      };
      const cmdKey = cliMap[op.id] || (CLI_CATALOG[op.id] ? op.id : null);
      if (cmdKey && CLI_CATALOG[cmdKey]) {
        const cSchema = CLI_CATALOG[cmdKey];
        newNode = {
          id: `act-${Date.now().toString(36).slice(-4)}`,
          type: "action",
          x: 420 + offset,
          y: 110 + offset,
          data: { command: cmdKey, args: "", params: { ...(cSchema.defaults || {}) }, scope: cSchema.scope }
        };
      } else {
        newNode = {
          id: `bridge-${Date.now().toString(36).slice(-4)}`,
          type: "bridge",
          x: 420 + offset,
          y: 110 + offset,
          data: { operation: "verify_sim_authority", reqId: "1", params: { tag: op.id } }
        };
      }
    }
    graph.nodes.push(newNode);
    selectedId = newNode.id;
    save();
    render();
    showMessage(`Nodo insertado desde catálogo verificado: ${op.id} (${newNode.type} · ${newNode.id}).`);
    root.querySelector(".flow-editor")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderOutput() {
    const result = compileGraph(graph, environment);
    const bundle = compileB1B2Bundle(graph);
    const errors = root.querySelector("[data-errors]");
    const code = root.querySelector("[data-code]");
    const manifestCode = root.querySelector("[data-manifest]");
    const scriptPathEl = root.querySelector("[data-script-path]");
    const b1Code = root.querySelector("[data-b1-code]");
    const b2Code = root.querySelector("[data-b2-code]");
    const bundleManifest = root.querySelector("[data-bundle-manifest]");
    const displayErrors = bundle.errors.length ? bundle.errors : result.errors;
    errors.innerHTML = displayErrors.length
      ? `<ul>${displayErrors.map(error => `<li>${escapeHtml(error)}</li>`).join("")}</ul>`
      : "<span class='flow-good'>Grafo estructuralmente válido · contrato B1/B2 y tipos verificados · listo para BlueLuaKit.</span>";
    code.textContent = result.lua || "-- Usa el paquete B1+B2 superior cuando combines nodos de cliente (B1) y simulación (B2).";
    if (manifestCode) manifestCode.textContent = result.manifest || "{\n  \"bindings\": {}\n}";
    if (scriptPathEl) scriptPathEl.textContent = result.scriptPath || `${environment}/Main.lua`;
    if (b1Code) b1Code.textContent = bundle.b1Lua || "-- Corrige los errores del grafo para generar B1/Zoi/FlowBridgeClient.lua.";
    if (b2Code) b2Code.textContent = bundle.b2Lua || "-- Corrige los errores del grafo para generar B2/Zoi/FlowBridgeServer.lua.";
    if (bundleManifest) bundleManifest.textContent = bundle.manifest || "{\n  \"bindings\": {}\n}";
    const luaBtn = root.querySelector("[data-export=lua]");
    const bundleBtn = root.querySelector("[data-export=bundle]");
    if (luaBtn) luaBtn.disabled = result.errors.length > 0;
    if (bundleBtn) bundleBtn.disabled = bundle.errors.length > 0;
  }

  function loadInteractiveItem(item) {
    if (!item) return;
    previousGraph = { graph: structuredClone(graph), environment };
    let backupSaved = true;
    try {
      localStorage.setItem(backupStorageKey, JSON.stringify(previousGraph));
    } catch {
      backupSaved = false;
    }
    graph = structuredClone(item.graph);
    environment = item.environment;
    selectedId = graph.nodes.find(node => node.type === "event")?.id || graph.nodes[0]?.id || null;
    connecting = null;
    activeNodes.clear();
    uiModConfig.title = `Panel · ${item.title}`;
    uiModConfig.buttons = extractButtonsFromGraph(graph);
    uiPreviewVisible = true;
    uiPreviewStatusText = `Sincronizado con "${item.title}" (${uiModConfig.buttons.length} botones interactivos).`;
    save();
    render();
    const eventName = graph.nodes.find(node => node.type === "event")?.data.event;
    const payload = structuredClone(item.payload);
    root.querySelector("[data-sim-event]").value = eventName;
    root.querySelector("[data-payload]").value = JSON.stringify(payload, null, 2);
    const result = simulateEvent(graph, eventName, payload, graph.initialState);
    activeNodes = new Set(result.active);
    root.querySelector("[data-sim-output]").textContent = `${result.log.join("\n")}\nEstado final: ${result.state}`;
    renderGraph();
    showMessage(`Flujo cargado y simulado: ${item.title}. ${backupSaved ? "Puedes restaurar el grafo anterior." : "No se pudo guardar copia."} Selecciona nodos para editar o exporta el paquete B1+B2.`);
    root.querySelector(".flow-editor").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderBlueprintTreeSection() {
    const tree = CONTEXT_ACTION_TREES[activeTreeDomain] || CONTEXT_ACTION_TREES.pregnancy;
    const opts = activeTreeOptionsByDomain[activeTreeDomain] || defaultOptionsForContextTree(activeTreeDomain);
    const domainIcons = {
      pregnancy: "🤰",
      appearance: "👗",
      vehicle: "🚗",
      furniture: "🛋️",
      weather_time: "🌧️",
      life: "🧬",
      zoi_self_menu: "📱",
      zoi_target_social: "👫"
    };
    const domainTabs = Object.values(CONTEXT_ACTION_TREES).map(item => {
      const domOpts = activeTreeOptionsByDomain[item.id] || defaultOptionsForContextTree(item.id);
      const enabledCount = (item.options || []).filter(o => {
        if (o.dependsOn && String(domOpts[o.dependsOn]) !== "true") return false;
        const isBool = o.type === "checkbox" || o.type === "boolean";
        return isBool ? String(domOpts[o.id]) === "true" : String(domOpts[o.id] ?? "") !== "";
      }).length;
      return `
        <button type="button" class="flow-bp-tab${item.id === tree.id ? " is-active" : ""}" data-bp-domain="${escapeHtml(item.id)}">
          <span class="flow-bp-tab-icon">${escapeHtml(domainIcons[item.id] || "⚙️")}</span>
          <span>
            <strong>${escapeHtml(item.title)}</strong>
            <small>${escapeHtml(item.badge || item.bridgeOperation)} · <b>${enabledCount}/${(item.options || []).length} activas</b></small>
          </span>
        </button>
      `;
    }).join("");

    const searchNorm = String(bpFilterSearch || "").trim().toLowerCase();
    const filteredRules = (tree.engineRules || []).filter(ruleText =>
      !searchNorm || ruleText.toLowerCase().includes(searchNorm)
    );
    const rulesHtml = filteredRules.length
      ? filteredRules.map(ruleText => `
        <div class="flow-bp-rule">
          <div class="flow-bp-rule-head">
            <span class="flow-badge" data-status="VERIFICADA">REGLA / BYPASS</span>
            <span>${escapeHtml(ruleText)}</span>
          </div>
        </div>
      `).join("")
      : `<div class="flow-bp-rule"><span class="flow-muted">Ninguna regla coincide con el filtro "${escapeHtml(bpFilterSearch)}".</span></div>`;

    const allOptions = tree.options || [];
    const availableGroups = [...new Set(allOptions.map(o => o.group || "Opciones del Dominio"))];
    if (bpFilterGroup !== "ALL" && !availableGroups.includes(bpFilterGroup)) {
      bpFilterGroup = "ALL";
    }

    const optionMatchesFilter = opt => {
      const grp = opt.group || "Opciones del Dominio";
      if (bpFilterGroup !== "ALL" && grp !== bpFilterGroup) return false;
      const meta = getOptionImpactMeta(tree.id, opt);
      if (bpFilterImpact !== "all" && meta.impactId !== bpFilterImpact) return false;
      const isBool = opt.type === "checkbox" || opt.type === "boolean";
      const val = opts[opt.id] ?? opt.defaultValue;
      const isEnabled = (!opt.dependsOn || String(opts[opt.dependsOn]) === "true") &&
        (isBool ? String(val) === "true" : String(val ?? "") !== "");
      if (bpFilterState === "enabled" && !isEnabled) return false;
      if (bpFilterState === "has_extras" && meta.childCount === 0 && !opt.dependsOn) return false;
      if (searchNorm) {
        const hay = `${opt.id} ${opt.label || ""} ${opt.detail || ""} ${opt.apiRef || ""} ${grp} ${meta.impactBadge} ${meta.childLabels.join(" ")}`.toLowerCase();
        if (!hay.includes(searchNorm)) return false;
      }
      return true;
    };

    const filteredOptions = allOptions.filter(optionMatchesFilter);
    const groupedMap = new Map();
    for (const opt of filteredOptions) {
      const grp = opt.group || "Opciones del Dominio";
      if (!groupedMap.has(grp)) groupedMap.set(grp, []);
      groupedMap.get(grp).push(opt);
    }

    const renderSingleOption = opt => {
      const parentDisabled = opt.dependsOn ? String(opts[opt.dependsOn]) !== "true" : false;
      const val = opts[opt.id] ?? opt.defaultValue;
      const isBool = opt.type === "checkbox" || opt.type === "boolean";
      const meta = getOptionImpactMeta(tree.id, opt);
      let controlHtml = "";
      if (isBool) {
        const checked = String(val) === "true" ? "checked" : "";
        controlHtml = `<input type="checkbox" data-bp-opt="${escapeHtml(opt.id)}" ${checked} ${parentDisabled ? "disabled" : ""}>`;
      } else if (opt.type === "select") {
        controlHtml = `<select data-bp-opt="${escapeHtml(opt.id)}" ${parentDisabled ? "disabled" : ""}>${(opt.choices || []).map(ch => {
          const cVal = Array.isArray(ch) ? ch[0] : ch.value;
          const cLab = Array.isArray(ch) ? ch[1] : ch.label;
          return `<option value="${escapeHtml(cVal)}" ${String(val) === String(cVal) ? "selected" : ""}>${escapeHtml(cLab)}</option>`;
        }).join("")}</select>`;
      } else {
        controlHtml = `<input type="text" data-bp-opt="${escapeHtml(opt.id)}" value="${escapeHtml(String(val))}" ${parentDisabled ? "disabled" : ""}>`;
      }
      return `
        <div class="flow-bp-option${opt.dependsOn ? " is-child" : ""}${parentDisabled ? " is-disabled" : ""}" data-bp-option-id="${escapeHtml(opt.id)}" data-bp-impact="${escapeHtml(meta.impactId)}">
          <div class="flow-bp-option-main">
            <label class="flow-bp-option-label">
              ${isBool ? controlHtml : ""}
              <span>
                <strong>${escapeHtml(opt.label)}</strong>
                <small>${escapeHtml(opt.detail || "")}</small>
              </span>
            </label>
            ${!isBool ? `<div class="flow-bp-option-input">${controlHtml}</div>` : ""}
          </div>
          <div class="flow-bp-option-meta">
            <span class="flow-bp-scope">${escapeHtml(opt.env || "B2")}</span>
            <span class="flow-badge" data-status="${escapeHtml(opt.status || "VERIFICADA")}">${escapeHtml(opt.status || "VERIFICADA")}</span>
            <span class="flow-bp-chip-impact" title="Ámbito al que afecta esta opción">🎯 Afecta a: ${escapeHtml(meta.impactBadge)}</span>
            ${meta.childCount > 0 ? `<span class="flow-bp-chip-extras" title="Opciones dependientes que se desbloquean">✨ Desbloquea +${meta.childCount} opciones extra: ${escapeHtml(meta.childLabels.join(" · "))}</span>` : ""}
            <code>${escapeHtml(opt.apiRef || "")}</code>
            ${opt.dependsOn ? `<span class="flow-muted">↳ depende de <code>${escapeHtml(opt.dependsOn)}</code></span>` : ""}
          </div>
        </div>
      `;
    };

    const groupedOptionsHtml = groupedMap.size > 0
      ? [...groupedMap.entries()].map(([grpName, grpOpts]) => {
        const activeInGroup = grpOpts.filter(o => {
          if (o.dependsOn && String(opts[o.dependsOn]) !== "true") return false;
          const isBool = o.type === "checkbox" || o.type === "boolean";
          return isBool ? String(opts[o.id]) === "true" : String(opts[o.id] ?? "") !== "";
        }).length;
        return `
          <div class="flow-bp-group-block" data-bp-group-block="${escapeHtml(grpName)}">
            <div class="flow-bp-group-header">
              <div>
                <strong>${escapeHtml(grpName)}</strong>
                <span class="flow-bp-group-count">${activeInGroup}/${grpOpts.length} activas</span>
              </div>
              <div class="flow-bp-group-actions">
                <button type="button" data-bp-group-check="${escapeHtml(grpName)}">✓ Marcar visibles</button>
                <button type="button" data-bp-group-uncheck="${escapeHtml(grpName)}">✕ Desmarcar visibles</button>
              </div>
            </div>
            <div class="flow-bp-group-items">
              ${grpOpts.map(renderSingleOption).join("")}
            </div>
          </div>
        `;
      }).join("")
      : `<div class="flow-bp-empty">No hay opciones que coincidan con los filtros actuales. Pulsa "Limpiar filtros" para ver todas las opciones de la categoría.</div>`;

    const activeCommandsPreview = allOptions
      .filter(opt => {
        if (opt.dependsOn && String(opts[opt.dependsOn]) !== "true") return false;
        const isBool = opt.type === "checkbox" || opt.type === "boolean";
        if (isBool) return String(opts[opt.id]) === "true";
        return String(opts[opt.id] ?? "") !== "";
      })
      .map(opt => `[${opt.env || "B2"}] ${opt.apiRef} (${opt.id}=${opts[opt.id]})`);

    const presetsHtml = BLUEPRINT_IDEA_PRESETS.map(preset => `
      <button type="button" class="flow-bp-preset-chip${activeIdeaPresetId === preset.id ? " is-active" : ""}" data-bp-preset="${escapeHtml(preset.id)}" title="${escapeHtml(preset.description)}">
        <span>${escapeHtml(preset.icon)}</span>
        <span>
          <strong>${escapeHtml(preset.title)}</strong>
          <small>${escapeHtml(preset.description)}</small>
        </span>
      </button>
    `).join("");

    const mixCheckboxesHtml = Object.values(CONTEXT_ACTION_TREES).map(dom => `
      <label class="flow-bp-mix-pill${selectedMixDomains.has(dom.id) ? " is-checked" : ""}">
        <input type="checkbox" data-bp-mix-domain="${escapeHtml(dom.id)}" ${selectedMixDomains.has(dom.id) ? "checked" : ""}>
        <span>${escapeHtml(domainIcons[dom.id] || "⚙️")} ${escapeHtml(dom.title.split("·")[0].trim())}</span>
      </label>
    `).join("");

    return `
      <section class="flow-blueprint" aria-labelledby="flow-bp-title">
        <div class="flow-blueprint-head">
          <div>
            <p class="flow-kicker">PASO 1 · ELIGE QUÉ QUIERES HACER EN EL JUEGO (BLUEPRINT CONTEXTUAL ESCALABLE)</p>
            <h2 id="flow-bp-title">1. Selecciona categoría, reglas y opciones del mod</h2>
            <p>Filtra por categoría, submenú, qué opciones extra desbloquea y a qué afecta (Zoi Principal, Pareja, Móvil CCTV, Vehículos, Negocio o DataTables). Combina varias categorías en un mismo mod.</p>
          </div>
          <div class="flow-bp-trigger-box">
            <label>Disparador del Mod (B1)
              <select data-bp-trigger>
                ${Object.entries(EVENT_CATALOG).map(([evtName, evtDef]) =>
                  `<option value="${escapeHtml(evtName)}" ${activeTreeTrigger === evtName ? "selected" : ""}>${escapeHtml(evtName)} (${escapeHtml(evtDef.scope)})</option>`
                ).join("")}
              </select>
            </label>
          </div>
        </div>

        <div class="flow-bp-ideas-bar" aria-label="Plantillas de lluvia de ideas y mezclador">
          <div class="flow-bp-ideas-head">
            <strong>💡 Plantillas de Mods e Ideas Rápidas (1 clic):</strong>
            <span class="flow-muted">Preconfiguran opciones verificadas y combinan múltiples sistemas listos para probar.</span>
          </div>
          <div class="flow-bp-presets-strip">${presetsHtml}</div>
          <div class="flow-bp-mixer-bar">
            <div class="flow-bp-mixer-checks">
              <strong>🔗 Mezclador Multi-Categoría (${selectedMixDomains.size} seleccionadas):</strong>
              ${mixCheckboxesHtml}
            </div>
            <button type="button" class="flow-bp-btn-primary" data-bp-apply-mix>⚡ Combinar ${selectedMixDomains.size} Categorías en el Grafo y Simular</button>
          </div>
        </div>

        <div class="flow-bp-tabs" role="tablist">${domainTabs}</div>

        <div class="flow-bp-filter-bar" role="search" aria-label="Filtrar opciones y reglas del mod">
          <label class="flow-bp-filter-field flow-bp-filter-search-wrap">
            <span>🔍 Buscar opción, API, acción o regla</span>
            <input type="search" data-bp-filter-search placeholder="Ej. CCTV, parking, SmartPhone, Lara Ni, Romance, TalkSelection..." value="${escapeHtml(bpFilterSearch)}">
          </label>
          <label class="flow-bp-filter-field">
            <span>📂 Submenú / Regla (${availableGroups.length})</span>
            <select data-bp-filter-group>
              <option value="ALL" ${bpFilterGroup === "ALL" ? "selected" : ""}>Todos los submenús (${allOptions.length} opciones)</option>
              ${availableGroups.map(grp => `<option value="${escapeHtml(grp)}" ${bpFilterGroup === grp ? "selected" : ""}>${escapeHtml(grp)}</option>`).join("")}
            </select>
          </label>
          <label class="flow-bp-filter-field">
            <span>🎯 A qué afecta</span>
            <select data-bp-filter-impact>
              ${Object.values(IMPACT_SCOPES).map(sc => `<option value="${escapeHtml(sc.id)}" ${bpFilterImpact === sc.id ? "selected" : ""}>${escapeHtml(sc.label)}</option>`).join("")}
            </select>
          </label>
          <label class="flow-bp-filter-field">
            <span>✨ Opciones extra / Estado</span>
            <select data-bp-filter-state>
              <option value="all" ${bpFilterState === "all" ? "selected" : ""}>Todas las opciones</option>
              <option value="enabled" ${bpFilterState === "enabled" ? "selected" : ""}>Solo marcadas / activas</option>
              <option value="has_extras" ${bpFilterState === "has_extras" ? "selected" : ""}>Con sub-opciones extra (↳)</option>
            </select>
          </label>
          <div class="flow-bp-filter-summary">
            <span>Mostrando <strong>${filteredOptions.length}</strong> de <strong>${allOptions.length}</strong> opciones</span>
            <button type="button" data-bp-filter-clear>Limpiar filtros</button>
          </div>
        </div>

        <div class="flow-bp-body">
          <div class="flow-bp-col-rules">
            <h3>${escapeHtml(domainIcons[tree.id] || "⚙️")} ${escapeHtml(tree.title)} — Reglas del Motor y Bypasses</h3>
            <p class="flow-muted">${escapeHtml(tree.summary || "")}</p>
            <div class="flow-bp-rules-list">${rulesHtml}</div>
            <div class="flow-bp-preview-box">
              <strong>Secuencia activa (${activeCommandsPreview.length} opciones activadas):</strong>
              <ol class="flow-bp-preview-list">
                ${activeCommandsPreview.map(line => `<li><code>${escapeHtml(line)}</code></li>`).join("")}
              </ol>
            </div>
          </div>
          <div class="flow-bp-col-options">
            <h3>Árbol de Opciones, Impacto y Sub-acciones (${filteredOptions.length} visibles)</h3>
            <p class="flow-muted">Cada opción indica qué sub-opciones extra (↳) desbloquea y a qué sistema afecta. Puedes marcar o desmarcar bloques completos.</p>
            <div class="flow-bp-options-list">${groupedOptionsHtml}</div>
            <div class="flow-bp-actions">
              <button type="button" class="flow-bp-btn-primary" data-bp-apply>⚡ Enviar Categoría Actual al Grafo y Simular</button>
              <button type="button" data-bp-apply-mix>🔗 Enviar Mezcla Multi-Categoría (${selectedMixDomains.size})</button>
              <button type="button" data-bp-export-bundle>📦 Descargar Paquete B1+B2 directo</button>
              <button type="button" data-bp-reset>Restaurar valores por defecto</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderUiModStudioSection() {
    if (!Array.isArray(uiModConfig.buttons) || uiModConfig.buttons.length === 0) {
      uiModConfig.buttons = extractButtonsFromGraph(graph);
    }
    // Auto-humanize legacy raw technical labels (e.g., "movement.teleport (C_MOVIMIENTO_VUELO_ZOI)")
    for (const btn of uiModConfig.buttons) {
      const friendly = UI_ACTION_LABELS[btn.command];
      if (friendly && (btn.label === btn.command || /\(C_[A-Z0-9_]+\)/.test(String(btn.label || "")))) {
        btn.label = friendly.label;
        if (!btn.icon || btn.icon === "⚡" || btn.icon === "🌉") {
          btn.icon = friendly.icon;
        }
      }
    }
    const uiBundle = compileUiModBundle(graph, uiModConfig);
    const cfg = uiBundle.config;
    const enabledButtons = cfg.buttons.filter(btn => btn.enabled !== false);
    const scaledWidth = Math.max(270, Math.min(480, Math.round((Number(cfg.width) || 420) * 0.74)));
    const scaledMinHeight = Math.max(190, Math.min(430, Math.round((Number(cfg.height) || 360) * 0.62)));
    const bgRgba = hexToRgba(cfg.bgColor, cfg.opacity);
    const accent = cfg.accentColor || "#45d6bd";
    const textCol = cfg.textColor || "#e6eef8";
    const radiusPx = Math.max(4, Math.min(24, Number(cfg.borderRadius) || 12));
    const triggerLabel = cfg.triggerType === "always_on"
      ? "always_on"
      : `${cfg.triggerModifier && cfg.triggerModifier !== "NONE" ? `${cfg.triggerModifier}+` : ""}${cfg.triggerKey}`;

    let btnInlineStyle = `background:${accent};color:#0c1218;border:1px solid ${accent};font-weight:700;`;
    let btnSubColor = "rgba(12,18,24,0.75)";
    if (cfg.buttonStyle === "outline") {
      btnInlineStyle = `background:rgba(12,18,24,0.45);color:${textCol};border:1.5px solid ${accent};font-weight:600;`;
      btnSubColor = "rgba(230,238,248,0.72)";
    } else if (cfg.buttonStyle === "glass") {
      btnInlineStyle = `background:rgba(255,255,255,0.10);color:${textCol};border:1px solid ${accent};font-weight:600;`;
      btnSubColor = "rgba(230,238,248,0.72)";
    }

    const hasCustomPos = Number.isFinite(Number(cfg.customLeftPct)) && Number.isFinite(Number(cfg.customTopPct));
    const posClass = hasCustomPos ? "pos-custom" : `pos-${cfg.position || "top-right"}`;
    const customPosStyle = hasCustomPos
      ? `left:${Number(cfg.customLeftPct).toFixed(2)}%;top:${Number(cfg.customTopPct).toFixed(2)}%;right:auto;bottom:auto;transform:none;`
      : "";
    const posCoordText = hasCustomPos
      ? `X:${Math.round((Number(cfg.customLeftPct) / 100) * 1920)}px Y:${Math.round((Number(cfg.customTopPct) / 100) * 1080)}px`
      : cfg.position;

    return `
      <section class="flow-uimod-studio" aria-labelledby="flow-step3-ui-title">
        <div class="flow-step-bar">
          <div>
            <p class="flow-kicker">PASO 3 · DISEÑA Y PREVISUALIZA LA VENTANA DEL MOD EN VIVO (IGUAL QUE EN MODKIT)</p>
            <h2 id="flow-step3-ui-title">3. Configurador y Visualizador de Ventana Interactiva (UIMod 1920×1080)</h2>
          </div>
          <div class="flow-export-actions">
            <button type="button" data-ui-sync-graph title="Regenerar los botones de la ventana a partir de los nodos actuales del grafo">🔄 Sincronizar botones con el Grafo</button>
            <button type="button" class="flow-bp-btn-primary" data-export="uimod">🖼️ Descargar UIMod (5 archivos)</button>
            <button type="button" class="flow-bp-btn-primary" data-export="full-mod">🚀 Descargar Mod Completo (UIMod + Lua B1/B2)</button>
          </div>
        </div>
        <div class="flow-uimod-grid">
          <div class="flow-uimod-controls">
            <h3>Apariencia, Tamaño y Trigger</h3>
            <div class="flow-uimod-form-grid">
              <label class="flow-uimod-span-2">Título de la ventana
                <input type="text" data-ui-field="title" value="${escapeHtml(cfg.title)}">
              </label>
              <label class="flow-uimod-span-2">Subtítulo / instrucción
                <input type="text" data-ui-field="subtitle" value="${escapeHtml(cfg.subtitle)}">
              </label>
              <label>Tema predefinido
                <select data-ui-theme>
                  ${Object.values(UI_MOD_THEMES).map(th =>
                    `<option value="${escapeHtml(th.id)}" ${cfg.themeId === th.id ? "selected" : ""}>${escapeHtml(th.label)}</option>`
                  ).join("")}
                </select>
              </label>
              <label>Posición en pantalla (o arrástrala)
                <select data-ui-field="position">
                  <option value="top-right" ${cfg.position === "top-right" ? "selected" : ""}>Arriba a la derecha</option>
                  <option value="top-left" ${cfg.position === "top-left" ? "selected" : ""}>Arriba a la izquierda</option>
                  <option value="center" ${cfg.position === "center" ? "selected" : ""}>Centro de la pantalla</option>
                  <option value="bottom-right" ${cfg.position === "bottom-right" ? "selected" : ""}>Abajo a la derecha</option>
                </select>
              </label>
              <label><span>Ancho: <strong data-ui-val="width">${cfg.width}px</strong></span>
                <input type="range" min="300" max="640" step="10" data-ui-field="width" value="${escapeHtml(String(cfg.width))}">
              </label>
              <label><span>Alto mín.: <strong data-ui-val="height">${cfg.height}px</strong></span>
                <input type="range" min="220" max="540" step="10" data-ui-field="height" value="${escapeHtml(String(cfg.height))}">
              </label>
              <label><span>Redondeo: <strong data-ui-val="borderRadius">${cfg.borderRadius}px</strong></span>
                <input type="range" min="4" max="24" step="2" data-ui-field="borderRadius" value="${escapeHtml(String(cfg.borderRadius))}">
              </label>
              <label><span>Opacidad: <strong data-ui-val="opacity">${Math.round((Number(cfg.opacity) || 0.9) * 100)}%</strong></span>
                <input type="range" min="0.5" max="1" step="0.05" data-ui-field="opacity" value="${escapeHtml(String(cfg.opacity))}">
              </label>
              <div class="flow-uimod-color-strip flow-uimod-span-2">
                <label>Fondo
                  <input type="color" data-ui-field="bgColor" value="${escapeHtml(cfg.bgColor)}">
                </label>
                <label>Botones / Borde
                  <input type="color" data-ui-field="accentColor" value="${escapeHtml(cfg.accentColor)}">
                </label>
                <label>Texto
                  <input type="color" data-ui-field="textColor" value="${escapeHtml(cfg.textColor)}">
                </label>
              </div>
              <label>Estilo de botones
                <select data-ui-field="buttonStyle">
                  <option value="solid" ${cfg.buttonStyle === "solid" ? "selected" : ""}>Sólido destacado</option>
                  <option value="outline" ${cfg.buttonStyle === "outline" ? "selected" : ""}>Contorno (Outline)</option>
                  <option value="glass" ${cfg.buttonStyle === "glass" ? "selected" : ""}>Cristal translúcido</option>
                </select>
              </label>
              <label>Disposición de botones
                <select data-ui-field="buttonLayout">
                  <option value="stack" ${cfg.buttonLayout === "stack" ? "selected" : ""}>Lista vertical (1 col · recomendado)</option>
                  <option value="grid-2" ${cfg.buttonLayout === "grid-2" ? "selected" : ""}>Cuadrícula (2 columnas)</option>
                </select>
              </label>
              <label class="flow-uimod-span-2">Modo input_policy
                <select data-ui-field="inputPolicy">
                  <option value="overlay" ${cfg.inputPolicy === "overlay" ? "selected" : ""}>overlay (clicable, juego sigue)</option>
                  <option value="modal" ${cfg.inputPolicy === "modal" ? "selected" : ""}>modal (pausa detrás)</option>
                  <option value="passthrough" ${cfg.inputPolicy === "passthrough" ? "selected" : ""}>passthrough (solo HUD)</option>
                </select>
              </label>
              <label>Tecla para abrir
                <select data-ui-field="triggerKey">
                  ${["M", "F1", "F2", "F3", "F8", "F9", "Z", "G", "P"].map(k =>
                    `<option value="${k}" ${cfg.triggerKey === k ? "selected" : ""}>${k}</option>`
                  ).join("")}
                </select>
              </label>
              <label>Modificador
                <select data-ui-field="triggerModifier">
                  <option value="Ctrl" ${cfg.triggerModifier === "Ctrl" ? "selected" : ""}>Ctrl</option>
                  <option value="Alt" ${cfg.triggerModifier === "Alt" ? "selected" : ""}>Alt</option>
                  <option value="Shift" ${cfg.triggerModifier === "Shift" ? "selected" : ""}>Shift</option>
                  <option value="NONE" ${cfg.triggerModifier === "NONE" ? "selected" : ""}>Sin modificador</option>
                </select>
              </label>
            </div>
            <div class="flow-uimod-btn-editor">
              <div class="flow-uimod-btn-editor-head">
                <strong>Botones interactivos (${enabledButtons.length}/${cfg.buttons.length} visibles)</strong>
                <button type="button" data-ui-add-btn>+ Añadir botón</button>
              </div>
              <div class="flow-uimod-btn-list">
                ${cfg.buttons.map((btn, idx) => `
                  <div class="flow-uimod-btn-card">
                    <div class="flow-uimod-btn-card-top">
                      <input type="checkbox" data-ui-btn-toggle="${idx}" ${btn.enabled !== false ? "checked" : ""} title="Mostrar u ocultar botón en la ventana">
                      <input type="text" class="flow-uimod-btn-icon" data-ui-btn-icon="${idx}" value="${escapeHtml(btn.icon || "⚡")}" title="Icono del botón">
                      <input type="text" class="flow-uimod-btn-label" data-ui-btn-label="${idx}" value="${escapeHtml(btn.label)}" placeholder="Texto visible en el botón">
                      <button type="button" class="flow-uimod-btn-del" data-ui-btn-delete="${idx}" title="Quitar este botón">✕</button>
                    </div>
                    <div class="flow-uimod-btn-card-meta">
                      <span class="flow-uimod-env-pill">${escapeHtml(btn.env || "B1")}</span>
                      <code title="${escapeHtml(btn.command)} ${escapeHtml(btn.argsText || "")}">${escapeHtml(btn.command)}${btn.argsText ? ` · ${escapeHtml(btn.argsText)}` : ""}</code>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
          <div class="flow-uimod-preview-col">
            <div class="flow-uimod-sim-bar">
              <div class="flow-uimod-sim-meta">
                <strong>Previsualizador ModKit (Lienzo 1920×1080)</strong>
                <span class="flow-uimod-chip">input: ${escapeHtml(cfg.inputPolicy)}</span>
                <span class="flow-uimod-chip" data-ui-pos-indicator>pos: ${escapeHtml(posCoordText)}</span>
                <span class="flow-uimod-chip" data-ui-hover-indicator>hover: ${uiPreviewHover ? "true (captura clics)" : "false (pasa al juego)"}</span>
              </div>
              <div class="flow-uimod-sim-actions">
                ${hasCustomPos ? `<button type="button" data-ui-reset-pos title="Volver a la posición del desplegable">↺ Reset pos.</button>` : ""}
                <button type="button" data-ui-fire-trigger>🔥 Simular Trigger (${escapeHtml(triggerLabel)})</button>
              </div>
            </div>
            <div class="flow-uimod-screen" data-ui-screen>
              <div class="flow-uimod-hud-bg">
                <span>inZOI · Vista de Partida (1920×1080 Logical Canvas) · Arrastra la ventana por su barra superior</span>
                <span>Trigger: <strong>${escapeHtml(triggerLabel)}</strong></span>
              </div>
              <div class="flow-uimod-live-window ${posClass}${uiPreviewVisible ? "" : " is-hidden"}" data-ui-live-window style="width:${scaledWidth}px;min-height:${scaledMinHeight}px;background:${bgRgba};border:1.5px solid ${accent};border-radius:${radiusPx}px;color:${textCol};${customPosStyle}">
                <div class="flow-uimod-live-header" data-ui-drag-handle title="Arrastra aquí para mover la ventana libremente por la pantalla">
                  <div class="flow-uimod-live-title-wrap">
                    <span class="flow-uimod-drag-grip">⠿ Arrastrar ventana</span>
                    <strong style="color:${textCol}">${escapeHtml(cfg.title)}</strong>
                    <small style="color:${textCol}">${escapeHtml(cfg.subtitle)}</small>
                  </div>
                  <button type="button" class="flow-uimod-live-close" data-ui-close-preview style="color:${textCol}" title="Cerrar ventana">✕</button>
                </div>
                <div class="flow-uimod-live-buttons ${cfg.buttonLayout === "grid-2" ? "is-grid-2" : "is-stack"}">
                  ${enabledButtons.map(btn => `
                    <button type="button" class="flow-uimod-live-btn" data-ui-test-btn="${escapeHtml(btn.id)}" style="border-radius:${Math.max(5, radiusPx - 4)}px;${btnInlineStyle}">
                      <span class="flow-uimod-live-btn-icon">${escapeHtml(btn.icon || "⚡")}</span>
                      <span class="flow-uimod-live-btn-text">
                        <strong>${escapeHtml(btn.label)}</strong>
                        <small style="color:${btnSubColor}">${escapeHtml(btn.env || "B1")} · ${escapeHtml(btn.command)}</small>
                      </span>
                    </button>
                  `).join("")}
                </div>
                <div class="flow-uimod-live-status" data-ui-live-status style="color:${textCol}">
                  ${escapeHtml(uiPreviewStatusText)}
                </div>
                <div class="flow-uimod-resize-handle" data-ui-resize-handle title="Arrastra para redimensionar ancho y alto de la ventana">↘</div>
              </div>
            </div>
            <div class="flow-uimod-console">
              <div class="flow-uimod-console-head">
                <strong>JS Console (cohtml.js + inzoi-sdk.js)</strong>
                <button type="button" data-ui-clear-console>Limpiar</button>
              </div>
              <pre data-ui-console>${escapeHtml(uiConsoleLines.join("\n"))}</pre>
            </div>
          </div>
        </div>
        <details class="flow-collapsible" style="margin-top:10px">
          <summary>Ver los 5 archivos generados del UIMod (<code>uimod_manifest.json</code>, <code>index.html</code>, <code>styles.css</code>, <code>window.js</code>, <code>app.js</code>)</summary>
          <div class="flow-code-grid" style="margin-top:8px">
            <div><h3>uimod_manifest.json</h3><pre><code>${escapeHtml(uiBundle.manifestJson)}</code></pre></div>
            <div><h3>index.html (cohtml.js → inzoi-sdk.js → window.js → app.js)</h3><pre><code>${escapeHtml(uiBundle.indexHtml)}</code></pre></div>
            <div><h3>styles.css</h3><pre><code>${escapeHtml(uiBundle.stylesCss)}</code></pre></div>
            <div><h3>app.js (Triggers + CLI + Puente B1↔B2)</h3><pre><code>${escapeHtml(uiBundle.appJs)}</code></pre></div>
          </div>
        </details>
      </section>
    `;
  }

  function render() {
    const currentBinding = graph.binding && BINDING_PRESETS[graph.binding] ? graph.binding : "Main";
    const bindingOptions = availableBindings(environment)
      .map(([key, item]) => `<option value="${escapeHtml(key)}" ${currentBinding === key ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
      .join("");
    root.innerHTML = `
      <section class="flow-hero">
        <div><p class="flow-kicker">INZOI MODKIT · GAME FLOW SYSTEM (B1 ↔ B2 + UIMOD STUDIO)</p><h1>inZOI Lua Flow</h1>
        <p>1. Elige opciones en el asistente Blueprint · 2. Ajusta y simula el grafo · 3. Diseña y previsualiza la ventana UI del mod · 4. Descarga el paquete completo.</p></div>
        <div class="flow-hero-controls">
          <label>Entorno <select data-env><option ${environment === "B1" ? "selected" : ""}>B1</option><option ${environment === "B2" ? "selected" : ""}>B2</option></select></label>
          <label>Binding <select data-binding>${bindingOptions}</select></label>
        </div>
      </section>
      ${renderBlueprintTreeSection()}
      <section class="flow-workspace-block" aria-labelledby="flow-step2-title">
        <div class="flow-step-bar">
          <div>
            <p class="flow-kicker">PASO 2 · DISEÑA, EDITA Y SIMULA EL GRAFO EN UN SOLO LUGAR</p>
            <h2 id="flow-step2-title">2. Lienzo del Grafo y Propiedades del Nodo</h2>
          </div>
          <p class="flow-status" data-status role="status">Listo.</p>
        </div>
        <div class="flow-toolbar">
          <button data-add="state">+ Estado</button><button data-add="event">+ Evento</button><button data-add="condition">+ Condición</button><button data-add="action">+ Acción CLI</button><button data-add="bridge">+ Puente B1↔B2</button><button data-add="end">+ Fin</button>
          <span class="flow-toolbar-sep" aria-hidden="true"></span>
          <button type="button" data-undo ${history.canUndo() ? "" : "disabled"} title="Deshacer último cambio (Ctrl+Z)">↩ Deshacer${history.undoCount() ? ` (${history.undoCount()})` : ""}</button>
          <button type="button" data-redo ${history.canRedo() ? "" : "disabled"} title="Rehacer cambio (Ctrl+Y)">↪ Rehacer${history.redoCount() ? ` (${history.redoCount()})` : ""}</button>
          <button type="button" class="flow-btn-danger" data-clear-graph title="Vaciar todos los nodos y empezar desde un lienzo limpio">🗑️ Vaciar grafo</button>
          <button type="button" data-clear-edges title="Desconectar todos los cables del grafo actual">✂️ Borrar cables</button>
          <button type="button" data-reset-default title="Volver al grafo inicial de ejemplo">🔄 Grafo inicial</button>
          ${previousGraph ? '<button data-restore-example>Restaurar grafo anterior</button>' : ""}
          <label>Estado inicial <select data-initial>${graph.nodes.filter(node => node.type === "state")
            .map(node => `<option value="${escapeHtml(node.data.name)}" ${graph.initialState === node.data.name ? "selected" : ""}>${escapeHtml(node.data.name)}</option>`)
            .join("")}</select></label>
        </div>
        <div class="flow-layout">
          <section class="flow-editor"><div class="flow-editor-head"><div><strong>Grafo interactivo</strong><span data-canvas-hint>Arrastra cualquier nodo · pulsa ✕ o Supr para borrar un nodo · Ctrl+Z deshacer / Ctrl+Y rehacer · clic derecho en entrada para desconectar.</span></div><div class="flow-editor-tools"><button type="button" data-fit-graph>Ajustar al grafo</button><button type="button" data-fullscreen>Pantalla completa</button></div></div><div class="flow-viewport"><div class="flow-stage" data-stage></div></div></section>
          <aside class="flow-side">
            <section><h2>Propiedades del Nodo</h2><div data-properties></div><button type="button" class="flow-btn-danger" data-delete-node>🗑️ Eliminar nodo seleccionado (Supr)</button></section>
            <section><h2>Simular Flujo</h2><label>Evento disparador<select data-sim-event></select></label><label>Payload JSON<textarea data-payload rows="3">{"entity_id":1,"interaction_bag_id":"Self_GoHome"}</textarea></label><button data-simulate>▶ Ejecutar simulación</button><pre data-sim-output>Sin simulación.</pre></section>
            <section><h2>Validación del Grafo</h2><div data-errors></div></section>
          </aside>
        </div>
      </section>
      ${renderUiModStudioSection()}
      <section class="flow-code" aria-labelledby="flow-step4-title">
        <div class="flow-export-bar">
          <div>
            <p class="flow-kicker">PASO 4 · DESCARGA E INSTALA TU MOD EN INZOI MODKIT</p>
            <h2 id="flow-step4-title">4. Exportar Paquete Lua B1 ↔ B2, UIMod y Manifest</h2>
          </div>
          <div class="flow-export-actions">
            <button type="button" class="flow-bp-btn-primary" data-export="full-mod">🚀 Descargar Mod Completo (UIMod + Lua B1/B2)</button>
            <button type="button" data-export="bundle">📦 Solo Lua B1+B2</button>
            <button type="button" data-export="uimod">🖼️ Solo Ventana UIMod</button>
            <button type="button" data-export="lua">Descargar Lua (${escapeHtml(environment)})</button>
            <button type="button" data-save-json>Guardar proyecto JSON</button>
            <button type="button" data-load-json>Importar JSON</button>
            <input type="file" accept=".json,application/json" data-json-file hidden>
          </div>
        </div>
        <details class="flow-collapsible">
          <summary>Ver código Lua generado (FlowBridgeClient.lua, FlowBridgeServer.lua y lua_manifest.json)</summary>
          <div class="flow-code-grid">
            <div>
              <h3>B1/Zoi/FlowBridgeClient.lua (Cliente)</h3>
              <pre><code data-b1-code></code></pre>
            </div>
            <div>
              <h3>B2/Zoi/FlowBridgeServer.lua (Simulación)</h3>
              <pre><code data-b2-code></code></pre>
            </div>
          </div>
          <h3>lua_manifest.json (Esquema v2 B1 + B2)</h3>
          <pre><code data-bundle-manifest></code></pre>
          <h3>Script de entorno único (<span data-script-path>${escapeHtml(environment)}/Main.lua</span>)</h3>
          <pre><code data-code></code></pre>
          <h3>lua_manifest.json (Entorno único)</h3>
          <pre><code data-manifest></code></pre>
        </details>
      </section>
      <section class="flow-examples" aria-labelledby="flow-examples-title">
        <div class="flow-examples-head"><div><p class="flow-kicker">PLANTILLAS Y EJEMPLOS DE REFERENCIA</p><h2 id="flow-examples-title">4 Ejemplos Interactivos de Dominio y 4 Casos Progresivos B1 ↔ B2</h2><p>Si prefieres partir de una plantilla ya armada, cárgala desde aquí y se enviará al grafo del Paso 2.</p></div><span>Opcional</span></div>
        <div class="flow-example-grid">${EXAMPLES.map(example => `
          <article class="flow-example">
            <h3>${escapeHtml(example.title)}</h3>
            <p>${escapeHtml(example.description)}</p>
            <p class="flow-example-path"><strong>Flujo:</strong> ${escapeHtml(example.flow)}</p>
            <details><summary>Cómo se construye</summary><ol>${example.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol></details>
            <button type="button" data-load-example="${escapeHtml(example.id)}">Cargar en el grafo</button>
          </article>`).join("")}
        </div>
        <details class="flow-collapsible" style="margin-top:12px">
          <summary>Ver los 4 Casos de Prueba Progresivos de Arquitectura RPC (B1 ↔ B2)</summary>
          <div class="flow-example-grid" style="margin-top:10px">${PROGRESSIVE_TEST_CASES.map(testCase => `
            <article class="flow-example">
              <h3>${escapeHtml(testCase.title)}</h3>
              <p>${escapeHtml(testCase.description)}</p>
              <p class="flow-example-path"><strong>Flujo:</strong> ${escapeHtml(testCase.flow)}</p>
              <details><summary>Pasos de verificación</summary><ol>${testCase.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol></details>
              <button type="button" data-load-case="${escapeHtml(testCase.id)}">Cargar y simular caso</button>
            </article>`).join("")}
          </div>
        </details>
      </section>
      <details class="flow-catalog flow-collapsible">
        <summary><strong>Referencia Avanzada:</strong> Catálogo Forense de Operaciones ModKit (33 capacidades) y Lector de Traza <code>inzoi_lua.log</code></summary>
        <div style="margin-top:12px">
          <div class="flow-trace-inline">
            <h3>Resaltar traza real de <code>inzoi_lua.log</code> en el grafo</h3>
            <div style="display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap">
              <textarea data-runtime-log rows="2" style="flex:1 1 320px;background:#10151d;color:var(--texto);border:1px solid var(--borde);border-radius:6px;padding:7px" placeholder="[LuaFlow][B1][bridge-1] tx_b1_to_b2=..."></textarea>
              <button type="button" data-show-trace style="padding:8px 12px;border:1px solid var(--borde);border-radius:7px;background:var(--panel2);color:var(--texto);cursor:pointer">Resaltar traza</button>
            </div>
          </div>
          <div class="flow-catalog-head" style="margin-top:12px">
            <div><h2 id="flow-catalog-title">Catálogo de Operaciones ModKit y Estado de Verificación</h2>
            <p class="flow-muted">Clasificación rigurosa sin inventar APIs: cada operación indica entorno real y nivel de verificación empírica.</p></div>
            <div class="flow-catalog-filters">
              <input type="search" data-catalog-query placeholder="Buscar API, CLI o dominio..." value="${escapeHtml(catalogQuery)}">
              <select data-catalog-env>
                <option value="ALL" ${catalogEnv === "ALL" ? "selected" : ""}>Todos los entornos</option>
                <option value="B1" ${catalogEnv === "B1" ? "selected" : ""}>B1 (Cliente)</option>
                <option value="B2" ${catalogEnv === "B2" ? "selected" : ""}>B2 (Simulación)</option>
                <option value="B1+B2" ${catalogEnv === "B1+B2" ? "selected" : ""}>B1+B2 (Ambos)</option>
              </select>
              <select data-catalog-status>
                <option value="ALL" ${catalogStatus === "ALL" ? "selected" : ""}>Todos los estados</option>
                <option value="VERIFICADA">VERIFICADA (readback/evento confirmado)</option>
                <option value="QUESTIONED">CUESTIONADAS (sin mutación demostrada)</option>
                <option value="DOCUMENTADA_NOT_EXECUTED">DOCUMENTADA_NOT_EXECUTED</option>
                <option value="ACK_ONLY_READBACK_UNCHANGED">ACK_ONLY_READBACK_UNCHANGED</option>
                <option value="ACK_ONLY">ACK_ONLY</option>
                <option value="PARTIAL_ACK_ONLY">PARTIAL_ACK_ONLY</option>
                <option value="ASYNC_NOT_CONFIRMED">ASYNC_NOT_CONFIRMED</option>
                <option value="READBACK_UNCHANGED">READBACK_UNCHANGED</option>
                <option value="DOCUMENTADA">DOCUMENTADA</option>
                <option value="EXPERIMENTAL">EXPERIMENTAL</option>
                <option value="NO COMPATIBLE">NO COMPATIBLE</option>
              </select>
              <select data-catalog-kind>
                <option value="ALL" ${catalogKind === "ALL" ? "selected" : ""}>Todos los tipos</option>
                <option value="READBACK_VERIFIED">READBACK_VERIFIED</option>
                <option value="COMPOUND">COMPOUND (Multi-paso)</option>
                <option value="SIMPLE">SIMPLE</option>
                <option value="ASYNC">ASYNC</option>
                <option value="ACK_ONLY">ACK_ONLY</option>
                <option value="EXPERIMENTAL_OR_PENDING">EXPERIMENTAL_OR_PENDING</option>
              </select>
            </div>
          </div>
          <div class="flow-catalog-table-wrap">
            <table class="flow-catalog-table">
              <thead><tr><th>Operación / API</th><th>Entorno</th><th>Dominio</th><th>Estado / Tipo</th><th>Evidencia forense y notas</th></tr></thead>
              <tbody data-catalog-rows></tbody>
            </table>
          </div>
        </div>
      </details>`;
    root.querySelector("[data-env]").addEventListener("change", event => {
      environment = event.target.value;
      if (graph.binding && BINDING_PRESETS[graph.binding]?.env !== "B1+B2" && BINDING_PRESETS[graph.binding]?.env !== environment) {
        graph.binding = "Main";
      }
      save();
      render();
    });
    root.querySelector("[data-binding]").addEventListener("change", event => {
      graph.binding = event.target.value;
      save();
      renderOutput();
    });
    root.querySelectorAll("[data-add]").forEach(button => button.addEventListener("click", () => addNode(button.dataset.add)));
    root.querySelectorAll("[data-load-example]").forEach(button => button.addEventListener("click", () => {
      loadInteractiveItem(EXAMPLES.find(item => item.id === button.dataset.loadExample));
    }));
    root.querySelectorAll("[data-load-case]").forEach(button => button.addEventListener("click", () => {
      loadInteractiveItem(PROGRESSIVE_TEST_CASES.find(item => item.id === button.dataset.loadCase));
    }));
    root.querySelectorAll("[data-bp-domain]").forEach(button => button.addEventListener("click", () => {
      activeTreeDomain = button.dataset.bpDomain;
      bpFilterGroup = "ALL";
      const tree = CONTEXT_ACTION_TREES[activeTreeDomain];
      if (tree?.defaultEvent) activeTreeTrigger = tree.defaultEvent;
      render();
    }));
    root.querySelector("[data-bp-trigger]")?.addEventListener("change", event => {
      activeTreeTrigger = event.target.value;
    });
    root.querySelector("[data-bp-filter-search]")?.addEventListener("input", event => {
      bpFilterSearch = event.target.value;
      const pos = event.target.selectionStart ?? bpFilterSearch.length;
      render();
      const nextInput = root.querySelector("[data-bp-filter-search]");
      if (nextInput) {
        nextInput.focus();
        try { nextInput.setSelectionRange(pos, pos); } catch { /* ignore */ }
      }
    });
    root.querySelector("[data-bp-filter-group]")?.addEventListener("change", event => {
      bpFilterGroup = event.target.value;
      render();
    });
    root.querySelector("[data-bp-filter-impact]")?.addEventListener("change", event => {
      bpFilterImpact = event.target.value;
      render();
    });
    root.querySelector("[data-bp-filter-state]")?.addEventListener("change", event => {
      bpFilterState = event.target.value;
      render();
    });
    root.querySelector("[data-bp-filter-clear]")?.addEventListener("click", () => {
      bpFilterSearch = "";
      bpFilterGroup = "ALL";
      bpFilterImpact = "all";
      bpFilterState = "all";
      render();
    });
    root.querySelectorAll("[data-bp-group-check]").forEach(btn => btn.addEventListener("click", () => {
      const grpName = btn.dataset.bpGroupCheck;
      const tree = CONTEXT_ACTION_TREES[activeTreeDomain];
      const currentOpts = activeTreeOptionsByDomain[activeTreeDomain] ||= defaultOptionsForContextTree(activeTreeDomain);
      for (const opt of tree?.options || []) {
        if ((opt.group || "Opciones del Dominio") === grpName && (opt.type === "checkbox" || opt.type === "boolean")) {
          currentOpts[opt.id] = "true";
        }
      }
      render();
      showMessage(`Marcadas las opciones del bloque "${grpName}".`);
    }));
    root.querySelectorAll("[data-bp-group-uncheck]").forEach(btn => btn.addEventListener("click", () => {
      const grpName = btn.dataset.bpGroupUncheck;
      const tree = CONTEXT_ACTION_TREES[activeTreeDomain];
      const currentOpts = activeTreeOptionsByDomain[activeTreeDomain] ||= defaultOptionsForContextTree(activeTreeDomain);
      for (const opt of tree?.options || []) {
        if ((opt.group || "Opciones del Dominio") === grpName && (opt.type === "checkbox" || opt.type === "boolean")) {
          currentOpts[opt.id] = "false";
        }
      }
      render();
      showMessage(`Desmarcadas las opciones del bloque "${grpName}".`);
    }));
    root.querySelectorAll("[data-bp-preset]").forEach(btn => btn.addEventListener("click", () => {
      const preset = BLUEPRINT_IDEA_PRESETS.find(item => item.id === btn.dataset.bpPreset);
      if (!preset) return;
      activeIdeaPresetId = preset.id;
      if (preset.triggerEvent) activeTreeTrigger = preset.triggerEvent;
      selectedMixDomains.clear();
      for (const domId of preset.domains) {
        selectedMixDomains.add(domId);
        activeTreeOptionsByDomain[domId] = {
          ...defaultOptionsForContextTree(domId),
          ...(preset.optionsByDomain?.[domId] || {})
        };
      }
      if (preset.domains[0]) activeTreeDomain = preset.domains[0];
      const built = buildMultiDomainGraphFromContextTrees(preset.domains, activeTreeOptionsByDomain, activeTreeTrigger);
      built.title = `Idea · ${preset.title}`;
      built.description = preset.description;
      loadInteractiveItem(built);
    }));
    root.querySelectorAll("[data-bp-mix-domain]").forEach(chk => chk.addEventListener("change", event => {
      const domId = event.currentTarget.dataset.bpMixDomain;
      if (event.currentTarget.checked) {
        selectedMixDomains.add(domId);
      } else if (selectedMixDomains.size > 1) {
        selectedMixDomains.delete(domId);
      } else {
        event.currentTarget.checked = true;
        showMessage("Mantén al menos 1 categoría activa en el mezclador.", "error");
        return;
      }
      render();
    }));
    root.querySelectorAll("[data-bp-apply-mix]").forEach(btn => btn.addEventListener("click", () => {
      const doms = [...selectedMixDomains];
      const built = buildMultiDomainGraphFromContextTrees(doms, activeTreeOptionsByDomain, activeTreeTrigger);
      loadInteractiveItem(built);
    }));
    root.querySelectorAll("[data-bp-opt]").forEach(inputEl => inputEl.addEventListener("change", event => {
      const optId = event.currentTarget.dataset.bpOpt;
      const currentOpts = activeTreeOptionsByDomain[activeTreeDomain] ||= defaultOptionsForContextTree(activeTreeDomain);
      if (event.currentTarget.type === "checkbox") {
        currentOpts[optId] = event.currentTarget.checked ? "true" : "false";
      } else {
        currentOpts[optId] = event.currentTarget.value;
      }
      render();
    }));
    root.querySelector("[data-bp-reset]")?.addEventListener("click", () => {
      activeTreeOptionsByDomain[activeTreeDomain] = defaultOptionsForContextTree(activeTreeDomain);
      render();
      showMessage(`Opciones por defecto restauradas para ${CONTEXT_ACTION_TREES[activeTreeDomain]?.title || activeTreeDomain}.`);
    });
    root.querySelector("[data-bp-apply]")?.addEventListener("click", () => {
      const built = buildGraphFromContextTree(
        activeTreeDomain,
        activeTreeOptionsByDomain[activeTreeDomain],
        activeTreeTrigger
      );
      if (!built) return;
      loadInteractiveItem(built);
    });
    root.querySelector("[data-bp-export-bundle]")?.addEventListener("click", () => {
      const built = buildGraphFromContextTree(
        activeTreeDomain,
        activeTreeOptionsByDomain[activeTreeDomain],
        activeTreeTrigger
      );
      if (!built) return;
      loadInteractiveItem(built);
      const bundle = compileB1B2Bundle(graph);
      if (bundle.errors.length || !bundle.b1Lua || !bundle.b2Lua || !bundle.manifest) {
        showMessage(`No se pudo exportar el árbol: ${bundle.errors.join(" ")}`, "error");
        return;
      }
      downloadFile("FlowBridgeClient.lua", bundle.b1Lua, "text/plain");
      downloadFile("FlowBridgeServer.lua", bundle.b2Lua, "text/plain");
      downloadFile("lua_manifest.json", bundle.manifest, "application/json");
      showMessage(`Árbol ${built.title} compilado y descargado (FlowBridgeClient.lua, FlowBridgeServer.lua, lua_manifest.json).`);
    });
    root.querySelector("[data-catalog-query]")?.addEventListener("input", event => {
      catalogQuery = event.target.value;
      renderCatalogRows();
    });
    root.querySelector("[data-catalog-env]")?.addEventListener("change", event => {
      catalogEnv = event.target.value;
      renderCatalogRows();
    });
    root.querySelector("[data-catalog-status]")?.addEventListener("change", event => {
      catalogStatus = event.target.value;
      renderCatalogRows();
    });
    root.querySelector("[data-catalog-kind]")?.addEventListener("change", event => {
      catalogKind = event.target.value;
      renderCatalogRows();
    });
    const restoreExample = root.querySelector("[data-restore-example]");
    if (restoreExample) restoreExample.addEventListener("click", () => {
      if (!previousGraph) return;
      graph = structuredClone(previousGraph.graph);
      environment = previousGraph.environment;
      previousGraph = null;
      try {
        localStorage.removeItem(backupStorageKey);
      } catch {
        showMessage("Grafo restaurado; no se pudo borrar la copia de seguridad local.");
      }
      selectedId = graph.nodes[0]?.id || null;
      connecting = null;
      activeNodes.clear();
      save();
      render();
      showMessage("Grafo anterior restaurado.");
    });
    root.querySelector("[data-initial]").addEventListener("change", event => {
      graph.initialState = event.target.value;
      save(`estado inicial ${graph.initialState}`);
      renderOutput();
    });
    root.querySelectorAll("[data-undo]").forEach(button => button.addEventListener("click", () => undoGraph()));
    root.querySelectorAll("[data-redo]").forEach(button => button.addEventListener("click", () => redoGraph()));
    root.querySelectorAll("[data-clear-graph]").forEach(button => button.addEventListener("click", () => clearGraph()));
    root.querySelector("[data-clear-edges]")?.addEventListener("click", () => clearEdges());
    root.querySelector("[data-reset-default]")?.addEventListener("click", () => resetDefaultGraph());
    root.querySelector("[data-delete-node]").addEventListener("click", () => deleteNodeById(selectedId));
    root.querySelector("[data-save-json]").addEventListener("click", () =>
      downloadFile("inzoi-lua-flow.json", JSON.stringify({ graph, environment }, null, 2), "application/json"));
    root.querySelector("[data-load-json]").addEventListener("click", () => root.querySelector("[data-json-file]").click());
    root.querySelector("[data-json-file]").addEventListener("change", async event => {
      try {
        const parsed = JSON.parse(await event.target.files[0].text());
        const candidate = parsed.graph || parsed;
        const errors = validateGraph(candidate);
        if (errors.length) throw new Error(errors.join(" "));
        graph = candidate;
        if (ENVIRONMENTS.has(parsed.environment)) environment = parsed.environment;
        selectedId = graph.nodes[0]?.id || null;
        save();
        render();
        showMessage("Grafo importado.");
      } catch (error) {
        showMessage(`No se pudo importar: ${error.message}`, "error");
      }
      event.target.value = "";
    });
    root.querySelector("[data-export=lua]").addEventListener("click", () => {
      const result = compileGraph(graph, environment);
      if (result.errors.length) return;
      downloadFile(result.scriptPath, result.lua, "text/plain");
      downloadFile("lua_manifest.json", result.manifest, "application/json");
      showMessage(`Archivos listos. Coloca el Lua en workspace/lua/${result.scriptPath}; valida con BlueLuaKit antes de probarlo.`);
    });
    root.querySelectorAll("[data-export=bundle]").forEach(btn => btn.addEventListener("click", () => {
      const bundle = compileB1B2Bundle(graph);
      if (bundle.errors.length || !bundle.b1Lua || !bundle.b2Lua || !bundle.manifest) {
        showMessage(`Exportación cancelada: ${bundle.errors.join(" ") || "faltan artefactos del bundle B1+B2."}`, "error");
        return;
      }
      downloadFile("FlowBridgeClient.lua", bundle.b1Lua, "text/plain");
      downloadFile("FlowBridgeServer.lua", bundle.b2Lua, "text/plain");
      downloadFile("lua_manifest.json", bundle.manifest, "application/json");
      showMessage("Paquete B1+B2 descargado: FlowBridgeClient.lua (B1/Zoi/), FlowBridgeServer.lua (B2/Zoi/) y lua_manifest.json.");
    }));
    function downloadUiModFiles() {
      const uiBundle = compileUiModBundle(graph, uiModConfig);
      downloadFile("uimod_manifest.json", uiBundle.manifestJson, "application/json");
      downloadFile("index.html", uiBundle.indexHtml, "text/html");
      downloadFile("styles.css", uiBundle.stylesCss, "text/css");
      downloadFile("window.js", uiBundle.windowJs, "text/javascript");
      downloadFile("app.js", uiBundle.appJs, "text/javascript");
      return uiBundle;
    }
    root.querySelectorAll("[data-export=uimod]").forEach(btn => btn.addEventListener("click", () => {
      downloadUiModFiles();
      showMessage("UIMod descargado (uimod_manifest.json, index.html, styles.css, window.js, app.js). Colócalos en ui/flow_control_panel/.");
    }));
    root.querySelectorAll("[data-export=full-mod]").forEach(btn => btn.addEventListener("click", () => {
      const bundle = compileB1B2Bundle(graph);
      if (bundle.errors.length || !bundle.b1Lua || !bundle.b2Lua || !bundle.manifest) {
        showMessage(`Exportación cancelada: ${bundle.errors.join(" ") || "faltan artefactos del bundle B1+B2."}`, "error");
        return;
      }
      downloadUiModFiles();
      downloadFile("FlowBridgeClient.lua", bundle.b1Lua, "text/plain");
      downloadFile("FlowBridgeServer.lua", bundle.b2Lua, "text/plain");
      downloadFile("lua_manifest.json", bundle.manifest, "application/json");
      showMessage("Mod completo descargado: 5 archivos UIMod (ui/flow_control_panel/) + 3 archivos Lua B1/B2 (workspace/lua/).");
    }));
    root.querySelector("[data-ui-theme]")?.addEventListener("change", event => {
      const th = UI_MOD_THEMES[event.target.value];
      if (!th) return;
      uiModConfig.themeId = th.id;
      uiModConfig.bgColor = th.bgColor;
      uiModConfig.accentColor = th.accentColor;
      uiModConfig.textColor = th.textColor;
      uiModConfig.opacity = th.opacity;
      render();
    });
    root.querySelectorAll("[data-ui-field]").forEach(el => el.addEventListener("change", event => {
      const field = event.currentTarget.dataset.uiField;
      uiModConfig[field] = event.currentTarget.value;
      if (field === "position") {
        uiModConfig.customLeftPct = null;
        uiModConfig.customTopPct = null;
      }
      render();
    }));
    root.querySelector("[data-ui-reset-pos]")?.addEventListener("click", () => {
      uiModConfig.customLeftPct = null;
      uiModConfig.customTopPct = null;
      render();
      showMessage("Posición de la ventana UIMod restaurada al ajuste predefinido.");
    });
    root.querySelector("[data-ui-sync-graph]")?.addEventListener("click", () => {
      uiModConfig.buttons = extractButtonsFromGraph(graph);
      uiPreviewStatusText = `Botones regenerados desde el grafo (${uiModConfig.buttons.length} acciones).`;
      render();
      showMessage("Botones de la ventana UIMod sincronizados con los nodos del grafo actual.");
    });
    root.querySelector("[data-ui-add-btn]")?.addEventListener("click", () => {
      uiModConfig.buttons.push({
        id: `btn-custom-${Date.now()}`,
        nodeId: "",
        enabled: true,
        icon: "✨",
        label: `Opción personalizada ${uiModConfig.buttons.length + 1}`,
        kind: "cli",
        command: "emotion.set",
        argsText: "emotion=Happy",
        env: "B1"
      });
      render();
    });
    root.querySelectorAll("[data-ui-btn-toggle]").forEach(el => el.addEventListener("change", event => {
      const idx = Number(event.currentTarget.dataset.uiBtnToggle);
      if (uiModConfig.buttons[idx]) uiModConfig.buttons[idx].enabled = event.currentTarget.checked;
      render();
    }));
    root.querySelectorAll("[data-ui-btn-icon]").forEach(el => el.addEventListener("change", event => {
      const idx = Number(event.currentTarget.dataset.uiBtnIcon);
      if (uiModConfig.buttons[idx]) uiModConfig.buttons[idx].icon = event.currentTarget.value;
      render();
    }));
    root.querySelectorAll("[data-ui-btn-label]").forEach(el => el.addEventListener("change", event => {
      const idx = Number(event.currentTarget.dataset.uiBtnLabel);
      if (uiModConfig.buttons[idx]) uiModConfig.buttons[idx].label = event.currentTarget.value;
      render();
    }));
    root.querySelectorAll("[data-ui-btn-delete]").forEach(el => el.addEventListener("click", event => {
      const idx = Number(event.currentTarget.dataset.uiBtnDelete);
      if (uiModConfig.buttons.length <= 1) {
        showMessage("La ventana debe conservar al menos 1 botón interactivo.", "error");
        return;
      }
      uiModConfig.buttons.splice(idx, 1);
      render();
    }));
    root.querySelector("[data-ui-fire-trigger]")?.addEventListener("click", () => {
      uiPreviewVisible = !uiPreviewVisible;
      const trigStr = `${uiModConfig.triggerModifier && uiModConfig.triggerModifier !== "NONE" ? `${uiModConfig.triggerModifier}+` : ""}${uiModConfig.triggerKey}`;
      uiConsoleLines.push(`[trigger] inzoi.trigger.onActivated({ type: "keybind", key: "${trigStr}" }) -> window ${uiPreviewVisible ? "VISIBLE" : "HIDDEN"}`);
      uiPreviewStatusText = uiPreviewVisible ? `Ventana abierta con ${trigStr}.` : `Ventana oculta con ${trigStr}.`;
      render();
    });
    root.querySelector("[data-ui-close-preview]")?.addEventListener("click", () => {
      uiPreviewVisible = false;
      uiConsoleLines.push("[view] inzoi.view.hide() + inzoi.view.hover(false)");
      render();
    });
    root.querySelector("[data-ui-clear-console]")?.addEventListener("click", () => {
      uiConsoleLines = ["[info] Console cleared."];
      render();
    });
    const liveWin = root.querySelector("[data-ui-live-window]");
    const liveScreen = root.querySelector("[data-ui-screen]");
    if (liveWin && liveScreen) {
      liveWin.addEventListener("mouseenter", () => {
        uiPreviewHover = true;
        const ind = root.querySelector("[data-ui-hover-indicator]");
        if (ind) ind.textContent = "hover: true (captura clics)";
      });
      liveWin.addEventListener("mouseleave", () => {
        uiPreviewHover = false;
        const ind = root.querySelector("[data-ui-hover-indicator]");
        if (ind) ind.textContent = "hover: false (pasa al juego)";
      });

      const dragHandle = liveWin.querySelector("[data-ui-drag-handle]");
      if (dragHandle) {
        dragHandle.addEventListener("pointerdown", event => {
          if (event.target.closest("button")) return;
          event.preventDefault();
          const screenRect = liveScreen.getBoundingClientRect();
          const winRect = liveWin.getBoundingClientRect();
          const startX = event.clientX;
          const startY = event.clientY;
          const startLeft = winRect.left - screenRect.left;
          const startTop = winRect.top - screenRect.top;
          liveWin.classList.remove("pos-top-right", "pos-top-left", "pos-center", "pos-bottom-right");
          liveWin.classList.add("pos-custom", "is-dragging");
          liveWin.style.right = "auto";
          liveWin.style.bottom = "auto";
          liveWin.style.transform = "none";

          const onMove = moveEvt => {
            const maxLeft = Math.max(8, screenRect.width - winRect.width - 8);
            const maxTop = Math.max(8, screenRect.height - winRect.height - 8);
            const nextLeft = Math.max(8, Math.min(maxLeft, startLeft + (moveEvt.clientX - startX)));
            const nextTop = Math.max(8, Math.min(maxTop, startTop + (moveEvt.clientY - startY)));
            const leftPct = (nextLeft / screenRect.width) * 100;
            const topPct = (nextTop / screenRect.height) * 100;
            uiModConfig.customLeftPct = leftPct;
            uiModConfig.customTopPct = topPct;
            liveWin.style.left = `${leftPct.toFixed(2)}%`;
            liveWin.style.top = `${topPct.toFixed(2)}%`;
            const posInd = root.querySelector("[data-ui-pos-indicator]");
            if (posInd) {
              posInd.textContent = `pos: X:${Math.round((leftPct / 100) * 1920)}px Y:${Math.round((topPct / 100) * 1080)}px`;
            }
          };
          const onUp = () => {
            liveWin.classList.remove("is-dragging");
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            render();
          };
          window.addEventListener("pointermove", onMove);
          window.addEventListener("pointerup", onUp);
        });
      }

      const resizeHandle = liveWin.querySelector("[data-ui-resize-handle]");
      if (resizeHandle) {
        resizeHandle.addEventListener("pointerdown", event => {
          event.preventDefault();
          event.stopPropagation();
          const startX = event.clientX;
          const startY = event.clientY;
          const startW = Number(uiModConfig.width) || 420;
          const startH = Number(uiModConfig.height) || 360;
          const onMove = moveEvt => {
            const nextW = Math.max(300, Math.min(640, Math.round((startW + (moveEvt.clientX - startX) * 1.35) / 10) * 10));
            const nextH = Math.max(220, Math.min(540, Math.round((startH + (moveEvt.clientY - startY) * 1.5) / 10) * 10));
            uiModConfig.width = nextW;
            uiModConfig.height = nextH;
            liveWin.style.width = `${Math.max(270, Math.min(480, Math.round(nextW * 0.74)))}px`;
            liveWin.style.minHeight = `${Math.max(190, Math.min(430, Math.round(nextH * 0.62)))}px`;
            const wVal = root.querySelector('[data-ui-val="width"]');
            const hVal = root.querySelector('[data-ui-val="height"]');
            if (wVal) wVal.textContent = `${nextW}px`;
            if (hVal) hVal.textContent = `${nextH}px`;
          };
          const onUp = () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            render();
          };
          window.addEventListener("pointermove", onMove);
          window.addEventListener("pointerup", onUp);
        });
      }
    }
    root.querySelectorAll("[data-ui-test-btn]").forEach(btnEl => btnEl.addEventListener("click", () => {
      const btnId = btnEl.dataset.uiTestBtn;
      const btnObj = uiModConfig.buttons.find(b => b.id === btnId);
      if (!btnObj) return;
      if (btnObj.kind === "bridge") {
        uiConsoleLines.push(`[uimod->B1->B2] inzoi.cli.execute("lua.send_message", { message_type: "${B1B2_CONTRACT.reqChannel}", op: "${btnObj.command}", args: "${btnObj.argsText || ""}" })`);
      } else {
        uiConsoleLines.push(`[uimod->CLI] inzoi.cli.execute("${btnObj.command}", "${btnObj.argsText || ""}")`);
      }
      uiPreviewStatusText = `Ejecutado: ${btnObj.label} (${btnObj.command} ${btnObj.argsText || ""})`;
      if (btnObj.nodeId) {
        activeNodes = new Set([btnObj.nodeId]);
        selectedId = btnObj.nodeId;
      }
      render();
      showMessage(`Probado desde la ventana UIMod: ${btnObj.label} → ${btnObj.command}.`);
    }));
    root.querySelector("[data-simulate]").addEventListener("click", () => {
      try {
        const payload = JSON.parse(root.querySelector("[data-payload]").value || "{}");
        const eventName = root.querySelector("[data-sim-event]").value;
        const result = simulateEvent(graph, eventName, payload, graph.initialState);
        activeNodes = new Set(result.active);
        root.querySelector("[data-sim-output]").textContent = `${result.log.join("\n")}\nEstado final: ${result.state}`;
        renderGraph();
      } catch (error) {
        showMessage(`Payload JSON inválido: ${error.message}`, "error");
      }
    });
    root.querySelector("[data-show-trace]").addEventListener("click", () => {
      activeNodes = new Set(parseRuntimeTrace(root.querySelector("[data-runtime-log]").value));
      renderGraph();
      showMessage(`${activeNodes.size} nodos encontrados en la traza.`);
    });
    renderProperties();
    renderGraph();
    renderCatalogRows();
    renderOutput();
    const eventSelect = root.querySelector("[data-sim-event]");
    eventSelect.innerHTML = graph.nodes.filter(node => node.type === "event")
      .map(node => `<option value="${escapeHtml(node.data.event)}">${escapeHtml(node.data.event)}</option>`).join("");
  }

  function downloadFile(name, content, type) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  }

  root.addEventListener("pointerdown", event => {
    if (event.button !== undefined && event.button !== 0) return;
    const removeBtn = event.target.closest("[data-remove-node]");
    if (removeBtn) {
      event.preventDefault();
      event.stopPropagation();
      deleteNodeById(removeBtn.dataset.removeNode);
      return;
    }
    const fromPort = event.target.closest("[data-connect-from]");
    if (fromPort) {
      event.preventDefault();
      event.stopPropagation();
      const [from, kind, port] = fromPort.dataset.connectFrom.split("|");
      const sourceNode = graph.nodes.find(item => item.id === from);
      const startPt = sourceNode ? edgePoint(sourceNode, port, false, kind) : { x: 0, y: 0 };
      connecting = {
        from,
        kind,
        port,
        cursorX: startPt.x,
        cursorY: startPt.y,
        startClientX: event.clientX,
        startClientY: event.clientY,
        dragged: false
      };
      updatePortHighlights();
      refreshEdgesSvg();
      showMessage(`Cable activo desde ${from} (${kind === "data" ? port : `exec:${port}`}) → suelta o haz clic en un puerto de entrada iluminado.`);
      return;
    }

    const toPort = event.target.closest("[data-connect-to]");
    if (toPort) {
      event.preventDefault();
      event.stopPropagation();
      if (connecting) {
        tryConnectTo(toPort.dataset.connectTo);
      } else {
        const nodeId = toPort.dataset.connectTo.split("|")[0];
        selectedId = nodeId;
        root.querySelectorAll("[data-node]").forEach(el => el.classList.toggle("is-selected", el.dataset.node === selectedId));
        renderProperties();
        showMessage("Puerto de entrada: arrastra antes desde un puerto de salida (derecha del nodo) o haz clic derecho aquí para desconectar.");
      }
      return;
    }

    const card = event.target.closest("[data-node]");
    if (card) {
      event.preventDefault();
      const node = graph.nodes.find(item => item.id === card.dataset.node);
      if (!node) return;
      if (selectedId !== node.id) {
        selectedId = node.id;
        root.querySelectorAll("[data-node]").forEach(el => el.classList.toggle("is-selected", el.dataset.node === selectedId));
        renderProperties();
      }
      const stage = root.querySelector(".flow-stage");
      const zoom = Number.parseFloat(stage?.style.zoom) || 1;
      drag = {
        id: node.id,
        zoom,
        startX: node.x,
        startY: node.y,
        clientX: event.clientX,
        clientY: event.clientY
      };
      showMessage(`Moviendo nodo ${node.id} (${node.type}).`);
      return;
    }

    if (connecting && event.target.closest(".flow-viewport")) {
      connecting = null;
      updatePortHighlights();
      refreshEdgesSvg();
      showMessage("Conexión cancelada.");
    }
  });

  window.addEventListener("pointermove", event => {
    if (drag) {
      const node = graph.nodes.find(item => item.id === drag.id);
      if (!node) return;
      node.x = Math.max(10, Math.round(drag.startX + (event.clientX - drag.clientX) / drag.zoom));
      node.y = Math.max(10, Math.round(drag.startY + (event.clientY - drag.clientY) / drag.zoom));
      const card = [...root.querySelectorAll("[data-node]")].find(item => item.dataset.node === node.id);
      if (card) {
        card.style.left = `${node.x}px`;
        card.style.top = `${node.y}px`;
      }
      refreshEdgesSvg();
      return;
    }
    if (connecting) {
      const stage = root.querySelector("[data-stage]");
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const scaleX = rect.width / (stage.offsetWidth || 1);
      const scaleY = rect.height / (stage.offsetHeight || 1);
      connecting.cursorX = (event.clientX - rect.left) / (scaleX || 1);
      connecting.cursorY = (event.clientY - rect.top) / (scaleY || 1);
      if (Math.hypot(event.clientX - connecting.startClientX, event.clientY - connecting.startClientY) > 6) {
        connecting.dragged = true;
      }
      refreshEdgesSvg();
    }
  });

  window.addEventListener("pointerup", event => {
    if (drag) {
      const node = graph.nodes.find(item => item.id === drag.id);
      const moved = Boolean(node && (node.x !== drag.startX || node.y !== drag.startY));
      const movedId = drag.id;
      drag = null;
      if (moved) {
        save(`mover ${movedId}`);
        render();
      }
      return;
    }
    if (connecting) {
      const targetEl = document.elementFromPoint(event.clientX, event.clientY);
      const toPort = targetEl?.closest?.("[data-connect-to]");
      if (toPort) {
        tryConnectTo(toPort.dataset.connectTo);
        return;
      }
      if (connecting.dragged) {
        connecting = null;
        updatePortHighlights();
        refreshEdgesSvg();
        showMessage("Cable soltado fuera de un puerto de entrada.");
      }
    }
  });

  root.addEventListener("click", async event => {
    if (event.target.closest("[data-fit-graph]")) {
      fitGraph();
      showMessage("Grafo ajustado a la ventana.");
      return;
    }
    if (!event.target.closest("[data-fullscreen]")) return;
    const editor = root.querySelector(".flow-editor");
    try {
      if (document.fullscreenElement === editor) await document.exitFullscreen();
      else await editor.requestFullscreen();
      fitGraph();
      updateFullscreenButton();
    } catch (error) {
      showMessage(`No se pudo cambiar a pantalla completa: ${error.message}`);
    }
  });

  document.addEventListener("fullscreenchange", () => {
    fitGraph();
    updateFullscreenButton();
  });

  window.addEventListener("keydown", event => {
    const tag = event.target?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || event.target?.isContentEditable) return;
    if ((event.ctrlKey || event.metaKey) && !event.shiftKey && event.key.toLowerCase() === "z") {
      event.preventDefault();
      undoGraph();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && (event.key.toLowerCase() === "y" || (event.shiftKey && event.key.toLowerCase() === "z"))) {
      event.preventDefault();
      redoGraph();
      return;
    }
    if ((event.key === "Delete" || event.key === "Backspace") && selectedId) {
      event.preventDefault();
      deleteNodeById(selectedId);
    }
  });

  render();
})();
