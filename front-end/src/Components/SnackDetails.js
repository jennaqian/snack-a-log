import HeartHealth from "./HeartHealth";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SnackDetails (){
    const [snack, setSnack] = useState({})
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`${API}/snacks/${id}`)
        .then((res)=>{
            setSnack(res.data.payload)
        })
        .catch((err)=> console.log(err))
    },[id])
    
    const handleDelete = ()=> {
        axios.delete(`${API}/snacks/${id}`)
            .then(()=> {
                navigate("/snacks")
            })
            .catch((err)=> console.log(err))
    }

    return(
        <article>
            <aside>
                <h4>the snack health</h4>
                <HeartHealth snackHealth={snack.is_healthy}/>
            </aside>
            <div>
                <h5>{snack.name}</h5>
                <img src={snack.image} alt={snack.name}/>
                <h6>Protein: {snack.protein}</h6>
                <h6>Fiber: {snack.fiber}</h6>
                <h6>Added Sugar: {snack.added_sugar}</h6>
            </div>
            <div className="showNavigation">
                <div>
                    <Link to="/snacks"><button>Back</button></Link>
                </div>
                <div>
                    <Link to={`/snacks/${id}/edit`}><button>Edit</button></Link>
                </div>
                <div>
                    <button onClick = {handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}