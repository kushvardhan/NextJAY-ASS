"use client"

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 13vh)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>KUSH VARDHAN</h1>
      {name && <h2 style={{ fontSize: '1.25rem' }}>{name}</h2>}
      <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          style={{
            width: '28vw',
            height: '5vh',
            borderRadius: '0.5rem',
            backgroundColor: '#27272a',
            border: 'none',
            outline: 'none',
            padding: '8px 16px'
          }}
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Enter Name.."
        />
      </form>
    </div>
  );
}
