const mongoose = require('mongoose');
mongoose
.connect("mongodb://127.0.0.1:27017/hotels")
.then(() => console.log("mongoDB connected"))
.catch((err) => console.log("mongo  error",err));