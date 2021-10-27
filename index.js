const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// config all employee routes
const Routes = require("./app/routes/employee.route");

app.use('/',Routes);

//  Listener on port 3000
const listener = app.listen(process.env.PORT || 3000, ()=>{
        console.log(listener.address().port);
}) 