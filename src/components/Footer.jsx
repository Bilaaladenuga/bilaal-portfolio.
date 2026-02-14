
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
  return (
    <footer>
        <div className="top-footer">
            <p>Bilaal Adenuga .</p>
        </div>
        <div className="middle-footer">
            <ul className="footer-menu">
                <li className="footer_menu_list">
                    <Link to="/">Home</Link>
                </li>
                <li className="footer_menu_list">
                    <Link to="/work">Work</Link>
                </li>
                <li className="footer_menu_list">
                    <Link to="/journey">Journey</Link>
                </li>
                 <li className="footer_menu_list">
                    <Link to="/now">Now</Link>
                </li>
                <li className="footer_menu_list">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="footer-social-icons">
            <div className="icon">
                <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
            <div className="icon">
                <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <i className="uil uil-linkedin-alt"></i>
                </a>
            </div>
            <div className="icon">
                <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
        </div>
        <div className="bottom-footer">
            <p>Copyright © <Link to="/" style={{textDecoration: 'none'}}>BILAAL ADENUGA X MOBO DIGITAL</Link> - All rights reserved
            </p>
        </div>
    </footer>
  );
};

export default Footer;
