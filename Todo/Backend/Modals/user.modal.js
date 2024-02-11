import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    savedTodos:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "todoCard"
        }]

}, { timestamps: true });

export const UserModal = mongoose.model("user", UserSchema);
