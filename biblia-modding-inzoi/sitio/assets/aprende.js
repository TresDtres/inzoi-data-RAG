(() => {
  "use strict";

  const root = document.getElementById("aprendizaje");
  const dataNode = document.getElementById("aprendizaje-datos");
  if (!root || !dataNode) return;

  const data = JSON.parse(dataNode.textContent);
  const key = "biblia-aprendizaje-v1";
  const translations = {
    es: {
      title: "Aprende creando",
      breadcrumb: "Aprende creando",
      intro: "Empieza con Lua y cheats reales; después distingue mods con interfaz de mods que trabajan en segundo plano.",
      language: "Idioma",
      mission: "Misión",
      progress: "Progreso",
      objective: "Objetivo",
      practice: "Práctica",
      code: "Patrón Lua",
      complete: "Completar misión",
      routesTitle: "¿Qué te gustaría crear ahora?",
      routesIntro: "Elige un departamento para seguir explorando. Estas páginas de la Biblia están disponibles en español.",
      spanishOnly: "Contenido de destino disponible en español.",
      reset: "Reiniciar progreso",
      resetConfirm: "¿Reiniciar el progreso de aprendizaje guardado en este navegador?",
      storageUnavailable: "Este navegador no permite guardar el progreso aquí. Podrás continuar mientras esta página siga abierta.",
      sourceLabel: "Abrir fuente",
      evidence: { in_game: "Probado en juego", visible: "Visible en juego; acción no verificada", preview: "Comprobado en preview", validated: "Flujo validado", documented: "Documentado en CLI; sin prueba en juego", pattern: "Patrón orientativo" }
    },
    en: {
      title: "Learn by creating",
      breadcrumb: "Learn by creating",
      intro: "Start with Lua and real cheats, then distinguish UI mods from mods that work in the background.",
      language: "Language",
      mission: "Mission",
      progress: "Progress",
      objective: "Objective",
      practice: "Practice",
      code: "Lua pattern",
      complete: "Complete mission",
      routesTitle: "What would you like to create next?",
      routesIntro: "Choose a department to keep exploring. These Bible pages are currently available in Spanish.",
      spanishOnly: "Destination content is available in Spanish.",
      reset: "Reset progress",
      resetConfirm: "Reset the learning progress saved in this browser?",
      storageUnavailable: "This browser cannot save progress here. You can continue while this page remains open.",
      sourceLabel: "Open source",
      evidence: { in_game: "Tested in-game", visible: "Visible in-game; action not verified", preview: "Verified in preview", validated: "Workflow validated", documented: "CLI-documented; not tested in-game", pattern: "Illustrative pattern" }
    }
  };

  let state = { language: "es", completed: [], selectedTrack: "" };
  let storageAvailable = true;

  try {
    const saved = window.localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.language = parsed.language === "en" ? "en" : "es";
      state.completed = Array.isArray(parsed.completed)
        ? [...new Set(parsed.completed.filter(id => data.missions.some(item => item.id === id)))]
        : [];
      state.selectedTrack = data.tracks.some(item => item.id === parsed.selectedTrack)
        ? parsed.selectedTrack
        : "";
    }
  } catch {
    storageAvailable = false;
  }

  function save() {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      storageAvailable = false;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function render() {
    const lang = state.language;
    const text = translations[lang];
    document.documentElement.lang = lang;
    document.title = `${text.title} — La Biblia del Modding inZOI`;
    const breadcrumb = document.getElementById("aprendizaje-migas");
    if (breadcrumb) breadcrumb.textContent = text.breadcrumb;
    const completed = new Set(state.completed);
    const current = data.missions.find(item => !completed.has(item.id));
    const count = state.completed.length;
    const percent = Math.round(count / data.missions.length * 100);

    let content = `
      <section class="aprende-cabecera">
        <div class="aprende-meta">
          <div><h1>${text.title}</h1><p>${text.intro}</p></div>
          <div class="idiomas" role="group" aria-label="${text.language}">
            <button type="button" data-language="es" aria-pressed="${lang === "es"}">Español</button>
            <button type="button" data-language="en" aria-pressed="${lang === "en"}">English</button>
          </div>
        </div>
        <div class="avance" role="progressbar" aria-label="${text.progress}" aria-valuemin="0" aria-valuemax="${data.missions.length}" aria-valuenow="${count}">
          <span style="width:${percent}%"></span>
        </div>
        <div>${text.progress}: ${count}/${data.missions.length}</div>
        ${storageAvailable ? "" : `<p class="aprende-error" role="status">${text.storageUnavailable}</p>`}
      </section>`;

    if (current) {
      const index = data.missions.indexOf(current);
      const evidence = current.evidence;
      content += `
        <article class="mision" aria-labelledby="mision-titulo">
          <div class="aprende-meta"><span>${text.mission} ${index + 1}/${data.missions.length}</span><span>${text.evidence[evidence.status]}</span></div>
          <h2 id="mision-titulo">${escapeHtml(current.title[lang])}</h2>
          <p class="objetivo"><strong>${text.objective}:</strong> ${escapeHtml(current.objective[lang])}</p>
          <p class="accion"><strong>${text.practice}:</strong> ${escapeHtml(current.action[lang])}</p>
          ${current.code ? `<h3>${text.code}</h3><pre><code>${escapeHtml(current.code)}</code></pre>` : ""}
          <fieldset class="comprobacion">
            <legend>${escapeHtml(current.question[lang])}</legend>
            ${current.choices.map(choice => `
              <label class="opcion"><input type="radio" name="respuesta" value="${escapeHtml(choice.id)}">
                <span>${escapeHtml(choice.text[lang])}</span></label>`).join("")}
          </fieldset>
          <p class="respuesta" id="feedback" aria-live="polite"></p>
          <button type="button" data-complete disabled>${text.complete}</button>
          <p class="evidencia"><strong>${text.evidence[evidence.status]}${evidence.date ? ` · ${escapeHtml(evidence.date)}` : ""}:</strong> ${escapeHtml(evidence[lang])} <a href="${escapeHtml(current.source)}">${text.sourceLabel}</a></p>
        </article>`;
    } else {
      content += `
        <section class="mision">
          <h2>${text.routesTitle}</h2><p>${text.routesIntro}</p>
          <div class="rutas-interes">${data.tracks.map(track => `
            <a class="ruta-interes" href="${escapeHtml(track.href)}" data-track="${escapeHtml(track.id)}">
              <strong>${escapeHtml(track.label[lang])}</strong><span>${escapeHtml(track.description[lang])}</span>
              <small class="aviso-idioma">${text.spanishOnly}</small>
              ${state.selectedTrack === track.id ? `<span aria-label="${lang === "es" ? "Ruta elegida" : "Selected path"}"> ✓</span>` : ""}
            </a>`).join("")}</div>
        </section>`;
    }

    content += `<div class="aprende-meta"><span></span><button type="button" data-reset>${text.reset}</button></div>`;
    root.innerHTML = content;
  }

  root.addEventListener("click", event => {
    const target = event.target.closest("button, a[data-track]");
    if (!target) return;

    if (target.dataset.language) {
      state.language = target.dataset.language;
      save();
      render();
      return;
    }
    if (target.hasAttribute("data-reset")) {
      if (window.confirm(translations[state.language].resetConfirm)) {
        state.completed = [];
        state.selectedTrack = "";
        save();
        render();
      }
      return;
    }
    if (target.hasAttribute("data-complete")) {
      const mission = data.missions.find(item => !state.completed.includes(item.id));
      if (mission && !state.completed.includes(mission.id)) {
        state.completed.push(mission.id);
        save();
        render();
      }
      return;
    }
    if (target.dataset.track) {
      state.selectedTrack = target.dataset.track;
      save();
    }
  });

  root.addEventListener("change", event => {
    if (!event.target.matches('input[name="respuesta"]')) return;
    const mission = data.missions.find(item => !state.completed.includes(item.id));
    if (!mission) return;
    const correct = event.target.value === mission.answer;
    const feedback = root.querySelector("#feedback");
    feedback.textContent = mission.feedback[correct ? "correct" : "incorrect"][state.language];
    root.querySelector("[data-complete]").disabled = !correct;
  });

  render();
})();
