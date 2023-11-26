const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const morgan = require('morgan');

const dotenv = require('dotenv');

const cors = require('cors');

const mongoose = require('mongoose');

const config = require("config")


// all routes on this file 
const allRoutes = require("./src/routes/routes")
// all routes on this file 



// const chalk = require('chalk')
const session = require('express-session');
const { bindRequest } = require('./src/middleware/authmiddleware');
// const config = require('./src/config/config');
const MongoDBStore = require('connect-mongodb-session')(session);

const chalk = require("chalk")

const testDebug = require("debug")("index:debug")

testDebug("testing from mahedi")

store = new MongoDBStore({
    uri: "mongodb+srv://mongoosemahedi:mongoosemahedi@cluster0.aiamri8.mongodb.net/?retryWrites=true&w=majority",
    collection: 'Sessions',

});


// session
app.use(session({
    secret: 'mewmwe$sdfsf53w54sfs36gds',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 60 * 60 * 2 * 1000
    }
}));
// session ends

app.use(bindRequest())

// if (app.get("env").toLowerCase() === "development") {
//     console.log(config.dev.name);
// }
// else {
//     console.log(config.prod.name);
// }


if (app.get("env").toLowerCase() === "development") {

    // morgan
    app.use(morgan("dev"));
    // morgan ends

}





// dotenv 
dotenv.config();
// dotenv ends

// cors
app.use(cors());
// cors end

// json 
app.use(express.json());
// json ends


// all middleweres

// all middleweres ends


// console.log(app.get("env"))




// to check the server is onprodction or development
// console.log(chalk.green(config.util.getEnv("NODE_ENV")))

// console.log(chalk.blue("hello"))

// to check the server is onprodction or development

// how to check the server on prod or dev use this 
// console.log(app.get("env"),"i am");
// how to check the server on prod or dev use this 

console.log(app.get("env"))


console.log(config.get('contact.mobile'))
console.log(config.get('contact.email'))



// app means send the express to the file 
allRoutes(app)
// app means send the express to the file ends

// database connection   
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aiamri8.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(chalk.green.inverse("database connected successfully"));



        // server creation
        app.get("/", (req, res) => {
            res.json("server is running")
        })


        app.get("*", (req, res) => {
            res.send("404 route not found")
        })

        // listening
        app.listen(port, () => {

            console.log(`server is running on port ${port}`);

        })


    })

    .catch(err => {
        console.log(err);
    })
// database connection ends



// server creation  ends
