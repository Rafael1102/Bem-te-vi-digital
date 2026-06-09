
const avatarOptions = [
    { url: '../avata/avatar_male_clean.png', label: 'Masculino' },
    { url: '../avata/avatar_female_clean.png', label: 'Feminino' },
    { url: '../avata/Bem-te-vi_jeday.jpeg', label: 'Bem-te-vi' }
];
window.onload = () => {
    updateXpDisplay(); const state = getState();
    document.getElementById('profile-data-name').innerText = state.name || 'Usuário';
    document.getElementById('profile-data-email').innerText = state.email || 'email@não.informado';
    document.getElementById('current-avatar-circular').src = state.avatar;
    renderAvatarGrid(state);
    
    // Progress calculation based on 5 modules
    const totalModules = 5;
    const progress = (state.completedModules.length / totalModules) * 100;
    document.getElementById('overall-progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-percentage-text').innerText = `${progress.toFixed(0)}% concluído`;
    
    // Study status
    let currentStudy = "Curso Concluído!";
    for (let id = 1; id <= totalModules; id++) {
        if (!state.completedModules.includes(id) && state.unlockedModules.includes(id)) {
            const moduleTitles = {
                1: 'Fundamentos de Segurança Digital',
                2: 'Senhas e Autenticação',
                3: 'Redes Seguras e Uso de VPN',
                4: 'Prevenção de Golpes Virtuais',
                5: 'Netiqueta e Convivência Digital'
            };
            currentStudy = moduleTitles[id];
            break;
        }
    }
    document.getElementById('profile-data-study').innerText = currentStudy;
    
    // Render Medals
    const medalsContainer = document.getElementById('profile-medals-list');
    medalsContainer.innerHTML = ''; 
    const conquistas = [{ id: 1, icon: "🛡️" }, { id: 2, icon: "🔑" }, { id: 3, icon: "🌐" }, { id: 4, icon: "🕵️" }, { id: 5, icon: "🤝" }];
    conquistas.forEach(c => {
        const isUnlocked = state.completedModules.includes(c.id);
        const medalSpan = document.createElement('span');
        medalSpan.style.fontSize = '30px';
        medalSpan.style.margin = '0 10px';
        medalSpan.style.display = 'inline-block';
        medalSpan.style.filter = isUnlocked ? 'grayscale(0)' : 'grayscale(1)';
        medalSpan.style.opacity = isUnlocked ? '1' : '0.3';
        medalSpan.innerText = c.icon;
        medalsContainer.appendChild(medalSpan);
    });
};

function renderAvatarGrid(state) {
    const grid = document.getElementById('avatar-picker-grid');
    grid.innerHTML = '';
    avatarOptions.forEach(opt => {
        const item = document.createElement('div');
        item.className = `avatar-option-item ${state.avatar === opt.url ? 'selected' : ''}`;
        item.onclick = () => {
            state.avatar = opt.url; saveState(state);
            document.getElementById('current-avatar-circular').src = opt.url;
            renderAvatarGrid(state);
        };
        item.innerHTML = `<img src="${opt.url}" class="avatar-option-img"><p style="font-size: 12px; font-weight: bold;">${opt.label}</p>`;
        grid.appendChild(item);
    });
}
