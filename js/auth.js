let isLoginMode = false;

window.onload = () => { 
    if(getState().isLoggedIn) window.location.href = 'pages/trilha.html'; 
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    
    // Atualiza os textos da interface
    document.getElementById('auth-title').innerText = isLoginMode ? "Bem-vindo de volta" : "Criar Conta";
    document.getElementById('auth-btn').innerText = isLoginMode ? "Entrar" : "Cadastrar";
    document.getElementById('toggle-msg').innerText = isLoginMode ? "Não tem uma conta?" : "Já tem conta?";
    document.getElementById('toggle-link').innerText = isLoginMode ? "Cadastrar-se" : "Entrar";
    
    // Esconde ou mostra os campos de Nome e Gênero dependendo se é Login ou Cadastro
    const nameField = document.getElementById('name-input-group');
    const genderField = document.getElementById('gender-input-group');
    
    if (isLoginMode) {
        nameField.style.display = 'none';
        nameField.querySelector('input').removeAttribute('required');
        genderField.style.display = 'none';
    } else {
        nameField.style.display = 'block';
        nameField.querySelector('input').setAttribute('required', '');
        genderField.style.display = 'block';
    }
}

function handleAuth(event) {
    event.preventDefault();
    const state = getState();
    
    // Se for um NOVO cadastro, captura o Nome, o Gênero e define o Avatar base
    if (!isLoginMode) {
        state.name = document.getElementById('name').value;
        const selectedGender = document.querySelector('input[name="gender"]:checked').value;
        state.gender = selectedGender;
        
        // Define o avatar inicial com base na escolha
        if (selectedGender === 'female') {
            state.avatar = '../avata/avatar_female_clean.png';
        } else {
            state.avatar = '../avata/avatar_male_clean.png';
        }
    }
    
    // Captura o E-mail e efetua o login
    state.email = document.getElementById('email').value;
    state.isLoggedIn = true;
    
    // Salva tudo no banco de dados do navegador e redireciona
    saveState(state);
    window.location.href = 'pages/trilha.html';
}