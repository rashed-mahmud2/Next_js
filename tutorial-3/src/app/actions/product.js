"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addProduct(formData) {
  const product = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    image: formData.get("image"),
  };
  console.log(product);

  await fetch(`http://localhost:3000/api/product`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  // revalidatePath('/')
  revalidateTag("products");
}
