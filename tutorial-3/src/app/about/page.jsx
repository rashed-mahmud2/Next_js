import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <h1>Hey I am About page</h1>
      <Link className="underline" href={"/"}>
        Back to home
      </Link>
    </div>
  );
}
