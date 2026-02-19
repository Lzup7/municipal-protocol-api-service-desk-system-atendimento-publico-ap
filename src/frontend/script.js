async function enviar() {
  const dados = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    descricao: document.getElementById("descrição").value,
  };

  await fetch("http://localhost:3000/api/protocolos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  limparCampos();
  carregar();
}

async function carregar() {
  const resposta = await fetch("http://localhost:3000/api/protocolos");
  const protocolos = await resposta.json();
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  protocolos.forEach((p) => {
    const item = document.createElement("li");
    item.innerHTML = `${p.id} - ${p.nome_cidadao} | ${p.status}`;
    lista.appendChild(item);
  });
}
carregar();
