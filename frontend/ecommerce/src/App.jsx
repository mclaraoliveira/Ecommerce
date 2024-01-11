import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Loja } from './Pages/Loja';
import { CategoriaLoja } from './Pages/CategoriaLojajsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Loja/>} />
        <Route path='/feminino' element={<CategoriaLoja categoria="feminino"/>} />
        <Route path='/masculino' element={<CategoriaLoja categoria="masculino"/>} />
        <Route path='/infantil' element={<CategoriaLoja categoria="infantil"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
