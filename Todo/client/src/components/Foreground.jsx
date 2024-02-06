import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar.jsx';
import Header from './header.jsx';
import TodoCard from './readTodo.jsx'

const Foreground = () => {
    const [savedTodos, setSavedTodos] = useState([]);

    useEffect(() => {
        const fetchSavedTodos = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/todo/readTodo`);
                console.log("saved Todo: ", response.data.savedTodos);
                if (response.data && response.data.savedTodos) {
                    setSavedTodos(response.data.savedTodos);
                }
            } catch (error) {
                console.error("Error in reading Todo:", error);
                alert("Failed to read Todo. Please try again.");
            }
        };
        fetchSavedTodos();
    }, []);

    return (
        <section>
            <Navbar />
            <Header />
            {savedTodos.map((todoTobeRendered, index) => (
                <TodoCard key={index} data={todoTobeRendered} />
            ))}

        </section>
    )
}

export default Foreground
