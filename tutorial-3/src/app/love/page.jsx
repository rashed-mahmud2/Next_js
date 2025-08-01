import Link from "next/link";
import React from "react";

export default function Love() {
  return (
    <div>
      <h1>This is about Love pgae</h1>
      <Link className="underline" href={"/"}>
        Back to home
      </Link>{" "}
      <hr />
      <Link className="underline" href={"/love/profile"}>
        Go to profile page
      </Link>
    </div>
  );
}
