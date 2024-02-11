import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar.jsx';
import Header from './header.jsx';
import TodoCard from './todoCard.jsx'

const TodoList = () => {
    const [savedTodos, setSavedTodos] = useState([]);
    const userID = window.localStorage.getItem('userID')
    useEffect(() => {
        const fetchSavedTodos = async () => {
            try {
                const response = await axios.get(`http://localhost:8001/todo/readTodos/${userID}`);

                console.log("saved Todos: ", response);
                setSavedTodos(response.data);
            } catch (error) {
                console.error("Error in reading Todo:", error);
                alert("Failed to read Todo. Please try again.");
            }
        };
        fetchSavedTodos();
    }, []);

    return (
        // <section>
        //     <Header />
        //     {savedTodos.map((eachTodo, index) => (
        //         <div key={index}>
        //             <div className='footer absolute inset-x-0 bottom-0 h-20'>
        //                 {eachTodo.title}
        //             </div>
        //             <TodoCard tasksTobeRendered={eachTodo.tasks} />
        //         </div>
        //     ))}

        // </section>
        <>

        </>
    )
}

export default TodoList;
