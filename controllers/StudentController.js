const Students = require("../models/Students");

class StudentController {
  //code
  static getStudent(req, res) {
    // res.send("students page be 2");
    Students.getDataStudents()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static createStudent(req, res) {
    res.send("create student page");
  }
  static getInformationStudent(req, res) {
    const id = +req.params.userId;
    // res.send("information student id ", id); // error
    if (typeof id === "number" && isNaN(id) === false) {
      Students.getInformation(id)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.send(`id must a number`);
    }
  }
}

module.exports = StudentController;
