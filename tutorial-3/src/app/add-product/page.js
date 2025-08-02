// "use client";
// import Image from "next/image";
// import { useState } from "react";

import { addProduct } from "../actions/product";

const AddProductForm = () => {
  // const [product, setProduct] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  //   image: "",
  // });

  // const handleChange = (e) => {
  //   setProduct({
  //     ...product,
  //     [e.target.name]:
  //       e.target.name === "price" ? Number(e.target.value) : e.target.value,
  //   });
  // };

  // const handleChangeImage = async (e) => {
  //   const file = e.target.files[0];
  //   // console.log(file, "image");

  //   const data = new FormData();

  //   data.append("file", file);
  //   data.append("cloud_name", "dcdga3gke");
  //   data.append("upload_preset", "simple-app-with-firebase");

  //   const res = await fetch(
  //     `https://api.cloudinary.com/v1_1/dcdga3gke/image/upload`,
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const result = await res.json();
  //   // console.log(result);
  //   setProduct({ ...product, image: result.secure_url });
  // };

  //   const submitHandler = async (e) => {
  //     e.preventDefault();

  //     if (!product.image) {
  //     //   toast(`Image is not done uploading, please wait...`);
  //       return;
  //     }
  //     await addProduct(product);
  //     // toast("product added successfully");
  //     navigate("/");
  //   };

  return (
    <>
      <form
        className="max-w-5xl mx-auto"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   addProduct(product);
        // }}
        action={addProduct}
      >
        <div className="flex gap-3 items-center ">
          <p>Title:</p>
          <input
            className="border-1 border-gray-300 p-3 rounded-md"
            // value={product.title}
            // onChange={handleChange}
            name="title"
            style={{ display: "block", width: "80%" }}
            required
          />
        </div>
        <br />
        <div className="flex gap-3 items-center">
          <p>Price:</p>
          <input
            className="border-1 border-gray-300 p-3 rounded-md"
            // value={product.price}
            // onChange={handleChange}
            name="price"
            style={{ display: "block", width: "80%" }}
            type="number"
            required
          />
        </div>
        <br />

        <div className="flex gap-3 items-center">
          <p>Description:</p>
          <input
            className="border-1 border-gray-300 p-3 rounded-md"
            // value={product.description}
            // onChange={handleChange}
            name="description"
            style={{ display: "block", width: "80%" }}
            type="text"
            required
          />
        </div>
        <br />
        <div className="flex gap-3 items-center">
          <p className=" whitespace-nowrap">Image URL:</p>
          <input
            className="border-1 border-gray-300 p-3 rounded-md"
            name="image"
            // onChange={handleChangeImage}
            style={{ display: "block", width: "80%" }}
            type="text"
            required
          />
        </div>
        {/* <br />
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
          />
        )} */}
        <input
          type="submit"
          className="border-2 border-slate-600 px-10 py-2 hover:bg-slate-600 hover:text-white transition-all duration-200 rounded-md text-lg"
        />
      </form>
    </>
  );
};

export default AddProductForm;
