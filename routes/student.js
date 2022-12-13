const studentRoute = require("express").Router();
const bodyParser = require("body-parser");

//bodyParser sudah tidak di dalam package epxress
//must install npm i body-parser
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const StudentController = require("../controllers/StudentController");

studentRoute.get("/", StudentController.getStudent);

studentRoute.post("/create", jsonParser, StudentController.create);

studentRoute.get(
  "/information/:userId",
  StudentController.getInformationStudent
);

studentRoute.get("/delete/:userId", StudentController.delete);
studentRoute.post("/update/:userId", jsonParser, StudentController.update);
studentRoute.get("/search", StudentController.search);
module.exports = studentRoute;
