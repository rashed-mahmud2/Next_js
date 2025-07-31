import SinglePost from "@/components/SinglePost";
import { getData } from "@/lib/getData";
import { Suspense } from "react";

// export const dynamic = "force-dynamic";

export default async function Hybrid() {
  // we can fetch data here anytime
  const posts = await getData(`http://localhost:8000/posts`);
  

  return (
    <div className="flex flex-col gap-6">
      <h1 className=" text-5xl">This is Hybrid page </h1>
      <p>
        Hybrid Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        numquam tenetur commodi voluptas inventore possimus repudiandae?
        Voluptatibus reprehenderit, maiores eligendi deleniti iste perferendis.
        Tenetur ullam error, aliquam vitae mollitia quos.
      </p>

      <ul className="text-white">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <Suspense
        fallback={
          <div>
            <h1>Loading single Post.....</h1>
          </div>
        }
      >
        <SinglePost />
      </Suspense>
    </div>
  );
}
