// function meuEscopo() {
//   const form = document.querySelector("form");
//   const resultado = document.querySelector(".resultado");

//   function recebeEventoForm(evento) {
//     evento.preventDefault();
//     const peso = document.getElementById("peso");
//     const altura = document.getElementById("altura");

//     if (!peso.value || !altura.value || isNaN(imc)) {
//       resultado.innerHTML = `<p>Preencha os campos corretamente!</p>`;
//       return;
//     }

//     let imc = Number(peso.value / altura.value ** 2);

//     imc = imc.toFixed(2);
//     if ((imc < 18, 5)) {
//       resultado.innerHTML = `<p>seu IMC é ${imc} (Abaixo do peso) </p>`;
//     } else if (imc >= 18.5 && imc <= 24.9) {
//       resultado.innerHTML = `<p>seu IMC é ${imc} (Peso normal) </p>`;
//     } else if (imc >= 25 && imc <= 29.9) {
//       resultado.innerHTML = `<p>seu IMC é ${imc} (sobrepeso) </p>`;
//     } else if (imc >= 30 && imc <= 34.9) {
//       resultado.innerHTML = `<p>seu IMC é ${imc} (obesidade grau 1) </p>`;
//     } else if (imc >= 35 && imc <= 39.9) {
//       resultado.innerHTML = `<p>seu IMC é ${imc} (obesidade grau 2) </p>`;
//     } else {
//       resultado.innerHTML = `<p>seu IMC é ${imc} (obesidade grau 3) </p>`;
//     }
//   }
// }
//   form.addEventListener("submit", recebeEventoForm);
// }

// meuEscopo();

const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
