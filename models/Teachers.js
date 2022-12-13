const fs = require("fs");
class Teachers {
  //code
  constructor(id, name, subject, age, city, isTeaching) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.city = city;
    this.isTeaching = isTeaching;
  }
  static getDataTeachers() {
    return new Promise((res, rej) => {
      fs.readFile("./teachers.json", "utf-8", (err, data) => {
        if (err) {
          rej(err);
        } else {
          let teachers = JSON.parse(data);
          teachers = teachers.map((teacher) => {
            const { id, name, subject, age, city, isTeaching } = teacher;
            return new Teachers(id, name, subject, age, city, isTeaching);
          });
          //   console.info(typeof teachers);
          //   console.info(teachers);
          res(teachers);
        }
      });
    });
  }
  static getInformation(id) {
    return new Promise((res, rej) => {
      this.getDataTeachers()
        .then((result) => {
          let teachers = result;
          let findTeacher = teachers.filter((teacher) => teacher.id === id);
          // console.info(typeof findTeacher);
          if (findTeacher.length !== 0) {
            res(findTeacher[0]);
          } else {
            throw {
              message: `id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}
// Teachers.getInformation();

module.exports = Teachers;
