
const INDICE = window.INDICE_BIBLIA || [];
const BASE = window.BIBLIA_BASE || '';
function normalizar(s) { return (s || '').toLowerCase(); }
function buscarLocal(q) {
  const nq = normalizar(q);
  if (!nq) return [];
  return INDICE.filter(d => normalizar(d.t + ' ' + d.r).includes(nq) || normalizar(d.s).includes(nq)).slice(0, 30);
}
async function buscarSemantica(q) {
  try {
    const r = await fetch('http://127.0.0.1:8088/search', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: q, top_k: 10})
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d.results || [];
  } catch (e) { return null; }
}
function htmlEscape(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function renderResultados(cont, docs, semanticos) {
  cont.innerHTML = '';
  if (docs.length === 0 && !semanticos) {
    cont.innerHTML = '<div class="aviso">Sin coincidencias locales.</div>';
    return;
  }
  for (const d of docs) {
    const div = document.createElement('div');
    div.className = 'resultado';
    div.innerHTML = `<a href="${BASE}docs/${d.r}.html">${htmlEscape(d.t)}</a><div class="ruta">${d.r}</div>`;
    cont.appendChild(div);
  }
  if (semanticos) {
    const h = document.createElement('div');
    h.className = 'resultado';
    h.innerHTML = '<b>Busqueda semantica (RAG local)</b>';
    cont.appendChild(h);
    for (const s of semanticos) {
      const div = document.createElement('div');
      div.className = 'resultado';
      const ruta = String(s.file || '').replace(/^pages\//, '').replace(/\.md$/, '');
      div.innerHTML = `<a href="${BASE}docs/${ruta}.html">${htmlEscape(s.title || ruta)}</a> <span class="ruta">${Math.round((s.score || 0) * 100)}%</span>`;
      cont.appendChild(div);
    }
  }
}
function conectarBusqueda(inputId, contId) {
  const input = document.getElementById(inputId);
  const cont = document.getElementById(contId);
  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const q = input.value.trim();
      if (q.length < 2) { cont.innerHTML = ''; return; }
      const locales = buscarLocal(q);
      const semanticos = await buscarSemantica(q);
      renderResultados(cont, locales, semanticos);
    }, 220);
  });
}
document.addEventListener('DOMContentLoaded', () => conectarBusqueda('q', 'resultados'));
