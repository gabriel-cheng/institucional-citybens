const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiRouter = router.post('/api8465378731184354684', async(req, res) => {
    try {
        const request = await axios({
            method: 'POST',
            url: 'https://citybens.com.br/tipo-consorcio',
            headers: {"Content-Type": "application/json"},
            data: req.body
        });

        res.status(200).send(request.data);
    }catch(err) {
        console.log({error_message: err});
    }
});

module.exports = apiRouter;
