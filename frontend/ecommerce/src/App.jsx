import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App
