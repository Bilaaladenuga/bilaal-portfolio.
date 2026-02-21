
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic for Home page
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'projects'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return 'active-link';
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav id="header" className={scrolled ? 'scrolled' : ''} style={{
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
    }}>
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1px' }}>
          <p className="nav-name">bilaal</p>
          <span className="nav-dot">.</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className={`nav-menu ${menuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          {[
            ['/', 'Home'],
            ['/work', 'Work'],
            ['/journey', 'Journey'],
            ['/now', 'Now'],
            ['/contact', 'Contact'],
            ['/resume', 'Resume']
          ].map(([path, label]) => (
            <li key={path} className="nav_list">
              <Link
                to={path}
                className={`nav-link ${isActive(path)}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div className="nav-menu-btn" onClick={toggleMenu}>
          <i className={`uil ${menuOpen ? 'uil-times' : 'uil-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
