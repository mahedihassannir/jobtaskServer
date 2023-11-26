const User = require("../model/singUpModel");

// this is and custom hook a function req res next  

exports.bindRequest = () => {


    return (req, res, next) => {
        if (!req.session.isLogin) {
            return next();
        }

        try {
            const user = User.findById(req.session.User.id);
            req.User = user;
            next();
        } catch (error) {

            console.log(error)

            next(error)

        }

    }

} 