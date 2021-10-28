const express = require("express");
const routes = express.Router();

const employee = require("../controllers/employee.controller");
routes.post('/new',employee.newEmployee);

routes.get('/',employee.home);
routes.get('*',employee.error);

module.exports = routes;
