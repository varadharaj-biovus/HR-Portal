const express = require("express");
const routes = express.Router();
const {body} = require("express-validator")
const userValidate =require("../middlewares/validate.newemploye")

const employee = require("../controllers/employee.controller");

routes.post('/new',userValidate.validate,employee.newEmployee);
routes.get('/',employee.home);
routes.get('*',employee.error);

module.exports = routes;
