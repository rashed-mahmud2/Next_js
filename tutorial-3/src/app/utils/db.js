import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("I am ready");

    return;
  }
  await mongoose.connect("mongodb://localhost:27017/simple-api");
};

export default connectDb;
