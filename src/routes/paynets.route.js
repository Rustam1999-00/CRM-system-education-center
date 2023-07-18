

const { Router } = require("express");
const { createPaynets, getPaynets, editPaynets, deletePaynets } = require("../controller/paynets.controller");
const fileUpload = require("../middlewares/fileUpoad");


const route = new Router();
route.get("/get/paynet", getPaynets)
route.post("/post/paynet", createPaynets)
route.put("/put/paynet/:id", editPaynets)
route.delete("/delete/paynet/:id", deletePaynets)


module.exports = route;
