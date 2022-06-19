const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const mysql = require("mysql2");
const port = 8088;
const expressSanitizer = require('express-sanitizer');
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: process.env.MYSQK_PW,
    database: "mySmartHome" });
// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
});
global.db = db;
require("./routes/main")(app);
app.set("views",__dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));