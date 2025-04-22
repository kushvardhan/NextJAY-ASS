"use client"

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="w-full min-h-[calc(100vh-13vh)] flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-semibold">KUSH VARDHAN</h1>
      {name && <h2 className="text-xl">{name}</h2>}
      <form action="" className="flex flex-col">
        <input
          className="w-[28vw] h-[5vh] rounded-lg bg-zinc-800 border-none outline-none px-4 py-2 text-white"
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Enter Name.."
        />
      </form>
    </div>
  );
}
