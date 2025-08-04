import Product from "@/app/models/product";
import connectDb from "@/app/utils/db";
import { NextResponse } from "next/server";

// আমরা এখানে NextResponse অথবা  Response যেকোনো একটা ব্যবহার করতে পারি।

// let products = [
//   {
//     id: "1",
//     title: "Product 1",
//     price: 500,
//     descirption: "Product 1 description",
//     image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg",
//   },
//   {
//     id: "2",
//     title: "Product 2",
//     price: 250,
//     descirption: "Product 2 description",
//     image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
//   },
//   {
//     id: "95ef",
//     title: "product 3",
//     description: "this is descirption",
//     price: 455,
//     image:
//       "https://res.cloudinary.com/dcdga3gke/image/upload/v1754138233/btxggapvm3npqdufxcw3.jpg",
//   },
//   {
//     id: "1c7a",
//     title: "adfa",
//     description: "fadffd",
//     price: 45,
//     image:
//       "https://res.cloudinary.com/dcdga3gke/image/upload/v1754138260/pqibvyfknkgce5tsxxbp.jpg",
//   },
//   {
//     id: "a523",
//     title: "adfa",
//     description: "fadffd",
//     price: 45,
//     image:
//       "https://res.cloudinary.com/dcdga3gke/image/upload/v1754138260/pqibvyfknkgce5tsxxbp.jpg",
//   },
//   {
//     id: "9dbb",
//     title: "ekkebare notun thambnail",
//     description: "notun thambnail er description",
//     price: 35,
//     image:
//       "https://res.cloudinary.com/dcdga3gke/image/upload/v1754138860/gt5yrnssuayagobs7cer.webp",
//   },
//   {
//     id: "b202",
//     title: "ekkebare notun thambnail",
//     description: "notun thambnail er description",
//     price: 35,
//     image:
//       "https://res.cloudinary.com/dcdga3gke/image/upload/v1754138860/gt5yrnssuayagobs7cer.webp",
//   },
//   {
//     id: "9c70",
//     title: "i phone",
//     description: "dummy description",
//     price: 1225,
//     image: "https://m.media-amazon.com/images/I/61Ml-IP+73L.jpg",
//   },
//   {
//     id: "5165",
//     title: "I Phone 24",
//     description: "this is descirption",
//     price: 2000,
//     image:
//       "https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_Blue.webp",
//   },
// ];

export async function GET(request) {
  console.log("I am being hit");
  await connectDb();
  const products = await Product.find();
  return NextResponse.json({ data: products });
}

export async function POST(request) {
  const body = await request.json();
  // const product = { id: Date.now() + "", ...body };
  // products.push(product);
  try {
    const newProduct = await Product.create(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" });
  }
}
