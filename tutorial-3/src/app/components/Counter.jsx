// client component server e call hoy but server component client e call hoy na.
// jei component gula client ba usser er kache load hoy segulake bola hoy client compoenent.
// ar jei component gula server theke pre-render hoye client er kache jay segula hocche server component.

"use client";
import React, { useState } from "react";

export default function () {
  console.log("I am render from client");

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className=" text-4xl">Count: {count}</h1>
      <button
        className=" bg-white text-black/80 rounded p-2"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
    </div>
  );
}
