const num1 = Number(prompt("Digite um numero:"));

document.body.innerHTML = `<strong>Seu numero é ${num1} </strong><br />`;
document.body.innerHTML += `a raiz quadrada: ${num1 ** 0.5} <br />`;
document.body.innerHTML += `${num1} é inteiro: ${Number.isInteger(
  num1
)} <br />`;
document.body.innerHTML += `é NaN: ${Number.isNaN(num1)} <br />`;
document.body.innerHTML += `arredondando para baixo: ${Math.floor(
  num1
)} <br />`;
document.body.innerHTML += `arredondando para cima: ${Math.ceil(num1)} <br />`;
document.body.innerHTML += `com duas casas decimais: ${num1.toFixed(2)} <br />`;
