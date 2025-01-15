import React, { createContext, useContext, useEffect, useState } from "react";
const nearbyGroceryStore = createContext(); //creates our store.
function Context() {
  console.log("Context is rendered");

  const data = {
    name: "Ramesh",
    msg: "hello",
  };
  const [user, setUser] = useState(data);
  const setUserData = ({ name, msg }) => {
    setUser({ name, msg });
  };
  return (
    <>
      <h3>Context</h3>
      <div>⬇️</div>
      <nearbyGroceryStore.Provider value={data}>
        <Grandparent></Grandparent>
      <FarAwayRelative></FarAwayRelative>
      </nearbyGroceryStore.Provider>
    </>
  );
}

function FarAwayRelative() {
    const user = useContext(nearbyGroceryStore);
    console.log(user);
    
    return (
      <>
        <p>FarAwayRelative</p>
        <div>⬇️</div>
        {/* <p>{user.name}</p>
        <p>{user.msg}</p> */}
      </>
    );
  }

function Grandparent() {
  console.log("Grandparent is rendered");
  return (
    <>
      <h3>Grandparent</h3>
      <div>⬇️</div>
      <Parent></Parent>
    </>
  );
}

function Parent() {
  console.log("Parent is rendered");
  return (
    <>
      <h3>Parent</h3>
      <div>⬇️</div>
      <Child></Child>
    </>
  );
}

function Child() {
  console.log("Child is rendered");
  const user = useContext(nearbyGroceryStore);
  //   console.log(user);
  // useEffect(()=>{
  //     setTimeout(()=>{
  //         setUserData({name:"Suresh", msg:"bye"});
  //     },3000)
  // },[]);
  return (
    <>
      <p>Child</p>
      <div>⬇️</div>
      <p>{user.name}</p>
      <p>{user.msg}</p>
    </>
  );
}

export default Context;
