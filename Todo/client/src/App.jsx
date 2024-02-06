import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Background from './components/background.jsx';
import Navbar from './components/navbar.jsx';
import User from './Pages/user.jsx';
import ReadTodos from './Pages/readTodo.jsx';
import CreateTodo from './Pages/createTodo.jsx';

const App = () => {
  return (
    <div className='relative w-screen h-screen bg-zinc-800 text-white'>
      <Router>
        <Background />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/readTodos" element={<ReadTodos />} />
                  <Route path="/createTodo" element={<CreateTodo />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
