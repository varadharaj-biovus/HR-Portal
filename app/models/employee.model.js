const mongooes = require("mongoose");

const employeeModel = mongooes.Schema({
    first_name :{
        type:String,
        min:3,
        maxlength
    }
})