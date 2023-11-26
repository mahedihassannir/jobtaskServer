const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    email: {
        type: String,
       require:true,
        unique: true,
        
        trim: true
    },
    username: {
        type: String,
        require: true,
        unique: true,
        maxlength: 10,
        trim: true
    },
    title: {
        type: String,
        maxlength: 50,
        trim: true
        ,require:true,
    },
}, {
    timestamps: true
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;