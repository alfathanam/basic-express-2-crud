const fs = require("fs");
const { resolve } = require("path");

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
  static create(student) {
    return new Promise((res, rej) => {
      this.getDataStudents()
        .then((result) => {
          let students = result;
          const id = students[students.length - 1].id + 1;
          const { nama, kelas, semester, umur, gpa } = student;
          let studentsClass = new Students(
            id,
            nama,
            kelas,
            semester,
            umur,
            gpa
          );
          students.push(studentsClass);
          // console.info(students);

          this.save(students);
          res(studentsClass);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
  static deleteStudent(id) {
    //code

    //todo explore jika delete id tidak ada atau tidak ditemukan
    return new Promise((res, rej) => {
      this.getDataStudents()
        .then((result) => {
          //code
          let students = result;
          students = students.filter((student) => student.id !== id);
          // console.info(students);
          this.save(students);
          res(`id ${id} has been deleted`);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  static updateStudent(studentId, student) {
    //code
    return new Promise((res, rej) => {
      this.getDataStudents()
        .then((result) => {
          //code
          let students = result;
          const { nama, kelas, semester, umur, gpa } = student;
          students = students.map((student) => {
            if (student.id === studentId) {
              student.nama = nama;
              student.kelas = kelas;
              student.semester = semester;
              student.umur = umur;
              student.gpa = gpa;
            }
            return student;
          });
          this.save(students);
          res(`id has been updated ${studentId}`);
        })
        .catch((err) => {
          //code
          rej(err);
        });
    });
  }

  static search(queryS) {
    return new Promise((res, rej) => {
      this.getDataStudents()
        .then((result) => {
          //code
          let students = result;
          //todos explore jika by query by city,age,dll
          let { nama } = queryS;
          let findStudent = students.filter((student) => student.nama === nama);
          // console.info(findStudent);
          res(findStudent);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  static save(students) {
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 3));
  }
}

// Students.search({ nama: "budi" });
module.exports = Students;
