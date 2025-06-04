const express = require("express");
const buy = express.Router();

buy.get("/", (req, res) => {
    res.send("<h2>precurment purchase Department</h2>");
}); 

buy.get("/inv", (req, res) => {
    res.render("buy/invoic");
});

module.exports = buy;
