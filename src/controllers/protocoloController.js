const service = require("../services/protocoloService");

async function criar(req, res) {
    const protocolo = await service.criarProtocolo(req.body);
    res.json(protocolo);
}

async function listar(req, res) {
    const protocolos = await service.listarProtocolos();
    res.json(protocolos);
}

module.exports = { criar, listar };