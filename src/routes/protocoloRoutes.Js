const express = require("express");
const router = express.Router();

const controller = require("../controllers/protocoloController");

router.post("/protocolos", controller.criar);
router.get("/protocolos", controller.listar);

module.exports = router;