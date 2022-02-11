// DEPENDENCIES
const express = require("express");
const cors = require("cors")
const snackController = require("./controllers/snackController.js")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json())
require("dotenv").config()

// ROUTES
app.get("/", (req, res)=> {
    res.send("Get Snack'n at Snack-a-log!")
})

app.use("/snacks", snackController)

//404 PAGE
app.get("*", (req, res)=> {
    res.status(404).send("Page not found!")
})

// EXPORT
module.exports = app;
