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
  static createTeacher(req, res) {
    // res.send("create teacher page");
    Teachers.create(req.body)
      .then((result) => {
        //code
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = +req.params.userId;
    Teachers.deleteTeacher(id)
      .then((result) => {
        //code
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static update(req, res) {
    const id = +req.params.userId;
    Teachers.updateTeacher(id, req.body)
      .then((result) => {
        //code
        res.send(result);
      })
      .catch((err) => {
        //
        res.send(err);
      });
  }
  static search(req, res) {
    Teachers.searchTeacher(req.query)
      .then((result) => {
        //code
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = TeacherController;
