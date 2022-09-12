(function() {
    const express = require('express');
    const app = express();
    const exphbs = require('express-handlebars');
    const bodyParser = require('body-parser');

    // Configs
    (function() {
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

        app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        app.use(express.static('public'));
    })();

    // Routes
    (function() {
        app.get('/filiais', (request, response) => {
            response.render('Filiais');
        });

        app.post('/disponibilidade', (request, response) => {
            response.send(
                '<h1>Recebi seus dados!</h1><br><br>' +
                `Consórcio: ${request.body.consorcioDadosValue}<br>` +
                `Valor: ${request.body.valorPagar}<br>` +
                `Parcelas: ${request.body.valorParcelas}`
            );
        });

        app.post('/simulacao', (request, response) => {
            response.render('simulacao', {text: request.body.consorcioDadosValue});
        });

        app.post('/informe-seus-dados', (request, response) => {
            response.render('informe-seus-dados', {text: request.body.sonho});
        });

        app.get('/consorcio', (request, response) => {
            response.render('consorcio');
        });

        app.get('/', (request, response) => {
            response.render('index');
        });
    })();

    // Port config
    (function() {
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
            console.log(`Access: http://localhost:${port}`);
        });
    })();
})();
