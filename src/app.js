const express = require("express");
const app = express();

app.use(express.json());

const protocoloRoutes = require("./routes/protocoloRoutes");
app.use("/api", protocoloRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});