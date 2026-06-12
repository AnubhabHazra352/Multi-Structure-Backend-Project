import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    
    try{
        // here we connect the mongoDB with the help of mongoose and we use the DB_NAME from the constants file
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         // if the connection is successful we log the host of the database
       console.log(`\n MongoDB connected || DB HOST:${connectionInstance.connection.host}`);

} catch (error){
        console.error("connection error in MONGODB", error)
        throw error
    }
}

export default connectDB