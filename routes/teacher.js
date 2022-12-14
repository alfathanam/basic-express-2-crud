const teacherRoute = require("express").Router();
const TeacherController = require("../controllers/TeacherController");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

teacherRoute.get("/", TeacherController.getTeacher);

teacherRoute.post("/create", jsonParser, TeacherController.createTeacher);

teacherRoute.get(
  "/information/:userId",
  TeacherController.getTeacherInformation
);
teacherRoute.get("/delete/:userId", TeacherController.delete);
teacherRoute.post("/update/:userId", jsonParser, TeacherController.update);
teacherRoute.get("/search", TeacherController.search);

module.exports = teacherRoute;
