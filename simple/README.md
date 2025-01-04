# Simple

Exemplo simples de aplicação de um useReducer, no qual é criado um contador com as funções de incremento, decremento e reset.

Na imagem a seguir podemos ver o numérico, indicando qual o número atual, e os botões de incremento (+), decremento (-) e o botão de reset (representado pela seta circular). Ao clicar em qualquer botão será disparado um evento de click que chamará a respectiva função, essa função, por sua vez, acionará o reducer que fará o processo de incremento, decremento ou reset.

![Página inicial do projeto em execução](./docs/initial-page.png)

## Links arquivos importantes do exemplo

1. [Arquivo que cria a função para o reducer](./src/countReducer/index.js);
2. [Arquivo com as constantes utilizadas no reducer e na chamada de cada função](./src/countReducer/actions-type.js);
3. [Arquivo onde o reducer é utilizado](./src/App.js).