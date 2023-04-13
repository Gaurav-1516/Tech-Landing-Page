import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';


function Header() {
  return (
    <nav>
        <h1>TERABYTE TECH SERVICES</h1>
        <main>
            <HashLink to={"/#home"} >HOME</HashLink>
            <Link to={"/services"} >SERVICES</Link>
            <Link to={"/contact"} >CONTACT</Link>
            <HashLink to={"/#about"} >ABOUT</HashLink>
            <HashLink to={"/#brands"} >BRANDS</HashLink>
        </main>
    </nav>
  );
}

export default Header;