// function randint(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function esperaAi(msg, tempo, callback) {
//   setTimeout(() => {
//     console.log(msg);
//     if (callback) callback();
//   }, tempo);
// }

// esperaAi("Frase 1", randint(1, 3), () => {
//   esperaAi("Frase 2", randint(1, 3), () => {
//     esperaAi("Frase 3", randint(1, 3));
//   });
// }); metodo antigo com callback

// Refatorando com Promises

// Gera um número aleatório entre min e max em milissegundos
function randint(min, max) {
  min *= 1000; // Converte para milissegundos
  max *= 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Retorna uma Promise que espera um tempo antes de resolver
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    // Valida se a mensagem é uma string
    if (typeof msg !== "string") reject(new Error("Invalid value"));

    // Aguarda o tempo especificado e depois resolve a Promise com a mensagem
    setTimeout(() => {
      resolve(msg); // Resolve = sucesso! Passa a mensagem adiante
    }, tempo);
  });
}

// ========== MÉTODO 1: Usando .then() ==========
// Encadeamento de Promises - cada .then() espera a anterior terminar
// esperaAi("Fase 1", randint("1, 3"))
//   .then((Response) => {
//     console.log(Response);
//     return esperaAi("Fase 2", randint(1, 3)); // Retorna outra Promise
//   })
//   .then((Response) => {
//     console.log(Response);
//     return esperaAi("Fase 3", randint(1, 3));
//   })
//   .then((Response) => {
//     console.log(Response);
//   })
//   .catch((error) => {
//     console.log(error); // Captura qualquer erro na cadeia
//   });

// ========== MÉTODO 2: Usando async/await ==========
// Mesma coisa que acima, mas com sintaxe mais limpa e legível
async function executa() {
  try {
    // await "pausa" a execução até a Promise resolver
    const fase1 = await esperaAi("fase 1", randint(1, 3));
    console.log(fase1);

    const fase2 = await esperaAi("fase 2", randint(1, 3));
    console.log(fase2);

    const fase3 = await esperaAi("fase 3", randint(1, 3));
    console.log(fase3);
  } catch {
    (error) => {
      console.log("erro:", error); // Captura qualquer erro no try
    };
  }
}

// Executa a função assíncrona
executa();
