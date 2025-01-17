import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function User() {
    const [user,setUser] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            try{
                const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const user = await resp.json();
                console.log(user);
                setUser(user);
            }catch(err){
                console.log("error caught");
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchData()
    },[]);

    const heading =  <h2>User Example</h2>
    if(loading){
        return <>
        {heading}
        <h3>...Loading</h3>
        </>
    }
    if(error){
        return <>
        {heading}
        <h3>Error Occured: {error}</h3>
        </>
    }
  return (
    <>
    {heading}
    <h4>{user.name}</h4>
    <h4>{user.phone}</h4>
    </>
  )
}

export default User