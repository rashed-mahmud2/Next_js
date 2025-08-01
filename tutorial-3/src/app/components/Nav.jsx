import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className="underline">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/love"}>Love</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/post-list"}>Post List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
