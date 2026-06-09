
window.onload = () => { updateXpDisplay(); renderAchievements(); };
function renderAchievements() {
    const state = getState();
    const list = document.getElementById('achievements-list');
    list.innerHTML = '';
    const conquistas = [
        { id: 1, nome: "Iniciante Digital", icon: "🛡️" },
        { id: 2, nome: "Mestre das Senhas", icon: "🔑" },
        { id: 3, nome: "Navegador Seguro", icon: "🌐" },
        { id: 4, nome: "Caçador de Golpes", icon: "🕵️" },
        { id: 5, nome: "Cidadão Digital", icon: "🤝" }
    ];
    conquistas.forEach(c => {
        const isUnlocked = state.completedModules.includes(c.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
        card.innerHTML = `<span class="achievement-icon" style="font-size:40px">${c.icon}</span><strong>${c.nome}</strong>`;
        list.appendChild(card);
    });
}
