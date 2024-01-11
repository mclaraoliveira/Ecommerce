import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

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
        <p>PADAWAN STYLE</p>
      </div>
      <ul className="nav-menu">
        <MenuItem label="Loja" active={activeItem === "loja"} onClick={() => setActiveItem("loja")} />
        <MenuItem label="Feminino" active={activeItem === "feminino"} onClick={() => setActiveItem("feminino")} />
        <MenuItem label="Masculino" active={activeItem === "masculino"} onClick={() => setActiveItem("masculino")} />
        <MenuItem label="Infantil" active={activeItem === "infantil"} onClick={() => setActiveItem("infantil")} />
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  );
};
