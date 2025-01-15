import React, { useState } from "react";

const SimpleForm = () => {
  // Initializing state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    //an api call is made
    console.log(name);
    console.log(email);

    setName("");
    setEmail("");
    setAge(0);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event)=>setName(event.target.value)}/>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(event)=>setAge(event.target.value)}/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
