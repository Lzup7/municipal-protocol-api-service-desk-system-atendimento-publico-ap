const express = require("express");
const cors = require("cors");
<<<<<<< HEAD

const app = express();

app.use = express();

app.get("/", (req,res) => {res.send("API Protocolo funcionando")});

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")} );
=======
const app = express();

app.use(cors()); // mudei aqui "app.use = express();, para ser app.use(cors());"
app.use(express.json());

let protocolos = [];

app.get("/", (req, res) => {
  res.send("API Protocolo funcionando");
});

app.get("/api/protocolos", (req, res) => {
  res.json(protocolos);
});

app.post("/api/protocolos", (req, res) => {
  const novo = {
    id: protocolos.length + 1,
    nome_cidadao: req.body.nome,
    cpf: req.body.cpf,
    descricao: req.body.descricao,
    status: "Pendente",
  };
  protocolos.push(novo);
  res.status(201).json(novo);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
>>>>>>> 22f39c8 (feat: interface de protocolos e integracao inicial)
