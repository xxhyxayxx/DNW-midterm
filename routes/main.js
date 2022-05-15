// The main.js file of your application
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index.html");
    });

    app.get("/about", function (req, res) {
        res.render("about.html");
    });
    app.get("/add_device", function (req, res) {
        res.render("add_device.html");
    });
    app.get("/device_list", function (req, res) {
        res.render("device_list.html");
    });
    app.post("/registered", function (req, res) {
        // saving data in database
        res.send("Hello " + req.body.first + " " + req.body.last + ", you are now registered!");
    });
    app.get("/list", function (req, res) {
        //query database to get all the books
        let sqlquery = "SELECT * FROM books";
        //execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/");
            }
            res.send(result)
        });
    });
}