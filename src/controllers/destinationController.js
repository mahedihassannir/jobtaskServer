const Destination = require("../model/destination");

const destinationController = async (req, res) => {

    try {

        const destination = await Destination.find()


        res.json(destination)

    } catch (error) {

    }



}


const PostDestinationController = async (req, res) => {

    const body = req.body;

    console.log(body);

    try {

        const destinationPost = await Destination.create({ body });

        res.send(destinationPost);

    } catch (error) {

        console.log(error);

    }



}


module.exports = {
    destinationController,
    PostDestinationController,
}