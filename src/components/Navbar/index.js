import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// Style
import { Header, Nav, NavLogo, BurgerButton } from './Navbar.styles'
import Logo from '../../images/dotalogo.png'

const Navbar = () => {
    const[open, setOpen] = useState(false);

    return (
            <Header>
                <Nav className="container">
                <Link to='/'>
                    <NavLogo>
                        <img src={Logo} alt='dota-logo'/>
                        <p>DOTA DB</p>
                    </NavLogo>
                </Link>
                <nav className="nav">  
                    <BurgerButton onClick={() => setOpen(!open)}>
                        <div className={`bar ${open ? "active" : ""}`}/>
                        <div className={`bar ${open ? "active" : ""}`}/>
                        <div className={`bar ${open ? "active" : ""}`}/>
                    </BurgerButton>
                    <ul className={`collapsed ${open ? "expanded" : ""}`}>
                      <li className='nav-item'>
                          <Link to='/' className="nav-link" onClick={() => setOpen(!open)}>
                              Heroes
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/items' className="nav-link" onClick={() => setOpen(!open)}>
                              Items
                          </Link>
                      </li>
                    </ul>
                </nav>
                </Nav>
            </Header>
    )
}

export default Navbar;