import React from 'react';
import Background from './components/background.jsx';
import Foreground from './components/Foreground.jsx';


const App = () => {
  return (
    <div className='relative w-screen h-screen bg-zinc-800 text-white'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App

