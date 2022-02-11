import Snack from "./Snack.js";
import axios from "axios";
import { useEffect, useState } from "react";
import HeartHealth from "./HeartHealth.js";

const API = process.env.REACT_APP_API_URL;
// console.log(API)
export default function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(API + "/snacks")
      .then((res) => {
        console.log(res.data.payload);
        setSnacks(res.data.payload);
      })
      .catch((err) => [console.log(err)]);
  }, []);
  return (
    <ul>
       {snacks.map(snack => {
                return <HeartHealth key={snack.id} snackHealth={snack.is_healthy}/>
            })}
      {/* {snacks.map(snack => {
                return <Snack key={snack.id} snack={snack}/>
            })} */}
    </ul>
  );
}
