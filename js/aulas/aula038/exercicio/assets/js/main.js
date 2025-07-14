// Seleciona todos os elementos <p> da página
const ps = document.querySelectorAll("p");

// Pega os estilos computados do <body>
const bodyStyle = getComputedStyle(document.body);

// Extrai a cor de fundo do <body>
const backgroundColorBody = bodyStyle.backgroundColor;

// Mostra no console o valor da cor de fundo do body
console.log(backgroundColorBody);

// Aplica a cor de fundo e a cor do texto a todos os parágrafos
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody; // Fundo igual ao body
  p.style.color = '#FFFFFF'; // Texto branco
}
