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
  static create(req, res) {
    // res.send("create student page");
    //res hanya 1 yang diterima  jika ada 2 res maka res setelahnya tidak akan di baca
    // console.info(req.body);
    Students.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
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

  static delete(req, res) {
    const id = +req.params.userId;
    Students.deleteStudent(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(result);
      });
  }
  static update(req, res) {
    const id = +req.params.userId;
    Students.updateStudent(id, req.body)
      .then((result) => {
        //code
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static search(req, res) {
    //code
    // console.info(req.query);
    Students.search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = StudentController;
