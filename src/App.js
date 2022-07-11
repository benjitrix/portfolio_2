import React, { useState } from 'react';
import Landing from './Components/Landing'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Credentials from './Components/Credentials'
import Message from './Components/Message';
import './App.css';

function App() {
  const [display, setDisplay] = useState(false)

  const displayMessage = (val) => {
    console.log(val);
    setDisplay(val)
  }

  return (
    <div className='App'>
      <Landing />
      <About />
      <Credentials />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
