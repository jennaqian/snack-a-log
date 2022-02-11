// DEPENDENCIES
const express = require("express");
const cors = require("cors")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json())
require("dotenv").config()

// ROUTES
app.get("/", (req, res)=> {
    res.send("Welcome to Snack World!")
})

//404 PAGE
app.get("*", (req, res)=> {
    res.status(404).send("Page not found!")
})

// EXPORT
module.exports = app;
