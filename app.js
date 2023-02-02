const express = require("express");
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express();
const router = require("./routes/login.Router");

// socket.io
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

// 미들웨어
app.set("view engine", "ejs");
app.use('/public', express.static('public'))
app.use(cookieParser());
app.use(express.json())

// 메인 페이지
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// 회원가입 
app.use('/api',  [router]);

http.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} 포트가 열렸습니다`)
});
