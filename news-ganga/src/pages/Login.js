import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    area: "",
    address: "",
    regId: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log(form);
  };

  return (
    <div className="login-page">

      <h2>Login / Registration</h2>

      <form onSubmit={handleSubmit} className="login-form">

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="fatherName"
          placeholder="Father Name"
          onChange={handleChange}
        />

        <input
          name="area"
          placeholder="Area"
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <input
          name="regId"
          placeholder="Registration ID"
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}