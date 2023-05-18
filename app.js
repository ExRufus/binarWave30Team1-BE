const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const routes = require("./Routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./views"));
app.use(cookieParser());

app.use(flash());
app.get("/", (req, res) => {
  res.json({ message: "api running !!" });
});

app.use("/", routes); // localhost:<PORT>

app.listen(PORT, () => {
  console.log(`server sudah connect di http://localhost:${PORT}`);
});
