"use server";
import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    username:String,
    password:String,
    cookie:{type:String, default:""},
});

let userDataSchema = new mongoose.Schema({
  link:String, 
  time:String,
  cookie:String,
  questions:[{
    index:Number,
    question:String,
    answer:String
  }]
});

let attendanceSchema = new mongoose.Schema({
  time: String,
  links: [
    {
      link: { type: String },
      email: { type: String},
      subject: { type: String },
      questions: [
        {
          index: { type: Number },
          question: { type: String},
          answer: { type: String }
        }
      ],
      done:{type:Boolean,default:false}
    }
  ]
});

const UserData = mongoose.models.UserData || mongoose.model("UserData", userDataSchema, "userData");

const attendance = mongoose.models.attendance || mongoose.model("attendance",attendanceSchema);

let cached = global.mongoose;
  if (!cached) {
    cached = global.mongoose = { connection: null, promise: null };
  }
  
async function connectDB() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const promise = mongoose.connect(process.env.MONGODB_URI);

    cached.promise = promise;
  }

  cached.connection = await cached.promise;
  return cached.connection;
};

  
const User = mongoose.models.User || mongoose.model("User", userSchema);
export { connectDB, User, UserData, attendance};
