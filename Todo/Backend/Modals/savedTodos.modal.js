import mongoose from "mongoose";

const savedTodoSchema = new mongoose.Schema({
    savedTodos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todoCard"
    }
}, { timestamps: true });

export const savedTodoModal = mongoose.model("allTodo", savedTodoSchema);
