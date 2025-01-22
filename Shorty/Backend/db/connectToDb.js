import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`mongoDb connected Connection String ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to mongoDb ${error.message}`)
    }
}

export default connectDb;