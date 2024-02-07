import React, { useState } from 'react';
import axios from 'axios';
import Mybutton from './button.jsx';

const TodoForm = ({ setShowTodoForm }) => {
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
            await axios.post("http://localhost:3001/todo/createTodo", todoForm);
            alert("Todo created");
            setShowTodoForm(false);
        } catch (error) {
            console.error("Error creating Todo:", error);
            alert("Failed to create Todo. Please try again.");
        }
    };

    const addingTasks = () => {
        setTodoForm({ ...todoForm, tasks: [...todoForm.tasks, ""] })
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="todoTitle" className="block text-sm font-medium leading-6 text-gray-900">Todo Title:</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="todoTitle"
                                name="todoTitle"
                                value={todoForm.title}
                                onChange={(e) => setTodoForm({ ...todoForm, title: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="addTask" className="block text-sm font-medium leading-6 text-gray-900">Add Task:</label>
                        {todoForm.tasks.map((task, i) => (
                            <input
                                key={i}
                                type="text"
                                name="addTask"
                                value={task}
                                onChange={(event) => handleTaskContentChange(event, i)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        ))}
                    </div>
                    {/* Button to add tasks in a todo */}
                    <Mybutton buttonText="Add Tasks" onClickHandler={addingTasks} buttonWidth={10} buttonHeight={10} />
                    <div>
                        {/* Button to submit the todo */}
                        <Mybutton
                            buttonText="Submit"
                            onClickHandler={() => console.log("CreateTodo Submit Button clicked!")}
                            buttonWidth={10}
                            buttonHeight={12}
                            className={`tag w-full h-16 bg-blue-500  flex items-center justify-center`}
                        // This way, the Mybutton component can receive additional classes through the className prop and apply them dynamically.
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default TodoForm;
