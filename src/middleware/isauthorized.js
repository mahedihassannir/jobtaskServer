exports.isauthorized = (req,res,next) => {

    const isLogin=false

    if(!isLogin){
        return res.send("user not login")
    }
    next()
    

   


}


// by this midddleware you do not go the login and singup route when he logedin
exports.isAuthinticated=(req,res,next)=>{

    const user=true

    if(user){
return res.redirect("/")


    }
next();
}