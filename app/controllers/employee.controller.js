
// index page controlle
const home = (req, res) => {
    res.json({ message :"Welcome to Employee Portal"});
};

// error page
const error = (req, res) => {
    res.json({message: "404 Page Not Found"});
};

module.exports = {home, error};