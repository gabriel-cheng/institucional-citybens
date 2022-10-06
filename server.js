const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = require('./routes/index');

(function configs() {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.use(express.static('public'));
})();

(function rotas() {
    app.use('/', router);
})();

(function() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Access: http://localhost:${port}`);
    });
})();
