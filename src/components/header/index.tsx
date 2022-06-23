import React from 'react';
import Logo from "../../img/fucinho_branco.png"
import { Link } from 'react-router-dom';
import { DivMain, DivLinks } from './styles'

function Header() {
  return (
    <DivMain>
      <Link to="/" >
        <img src={Logo} alt="Focinho de um cachorro" />
      </Link>
      <DivLinks>
        <Link className='Header__div--link' to="/" >Blog</Link>
        <Link className='Header__div--link' to="/sobre" >Sobre</Link>
        <Link className='Header__div--link' to="/agendamentos" >Agendamentos</Link>
      </DivLinks>
    </DivMain>
  );
}

export default Header;