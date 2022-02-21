import React from 'react';
import './header.css'
import Logo from "../../img/fucinho_branco.png"

function Header() {
  return (
    <div className='Header'>
      <img className='Header--image' src={Logo} alt="Fucinho de um cachorro" />
      <div className='Header--div' >
        <span>Blog</span>
        <span>Sobre</span>
        <span>Agendamentos</span>
      </div>
    </div>
  );
}

export default Header;