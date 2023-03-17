import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './assets/index.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="RY" width="120" height="96" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/portfolio/web-development" className="dropdown-item">Web Development</Link></li>
                                    <li><Link to="/portfolio/graphic-design" className="dropdown-item">Graphic Design</Link></li>
                                </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" className="nav-link">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header