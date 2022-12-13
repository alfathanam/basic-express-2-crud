const Teachers = require("../models/Teachers");
class TeacherController {
  //code
  static getTeacher(req, res) {
    // res.send("teacher page be 2");
    Teachers.getDataTeachers()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static createTeacher(req, res) {
    res.send("create teacher page");
  }
  static getTeacherInformation(req, res) {
    const id = +req.params.userId;
    if (typeof id === "number" && isNaN(id) === false) {
      // res.send(`information teacher id ${id}`);
      Teachers.getInformation(id)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.send(`id must be a number`);
    }
  }
}

module.exports = TeacherController;
