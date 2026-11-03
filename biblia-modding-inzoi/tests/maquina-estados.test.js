const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(
  path.join(__dirname, "..", "herramientas", "maquina-estados.js"),
  "utf8"
);
const window = {};
vm.runInNewContext(source, {
  window,
  require,
  document: { getElementById: () => null }
});

const flow = window.InzoiLuaFlow;

test("compila el grafo inicial como módulo Main y distingue B1/B2", () => {
  const b2Result = flow.compileGraph(flow.DEFAULT_GRAPH, "B2");
  assert.equal(flow.DEFAULT_GRAPH.nodes.find(node => node.id === "cond-1").data.value, "Self_GoHome");
  assert.equal(b2Result.errors.length, 0);
  assert.match(b2Result.lua, /inzoi\.event\.on/);
  assert.match(b2Result.lua, /inzoi\.event\.off/);
  assert.match(b2Result.lua, /condition=/);
  assert.match(b2Result.lua, /M\.currentState = "park"/);
  assert.match(b2Result.lua, /cli_error=/);
  assert.match(b2Result.lua, /local lua_flow_command_1 = "interaction\.clear_queue"/);
  assert.match(b2Result.lua, /local lua_flow_command_2 = "movement\.teleport"/);
  assert.match(b2Result.lua, /lua_flow_cli_token\("Gangnam_Public_CentralPark"\)/);
  assert.match(b2Result.lua, /inzoi\.cli\.execute\(lua_flow_command_1\)/);
  assert.match(b2Result.lua, /lua_flow_trace\("act-2", "cli_error=" \.\. tostring\(lua_flow_message_2\)\)\s+return/);
  assert.match(b2Result.lua, /"subscribe_error"/);
  assert.match(b2Result.lua, /if listener\.handle then pcall\(inzoi\.event\.off/);
  assert.equal(b2Result.scriptPath, "B2/Main.lua");
  assert.deepEqual(JSON.parse(b2Result.manifest), { bindings: {} });

  assert.ok(flow.compileGraph(flow.DEFAULT_GRAPH, "B1").errors.some(message => message.includes("no en B1")));
  const b1Graph = {
    version: 2,
    initialState: "idle",
    nodes: [
      { id: "state-idle", type: "state", x: 10, y: 10, data: { name: "idle" } },
      { id: "evt-1", type: "event", x: 10, y: 100, data: { event: "interaction.started", whenState: "" } },
      { id: "end-1", type: "end", x: 300, y: 100, data: {} }
    ],
    edges: [{ from: "evt-1", port: "next", to: "end-1" }]
  };
  const b1Result = flow.compileGraph(b1Graph, "B1");
  assert.equal(b1Result.errors.length, 0);
  assert.match(b1Result.lua, /function M\.on_begin\(\)/);
  assert.equal(b1Result.scriptPath, "B1/Main.lua");
  assert.deepEqual(JSON.parse(b1Result.manifest), { bindings: {} });
});

test("valida conexiones, operadores numéricos e IDs antes de importar", () => {
  const missingEdge = structuredClone(flow.DEFAULT_GRAPH);
  missingEdge.edges = missingEdge.edges.filter(edge => edge.port !== "false");
  assert.ok(flow.validateGraph(missingEdge).some(message => message.includes("salida «false»")));

  const missingState = structuredClone(flow.DEFAULT_GRAPH);
  missingState.initialState = "missing";
  assert.ok(flow.validateGraph(missingState).some(message => message.includes("estado inicial")));

  const emptyNumber = structuredClone(flow.DEFAULT_GRAPH);
  emptyNumber.nodes.find(node => node.type === "condition").data.operator = ">";
  emptyNumber.nodes.find(node => node.type === "condition").data.value = "";
  assert.ok(flow.validateGraph(emptyNumber).some(message => message.includes("comparación numérica")));

  const unsafeId = structuredClone(flow.DEFAULT_GRAPH);
  unsafeId.nodes[0].id = 'evt"><img>';
  assert.ok(flow.validateGraph(unsafeId).some(message => message.includes("IDs duplicados")));

  const malformed = structuredClone(flow.DEFAULT_GRAPH);
  malformed.nodes.push(null);
  malformed.edges.push(null);
  assert.ok(flow.validateGraph(malformed).length > 0);
});

test("valida comandos B2Authority y los limita al destino B2", () => {
  const graph = structuredClone(flow.DEFAULT_GRAPH);
  const action = graph.nodes.find(node => node.id === "act-1");
  action.data.command = "life_and_death.stop_aging";
  action.data.params = { enable: "true" };
  action.data.scope = "B2";
  assert.equal(flow.validateGraph(graph).length, 0);
  const result = flow.compileGraph(graph, "B2");
  assert.equal(result.errors.length, 0);
  assert.match(result.lua, /life_and_death\.stop_aging/);
  assert.match(result.lua, /enable=.*lua_flow_cli_token\("true"\)/);

  action.data.params.enable = "";
  assert.ok(flow.validateGraph(graph).some(message => message.includes("parámetro obligatorio «enable»")));
  assert.ok(flow.compileGraph(graph, "B1").errors.some(message => message.includes("no en B1")));
});

test("compila Cheat Menu con puente UI on_lua_message, needs.set_full y binding nativo Zoi", () => {
  const cheatGraph = {
    version: 2,
    initialState: "ready",
    binding: "Zoi:*",
    nodes: [
      { id: "state-ready", type: "state", x: 10, y: 10, data: { name: "ready" } },
      { id: "evt-ui", type: "event", x: 10, y: 100, data: { event: "ui.cheat_message", whenState: "" } },
      { id: "cond-sleep", type: "condition", x: 280, y: 100, data: { source: "payload", field: "state_tag", operator: "==", value: "Sleeping" } },
      {
        id: "act-refill",
        type: "action",
        x: 560,
        y: 80,
        data: { command: "needs.set_full", params: { category: "Energy" }, scope: "B2" }
      },
      { id: "end-ok", type: "end", x: 840, y: 80, data: {} },
      { id: "end-skip", type: "end", x: 560, y: 220, data: {} }
    ],
    edges: [
      { kind: "exec", from: "evt-ui", port: "next", to: "cond-sleep" },
      { kind: "data", from: "evt-ui", port: "payload:state_tag", to: "cond-sleep", input: "value" },
      { kind: "exec", from: "cond-sleep", port: "true", to: "act-refill" },
      { kind: "exec", from: "cond-sleep", port: "false", to: "end-skip" },
      { kind: "data", from: "evt-ui", port: "payload:entity_id", to: "act-refill", input: "param:entity_id" },
      { kind: "exec", from: "act-refill", port: "next", to: "end-ok" }
    ]
  };
  const compiled = flow.compileGraph(cheatGraph, "B2");
  assert.equal(compiled.errors.length, 0);
  assert.equal(compiled.scriptPath, "B2/Zoi/LuaFlow.lua");
  assert.deepEqual(JSON.parse(compiled.manifest), {
    bindings: { B2: { Zoi: { "*": ["Zoi.LuaFlow"] } } }
  });
  assert.match(compiled.lua, /function M\.on_begin\(self, target\)/);
  assert.match(compiled.lua, /function M\.trigger_ui_message\(payload\)/);
  assert.match(compiled.lua, /inzoi\.message\.send_to_sim\("CheatMenu\.Trigger"/);
  assert.match(compiled.lua, /function M\.on_lua_message\(message_id, payload\)/);
  assert.match(compiled.lua, /local lua_flow_command_1 = "needs\.set_full"/);

  const sim = flow.simulateEvent(cheatGraph, "ui.cheat_message", { entity_id: 7, state_tag: "Sleeping" }, "ready");
  assert.ok(sim.active.includes("act-refill"));
  assert.ok(sim.log.some(line => line.includes("needs.set_full category=Energy entity_id=7")));

  const b1CameraGraph = {
    version: 2,
    initialState: "idle",
    nodes: [
      { id: "state-idle", type: "state", x: 10, y: 10, data: { name: "idle" } },
      { id: "evt-1", type: "event", x: 10, y: 100, data: { event: "interaction.started", whenState: "" } },
      { id: "act-fov", type: "action", x: 300, y: 100, data: { command: "camera.set_fov", params: { value: "95" }, scope: "B1" } },
      { id: "end-1", type: "end", x: 580, y: 100, data: {} }
    ],
    edges: [
      { kind: "exec", from: "evt-1", port: "next", to: "act-fov" },
      { kind: "exec", from: "act-fov", port: "next", to: "end-1" }
    ]
  };
  const b1Compiled = flow.compileGraph(b1CameraGraph, "B1");
  assert.equal(b1Compiled.errors.length, 0);
  assert.match(b1Compiled.lua, /camera\.set_fov/);
});

test("simula ramas sin ejecutar comandos CLI", () => {
  const result = flow.simulateEvent(
    flow.DEFAULT_GRAPH,
    "interaction.started",
    { entity_id: 42, interaction_bag_id: "Self_GoHome" },
    "idle"
  );
  assert.equal(result.state, "park");
  assert.ok(result.active.includes("act-1"));
  assert.ok(result.active.includes("act-2"));
  assert.ok(result.log.some(message => message.includes("simulación, no ejecutado")));
  assert.ok(result.log.some(message => message.includes("entity_id=42")));

  const falseBranch = flow.simulateEvent(
    flow.DEFAULT_GRAPH,
    "interaction.started",
    { entity_id: 42, interaction_bag_id: "other" },
    "idle"
  );
  assert.equal(falseBranch.state, "idle");
  assert.ok(falseBranch.active.includes("end-1"));

  const repeatedEvent = structuredClone(flow.DEFAULT_GRAPH);
  repeatedEvent.nodes.push({
    id: "evt-2",
    type: "event",
    x: 1200,
    y: 300,
    data: { event: "interaction.started", whenState: "park", ownerField: "entity_id" }
  });
  repeatedEvent.edges.push({ from: "evt-2", port: "next", to: "end-1" });
  const repeatedResult = flow.simulateEvent(
    repeatedEvent,
    "interaction.started",
    { entity_id: 42, interaction_bag_id: "Self_GoHome" },
    "idle"
  );
  assert.ok(repeatedResult.active.includes("evt-2"));
  assert.ok(repeatedResult.log.some(message => message.includes("end-1: fin")));

  const missingIdentity = flow.simulateEvent(
    flow.DEFAULT_GRAPH,
    "interaction.started",
    { interaction_bag_id: "Self_GoHome" },
    "idle"
  );
  assert.equal(missingIdentity.state, "idle");
  assert.ok(missingIdentity.log.some(message => message.includes("falta el campo de identidad")));
});

test("extrae IDs únicos de trazas Lua", () => {
  assert.deepEqual(
    Array.from(flow.parseRuntimeTrace("[LuaFlow][evt-1] event\n[LuaFlow][act-1] cli\n[LuaFlow][evt-1] event")),
    ["evt-1", "act-1"]
  );
});

test("expone cuatro ejemplos guiados, válidos y simulables", () => {
  assert.equal(flow.EXAMPLES.length, 4);
  for (const example of flow.EXAMPLES) {
    assert.ok(example.steps.length >= 3);
    assert.equal(flow.compileGraph(example.graph, example.environment).errors.length, 0, example.id);
  }

  const branching = flow.EXAMPLES.find(example => example.id === "filtro-evento");
  const trueBranch = flow.simulateEvent(
    branching.graph,
    "interaction.started",
    { entity_id: 42, interaction_bag_id: "Self_GoHome" },
    "idle"
  );
  const falseBranch = flow.simulateEvent(
    branching.graph,
    "interaction.started",
    { entity_id: 42, interaction_bag_id: "another" },
    "idle"
  );
  assert.ok(trueBranch.active.includes("act-1"));
  assert.ok(falseBranch.active.includes("end-1"));

  const stateBranch = flow.EXAMPLES.find(example => example.id === "estado-guardia");
  assert.equal(flow.simulateEvent(stateBranch.graph, "interaction.started", { entity_id: 42 }, "idle").state, "park");
  const unchanged = flow.simulateEvent(stateBranch.graph, "interaction.started", { entity_id: 42 }, "park");
  assert.equal(unchanged.state, "park");
  assert.ok(unchanged.active.includes("end-1"));
});

test("valida el contrato B1B2_CONTRACT (encodePacket, decodePacket y executeServerOperation)", () => {
  const c = flow.B1B2_CONTRACT;
  assert.equal(c.reqChannel, "inzoi_flow.rpc.req");
  assert.equal(c.resChannel, "inzoi_flow.rpc.res");
  const pkt = c.encodePacket({ req_id: "1", op: "verify_sim_authority", entity_id: "10" });
  const decoded = c.decodePacket(pkt);
  assert.equal(decoded.req_id, "1");
  assert.equal(decoded.op, "verify_sim_authority");
  assert.equal(decoded.entity_id, "10");

  const okRes = c.decodePacket(c.executeServerOperation(pkt, { entity_id: 10 }));
  assert.equal(okRes.ok, "true");
  assert.equal(okRes.status, "EXEC_OK");
  assert.equal(okRes.result, "weather.list:ack_entity_10");

  const errPkt = c.encodePacket({ req_id: "2", op: "unsupported_sim_op" });
  const errRes = c.decodePacket(c.executeServerOperation(errPkt, { entity_id: 10 }));
  assert.equal(errRes.ok, "false");
  assert.equal(errRes.status, "ERR_UNSUPPORTED_OP");
  assert.equal(errRes.error, "ERR_UNSUPPORTED_OP");
});

test("OPERATION_CATALOG aplica el modelo forense de 13 campos, reclasifica las 7 capacidades cuestionadas y representa operaciones compuestas", () => {
  assert.equal(flow.OPERATION_CATALOG.length, 33);
  const validStatuses = new Set(Object.values(flow.VERIFICATION_STATUS));
  const validKinds = new Set(Object.values(flow.OPERATION_KIND));

  for (const op of flow.OPERATION_CATALOG) {
    assert.ok(validStatuses.has(op.status), `Estado inválido en ${op.id}: ${op.status}`);
    assert.ok(validKinds.has(op.operationKind), `operationKind inválido en ${op.id}: ${op.operationKind}`);
    assert.equal(typeof op.id, "string");
    assert.equal(typeof op.category, "string");
    assert.equal(typeof op.name, "string");
    assert.ok(["B1", "B2", "B1->B2", "B2->B1"].includes(op.context), `Contexto inválido en ${op.id}: ${op.context}`);
    assert.ok(Array.isArray(op.parameters), `parameters debe ser array en ${op.id}`);
    assert.equal(typeof op.returns, "string");
    assert.equal(typeof op.requires_entity_id, "boolean");
    assert.equal(typeof op.requires_tick, "boolean");
    assert.equal(typeof op.test_id, "string");
    assert.equal(typeof op.evidence, "string");

    // Validación de los 13 campos obligatorios del modelo unificado de evidencias
    assert.equal(typeof op.runtimeObserved, "boolean", `runtimeObserved inválido en ${op.id}`);
    assert.equal(typeof op.requestSent, "boolean", `requestSent inválido en ${op.id}`);
    assert.equal(typeof op.requestReceived, "boolean", `requestReceived inválido en ${op.id}`);
    assert.equal(typeof op.executionConfirmed, "boolean", `executionConfirmed inválido en ${op.id}`);
    assert.equal(typeof op.ackReceived, "boolean", `ackReceived inválido en ${op.id}`);
    assert.equal(typeof op.readbackConfirmed, "boolean", `readbackConfirmed inválido en ${op.id}`);
    assert.ok(op.stateMutated === true || op.stateMutated === false || op.stateMutated === null, `stateMutated inválido en ${op.id}`);
    assert.equal(typeof op.replication, "string", `replication inválido en ${op.id}`);
    assert.ok(op.replication.length > 0, `replication vacío en ${op.id}`);
    assert.equal(typeof op.asyncBehavior, "string", `asyncBehavior inválido en ${op.id}`);
    assert.ok(op.asyncBehavior.length > 0, `asyncBehavior vacío en ${op.id}`);
    assert.equal(typeof op.persistence, "string", `persistence inválido en ${op.id}`);
    assert.ok(op.persistence.length > 0, `persistence vacío en ${op.id}`);
    assert.ok(Array.isArray(op.evidenceRefs) && op.evidenceRefs.length >= 1, `evidenceRefs debe ser array no vacío en ${op.id}`);
    assert.equal(typeof op.limitations, "string", `limitations inválido en ${op.id}`);
    assert.ok(op.evidenceModel && typeof op.evidenceModel === "object", `evidenceModel ausente en ${op.id}`);

    // Regla forense 1: toda operación VERIFICADA exige readbackConfirmed === true y runtimeObserved === true
    if (op.status === flow.VERIFICATION_STATUS.VERIFIED) {
      assert.equal(op.verified_in_runtime, true, `${op.id} VERIFICADA debe tener verified_in_runtime=true`);
      assert.equal(op.runtimeObserved, true, `${op.id} VERIFICADA debe tener runtimeObserved=true`);
      assert.equal(op.readbackConfirmed, true, `${op.id} VERIFICADA debe tener readbackConfirmed=true`);
    } else {
      assert.equal(op.verified_in_runtime, false, `${op.id} no-VERIFICADA debe tener verified_in_runtime=false`);
    }

    // Regla forense 2: ninguna operación ACK_ONLY o sin readback puede afirmar stateMutated: true
    if (!op.readbackConfirmed || op.operationKind === flow.OPERATION_KIND.ACK_ONLY) {
      assert.notEqual(op.stateMutated, true, `${op.id} sin readback no puede declarar stateMutated=true`);
    }
  }

  // Regla forense 3: ninguna de las 7 capacidades cuestionadas sigue marcada como VERIFICADA
  const expectedQuestioned = {
    "weather.list": "DOCUMENTADA_NOT_EXECUTED",
    "aging.stop_aging": "ACK_ONLY_READBACK_UNCHANGED",
    "aging.immortal": "ACK_ONLY",
    "needs.freeze": "ACK_ONLY",
    "action.interaction.clear_queue": "PARTIAL_ACK_ONLY",
    "motion.stop": "ASYNC_NOT_CONFIRMED",
    "autonomy.set_enable": "READBACK_UNCHANGED"
  };
  for (const [capId, expectedStatus] of Object.entries(expectedQuestioned)) {
    const entry = flow.getCatalogOperationById(capId);
    assert.ok(entry, `Capacidad cuestionada ${capId} debe existir en catálogo o alias`);
    assert.NotEqual?.(entry.status, flow.VERIFICATION_STATUS.VERIFIED);
    assert.notEqual(entry.status, flow.VERIFICATION_STATUS.VERIFIED, `${capId} NO debe estar marcada como VERIFICADA`);
    assert.equal(entry.status, expectedStatus, `Estado forense incorrecto para ${capId}`);
    assert.equal(entry.verified_in_runtime, false, `${capId} debe tener verified_in_runtime=false`);
  }

  const verifiedOps = flow.searchCatalogOperations({ status: "VERIFICADA" });
  const questionedOps = flow.searchCatalogOperations({ status: "QUESTIONED" });
  assert.equal(verifiedOps.length, 26);
  assert.equal(questionedOps.length, 7);

  // Operaciones compuestas multi-paso verificadas
  const compoundOps = flow.searchCatalogOperations({ kind: "COMPOUND" });
  assert.ok(compoundOps.some(op => op.id === "weather.control" && op.compoundSteps.length >= 3));
  assert.ok(compoundOps.some(op => op.id === "aging.set_growth_step" && op.compoundSteps.length >= 3));
  assert.ok(compoundOps.some(op => op.id === "movement.cpp_set_location_simul" && op.compoundSteps.length >= 3));
  assert.ok(compoundOps.some(op => op.id === "vehicle.attach_flying_prop" && op.compoundSteps.length >= 3));

  const b1Verified = flow.searchCatalogOperations({ env: "B1", status: "VERIFICADA" });
  assert.ok(b1Verified.some(op => op.id === "bridge.verify_sim_authority"));
  assert.ok(b1Verified.some(op => op.id === "action.toast.show"));
  assert.ok(b1Verified.some(op => op.id === "prop.attach_and_transform"));

  const b2Verified = flow.searchCatalogOperations({ env: "B2", status: "VERIFICADA" });
  assert.ok(b2Verified.some(op => op.id === "action.needs.set_full"));
  assert.ok(b2Verified.some(op => op.id === "weather.control"));
  assert.ok(b2Verified.some(op => op.id === "movement.cpp_set_location_simul"));
});

test("valida, simula y compila los 4 casos de prueba progresivos B1 ↔ B2", () => {
  assert.equal(flow.PROGRESSIVE_TEST_CASES.length, 4);
  for (const testCase of flow.PROGRESSIVE_TEST_CASES) {
    assert.equal(flow.validateGraph(testCase.graph).length, 0, `validateGraph falló en ${testCase.id}`);
    const bundle = flow.compileB1B2Bundle(testCase.graph);
    assert.equal(bundle.errors.length, 0, `compileB1B2Bundle falló en ${testCase.id}`);
    assert.match(bundle.b2Lua, /inzoi\.message\.send_to_client\(owner_id, RES_CHANNEL/);
    const manifestObj = JSON.parse(bundle.manifest);
    assert.equal(manifestObj.bindings.B1[0].script, "Zoi.FlowBridgeClient");
    assert.equal(manifestObj.bindings.B2[0].script, "Zoi.FlowBridgeServer");
  }

  // Caso 1: Prototipo mínimo B1 -> B2 -> B1
  const case1 = flow.PROGRESSIVE_TEST_CASES.find(item => item.id === "proto-b1-b2-ping");
  const bundle1 = flow.compileB1B2Bundle(case1.graph);
  assert.match(bundle1.b1Lua, /inzoi\.message\.send_to_sim\(owner_id, REQ_CHANNEL, packet\)/);
  const sim1 = flow.simulateEvent(case1.graph, "character.overlap_begin", case1.payload, case1.graph.initialState);
  assert.equal(sim1.state, "verified");
  assert.ok(sim1.active.includes("bridge-sim"));
  assert.ok(sim1.active.includes("act-toast-ok"));
  assert.ok(sim1.log.some(line => line.includes("TX B1→B2")));
  assert.ok(sim1.log.some(line => line.includes("RX B2→B1")));
  assert.ok(sim1.log.some(line => line.includes("toast.show message=weather.listack_entity_1")));

  // Caso 2: Estado + transición
  const case2 = flow.PROGRESSIVE_TEST_CASES.find(item => item.id === "case-state-transition");
  const sim2 = flow.simulateEvent(case2.graph, "character.overlap_begin", case2.payload, "idle");
  assert.equal(sim2.state, "active");

  // Caso 3: Ramas múltiples
  const case3 = flow.PROGRESSIVE_TEST_CASES.find(item => item.id === "case-multi-branch");
  const sim3BranchA = flow.simulateEvent(case3.graph, "emotion.changed", { entity_id: 42, from_emotion: "Calm", to_emotion: "Excited" }, "idle");
  assert.ok(sim3BranchA.active.includes("act-branch-a"));
  assert.equal(sim3BranchA.state, "handled");
  const sim3BranchB = flow.simulateEvent(case3.graph, "emotion.changed", { entity_id: 42, from_emotion: "Calm", to_emotion: "Angry" }, "idle");
  assert.ok(sim3BranchB.active.includes("act-branch-b"));
  assert.equal(sim3BranchB.state, "handled");

  // Caso 4: Manejo explícito de error en puente B1 <-> B2
  const case4 = flow.PROGRESSIVE_TEST_CASES.find(item => item.id === "case-error-handling");
  const sim4 = flow.simulateEvent(case4.graph, "character.overlap_begin", case4.payload, "idle");
  assert.equal(sim4.state, "error_recovered");
  assert.ok(sim4.active.includes("act-recover"));
  assert.ok(sim4.log.some(line => line.includes("toast.show message=ERR_UNSUPPORTED_OP")));
});

test("exporta el bundle B1/B2 completo a disco, conserva bindings ajenos, crea backup, evita duplicados y falla si falta algún artefacto", () => {
  const fs = require("node:fs");
  const os = require("node:os");
  const path = require("node:path");

  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "inzoi-b1b2-export-"));
  try {
    const case1 = flow.PROGRESSIVE_TEST_CASES[0];
    const manifestPath = path.join(tmpRoot, "lua_manifest.json");
    const backupPath = path.join(tmpRoot, "lua_manifest.json.bak");

    // 1. Preparamos un manifest existente con un binding ajeno y su archivo físico
    const foreignLuaPath = path.join(tmpRoot, "B2", "Zoi", "FlyZoi.lua");
    fs.mkdirSync(path.dirname(foreignLuaPath), { recursive: true });
    fs.writeFileSync(foreignLuaPath, "local M = {}\nreturn M\n", "utf8");

    const originalManifestRaw = JSON.stringify({
      bindings: {
        B2: [{ type: "Zoi", key: "*", script: "Zoi.FlyZoi" }]
      }
    }, null, 2);
    fs.writeFileSync(manifestPath, originalManifestRaw, "utf8");

    // 2. Primera exportación a disco
    const export1 = flow.exportB1B2BundleToWorkspace(case1.graph, tmpRoot);
    assert.equal(export1.ok, true, `Fallo inesperado en export1: ${export1.errors.join("; ")}`);
    assert.ok(fs.existsSync(export1.artifacts.b1FullPath));
    assert.ok(fs.existsSync(export1.artifacts.b2FullPath));
    assert.ok(fs.existsSync(export1.artifacts.manifestPath));
    assert.ok(fs.existsSync(backupPath), "Debe existir copia de seguridad lua_manifest.json.bak");
    assert.equal(fs.readFileSync(backupPath, "utf8"), originalManifestRaw);

    // 3. Lectura posterior desde disco y verificación de conservación + nuevos bindings
    const diskManifest1 = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    assert.equal(diskManifest1.bindings.B2.length, 2);
    assert.deepEqual(diskManifest1.bindings.B2[0], { type: "Zoi", key: "*", script: "Zoi.FlyZoi" });
    assert.deepEqual(diskManifest1.bindings.B2[1], { type: "Zoi", key: "*", script: "Zoi.FlowBridgeServer" });
    assert.equal(diskManifest1.bindings.B1.length, 1);
    assert.deepEqual(diskManifest1.bindings.B1[0], { type: "Zoi", key: "*", script: "Zoi.FlowBridgeClient" });
    assert.equal("chunkScripts" in diskManifest1, false);

    // 4. Segunda exportación: idempotencia (sin duplicar bindings)
    const export2 = flow.exportB1B2BundleToWorkspace(case1.graph, tmpRoot);
    assert.equal(export2.ok, true);
    const diskManifest2 = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    assert.equal(diskManifest2.bindings.B2.length, 2);
    assert.equal(diskManifest2.bindings.B1.length, 1);

    // 5. Protección ante manifest con estructura desconocida/inválida (aborta sin sobrescribir)
    const unknownManifest = JSON.stringify({
      unknownRootField: true,
      bindings: { B2: { Zoi: { "*": ["Zoi.Legacy"] } } }
    });
    fs.writeFileSync(manifestPath, unknownManifest, "utf8");
    const badManifestExport = flow.exportB1B2BundleToWorkspace(case1.graph, tmpRoot);
    assert.equal(badManifestExport.ok, false);
    assert.equal(fs.readFileSync(manifestPath, "utf8"), unknownManifest);

    // 6. Si un binding existente apunta a un archivo que NO existe en disco, no declara la exportación como correcta
    fs.writeFileSync(manifestPath, JSON.stringify({
      bindings: {
        B2: [{ type: "Zoi", key: "*", script: "Zoi.MissingScript" }]
      }
    }), "utf8");
    const brokenRefExport = flow.exportB1B2BundleToWorkspace(case1.graph, tmpRoot);
    assert.equal(brokenRefExport.ok, false);
    assert.ok(brokenRefExport.errors.some(err => err.includes("Zoi.MissingScript")));

    // 7. Si el grafo es inválido, aborta sin declarar exportación correcta
    const invalidGraphExport = flow.exportB1B2BundleToWorkspace({ nodes: [], edges: [] }, tmpRoot);
    assert.equal(invalidGraphExport.ok, false);
  } finally {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  }
});

test("compileB1B2Bundle y simulateEvent soportan todas las operaciones verificadas de BRIDGE_CATALOG (incluyendo vuelo físico C++ y secuencias compuestas)", () => {
  const verifiedBridgeOps = [
    "verify_sim_authority",
    "needs.set_full",
    "weather.control",
    "time.DefaultDaySkip",
    "aging.set_growth_step",
    "emotion.add",
    "emotion.reset",
    "currency.set",
    "social.create_relationship",
    "schedule.AdvanceToNextSchedule",
    "movement.teleport",
    "movement.cpp_set_location_simul",
    "vehicle.attach_flying_prop"
  ];

  for (const opKey of verifiedBridgeOps) {
    assert.ok(flow.BRIDGE_CATALOG[opKey], `Falta ${opKey} en BRIDGE_CATALOG`);
    assert.equal(flow.BRIDGE_CATALOG[opKey].verificationStatus, flow.VERIFICATION_STATUS.VERIFIED);

    const g = {
      version: 2,
      initialState: "idle",
      binding: "Zoi:*",
      nodes: [
        { id: "state-idle", type: "state", x: 10, y: 10, data: { name: "idle" } },
        { id: "state-done", type: "state", x: 640, y: 10, data: { name: "done" } },
        { id: "evt-1", type: "event", x: 10, y: 100, data: { event: "character.overlap_begin", whenState: "idle" } },
        {
          id: "bridge-1",
          type: "bridge",
          x: 320,
          y: 100,
          data: {
            operation: opKey,
            reqId: "1",
            params: { ...(flow.BRIDGE_CATALOG[opKey].defaults || {}) }
          }
        },
        { id: "end-err", type: "end", x: 640, y: 200, data: {} }
      ],
      edges: [
        { kind: "exec", from: "evt-1", port: "next", to: "bridge-1" },
        { kind: "exec", from: "bridge-1", port: "ok", to: "state-done" },
        { kind: "exec", from: "bridge-1", port: "error", to: "end-err" }
      ]
    };

    const bundle = flow.compileB1B2Bundle(g);
    assert.equal(bundle.errors.length, 0, `Error compilando ${opKey}: ${bundle.errors.join("; ")}`);
    assert.match(bundle.b2Lua, /function M\.on_tick\(self, owner, dt\)/);
    assert.match(bundle.b2Lua, /owner:SetLocationOnlySimul\(loc\)/);
    assert.match(bundle.b2Lua, /owner:ForceSendMovementData\(\)/);
    assert.match(bundle.b2Lua, /owner:RequestSnapToGround\(\)/);

    if (opKey === "vehicle.attach_flying_prop") {
      assert.match(bundle.b1Lua, /entity\.attach_mesh/);
    }

    const sim = flow.simulateEvent(g, "character.overlap_begin", { entity_id: 1, other_entity_id: 2 }, "idle");
    assert.equal(sim.state, "done", `La simulación de ${opKey} no alcanzó el estado 'done'`);
  }
});

test("CONTEXT_ACTION_TREES y buildGraphFromContextTree construyen, simulan y compilan los 8 dominios contextuales estilo Blueprint (incluyendo zoi_self_menu y zoi_target_social)", () => {
  const expectedDomains = [
    "pregnancy",
    "appearance",
    "vehicle",
    "furniture",
    "weather_time",
    "life",
    "zoi_self_menu",
    "zoi_target_social"
  ];
  assert.deepEqual(Object.keys(flow.CONTEXT_ACTION_TREES), expectedDomains);

  for (const domainId of expectedDomains) {
    const tree = flow.CONTEXT_ACTION_TREES[domainId];
    assert.ok(tree.title && tree.summary, `Faltan títulos en ${domainId}`);
    assert.ok(Array.isArray(tree.engineRules) && tree.engineRules.length >= 2, `Faltan engineRules en ${domainId}`);
    assert.ok(Array.isArray(tree.options) && tree.options.length >= 3, `Faltan options en ${domainId}`);

    const defaults = flow.defaultOptionsForContextTree(domainId);
    const built = flow.buildGraphFromContextTree(domainId, defaults, tree.defaultEvent);
    assert.ok(built && built.graph, `buildGraphFromContextTree devolvió null para ${domainId}`);
    assert.equal(flow.validateGraph(built.graph).length, 0, `Grafo inválido en ${domainId}`);

    const bundle = flow.compileB1B2Bundle(built.graph);
    assert.equal(bundle.errors.length, 0, `compileB1B2Bundle falló en ${domainId}: ${bundle.errors.join("; ")}`);
    assert.ok(bundle.b1Lua.includes("inzoi.message.send_to_sim"), `Falta envío B1->B2 en ${domainId}`);
    assert.ok(bundle.b2Lua.includes("inzoi.message.send_to_client"), `Falta respuesta B2->B1 en ${domainId}`);

    const sim = flow.simulateEvent(built.graph, tree.defaultEvent, built.payload, "idle");
    assert.equal(sim.state, `${domainId}_applied`, `Simulación de ${domainId} no llegó a ${domainId}_applied`);
    assert.ok(sim.log.some(line => line.includes("TX B1→B2")));
    assert.ok(sim.log.some(line => line.includes("RX B2→B1")));
  }

  // Verificar que el árbol de embarazo incluye el bypass de género, FB2BioComponent y estética heredada en B1/B2
  const pregBuilt = flow.buildGraphFromContextTree("pregnancy", flow.defaultOptionsForContextTree("pregnancy"));
  const pregBundle = flow.compileB1B2Bundle(pregBuilt.graph);
  assert.match(pregBundle.b2Lua, /bio\.set_gender entity_id=/);
  assert.match(pregBundle.b2Lua, /pregnancy_and_birth\.get_baby_with/);
  assert.match(pregBundle.b2Lua, /ProceedToNextPregnancyState/);
  assert.match(pregBundle.b2Lua, /GetBabySpawnDataGenderType/);
  assert.match(pregBundle.b1Lua, /appearance\.hair/);
  assert.match(pregBundle.b1Lua, /appearance\.set_skin_color/);

  // Verificar zoi_self_menu (Smartphone + Radar GPS Coche + CCTV Oficina + Grupo + Negocio + Ropa + Emote IA)
  const selfBuilt = flow.buildGraphFromContextTree("zoi_self_menu", flow.defaultOptionsForContextTree("zoi_self_menu"));
  const selfBundle = flow.compileB1B2Bundle(selfBuilt.graph);
  assert.match(selfBundle.b1Lua, /visual\.free_camera/);
  assert.match(selfBundle.b1Lua, /view\.set_filter/);
  assert.match(selfBundle.b1Lua, /appearance\.set_outfit_category/);
  assert.match(selfBundle.b1Lua, /facial\.set/);
  assert.match(selfBundle.b2Lua, /entity\.scan_vehicles/);
  assert.match(selfBundle.b2Lua, /Self_ReturnToParkingPlace/);
  assert.match(selfBundle.b2Lua, /household_biz\.list_employees/);
  assert.match(selfBundle.b2Lua, /zoi_group\./);
  assert.match(selfBundle.b2Lua, /cleaning\./);
  assert.match(selfBundle.b2Lua, /smartzoi\.request_query_slm/);

  // Verificar zoi_target_social (Pareja Lara Ni 20524, TalkSelection, Romance, Matrimonio, Cariño, Relación, data.patch, Selección Multi-Miembro Familiar e Inversión de Posesión Dinámica runtime_host_swapping)
  const socialBuilt = flow.buildGraphFromContextTree("zoi_target_social", flow.defaultOptionsForContextTree("zoi_target_social"));
  const socialBundle = flow.compileB1B2Bundle(socialBuilt.graph);
  assert.match(socialBundle.b2Lua, /Co_Family_Spouse_R05/);
  assert.match(socialBundle.b2Lua, /marriage\./);
  assert.match(socialBundle.b2Lua, /relationships\./);
  assert.match(socialBundle.b2Lua, /data\.patch table=TalkSelection/);
  assert.match(socialBundle.b1Lua, /character\.possess character_id=20524/);
  assert.match(socialBundle.b1Lua, /inzoi\.event\.on\("interaction\.finished"/);
  assert.match(socialBundle.b2Lua, /entity\.get_possessed/);
  assert.match(socialBundle.b2Lua, /entity\.possess entity_id=/);
  assert.match(socialBundle.b2Lua, /inzoi\.event\.on\("interaction\.finished"/);
  assert.match(socialBundle.b2Lua, /household\.get_members/);
  assert.match(socialBundle.b2Lua, /Self_Karma_SendPrank/);
});

test("getOptionImpactMeta, BLUEPRINT_IDEA_PRESETS y buildMultiDomainGraphFromContextTrees permiten filtrar opciones extra y encadenar múltiples dominios en un solo grafo", () => {
  const selfTree = flow.CONTEXT_ACTION_TREES.zoi_self_menu;
  const phoneOpt = selfTree.options.find(o => o.id === "use_smartphone");
  const phoneMeta = flow.getOptionImpactMeta("zoi_self_menu", phoneOpt);
  assert.equal(phoneMeta.impactId, "smartphone_cam");
  assert.ok(phoneMeta.childCount >= 1, `use_smartphone debe desbloquear >=1 opción extra, tuvo ${phoneMeta.childCount}`);

  const aiEmoteOpt = selfTree.options.find(o => o.id === "enable_ai_emote");
  const aiEmoteMeta = flow.getOptionImpactMeta("zoi_self_menu", aiEmoteOpt);
  assert.equal(aiEmoteMeta.childCount, 3, "enable_ai_emote debe desbloquear 3 opciones extra");

  assert.ok(Array.isArray(flow.BLUEPRINT_IDEA_PRESETS) && flow.BLUEPRINT_IDEA_PRESETS.length >= 5);
  for (const preset of flow.BLUEPRINT_IDEA_PRESETS) {
    const optionsByDomain = {};
    for (const domId of preset.domains) {
      optionsByDomain[domId] = {
        ...flow.defaultOptionsForContextTree(domId),
        ...(preset.optionsByDomain?.[domId] || {})
      };
    }
    const mixed = flow.buildMultiDomainGraphFromContextTrees(preset.domains, optionsByDomain, preset.triggerEvent);
    assert.ok(mixed && mixed.graph, `Preset ${preset.id} no construyó grafo`);
    assert.equal(flow.validateGraph(mixed.graph).length, 0, `Grafo inválido en preset ${preset.id}`);
    const bundle = flow.compileB1B2Bundle(mixed.graph);
    assert.equal(bundle.errors.length, 0, `compileB1B2Bundle falló en preset ${preset.id}: ${bundle.errors.join("; ")}`);
    const sim = flow.simulateEvent(mixed.graph, preset.triggerEvent, mixed.payload, "idle");
    assert.ok(sim.state.endsWith("_applied"), `Simulación del preset ${preset.id} terminó en estado inesperado: ${sim.state}`);
  }

  // Verificar que todos los ámbitos de impacto están declarados y que todas las opciones de los 8 dominios devuelven metadatos válidos
  const expectedScopes = ["all", "self_zoi", "target_zoi", "smartphone_cam", "business", "world_vehicle", "datatable_patch"];
  assert.deepEqual(Object.keys(flow.IMPACT_SCOPES), expectedScopes);
  for (const [domId, tree] of Object.entries(flow.CONTEXT_ACTION_TREES)) {
    for (const opt of tree.options) {
      const meta = flow.getOptionImpactMeta(domId, opt);
      assert.ok(expectedScopes.includes(meta.impactId), `Impacto inválido ${meta.impactId} en ${domId}.${opt.id}`);
      assert.ok(meta.impactBadge.length > 0);
      assert.ok(Array.isArray(meta.childIds));
    }
  }
});

test("createEmptyGraph y createGraphHistory permiten vaciar el grafo, deshacer (Undo) y rehacer (Redo) cualquier cambio", () => {
  const initial = { graph: structuredClone(flow.DEFAULT_GRAPH), environment: "B2", selectedId: "evt-1" };
  const history = flow.createGraphHistory(initial, 20);
  assert.equal(history.canUndo(), false);
  assert.equal(history.canRedo(), false);

  const empty = flow.createEmptyGraph("Zoi:*");
  assert.equal(empty.nodes.length, 1);
  assert.equal(empty.nodes[0].id, "state-idle");
  assert.equal(empty.edges.length, 0);

  history.record({ graph: empty, environment: "B1", selectedId: "state-idle" }, "vaciar grafo");
  assert.equal(history.canUndo(), true);
  assert.equal(history.undoCount(), 1);
  assert.equal(history.getCurrent().graph.nodes.length, 1);

  const undone = history.undo();
  assert.ok(undone);
  assert.equal(undone.label, "vaciar grafo");
  assert.equal(undone.snapshot.graph.nodes.length, flow.DEFAULT_GRAPH.nodes.length);
  assert.equal(history.canUndo(), false);
  assert.equal(history.canRedo(), true);

  const redone = history.redo();
  assert.ok(redone);
  assert.equal(redone.snapshot.graph.nodes.length, 1);
  assert.equal(history.canUndo(), true);
  assert.equal(history.canRedo(), false);
});

test("compileUiModBundle genera los 5 archivos válidos de UIMod (manifest, index.html CoHTML, styles.css, window.js y app.js) conectados al grafo", () => {
  const pregBuilt = flow.buildGraphFromContextTree("pregnancy", flow.defaultOptionsForContextTree("pregnancy"));
  const cfg = flow.defaultUiModConfig(pregBuilt.graph);
  cfg.title = "Panel de Embarazo y Genética";
  cfg.width = 400;
  cfg.height = 460;
  cfg.triggerKey = "F9";
  cfg.triggerModifier = "CTRL";

  const uiBundle = flow.compileUiModBundle(pregBuilt.graph, cfg);
  assert.ok(uiBundle.manifestJson);
  assert.ok(uiBundle.indexHtml);
  assert.ok(uiBundle.stylesCss);
  assert.ok(uiBundle.windowJs);
  assert.ok(uiBundle.appJs);

  const manifest = JSON.parse(uiBundle.manifestJson);
  assert.equal(manifest.entry, "index.html");
  assert.equal(manifest.display.width, 1920);
  assert.equal(manifest.display.height, 1080);
  assert.equal(manifest.display.transparent, true);
  assert.equal(manifest.triggers[0].type, "keybind");
  assert.equal(manifest.triggers[0].key, "F9");
  assert.deepEqual(manifest.triggers[0].modifiers, ["CTRL"]);

  // Orden estricto obligatorio de scripts CoHTML en index.html
  const cohtmlIdx = uiBundle.indexHtml.indexOf("coui://inzoi/cohtml.js");
  const sdkIdx = uiBundle.indexHtml.indexOf("coui://inzoi/mod/inzoi-sdk.js");
  const winIdx = uiBundle.indexHtml.indexOf("window.js");
  const appIdx = uiBundle.indexHtml.indexOf("app.js");
  assert.ok(cohtmlIdx > -1 && sdkIdx > cohtmlIdx && winIdx > sdkIdx && appIdx > winIdx, "Orden incorrecto de scripts en index.html");

  // Nunca usar pointer-events: none en html/body
  assert.doesNotMatch(uiBundle.stylesCss, /body\s*\{[^}]*pointer-events\s*:\s*none/i);

  // window.js debe gestionar inzoi.view.hover(true/false)
  assert.match(uiBundle.windowJs, /inzoi\.view\.hover\(true\)/);
  assert.match(uiBundle.windowJs, /inzoi\.view\.hover\(false\)/);

  // app.js debe escuchar inzoi.trigger.onActivated y ejecutar inzoi.cli.execute
  assert.match(uiBundle.appJs, /inzoi\.trigger\.onActivated/);
  assert.match(uiBundle.appJs, /inzoi\.cli\.execute/);
});






