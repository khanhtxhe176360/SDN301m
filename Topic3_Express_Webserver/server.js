const express = require("express");
const morgan = require("morgan");

require("dotenv").config();
// nodemone check thay doi roi reset server
// npm i nodemon -D , dev dependency deploy len thi mat
const port = process.env.PORT || 8080;
const host_name = process.env.HOST_NAME || "localhost";
//khoi tao web server
const app = express();

// cau hinh middleware vao pipeline cua web server
app.use(morgan("dev")); //giam sat trong giai doan dev

// cau hinh dinh tuyen cac request tu client toi server
// app.use("/api", (req, res) => { // use de bo sung middleware => moi request se qua middleware nay
//   res.send("<h1> Hello World 2 3 4</h1>");
// });

app.get("/api/home", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to Home Page - BackEnd",
  });
});

app.get("/api/employee/:id", (req, res, next) => {
  res.status(200).json({
    message: `Welcome to Employee Page - BackEnd, Employee ID = ${req.params.id}`,
    "employee-id": req.params.id,
  });
});

//authRouter
const authRouter = require("./routes/auth.route");
app.use("/api/auth", authRouter);

//hoat dong lang nghe cac request gui toi server
app.listen(9999, "localhost", () => {
  console.log(`Server is running at http://${host_name}:${port}`);
});
