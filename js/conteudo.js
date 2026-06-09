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

let currentActivity = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let activityFinished = false;
let answerResults = [];
const POINTS_PER_CORRECT = 10;

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const modId = params.get("modulo");
  const unitIdx = params.get("unidade");

  if (!modId || unitIdx === null || !moduleDetails[modId]) {
    showError("Unidade não encontrada. Volte para a trilha e selecione uma fase.");
    return;
  }

  const unitKey = `${modId}-${unitIdx}`;
  const activity = unitActivities[unitKey];

  if (!activity) {
    showError("Atividade ainda não disponível para esta unidade.");
    return;
  }

  const unitName = moduleDetails[modId].units[unitIdx];
  document.getElementById("unit-title").innerText = unitName;
  document.getElementById("unit-desc").innerText = activity.intro;
  document.getElementById("module-label").innerText =
    `Módulo ${modId} · Unidade ${parseInt(unitIdx, 10) + 1}`;

  currentActivity = activity;
  updateLiveScore();
  renderQuestion();
};

function showError(message) {
  document.getElementById("unit-title").innerText = "Ops!";
  document.getElementById("unit-desc").innerText = message;
  document.getElementById("activity-area").style.display = "none";
  document.getElementById("finish-btn").style.display = "block";
}

function updateLiveScore() {
  const scoreEl = document.getElementById("live-score");
  if (!scoreEl) return;
  scoreEl.innerText = correctAnswers * POINTS_PER_CORRECT;
  scoreEl.classList.add("score-bump");
  setTimeout(() => scoreEl.classList.remove("score-bump"), 250);
}

function renderQuestion() {
  if (!currentActivity || activityFinished) return;

  const question = currentActivity.questions[currentQuestionIndex];
  const total = currentActivity.questions.length;
  const area = document.getElementById("activity-area");

  document.getElementById("progress-text").innerText =
    `Pergunta ${currentQuestionIndex + 1} de ${total}`;
  document.getElementById("progress-fill").style.width =
    `${((currentQuestionIndex) / total) * 100}%`;

  let optionsHtml = "";

  if (question.type === "quiz") {
    optionsHtml = question.options
      .map(
        (option, index) =>
          `<button class="activity-option" onclick="answerQuestion(${index})">${option}</button>`
      )
      .join("");
  } else if (question.type === "verdadeiro_falso") {
    optionsHtml = `
      <button class="activity-option" onclick="answerQuestion(true)">Verdadeiro</button>
      <button class="activity-option" onclick="answerQuestion(false)">Falso</button>
    `;
  }

  area.innerHTML = `
    <div class="activity-question">${question.text}</div>
    <div class="activity-options">${optionsHtml}</div>
    <div id="feedback-area" class="feedback-area" style="display: none;"></div>
  `;

  document.getElementById("finish-btn").style.display = "none";
}

function answerQuestion(selected) {
  const question = currentActivity.questions[currentQuestionIndex];
  const isCorrect = selected === question.correct;
  const feedback = document.getElementById("feedback-area");
  const options = document.querySelectorAll(".activity-option");

  options.forEach((btn) => {
    btn.disabled = true;
    btn.classList.add("disabled");
  });

  if (isCorrect) {
    correctAnswers++;
    updateLiveScore();
    feedback.className = "feedback-area feedback-correct";
    feedback.innerHTML = `Correto! Muito bem. <span class="points-earned">+${POINTS_PER_CORRECT} pontos</span>`;
  } else {
    feedback.className = "feedback-area feedback-wrong";
    if (question.type === "quiz") {
      feedback.innerText = `Incorreto. A resposta certa era: "${question.options[question.correct]}"`;
    } else {
      feedback.innerText = `Incorreto. A resposta certa era: ${question.correct ? "Verdadeiro" : "Falso"}.`;
    }
  }

  answerResults.push({
    question: question.text,
    isCorrect,
    points: isCorrect ? POINTS_PER_CORRECT : 0,
  });

  feedback.style.display = "block";

  const isLast = currentQuestionIndex === currentActivity.questions.length - 1;
  const nextBtn = document.createElement("button");
  nextBtn.className = "btn activity-next-btn";
  nextBtn.innerText = isLast ? "Ver Resultado" : "Próxima Pergunta";
  nextBtn.onclick = isLast ? showResults : nextQuestion;
  feedback.appendChild(nextBtn);
}

function nextQuestion() {
  currentQuestionIndex++;
  renderQuestion();
}

