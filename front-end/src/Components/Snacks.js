import Snack from "./Snack.js";
import axios from "axios";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(API + "/snacks")
      .then((res) => {
        setSnacks(res.data.payload);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Snacks">
      <article>
        {snacks.map(snack => {
            return <Snack key={snack.id} snack={snack}/>
        })}
      </article>
    </div>
  );
}
