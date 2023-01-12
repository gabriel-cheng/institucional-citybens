const router = require("express").Router();
const controller = require("../controllers/index.controller");

router.post("/api", controller.api);
router.get("/filiais", controller.filiais);
router.post("/disponibilidade", controller.disponibilidade);
router.post("/simulacao", controller.simulacao);
router.post("/informe-seus-dados", controller.informeSeusDados);
router.get("/consorcio", controller.consorcio);
router.get("/", controller.index);

module.exports = router;
