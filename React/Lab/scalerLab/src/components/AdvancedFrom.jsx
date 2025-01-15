import React, { useState } from "react";

const AdvancedForm = () => {
  // Initializing state for form inputs
  const [formData, setFormData] = useState({ name: "", email: "", age: 0 });

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      alert("data not valid");
      return;
    }

    //an api call is made
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.age);

    //setFormData() -> static dyanmic
  };

  const validateForm = () => {
    if (!formData.name || !formData.email) {
      return false;
    }
    //additonal logic
    if (formData.age > 12) return false;

    return true;
  };
  const handleFormData = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;

    setFormData((prevData) => {
      return { ...prevData, [id]: value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleFormData}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleFormData}
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={handleFormData}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
