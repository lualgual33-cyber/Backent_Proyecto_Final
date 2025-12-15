import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB conectada");
  } catch (error) {
    console.error("Error MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
