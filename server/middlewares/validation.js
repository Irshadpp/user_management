const {check} = require('express-validator');

const validateRegistration = [
    check('fName').notEmpty().withMessage('First name is required'),
    check('lName').notEmpty().withMessage('Last name is required'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({min:6}).withMessage('Password must be at least minumum characters')
]

module.exports = validateRegistration