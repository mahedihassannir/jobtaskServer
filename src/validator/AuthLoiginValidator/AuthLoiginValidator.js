const { body } = require("express-validator");

module.exports = [
    
    body("email")
        .not()
        .isEmpty()
        .withMessage("please provide your email"),

    body("password")
        .not()
        .isEmpty()
        .withMessage("provide password")

]

