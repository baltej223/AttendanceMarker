"use server";

import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    username:String,
    password:String,
    cookie:{type:String, default:""},
});

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose.connect('mongodb://127.0.0.1:27017/user');
    console.log("Connected to MongoDB");
  };
  
  const User = mongoose.models.User || mongoose.model("User", userSchema);
  export { connectDB, User };

