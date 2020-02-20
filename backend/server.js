const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const cors = require("cors");
const path = require("path");

const server = express();

const port = process.env.port || 3000;

const url = "mongodb://localhost:27017/mean"

const indexRouter = require("./routes/indexRouter");

server.listen(port, (err) => {
    if(err){throw err;}
    console.log("server is started at localhost:" +port);
})

mongoose.connect(url)
    .then(console.log("mongodb is connected successfully"))
    .catch(err => console.log(err))

server.use(express.json());
server.use(express.urlencoded({ extended:false }));
server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/',indexRouter);

exports.module = server;
