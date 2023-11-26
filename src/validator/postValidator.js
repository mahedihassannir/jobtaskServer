const { body } = require("express-validator");
const Post = require("../model/postMode");

module.exports = ([

    body("username").not().isEmpty().withMessage('provide username')
        .isLength({ min: 2, max: 10 })
        .withMessage("username must be 2 to 10 character")
        .custom(async username => {
            const checkeusername = await Post.findOne({ username })
            if (checkeusername) {
                return Promise.reject("username already exist")
            }
        })

    ,
    body("email").isEmail().withMessage("provide a valid email")

        .custom(async email => {
            const emailCheck = await Post.findOne({ email })

            if (emailCheck) {
                return Promise.reject("email already exist")
            }
        })




]);
