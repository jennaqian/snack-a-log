const express = require("express")
const snacks = express.Router()
const {getAllSnacks} = require("../queries/snacks.js")

snacks.get("/", async (req,res)=> {
    try {
        const allSnacks = await getAllSnacks()
        if(allSnacks[0]){
            res.status(200).json({
                success: true,
                payload: allSnacks})
        } else {
            res.status(500).json({error:"server error"})
        }
    } catch (error) {
        console.log(error)
    }
})




module.exports = snacks;