import express from "express";
import { TodoCardModal } from "../Modals/todoCard.modal.js";
import { UserModal } from "../Modals/user.modal.js";

const router = express.Router();

router.get("/readTodos/:userID", async (req, res) => {
    try {
        const user = await UserModal.findById(req.params.userID);
        if (user.savedTodos.length === 0) {
            return res.status(404).json({ message: "No todos found." });
        }
        else {
            var savedTodoCards = [];

            user.savedTodos.map(async (todoCardId) => {
                try {
                    const foundTodoCard = await TodoCardModal.findById(todoCardId);
                    if (foundTodoCard) {
                        savedTodoCards.push(foundTodoCard);
                        console.log("SavedTodoCards: ", savedTodoCards);
                    } else {
                        console.log(`Todo card with ID ${todoCardId} not found.`);
                    }
                } catch (error) {
                    console.error(`Error finding todo card with ID ${todoCardId}:`, error);
                }
            });

            return res.json({ message: "Todos retrieved successfully.", userSavedTodos: savedTodoCards });

        }

    } catch (error) {
        console.error("Error fetching todos:", error.message);
        res.status(500).json({ error: "Internal Server Error in fetching todos" });
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

