const teacherRoute = require("express").Router();
const TeacherController = require("../controllers/TeacherController");

teacherRoute.get("/", TeacherController.getTeacher);

teacherRoute.get("/create", TeacherController.createTeacher);

teacherRoute.get(
  "/information/:userId",
  TeacherController.getTeacherInformation
);

module.exports = teacherRoute;
