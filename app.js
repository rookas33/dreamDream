//const authMiddleware = require("./middlewares/auth-middleware");
const { Server } = require("http");
const socketIo = require("socket.io");
const express = require("express");
require('dotenv').config()

const app = express();
const http = Server(app);
const io = socketIo(http);

app.set("view engine", "ejs");
app.set("views", "./views");

const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} 포트가 열렸습니다`)
});

