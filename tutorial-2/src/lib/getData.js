import wait from "@/utils/wait";

export async function getData(url, option = {}, ms = 0) {
  if(ms > 0) {
    await wait(ms)
  }
  const result = await fetch(url, option);
 if (!result.ok) {
   throw new Error(`HTTP error! status: ${result.status}`);
 }

 const post = await result.json();
 return post;
}
