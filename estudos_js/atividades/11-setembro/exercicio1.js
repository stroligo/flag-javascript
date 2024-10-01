// Inicialização de um array de refrigerantes
let refrigerantes = ['Coca-Cola', 'Fanta', 'Mirinda'];

console.log(refrigerantes);
// Saída: ['Coca-Cola', 'Fanta', 'Mirinda']
// O array é iniciado com três refrigerantes: 'Coca-Cola', 'Fanta' e 'Mirinda'.

// Adicionando um elemento ao final do array usando push()
refrigerantes.push('Sprite');

console.log(refrigerantes);
// Saída: ['Coca-Cola', 'Fanta', 'Mirinda', 'Sprite']
// O método push adiciona 'Sprite' ao final do array.

// Removendo o último elemento do array usando pop()
refrigerantes.pop();

console.log(refrigerantes);
// Saída: ['Coca-Cola', 'Fanta', 'Mirinda']
// O método pop remove o último elemento do array, que era 'Sprite'.

// Adicionando um elemento no início do array usando unshift()
refrigerantes.unshift('Sprite');

console.log(refrigerantes);
// Saída: ['Sprite', 'Coca-Cola', 'Fanta', 'Mirinda']
// O método unshift insere 'Sprite' no início do array.

// Removendo o primeiro elemento do array usando shift()
refrigerantes.shift();

console.log(refrigerantes);
// Saída: ['Coca-Cola', 'Fanta', 'Mirinda']
// O método shift remove o primeiro elemento do array, que era 'Sprite'.

/* 
    Usando o método splice() para manipular o array:

    array.splice(index, quantidadeDeElementos);
    - index: posição inicial para remover ou adicionar elementos.
    - quantidadeDeElementos: número de elementos a serem removidos.
*/

// Exemplo: Removendo 1 elemento no índice 1 ('Fanta')
refrigerantes.splice(1, 1);

console.log(refrigerantes);
// Saída: ['Coca-Cola', 'Mirinda']
// O método splice remove o elemento no índice 1 ('Fanta').

// Exemplo: Inserindo um elemento no índice 1 ('Pepsi')
refrigerantes.splice(1, 0, 'Pepsi');

console.log(refrigerantes);
// Saída: ['Coca-Cola', 'Pepsi', 'Mirinda']
// O método splice insere 'Pepsi' no índice 1, movendo os elementos subsequentes.
