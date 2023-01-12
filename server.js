
const bodyParser = require("body-parser");

const cors = require("cors");


(function() {
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());




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
