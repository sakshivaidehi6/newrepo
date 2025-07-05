const express = require("express");
const app = express();
const db = require('./db');
// const menuItem = require('./model/person');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const person = require('./model/person');
const menuItem = require("./menu");

app.get('/', function(req,res){
    res.send('welcome to my hotel..')
})

const personRoutes = require('./routes/personRoute');
const menuItemRoutes = require('./routes/menuRoutes');

app.use('/person',personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () =>{
    console.log("listening on port 3000");
});

