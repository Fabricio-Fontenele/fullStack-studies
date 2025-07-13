const elementos = [
  { tag: "p", texto: "qualquer texto que voce quiser" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i in elementos) {
  let { tag, texto } = elementos[i];
  let creatingTag = document.createElement(tag);
  let creatingText = document.createTextNode(texto);

  creatingTag.appendChild(creatingText);
  div.appendChild(creatingTag);
}

container.appendChild(div);
