import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    savedTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "todo"
    }]
}, { timestamps: true });

export const UserModal = mongoose.model("user", UserSchema);
