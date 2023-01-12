const axios = require("axios");

module.exports = {
    api: async(req, res) => {
        try {
            const request = await axios({
                method: "POST",
                url: "https://citybens.com.br/tipo-consorcio",
                headers: {"Content-Type": "application/json"},
                data: req.body
            });

            res.status(200).json(request.data);
        } catch(err) {
            console.log({error_message: err});
        }
    },
    filiais: (req, res) => {
        res.render("filiais");
    },
    disponibilidade: (req, res) => {
        res.render("disponibilidade");
    },
    simulacao: (req, res) => {
        res.render("simulacao");
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
