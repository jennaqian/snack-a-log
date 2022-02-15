import HeartHealth from "./HeartHealth.js";
import {Link} from "react-router-dom"

export default function Snack ({snack}){
    return(
        <div className="Snack">
            <img src={snack.image} alt={snack.name}/>
            <Link to={`/snacks/${snack.id}`}>
                <h4>{snack.name}</h4>
                <h4><HeartHealth snackHealth={snack.is_healthy}/></h4>
            </Link>
        </div>
    )
}