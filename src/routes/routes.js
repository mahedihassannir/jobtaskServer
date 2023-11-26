// all make routes
const auth = require("./authProvider")
const destination = require("./destination")
const post = require("./postRoute")
// all make routes


// map the route then use 
const routes = [
    {
        path: "/auth",
        handler: auth
    },

    {
        path: "/destination",
        handler: destination
    },
    {
        path: "/post",
        handler: post
    },
    {
        path: "/",
        handler: (req, res) => {
            res.send("server is running")
        }
    }

]
// ends

// app means express js here     
module.exports = app => {

    routes.forEach(r => {


        if(r.path==="/"){
            app.get(r.path, r.handler)
        
        }
        else{
            
            app.use(r.path, r.handler)
        
        }
        
    })

}

