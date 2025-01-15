import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";
function Routing() {
  const [isActive, setIsActive] = useState();
  return (
    <div
      style={{
        textAlign: "center",
        marginLeft: "50vw",
      }}
    >
      <h2>Routing Example</h2>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          {/* either of the syntax is correct */}
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <Link to="/about" className="isActive">
            <li>About</li>
          </Link>
          <Link to="/listing">
            <li>Listing</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about/*" element={<About />}> */}
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />}></Route>
          <Route path="founders" element={<Founder />}></Route>
        </Route>
        <Route path="/listing" element={<Listing />} />
        <Route path="/users/:id" element={<Users isAdmin={true} />}></Route>
        <Route path="/abc" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <h2>About Page</h2>
      {/* <Routes>
        <Route path="company" element={<Company />}>
          {" "}
        </Route>
        <Route path="founders" element={<Founder></Founder>}>
          {" "}
        </Route>
      </Routes> */}
      <Outlet></Outlet>
    </>
  );
}
function Company() {
  //   return <h4> We are a good firm</h4>;
  return (
    <>
      <h4> We are a good firm</h4>
      <Outlet></Outlet>
    </>
  );
}
function Founder() {
  return <h4> We are Nice People </h4>;
}

function Users(props) {
  // extract the props here
  console.log(props);
  let params = useParams();
  let [user, setUser] = useState(null);
  console.log("users api params", params);
//   if (typeof parseInt(params.id) == "number") return;
  // https://fakestoreapi.com/users/2
  useEffect(() => {
    async function fetchData() {
        try{
      // data fetching from the api
      const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
      const data = await resp.json();
    //   if(data.status == "error"){
    //     alert("invalid request");
    //     throw new Error("user id should be provided");
    //     // return;
    //   }
      console.log(data);
      setUser(data);
        }catch(err){
            console.log(err);
            setUser("no data");
            
        }
    }
    fetchData();
  }, []);
  return (
    <>
      {user == null ? (
        <h3>...loading</h3>
      ) : (
        <>
          <h4>User Name: {user.username}</h4>
          <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
          <h4> Phone: {user.phone}</h4>
        </>
      )}
    </>
  );
}

function Home() {
  return <h3>I am Home Page</h3>;
}
function Listing() {
  return <h3>I am Listing Page</h3>;
}

function PageNotFound() {
  return <h3>Page Not found</h3>;
}

export default Routing;
