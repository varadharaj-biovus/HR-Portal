const employeeModel = require("../models/employee.model");

// index page controlle
const home = (req, res) => {
    res.json({ message :"Welcome to Employee Portal"});
};

// error page
const error = (req, res) => {
    res.json({message: "404 Page Not Found"});
};

// Created new employee
const newEmployee = async(req,res) => {
    try{
    const employee = new employeeModel({
        first_name :req.headers.first_name || req.body.first_name ,
        last_name:req.headers.last_name || req.body.last_name,
        email:req.headers.email || req.body.email,
        mobile:req.headers.mobile || req.body.mobile
    });

    // const save = await employee.save();
    // res.send(save);
    employee.save();
    
    res.send(employee);
    // .then(error =>{

    // })
}catch{
    res.status(404);
    res.send({error : "No added new employee"});

}
}

module.exports = {home, error, newEmployee};