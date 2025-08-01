import Link from "next/link";
import React from "react";

export default async function PostList() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const posts = await response.json();

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link className="hover:underline" href={`/post-list/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
