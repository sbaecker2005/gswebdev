# 🌎 Climate Simulator – IA para Cidades Inteligentes

Este repositório contém um simulador interativo que estima o risco de enchentes em áreas urbanas com base em variáveis como volume de chuva, porte da cidade, infraestrutura urbana e presença de corpos hídricos.

## 🧩 Estrutura do Código

### `index.html`

Responsável por estruturar visualmente a aplicação. Dividido em seções:

- **Cabeçalho (`<header>`)**: Título e slogan do projeto.
- **Sessão "A Tempestade Não Avisou"**: Introdução com storytelling, incluindo imagem ilustrativa (`Helicoptero.jpg`).
- **Sessão "E Se Pudéssemos Prever?"**: Justificativa do projeto e proposta de valor.
- **Sessão "Como Funciona"**: Explicação técnica das variáveis usadas na simulação.
- **Sessão de Simulação**:
  - Inputs: menus suspensos e campo numérico.
  - Botão de ação: dispara a função `simular()` em JavaScript.
  - Div `resultado`: exibe a resposta com o nível de risco.

### `assets/js/script.js`

Arquivo JavaScript que executa a lógica da simulação. Explicação passo a passo:

1. **Captura dos valores dos inputs** (cidade, infraestrutura, chuva, topografia e corpo hídrico).
2. **Validação básica**: Garante que todos os campos estejam preenchidos corretamente.
3. **Classificação do risco**:
   - Risco inicial é “BAIXO”.
   - Se o volume de chuva for alto (> 100 mm), o risco é elevado.
   - Condições combinadas (cidade grande + má infraestrutura + topografia plana + corpo hídrico próximo + chuva moderada) elevam o risco para "ALTO".
   - Condições medianas classificam como “MÉDIO”.
4. **Exibição do resultado** no HTML com formatação e cores.

### `assets/css/style.css`

Contém ajustes visuais complementares ao Tailwind CSS:

- Gradiente de fundo para o `body`.
- Animações de `hover` nas seções e botões.
- Estilo para links no `footer`.
- (Opcional) Classe `.img-helicoptero` pode ser usada para estilizar imagens circulares.

---

## 🧪 Como Usar

1. **Abra o `index.html` em seu navegador**.
2. Preencha os campos com os dados da cidade ou cenário desejado.
3. Clique em “Simular Risco”.
4. O resultado será exibido com base nas variáveis inseridas.

---

## 📂 Estrutura de Pastas

