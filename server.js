const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const cors = require('cors');

(function() {
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.use(express.static('public'));
    app.use(express.json());
})();

(function() {
    app.use('/', router);
    app.use('/api', router);
})();

(function() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Access: http://localhost:${port}`);
    });
})();
