const express = require("express")
const snacks = express.Router()
const {getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack} = require("../queries/snacks.js")
const confirmHealth = require("../confirmHealth.js")
const {capitalizationCheck, checkName} = require("../validation.js")

snacks.get("/", async (req,res) => {
    try {
        const allSnacks = await getAllSnacks()
        if(allSnacks[0]){
            res.status(200).json({
                success: true,
                payload: allSnacks})
        } else {
            res.status(404).json({
                success: false,
                payload:"Server error"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

snacks.get("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const snack = await getSnack(id)
        if(snack.id){
            res.status(200).json({
                success: true,
                payload: snack
            })
        }else{
            res.status(404).json({
                success: false,
                payload: "not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
})


snacks.post("/", checkName, async (req,res)=> {
    let {body}= req
    body.is_healthy = confirmHealth(body)
    try {
        if(!body.image){
            body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
        }
        // body.name = capitalizationCheck(body.name)
        body = {...body, name: capitalizationCheck(body.name)}
        const createdSnack = await createSnack(body)
        if(createdSnack.id){
            res.status(200).json({
                success: true,
                payload: createdSnack
            })
        }else{
            res.status(404).json({
                success:false,
                payload: "Snack creation error"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

snacks.delete("/:id", async (req,res) =>{
    const {id} = req.params
    try {
        const deletedSnack = await deleteSnack(id)
        if(deletedSnack.id){
            res.status(200).json({
                success: true,
                payload: deletedSnack
            })
        } else {
            res.status(404).json({
                success:false,
                payload: "not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

snacks.put("/:id", async (req,res)=>{
    const {id} = req.params
    const {body} = req
    try {
        const updatedSnack = await updateSnack(id, body)
        if(updatedSnack.id){
            res.status(200).json({
                success: true,
                payload: updatedSnack
            })
        } else {
            res.status(404).json({
                success: false,
                payload: "Snack not found"
            })
        }
    } catch (error) {
        
    }
})

module.exports = snacks;