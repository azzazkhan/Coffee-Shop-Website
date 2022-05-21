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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});