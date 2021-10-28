const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

db ={};

db.mongoose = mongoose;
db.employee = require("../models/employee.model");

module.exports = db;
