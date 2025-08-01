import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <div>
      <h1>This is user profile for Profile page</h1>
      <Link className="underline" href={"/"}>
        Back to Home
      </Link>{" "}
      <br />
      <Link className="underline" href={"/love"}>
        Back to Love page
      </Link>
    </div>
  );
}
