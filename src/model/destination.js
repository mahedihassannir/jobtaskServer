

const { Timestamp } = require("mongodb");
const { Schema, model, default: mongoose } = require("mongoose")

const destination = new Schema({
    name: {

        type: String,
    },

    destination: {
        type: String,
    },
    price: {
        type: String
    },
    img: {
        type: String
    },
    video: {
        type: String
    },
    day: {
        type: String
    },

},{Timestamp:true})

const Destination = mongoose.model("destination", destination);

module.exports = Destination;

