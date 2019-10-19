import React from 'react'
import './header.css'

const Header = () => {
    return (
    <header className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <nav className="header-right">
            <a href="#contact">Login</a>
            <a href="#about">Register</a>
        </nav>
    </header>
    )
}

export default Header;