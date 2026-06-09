let currentLessonId = null;

const moduleDetails = {
  1: {
    title: "Fundamentos de Segurança Digital",
    units: [
      "O que é Segurança Digital",
      "Tipos de Ameaças Virtuais",
      "Comportamento Seguro na Internet",
    ],
  },
  2: {
    title: "Senhas e Autenticação",
    units: [
      "Senhas Fortes na Prática",
      "Gerenciadores de Senhas",
      "Autenticação em Dois Fatores (2FA)",
    ],
  },
  3: {
    title: "Redes Seguras e Uso de VPN",
    units: ["Como a Internet Funciona", "Ataques em Redes", "VPN na Prática"],
  },
  4: {
    title: "Prevenção de Golpes Virtuais",
    units: [
      "Engenharia Social",
      "Phishing e Golpes Online",
      "Golpes em Redes Sociais e Marketplace",
    ],
  },
  5: {
    title: "Netiqueta e Convivência Digital",
    units: [
      "Comunicação Respeitosa Online",
      "Cyberbullying e Conflitos Digitais",
      "Cidadania Digital",
    ],
  },
};

window.onload = () => {
  updateXpDisplay();
  renderTrail();
};

function renderTrail() {
  const state = getState();
  [1, 2, 3, 4, 5].forEach((id) => {
    const node = document.getElementById(`mod${id}`);
    if (!node) return;
    node.classList.remove("completed", "locked");
    if (state.completedModules.includes(id)) node.classList.add("completed");
    else if (!state.unlockedModules.includes(id)) node.classList.add("locked");
  });
}

function startLesson(id) {
  if (
    !getState().unlockedModules.includes(id) &&
    !getState().completedModules.includes(id)
  )
    return alert("Conclua os módulos anteriores primeiro para desbloquear!");

  currentLessonId = id;
  const details = moduleDetails[id];

  document.getElementById("lessonTitle").innerText = details.title;

  const state = getState();
  if (!state.completedUnits) state.completedUnits = [];

  let unitsHtml = '<div class="units-list">';
  details.units.forEach((u, index) => {
    const unitKey = `${id}-${index}`;
    const isCompleted = state.completedUnits.includes(unitKey);
    const statusIcon = isCompleted ? "✅" : "🎮";
    const statusTitle = isCompleted ? "Unidade concluída" : "Iniciar Atividade";
    const completedClass = isCompleted ? " completed-unit" : "";

    unitsHtml += `<div class="unit-card${completedClass}" onclick="loadInteractiveUnit(${id}, ${index})" title="${statusTitle}">
            <div>
              <span class="unit-card-title">Unidade ${index + 1}: ${u}</span>
              ${isCompleted ? '<div class="unit-status">Atividade concluída</div>' : ""}
            </div>
            <span class="unit-card-icon">${statusIcon}</span>
        </div>`;
  });
  unitsHtml += "</div>";

  document.getElementById("lessonDesc").innerHTML =
    `<strong>Escolha uma fase para realizar a atividade:</strong>` + unitsHtml;
  document.getElementById("lessonModal").style.display = "flex";
}

function loadInteractiveUnit(moduleId, unitIndex) {
  // Redireciona o jogador para a página de conteúdo/interatividade da unidade selecionada passando os parâmetros
  window.location.href = `conteudo.html?modulo=${moduleId}&unidade=${unitIndex}`;
}
function completeLesson() {
  const state = getState();
  if (!state.completedModules.includes(currentLessonId)) {
    state.xp += 15;
    state.completedModules.push(currentLessonId);
    const nextId = currentLessonId + 1;
    if (!state.unlockedModules.includes(nextId) && nextId <= 5)
      state.unlockedModules.push(nextId);
    saveState(state);
    updateXpDisplay();
    renderTrail();
  }
  document.getElementById("lessonModal").style.display = "none";
}
