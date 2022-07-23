var express = require("express");
var router = express.Router();

var md5 = require("md5");
var fs = require("fs");


router.get("/", (req, res) => {
    res.render("Login");
});


router.post("/process", (req, res) => {
    fs.readFile("./data/users.json", "utf8", (err, jsonFile) => {
        if (err) return console.log(err);

        let users = JSON.parse(jsonFile)["users"];
        res.cookie("id", req.body.id);
        res.cookie("password", req.body.password);

        for (var i=0; i < users.length; i++) {
            if (req.body.id == users[i]["id"]) {
                if (req.body.password == md5(users[i]["password"])) {
                    res.redirect(`/${users[i]["id"]}`);
                    return;
                }
            }
        }
        res.redirect("/login");
        return;
    });
});

module.exports = router;