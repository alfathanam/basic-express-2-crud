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
  static create(teacher) {
    return new Promise((res, rej) => {
      this.getDataTeachers()
        .then((result) => {
          //code
          let teachers = result;
          const id = teachers[teachers.length - 1].id + 1;
          const { name, subject, age, city, isTeaching } = teacher;
          teachers.push(new Teachers(id, name, subject, age, city, isTeaching));
          // console.info(teachers);
          // console.info(typeof teachers);
          this.save(teachers);
          res(teachers);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  static deleteTeacher(teacherId) {
    return new Promise((res, rej) => {
      this.getDataTeachers()
        .then((result) => {
          //code
          let teachers = result;
          teachers = teachers.filter((teacher) => teacher.id !== teacherId);
          this.save(teachers);
          res(`id ${teacherId} has been deleted`);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  static updateTeacher(teacherId, dtTeacher) {
    return new Promise((res, rej) => {
      this.getDataTeachers()
        .then((result) => {
          //code
          let teachers = result;
          // console.info(teachers);
          const { name, subject, age, city, isTeaching } = dtTeacher;
          teachers = teachers.map((teacher) => {
            if (teacher.id === teacherId) {
              teacher.name = name;
              teacher.subject = subject;
              teacher.age = age;
              teacher.city = city;
              teacher.isTeaching = isTeaching;
            }
            return teacher;
          });
          this.save(teachers);
          res(`id ${teacherId} has been updated`);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  static searchTeacher(queryS) {
    //code
    return new Promise((res, rej) => {
      this.getDataTeachers()
        .then((result) => {
          //code
          let teachers = result;
          let { name } = queryS;
          let findOneTeacher = teachers.filter(
            (teacher) => teacher.name === name
          );
          // console.info(findTeacher);
          res(findOneTeacher[0]);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  static save(teacher) {
    fs.writeFileSync("./teachers.json", JSON.stringify(teacher, null, 3));
  }
}

// Teachers.searchTeacher();

module.exports = Teachers;
