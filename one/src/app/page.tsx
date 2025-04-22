"use client"

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="custom-container">
      <h1 className="custom-heading">KUSH VARDHAN</h1>
      {name && <h2>{name}</h2>}
      <form action="" className="custom-form">
        <input
          className="custom-input"
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Enter Name.."
        />
      </form>
    </div>
  );
}
