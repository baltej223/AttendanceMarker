import mongoose from "mongoose";

async function connectDB(){
    await mongoose.connect("mongodb://127.0.0.1:27017/attendence")// use 127.0.0.1 rathere than localhost, https://mongoosejs.com/docs/connections.html#:~:text=This%20is%20the,with%20ipv6%20enabled.
    .then(()=>{
        console.log("Database connected");
    });
}

let secretKeySchema = mongoose.Schema({
    secretKey:String,
});

let secretKey = mongoose.model("secretKey",secretKeySchema,"secretKeys");

export {connectDB,secretKey}