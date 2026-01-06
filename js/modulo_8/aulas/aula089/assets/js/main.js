// Faz a requisição para buscar o arquivo JSON
fetch("pessoas.json")
  .then((Response) => Response.json()) // Converte a resposta em JSON
  .then((json) => loadContent(json)); // Passa os dados para a função que cria a tabela

// Função que cria e renderiza a tabela com os dados do JSON
function loadContent(json) {
  const table = document.createElement("table"); // Cria o elemento <table>

  // Itera sobre cada pessoa no array JSON
  for (let person of json) {
    const tr = document.createElement("tr"); // Cria uma nova linha <tr>

    // Cria célula para o nome
    let td = document.createElement("td");
    td.innerHTML = person.nome;
    tr.appendChild(td); // Adiciona a célula na linha

    // Cria célula para a idade
    td = document.createElement("td");
    td.innerHTML = person.idade;
    tr.appendChild(td);

    // Cria célula para o salário
    td = document.createElement("td");
    td.innerHTML = person.salario;
    tr.appendChild(td);

    table.appendChild(tr); // Adiciona a linha completa na tabela
  }

  // Seleciona a div onde a tabela será inserida
  const resultado = document.querySelector(".persons");
  resultado.appendChild(table); // Insere a tabela na div
}
