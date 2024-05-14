//khoi tao 1 mini-express app
const express = require("express");
const bodyParser = require("body-parser");

//tao router
const authRouter = express.Router();
//middleware kiem soat dinh danh du lieu cho res body
authRouter.use(bodyParser.json());

//bat dau dinh tuyen

//Login: POST - /api/auth/login
authRouter.post("/login", (req, res, next) => {
  try {
    res.status(201).json({
      message: "Login successfully",
      email: req.body.email,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//register: POST - /api/auth/register
authRouter.post("/register", (req, res, next) => {
  try {
    res.status(201).json({
      message: "Register successfully",
      email: req.body.email,
      name: req.body.fname + " " + req.body.lname,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//update: PUT - /api/auth/update
authRouter.put("/update/:userID", (req, res, next) => {
  try {
    res.status(201).json({
      message: "Update successfully",
      data: {
        "user-id": req.params.userID,
        fname: req.body.fname,
        lname: req.body.lname,
        dob: req.body.dob,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = authRouter;
