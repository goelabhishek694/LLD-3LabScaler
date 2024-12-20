import React, { useState, useEffect } from "react";

function FetchDataComponent() {
  const[userId,setUserId] = useState(1);
  const [data, setData] = useState(null);

  // use this api to fetch data: "https://jsonplaceholder.typicode.com/users"

  useEffect( () => {
    async function fetchData(){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await resp.json();
    setData(data);
    console.log(data);
    }
    fetchData();

  }, [userId]);

  return <div>
    {data ? <p>Data loaded!</p> : <p>Loading...</p>}
    <button onClick={()=>setUserId(userId+1)}>+</button>
    </div>;
}

export default FetchDataComponent