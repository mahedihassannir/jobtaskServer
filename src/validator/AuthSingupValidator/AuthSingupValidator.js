  
const { body } = require("express-validator");
const User = require("../../model/singUpModel");

module.exports= [
    body("username")
        .isLength({ min: 2, max: 15 })
        .withMessage("username must be 2 to 15 character")
        .custom(async username => {

            const usernameCheck = await User.findOne({ username })

            if (usernameCheck) {
                return Promise.reject("user name already exist")
            }
        }),
    body("email")
        .isEmail()
        .withMessage("provide a valid email")
        .custom(async email => {
            const checkEmail =await User.findOne({ email })

            if (checkEmail) {
                return Promise.reject("email already exist")
            }

        }),
    body("password")
        .isLength({ min: 6 })
        .withMessage("password must be 6 character")
]