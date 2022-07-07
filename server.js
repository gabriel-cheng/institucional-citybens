(function() {
    const express = require('express');
    const app = express();
    const exphbs = require('express-handlebars');
    const bodyParser = require('body-parser');
    
    // Configs
    (function() {
        app.use(bodyParser.urlencoded({ extended: false}));
        app.use(bodyParser.json());

        app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        app.use(express.static('public'));
    })();

    // Routes
    (function() {
        app.get('/', (require, response) => {
            response.render('content', {
                style: {
                    default: 'default.css',
                    header: 'header.css',
                    content: 'content.css',
                    footer: 'footer.css',
                }
            });
        });

        app.post('/disponibilidade', (require, response) => {
            response.send(
                '<h1>Recebi seus dados!</h1><br><br>' +
                `Valor: ${require.body.valorPagar}<br>` +
                `Parcelas: ${require.body.valorParcelas}`
            );
        });
    })();

    // Port config
    (function() {
        const port = 5000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
            console.log(`Access: http://localhost:${port}`);
        });
    })();
})();