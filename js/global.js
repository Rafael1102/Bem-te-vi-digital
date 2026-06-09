
function initAppState() {
    if (!localStorage.getItem('guardiao_state')) {
        localStorage.setItem('guardiao_state', JSON.stringify({
            name: '', email: '', xp: 0, unlockedModules: [1], completedModules: [], completedUnits: [], gender: 'male',
            avatar: '../assets/avatars/avatar_male_clean.png', isLoggedIn: false
        }));
    }
}
function getState() {
    const state = JSON.parse(localStorage.getItem('guardiao_state'));
    if (!state.completedUnits) state.completedUnits = [];
    return state;
}
function saveState(state) { localStorage.setItem('guardiao_state', JSON.stringify(state)); }
function updateXpDisplay() {
    const state = getState();
    const xpCounter = document.getElementById('xp-counter');
    if(xpCounter) xpCounter.innerText = state.xp;
}
function logout() {
    const state = getState(); state.isLoggedIn = false; saveState(state);
    window.location.href = '../index.html';
}
initAppState();

// Cria e gerencia o botão "Ir para o final" que aparece quando o conteúdo não cabe na tela
function setupScrollToBottomButton() {
    const btnId = 'scrollToBottomBtn';
    if (document.getElementById(btnId)) return;

    const btn = document.createElement('button');
    btn.id = btnId;
    btn.className = 'scroll-to-bottom-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Ir para o final');
    btn.innerHTML = '<span class="sr-only">Ir para o final</span>' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<path d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>';
    btn.setAttribute('title', 'Ir para o final');

    // tentar resolver caminho do áudio dependendo da estrutura de pastas (Pages/ vs root)
    let audioSrc = 'utils/bemteviaudio.mp3';
    try {
        const path = window.location.pathname || '';
        if (path.includes('/Pages/') || path.includes('\\Pages\\')) {
            audioSrc = '../utils/bemteviaudio.mp3';
        } else {
            audioSrc = 'utils/bemteviaudio.mp3';
        }
    } catch (e) {
        audioSrc = 'utils/bemteviaudio.mp3';
    }

    const clickAudio = new Audio(audioSrc);
    clickAudio.preload = 'auto';

    btn.addEventListener('click', () => {
        // tocar áudio (não bloquear a rolagem caso falhe)
        try {
            const playPromise = clickAudio.play();
            if (playPromise && playPromise.catch) playPromise.catch(() => {});
        } catch (e) {}

        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });

    document.body.appendChild(btn);

    let isUpdating = false;
    const checkVisibility = () => {
        if (isUpdating) return;
        window.requestAnimationFrame(() => {
            isUpdating = true;
            try {
                const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                const viewHeight = window.innerHeight || document.documentElement.clientHeight;
                const nearBottom = (window.scrollY + viewHeight) >= (docHeight - 80);

                if (docHeight > viewHeight + 80 && !nearBottom) {
                    if (!btn.classList.contains('visible')) btn.classList.add('visible');
                } else {
                    if (btn.classList.contains('visible')) btn.classList.remove('visible');
                }
            } finally {
                isUpdating = false;
            }
        });
    };

    window.addEventListener('resize', checkVisibility);
    window.addEventListener('scroll', checkVisibility, { passive: true });

    // checar após carregamento de imagens e ao final do carregamento inicial
    window.addEventListener('load', checkVisibility);
    
    let mutationTimeout;
    // MutationObserver para detectar mudanças de conteúdo dinâmico
    const observer = new MutationObserver((mutations) => {
        // Evita loop infinito caso a mudança seja no próprio botão
        let isOnlyBtn = true;
        for (let m of mutations) {
            if (m.target !== btn && !btn.contains(m.target)) {
                isOnlyBtn = false;
                break;
            }
        }
        if (isOnlyBtn) return;

        clearTimeout(mutationTimeout);
        mutationTimeout = setTimeout(checkVisibility, 150);
    });
    // Remove attributes: true para evitar thrashing em mudanças de estilo normais
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // chamada inicial
    setTimeout(checkVisibility, 120);
}

// inicializa o botão quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollToBottomButton);
} else {
    setupScrollToBottomButton();
}
