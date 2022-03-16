import axios from "axios";
import React, { useEffect, useState } from "react";

function Getapi() {
  const [mydate, setMydate] = useState([]);
  const [mydate1, setMydate1] = useState("aman");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const kiran = res.data;
        setMydate(kiran);
        // console.log("fg",mydate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mydate]);

  return (
    <>
      <div>
        <p>{mydate1}</p>
        {mydate.map((maya) => (
          <>
            <span>{maya.id}</span>
            <small>{maya.title}</small>
            <h1>{maya.body}</h1>
          </>
        ))}
      </div>
    </>
  );
}

export default Getapi;
