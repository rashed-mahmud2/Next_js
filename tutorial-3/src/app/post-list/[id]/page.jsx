import { Felipa } from "next/font/google";
import React from "react";

export default async function PostDetails({ params }) {
  const { id } = await params;
  console.log("I am running");

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div>
      <h2>Post Details of Post {id}</h2>
      <p>{post.title}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const posts = await response.json();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}
