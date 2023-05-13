const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();
const cookieParser = require("cookie-parser");
const apiRouter = require("./Routes");
const app = express();
const PORT = process.env.PORT;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./views'));
app.use(cookieParser());

app.use(flash());


app.use("/", apiRouter)

app.listen(PORT, () =>{
    console.log(`server sudah connect di http://localhost:${PORT}`);
});