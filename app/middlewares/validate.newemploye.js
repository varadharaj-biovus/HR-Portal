const {body, validationResult} = require("express-validator");

const validate = [
                body('first_name')
                .exists()
                .notEmpty().withMessage('name cannot empty')
                .isLength({max:15,min:3}).withMessage('Name must be minimum 3, maximum 15')
                .isString()
                .isAlpha().withMessage('Invalid value ony lutters')
                .toUpperCase(),
                body('last_name')
                .exists()
                .notEmpty().withMessage('name cannot empty')
                .isLength({max:15,min:3}).withMessage('Name must be minimum 3, maximum 15')
                .isString()
                .isAlpha().withMessage('Invalid value ony lutters')
                .toUpperCase(),
                body('email')
                .isEmail().withMessage('Enter valide mail')
                .notEmpty().withMessage('Email is must'),
                body('mobile')
                .isNumeric()
                .notEmpty().withMessage('Mobile number is must')
                .isLength({min:10,max:10}).withMessage('Enter proper number'),
                body('password')
                .trim().notEmpty().withMessage('Password required')
                .isLength({ min: 8 }).withMessage('password must be minimum 8 length')
                .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
                .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
                .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
                .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
                .not().matches(/^$|\s+/).withMessage('White space not allowed')
            ]
module.exports.validate = validate ;

        

