

const { Router } = require("express");
const { createStudents } = require("../controller/students.controller");
const fileUpload = require("../middlewares/fileUpoad");


const route = new Router();
route
  .post("/post/client", fileUpload, createStudents)


module.exports = route;
