import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { todoRouter } from "./Router/AddTodo.js";
import { userRouter } from "./Router/user.js"
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = 3000;

// Define a simple route
app.use("/todo", todoRouter);
app.use("/user", userRouter);

// Start the server
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB`);
        app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT} for Todo App`));
    } catch (error) {
        console.log("MongoDB connection Error: ", error);
    }
})();
