import { getData } from "@/lib/getData";
import React from "react";

export async function generateStaticParams() {
  const posts = await getData(`http://localhost:8000/posts`);
  return posts.map((p) => ({
    postId: p.id.toString(),
  }));
}

export default async function Post({ params }) {
  const { postId } = await params;
  console.log(postId);

  const post = await getData(`http://localhost:8000/posts/${postId}`);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
