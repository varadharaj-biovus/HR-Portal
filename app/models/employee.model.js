const mongooes = require("mongoose");

const employeeModel = mongooes.Schema({
    first_name :{
        type:String,
        required: true,
         maxLength: 20
    }
})