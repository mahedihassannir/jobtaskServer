// This is the autController for the singUp and login 

const User = require("../model/singUpModel")

const bcrypt = require('bcrypt');



const login = async (req, res, next) => {

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


        res.status(200).json({ "message": "Login Successful", user });




    } catch (error) {
        console.log(error);
        next(error)
    };


};

const singUp = async (req, res) => {

    // Create a new user document using the User model
    const newUser = new User({
        name: 'mahedi',
        email: 'john@mahedi.com',
        password: 'password1232'
    });

    // Save the user to the database
    try {

        const savedUser = await newUser.save();

        console.log('User saved:', savedUser);

        res.send("user created successfully");

    } catch (error) {
        console.error('Error saving user:', error);
    }



}

const userProfile = async (req, res) => {


    const id = req.params.id
    console.log(id);


    try {

        const userData = await User.findById(id)

        console.log(userData);

        res.send(userData)

    } catch (error) {
        console.log(error);

    }

}


module.exports = {
    login,
    singUp,
    userProfile,
}