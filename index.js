const express = require("express");
const dotenv = require("dotenv");
const app = express();
const expressValidator = require('express-validator')
dotenv.config();

// DB cnnection
const db = require("./app/models/index");
db.mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("Database connected successfully ");
}).catch( error =>{
        console.log("Sone thing error to connect DB : ",error);
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(expressValidator())


// config all employee routes
const Routes = require("./app/routes/employee.route");

app.use('/',Routes);

//  Listener on port 3000
const listener = app.listen(process.env.PORT || 3000, ()=>{
        console.log(listener.address().port);
})