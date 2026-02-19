const express = require("express");
const cors = require("cors");

const app = express();

app.use = express();

app.get("/", (req,res) => {res.send("API Protocolo funcionando")});

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")} );
