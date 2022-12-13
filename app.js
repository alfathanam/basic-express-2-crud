const express = require("express");
const app = express();
const port = 3000;

//end point atau bisa disebut routing
//secara default folder route akan mengacu ke index
const routes = require("./routes/index");
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
