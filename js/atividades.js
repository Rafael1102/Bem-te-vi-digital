const unitActivities = {
  "1-0": {
    intro: "Teste seus conhecimentos sobre o conceito de segurança digital e sua importância no dia a dia.",
    questions: [
      {
        type: "quiz",
        text: "O que é segurança digital?",
        options: [
          "Proteger informações, dispositivos e identidade no ambiente digital",
          "Instalar apenas jogos e aplicativos de entretenimento",
          "Compartilhar senhas com pessoas de confiança",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Dados pessoais publicados na internet podem ser usados por criminosos.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Qual hábito contribui para a segurança digital?",
        options: [
          "Usar senhas únicas para cada serviço",
          "Usar a mesma senha em todos os sites",
          "Desativar o antivírus para o computador ficar mais rápido",
        ],
        correct: 0,
      },
    ],
  },
  "1-1": {
    intro: "Identifique tipos comuns de ameaças virtuais e saiba reconhecê-las.",
    questions: [
      {
        type: "quiz",
        text: "Qual é um exemplo de malware?",
        options: ["Ransomware", "Planilha de orçamento", "Foto de perfil"],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Phishing é uma tentativa de enganar o usuário para roubar dados.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Um link suspeito em e-mail desconhecido pode ser:",
        options: [
          "Uma tentativa de golpe ou infecção",
          "Sempre seguro se tiver emoji",
          "Um presente garantido da empresa",
        ],
        correct: 0,
      },
    ],
  },
  "1-2": {
    intro: "Aprenda práticas seguras para navegar e interagir na internet.",
    questions: [
      {
        type: "quiz",
        text: "Ao acessar um site de banco, o que você deve verificar?",
        options: [
          "Se o endereço começa com https e o cadeado está ativo",
          "Se o site tem muitas cores",
          "Se aparecem muitos pop-ups de promoção",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Baixar arquivos de fontes desconhecidas pode infectar o dispositivo.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Qual atitude é mais segura em redes sociais?",
        options: [
          "Limitar quem vê suas publicações pessoais",
          "Publicar endereço e telefone para todos",
          "Aceitar solicitações de perfis sem foto",
        ],
        correct: 0,
      },
    ],
  },
  "2-0": {
    intro: "Pratique a criação e uso de senhas fortes no cotidiano.",
    questions: [
      {
        type: "quiz",
        text: "Qual senha é considerada mais forte?",
        options: [
          "Tr3f@2026!Seg",
          "123456",
          "senha123",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Senhas longas com letras, números e símbolos são mais difíceis de adivinhar.",
        correct: true,
      },
      {
        type: "quiz",
        text: "O que NÃO deve ser usado como senha?",
        options: [
          "Seu nome e data de nascimento",
          "Frase aleatória com símbolos",
          "Combinação gerada por gerenciador de senhas",
        ],
        correct: 0,
      },
    ],
  },
  "2-1": {
    intro: "Entenda como gerenciadores de senhas ajudam a proteger suas contas.",
    questions: [
      {
        type: "quiz",
        text: "Qual é a principal função de um gerenciador de senhas?",
        options: [
          "Armazenar senhas de forma criptografada",
          "Publicar senhas na nuvem aberta",
          "Enviar senhas por e-mail automaticamente",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Gerenciadores de senhas permitem usar senhas diferentes sem memorizar todas.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Ao usar um gerenciador, o que é essencial proteger?",
        options: [
          "A senha mestra de acesso ao gerenciador",
          "O nome do seu pet",
          "A cor de fundo do aplicativo",
        ],
        correct: 0,
      },
    ],
  },
  "2-2": {
    intro: "Compreenda como a autenticação em dois fatores (2FA) reforça a segurança.",
    questions: [
      {
        type: "quiz",
        text: "O que é autenticação em dois fatores (2FA)?",
        options: [
          "Confirmar identidade com dois métodos diferentes",
          "Usar duas senhas iguais ao mesmo tempo",
          "Fazer login em dois navegadores",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Mesmo com 2FA, ainda é importante ter uma senha forte.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Qual pode ser o segundo fator em 2FA?",
        options: [
          "Código temporário no celular ou app autenticador",
          "Nome do usuário repetido",
          "Foto de perfil antiga",
        ],
        correct: 0,
      },
    ],
  },
  "3-0": {
    intro: "Revise como a internet funciona e por que isso importa para a segurança.",
    questions: [
      {
        type: "quiz",
        text: "O que é um endereço IP?",
        options: [
          "Identificador numérico de um dispositivo na rede",
          "Nome de usuário de rede social",
          "Tipo de senha Wi-Fi",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Roteadores direcionam o tráfego de dados entre dispositivos e a internet.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Por que entender redes ajuda na segurança?",
        options: [
          "Permite identificar conexões e riscos suspeitos",
          "Elimina a necessidade de senhas",
          "Garante internet gratuita para sempre",
        ],
        correct: 0,
      },
    ],
  },
  "3-1": {
    intro: "Reconheça ataques comuns em redes e como se proteger.",
    questions: [
      {
        type: "quiz",
        text: "O que é um ataque Man-in-the-Middle?",
        options: [
          "Interceptar comunicação entre duas partes",
          "Aumentar a velocidade da internet",
          "Instalar atualizações automaticamente",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Redes Wi-Fi públicas sem proteção podem expor seus dados.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Qual medida reduz riscos em redes públicas?",
        options: [
          "Evitar acessar contas sensíveis ou usar VPN",
          "Desativar firewall do dispositivo",
          "Compartilhar senha do Wi-Fi com desconhecidos",
        ],
        correct: 0,
      },
    ],
  },
  "3-2": {
    intro: "Aprenda quando e como usar VPN para navegar com mais segurança.",
    questions: [
      {
        type: "quiz",
        text: "Para que serve uma VPN?",
        options: [
          "Criar conexão criptografada e proteger tráfego na rede",
          "Aumentar o volume de anúncios no navegador",
          "Substituir completamente o antivírus",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "VPN ajuda a ocultar parte da sua navegação em redes não confiáveis.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Ao escolher uma VPN, o ideal é:",
        options: [
          "Usar serviço confiável com política clara de privacidade",
          "Escolher a opção gratuita mais desconhecida",
          "Instalar qualquer extensão de navegador",
        ],
        correct: 0,
      },
    ],
  },
  "4-0": {
    intro: "Identifique táticas de engenharia social usadas por criminosos.",
    questions: [
      {
        type: "quiz",
        text: "O que caracteriza engenharia social?",
        options: [
          "Manipular pessoas para obter informações ou acesso",
          "Consertar computadores remotamente",
          "Programar sites seguros",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Criminosos podem se passar por colegas ou suporte técnico para enganar vítimas.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Alguém liga pedindo senha do banco com urgência. O que fazer?",
        options: [
          "Desligar e contatar o banco pelos canais oficiais",
          "Informar a senha para resolver rápido",
          "Enviar foto do cartão por WhatsApp",
        ],
        correct: 0,
      },
    ],
  },
  "4-1": {
    intro: "Aprenda a detectar e-mails e sites de phishing.",
    questions: [
      {
        type: "quiz",
        text: "Sinal comum de phishing em e-mail:",
        options: [
          "Urgência extrema e links suspeitos",
          "Remetente oficial verificado",
          "Assunto neutro sem pedidos",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Sites falsos podem imitar a aparência de bancos conhecidos.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Recebeu e-mail pedindo para confirmar senha. Melhor ação:",
        options: [
          "Não clicar no link e acessar o site digitando o endereço",
          "Clicar no link e preencher o formulário",
          "Responder com sua senha atual",
        ],
        correct: 0,
      },
    ],
  },
  "4-2": {
    intro: "Evite golpes comuns em redes sociais e marketplaces.",
    questions: [
      {
        type: "quiz",
        text: "Oferta de produto muito abaixo do preço com pagamento antecipado pode ser:",
        options: ["Golpe", "Promoção garantida", "Programa oficial do marketplace"],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Perfis falsos em redes sociais costumam pedir dinheiro ou dados pessoais.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Ao comprar online, o que aumenta a segurança?",
        options: [
          "Usar plataformas conhecidas e verificar avaliações",
          "Pagar por transferência para conta pessoal desconhecida",
          "Ignorar políticas de devolução",
        ],
        correct: 0,
      },
    ],
  },
  "5-0": {
    intro: "Pratique comunicação respeitosa e segura no ambiente digital.",
    questions: [
      {
        type: "quiz",
        text: "Comunicação respeitosa online inclui:",
        options: [
          "Tratar os outros com educação, mesmo em discordâncias",
          "Insultar quem pensa diferente",
          "Expor dados pessoais de terceiros",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Pensar antes de publicar ajuda a evitar conflitos desnecessários.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Recebeu mensagem agressiva. Melhor reação:",
        options: [
          "Não responder na mesma tone e buscar ajuda se necessário",
          "Retribuir com ofensas",
          "Publicar prints para humilhar a pessoa",
        ],
        correct: 0,
      },
    ],
  },
  "5-1": {
    intro: "Entenda cyberbullying e formas de lidar com conflitos digitais.",
    questions: [
      {
        type: "quiz",
        text: "Cyberbullying é:",
        options: [
          "Intimidação ou humilhação repetida pela internet",
          "Brincadeira sempre inofensiva entre amigos",
          "Denunciar conteúdo ofensivo",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Vítimas de cyberbullying devem buscar apoio de adultos de confiança.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Ao presenciar cyberbullying, você pode:",
        options: [
          "Apoiar a vítima e denunciar o conteúdo",
          "Compartilhar o conteúdo para mais pessoas verem",
          "Ignorar porque não é com você",
        ],
        correct: 0,
      },
    ],
  },
  "5-2": {
    intro: "Reflita sobre responsabilidade e cidadania no mundo digital.",
    questions: [
      {
        type: "quiz",
        text: "Cidadania digital significa:",
        options: [
          "Usar a tecnologia de forma ética, segura e responsável",
          "Postar qualquer conteúdo sem pensar",
          "Copiar trabalhos alheios sem creditar",
        ],
        correct: 0,
      },
      {
        type: "verdadeiro_falso",
        text: "Compartilhar notícias falsas pode prejudicar outras pessoas.",
        correct: true,
      },
      {
        type: "quiz",
        text: "Antes de compartilhar uma informação, o ideal é:",
        options: [
          "Verificar a fonte e a veracidade",
          "Repassar imediatamente se for sensacional",
          "Acreditar em qualquer print sem contexto",
        ],
        correct: 0,
      },
    ],
  },
};
