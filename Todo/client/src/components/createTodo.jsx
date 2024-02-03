import React, { useState } from 'react';
import axios from 'axios';
import Mybutton from './button.jsx';

const TodoForm = () => {
    const [todoForm, setTodoForm] = useState({
        title: "",
        tasks: [],
        completed: false,
        createdBy: window.localStorage.getItem("userID")
    })

    const handleTaskContentChange = (event, i) => {
        const { value } = event.target;
        const tasks = [...todoForm.tasks];
        tasks[i] = value;
        setTodoForm({ ...todoForm, tasks: tasks });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001", todoForm);
            alert("Todo created");
        } catch (error) {
            console.error("Error creating Todo:", error);
            alert("Failed to create Todo. Please try again.");
        }
    }

    const addingTasks = () => {
        setTodoForm({ ...todoForm, tasks: [...todoForm.tasks, ""] })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todoTitle">Todo Title:</label>
                <input
                    type="text"
                    id="todoTitle"
                    name="todoTitle"
                    value={todoForm.title}
                    onChange={(e) => setTodoForm({ ...todoForm, title: e.target.value })}
                />

                <label for="addTask">Todo Title:</label>
                {todoForm.tasks.map((task, i) => (
                    <input
                        key={i}
                        type="text"
                        name="addTask"
                        value={task}
                        onChange={(event) => handleTaskContentChange(event, i)} />
                ))}

                {/* Button to add tasks in a todo */}
                <Mybutton buttonText="Add Tasks" onClickHandler={addingTasks} buttonWidth={10} buttonHeight={10} />

                {/* Button to submit the todo */}
                <Mybutton
                    buttonText="Submit"
                    onClickHandler={handleSubmit}
                    buttonWidth={10}
                    buttonHeight={12}
                    className={`tag w-full h-12 bg-blue-500  flex items-center justify-center`}
                // This way, the Mybutton component can receive additional classes through the className prop and apply them dynamically.

                >
                    <h3 className='text-sm font-semibold'>Submit</h3>
                </Mybutton>
            </form>
        </div>
    )
};
export default TodoForm;
