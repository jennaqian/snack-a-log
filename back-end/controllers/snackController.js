const express = require("express")
const snacks = express.Router()
const {getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack} = require("../queries/snacks.js")

snacks.get("/", async (req,res) => {
    try {
        const allSnacks = await getAllSnacks()
        if(allSnacks[0]){
            res.status(200).json({
                success: true,
                payload: allSnacks})
        } else {
            res.status(500).json({error:"Server error"})
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


snacks.post("/", async (req,res)=> {
    const {body}= req
    try {
        const createdSnack = await createSnack(body)
        if(createdSnack.id){
            res.status(200).json({
                success: true,
                payload: createdSnack
            })
        }else{
            res.status(500).json({error: "Snack creation error"})
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
            res.status(404).json({error: "Snack not found"})
        }
    } catch (error) {
        
    }
})

module.exports = snacks;