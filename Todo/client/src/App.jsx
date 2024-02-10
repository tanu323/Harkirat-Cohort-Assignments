import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Background from './components/background.jsx';
import Navbar from './components/navbar.jsx';
import Home from './Pages/HomePage.jsx';
import ReadTodos from './Pages/readTodo.jsx';
import CreateTodo from './Pages/createTodo.jsx';
import Login from './Pages/login.jsx';
import SignUp from './Pages/signUp.jsx';

const App = () => {
  return (
    <div className='relative w-screen h-screen bg-zinc-800 text-white'>
      {/* <Background /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* 
        <Navbar /> */}

        <Route key="ReadTodos" path="/todo/readTodos" element={<ReadTodos />} />
        <Route key="CreateTodo" path="/todo/createTodo" element={<CreateTodo />} />
      </Routes>
    </div>
  );
}

export default App;
