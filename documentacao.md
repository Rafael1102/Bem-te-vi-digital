# Documentação de Desenvolvimento - Projeto Guardião Digital

## 1. Visão Geral do Sistema
O **Guardião Digital** é um Ambiente Virtual de Aprendizagem (AVA) gamificado focado na capacitação de usuários em práticas de segurança da informação, privacidade e Netiqueta. O front-end utiliza uma metáfora visual de "trilha de aprendizagem" inspirada em aplicativos de sucesso como o Duolingo, focada em simplicidade e engajamento.

## 2. Tecnologias Utilizadas
- **HTML5**: Estrutura semântica dos componentes.
- **CSS3**: Estilização baseada em variáveis (Custom Properties) para fácil manutenção de cores e temas.
- **JavaScript (ES6)**: Manipulação do DOM e lógica básica de estado da aplicação.

## 3. Requisitos de Engenharia de Software
### Requisitos Funcionais (RF)
- **RF01 - Trilha Temática**: O sistema organiza o conteúdo em módulos sequenciais.
- **RF02 - Gamificação**: Registro de progresso através de XP (Experience Points).
- **RF03 - Feedback Imediato**: Notificação de conclusão de tarefas em tempo real.
- **RF04 - Controle de Acesso**: Módulos bloqueados conforme pré-requisitos (simulado visualmente).

### Requisitos Não Funcionais (RNF)
- **RNF01 - Usabilidade**: Interface intuitiva azul e branca com alta acessibilidade.
- **RNF02 - Desempenho**: Carregamento leve e execução direta no navegador sem dependências externas.

## 4. Estrutura de Arquivos
- `index.html`: Ponto de entrada e esqueleto da aplicação.
- `styles.css`: Definições visuais e layout.
- `script.js`: Comportamento dinâmico e eventos.
