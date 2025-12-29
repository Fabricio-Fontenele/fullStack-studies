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
function randint(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== String) reject(new Error("Invalid value"));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Frase 1", randint("1, 3"))
  .then((Response) => {
    console.log(Response);
    return esperaAi("Frase 2", randint(1, 3));
  })
  .then((Response) => {
    console.log(Response);
    return esperaAi("Frase 3", randint(1, 3));
  })
  .then((Response) => {
    console.log(Response);
  })
  .catch((error) => {
    console.log(error);
  });
