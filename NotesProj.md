# Anotações Gerai do Projeto

Este documento tem como propósito registrar os conhecimentos adquiridos e as lições aprendidas durante o desenvolvimento deste projeto. Para sua realização, foi utilizado como referência o vídeo do canal [DevClub](https://youtu.be/a8YvzTXft9c?si=PLQQLDcG36F2Kmc0).

## Componentes do React Native

> ### **1° TouchableOpacity**

- O **TouchableOpacity** envolve componentes para torná-los responsivos ao toque, com um efeito de esmaecimento de opacidade ao pressionar.

### Propiedades que acompanham esse componente:
- **``onPress``**: Função chamada quando o componente é pressionado.

- **``activeOpacity``**: Valor de opacidade (0 a 1) quando pressionado (padrão: 0.2).

- **``style``**: Estilos para o contêiner sensível ao toque.

- **``disabled``**: Se true, desativa eventos de toque.

> ### **2° KeyboardAvoidingView**

- O **KeyboardAvoidingView** ajusta o conteúdo da tela com base no comportamento do teclado, movendo os elementos para cima quando o teclado aparece.

### Propiedades que acompanham esse componente:
- **``behavior``**: Define como o componente ajusta o layout. Valores comuns:

    - ``padding``: Adiciona espaço na parte inferior (ideal para iOS).
    - ``height:`` Ajusta a altura do componente (mais comum no Android).
    - ``position``: Ajusta a posição do conteúdo.

- **``keyboardVerticalOffset``**: Ajusta a distância vertical (em pixels) para compensar barras de navegação ou outros elementos fixos.

- **``style``**: Estilos para o contêiner.

- **``enabled``**: Se false, desativa o comportamento de ajuste (padrão: true).
 
> ### **3° ScrollView**

- O **ScrollView** envolve componentes para permitir rolagem vertical (ou horizontal, se configurado). Ele renderiza todos os elementos de uma vez, mesmo que não estejam visíveis.

### Propiedades que acompanham esse componente:
- **``horizontal``**: Se true, habilita rolagem horizontal (padrão: false, rolagem vertical).

- **``showsVerticalScrollIndicator`` / ``showsHorizontalScrollIndicator``**: Mostra ou oculta a barra de rolagem (padrão: true).

- **``contentContainerStyle``**: Estilos para o contêiner interno que segura o conteúdo (diferente do style, que estiliza o próprio ScrollView).

- **``keyboardShouldPersistTaps``**: Útil em formulários para controlar cliques quando o teclado está aberto ('always', 'never', 'handled').

> ### **4° StatusBar**

- O **StatusBar** pode ser configurado para alterar a cor de fundo, estilo do texto (claro ou escuro) e visibilidade da barra de status.

### Propiedades que acompanham esse componente:
- **``backgroundColor``**: Define a cor de fundo da barra de status (funciona no Android; no iOS, use com translucent={false}).

- **``barStyle``**: Define o estilo dos ícones/texto:

    - ``light-content``: Ícones brancos (para fundos escuros).
    - ``dark-content``: Ícones pretos (para fundos claros).
    - ``default``: Estilo padrão do sistema.

- **``hidden``**: Se ``true``, oculta a barra de status (padrão: ``false``).

- **``translucent``**: Se ``true``, o conteúdo da aplicação aparece sob a barra de status (comum no Android; padrão: false).

- **``animated``**: Se ``true``, alterações nas propriedades são animadas (padrão: ``true``).

> ### **5° View**

- O **View** é usado para agrupar e estilizar componentes, funcionando como um contêiner flexível.

### Propiedades que acompanham esse componente:
- **``style``:** Define estilos como flex, backgroundColor, margin, padding, etc., usando a sintaxe do React Native (similar ao CSS, mas com camelCase).

- **``onLayout``**: Função chamada quando o layout do componente é calculado, útil para obter dimensões.

- Suporta eventos de acessibilidade, como ``accessible`` e ``accessibilityLabel``.

> ### **6° ActivityIndicator**

- O **ActivityIndicator** é simples de usar e pode ser personalizado com propriedades como tamanho e cor.

### Propiedades que acompanham esse componente:
- **``size``**: Define o tamanho do indicador. Valores:

    - ``small``: Tamanho pequeno.
    - ``large``: Tamanho grande (padrão).

- **``color``**: Define a cor do indicador.

- **``animating``**: Se false, oculta o indicador (padrão: true).

- **``style``**: Aplica estilos ao contêiner do indicador (geralmente usado com View pai).

