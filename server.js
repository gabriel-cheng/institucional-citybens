const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const router = require("./routes/index");
const cors = require("cors");
const path = require("path");

(function() {
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.set("view engine", "handlebars");

    app.use(express.static("public"));
    app.use(express.json());

    app.set('views', path.join(__dirname, 'views'));

    app.engine('handlebars', exphbs.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials')}
    ));
})();

(function() {
    app.use("/", router);
    app.use("/api", router);
})();

(function() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Access: http://localhost:${port}`);
    });
})();
