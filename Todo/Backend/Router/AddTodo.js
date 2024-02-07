import express from "express";
import { TodoModal } from "../Modals/todo.modal.js";

const router = express.Router();

router.get("/readTodos", async (req, res) => {
    try {
        const todoResponse = await TodoModal.find({});
        if (todoResponse.length === 0) {
            return res.status(404).json({ message: "No todos found." });
        }
        console.log("Contents of a todo: ", todoResponse);
        return res.json({ message: "Todos retrieved successfully.", data: todos });

    } catch (error) {
        console.error("Error fetching todos:", error.message);
        res.status(500).json({ error: "Internal Server Error in fetching todos" });
    }
});

router.post("/createTodo", async (req, res) => {
    try {
        const todo = new TodoModal(req.body);
        const response = await todo.save();
        // Log the saved Todo to the console (optional)
        console.log(response);
        res.status(201).json(response);
    } catch (error) {
        console.error("Error creating todo:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


export { router as todoRouter };

