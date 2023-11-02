const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

// Template engines (handlebars)
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// HTTP Logger
app.use(morgan("combined"));

// Static
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
