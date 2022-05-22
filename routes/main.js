// The main.js file of your application
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index.html");
    });

    app.get("/about", function (req, res) {
        res.render("about.html");
    });
    app.get("/add_device", function (req, res) {
        let sqlquery = "SELECT * FROM appliances";
        //execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/");
            }
            res.render("add_device.ejs", { availableDevices : result });
        });
    });
    app.post("/add_device", function (req, res){
        let sqlquery = "INSERT INTO appliances (name, isOn, isOpen, isLock, temp, temp2, temp3, time, time2, channel, volume) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
        let newrecord = [req.body.device, req.body.toggle_power, req.body.toggle_closeopen, req.body.toggle_lockunlock, req.body.toggle_temperature, req.body.temperature2, req.body.temperature3, req.body.time_1, req.body.time_2,   req.body.channel_1, req.body.range];
        db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                return console.error(err.message);
            } else {
                res.render("completion.html");
            }
        });

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