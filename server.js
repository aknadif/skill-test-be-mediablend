
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");
mongoose.set('strictQuery', false);

var bodyParser = require("body-parser");
const app = express();
const multer = require('multer');
app.use(multer().none());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors(corsOptions));
app.use(cookieParser());

mongoose
  .connect(process.env.STRING_CONN_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT, "and connection to database success");
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Wellcome to this api" });
});

require("./src/routes/api/users.route")(app);
require("./src/routes/api/products.route")(app);