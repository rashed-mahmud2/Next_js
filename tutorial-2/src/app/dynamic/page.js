import { getData } from "@/lib/getData";
import { cache } from "react";

export default async function Dynamic() {
  // we can fetch data here anytime
  const posts = await getData(`http://localhost:8000/posts`, {
    cache: "no-store",
  });
  

  return (
    <div className="flex flex-col gap-6">
      <h1 className=" text-5xl">This is Dynamic page </h1>

      <ul className="text-white">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
