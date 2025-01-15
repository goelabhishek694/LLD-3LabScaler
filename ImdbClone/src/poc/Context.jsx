import React, { createContext, useEffect, useState } from 'react'

function Context() {
    console.log("Context is rendered");
    
    const data = {
        name: "Ramesh",
        msg: "hello",
    }
    const [user, setUser] = useState(data);
    const setUserData = ({name,msg}) => {
        setUser({name,msg});
    }
  return (
    <>
    <h3>Context</h3>
    <div>⬇️</div>
    
    <Grandparent user={user} setUserData={setUserData}></Grandparent>
    
    
    </>
  )
}

function Grandparent({user, setUserData}) {
    console.log("Grandparent is rendered");
    return (
        <>
        <h3>Grandparent</h3>
        <div>⬇️</div>
        <Parent user={user} setUserData={setUserData}></Parent>
        </>
  
    )
  }

  function Parent({user, setUserData}) {
    console.log("Parent is rendered");
    return (
        <>
        <h3>Parent</h3>
        <div>⬇️</div>
        <Child user={user} setUserData={setUserData}></Child>
        </>
  
    )
  }

  function Child({user, setUserData}) {
    console.log("Child is rendered");
    //   console.log(user);
    useEffect(()=>{
        setTimeout(()=>{
            setUserData({name:"Suresh", msg:"bye"});
        },3000)
    },[]);
    return (
        <>
        <p>Child</p>
        <div>⬇️</div>
        <p>{user.name}</p>
        <p>{user.msg}</p>
        </>
    )
  }

export default Context