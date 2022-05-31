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

    app.get("/edit/:id", function (req, res) {
        const sql = "SELECT * FROM appliances WHERE id = ?";
        db.query(sql,[req.params.id],function (err, result) {
            if (err) throw err;
            res.render('edit.ejs', {appliance : result});
        });
    });

    app.post('/edit/:id',(req,res)=>{
        const sql = "UPDATE appliances SET ? WHERE id = " + req.params.id;
        db.query(sql,req.body,function (err, result) {
            if (err) throw err;
            res.redirect('/device_list');
        });
    });

    app.get("/delete/:id", function (req, res) {
        const sql = "SELECT * FROM appliances WHERE id = ?";
        db.query(sql,[req.params.id],function (err, result) {
            if (err) throw err;
            res.render('delete.ejs', {appliance : result});
        });
    });

    app.post('/delete/:id',(req,res)=>{
        const sql = "DELETE FROM appliances WHERE id = ?";
        db.query(sql,[req.params.id],function(err,result,fields){
            if (err) throw err;
            res.redirect('/device_list');
        })
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
}