const express = require("express");
const acc = express.Router();

const accData = {
    accId: 2010,
    accountName: ["capital", "debt", "cost", "revenue", "assets"]
}

acc.get("/", (req, res) => {
    res.send(`<h2>Accounting and financial Department ${ accData.accId } </h2>`);
}); 

acc.get("/chart", (req, res) => {
    res.render("acc/chart", { id: accData.accId });
});

module.exports = acc;
