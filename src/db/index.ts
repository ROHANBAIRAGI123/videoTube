import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Database connected succesfully ! /n ${connection.connection.listCollections}`
    );
  } catch (error) {
    console.log(`Database not connected, ${error}`);
    process.exit(1);
  }
};

export default connectDB;
