const employeeModel = require("../models/employee.model");
const { validationResult } = require('express-validator');

// index page controlle
const home = (req, res) => {
    res.json({ message :"Welcome to Employee Portal"});
};

// error page
const error = (req, res) => {
    res.json({message: "404 Page Not Found"});
};

// Created new employee
const newEmployee = async(req,res,) => {
    try {
        const errors = validationResult(req); 
  
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
          return;
        }
  
    const employee = new employeeModel({
        first_name : req.body.first_name ,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile: req.body.mobile,
        password:req.body.password
    });

    const save = await employee.save();
    res.send(save)
   
  
}catch{
  res.status(400);
  res.json({error :"data not found"})
}
}

module.exports = {home, error, newEmployee};