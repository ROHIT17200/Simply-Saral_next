import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const mongoURL = process.env.mongoURL;

const connect = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connection Successful");
  } catch (error) {
    console.log("Connection Unsuccessful", error);
  }
};

export default connect;
