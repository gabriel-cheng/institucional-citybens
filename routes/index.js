const express = require('express');
const router = express.Router();
const api = require('../models/api');

router.post('/api', api);

router.get('/filiais', (request, response) => {
    response.render('filiais');
});

router.post('/disponibilidade', (request, response) => {
    response.send(
        '<h1>Recebi seus dados!</h1><br><br>' +
        `Nome: ${request.body.simulacaoHiddenDadoNome}<br>` +
        `Email: ${request.body.simulacaoHiddenDadoEmail}<br>` +
        `Celular: ${request.body.simulacaoHiddenDadoCelular}<br>` +
        `Cep: ${request.body.simulacaoHiddenDadoCep}<br>` +
        `Termos: ${request.body.simulacaoHiddenDadoTermos}<br>` +
        `Consórcio: ${request.body.consorcioDadosValue}<br>` +
        `Valor: ${request.body.valorPagar}<br>` +
        `Parcelas: ${request.body.valorParcelas}`
    );
});

router.post('/simulacao', (request, response) => {
    if(request.body.dadosInputTermos.value == 'on') {
        dadosInputTermos.value = 'paranaue'
    }

    response.render('simulacao', {
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
