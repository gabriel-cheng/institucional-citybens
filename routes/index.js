const express = require("express");
const router = express.Router();
const api = require("../models/api");

router.post("/api", api);

router.get("/filiais", (request, response) => {
    response.render("filiais");
});

router.post("/disponibilidade", (request, response) => {
    response.render("disponibilidade");
});

router.post("/simulacao", (request, response) => {
    response.render("simulacao", {
        text: request.body.consorcioDadosValue,
        dadosNomeContent: request.body.dadosInputNome,
        dadosEmailContent: request.body.dadosInputEmail,
        dadosCelularContent: request.body.dadosInputCelular,
        dadosCepContent: request.body.dadosInputCep,
        dadosTermosContent: request.body.dadosInputTermos,
        formDatas: {
            nome: request.body.inputName,
            email: request.body.inputEmail,
            celular: request.body.inputCelular,
            cep: request.body.inputCep
        }
    });
});

router.post("/informe-seus-dados", (request, response) => {
    response.render("informe-seus-dados", {text: request.body.sonho});
});

router.get("/consorcio", (request, response) => {
    response.render("consorcio");
});

router.get("/", (request, response) => {
    response.render("index");
});

module.exports = router;
