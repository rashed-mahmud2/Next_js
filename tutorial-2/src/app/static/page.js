import { getData } from "@/lib/getData";

export default async function Static() {
  // we can fetch data here anytime
  const posts = await getData(`http://localhost:8000/posts`);
  console.log(posts);
  

  return (
    <div className="flex flex-col gap-6">
      <h1 className=" text-5xl">This is Static page </h1>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veniam
        fuga, aliquid quas recusandae amet quam at perferendis id, doloribus
        inventore aut ipsam tenetur odio! Necessitatibus quis perspiciatis
        delectus commodi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et illum, aut temporibus officia nobis totam nemo, exercitationem deleniti natus accusamus dolor suscipit corporis. Sint veniam non repellat, esse, consequuntur ut itaque iste aut pariatur vero alias cumque ipsa? Libero, consequatur!
      </div>

      <ul className="text-white">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
