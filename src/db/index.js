import mongoose from "mongoose";
import { DB_NAME } from "../constant";


const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDB connection Error")
        process.exit(1)
    }
}

export default connectDB