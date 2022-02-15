import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function NewSnack () {
    const navigate = useNavigate()
    const [snack, setSnack] = useState({
        name: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        image: "",
    });

    const handleTextChange = (e)=> {
        setSnack({
            ...snack,[e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post(`${API}/snacks`, snack)
            .then(()=> {
                navigate("/snacks")
            })
            .catch((err)=> console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={snack.name} onChange={handleTextChange} placeholder="Enter name" required/>

            <label htmlFor="image">Image: </label>
            <input type="text" id="image" value={snack.image} onChange={handleTextChange} placeholder="Enter image url"/>

            <label htmlFor="fiber">Fiber: </label>
            <input type="number" id="fiber" value={snack.fiber} onChange={handleTextChange} placeholder="Enter fiber"/>

            <label htmlFor="protein">Protein: </label>
            <input type="number" id="protein" value={snack.protein} onChange={handleTextChange} placeholder="Enter protein" />
            
            <label htmlFor="added_sugar">Added Sugar: </label>
            <input type="number" id="added_sugar" value={snack.added_sugar} onChange={handleTextChange} placeholder="Enter added sugar"/>

            <input type="submit" />
        </form>
    )

};