"use client";
import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age }),
    });

    // optional: clear form
    setName("");
    setEmail("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Age</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} />

      <input type="submit" value="Add User" />
    </form>
  );
};

export default AddUser;
