const express = require("express");
const path = require("path");
const port = process.env.port || 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("server started at port 4000");
});
