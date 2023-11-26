// This is the autController for the singUp and login 

const User = require("../model/singUpModel");

const bcrypt = require('bcrypt');

const { validationResult } = require("express-validator")

const errorFormater = require("../utils/errorsmg/errorFormater")

const session = require("express-session")

const login = async (req, res, next) => {

    const errors = validationResult(req).formatWith(err => err.msg)

    if (!errors.isEmpty()) {
        return res.status(404).json(errors.mapped())
    }

    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    try {
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({ "error": "user not found" });

        };

        const isPasswordMatch = bcrypt.compare(password, user.password);

        console.log(isPasswordMatch);

        if (!isPasswordMatch) {
            return res.status(401).json({ "message": "Invalid credentials", });
        };



        req.session.isLogin = true;
        req.session.User = user;


        console.log(req.session.User, "from session");

        res.status(200).json({ "message": "Login Successful", user });

    } catch (error) {
        console.log(error);
        next(error)
    };


};

const singUp = async (req, res) => {

    const bodyData = req.body;

    let errors = validationResult(req).formatWith(errorFormater)

    if (!errors.isEmpty()) {

        return res.status(400).json({
            error: errors.mapped
                ()
        })

    }


    // Create a new user document using the User model
    const newUser = new User({

        name: bodyData.name,
        username: bodyData.username,
        email: bodyData.email,
        password: bodyData.password

    });
    console.log(newUser, "bola");
    // Save the user to the database
    try {

        const savedUser = await newUser.save();

        console.log('User saved:', savedUser);

        res.json({ "smg": "user Create successfully", "success": true });

    } catch (error) {
        console.error('Error saving user:', error);
    };



};

const userProfile = async (req, res) => {


    // // const id = req.params.id;
    // // console.log(id);


    // try {

    //     // const userData = await User.findById(id);

    //     // console.log(userData);

    //     console.log(req.session.User, req.session.isLogin);

    //     res.send(req.session.User);

    // } catch (error) {
    //     console.log(error);

    // }

    console.log(req.session);
res.send("hey")

}


module.exports = {
    login,
    singUp,
    userProfile,
};