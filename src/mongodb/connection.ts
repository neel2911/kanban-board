import mongoose from "mongoose";

const dbURI =
  "mongodb+srv://kanban:kanban1225@kanban.vdwmzpa.mongodb.net/kanban?retryWrites=true&w=majority";
const connection = {
  isConnected: false,
};
const connectDB = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const res = await mongoose.connect(dbURI);
    connection.isConnected = !!res.connections[0].readyState;
    console.log("Connected to MongoDB :: ", connection.isConnected);
  } catch (error) {
    throw new Error(`There is some error ${error}`);
  }
};

export default connectDB;
