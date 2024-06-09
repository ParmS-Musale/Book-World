import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';





const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
app.use(cors());
app.use(express.json());        
app.use(express.static(path.join(__dirname, "../frontend/dist")));

dotenv.config();

const PORT = process.env.PORT || 4000;
console.log(`Configured PORT: ${PORT}`); // Debug information



const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

// defining routes

app.use("/book" ,bookRoute);
app.use("/user" ,userRoute);




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  connect();
});


