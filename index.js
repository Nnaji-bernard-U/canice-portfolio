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

app.get("/portfolio-details-one", (req, res) => {
  res.render("portfolio-details");
});

app.get("/portfolio-details-two", (req, res) => {
  res.render("portfolio-details");
});

app.get("/portfolio-details-three", (req, res) => {
  res.render("portfolio-details");
});

app.listen(port, () => {
  console.log("server started at port 4000");
});
