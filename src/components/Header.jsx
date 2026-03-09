import React, { useState, useEffect } from 'react';
import { Menu, X, CloudCog, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <CloudCog className="logo-icon text-aws-blue" size={32} />
                    <span className="logo-text">Cloud<span className="text-aws-blue">Infra</span></span>
                </Link>

                <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
                    <Link to="/nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link to="/servicios" className="dropdown-trigger">
                            Servicios <ChevronDown size={16} />
                        </Link>

                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <Link to="/servicios#cloud" onClick={() => setMobileMenuOpen(false)}>Cloud & Migración</Link>
                            <Link to="/servicios#software" onClick={() => setMobileMenuOpen(false)}>Fábrica de Software</Link>
                            <Link to="/servicios#automatizacion" onClick={() => setMobileMenuOpen(false)}>Automatización</Link>
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
                </nav>

                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
