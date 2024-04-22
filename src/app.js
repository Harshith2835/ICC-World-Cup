// imports
const express = require("express");
const app = express();
const port = process.env.PORT || 5556;
const routes = require("./routes/main");
const hbs = require("hbs");
const mongoose = require("mongoose");
const detail = require("./models/details");
const bodyParser = require("body-parser");


app.use(
  bodyParser.urlencoded({
    //this should be above routes so that first we parse and then use it in routes
    extended: true,
  })
);
app.use("/static", express.static("public")); //public folder accessed with name "/static"
app.use("", routes); // using routes to serve the files

// template engine (here we are using hbs)
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// db connection
mongoose.connect(
  "mongodb://127.0.0.1:27017/webscrape"

  // Slider.create([
  //   {
  //     title: "-JORGE LUIS BORGES",
  //     subTitle:
  //       "I have always imagined that Paradise will be a kind of a Library.",
  //     imageUrl: "../static/images/slider_1.jpg",
  //   },
  //   {
  //     title: "-WALTER SAVAGE LANDOR",
  //     subTitle: "Nothing is pleasanter than exploring a library.",
  //     imageUrl: "../static/images/slider_2.jpg",
  //   },
  //   {
  //     title: "-ALBERT EINSTEIN",
  //     subTitle:"The only thing that you absolutely have to know, is the location of the library.",
  //     imageUrl: "../static/images/slider_3.jpg",
  //   },
  // ])

  // detail.create({
  //   brandName: "Info tech Solns",
  //   brandIconUrl:
  //     "https://media.istockphoto.com/id/1354989842/photo/banner-with-books-business-and-education-background-back-to-school-concept.jpg?s=1024x1024&w=is&k=20&c=cCis5EXOZ-aCwz_ocoRUI64M-qFVeSAzv3vyNDrF7Vg=",
  //   links: [
  //     {
  //       label: "Home",
  //       url: "/",
  //     },
  //     {
  //       label: "Services",
  //       url: "/services",
  //     },
  //     {
  //       label: "Gallery",
  //       url: "/gallery",
  //     },
  //     {
  //       label: "About",
  //       url: "/about",
  //     },
  //     {
  //       label: "Contact Us",
  //       url: "/contact-us",
  //     },
  //   ],
  // })
);

// listening to the server
app.listen(5556, () => {
  console.log(`server started listening on port::${port}`);
});
