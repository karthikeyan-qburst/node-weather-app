const path = require("path");
const hbs = require('hbs');
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath =  path.join(__dirname, "../templates/partials");
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "Karthikeyan",
  });
});

app.get("/app", (req, res) => {
    res.render("index", {
        title: "Weather app",
        name: "Karthikeyan",
      });
});
app.get("/help", (req, res) => {
    res.render("index", {
        title: "Help",
        name: "Karthikeyan",
      });
});
app.get("/about", (req, res) => {
    res.render("index", {
        title: "About ",
        name: "Karthikeyan",
      });
});
app.get("/help/*", (req, res) => {
    res.render("error", {
        title: "404 ",
        name: "Karthikeyan",
        errorMessage:"Help Article Not Found"
      });
});

app.get('*',(req,res)=>{
    res.render("error", {
        title: "404 ",
        name: "Karthikeyan",
        errorMessage:"Page Not Found"
      });
})
app.listen(3000, () => {
  console.log("App is listening on the port 3000");
});
