const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const morgan = require('morgan');

const dotenv = require('dotenv');

const cors = require('cors');

const mongoose = require('mongoose');

const authRoute = require("./src/routes/authProvider");
const session = require('express-session');

// morgan
app.use(morgan("dev"));
// morgan ends

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



// all routes
app.use(("/auth"), authRoute)
// all routes  ends



// database connection 

mongoose.connect("mongodb+srv://mongoosemahedi:mongoosemahedi@cluster0.aiamri8.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("database connected successfully");



        // server creation
        app.get("/", (req, res) => {
            res.json("server is running")
        })


        app.get("*", (req, res) => {
            res.send("404")
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
