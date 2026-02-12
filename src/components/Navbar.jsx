
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav id="header" style={{ 
      boxShadow: scrolled ? "0 1px 6px rgba(0, 0, 0, 0.1)" : "none",
      height: scrolled ? "70px" : "90px",
      lineHeight: scrolled ? "70px" : "90px"
    }}>
      <div className="nav-logo">
        <p className="nav-name">Bilaal</p>
        <span>.</span>
      </div>
      <div className={`nav-menu ${menuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link to="/work" className={`nav-link ${isActive('/work')}`} onClick={() => setMenuOpen(false)}>Work</Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link to="/journey" className={`nav-link ${isActive('/journey')}`} onClick={() => setMenuOpen(false)}>Journey</Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link to="/now" className={`nav-link ${isActive('/now')}`} onClick={() => setMenuOpen(false)}>Now</Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setMenuOpen(false)}>Contact</Link>
            <div className="circle"></div>
          </li>
        </ul>
      </div>

      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuOpen ? toggleMenu : toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Navbar;
