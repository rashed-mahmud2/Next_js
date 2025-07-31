
import { getData } from "@/lib/getData";
import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";


export default async function ISR() {
  // we can fetch data here anytime
  const posts = await getData(`http://localhost:8000/posts`);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl">This is ISR page</h1>

      <ul className="text-white">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/isr/posts/${post.id}`}>
              {post.title} {/* Only needed in older Next.js versions */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}