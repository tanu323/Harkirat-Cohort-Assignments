import mongoose from "mongoose";

// Define the Todo schema
const todoCardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: String,
            required: true
        }
    ],
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Todo model
export const TodoCardModal = mongoose.model('todoCard', todoCardSchema);