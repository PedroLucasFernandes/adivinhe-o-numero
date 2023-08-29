# Sistema de verificação de PIN

## Como foi desenvolvido
Utilizei como linguagem principal o JavaScript, mas o programa irá funcionar em uma página WEB por meio do arquivo ``index.html``. O sistema oferece um número randômico até 10 mil, seu objetivo é adivinhar o número seguindo as dicas oferecidas pelo aplicativo.

A ferramenta escolhida para o desenvolvimento foi o Visual Studio Code, respeitando a seguinte estrutura de pastas e arquivos:
```bash
src/
├─ main.js
index.html
.gitignore
README.md
```
### Explicação das funções
O código foi bem objetivo, portanto temos apenas duas funções: ``verificarInput(input)`` e ``verificarNumero(palpitePin)``.

A primeira serve para verificar se o valor inserido pelo usuário é um número de no mínimo quatro dígitos, caso contrário, um aviso aparecerá. Esta verificação é feita através da Expressão Regular ``/^[0-9]{4,}$/``.

Se realmente for um número de quatro ou mais dígitos (o que é esperado), ``verificarInput(input)`` irá "chamar" a outra função.

Já ``verificarNumero(palpitePin)`` tem como objetivo realizar o processamento do número que o usuário escolheu, devolvendo uma dica, ou uma mensagem de parabéns caso o palpite seja certeiro.

## Como utilizar o sistema
Ao abrir o programa, uma caixa de alerta será disponibilizada com a mensagem "Adivinhe o número de no mínimo 4 dígitos:", e com um espaço para o usuário registrar um número.

O primeiro passo é citar um número válido. Depois, uma nova mensagem aparecerá, sendo uma dica, ou uma mensagem de parabéns pelo acerto.

As dicas serão:

- O número esperado é muito menor que seu palpite.
- O número esperado é menor que seu palpite.
- O número esperado é maior que seu palpite.
- O número esperado é muito maior que seu palpite.

O "muito" aparece antes do "maior" ou "menor" no alerta, se a diferença entre o palpite e o número correto for mais que 500.

Siga as dicas até chegar no número que foi escolhido de maneira aleatória pelo código. Quando encontrá-lo, o jogo acaba.