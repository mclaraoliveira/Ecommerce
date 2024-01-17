import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loja } from './Pages/Loja';
import { CategoriaLoja } from './Pages/CategoriaLoja';
import { Produto } from './Pages/Produto';
import { Carrinho } from './Pages/Carrinho';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Loja />} />
          <Route path="/feminino" element={<CategoriaLoja banner={women_banner} category="feminino" />} />
          <Route path="/masculino" element={<CategoriaLoja banner={men_banner} category="masculino" />} />
          <Route path="/infantil" element={<CategoriaLoja banner={kid_banner} category="infantil" />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/produto/:produtoId" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;