function showResults() {
  activityFinished = true;
  const total = currentActivity.questions.length;
  const totalPoints = correctAnswers * POINTS_PER_CORRECT;
  const percent = Math.round((correctAnswers / total) * 100);
  const passed = percent >= 66;

  document.getElementById("progress-fill").style.width = "100%";
  document.getElementById("progress-text").innerText = "Atividade concluída";
  document.getElementById("activity-area").innerHTML = "";

  playCelebrationAnimation(totalPoints, passed);
}

function playCelebrationAnimation(totalPoints, passed) {
  const overlay = document.getElementById("celebration-overlay");
  const breakdown = document.getElementById("points-breakdown");
  const totalEl = document.getElementById("total-points");
  const subtitle = overlay.querySelector(".celebration-subtitle");

  breakdown.innerHTML = "";
  totalEl.innerText = "0 pontos";
  totalEl.classList.remove("total-points-pop");
  subtitle.innerText = "Contando seus acertos...";
  overlay.classList.add("visible");
  overlay.setAttribute("aria-hidden", "false");

  let runningTotal = 0;
  let delay = 900;

  answerResults.forEach((result, index) => {
    setTimeout(() => {
      const item = document.createElement("li");
      item.className = `points-item ${result.isCorrect ? "points-item-correct" : "points-item-wrong"}`;

      if (result.isCorrect) {
        runningTotal += result.points;
        item.innerHTML = `<span>Acerto ${index + 1}</span><strong>+${result.points} pts</strong>`;
        totalEl.innerText = `${runningTotal} pontos`;
        totalEl.classList.add("total-points-pop");
        setTimeout(() => totalEl.classList.remove("total-points-pop"), 400);
      } else {
        item.innerHTML = `<span>Pergunta ${index + 1}</span><strong>0 pts</strong>`;
      }

      item.classList.add("points-item-enter");
      breakdown.appendChild(item);
    }, delay);
    delay += 650;
  });

  setTimeout(() => {
    subtitle.innerText = passed
      ? "Parabéns! Você mandou bem!"
      : "Continue praticando, você consegue!";
  }, delay);

  setTimeout(() => {
    overlay.classList.remove("visible");
    overlay.setAttribute("aria-hidden", "true");
    renderFinalResults(totalPoints, passed);
  }, delay + 1800);
}

function renderFinalResults(totalPoints, passed) {
  const total = currentActivity.questions.length;
  const percent = Math.round((correctAnswers / total) * 100);
  const area = document.getElementById("activity-area");

  area.innerHTML = `
    <div class="activity-result ${passed ? "result-pass" : "result-fail"}">
      <div class="result-score">${correctAnswers}/${total}</div>
      <p class="result-message">${passed ? "Parabéns! Você dominou este conteúdo." : "Continue praticando! Revise o conteúdo e tente novamente."}</p>
      <p class="result-detail">Acertos: ${percent}%</p>
      <p class="result-points-total">Total: <strong>${totalPoints} pontos</strong></p>
      <ul class="result-breakdown">
        ${answerResults
          .map(
            (result, index) =>
              `<li class="${result.isCorrect ? "breakdown-correct" : "breakdown-wrong"}">
                ${result.isCorrect ? "✓" : "✗"} Pergunta ${index + 1}: ${result.isCorrect ? `+${result.points} pts` : "0 pts"}
              </li>`
          )
          .join("")}
      </ul>
    </div>
  `;

  if (passed) {
    awardUnitXp(totalPoints);
    document.getElementById("finish-btn").style.display = "block";
  } else {
    const retryBtn = document.createElement("button");
    retryBtn.className = "btn activity-next-btn";
    retryBtn.innerText = "Tentar Novamente";
    retryBtn.onclick = restartActivity;
    area.querySelector(".activity-result").appendChild(retryBtn);
    document.getElementById("finish-btn").style.display = "block";
    document.getElementById("finish-btn").innerText = "Voltar para a Trilha";
  }
}

function restartActivity() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  answerResults = [];
  activityFinished = false;
  updateLiveScore();
  document.getElementById("finish-btn").style.display = "none";
  document.getElementById("finish-btn").innerText = "Concluir e Voltar para a Trilha";
  renderQuestion();
}

function awardUnitXp(totalPoints) {
  const params = new URLSearchParams(window.location.search);
  const modId = params.get("modulo");
  const unitIdx = params.get("unidade");
  const unitKey = `${modId}-${unitIdx}`;
  const state = getState();

  if (!state.completedUnits) state.completedUnits = [];

  if (!state.completedUnits.includes(unitKey)) {
    state.completedUnits.push(unitKey);
    state.xp += Math.max(5, Math.round(totalPoints / 2));
    saveState(state);
  }
}

function finishUnit() {
  window.location.href = "trilha.html";
}
