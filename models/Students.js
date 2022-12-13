const fs = require("fs");

class Students {
  //code
  constructor(id, nama, kelas, semester, umur, gpa) {
    this.id = id;
    this.nama = nama;
    this.kelas = kelas;
    this.semester = semester;
    this.umur = umur;
    this.gpa = gpa;
  }
  static getDataStudents() {
    return new Promise((res, rej) => {
      fs.readFile("./students.json", "utf-8", (err, data) => {
        if (err) {
          rej(err);
        } else {
          let students = JSON.parse(data);
          //   console.info(typeof students);
          students = students.map((student) => {
            const { id, nama, kelas, semester, umur, gpa } = student;
            return new Students(id, nama, kelas, semester, umur, gpa);
          });
          //   console.info(students);
          res(students);
        }
      });
    });
  }
  static getInformation(id) {
    return new Promise((res, rej) => {
      this.getDataStudents()
        .then((result) => {
          let students = result;
          let findStudent = students.filter((student) => student.id === id);

          if (findStudent.length !== 0) {
            res(findStudent[0]);
          } else {
            throw {
              message: `id : ${id} not found `,
            };
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}
// Students.getInformation();
module.exports = Students;
