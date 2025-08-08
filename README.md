# CâmbioEx -  Conversor de Moedas

<p>Este é um aplicativo móvel desenvolvido com React Native e Expo que permite converter valores entre diferentes moedas. O app utiliza uma API externa para obter as taxas de câmbio em tempo real e oferece uma interface simples e intuitiva para os usuários.</p>

## Funcionalidades
- Conversão de valores entre moedas como USD, BRL, EUR, GBP, JPY, CAD, AUD, CHF.

- Seleção de moedas de origem e destino através de botões interativos.

- Troca rápida de moedas com um botão dedicado (↑↓).

- Exibição do resultado da conversão e da taxa de câmbio utilizada.

- Indicador de carregamento durante a requisição à API.

- Validação de entrada para garantir que apenas valores numéricos sejam aceitos.

## Tecnologias Utilizadas
- **React Native:** Framework para construção de aplicativos móveis multiplataforma.

- **Expo:** Ferramenta para desenvolvimento, build e deploy de aplicativos React Native.

- **JavaScript:** Linguagem principal para a lógica do aplicativo.

- **ExchangeRate-API:** API utilizada para obter as taxas de câmbio em tempo real.

## Pré-requisitos
- Node.js (versão 14 ou superior).

- Expo CLI instalado globalmente ``npm install -g expo-cli``.

- Uma chave de API válida da ExchangeRate-API, obtenha em [ExchangeRate-API](https://www.exchangerate-api.com/)

## Instalação

### **1°** Clone o repositório:
    git clone https://github.com/seu-usuario/ConversionApp.git
    cd ConversionApp

### **2°** Instale as dependências:
    npm install

### **3°** Configure a chave de API:
- Abra o arquivo ``src/services/api.js``.

    - Substitua SUA-CHAVE-API pela sua chave válida na constante BASE_URL.

### **4°** Inicie o aplicativo:
    npx expo start --tunnel

- Use o Expo Go no seu celular para escanear o QR code ou abra em um emulador.

## Estrutura do Projeto

    ConversionApp/
    ├── src/
    │   ├── components/        # Componentes reutilizáveis (Button, Input, ResultCard)
    │   ├── constants/         # Constantes como lista de moedas
    │   ├── services/          # Lógica de chamada à API
    │   ├── utils/             # Funções utilitárias (ex.: conversão)
    │   └── styles/            # Estilos globais
    ├── App.js                 # Componente principal do aplicativo
    ├── App.styles.js          # Estilos específicos do App
    ├── package.json           # Dependências e scripts
    ├── README.md              
    └── ...                    # Outros arquivos de configuração

## Como Utilizar o Aplicativo
- Selecione a moeda de origem e o valor a ser convertido.

- Escolha a moeda de destino.

- Pressione o botão "Converter" para ver o resultado.

- Use o botão **"↑↓"** para trocar as moedas de origem e destino.
