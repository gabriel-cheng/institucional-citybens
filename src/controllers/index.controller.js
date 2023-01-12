module.exports = {
    filiais: (req, res) => {
        res.render("filiais");
    },
    disponibilidade: (req, res) => {
        res.render("disponibilidade");
    },
    simulacao: (req, res) => {
        res.render("simulacao", {
            text: req.body.consorcioDadosValue,
            dadosNomeContent: req.body.dadosInputNome,
            dadosEmailContent: req.body.dadosInputEmail,
            dadosCelularContent: req.body.dadosInputCelular,
            dadosCepContent: req.body.dadosInputCep,
            dadosTermosContent: req.body.dadosInputTermos,
            formDatas: {
                nome: req.body.inputName,
                email: req.body.inputEmail,
                celular: req.body.inputCelular,
                cep: req.body.inputCep
            }
        });
    },
    informeSeusDados: (req, res) => {
        res.render("informe-seus-dados", {text: req.body.sonho});
    },
    consorcio: (req, res) => {
        res.render("consorcio");
    },
    index: (req, res) => {
        res.render("index");
    }
};
