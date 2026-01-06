// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject({
//           code: xhr.status,
//           msg: xhr.statusText,
//         });
//       }
//     });
//   });
// };

// Adiciona um listener de cliques no documento inteiro
document.addEventListener("click", (e) => {
  const element = e.target; // Pega o elemento que foi clicado
  const tag = element.tagName.toLowerCase(); // Pega o nome da tag em minúsculas

  // Se o elemento clicado for um link (<a>)
  if (tag === "a") {
    e.preventDefault(); // Previne o comportamento padrão (navegação)
    loadPageContent(element); // Carrega o conteúdo via AJAX
  }
});

// function loadPageContent(element) {
//   const href = element.getAttribute("href");
//   fetch(href)
//     .then((response) => {
//       if (response.status !== 200) throw new Error(`error ${response.status}`);
//       return response.text();
//     })
//     .then((html) => {
//       loadResult(html);
//     })
//     .catch((e) => console.log("error:", e));
// }
// Função assíncrona que carrega o conteúdo da página
async function loadPageContent(element) {
  const href = element.getAttribute("href"); // Pega o atributo href do link
  const response = await fetch(href); // Faz a requisição HTTP (aguarda a resposta)

  try {
    // Se o status da resposta não for 200 (sucesso), lança um erro
    if (response.status !== 200) throw new Error(`error ${response.status}`);

    const html = await response.text(); // Converte a resposta em texto (aguarda a conversão)
    loadResult(html); // Injeta o HTML na página
  } catch (e) {
    console.log(e); // Captura e exibe qualquer erro
  }
}

// Função que injeta o HTML recebido na div de resultado
function loadResult(response) {
  const result = document.querySelector(".resultado"); // Seleciona a div com classe "resultado"
  result.innerHTML = response; // Insere o HTML recebido dentro da div
}
