const { PostController } = require("../controllers/Post");
const Post = require("../model/postMode");
const postValidator = require("../validator/postValidator");

const router = require("express").Router()



router.post("/postnew", postValidator,PostController);

router.get("/view",async(req,res)=>{

    const result=await Post.find()

    res.send(result)


})

module.exports = router;