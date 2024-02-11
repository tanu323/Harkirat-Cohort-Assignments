import express from "express";
import { TodoCardModal } from "../Modals/todoCard.modal.js";
import { UserModal } from "../Modals/user.modal.js";

const router = express.Router();

router.get("/readTodos/:userID", async (req, res) => {
    try {
        const user = await UserModal.findById(req.params.userID);
        var savedTodoCards = [];

        if (!user || !user.savedTodos || user.savedTodos.length === 0) {
            return res.status(404).json({ message: "No todos found." });
        }

        await Promise.all(
            user.savedTodos.map(async (todoCardId) => {
                try {
                    const foundTodoCard = await TodoCardModal.findById(todoCardId);
                    if (foundTodoCard) {
                        savedTodoCards.push(foundTodoCard);
                    } else {
                        throw new Error(`Todo card not found with ID: ${todoCardId}`);
                    }
                } catch (error) {
                    throw new Error(
                        `Error finding todo card with ID ${todoCardId}: ${error.message}`
                    );
                }
            })
        );

        if (savedTodoCards.length === 0) {
            return res.status(201).json({
                message: "User has no todos",
                userSavedTodos: savedTodoCards,
            });
        }
        return res.json(savedTodoCards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/createTodo", async (req, res) => {
    try {
        const todo = new TodoCardModal(req.body);
        const user = await UserModal.findById(todo.createdBy)
        user.savedTodos.push(todo._id);
        const response = await todo.save();
        await user.save();
        res.status(201).json(response);
    } catch (error) {
        console.error("Error creating todo:", error.message);
        res.status(500).json({ message: error.message });
    }
})


export { router as todoRouter };




