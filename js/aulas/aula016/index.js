// Índices:    0       1        2
let alunos = ["Luiz", "Maria", "João"];

// Exemplo de sobrescrita do array por um número (não recomendado, apenas para demonstração)
alunos = 123;

// Verifica o tipo da variável 'alunos' (depois de sobrescrever, será 'number')
console.log(typeof alunos);
// Verifica se 'alunos' ainda é uma instância de Array (será 'false' após sobrescrever)
console.log(alunos instanceof Array);

// -------------------
// Manipulação do array 'alunos':
// -------------------

// Adiciona elementos ao final do array
// alunos.push('Luiza');
// alunos.push('Eduardo');

// Retorna uma cópia do array do índice 0 até o penúltimo elemento (não modifica o array original)
// console.log(alunos.slice(0, -2));

// Remove o último elemento do array
// alunos.pop();

// Remove o primeiro elemento do array
// alunos.shift();

// Acessa um índice que não existe (retorna undefined)
// console.log(alunos[50]);

// Remove o elemento do índice especificado, deixando o valor como 'undefined'
// delete alunos[1];
// console.log(alunos[1]);

// Remove e retorna o primeiro elemento do array
// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);

// Adiciona elementos no início do array
// alunos.unshift('Fábio');
// alunos.unshift('Luiza');

// Adiciona elementos ao final do array
// alunos.push('Luiza');
// alunos.push('Fábio');

// Outra forma de adicionar elementos ao final do array usando o comprimento atual
// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// Altera o valor de um índice específico do array
// alunos[0] = 'Eduardo'; // Altera o primeiro elemento
// alunos[3] = 'Luiza';   // Adiciona um novo elemento na posição 3

// Exibindo o array e elementos específicos
// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);
