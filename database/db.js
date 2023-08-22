import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () =>{
    const DB_URI =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6edg2x9.mongodb.net/`
try{
   mongoose.connect(DB_URI,{useNewUrlParser: true});
   console.log('Database connected successfully');
}catch (error) {
 console.log('Error while connecting with rhe database',error.message);
}
}

export default Connection;