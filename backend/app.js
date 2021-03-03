const express = require("express");
const cors = require("cors");
var dotenv = require("dotenv").config();
const multer = require("multer");
const createError = require("http-errors");
require("./config/mongoose");
const helmet = require("helmet");
const compression = require("compression");
var path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const userRouter = require("./router/userRouter");
const imageRouter = require("./image");
app.use(helmet());
app.use(compression());

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    Math.random();
    cb(
      null,
      new Date().toDateString() + Math.random() + "-" + file.originalname
    );
  },
});
app.use(
  multer({ storage: fileStorage }).fields([{ name: "Image1", maxCount: 1 }])
);

app.use(userRouter);
app.use(imageRouter);

app.use("/public", express.static("public"));

app.use(async (req, res, next) => {
  next(createError.NotFound("the route does not exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is listening on the port " + port);
});
