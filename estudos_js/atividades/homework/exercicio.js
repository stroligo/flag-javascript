/* Testes JS */
/* Escreva um programa que imprima o nome com mais caracteres em um array de nomes. */

let names = ['Josie', 'Cathrin', 'Bob', 'Max', 'Hannah', 'Alex'];
let big = '';

for (let i = 0; i < names.length; i++) {
  if (names[i].length > big.length) {
    big = names[i];
  }
}
console.log('Maior nome: ' + big);
