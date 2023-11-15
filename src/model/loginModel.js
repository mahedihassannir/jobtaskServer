const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash the user's password before saving to the database
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    }
    next();
});

// Method to compare password during login
userSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return await bcrypt.compare(candidatePassword, user.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
