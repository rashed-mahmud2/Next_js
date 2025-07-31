import { getData } from "@/lib/getData";
import Button from "../../components/button";

export default async function PostUser({userId}) {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await getData(
      `https://jsonplaceholder.typicode.com/users/${userId}`, {}, 2000
    );
    console.log(user);
    
  return (
    <div className="border border-gray-700 p-4">
      <Button>{user.name}</Button>
    </div>
  );
}
