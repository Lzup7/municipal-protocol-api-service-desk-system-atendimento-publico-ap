const pool = require("../config/database");

async function criarProtocolo(dados) {
    const { nome, cpf, descricao } = dados;

    const result = await pool.query(
        `INSERT INTO protocolos (nome_cidadao, cpf, descricao)
         VALUES ($1,$2,$3)
         RETURNING *`,
        [nome, cpf, descricao]
    );

    return result.rows[0];
}

async function listarProtocolos() {
    const result = await pool.query("SELECT * FROM protocolos ORDER BY id DESC");
    return result.rows;
}

module.exports = { criarProtocolo, listarProtocolos };