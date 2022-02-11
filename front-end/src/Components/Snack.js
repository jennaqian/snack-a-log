import HeartHealth from "./HeartHealth.js";
import SnackDetails from "./SnackDetails.js"

export default function Snack ({snack}){
    return(
        <div>
            <img />
            <HeartHealth />
            <h5>Snack Name...</h5>
        </div>
    )
}

// {snacks.map(snack => {
//     return <HeartHealth key={snack.id} snackHealth={snack.is_healthy}/>
// })}