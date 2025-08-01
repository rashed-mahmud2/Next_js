import Link from "next/link";
import Counter from "./components/Counter";

export default async function Home() {
  console.log("I am being rendered");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=5`
  );

  const todos = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className=" text-4xl text-yellow-100">I am home page with jsx</h1>
      <ul className=" list-disc">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Counter />
      <Link className="underline" href={"/about"}>
        Go to about page
      </Link>
    </div>
  );
}
