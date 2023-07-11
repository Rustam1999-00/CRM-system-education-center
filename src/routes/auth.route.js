

const { Router } = require("express");
const { login, addAdmin } = require("../controller/auth.controller");

const route = new Router();

route.post("/auth/login", login).post("/add/admin", addAdmin);


module.exports = route;
