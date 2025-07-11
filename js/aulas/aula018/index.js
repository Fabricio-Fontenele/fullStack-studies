// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }

// const pessoal = criaPessoa("luiza", "otavio", 25);

// Objeto que representa uma pessoa, com propriedades e métodos
const pessoa1 = {
  nome: "Luiz", 
  sobrenome: "Miranda", 
  idade: 25, 

  // Método que exibe a idade atual no console
  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  // Método que incrementa a idade em 1
  incrementaIdade() {
    this.idade++;
  },
};

// Exibe a idade atual
pessoa1.fala();

// Incrementa a idade em 1 e exibe novamente
pessoa1.incrementaIdade();
pessoa1.fala();

// Repete o processo de incrementar e exibir
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.incrementaIdade();
pessoa1.fala();
