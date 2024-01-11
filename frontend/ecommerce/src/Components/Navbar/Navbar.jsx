import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, active, onClick }) => (
  <li onClick={onClick}>
    {label}
    {active ? <hr /> : <></>}
  </li>
);

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>PADAWAN SHOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setActiveItem("loja")}}><Link style={{textDecoration: 'none'}} to='/'>Loja</Link>{activeItem === "loja"?<hr/>:<></>}</li>
        <li onClick={()=>{setActiveItem("feminino")}}><Link style={{textDecoration: 'none'}} to='/feminino'>Feminino</Link>{activeItem === "feminino"?<hr/>:<></>}</li>
        <li onClick={()=>{setActiveItem("masculino")}}><Link style={{textDecoration: 'none'}} to='/masculino'>Masculino</Link>{activeItem === "masculino"?<hr/>:<></>}</li>
        <li onClick={()=>{setActiveItem("infantil")}}><Link style={{textDecoration: 'none'}} to='/infantil'>Infantil</Link>{activeItem === "infantil"?<hr/>:<></>}</li>

      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to= '/carrinho'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  );
};
