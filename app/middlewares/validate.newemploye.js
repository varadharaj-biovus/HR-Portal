const {body, validationResult} = require("express-validator");

const validate = [
                body('first_name').exists().notEmpty().withMessage('name cannot empty').isLength({max:15,min:3}).withMessage('Name must be minimum 3, maximum 15'),
                body('last_name').exists().notEmpty().withMessage('name cannot empty').isLength({max:15,min:3}).withMessage('Name must be minimum 3, maximum 15'),
                body('email').isEmail().withMessage('Enter valide mail').notEmpty().withMessage('Email is must'),
                body('mobile').isNumeric().notEmpty().withMessage('Mobile number is must').isLength({min:10,max:10}).withMessage('Enter proper number')
            ]
module.exports.validate = validate ;

        

