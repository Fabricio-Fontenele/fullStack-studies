/*
Tipos primitivos (imutáveis):
- string, number, boolean, undefined, null, bigint, symbol
- Quando atribuídos a uma nova variável, o valor é copiado (não afeta o original).

Tipos de referência (mutáveis):
- array, object, function
- Quando atribuídos a uma nova variável, é passada a referência (apontam para o mesmo local na memória).
*/

// Exemplo com array (tipo de referência)
let a = [1, 2, 3]; // 'a' aponta para o array [1, 2, 3]

// Cria uma cópia superficial de 'a' usando spread (...), então 'b' é um novo array independente
let b = [...a];

// 'c' recebe a referência de 'b', ou seja, 'c' e 'b' apontam para o mesmo array
let c = b;

console.log(a, b);

// Adiciona elemento ao array 'a'. 'b' não é afetado, pois é uma cópia independente
a.push(4);
console.log(a, b);

// Remove o último elemento de 'b' (e de 'c', pois ambos são o mesmo array)
// 'a' permanece inalterado
b.pop();
console.log(a, b);

// Adiciona um elemento ao array 'a'. 'b' e 'c' não são afetados.
a.push("luiz");
console.log(c);

// ----------------------------------------------------------
// Exemplo com objetos (também tipo de referência)

// const a = {
//   nome: "Luiz",
//   sobrenome: "Otávio",
// };

// const b = a; // 'b' recebe a referência do mesmo objeto que 'a'

// b.nome = "João"; // Modificando através de 'b' afeta 'a' também

// console.log(a);
// console.log(b);
