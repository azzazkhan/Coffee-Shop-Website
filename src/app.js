const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const port = process.env.PORT || 8000;

// Setting static path
app.use(express.static(path.join(__dirname, "../public")));

// Setting view engine
app.set("view engine", "hbs");

// Setting views directory path
app.set("views", path.join(__dirname, "../templates/views"));

// Registering partials.
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

// Routing
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/coffee-at-the-office", (req, res) => {
    res.render("coffee_at_the_office");
});

app.get("/coffee-in-vending", (req, res) => {
    res.render("coffee_in_vending");
});

app.get("/coffee-in-cafe", (req, res) => {
    res.render("coffee_in_cafe");
});

app.get("/our-coffee", (req, res) => {
    res.render("our_coffee");
});

app.get("/coffee-machines", (req, res) => {
    res.render("coffee_machines");
});

app.get("/services", (req, res) => {
    res.render("services");
});

app.get("/coffee-and-us", (req, res) => {
    res.render("coffee_and_us");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});