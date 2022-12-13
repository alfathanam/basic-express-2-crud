//router ini untuk menjalankan fungsi routingnya, tidak untuk lister portnya dll
const route = require("express").Router();

const studentRoutes = require("./student");
const teacherRoutes = require("./teacher");

route.use("/students", studentRoutes);
route.use("/teachers", teacherRoutes);

route.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = route;
