const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const router = require("./router/index.router");
const path = require("path");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());

app.use(cors());

app.engine("handlebars", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials")}
));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(router);

module.exports = app;
