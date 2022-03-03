import React from 'react';
import './header.css'
import Logo from "../../img/fucinho_branco.png"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      <Link to="/" >
        <img className='Header__image' src={Logo} alt="Fucinho de um cachorro" />
      </Link>
      <div className='Header__div' >
        <Link className='Header__div--link' to="/" >Blog</Link>
        <Link className='Header__div--link' to="/sobre" >Sobre</Link>
        <Link className='Header__div--link' to="/agendamentos" >Agendamentos</Link>
      </div>
    </div>
  );
}

export default Header;