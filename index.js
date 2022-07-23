const express = require("express");
const app = express();
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const loginRouter = require("./routers/Login");

const port = 3000;


app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/login", loginRouter);

app.get("/", (req, res) => {
    res.send("Hello, welcome to Another!");
});


app.listen(port, () => {
    console.log("Another is listening on port:", port);
});