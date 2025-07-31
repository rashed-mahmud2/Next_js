import { Suspense } from "react";
import PostCard from "./post-card";
import PostUser from "./post-user";
import PostWithMarkdown from "./post-with-markdown";

export default async function PostList() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const posts = await res.json();
  console.log(posts);

  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <PostCard key={post.id} postId={post.id}>
          <Suspense
            fallback={
              <div>
                <h1 className="mx-0 px-3 py-2 bg-blue-600 w-fit">Loading user....</h1>
              </div>
            }
          >
            <PostUser userId={post.userId} />
          </Suspense>

          <PostWithMarkdown text="some text here" />
        </PostCard>
      ))}
    </div>
  );
}
