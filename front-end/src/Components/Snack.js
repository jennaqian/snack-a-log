import HeartHealth from "./HeartHealth.js";

export default function Snack ({snack}){
    return(
        <div>
            <img src={snack.image}/>
            <HeartHealth />
            <h5>{snack.name}</h5>
        </div>
    )
}

// {snacks.map(snack => {
//     return <HeartHealth key={snack.id} snackHealth={snack.is_healthy}/>
// })}