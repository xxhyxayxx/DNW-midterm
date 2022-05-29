// The main.js file of your application
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index.ejs");
    });

    app.get("/about", function (req, res) {
        res.render("about.ejs");
    });

    app.get("/completion", function (req, res) {
        res.render("completion.ejs");
    });

    app.get("/edit", function (req, res) {
        res.render("edit.ejs");
    });

    app.get("/add_device", function (req, res) {
        res.render("add_device.ejs");
    });

    app.post("/add_device", function (req, res){
        let sqlquery = "INSERT INTO appliances (device, name, isOn, isOpen, isLock, temp, temp2, temp3, time, time2, channel, volume) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
        let newrecord = [req.body.device, req.body.deviceName, req.body.toggle_power, req.body.toggle_closeopen, req.body.toggle_lockunlock, req.body.toggle_temperature, req.body.temperature2, req.body.temperature3, req.body.time_1, req.body.time_2,   req.body.channel_1, req.body.range];
        db.query(sqlquery, newrecord, (err) => {
            if (err) {
                return console.error(err.message);
            } else {
                res.redirect("/completion");
            }
        });
    });

    app.get("/device_list", function (req, res) {
        let sqlquery = "SELECT * FROM appliances";
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect("/");
            }
            res.render("device_list.ejs", { registerDevices : result });
        });
    });

    app.get("/edit-result-db", function (req, res) {
        //searching in the database
        let word = [req.query.keyword];
        word = '%' + word + '%';
        let sqlquery = "SELECT * FROM `appliances` WHERE name like ?";
        // execute sql query
        db.query(sqlquery, word, (err, result) => {
            if (err) {
                res.redirect("/");
            } else {
                res.render('edit.ejs', { availableBooks: result });
            }
        });
    });
}