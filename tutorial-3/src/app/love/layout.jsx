import React, { Children } from "react";

export default function ProfileLayout({ children }) {
  return (
    <div>
      {children}

      <ul>
        <li>dummy 1</li>
        <li>dummy 2</li>
        <li>dummy 3</li>
      </ul>
    </div>
  );
}
