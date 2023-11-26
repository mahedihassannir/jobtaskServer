const { validationResult } = require("express-validator");
const Post = require("../model/postMode");


const PostController = async (req, res) => {

    const body = req.body;

    const errors = validationResult(req).formatWith(err => err.msg)

    if (!errors.isEmpty()) {
        return res.status(404).json(errors.mapped())
    }; ``

    try {


        const post = new Post({

            username: body.username,
            email: body.email,
            title: body.title

        })
        console.log(post);

        const result = await post.save()


        res.status(200).send(result)





    } catch (error) {



        if (error.name === "ValidationError") {

            const ValidationError = {};

            if (error.errors & error.errors.title) {
                ValidationError.title = error.errors.title.messages;
            }

            return res.status(500).json({

                errors: ValidationError,

            })
        }

        // Handle any other errors
        res.status(500).json({ error: "Internal server error" });
    }





}

module.exports = {
    PostController
}

