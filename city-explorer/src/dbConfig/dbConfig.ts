import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () =>{
            console.log("MongoDB connected successfully!")
        })
        connection.on('error', (err) =>{
            console.log("MongoDB did not connect!")
        })

    }catch (error) {
        console.log("Something goes wrong")
        console.log(error)
    }
}