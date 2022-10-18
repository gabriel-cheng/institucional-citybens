const express = require('express');
const router = express.Router();

router.get('/filiais', (request, response) => {
    response.render('filiais');
});

router.post('/disponibilidade', (request, response) => {
    response.send(
        '<h1>Recebi seus dados!</h1><br><br>' +
        `Nome: ${request.body.simulacaoInputNome}<br>` +
        `Email: ${request.body.simulacaoInputEmail}<br>` +
        `Celular: ${request.body.simulacaoInputCelular}<br>` +
        `Cep: ${request.body.simulacaoInputCep}<br>` +
        `Consórcio: ${request.body.consorcioDadosValue}<br>` +
        `Valor: ${request.body.valorPagar}<br>` +
        `Parcelas: ${request.body.valorParcelas}`
    );
});

router.post('/simulacao', (request, response) => {
    response.render('simulacao', {
        text: request.body.consorcioDadosValue,
        formDatas: {
            nome: request.body.inputName,
            email: request.body.inputEmail,
            celular: request.body.inputCelular,
            cep: request.body.inputCep
        }
    });
});

router.post('/informe-seus-dados', (request, response) => {
    response.render('informe-seus-dados', {text: request.body.sonho});
});

router.get('/consorcio', (request, response) => {
    response.render('consorcio');
});

router.get('/', (request, response) => {
    response.render('index');
});

module.exports = router
