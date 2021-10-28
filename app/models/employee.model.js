const mongooes = require("mongoose");

const employeeModel = mongooes.Schema({
    first_name :{
        type:String,
        required: true,
        minLength: [4,'Name is too short!'],
        maxLength: [15, 'Name is too long!']
    },
    last_name:{
        type:String,
        required: true,
        minLength: [4,'Name is too short!'],
        maxLength: [15, 'Name is too long!']
    },
    email:{
        type:String,
        required: true,
        lowercase:true
    },
    mobile:{
        type:Number,
        required:[true,'Enter the contact number'],
        minLength: 10,
        maxLength: 10
    }
});

module.exports = mongooes.model( 'Employee_ Data',employeeModel);