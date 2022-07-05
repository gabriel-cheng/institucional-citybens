(function() {
    const express = require('express');
    const app = express();
    const exphbs = require('express-handlebars');
    
    // Configs
    (function() {
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
