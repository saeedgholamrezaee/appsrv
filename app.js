const express = require("express");
const app = express();
const accRoute = require("./depart/acc.js");
const buyRoute = require("./depart/buy.js");
const path = require("path");

app.set("view engine", "ejs");
app.use("/acc", accRoute);
app.use("/buy", buyRoute);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let persons = [];

app.get("/myperson/:id", function(req, res){
    const person = persons.find(p => p.id == req.params.id);
    res.send(`${person.id} ${person.fname} ${person.lname}`);
    //res.send(`${ person.id } ${ person.fname } ${ person.lname }`);
});

app.post("/personreg", (req, res) => {
    console.log("post method");
    const person = { 
          id: req.body.id,
          fname: req.body.fname,
          lname: req.body.lname
      };
    //res.send(`${ person.id } ${ person.fname } ${ person.lname }`);
    persons.push(person);
    res.json({"postperson": persons});
});

app.get("/personreg", (req, res) => {
    const person = { 
          id: req.query.id,
          fname: req.query.fname,
          lname: req.query.lname
         };
   // res.send(`${ person.id } ${ person.fname } ${ person.lname }`);
    persons.push(person);
    res.json({"getperson": persons});
});


app.get("/qpb", (req, res) => {
//    if(req.params){
//       res.send(req.params.id);
//    }
       const { id, fname, lname } = req.query;
       res.send(id + " " + req.query.fname + " " + lname);
       console.log("query scope");
});

app.get("/person", function(req, res){
   res.render("person");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/", (req, res) => {
    res.send("<h1>Application Server Full Stack ERP</h1>");
});

app.listen(5000, function(err){
   if(err) console.log(err);
   console.log("server run on localhost 5000");
});
