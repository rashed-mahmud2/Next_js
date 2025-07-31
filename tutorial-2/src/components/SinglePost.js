import { getData } from "@/lib/getData";

const SinglePost = async () => {
  const post = await getData(
    `http://localhost:8000/posts/1`,
    {
      cache: "no-store",
    },
    3000
  );
  return (
    <div>
      <h1>{post.body}</h1>
    </div>
  );
};

export default SinglePost;
